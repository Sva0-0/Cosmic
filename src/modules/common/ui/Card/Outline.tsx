import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react"
import FallbackImage from "../Image/FallbackImage";

interface Props {
    children?: ReactNode;
    img?: string;
    link: string;
}

const CardOutline: FC<Props> = (props) => {
    const { children, link, img } = props;
    const border = useColorModeValue("cyan.300", "cyan.800");
    const bg = useColorModeValue("rgba(234,246,255,0.8)", "rgba(26, 26, 46, 0.8)");
    return (
        <Box 
            className="retro-card"
            border="2px solid"
            borderColor={border}
            p={5} 
            borderRadius={0}
            bg={bg}
            backdropFilter="blur(10px)"
            boxShadow="inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.5)"
            transition="all 0.3s ease"
            _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.5), inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.7)",
                borderColor: useColorModeValue("cyan.400", "cyan.700"),
            }}
        >
            <FallbackImage 
                src={img} 
                alt="Image" 
                borderRadius={0} 
                cursor='pointer' 
                border="2px solid"
                borderColor="cyan.800"
                _hover={{
                    scale: "105%",
                    boxShadow: "0 0 15px rgba(0, 255, 255, 0.6)",
                    borderColor: "cyan.700",
                }} 
                transform='auto' 
                transition='all 0.3s ease'
            />
            <Box justifyContent="space-between" mt="3">
                {children}
            </Box>
        </Box>
    )
}

export default CardOutline