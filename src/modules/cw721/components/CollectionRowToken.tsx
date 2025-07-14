import NextLink from 'next/link';
import { IBaseCollection } from "@/lib/app/types";
import { useGetCw721Token } from "@/lib/graphql/hooks/cw721";
import FallbackImage from "@/modules/common/ui/Image/FallbackImage";
import { LINKS } from "@/utils/links";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React, { FC, useMemo } from "react";

interface CollectionRowTokenProps {
  tokenId: string;
  collection: IBaseCollection;
  contractAddress: string;
}

const CollectionRowToken: FC<CollectionRowTokenProps> = (props) => {
  const { collection, contractAddress, tokenId } = props;
  const { data: token } = useGetCw721Token(contractAddress, tokenId);

  return (
    <Box p={2}>
      <NextLink href={LINKS.cw721Token(collection.id, tokenId)} passHref legacyBehavior>
        <FallbackImage as="a" src={token?.metadata?.image} alt="Image" borderRadius="lg" cursor='pointer' _hover={{ scale: "110%" }} transform='auto' transition='ease-in' transitionProperty='all' transitionDuration='150ms' />
      </NextLink>
    </Box>
  );
};

export default CollectionRowToken;
