'use client';

import React, { FC } from 'react';
import {
  Box,
  chakra,
  Flex,
  Button,
  Link,
} from '@chakra-ui/react';
import { LINKS } from '@/utils/links';

interface AboutAndromedaProps {}

const AboutAndromeda: FC<AboutAndromedaProps> = () => {
  return (
    <Flex
      direction="column"
      align="center"
      textAlign="center"
      width="full"
      pt={10}
      px={4}
      overflow="hidden"
      bg="rgba(26, 26, 46, 0.9)"
      backdropFilter="blur(8px)"
      border="3px solid"
      borderColor="cyan.800"
      boxShadow="inset 3px 3px 0 rgba(255, 255, 255, 0.1), inset -3px -3px 0 rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.7)"
      className="retro-card"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.4), inset 3px 3px 0 rgba(255, 255, 255, 0.15), inset -3px -3px 0 rgba(0, 0, 0, 0.4)",
      }}
    >
      <Box
        as="img"
        src="https://i.gifer.com/ExHZ.gif"
        alt="Andromeda Galaxy Collision Animation"
        maxW="500px"
        w="full"
        border="2px solid"
        borderColor="magenta.700"
        borderRadius="md"
        mb={8}
        filter="drop-shadow(0 0 10px rgba(255, 0, 255, 0.6))"
      />

      <chakra.h1
        fontSize="3xl"
        fontFamily="'Press Start 2P', monospace"
        fontWeight="900"
        color="cyan.800"
        textTransform="uppercase"
        letterSpacing="3px"
        textShadow="2px 2px 0 rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 255, 0.8)"
        mb={6}
      >
        About the Andromeda Galaxy
      </chakra.h1>

      <chakra.p
        fontFamily="'Orbitron', monospace"
        fontSize="14px"
        fontWeight="500"
        color="cyan.600"
        maxW="800px"
        mb={6}
        lineHeight="1.8"
        textShadow="1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 255, 255, 0.4)"
      >
        The Andromeda Galaxy (M31) is a sprawling spiral galaxy, our closest major neighbor at about 2.5 million light-years away.
        It is on a cosmic collision course with the Milky Way — predicted to merge in around 4 billion years, creating a colossal new galaxy.
        This inevitable cosmic dance reminds us that even galaxies must evolve, collide, and transform in the ever-expanding universe.
      </chakra.p>

      <chakra.p
        fontFamily="'Orbitron', monospace"
        fontSize="14px"
        fontWeight="500"
        color="magenta.600"
        maxW="800px"
        mb={10}
        lineHeight="1.8"
        textShadow="1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 10px rgba(255, 0, 255, 0.5)"
      >
        At COSMIC NEXUS, we embrace this spirit of cosmic collision and evolution — blending retro pixel aesthetics with the limitless frontier of blockchain technology.
      </chakra.p>

    </Flex>
  );
};

export default AboutAndromeda;
