'use client';

import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  chakra,
  Box,
  Image,
} from '@chakra-ui/react';
import React, { FC } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  emojiIcon?: string;
}

const Feature = ({ text, emojiIcon, iconBg }: FeatureProps) => (
  <Stack direction={'row'} align={'center'}>
    <Flex
      w={12}
      h={12}
      align={'center'}
      justify={'center'}
      borderRadius={0}
      bg={iconBg}
      border="2px solid"
      borderColor="cyan.800"
      boxShadow="inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)"
      fontFamily="'Press Start 2P', monospace"
      fontSize="16px"
    >
      {emojiIcon}
    </Flex>
    <Text
      fontWeight={700}
      fontFamily="'Orbitron', monospace"
      color="cyan.800"
      textShadow="1px 1px 0 rgba(0, 0, 0, 0.5)"
      fontSize="14px"
    >
      {text}
    </Text>
  </Stack>
);

interface FeaturesWImageProps {}
const FeaturesWImage: FC<FeaturesWImageProps> = () => {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'cyan.800'}
            fontWeight={700}
            fontSize={'12px'}
            fontFamily="'Press Start 2P', monospace"
            bg="rgba(26, 26, 46, 0.8)"
            border="2px solid"
            borderColor="cyan.800"
            borderRadius={0}
            p={3}
            alignSelf={'flex-start'}
            boxShadow="inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)"
            textShadow="1px 1px 0 rgba(0, 0, 0, 0.5)"
          >
            COSMIC NEXUS FEATURES
          </Text>
          <Heading
            fontFamily="'Press Start 2P', monospace"
            fontSize="2xl"
            color="cyan.800"
            textTransform="uppercase"
            letterSpacing="2px"
            textShadow="2px 2px 0 rgba(0, 0, 0, 0.5), 0 0 8px rgba(0, 255, 255, 0.3)"
          >
            EXPLORE THE ANDROMEDA UNIVERSE 🌌
          </Heading>
          <Text
            color={'cyan.600'}
            fontSize={'lg'}
            fontFamily="'Orbitron', monospace"
            textShadow="1px 1px 0 rgba(0, 0, 0, 0.5)"
          >
            <chakra.span fontWeight="bold" color="magenta.800">COSMIC NEXUS</chakra.span> is your gateway to the retro pixel Andromeda universe! 
            Trade stellar assets, bid in nebula auctions, and explore galactic marketplaces in this cosmic digital frontier!
          </Text>
          <Stack
            spacing={4}
            divider={<StackDivider borderColor="cyan.800" opacity="0.3" />}
          >
            <Feature emojiIcon={'🚀'} iconBg="rgba(26, 26, 46, 0.8)" text={'STELLAR TRADING'} />
            <Feature emojiIcon={'⭐'} iconBg="rgba(26, 26, 46, 0.8)" text={'NEBULA AUCTIONS'} />
            <Feature emojiIcon={'🌌'} iconBg="rgba(26, 26, 46, 0.8)" text={'GALACTIC MARKETPLACE'} />
          </Stack>
        </Stack>
        <Flex>
          <Box
            w="full"
            h="400px"
            borderRadius={0}
            bg="rgba(26, 26, 46, 0.8)"
            backdropFilter="blur(10px)"
            border="3px solid"
            borderColor="cyan.800"
            boxShadow="inset 3px 3px 0 rgba(255, 255, 255, 0.1), inset -3px -3px 0 rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.7)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            overflow="hidden"
          >
            {/* Instead of emoji: GIF as pixel icon */}
            <Box position="relative" zIndex="1" textAlign="center">
              <Image
                src="https://i.gifer.com/P9q.gif"
                alt="Cosmic GIF"
                w="120px"
                h="120px"
                border="2px solid"
                borderColor="cyan.800"
                borderRadius={0}
                objectFit="cover"
                boxShadow="0 0 12px rgba(0, 255, 255, 0.4)"
              />
              <Text
                fontFamily="'Press Start 2P', monospace"
                fontSize="12px"
                color="cyan.800"
                textTransform="uppercase"
                letterSpacing="2px"
                mt={4}
                textShadow="1px 1px 0 rgba(0, 0, 0, 0.5)"
              >
                COSMIC NEXUS
              </Text>
            </Box>
          </Box>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default FeaturesWImage;
