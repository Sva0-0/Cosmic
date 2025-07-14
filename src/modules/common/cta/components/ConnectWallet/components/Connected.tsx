import useQueryChain from "@/lib/graphql/hooks/chain/useChainConfig";
import {
  ChevronDownIcon,
  CopyIcon,
  ExternalLinkIcon,
  LogOutIcon,
  ProfileIcon,
} from "@/modules/common/icons";
import { CopyButton } from "@/modules/common/ui";
import { truncate } from "@/utils/text";
import { disconnectAndromedaClient, useAndromedaStore } from "@/zustand/andromeda";
import {
  Badge,
  Button,
  HStack,
  Image,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface ConnectedProps { }
const Connected: FC<ConnectedProps> = (props) => {
  const { } = props;
  const { accounts, chainId } = useAndromedaStore();
  const account = accounts[0];
  const { data: config } = useQueryChain(chainId);

  return (
    <Popover placement="bottom-end">
      {({ isOpen }) => (
        <>
          <PopoverTrigger>
            <Button
              variant="retro"
              colorScheme="cyan"
              size="md"
              borderColor={isOpen ? "cyan.800" : "cyan.800"}
              fontFamily="'Press Start 2P', monospace"
              fontSize="10px"
              textTransform="uppercase"
              letterSpacing="1px"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 0 15px rgba(0, 255, 255, 0.8), inset 3px 3px 0 rgba(255, 255, 255, 0.2), inset -3px -3px 0 rgba(0, 0, 0, 0.4), 0 6px 12px rgba(0, 0, 0, 0.6)",
              }}
              _active={{
                transform: "translateY(2px)",
                boxShadow: "inset -3px -3px 0 rgba(255, 255, 255, 0.2), inset 3px 3px 0 rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.4)",
              }}
            >
              <HStack mr='2'>
                <Image src={config?.iconUrls?.sm ?? ""} w="5" alt="Chain icon" />
                <Text 
                  fontFamily="'Orbitron', monospace"
                  fontSize="12px"
                  color="cyan.800"
                  textShadow="1px 1px 0 rgba(0, 0, 0, 0.5)"
                >
                  {truncate(account?.address ?? "")}
                </Text>
                <Badge
                  colorScheme={
                    config?.chainType === "mainnet" ? "success" : "magenta"
                  }
                  fontSize={8}
                  pt="1"
                  borderRadius={0}
                  fontFamily="'Press Start 2P', monospace"
                  textTransform="uppercase"
                  letterSpacing="1px"
                  border="1px solid"
                  borderColor={config?.chainType === "mainnet" ? "success.800" : "magenta.800"}
                >
                  {config?.chainType}
                </Badge>
              </HStack>
              <ChevronDownIcon boxSize={4} color="cyan.800" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            bg="rgba(26, 26, 46, 0.95)"
            border="2px solid"
            borderColor="cyan.800"
            borderRadius={0}
            backdropFilter="blur(10px)"
            boxShadow="inset 2px 2px 0 rgba(255, 255, 255, 0.1), inset -2px -2px 0 rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.7)"
          >
            <PopoverBody>
              <HStack mb={3} justifyContent="start">
                <Image src={config?.iconUrls?.sm ?? ""} w="5" alt="Chain icon" />
                <Text 
                  fontWeight={600} 
                  color="cyan.800"
                  fontFamily="'Orbitron', monospace"
                  textShadow="1px 1px 0 rgba(0, 0, 0, 0.5)"
                >
                  {config?.chainName ?? config?.chainId}
                </Text>
                <Badge
                  colorScheme={
                    config?.chainType === "mainnet" ? "success" : "magenta"
                  }
                  fontSize={8}
                  pt="1"
                  borderRadius={0}
                  fontFamily="'Press Start 2P', monospace"
                  textTransform="uppercase"
                  letterSpacing="1px"
                  border="1px solid"
                  borderColor={config?.chainType === "mainnet" ? "success.800" : "magenta.800"}
                >
                  {config?.chainType}
                </Badge>
              </HStack>
              <Input
                value={account?.address ?? ""}
                mb={2}
                p={2}
                color="cyan.800"
                fontSize="sm"
                readOnly
                variant="retro"
                fontFamily="'Orbitron', monospace"
                bg="rgba(26, 26, 46, 0.8)"
                borderColor="cyan.800"
              />
              <HStack mb={2}>
                <CopyButton
                  leftIcon={<CopyIcon boxSize={4} color="cyan.800" />}
                  variant="retro"
                  colorScheme="cyan"
                  fontWeight={500}
                  color="cyan.800"
                  text={account?.address ?? ""}
                  w="full"
                  fontFamily="'Press Start 2P', monospace"
                  fontSize="10px"
                  textTransform="uppercase"
                  letterSpacing="1px"
                >
                  Copy address
                </CopyButton>
                <Button
                  as="a"
                  href={config?.blockExplorerAddressPages[0]?.replaceAll(
                    "${address}",
                    account?.address ?? ""
                  )}
                  target="_blank"
                  leftIcon={<ExternalLinkIcon boxSize={4} color="cyan.800" />}
                  variant="retro"
                  colorScheme="cyan"
                  fontWeight={500}
                  color="cyan.800"
                  w="full"
                  fontFamily="'Press Start 2P', monospace"
                  fontSize="10px"
                  textTransform="uppercase"
                  letterSpacing="1px"
                >
                  Explorer
                </Button>
              </HStack>
              {/* <Box
                border="1px solid"
                borderColor="gray.300"
                borderRadius="md"
                p={2}
                mb={2}
              >
                <VStack spacing={2} align="flex-start">
                  {TOKENS.map(({ logo, name }) => {
                    return <HoldingItem key={name} logo={logo} name={name} />;
                  })}
                </VStack>
              </Box> */}
              <Button
                leftIcon={<LogOutIcon boxSize={4} color="error.800" />}
                variant="retro"
                colorScheme="error"
                onClick={disconnectAndromedaClient}
                fontWeight={500}
                color="error.800"
                w="full"
                fontFamily="'Press Start 2P', monospace"
                fontSize="10px"
                textTransform="uppercase"
                letterSpacing="1px"
              >
                Disconnect
              </Button>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};
export default Connected;
