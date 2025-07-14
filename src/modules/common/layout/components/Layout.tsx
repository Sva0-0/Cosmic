"use client";
import { Box, Divider } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import PoweredByLogo from "./PoweredByLogo";
import GifBackground from "./GifBackground";
import ClientOnly from "./ClientOnly";

interface LayoutProps {
  children?: ReactNode;
}
const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <GifBackground />
      <Box 
        minH="100vh" 
        className="andromeda-bg"
        position="relative"
        overflow="hidden"
      >
        {/* GIF background overlay for better content readability */}
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          zIndex="-1"
          backgroundColor="rgba(0, 0, 0, 0.3)"
          pointerEvents="none"
        />
        
        <Box>
          <Navbar />
        </Box>
        <Divider 
          borderColor="cyan.800" 
          borderWidth="2px"
          opacity="0.5"
          boxShadow="0 0 10px rgba(0, 255, 255, 0.3)"
        />
        <ClientOnly>
          <Box 
            px="24" 
            py="16"
            className="retro-card"
            mx="4"
            my="4"
            borderRadius="0"
            backdropFilter="blur(10px)"
            border="2px solid"
            borderColor="cyan.800"
            boxShadow="inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.5)"
          >
            {children}
          </Box>
        </ClientOnly>
        
        {/* <Box>
          <Footer />
        </Box> */}
      </Box>
    </>
  );
};
export default Layout;
