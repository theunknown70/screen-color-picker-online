import React from "react";
import {
  Box,
  Typography,
  Container,
  Link,
  useTheme,
  alpha,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        background: `linear-gradient(45deg, ${alpha(
          theme.palette.primary.main,
          0.9
        )} 0%, ${alpha(theme.palette.secondary.main, 0.9)} 100%)`,
        color: "common.white",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Screen Color Picker Online. All rights
          reserved.
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 1 }}
        >
          <Link
            component={RouterLink}
            to="/terms"
            color="inherit"
            sx={{ mr: 1 }}
          >
            Terms and Conditions
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
