import { Flex, Text, Link, Box } from "@chakra-ui/react";
import React, { FC } from "react";
import useApp from "@/lib/app/hooks/useApp";

interface FooterProps { }

const Footer: FC<FooterProps> = (props) => {
  const { } = props;
  // const { config } = useApp();

  return (
    <Box
      className="retro-card"
      mx="4"
      mb="4"
      borderRadius="0"
      backdropFilter="blur(10px)"
      border="2px solid"
      borderColor="cyan.800"
      boxShadow="inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.5)"
      position="relative"
      overflow="hidden"
    >
      {/* Cosmic glow effect */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        background="linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.05) 50%, transparent 100%)"
        animation="cosmic-glow 4s ease-in-out infinite alternate"
        pointerEvents="none"
      />
      
      <Flex
        backgroundColor="rgba(26, 26, 46, 0.8)"
        direction="column"
        textColor="cyan.600"
        align='center'
        p='6'
        data-testid="footer"
        position="relative"
        zIndex="1"
      >
        <Text 
          data-testid="footer-text"
          fontFamily="'Orbitron', monospace"
          fontSize="14px"
          textShadow="1px 1px 0 rgba(0, 0, 0, 0.5)"
          textAlign="center"
        >
          Explore the retro pixel Andromeda universe with <b style={{color: 'cyan.800', textShadow: '1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 255, 255, 0.5)'}}>COSMIC NEXUS</b> - your gateway to stellar trading, nebula auctions, and galactic marketplaces! 🌌✨
        </Text>
        <Text 
          mt="2"
          fontFamily="'Press Start 2P', monospace"
          fontSize="8px"
          color="magenta.600"
          textTransform="uppercase"
          letterSpacing="1px"
          textShadow="1px 1px 0 rgba(0, 0, 0, 0.5)"
        >
          POWERED BY ANDROMEDA PROTOCOL
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
