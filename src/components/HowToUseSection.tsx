import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, SxProps, Theme, ListItemIcon, Divider } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'; // Icon for help
import LooksOneIcon from '@mui/icons-material/LooksOne'; // Example numbered icons (requires more icons)
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
// Or use a generic icon and just the number text

interface HowToUseSectionProps {
  sx?: SxProps<Theme>;
}

const HowToUseSection: React.FC<HowToUseSectionProps> = ({ sx }) => {
  const steps = [
    "Open the content (image, document, app) you want to pick a color from.",
    "Arrange your windows so you can see both this page and the target content.",
    "Click the 'Pick Color' button, select your color anywhere on screen, and its value will appear below."
  ];

   const stepIcons = [
       <LooksOneIcon color="primary" />,
       <LooksTwoIcon color="primary" />,
       <Looks3Icon color="primary" />,
   ];


  return (
    <Box sx={sx}>
      <Typography variant="h4" component="h2" gutterBottom align="center"> {/* Larger, centered heading */}
        How to Pick a Color?
      </Typography>
      <List sx={{ textAlign: 'left', maxWidth: 600, mx: 'auto' }}> {/* Center the list */}
        {steps.map((step, index) => (
          <React.Fragment key={index}> {/* Use fragment for dividers */}
              <ListItem disableGutters>
                  <ListItemIcon>
                      {/* Use numbered icons or a generic icon */}
                      {stepIcons[index] || <HelpOutlineIcon color="primary" />} {/* Fallback icon */}
                  </ListItemIcon>
                  <ListItemText primary={`Step ${index + 1}:`} secondary={step} primaryTypographyProps={{ fontWeight: 'bold' }} /> {/* Separate step number and text */}
              </ListItem>
              {index < steps.length - 1 && <Divider component="li" sx={{ my: 0 }} />} {/* Add divider between items */}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default HowToUseSection;