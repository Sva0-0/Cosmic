import React, { FC, ReactNode } from "react"
import Providers from "./providers";
import { Metadata } from "next";
import PixelBackground from "@/modules/common/layout/components/PixelBackground";

export const metadata: Metadata = {
    title: {
        default: "COSMIC NEXUS - Retro Pixel Andromeda Universe",
        template: "%s | COSMIC NEXUS"
    },
    description: "Explore the retro pixel Andromeda universe with Cosmic Nexus - your gateway to stellar trading, nebula auctions, and galactic marketplaces.",
    keywords: ["cosmic nexus", "andromeda", "retro pixel", "blockchain", "trading", "auctions", "marketplace", "cosmic", "universe"],
    authors: [{ name: "Cosmic Nexus Team" }],
    openGraph: {
        title: "COSMIC NEXUS - Retro Pixel Andromeda Universe",
        description: "Explore the retro pixel Andromeda universe with Cosmic Nexus - your gateway to stellar trading, nebula auctions, and galactic marketplaces.",
        type: "website",
    },
}

interface Props {
    children?: ReactNode;
}

const RootLayout = async (props: Props) => {
    const { children } = props;

    return (
        <html lang="en">
            <body>
                <Providers>
                    <PixelBackground />
                    {children}
                </Providers>
            </body>
        </html>
    )
}

export default RootLayout