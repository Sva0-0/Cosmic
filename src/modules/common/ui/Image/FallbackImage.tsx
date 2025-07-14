import { Image, ImageProps } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react"

interface Props extends ImageProps {
}

const FallbackImage: FC<Props> = (props) => {
    return (
        <Image 
            fallbackSrc="/fallback.svg" 
            alt="Image" 
            borderRadius={0}
            border="2px solid"
            borderColor="cyan.800"
            boxShadow="inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)"
            transition="all 0.3s ease"
            _hover={{
                boxShadow: "0 0 10px rgba(0, 255, 255, 0.5), inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3)",
                borderColor: "cyan.700",
            }}
            {...props} 
        />
    )
}

export default FallbackImage