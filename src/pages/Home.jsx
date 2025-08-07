import React from 'react';
import Carousel from "react-material-ui-carousel";
import { Box, Typography, Button, Paper } from "@mui/material";

import img1 from "../assets/carousel-1.jpg";
import img2 from "../assets/carousel-2.jpg";
import img3 from "../assets/carousel-3.jpg";

const slides = [
  {
    heade: "Spa & Beauty Center",
    title: "Massage Treatment",
    subtitle: "Relax. Refresh. Renew.",
    image: img1,
  },
  {
    heade: "Spa & Beauty Center",
    title: "Facial Treatment",
    subtitle: "Glow from head to toe",
    image: img2,
  },
  {
    heade: "Spa & Beauty Center",
    title: "Natural & Organic Treatment",
    subtitle: "Glowing and relax",
    image: img3,
  },
];

function SlideItem({ item, isVisible }) {
  return (
    <Paper
      sx={{
        height: "100vh",
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: isVisible ? "flex" : "none",
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
          variant="h6"
          sx={{ color: "#ff4f9d", fontWeight: 600, mb: 1 }}
        >
          {item.heade}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 2,
            lineHeight: 1.2,
            fontSize: { xs: "2.2rem", sm: "3rem", md: "3.5rem" },
          }}
        >
          {item.title}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ mb: 4, color: "#f5f5f5", fontSize: "1.2rem" }}
        >
          {item.subtitle}
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ff4f9d",
            px: 4,
            py: 1.5,
            fontWeight: 600,
            borderRadius: 8,
            "&:hover": {
              backgroundColor: "#e13e84",
            },
          }}
        >
          GET STARTED
        </Button>
      </Box>
    </Paper>
  );
}

export default function HomeCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Carousel
        animation="fade"
        interval={5000}
        duration={700}
        navButtonsAlwaysVisible
        indicators={true}
        fullHeightHover={false}
        autoPlay={true}
        swipe={true}
        onChange={(now) => setCurrentIndex(now)}
      >
        {slides.map((item, index) => (
          <SlideItem
            key={index}
            item={item}
            isVisible={index === currentIndex}
          />
        ))}
      </Carousel>
    </Box>
  );
}
