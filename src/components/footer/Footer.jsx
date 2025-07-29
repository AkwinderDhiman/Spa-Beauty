import React from 'react';
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Divider,
  Link,
  Container,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

function Footer() {
  const pink = '#ff4f9d';

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', pt: 6, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            {[
              'Facials',
              'Waxing',
              'Message',
              'Minarel baths',
              'Body treatments',
              'Aroma Therapy',
              'Stone Spa',
            ].map((item, i) => (
              <Typography
                key={i}
                variant="body2"
                sx={{
                  color: '#ccc',
                  mb: 0.5,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: pink,
                    transform: 'translateX(6px)',
                  },
                }}
              >
                &rsaquo; {item}
              </Typography>
            ))}
          </Grid>

          {/* Opening Hours & Address */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Opening Hours
            </Typography>
            <Typography variant="body2">Monday: 09:00 am – 10:00 pm</Typography>
            <Typography variant="body2">Saturday: 09:00 am – 08:00 pm</Typography>
            <Typography variant="body2" gutterBottom>
              Sunday: 09:00 am – 05:00 pm
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Address
            </Typography>
            <Box display="flex" alignItems="flex-start">
              <LocationOn sx={{ color: pink, mr: 1, mt: '2px' }} />
              <Typography variant="body2">
                123 Ranking Street, abc
              </Typography>
            </Box>
          </Grid>

          {/* Social */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            {['Facebook', 'Instagram', 'Twitter'].map((item, i) => (
              <Typography
                key={i}
                variant="body2"
                sx={{
                  color: '#ccc',
                  mb: 0.5,
                  cursor: 'pointer',
                  '&:hover': { color: pink },
                }}
              >
                &rsaquo; {item}
              </Typography>
            ))}
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <Email sx={{ color: pink, mr: 1 }} />
              <Typography variant="body2">akwinder128@gmail.com</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Phone sx={{ color: pink, mr: 1 }} />
              <Typography variant="body2">(+91) 9876543210</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ borderColor: '#333', my: 4 }} />

        {/* Footer Bottom */}
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          textAlign="center"
          gap={2}
        >
          {/* Left */}
          <Typography variant="body2">
            © <span style={{ color: pink }}>Spa & Beauty</span>, All rights reserved.
          </Typography>

          {/* Icons */}
          <Box>
            {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, i) => (
              <IconButton
                key={i}
                sx={{
                  backgroundColor: '#fff',
                  color: pink,
                  mx: 0.5,
                  '&:hover': {
                    backgroundColor: pink,
                    color: '#fff',
                  },
                }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Box>

          {/* Right */}
          <Typography variant="body2">
            Designed by{' '}
            <Link href="#" sx={{ color: pink }}>
              Akwinder
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
