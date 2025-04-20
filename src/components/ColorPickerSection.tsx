import React from "react";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
  useTheme,
  alpha,
} from "@mui/material"; // Use Stack for layout
import { ColorFormat } from "../utils/colorUtils";
import ColorizeIcon from '@mui/icons-material/Colorize';

interface ColorPickerSectionProps {
  onPickColor: () => void;
  selectedFormat: ColorFormat;
  onFormatChange: (format: ColorFormat) => void;
}

const ColorPickerSection: React.FC<ColorPickerSectionProps> = ({
  onPickColor,
  selectedFormat,
  onFormatChange,
}) => {
  const theme = useTheme();
  const formats: ColorFormat[] = ["HEX", "RGB", "HSL", "CMYK"];

  return (
    // Use Stack for flexible layout
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{
        p: 3,
        borderRadius: 4,
        background: alpha(theme.palette.background.paper, 0.8),
        backdropFilter: "blur(20px)",
        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
      }}
    >
      <Button
        variant="contained"
        size="large"
        onClick={onPickColor}
        startIcon={<ColorizeIcon sx={{ fontSize: 28 }} />}
        sx={{
          minWidth: 220,
          py: 1.8,
          background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
          },
          transition: "all 0.3s ease",
        }}
      >
        Pick Color
      </Button>
      <FormControl sx={{ minWidth: 120, width: { xs: "100%", sm: "auto" } }}>
        {" "}
        {/* Full width on xs */}
        <InputLabel id="color-format-label">Format</InputLabel>
        <Select
          labelId="color-format-label"
          id="color-format-select"
          value={selectedFormat}
          label="Format"
          onChange={(e) => onFormatChange(e.target.value as ColorFormat)}
        >
          {formats.map((format) => (
            <MenuItem key={format} value={format}>
              {format}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default ColorPickerSection;
