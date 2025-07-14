import { popoverAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseStyleContent: SystemStyleObject = {
  bg: "rgba(26, 26, 46, 0.95)",
  borderColor: "cyan.800",
  borderWidth: "2px",
  borderRadius: 0,
  backdropFilter: "blur(10px)",
  boxShadow: "inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.7)",
  color: "cyan.800",
  fontFamily: "'Orbitron', monospace",
  _focus: {
    outline: 0,
    boxShadow: "0 0 15px rgba(0, 255, 255, 0.5), inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.7)",
  },
};

const baseStyleBody: SystemStyleObject = {
  p: 4,
  bg: "transparent",
};

const baseStyleHeader: SystemStyleObject = {
  bg: "rgba(26, 26, 46, 0.9)",
  borderBottom: "2px solid",
  borderColor: "cyan.800",
  borderRadius: 0,
  p: 3,
  fontFamily: "'Press Start 2P', monospace",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "cyan.800",
  textShadow: "1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 255, 255, 0.5)",
};

const baseStyle: PartsStyleFunction<typeof parts> = () => ({
  content: baseStyleContent,
  body: baseStyleBody,
  header: baseStyleHeader,
});

const styles = {
  baseStyle,
};

export default styles;
