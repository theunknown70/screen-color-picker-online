import React from "react";
import {
  Box,
  Typography,
  ListItem,
  ListItemText,
  SxProps,
  Theme,
  Grid,
  ListItemIcon,
  useTheme,
  alpha,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"; // Icon for features

interface FeaturesSectionProps {
  sx?: SxProps<Theme>;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ sx }) => {
  const theme = useTheme();
  const features = [
    "Free Forever: No subscriptions, no trials.",
    "No Download: Works in your browser.",
    "Pick from Full Screen: Go beyond browser.",
    "Supports HEX, RGB, HSL, CMYK formats.",
    "Instant Copy to Clipboard.",
    "Clean & Intuitive Interface.",
  ];

  return (
    <Box sx={sx}>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        align="center"
        sx={{
          fontWeight: 700,
          letterSpacing: "-0.02em",
          mb: 4,
        }}
      >
        Why Choose Us?
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Box
              sx={{
                p: 1,
                height: "100%",
                borderRadius: 4,
                background: alpha(theme.palette.background.paper, 0.9),
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: theme.shadows[6],
                },
              }}
            >
              {/* Use ListItem and ListItemIcon for better alignment and spacing */}
              <ListItem disableGutters sx={{ py: 0.5 }}>
                {" "}
                {/* Reduce vertical padding */}
                <ListItemIcon sx={{ minWidth: 35 }}>
                  {" "}
                  {/* Control icon spacing */}
                  <CheckCircleOutlineIcon color="success" />{" "}
                  {/* Use success color for checkmark */}
                </ListItemIcon>
                <ListItemText
                  primary={feature}
                  primaryTypographyProps={{ variant: "body1" }}
                />
              </ListItem>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
