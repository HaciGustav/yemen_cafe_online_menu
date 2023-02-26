import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                height: '10vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
            }}>
            <Button variant="contained" onClick={() => navigate('/admin')}>
                admin
            </Button>
        </Box>
    );
};

export default Footer;
