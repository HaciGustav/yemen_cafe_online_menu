import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                height: '10vh',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                color: '#fff',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <Typography sx={{ fontSize: '0.7rem' }}>
                    Leibnizgasse 7, 1100 Wien
                </Typography>
                <Typography sx={{ fontSize: '0.7rem' }}>
                    Tel: 01 929 35 77
                </Typography>
            </Box>

            <IconButton
                sx={{ backgroundColor: '#333' }}
                onClick={() => navigate('/admin')}>
                <AdminPanelSettingsIcon sx={{ color: '#fff' }} />
            </IconButton>
        </Box>
    );
};

export default Footer;
