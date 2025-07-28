import { Product } from '@/types/index';
import { Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
interface Props {
  productList?: Product;
}
const ProductCard: React.FC<Props> = ({ productList }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={productList?.image} alt={productList?.name} />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {productList?.name}
        </Typography>
        <Typography variant="body2">{productList?.description}</Typography>
        <Typography variant="subtitle1">₹{productList?.price}</Typography>
        <Button variant="contained">Add to Cart</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
