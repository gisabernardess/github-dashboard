import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  Icon,
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="16"
      mx="auto"
      px="6"
      align="center"
      bg="blue.900"
      borderBottomWidth="1px"
      borderBottomColor="blue.800"
    >
      <Flex
        w="100%"
        maxW={1024}
        h="100%"
        mx="auto"
        align="center"
        justify="space-between"
      >
        <Image src="images/logo.png" alt="UPHILL" />
        <InputGroup size="sm" w="50%">
          <InputLeftElement pointerEvents="none">
            <Icon as={AiOutlineSearch} color="blue.900" />
          </InputLeftElement>
          <Input placeholder="Search" bg="white" borderRadius="3xl" />
        </InputGroup>
      </Flex>
    </Flex>
  );
}
