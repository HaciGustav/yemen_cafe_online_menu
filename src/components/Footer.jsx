import { Box, IconButton } from '@mui/material';
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
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
            }}>
            <IconButton onClick={() => navigate('/admin')}>
                <AdminPanelSettingsIcon sx={{ color: '#fff' }} />
            </IconButton>
        </Box>
    );
};

export default Footer;
