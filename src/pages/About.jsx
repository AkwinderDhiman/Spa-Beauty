import React from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  Paper,
  IconButton,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import BugReportIcon from "@mui/icons-material/BugReport";
import SpaIcon from "@mui/icons-material/Spa";
import StarIcon from "@mui/icons-material/Star";
import backgroundImage from "../assets/appointment-background.jpg";
import img1 from "../assets/about-1.jpg";
import img2 from "../assets/about-2.jpg";

const features = [
  {
    icon: (
      <BugReportIcon sx={{ fontSize: 50, color: "#ff4f9d", flexShrink: 0 }} />
    ),
    title: "Special Offers",
    description: "Exclusive deals to make your self-care more affordable.",
  },
  {
    icon: (
      <CardGiftcardIcon
        sx={{ fontSize: 50, color: "#ff4f9d", flexShrink: 0 }}
      />
    ),
    title: "Gift Packages",
    description: "Perfect surprises for your loved ones on any occasion.",
  },
  {
    icon: <SpaIcon sx={{ fontSize: 50, color: "#ff4f9d", flexShrink: 0 }} />,
    title: "Wellness Treatments",
    description: "Holistic therapies designed to rejuvenate mind and body.",
  },
  {
    icon: <StarIcon sx={{ fontSize: 50, color: "#ff4f9d", flexShrink: 0 }} />,
    title: "Expert Therapists",
    description: "Skilled professionals dedicated to your comfort and glow.",
  },
];

const About = () => {
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
            About Us
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ mb: 4, color: "#f5f5f5", fontSize: "1.2rem" }}
          >
            Discover the art of relaxation and self-care with us
          </Typography>
        </Box>
      </Paper>

      {/* Services Section */}
      <Box sx={{ bgcolor: "background.default", py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6} alignItems="center">
          {/* LEFT COLUMN (Images + Play Button) */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", textAlign: "center" }}>
              <Box
                component="img"
                src={img1}
                alt="Spa Main"
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  borderRadius: 3,
                  boxShadow: 3,
                  margin: 5,
                }}
              />
              {/* Overlay Small Image */}
              <Box
                component="img"
                src={img2}
                alt="Spa Small"
                sx={{
                  width: "45%",
                  borderRadius: 2,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  border: "5px solid #fff",
                  boxShadow: 3,
                }}
              />
              {/* Play Button */}
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: "#ff4f9d",
                  color: "#fff",
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  "&:hover": { bgcolor: "#e63980" },
                  // Pulse effect
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: "2px solid #ff4f9d",
                    animation: "pulse 1.5s infinite",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: "2px solid #ff4f9d",
                    animation: "pulse 1.5s infinite",
                    animationDelay: "0.75s",
                  },
                  "@keyframes pulse": {
                    "0%": { transform: "scale(1)", opacity: 1 },
                    "100%": { transform: "scale(1.8)", opacity: 0 },
                  },
                }}
              >
                <PlayArrowIcon
                  sx={{ fontSize: 60, position: "relative", zIndex: 2 }}
                />
              </IconButton>
            </Box>
          </Grid>

          {/* RIGHT COLUMN (Content) */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 700, mx: { xs: "auto", md: 0 } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 200,
                  mb: 1,
                  color: "#ff4f9d",
                  textAlign: "center",
                }}
              >
                ABOUT US
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  color: "#020202",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Your Trusted Spa, Beauty & Skin Care Center
              </Typography>

              <Typography sx={{ mb: 3, color: "text.secondary" }}>
                We believe beauty is more than just appearance — it’s about how
                you feel inside and out. At our spa, we are dedicated to
                creating a serene escape where you can unwind, recharge, and
                rejuvenate your body, mind, and soul. With a blend of modern
                techniques and timeless wellness practices, our experienced
                professionals provide personalized treatments that leave you
                glowing with confidence. From relaxing massages to advanced skin
                care therapies, we ensure every visit is a step toward a
                healthier, happier you.
              </Typography>

              {/* ICON ROW (Special Offers) */}
              <Grid container spacing={4} sx={{ mb: 3 }} alignItems="stretch">
                {features.map((feature, index) => (
                  <Grid
                    key={index}
                    item
                    xs={12}
                    md={6}
                    sx={{ display: "flex" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        maxWidth: 300,
                        mx: { xs: "auto", md: 0 },
                        height: "100%",
                        alignItems: "center",
                      }}
                    >
                      {feature.icon}
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 600, mb: 0.5 }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: "text.secondary",
                            textAlign: { xs: "center", md: "left" },
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Extra Paragraphs */}
              <Typography sx={{ mb: 2, color: "text.secondary" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s.
              </Typography>
              <Typography sx={{ mb: 4, color: "text.secondary" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>

              {/* Button */}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff4f9d",
                  borderRadius: 10,
                  px: 5,
                  py: 1.5,
                  textTransform: "none",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "primary.dark" },
                }}
              >
                Explore More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
