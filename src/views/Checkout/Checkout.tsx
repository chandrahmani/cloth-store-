import { FC } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useCart } from '@/ProductContext/ProductContext';

const Checkout: FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="h6">Your cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {cart.map((item) => (
              <Grid key={item.id} spacing={3}>
                <Card sx={{ display: 'flex', alignItems: 'center' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 100 }}
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2">
                      Price: ₹{item.price} × {item.quantity}
                    </Typography>
                    <Typography variant="subtitle1">
                      Subtotal: ₹{item.price * item.quantity}
                    </Typography>
                    <Button
                      color="error"
                      variant="outlined"
                      sx={{ mt: 1 }}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 4, textAlign: 'right' }}>
            <Typography variant="h6">Total: ₹{totalPrice}</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => {
                alert('Payment Successfull!');
                if (clearCart) clearCart();
              }}
            >
              Proceed to Payment
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Checkout;
