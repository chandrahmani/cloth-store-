import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '@/types/index';
import { getProducts } from '@/services/app.services';

function HomePage() {
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

export default HomePage;
