import { getProducts } from '@/services/app.services';
import { Product } from '@/types';
import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

function Home() {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProductList);
  }, []);
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {productList.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard productList={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
