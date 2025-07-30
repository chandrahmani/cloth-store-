import { FC } from 'react';
import { Box } from '@mui/material';
import Home from '@/components/Home/Home';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

const images = [
  {
    img: 'https://www.inspacestore.in/_next/image?url=%2Fassets%2Fprojects%2FHouseOfClothing%2FHOC13.JPG&w=3840&q=75',
  },
  {
    img: 'https://www.shopmagnolias.com/cdn/shop/t/6/assets/slide3.jpg?v=138766673436268367171684431818',
  },
  {
    img: 'https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/c/6/c64d34cb13bc84d4fcd6ae8babf417d468cec54f089fce3d6477381c073ff15e/clothing-store-business-plan-slide3.png',
  },
];

const Landing: FC = () => {
  return (
    <Box sx={{ p: 3, gap: 3, display: 'flex', flexDirection: 'column' }}>
      <ImageSlider images={images.map((image) => image.img)} />
      <Home />
    </Box>
  );
};

export default Landing;
