import * as React from 'react';
import { Badge, Box } from '@mui/material';
import { Link } from 'react-router';

import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
import ShoppingBagIcon from '@mui/material/SvgIcon';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { DASHBOARD_NESTED_ROUTES, MAIN_ROUTES } from '../../config/router.config';
import { useCart } from '@/ProductContext/ProductContext';

const drawerWidth = 240;
const navItems = [...MAIN_ROUTES, DASHBOARD_NESTED_ROUTES[0]];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { cart } = useCart();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        RTW
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ path, title, name }) => (
          <ListItem key={name}>
            <Link key={name} to={path}>
              {title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }} mb={8} data-testid="navigation">
      <CssBaseline />
      <AppBar component="nav" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            Nav
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ReactTW
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(({ name, title, path }) => (
              <Link
                key={name}
                to={path}
                style={{
                  padding: '0 5px',
                  textDecoration: 'none',
                  fontSize: '18px',
                  color: '#fff',
                }}
              >
                {title}
              </Link>
            ))}
          </Box>

          <IconButton color="inherit" aria-label="cart" component={Link} to="/checkout">
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingBagIcon>
                <path d="M7 18c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2H7zm0-2h10V7H7v9zm5-7c.55 0 1 .45 1 1h-2c0-.55.45-1 1-1z" />
              </ShoppingBagIcon>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
