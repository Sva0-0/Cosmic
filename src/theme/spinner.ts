import { cssVar, SystemStyleObject } from "@chakra-ui/theme-tools";

const $size = cssVar("spinner-size");

const baseStyle: SystemStyleObject = {
  borderColor: "cyan.800",
  borderTopColor: "transparent",
  borderRadius: 0,
  boxShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
  animation: "pixel-spin 1s linear infinite",
};

const sizes: Record<string, SystemStyleObject> = {
  xs: {
    [$size.variable]: "0.75rem",
  },
  sm: {
    [$size.variable]: "1rem",
  },
  md: {
    [$size.variable]: "1.5rem",
  },
  lg: {
    [$size.variable]: "2rem",
  },
  xl: {
    [$size.variable]: "3rem",
  },
  "2xl": {
    [$size.variable]: "5rem",
  },
};

const styles = {
  baseStyle,
  sizes,
};

export default styles;
