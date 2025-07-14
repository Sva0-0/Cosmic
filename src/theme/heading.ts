import { SystemStyleObject } from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  fontWeight: "700",
  fontFamily: "'Press Start 2P', monospace",
  color: "cyan.800",
  textShadow: "1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 255, 255, 0.5)",
  textTransform: "uppercase",
  letterSpacing: "2px",
};

const sizes: Record<string, SystemStyleObject> = {
  "4xl": {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: 1.2,
    textShadow: "2px 2px 0 rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 255, 255, 0.8), 0 0 25px rgba(0, 255, 255, 0.4)",
    animation: "cosmic-glow 3s ease-in-out infinite alternate",
  },
  "3xl": {
    fontSize: ["xl", null, "2xl"],
    lineHeight: 1.2,
    textShadow: "2px 2px 0 rgba(0, 0, 0, 0.5), 0 0 12px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.3)",
  },
  "2xl": {
    fontSize: ["lg", null, "xl"],
    lineHeight: 1.2,
    textShadow: "1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 255, 255, 0.6), 0 0 15px rgba(0, 255, 255, 0.2)",
  },
  xl: {
    fontSize: ["md", null, "lg"],
    lineHeight: 1.2,
    textShadow: "1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 8px rgba(0, 255, 255, 0.5), 0 0 12px rgba(0, 255, 255, 0.2)",
  },
  lg: {
    fontSize: ["sm", null, "md"],
    lineHeight: 1.2,
    textShadow: "1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 6px rgba(0, 255, 255, 0.4), 0 0 10px rgba(0, 255, 255, 0.1)",
  },
  md: { 
    fontSize: "xs", 
    lineHeight: 1.2,
    textShadow: "1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 255, 255, 0.3)",
  },
  sm: { 
    fontSize: "10px", 
    lineHeight: 1.2,
    textShadow: "1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 4px rgba(0, 255, 255, 0.2)",
  },
  xs: { 
    fontSize: "8px", 
    lineHeight: 1.2,
    textShadow: "1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 3px rgba(0, 255, 255, 0.2)",
  },
};

const variants = {
  variants: {
    brand: {
      fontWeight: "700",
      fontSize: "md",
      fontFamily: "'Press Start 2P', monospace",
      color: "cyan.800",
      textShadow: "1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 255, 255, 0.5)",
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
    cosmic: {
      fontWeight: "900",
      fontFamily: "'Press Start 2P', monospace",
      color: "cyan.800",
      textShadow: "2px 2px 0 rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 255, 255, 0.8), 0 0 25px rgba(0, 255, 255, 0.4)",
      textTransform: "uppercase",
      letterSpacing: "3px",
      animation: "cosmic-glow 2s ease-in-out infinite alternate",
    },
  },
};

const styles = {
  baseStyle,
  variants,
  sizes,
};

export default styles;
