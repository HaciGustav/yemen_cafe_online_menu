import { Box } from '@mui/material';
import React from 'react';
import { GridLoader } from 'react-spinners';

const Loading = () => {
    const style = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

        borderRadius: '50%',
        zIndex: '10',
        width: '10rem',
        height: '10rem',
        boxShadow: '2px 0 15px #ffffff9d',
        backgroundColor: '#000000b7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                backgroundColor: '#000000a7',
                zIndex: '9',
            }}>
            <Box sx={{ ...style }}>
                <GridLoader size={25} speedMultiplier={1.1} color="#fff" />
            </Box>
        </Box>
    );
};

export default Loading;
