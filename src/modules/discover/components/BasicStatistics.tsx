import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { FC, useMemo } from "react";


interface StatsCardProps {
  title: string
  stat: string
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'6'}
      borderRadius={0}
      bg="rgba(26, 26, 46, 0.8)"
      backdropFilter="blur(10px)"
      border={'3px solid'}
      borderColor="cyan.800"
      boxShadow="inset 3px 3px 0 rgba(255, 255, 255, 0.1), inset -3px -3px 0 rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.7)"
      className="retro-card"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "inset 3px 3px 0 rgba(255, 255, 255, 0.1), inset -3px -3px 0 rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 255, 255, 0.3)",
      }}>
      <StatLabel 
        fontWeight={'700'} 
        fontFamily="'Press Start 2P', monospace"
        fontSize="10px"
        color="cyan.800"
        textTransform="uppercase"
        letterSpacing="1px"
        textShadow="1px 1px 0 rgba(0, 0, 0, 0.5)"
        isTruncated>
        {title}
      </StatLabel>
      <StatNumber 
        fontSize={'xl'} 
        fontWeight={'700'}
        fontFamily="'Orbitron', monospace"
        color="magenta.800"
        textShadow="2px 2px 0 rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 0, 255, 0.6)">
        {stat}
      </StatNumber>
    </Stat>
  )
}

interface BasicStatisticsProps {}
const BasicStatistics: FC<BasicStatisticsProps> = (props) => {
  const {} = props;
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 
        textAlign={'center'} 
        fontSize={'3xl'} 
        py={10} 
        fontWeight={'900'}
        fontFamily="'Press Start 2P', monospace"
        color="cyan.800"
        textTransform="uppercase"
        letterSpacing="3px"
        textShadow="2px 2px 0 rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 255, 0.8)">
        COSMIC STATISTICS
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'STELLAR ASSETS'} stat={'∞ COSMIC TOKENS 🌟'} />
        <StatsCard title={'NEBULA AUCTIONS'} stat={'1000+ ACTIVE 🚀'} />
        <StatsCard title={'GALACTIC REACH'} stat={'ANDROMEDA UNIVERSE 🌌'} />
      </SimpleGrid>
    </Box>
  );
};

export default BasicStatistics;