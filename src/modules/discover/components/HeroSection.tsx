'use client';

import NextLink from 'next/link';
import { LINKS } from "@/utils/links";
import React, { FC } from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  chakra,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  const bg = useColorModeValue("#eaf6ff", "#050c1a");
  const cardBg = useColorModeValue("rgba(234,246,255,0.85)", "rgba(0,0,0,0.7)");
  const border = useColorModeValue("teal.300", "teal.700");
  const headingColor = useColorModeValue("teal.700", "teal.300");
  const accentColor = useColorModeValue("purple.600", "purple.400");
  const subTextColor = useColorModeValue("teal.600", "teal.500");
  const descBg = useColorModeValue("rgba(234,246,255,0.6)", "rgba(0,0,0,0.6)");
  const descBorder = useColorModeValue("teal.200", "teal.700");
  const descColor = useColorModeValue("teal.700", "teal.400");

  return (
    <>
      <Box
        position="relative"
        bg={bg}
        minH="100vh"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* Subtle GIF background */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="0"
        >
          <Image
            src="https://i.gifer.com/O1XD.gif"
            alt="Pixel Background"
            w="100%"
            h="100%"
            objectFit="cover"
            filter="brightness(0.3) contrast(1.2)"
          />
        </Box>

        {/* Subtle pixel grid overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundImage="linear-gradient(rgba(0, 128, 128, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 128, 128, 0.1) 1px, transparent 1px)"
          backgroundSize="20px 20px"
          opacity="0.2"
          zIndex="1"
        />

        {/* Content */}
        <Container maxW="5xl" position="relative" zIndex="2">
          <Stack spacing={8} textAlign="center">
            <Box
              border="2px solid"
              borderColor={border}
              p={6}
              bg={cardBg}
              backdropFilter="blur(4px)"
              borderRadius="md"
            >
              <Heading
                fontFamily="'Press Start 2P', monospace"
                fontSize={{ base: '2xl', md: '4xl' }}
                color={headingColor}
                textTransform="uppercase"
                letterSpacing="2px"
                textShadow="1px 1px 0 rgba(0,0,0,0.8)"
              >
                WELCOME TO{' '}
                <chakra.span color={accentColor}>
                  COSMIC NEXUS
                </chakra.span>
              </Heading>

              <Text
                mt={4}
                fontSize="md"
                fontFamily="'Press Start 2P', monospace"
                color={subTextColor}
                textShadow="1px 1px 0 rgba(0,0,0,0.7)"
              >
                — THE ANDROMEDA UNIVERSE AWAITS —
              </Text>
            </Box>

            <Text
              fontFamily="'Press Start 2P', monospace"
              fontSize="xs"
              color={descColor}
              maxW="700px"
              mx="auto"
              bg={descBg}
              p={4}
              border="1px solid"
              borderColor={descBorder}
              borderRadius="md"
              textShadow="1px 1px 0 rgba(0,0,0,0.8)"
            >
              🚀 Embark on a pixel‑styled journey through the Andromeda universe.
              Trade stellar assets, bid in nebula auctions, and explore cosmic marketplaces —
              all in deep‑space retro style.
            </Text>
            <Button
              as={NextLink}
              href={LINKS.cw20Token("cosmic-exchange")}
              variant="ghost"
              colorScheme="teal"
              size="lg"
              px={6}
              py={4}
              fontFamily="'Press Start 2P', monospace"
              textTransform="uppercase"
              letterSpacing="2px"
              border="2px solid"
              borderColor="teal.600"
              borderRadius="0"
              bg="blackAlpha.700"
              color="teal.300"
              _hover={{
                bg: "blackAlpha.800",
                borderColor: "teal.500",
                color: "teal.200",
              }}
            >
              Enter the Nexus
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
