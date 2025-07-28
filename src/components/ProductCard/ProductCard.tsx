import { useCart } from '@/ProductContext/ProductContext';
import { Product } from '@/types';
import { Typography, Card, CardMedia, CardContent, Button } from '@mui/material';

function ProductCard({ productList }: { productList: Product }) {
  const { addToCart } = useCart();

  return (
    <Card>
      <CardMedia component="img" height="140" image={productList.image} alt={productList.name} />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {productList.name}
        </Typography>
        <Typography variant="body2">{productList.description}</Typography>
        <Typography variant="subtitle1">₹{productList.price}</Typography>
        <Button variant="contained" onClick={() => addToCart(productList)}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
