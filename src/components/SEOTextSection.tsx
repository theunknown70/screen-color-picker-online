import React from 'react';
import { Box, Typography, SxProps, Theme } from '@mui/material';

interface SEOTextSectionProps {
  sx?: SxProps<Theme>;
}

const SEOTextSection: React.FC<SEOTextSectionProps> = ({ sx }) => {
  return (
    <Box sx={sx}>
      <Typography variant="h5" component="h2" gutterBottom>
        About Our Online Color Picker Tool
      </Typography>
      <Typography variant="body1" paragraph>
        Our color picker uses the latest EyeDropper API to get the HEX-Code (and other formats like RGB, HSL, CMYK) of any color on your screen without downloading or installing any software. Finally, it’s easy for web designers, artists, and developers to pick brand colors, identify colors from images, or select any pixel color on their monitor and use the exact color code in their HTML code, CSS, Adobe Project, PDF design, or any creative work. It's a fast, free, and efficient web-based eyedropper tool.
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Keywords: online color picker, screen color picker, web eyedropper tool, get hex code from screen, pick color without software, RGB picker, HSL picker, CMYK picker, free color tool, browser color picker, pick color from PDF Document, pick color from Website, pick color from Image, pick color from Screen.
      </Typography>
    </Box>
  );
};

export default SEOTextSection;