import type { SystemStyleObject } from "@chakra-ui/theme-tools";

const baseStyleBody: SystemStyleObject = {
  p: 6,
  bg: "rgba(26, 26, 46, 0.95)",
  backdropFilter: "blur(15px)",
  border: "2px solid",
  borderColor: "cyan.800",
  borderRadius: 0,
  boxShadow: "inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.7)",
  color: "cyan.800",
  fontFamily: "'Orbitron', monospace",
};

const baseStyleHeader: SystemStyleObject = {
  bg: "rgba(26, 26, 46, 0.9)",
  borderBottom: "2px solid",
  borderColor: "cyan.800",
  borderRadius: 0,
  p: 4,
  fontFamily: "'Press Start 2P', monospace",
  fontSize: "14px",
  textTransform: "uppercase",
  letterSpacing: "2px",
  color: "cyan.800",
  textShadow: "1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 255, 255, 0.5)",
};

const baseStyleOverlay: SystemStyleObject = {
  bg: "rgba(0, 0, 0, 0.8)",
  backdropFilter: "blur(5px)",
};

const baseStyle: SystemStyleObject = {
  body: baseStyleBody,
  header: baseStyleHeader,
  overlay: baseStyleOverlay,
};

const styles = {
  baseStyle,
};

export default styles;
