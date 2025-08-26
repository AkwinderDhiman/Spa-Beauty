import React from 'react';
import { Card, CardContent, Typography, Button, Box, Paper } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import backgroundImage from "../assets/appointment-background.jpg";

const plans = [
  {
    price: 49,
    title: "Basic Plan",
    features: [
      "Tissue Body Polish",
      "Foot & Nail Care"
    ]
  },
  {
    price: 99,
    title: "Family Plan",
    features: [
      "Hot Stone Massage",
      "Tissue Body Polish",
      "Foot & Nail Care"
    ]
  },
  {
    price: 149,
    title: "VIP Plan",
    features: [
      "Deep Tissue Massage",
      "Hot Stone Massage",
      "Tissue Body Polish",
      "Foot & Nail Care"
    ]
  },
  {
    price: 199,
    title: "Most Plan",
    features: [
      "Full Body Massage",
      "Deep Tissue Massage",
      "Hot Stone Massage",
      "Tissue Body Polish",
      "Foot & Nail Care"
    ]
  }
];

const Price = () => {
  return (
    <>
      {/* Header Section */}
      <Paper
        sx={{
          height: "50vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
        />
        <Box sx={{ zIndex: 2, px: 2 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 2,
              lineHeight: 1.2,
              fontSize: { xs: "2.2rem", sm: "3rem", md: "3.5rem" },
            }}
          >
            Our Price Plan
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ mb: 4, color: "#f5f5f5", fontSize: "1.2rem" }}
          >
            Discover the art of relaxation and self-care with us
          </Typography>
        </Box>
      </Paper>

      {/* Pricing Section */}
      <Box sx={{ background: "#ff4f9d", py: 8 }}>
        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            px: 2,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: 3,
          }}
        >
          {plans.map((plan, index) => (
            <Card key={index} sx={{ borderRadius: 2, overflow: "hidden" }}>
              {/* Header */}
              <Box
                sx={{
                  bgcolor: "white",
                  textAlign: "center",
                  p: 3,
                  borderBottom: "2px solid #ff4f9d",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ display: "inline-flex", alignItems: "flex-start" }}
                >
                  <Typography component="span" variant="h6" sx={{ mr: 0.5 }}>
                    $
                  </Typography>
                  {plan.price}
                  <Typography component="span" variant="subtitle2" sx={{ ml: 0.5 }}>
                    /Month
                  </Typography>
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textTransform: "uppercase",
                    color: "#ff4f9d",
                    ml: 1,
                    fontWeight: "bold",
                  }}
                >
                  {plan.title}
                </Typography>
              </Box>

              {/* Body */}
              <CardContent sx={{ bgcolor: "#ff80bf", color: "white", p: 3 , minHeight:250}}>
                {plan.features.map((feature, i) => (
                  <Typography
                    key={i}
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                  >
                    <CheckCircleIcon sx={{ color: "white", mr: 1 }} /> {feature}
                  </Typography>
                ))}

                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mb: 0.5,
                    borderRadius: 5,
                    bgcolor: "#ff4f9d",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": { bgcolor: "#e60073" },
                  }}
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Price;
