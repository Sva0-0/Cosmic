import {
  SystemStyleObject,
  SystemStyleFunction,
  getColor,
} from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  fontWeight: 700,
  borderRadius: 0,
  fontFamily: "'Press Start 2P', monospace",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  border: "2px solid",
  transition: "all 0.2s ease",
  _disabled: {
    cursor: "not-allowed",
    boxShadow: "none",
    opacity: 0.5,
  },
  _focus: {
    boxShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
  },
};

const variantOutline: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  return {
    borderColor: `${c}.800`,
    color: `${c}.800`,
    bg: "transparent",
    _hover: {
      bg: `${c}.25`,
      boxShadow: `0 0 10px ${getColor(theme, `${c}.800`)}, inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)`,
      transform: "translateY(-1px)",
    },
    _active: {
      bg: `${c}.50`,
      transform: "translateY(1px)",
      boxShadow: `inset -2px -2px 0 rgba(255, 255, 255, 0.1), inset 2px 2px 0 rgba(0, 0, 0, 0.3)`,
    },
    _focus: {
      boxShadow: `0 0 15px ${getColor(theme, `${c}.800`)}, inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)`,
    },
  };
};

const variantSolid: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  return {
    bg: `linear-gradient(145deg, ${getColor(theme, `${c}.100`)}, ${getColor(theme, `${c}.200`)})`,
    color: `${c}.800`,
    borderColor: `${c}.800`,
    boxShadow: `inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)`,
    _hover: {
      bg: `linear-gradient(145deg, ${getColor(theme, `${c}.200`)}, ${getColor(theme, `${c}.100`)})`,
      boxShadow: `0 0 10px ${getColor(theme, `${c}.800`)}, inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)`,
      transform: "translateY(-1px)",
      _disabled: {
        bg: `${c}.25`,
        transform: "none",
      },
    },
    _active: {
      bg: `linear-gradient(145deg, ${getColor(theme, `${c}.50`)}, ${getColor(theme, `${c}.100`)})`,
      transform: "translateY(1px)",
      boxShadow: `inset -2px -2px 0 rgba(255, 255, 255, 0.1), inset 2px 2px 0 rgba(0, 0, 0, 0.3)`,
    },
    _focus: {
      boxShadow: `0 0 15px ${getColor(theme, `${c}.800`)}, inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)`,
    },
  };
};

const variantGhost: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  return {
    bg: "transparent",
    color: `${c}.800`,
    borderColor: "transparent",
    _hover: {
      bg: `${c}.25`,
      borderColor: `${c}.800`,
      boxShadow: `0 0 10px ${getColor(theme, `${c}.800`)}, inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)`,
      transform: "translateY(-1px)",
      _disabled: {
        bg: `${c}.25`,
        transform: "none",
      },
    },
    _active: {
      bg: `${c}.50`,
      transform: "translateY(1px)",
      boxShadow: `inset -2px -2px 0 rgba(255, 255, 255, 0.1), inset 2px 2px 0 rgba(0, 0, 0, 0.3)`,
    },
    _focus: {
      boxShadow: `0 0 15px ${getColor(theme, `${c}.800`)}, inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)`,
    },
  };
};

// Retro pixel variant
const variantRetro: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  return {
    bg: `linear-gradient(145deg, ${getColor(theme, `${c}.100`)}, ${getColor(theme, `${c}.200`)})`,
    color: `${c}.800`,
    borderColor: `${c}.800`,
    borderWidth: "3px",
    borderRadius: 0,
    boxShadow: `inset 3px 3px 0 rgba(255, 255, 255, 0.2), inset -3px -3px 0 rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.5)`,
    textShadow: `1px 1px 0 ${getColor(theme, `${c}.900`)}`,
    _hover: {
      bg: `linear-gradient(145deg, ${getColor(theme, `${c}.200`)}, ${getColor(theme, `${c}.100`)})`,
      boxShadow: `0 0 15px ${getColor(theme, `${c}.800`)}, inset 3px 3px 0 rgba(255, 255, 255, 0.2), inset -3px -3px 0 rgba(0, 0, 0, 0.4), 0 6px 12px rgba(0, 0, 0, 0.6)`,
      transform: "translateY(-2px)",
      _disabled: {
        bg: `${c}.25`,
        transform: "none",
      },
    },
    _active: {
      bg: `linear-gradient(145deg, ${getColor(theme, `${c}.50`)}, ${getColor(theme, `${c}.100`)})`,
      transform: "translateY(2px)",
      boxShadow: `inset -3px -3px 0 rgba(255, 255, 255, 0.2), inset 3px 3px 0 rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.4)`,
    },
    _focus: {
      boxShadow: `0 0 20px ${getColor(theme, `${c}.800`)}, inset 3px 3px 0 rgba(255, 255, 255, 0.2), inset -3px -3px 0 rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.5)`,
    },
  };
};

const variants = {
  outline: variantOutline,
  solid: variantSolid,
  ghost: variantGhost,
  retro: variantRetro,
};

const sizes: Record<string, SystemStyleObject> = {
  sm: {
    fontSize: "10px",
    px: 3,
    py: 2,
    h: "32px",
  },
  md: {
    fontSize: "12px",
    px: 4,
    py: 3,
    h: "40px",
  },
  lg: {
    fontSize: "14px",
    px: 6,
    py: 4,
    h: "48px",
  },
  xl: {
    fontSize: "16px",
    px: 8,
    py: 5,
    h: "56px",
  },
  "2xl": {
    fontSize: "18px",
    px: 10,
    py: 6,
    h: "64px",
  },
};

const styles = {
  baseStyle,
  variants,
  sizes,
};

export default styles;
