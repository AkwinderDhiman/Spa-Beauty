import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Container,
  Grid,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

import {
  LocationOn,
  Phone,
  Email,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Menu,
  Search,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Price', path: '/price' },
  { label: 'Pages', path: '/pages' },
  { label: 'Contact Us', path: '/contact-us' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      {/* Topbar */}
      <Box sx={{ backgroundColor: '#884cd2', py: 1, color: '#fff', display: { xs: 'none', md: 'block' } }}>
        <Container>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item md={8}>
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Link href="#" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOn fontSize="small" sx={{ color: '#ff4f9d', mr: 1 }} />
                  Find A Location
                </Link>
                <Link href="#" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
                  <Phone fontSize="small" sx={{ color: '#ff4f9d', mr: 1 }} />
                  +01234567890
                </Link>
                <Link href="#" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
                  <Email fontSize="small" sx={{ color: '#ff4f9d', mr: 1 }} />
                  Example@gmail.com
                </Link>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                <IconButton size="small" sx={{ color: '#ff4f9d',
                  border: '1px solid #dee2e6 !important', }}><Facebook fontSize="small" /></IconButton>
                <IconButton size="small" sx={{ color: '#ff4f9d' ,
                  border: '1px solid #dee2e6 !important'}}><Twitter fontSize="small" /></IconButton>
                <IconButton size="small" sx={{ color: '#ff4f9d',
                  border: '1px solid #dee2e6 !important' }}><Instagram fontSize="small" /></IconButton>
                <IconButton size="small" sx={{ color: '#ff4f9d',
                  border: '1px solid #dee2e6 !important' }}><LinkedIn fontSize="small" /></IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Navbar */}
      <AppBar position="static" color="default" sx={{ boxShadow: 'none' }}>
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <Typography
              variant="h4"
              sx={{ color: '#ff4f9d', fontWeight: 'bold', fontFamily: 'cursive', flexGrow: { xs: 1, md: 0 } }}
            >
              SPA
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={NavLink}
                  to={item.path}
                  sx={{
                    textTransform: 'none',
                    color: 'inherit',
                    '&.active': {
                      color: '#ff4f9d',
                      fontWeight: 'bold',
                      borderBottom: '2px solid #ff4f9d',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>


            {/* Right Icons */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <IconButton sx={{ backgroundColor: '#ff4f9d', color: '#fff' ,'&:hover': { backgroundColor: '#884cd2' },}}>
                <Search />
              </IconButton>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ff4f9d',
                  borderRadius: 5,
                  textTransform: 'none',
                  px: 3,
                  display: { xs: 'none', md: 'inline-flex' },
                  '&:hover': { backgroundColor: '#884cd2' },
                }}
              >
                Book Appointment
              </Button>

              {/* Hamburger for mobile */}
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: 'flex', md: 'none' } }}
                onClick={toggleDrawer(true)}
              >
                <Menu />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {navItems.map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{ backgroundColor: '#ff4f9d', textTransform: 'none' }}
            >
              Book Appointment
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
