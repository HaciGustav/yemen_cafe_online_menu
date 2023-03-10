import { Box } from '@mui/material';

const CarouselItem = ({ item }) => {
    const imgStyle = {
        height: { xs: '25vh', sm: '27vh', md: '40' },
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        width: '50%',
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    columnGap: '5px',
                    cursor: 'pointer',
                    width: '100%',
                }}>
                {item.map((image, i) => {
                    return (
                        <Box
                            key={i}
                            sx={{
                                ...imgStyle,
                                backgroundImage: `url(${image})`,
                            }}></Box>
                    );
                })}
            </Box>
        </>
    );
};

export default CarouselItem;
