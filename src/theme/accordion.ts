import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleObject,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseStyleRoot: SystemStyleObject = {
  border: "2px solid",
  borderColor: "cyan.800",
  borderRadius: 0,
  bg: "rgba(26, 26, 46, 0.8)",
  backdropFilter: "blur(10px)",
  boxShadow: "inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.5)",
};

const baseStyleContainer: SystemStyleObject = {
  borderTopWidth: "2px",
  borderColor: "cyan.800",
  _first: {
    borderTopWidth: 0,
  },
  _last: {
    borderBottomWidth: 0,
  },
};

const baseStyleButton: SystemStyleObject = {
  fontWeight: 700,
  color: "cyan.800",
  px: 5,
  py: 5,
  fontFamily: "'Press Start 2P', monospace",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  textShadow: "1px 1px 0 rgba(0, 0, 0, 0.5)",
  bg: "rgba(26, 26, 46, 0.6)",
  _hover: {
    bg: "rgba(26, 26, 46, 0.8)",
    boxShadow: "0 0 10px rgba(0, 255, 255, 0.5), inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)",
  },
  _expanded: {
    bg: "rgba(26, 26, 46, 0.9)",
    color: "cyan.800",
    textShadow: "1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 255, 255, 0.5)",
    boxShadow: "0 0 15px rgba(0, 255, 255, 0.8), inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)",
  },
  _focus: {
    boxShadow: "0 0 15px rgba(0, 255, 255, 0.8), inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)",
  },
};

const baseStylePanel: SystemStyleObject = {
  px: 5,
  pb: 6,
  bg: "rgba(26, 26, 46, 0.4)",
  color: "cyan.800",
  fontFamily: "'Orbitron', monospace",
  fontSize: "14px",
  textShadow: "1px 1px 0 rgba(0, 0, 0, 0.5)",
};

const baseStyleIcon: SystemStyleObject = {
  color: "cyan.800",
  fontSize: "16px",
  transition: "all 0.2s ease",
  _expanded: {
    transform: "rotate(90deg)",
    color: "cyan.800",
    textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
  },
};

const baseStyle: PartsStyleObject<typeof parts> = {
  root: baseStyleRoot,
  container: baseStyleContainer,
  button: baseStyleButton,
  panel: baseStylePanel,
  icon: baseStyleIcon,
};

const styles = {
  parts: parts.keys,
  baseStyle,
};

export default styles;
