import { Box, Text } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react"

interface Props {
    title: string;
    body: string;
}

const CardStats: FC<Props> = (props) => {
    const { title, body } = props;
    return (
        <Box
            className="retro-card"
            p={3}
            borderRadius={0}
            bg="rgba(26, 26, 46, 0.6)"
            backdropFilter="blur(10px)"
            border="2px solid"
            borderColor="cyan.800"
            boxShadow="inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.5)"
        >
            <Text 
                textStyle="light"
                fontFamily="'Press Start 2P', monospace"
                fontSize="8px"
                color="cyan.600"
                textTransform="uppercase"
                letterSpacing="1px"
                textShadow="1px 1px 0 rgba(0, 0, 0, 0.5)"
            >
                {title}
            </Text>
            <Text 
                fontWeight="bold" 
                fontSize="xs"
                fontFamily="'Orbitron', monospace"
                color="cyan.800"
                textShadow="1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 255, 255, 0.3)"
            >
                {body}
            </Text>
        </Box>
    )
}

export default CardStats