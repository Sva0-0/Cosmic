import { useWalletModal } from "@/modules/modals/hooks";
import { PlusIcon } from "@/theme/icons";
import { Button, Icon } from "@chakra-ui/react";
import React, { FC } from "react";
import Connected from "./Connected";
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient";
import { useAndromedaStore } from "@/zustand/andromeda";
import { Plus } from "lucide-react";

interface ConnectWalletProps {}

const ConnectWallet: FC<ConnectWalletProps> = (props) => {
  const {} = props;
  const { isLoading } = useAndromedaStore();
  const client = useAndromedaClient();
  const open = useWalletModal();

  if (client) {
    return <Connected data-testid="connected-wallet" />;
  }

  return (
    <Button
      leftIcon={<Icon as={Plus} boxSize={5} color="cyan.800" />}
      colorScheme="cyan"
      variant="retro"
      onClick={open}
      isLoading={isLoading}
      data-testid="connect-wallet-button"
      size="md"
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
      Connect Wallet
    </Button>
  );
};

export default ConnectWallet;
