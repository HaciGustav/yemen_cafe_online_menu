import { Box } from '@mui/material';
import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const Loading = () => {
    const style = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // border: '2px solid red',
        borderRadius: '50%',
        zIndex: '10',
        padding: '2rem',
        boxShadow: '2px 0 15px #74000088',
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
                <ClimbingBoxLoader
                    size={20}
                    speedMultiplier={1.1}
                    color="#9c0000"
                />
            </Box>
            <Box
                sx={{
                    ...style,
                    transform: 'translate(-50%, -50%) rotate(180deg)',
                }}>
                <ClimbingBoxLoader
                    size={20}
                    speedMultiplier={1.1}
                    color="#9c0000"
                />
            </Box>
        </Box>
    );
};

export default Loading;
