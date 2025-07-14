import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React, { FC } from "react";
import { CollectionDropdown, ConnectWallet } from "@/modules/common/cta";
import useApp from "@/lib/app/hooks/useApp";
import Link from "next/link";
import { LINKS } from "@/utils/links";

interface NavbarProps {}
const Navbar: FC<NavbarProps> = (props) => {
  const {} = props;
  // const { config } = useApp();
  const bg = useColorModeValue("rgba(234,246,255,0.85)", "rgba(10, 18, 40, 0.85)");
  const border = useColorModeValue("cyan.300", "cyan.800");

  return (
    <Box 
      py="4" 
      px="8"
      className="retro-card"
      mx="4"
      my="4"
      borderRadius="0"
      backdropFilter="blur(10px)"
      border="2px solid"
      borderColor={border}
      boxShadow="inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.5)"
      position="relative"
      overflow="hidden"
      bg={bg}
    >
      {/* Cosmic glow effect */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        background="linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)"
        animation="cosmic-glow 3s ease-in-out infinite alternate"
        pointerEvents="none"
      />
      
      <Flex
        direction="row"
        alignItems="center"
        maxW="container.lg"
        mx="auto"
        gap="4"
        position="relative"
        zIndex="1"
      >
        <Text 
          as={Link}
          href={LINKS.home()}
          fontSize="lg" 
          fontWeight="bold"
          fontFamily="'Press Start 2P', monospace"
          color="cyan.800"
          textShadow="1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 255, 255, 0.5)"
          _hover={{
            textShadow: "1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 255, 255, 0.8)",
            transform: "scale(1.05)",
          }}
          transition="all 0.2s ease"
          textTransform="uppercase"
          letterSpacing="2px"
        >
          COSMIC NEXUS
        </Text>
        <Flex direction="row" ml="auto" gap="2" alignItems="center">
          {/* <CollectionDropdown /> */}
          <ConnectWallet />
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;
