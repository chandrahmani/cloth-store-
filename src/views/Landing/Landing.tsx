import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import HomePage from '@/components/HomePage/HomePage';

const Landing: FC = () => {
  return (
    <Box p={3} gap={3}>
      <Typography variant="h3">Hello, Welcome To My Cloth Store</Typography>
      <HomePage />
    </Box>
  );
};

export default Landing;
