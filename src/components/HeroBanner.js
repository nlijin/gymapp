import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: "212px", xs: "70px" } }}>
      <Typography color="#FF2625" fontSize="26px" fontWeight="600px">
        Fitness Club
      </Typography>
    </Box>
  );
};

export default HeroBanner;
