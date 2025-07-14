import { Skeleton, Stack, Box, Text } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react"

interface Props {
    children?: ReactNode;
    loading?: boolean;
}

const Loading: FC<Props> = (props) => {
    const { children, loading = false } = props;
    if (loading) {
        return (
            <Stack mt='6' gap='4' align="center">
                {/* Retro pixel loading spinner */}
                <Box
                    className="pixel-loader"
                    borderRadius={0}
                    boxShadow="0 0 20px rgba(0, 255, 255, 0.5)"
                />
                <Text
                    fontFamily="'Press Start 2P', monospace"
                    fontSize="12px"
                    color="cyan.800"
                    textTransform="uppercase"
                    letterSpacing="2px"
                    textShadow="1px 1px 0 rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 255, 255, 0.5)"
                    animation="cosmic-glow 2s ease-in-out infinite alternate"
                >
                    Loading...
                </Text>
                <Stack gap='4' w="full">
                    <Skeleton 
                        h="14" 
                        borderRadius={0}
                        bg="rgba(26, 26, 46, 0.8)"
                        border="2px solid"
                        borderColor="cyan.800"
                        boxShadow="inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)"
                        startColor="cyan.800"
                        endColor="cyan.600"
                    />
                    <Skeleton 
                        h="14" 
                        borderRadius={0}
                        bg="rgba(26, 26, 46, 0.8)"
                        border="2px solid"
                        borderColor="cyan.800"
                        boxShadow="inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)"
                        startColor="cyan.800"
                        endColor="cyan.600"
                    />
                    <Skeleton 
                        h="14" 
                        borderRadius={0}
                        bg="rgba(26, 26, 46, 0.8)"
                        border="2px solid"
                        borderColor="cyan.800"
                        boxShadow="inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)"
                        startColor="cyan.800"
                        endColor="cyan.600"
                    />
                </Stack>
            </Stack>
        )
    }
    return (
        <>
            {children}
        </>
    )
}

export default Loading