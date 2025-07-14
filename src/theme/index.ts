import { createLocalStorageManager, extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// Use a custom storage manager that doesn't access localStorage during SSR
export const ThemeStorageManager = {
  get: (init?: string) => {
    if (typeof window === 'undefined') return init === 'light' || init === 'dark' ? init : undefined;
    try {
      const value = localStorage.getItem("cosmic-nexus-theme");
      if (value === 'light' || value === 'dark') {
        return value;
      }
      return undefined;
    } catch {
      return undefined;
    }
  },
  set: (value: string) => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem("cosmic-nexus-theme", value);
    } catch {
      // Ignore localStorage errors
    }
  },
  type: 'localStorage' as const,
};

export default extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: "#000 !important",
        color: "#fff !important",
        fontFamily: "'Orbitron', monospace, monospace, sans-serif !important",
        backgroundAttachment: "fixed",
        overflowX: "hidden",
      },
      '*': {
        color: '#fff !important',
        borderColor: '#fff !important',
        background: 'none !important',
        fontFamily: "'Orbitron', monospace, monospace, sans-serif !important",
      },
      'h1, h2, h3, h4, h5, h6': {
        fontFamily: "'Press Start 2P', monospace, monospace, sans-serif !important",
        color: '#fff !important',
        textShadow: '2px 2px 0 #111, 0 0 8px #fff',
        letterSpacing: '2px',
      },
      'button, .chakra-button, .retro-btn': {
        fontFamily: "'Press Start 2P', monospace, monospace, sans-serif !important",
        background: '#000 !important',
        color: '#fff !important',
        border: '2px solid #fff !important',
        borderRadius: '0 !important',
        boxShadow: '0 0 0 2px #fff, 0 0 8px #fff',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      },
      'input, .chakra-input, textarea, .chakra-textarea': {
        background: '#000 !important',
        color: '#fff !important',
        border: '2px solid #fff !important',
        borderRadius: '0 !important',
        fontFamily: "'Orbitron', monospace, monospace, sans-serif !important",
      },
      '.card, .chakra-card, .retro-card, .chakra-modal__content': {
        background: '#111 !important',
        border: '2px solid #fff !important',
        borderRadius: '0 !important',
        boxShadow: '0 0 0 2px #fff, 0 0 8px #fff',
      },
      '.chakra-modal__overlay': {
        background: 'rgba(0,0,0,0.95) !important',
      },
    },
  },
  fonts: {
    heading: "'Press Start 2P', 'Orbitron', monospace, sans-serif",
    body: "'Orbitron', monospace, sans-serif",
    mono: "'Press Start 2P', Menlo, monospace",
  },
  colors: {
    black: '#000',
    white: '#fff',
    gray: {
      50: '#111',
      100: '#222',
      200: '#333',
      300: '#444',
      400: '#555',
      500: '#666',
      600: '#777',
      700: '#888',
      800: '#999',
      900: '#fff',
    },
    primary: {
      100: '#fff',
      200: '#fff',
      300: '#fff',
      400: '#fff',
      500: '#fff',
      600: '#fff',
      700: '#fff',
      800: '#fff',
      900: '#fff',
    },
  },
});
