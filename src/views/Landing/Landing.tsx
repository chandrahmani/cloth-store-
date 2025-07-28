import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Home from '@/components/Home/Home';

const Landing: FC = () => {
  return (
    <Box p={3} gap={3}>
      <Typography variant="h3">Hello, Welcome To My Cloth Store !</Typography>

      <Home />
    </Box>
  );
};

export default Landing;
