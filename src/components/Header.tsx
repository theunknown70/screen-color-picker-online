import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  alpha,
  Box,
  Container,
  Stack,
  Chip, // Import Chip
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Keep if using react-router-dom
import ThemeToggleButton from './ThemeToggleButton';

// Import icons for features
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined'; // Represents no download
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined'; // Represents color formats

const Header: React.FC = () => {
  const theme = useTheme();

  // Features array for easier mapping with enhanced styling/icons
  const features = [
      { text: 'Free Forever', icon: <CheckCircleOutlineIcon fontSize="small" />, color: 'success' as 'success' }, // Use success color for this chip
      { text: 'No Download', icon: <CloudDoneOutlinedIcon fontSize="small" />, color: 'primary' as 'primary' },
      { text: 'Supports HEX, RGB, HSL, CMYK', icon: <ColorLensOutlinedIcon fontSize="small" />, color: 'info' as 'info' }, // Use info color for this chip
  ];


  return (
    <AppBar
      position="sticky" // Makes the header stick to the top
      sx={{
        background: alpha(theme.palette.background.paper, 0.95), // Slightly less transparent background
        backdropFilter: "blur(12px)", // Apply a significant blur effect
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.15)}`, // Subtle border at the bottom
        boxShadow: "0 4px 25px rgba(0, 0, 0, 0.1)", // A soft, noticeable shadow
      }}
    >
      <Container maxWidth="xl" disableGutters> {/* Container to control max width of content */}
        <Toolbar
          disableGutters // Disable default Toolbar padding as Container provides it
          sx={{
            py: { xs: 1.5, sm: 2 }, // Vertical padding (more on small screens)
            px: { xs: 2, sm: 3 }, // Horizontal padding
            display: "flex",
            flexDirection: "column", // Stack children (title row and features row) vertically
            alignItems: "center", // Center content horizontally within the toolbar
          }}
        >
          {/* === TOP ROW: Title/Logo and Theme Toggle === */}
          {/* This Box contains items aligned horizontally */}
          <Box
            sx={{
              width: "100%", // Take full width of the Toolbar
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between", // Pushes title to left, toggle to right
            }}
          >
            {/* Site Title / Logo Area */}
            <Typography
              variant="h6"
              component="div" // Use div as the root element for the Typography
              sx={{
                flexGrow: 0, // Prevent growing
                flexShrink: 0, // Prevent shrinking
                mr: { xs: 1, sm: 2 }, // Add right margin to separate from toggle on small screens if they wrap
                '& a': { // Styling for the Link component
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: 0.5, sm: 1 }, // Responsive gap between logo box and text
                  textDecoration: 'none', // Remove underline from link
                  color: 'text.primary', // Use text color from theme
                  fontWeight: 700, // Bold font weight for title
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, // Responsive font size for title
                }
              }}
            >
              {/* Link to homepage (using RouterLink or <a>) */}
              {/* Ensure react-router-dom is set up if using RouterLink */}
              <RouterLink to="/">
                {/* Logo / Branding Box */}
                <Box
                  component="span" // Use span for the logo box
                  sx={{
                    width: { xs: 28, sm: 35, md: 40 }, // Responsive size
                    height: { xs: 28, sm: 35, md: 40 }, // Responsive size
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`, // Gradient background
                    borderRadius: "8px", // Rounded corners
                    display: "flex", // Use flex to center content (if any icon/text inside)
                    alignItems: "center",
                    justifyContent: "center",
                    // Subtle hover effect
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': { transform: 'rotate(5deg)' }, // Small rotation effect on hover
                    boxShadow: `0 2px 5px ${alpha(theme.palette.primary.main, 0.4)}`, // Subtle shadow for the logo box
                  }}
                />
                Screen Color Picker Online {/* Site Title Text */}
              </RouterLink>
            </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }} // Stack chips vertically on xs, row on sm+
            spacing={{ xs: 0.8, sm: 1.5, md: 2 }} // Responsive spacing between chips
            alignItems="center" // Center chips horizontally when stacked vertically on xs
            justifyContent="right" // Center chips horizontally when in a row on sm+
            sx={{
                width: "100%", // Take full width of the Toolbar
                // Add a small margin top if needed, although mb on Box above handles separation
                // mt: { xs: 1.5, sm: 0 }
            }}
          >
            {features.map((feature, index) => (
                // Use Chip components for a styled badge look
                <Chip
                    key={index}
                    icon={feature.icon} // Icon component
                    label={<Typography variant="caption" fontWeight="medium">{feature.text}</Typography>} // Text label with bold font
                    size="medium" // Compact size
                    color={feature.color} // Use color from the features array
                    variant="outlined" // Outlined variant
                    sx={{
                        // Custom styling for Chips
                        borderRadius: '16px', // More rounded pills shape
                        px: 0.5, // Add some horizontal padding inside chip
                        borderColor: (theme) => alpha(theme.palette[feature.color].main, 0.4), // Border color based on chip color
                        backgroundColor: (theme) => alpha(theme.palette[feature.color].light, 0.08), // Very subtle background color
                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', // Smooth transition for hover effects
                        '&:hover': {
                          cursor: 'pointer',
                            transform: 'translateY(-2px)', // Lift effect on hover
                            boxShadow: theme.shadows[2], // Apply a slight shadow on hover
                            backgroundColor: (theme) => alpha(theme.palette[feature.color].light, 0.15), // Slightly more background on hover
                        },
                         // Style for the icon within the chip
                        '.MuiChip-icon': {
                            color: (theme) => theme.palette[feature.color].dark, // Use a darker shade for the icon color
                        },
                        // Style for the label within the chip
                         '.MuiChip-label': {
                             color: (theme) => theme.palette.text.primary, // Use primary text color for label
                         }
                    }}
                />
            ))}
          </Stack>
            {/* Theme Toggle Button */}
            <ThemeToggleButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;