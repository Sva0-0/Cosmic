import { tabsAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseStyleTabpanel: SystemStyleObject = {
  p: 0,
  pt: 8,
  bg: "rgba(26, 26, 46, 0.8)",
  border: "2px solid",
  borderColor: "cyan.800",
  borderRadius: 0,
  backdropFilter: "blur(10px)",
  boxShadow: "inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.5)",
};

const baseStyleTab: SystemStyleObject = {
  bg: "rgba(26, 26, 46, 0.6)",
  color: "cyan.600",
  border: "2px solid",
  borderColor: "cyan.800",
  borderRadius: 0,
  fontFamily: "'Press Start 2P', monospace",
  fontSize: "10px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  textShadow: "1px 1px 0 rgba(0, 0, 0, 0.5)",
  boxShadow: "inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)",
  _hover: {
    bg: "rgba(26, 26, 46, 0.8)",
    color: "cyan.800",
    boxShadow: "0 0 10px rgba(0, 255, 255, 0.5), inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)",
  },
  _selected: {
    bg: "rgba(26, 26, 46, 0.9)",
    color: "cyan.800",
    borderBottomColor: "transparent",
    boxShadow: "0 0 15px rgba(0, 255, 255, 0.8), inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)",
    textShadow: "1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 255, 255, 0.5)",
  },
  _focus: {
    boxShadow: "0 0 15px rgba(0, 255, 255, 0.8), inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)",
  },
};

const baseStyleTablist: SystemStyleObject = {
  bg: "rgba(26, 26, 46, 0.8)",
  borderBottom: "2px solid",
  borderColor: "cyan.800",
  borderRadius: 0,
  backdropFilter: "blur(10px)",
  boxShadow: "inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.5)",
};

const baseStyle: PartsStyleFunction<typeof parts> = () => ({
  tabpanel: baseStyleTabpanel,
  tab: baseStyleTab,
  tablist: baseStyleTablist,
});

const styles = {
  baseStyle,
};

export default styles;
