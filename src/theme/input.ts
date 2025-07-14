import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { getColor } from "@chakra-ui/theme-tools";

const size: Record<string, SystemStyleObject> = {
  md: {
    height: "44px",
    px: "14px",
    borderRadius: 0,
    fontFamily: "'Orbitron', monospace",
  },
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  md: {
    field: size.md,
    addon: size.md,
  },
};

const variantOutline: PartsStyleFunction<typeof parts> = (props) => {
  const { theme } = props;

  return {
    field: {
      bg: "rgba(26, 26, 46, 0.8)",
      borderColor: "cyan.800",
      borderWidth: "2px",
      color: "cyan.800",
      backdropFilter: "blur(10px)",
      _hover: {
        borderColor: "cyan.700",
        boxShadow: "0 0 5px rgba(0, 255, 255, 0.3)",
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all",
        bg: "rgba(26, 26, 46, 0.6)",
      },
      _disabled: {
        opacity: 0.5,
        bg: "rgba(26, 26, 46, 0.4)",
        borderColor: "gray.600",
        color: "gray.500",
      },
      _invalid: {
        borderColor: "error.800",
        boxShadow: "0 0 5px rgba(255, 0, 0, 0.3)",
        _focus: {
          borderColor: "error.800",
          boxShadow: `0 0 10px ${getColor(theme, "error.800")}`,
        },
      },
      _focus: {
        zIndex: 1,
        borderColor: "cyan.800",
        boxShadow: `0 0 10px ${getColor(theme, "cyan.800")}, inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)`,
        bg: "rgba(26, 26, 46, 0.9)",
      },
      _placeholder: { 
        opacity: 0.7, 
        color: "cyan.600", 
        fontSize: "md",
        fontFamily: "'Orbitron', monospace",
      },
    },
  };
};

// Retro pixel variant
const variantRetro: PartsStyleFunction<typeof parts> = (props) => {
  const { theme } = props;

  return {
    field: {
      bg: "linear-gradient(145deg, rgba(26, 26, 46, 0.9), rgba(22, 33, 62, 0.9))",
      borderColor: "cyan.800",
      borderWidth: "3px",
      color: "cyan.800",
      borderRadius: 0,
      fontFamily: "'Press Start 2P', monospace",
      fontSize: "12px",
      textShadow: "1px 1px 0 rgba(0, 0, 0, 0.5)",
      boxShadow: "inset 3px 3px 0 rgba(255, 255, 255, 0.1), inset -3px -3px 0 rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.5)",
      _hover: {
        borderColor: "cyan.700",
        boxShadow: "0 0 10px rgba(0, 255, 255, 0.5), inset 3px 3px 0 rgba(255, 255, 255, 0.1), inset -3px -3px 0 rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.5)",
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all",
        bg: "rgba(26, 26, 46, 0.6)",
      },
      _disabled: {
        opacity: 0.5,
        bg: "rgba(26, 26, 46, 0.4)",
        borderColor: "gray.600",
        color: "gray.500",
      },
      _invalid: {
        borderColor: "error.800",
        boxShadow: "0 0 10px rgba(255, 0, 0, 0.5), inset 3px 3px 0 rgba(255, 255, 255, 0.1), inset -3px -3px 0 rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.5)",
        _focus: {
          borderColor: "error.800",
          boxShadow: `0 0 15px ${getColor(theme, "error.800")}, inset 3px 3px 0 rgba(255, 255, 255, 0.1), inset -3px -3px 0 rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.5)`,
        },
      },
      _focus: {
        zIndex: 1,
        borderColor: "cyan.800",
        boxShadow: `0 0 15px ${getColor(theme, "cyan.800")}, inset 3px 3px 0 rgba(255, 255, 255, 0.1), inset -3px -3px 0 rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.6)`,
        bg: "linear-gradient(145deg, rgba(26, 26, 46, 1), rgba(22, 33, 62, 1))",
      },
      _placeholder: { 
        opacity: 0.7, 
        color: "cyan.600", 
        fontSize: "10px",
        fontFamily: "'Press Start 2P', monospace",
        textTransform: "uppercase",
      },
    },
  };
};

const variants = {
  outline: variantOutline,
  retro: variantRetro,
};

const styles = {
  sizes,
  variants,
};

export default styles;
