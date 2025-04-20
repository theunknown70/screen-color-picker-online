import Color from 'color';

// Type for allowed color formats
export type ColorFormat = 'HEX' | 'RGB' | 'HSL' | 'CMYK';

/**
 * Converts a HEX color string to different formats.
 * @param hexColor - The color in HEX format (e.g., '#1A2B3C').
 * @param format - The target format ('HEX', 'RGB', 'HSL', 'CMYK').
 * @returns The color string in the specified format, or the HEX if conversion fails.
 */
export const convertColor = (hexColor: string, format: ColorFormat): string => {
  try {
    const color = Color(hexColor); // Use the 'color' library

    switch (format) {
      case 'HEX':
        return color.hex().toUpperCase(); // Ensure uppercase for consistency
      case 'RGB':
        const rgb = color.rgb().array();
        return `rgb(${Math.round(rgb[0])}, ${Math.round(rgb[1])}, ${Math.round(rgb[2])})`;
      case 'HSL':
        const hsl = color.hsl().array();
         return `hsl(${Math.round(hsl[0])}, ${Math.round(hsl[1])}%, ${Math.round(hsl[2])}%)`;
      case 'CMYK':
        const cmyk = color.cmyk().array();
        // CMYK values are 0-100, often displayed as percentages
        return `cmyk(${Math.round(cmyk[0])}%, ${Math.round(cmyk[1])}%, ${Math.round(cmyk[2])}%, ${Math.round(cmyk[3])}%)`;
      default:
        return hexColor.toUpperCase(); // Fallback to HEX
    }
  } catch (error) {
    console.error("Error converting color:", error);
    return hexColor.toUpperCase(); // Return original HEX on error
  }
};