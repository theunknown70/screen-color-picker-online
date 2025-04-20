import React, { useEffect } from "react"; // Import useState for hover effect
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Tooltip,
  Zoom,
  useTheme,
  alpha,
} from "@mui/material"; // Import Zoom transition
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface SelectedColorDisplayProps {
  pickedColorHex: string;
  displayedColorValue: string;
  onCopy: () => void;
}

const SelectedColorDisplay: React.FC<SelectedColorDisplayProps> = ({
  pickedColorHex,
  displayedColorValue,
  onCopy,
}) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        mt: 3,
        p: 0,
        borderRadius: 4,
        background: alpha(theme.palette.background.paper, 0.9),
        backdropFilter: "blur(20px)",
        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        boxShadow: `0 16px 40px ${alpha(theme.palette.primary.main, 0.1)}`,
        transform: "translateY(0)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          {" "}
          {/* Use h3 semantically */}
          Selected Color
        </Typography>
        {/* Color Swatch */}
        <Box
          sx={{
            width: 120, // Slightly larger swatch
            height: 120,
            backgroundColor: pickedColorHex,
            borderRadius: "50%", // Make it circular
            mx: "auto",
            mb: 3, // More space below swatch
            border: "3px solid", // Add a prominent border
            borderColor: (theme) => theme.palette.divider, // Border color from theme
            boxShadow: "0px 0px 15px rgba(0,0,0,0.2)", // Add a subtle shadow to swatch
            transition: "transform 0.3s ease-in-out", // Transition for hover effect
            "&:hover": {
              transform: "scale(1.05)", // Slight grow effect on hover
            },
          }}
        />
        {/* Color Value and Copy */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: (theme) => theme.palette.background.default,
            p: 1.5,
            borderRadius: "8px",
          }}
        >
          {" "}
          {/* Styled box for value */}
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", wordBreak: "break-all", mr: 1 }}
          >
            {displayedColorValue}
          </Typography>
          <Tooltip title="Copy to Clipboard" TransitionComponent={Zoom}>
            <IconButton onClick={onCopy} size="small" color="primary">
              {" "}
              {/* Use primary color for icon */}
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SelectedColorDisplay;
