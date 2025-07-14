import {
  Button,
  Flex,
  Input,
  useNumberInput,
  UseNumberInputProps,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface NumberInputProps extends UseNumberInputProps {}
const NumberInput: FC<NumberInputProps> = (props) => {
  const { ...hookProps } = props;
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput(hookProps);

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <Flex direction="row" gap="2" align="center">
      <Button 
        {...inc}
        variant="retro"
        colorScheme="cyan"
        size="sm"
        fontFamily="'Press Start 2P', monospace"
        fontSize="10px"
        textTransform="uppercase"
        letterSpacing="1px"
        minW="40px"
        h="40px"
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "0 0 15px rgba(0, 255, 255, 0.8), inset 3px 3px 0 rgba(255, 255, 255, 0.2), inset -3px -3px 0 rgba(0, 0, 0, 0.4), 0 6px 12px rgba(0, 0, 0, 0.6)",
        }}
        _active={{
          transform: "translateY(2px)",
          boxShadow: "inset -3px -3px 0 rgba(255, 255, 255, 0.2), inset 3px 3px 0 rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.4)",
        }}
      >
        +
      </Button>
      <Input 
        {...input}
        variant="retro"
        fontFamily="'Orbitron', monospace"
        fontSize="14px"
        textAlign="center"
        color="cyan.800"
        bg="rgba(26, 26, 46, 0.8)"
        borderColor="cyan.800"
        _focus={{
          boxShadow: "0 0 15px rgba(0, 255, 255, 0.8), inset 3px 3px 0 rgba(255, 255, 255, 0.1), inset -3px -3px 0 rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.6)",
        }}
      />
      <Button 
        {...dec}
        variant="retro"
        colorScheme="cyan"
        size="sm"
        fontFamily="'Press Start 2P', monospace"
        fontSize="10px"
        textTransform="uppercase"
        letterSpacing="1px"
        minW="40px"
        h="40px"
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "0 0 15px rgba(0, 255, 255, 0.8), inset 3px 3px 0 rgba(255, 255, 255, 0.2), inset -3px -3px 0 rgba(0, 0, 0, 0.4), 0 6px 12px rgba(0, 0, 0, 0.6)",
        }}
        _active={{
          transform: "translateY(2px)",
          boxShadow: "inset -3px -3px 0 rgba(255, 255, 255, 0.2), inset 3px 3px 0 rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.4)",
        }}
      >
        -
      </Button>
    </Flex>
  );
};
export default NumberInput;
