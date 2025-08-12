import React from "react";
import { Container, Grid, Typography, Box, Button, Paper } from "@mui/material";
import backgroundImage from "../assets/appointment-background.jpg";
import serviceImg1 from "../assets/services-1.jpg";
import serviceImg2 from "../assets/services-2.jpg";
import serviceImg3 from "../assets/services-3.jpg";
import serviceImg4 from "../assets/services-4.jpg";
import serviceImg5 from "../assets/services-5.jpg";
import serviceImg6 from "../assets/services-6.jpg";

const items = [
  {
    title: "Facials",
    description: "Rejuvenating skin treatments for a radiant glow.",
    img: serviceImg1,
  },
  {
    title: "Waxing",
    description: "Smooth skin with our gentle waxing services.",
    img: serviceImg2,
  },
  {
    title: "Massage",
    description: "Relax your muscles with our massage therapies.",
    img: serviceImg3,
  },
  {
    title: "Mineral Baths",
    description: "Detoxify and soothe in our natural mineral baths.",
    img: serviceImg4,
  },
  {
    title: "Body Treatments",
    description: "Pamper your body with exfoliation and hydration.",
    img: serviceImg5,
  },
  {
    title: "Aroma Therapy",
    description: "Calm your senses with aromatic essential oils.",
    img: serviceImg6,
  },
  {
    title: "Stone Spa",
    description: "Warm stone therapies to melt away stress.",
    img: serviceImg1,
  },
];

const Services = () => {
  return (
    <>
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
            Our Services
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ mb: 4, color: "#f5f5f5", fontSize: "1.2rem" }}
          >
            new
          </Typography>
        </Box>
      </Paper>

      {/* Services Section */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 200, mb: 1, color: "#ff4f9d", textAlign: "center" }}
        >
          OUR SERVICE
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            mb: 4,
            color: "#020202",
            textAlign: "center",
          }}
        >
          Spa & Beauty Services
        </Typography>

        <Grid container spacing={4}>
          {items.map((item, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Box
                sx={{
                  p: { xs: 2, sm: 3 },
                  bgcolor: "#fff",
                  borderRadius: 2,
                  border: "2px solid #ff4f9d",
                  display: "flex",
                  flexDirection: { xs: "column-reverse", sm: "row" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                    transform: "translateY(-5px)",
                    bgcolor: "#ff4f9d",
                    "& h6": { color: "#fff" },
                    "& p": { color: "#fff" },
                    "& button": {
                      backgroundColor: "#fff",
                      color: "#ff4f9d",
                    },
                  },
                }}
              >
                {/* Left: Text Content */}
                <Box sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      mb: 2,
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#e13e84",
                      px: { xs: 3, sm: 4 },
                      py: { xs: 0.8, sm: 1 },
                      fontWeight: 600,
                      borderRadius: "50px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#e13e84",
                      },
                    }}
                  >
                    Make Order
                  </Button>
                </Box>

                {/* Right: Image */}
                <Box
                  sx={{
                    width: { xs: "100%", sm: 120 },
                    height: { xs: 180, sm: 120 },
                    borderRadius: 2,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={item?.img}
                    alt={item?.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e13e84",
              px: 4,
              py: 1,
              fontWeight: 600,
              borderRadius: "50px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#e13e84",
              },
            }}
          >
            Show more
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Services;
