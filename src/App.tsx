import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Snackbar,
  Alert,
  Grid,
  Divider,
  Fade,
  useTheme,
  alpha,
} from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TermsAndConditions from "./components/TermsAndConditions";
import ColorPickerSection from "./components/ColorPickerSection";
import SelectedColorDisplay from "./components/SelectedColorDisplay";
import HowToUseSection from "./components/HowToUseSection";
import FeaturesSection from "./components/FeaturesSection";
import SEOTextSection from "./components/SEOTextSection";
import { ColorFormat, convertColor } from "./utils/colorUtils"; // Import utility

// Define EyeDropper type for TypeScript if not globally available
declare global {
  interface Window {
    EyeDropper?: any; // Using 'any' for simplicity, can be typed more strictly if needed
  }
}

const App: React.FC = () => {
  const theme = useTheme();
  const [pickedColorHex, setPickedColorHex] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<ColorFormat>("HEX");
  const [displayedColorValue, setDisplayedColorValue] = useState<string | null>(
    null
  );
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "error" | "info" | "warning"
  >("info");

  // Effect to convert color whenever pickedColorHex or selectedFormat changes
  useEffect(() => {
    if (pickedColorHex) {
      const convertedValue = convertColor(pickedColorHex, selectedFormat);
      setDisplayedColorValue(convertedValue);
    } else {
      setDisplayedColorValue(null);
    }
  }, [pickedColorHex, selectedFormat]);

  const handlePickColor = async () => {
    if (!window.EyeDropper) {
      setSnackbarMessage("EyeDropper API not supported in this browser.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    try {
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      const convertedValue = convertColor(result.sRGBHex, selectedFormat);

      // Auto-copy functionality
      try {
        await navigator.clipboard.writeText(convertedValue);
        setSnackbarMessage(`Copied: ${convertedValue}`);
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
      } catch (copyError) {
        console.error("Copy failed:", copyError);
        setSnackbarMessage("Color picked but failed to copy!");
        setSnackbarSeverity("warning");
        setSnackbarOpen(true);
      }

      setPickedColorHex(result.sRGBHex);
    } catch (e: any) {
      if (
        e.name === "AbortError" ||
        e.message.includes("aborted") ||
        e.message.includes("canceled")
      ) {
        console.log("Color selection canceled.");
      } else {
        console.error("EyeDropper error:", e);
        setSnackbarMessage(`Error picking color: ${e.message}`);
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    }
  };

  const handleCopy = async () => {
    if (displayedColorValue) {
      try {
        await navigator.clipboard.writeText(displayedColorValue);
        setSnackbarMessage(`Copied: ${displayedColorValue}`);
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
      } catch (err) {
        console.error("Failed to copy:", err);
        setSnackbarMessage("Failed to copy color value.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    }
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: `linear-gradient(45deg, ${alpha(
          theme.palette.primary.main,
          0.05
        )} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          top: -500,
          right: -500,
          background: `radial-gradient(${alpha(
            theme.palette.primary.main,
            0.1
          )} 30%, transparent 70%)`,
          borderRadius: "50%",
          zIndex: 0,
        },
      }}
    >
      <Header />

      <Container
        component="main"
        maxWidth="md"
        sx={{
          py: { xs: 2, sm: 2 },
          flexGrow: 1,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Box
                sx={{
                  mb: { xs: 6, sm: 8 },
                  px: 2,
                  py: 2,
                  borderRadius: 4,
                  background: alpha(theme.palette.background.paper, 0.8),
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  boxShadow: theme.shadows[4],
                }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 2,
                  }}
                >
                  Pixel Perfect Color Picker
                </Typography>

                <Grid container spacing={0} justifyContent="center">
                  <Grid size={12}>
                    <ColorPickerSection
                      onPickColor={handlePickColor}
                      selectedFormat={selectedFormat}
                      onFormatChange={setSelectedFormat}
                    />
                  </Grid>

                  {pickedColorHex && displayedColorValue && (
                    <Grid size={12}>
                      <Fade in timeout={500}>
                        <Box>
                          <SelectedColorDisplay
                            pickedColorHex={pickedColorHex}
                            displayedColorValue={displayedColorValue}
                            onCopy={handleCopy}
                          />
                        </Box>
                      </Fade>
                    </Grid>
                  )}

                  <Grid size={12}>
                    <Divider
                      sx={{
                        my: 3,
                        "&:before, &:after": {
                          borderColor: alpha(theme.palette.divider, 0.2),
                        },
                      }}
                    />
                    <HowToUseSection />
                  </Grid>

                  <Grid size={12}>
                    <Divider
                      sx={{
                        my: 2,
                        "&:before, &:after": {
                          borderColor: alpha(theme.palette.divider, 0.2),
                        },
                      }}
                    />
                    <FeaturesSection
                      sx={{
                        px: 4,
                        py: 3,
                        borderRadius: 4,
                        background: alpha(theme.palette.background.paper, 0.8),
                        backdropFilter: "blur(20px)",
                      }}
                    />
                  </Grid>

                  <Grid size={12}>
                    <Divider
                      sx={{
                        my: 2,
                        "&:before, &:after": {
                          borderColor: alpha(theme.palette.divider, 0.2),
                        },
                      }}
                    />
                    <SEOTextSection
                      sx={{
                        px: 4,
                        py: 3,
                        borderRadius: 4,
                        background: alpha(theme.palette.background.paper, 0.8),
                        backdropFilter: "blur(20px)",
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            }
          />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </Container>

      <Footer />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{
            backdropFilter: "blur(10px)",
            background: alpha(theme.palette[snackbarSeverity].main, 0.9),
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default App;
