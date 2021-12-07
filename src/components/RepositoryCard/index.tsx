import {
  Box,
  VStack,
  Heading,
  HStack,
  Icon,
  Text,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';
import { MdStars } from 'react-icons/md';

import { Repository } from '../../models/types';

interface RepositoryCardProps {
  repository: Repository;
  isUser?: boolean;
}

export function RepositoryCard({ repository, isUser }: RepositoryCardProps) {
  return (
    <>
      {isUser ? (
        <Box
          w={60}
          h={20}
          borderColor="blue.500"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <SimpleGrid columns={2} templateColumns="0.1fr 2fr">
            <Box h={20} w={1.5} bg="blue.500" />

            <Flex direction="column" justify="space-evenly" mx={2}>
              <Flex justify="space-between">
                <Heading as="h4" size="sm" noOfLines={1} isTruncated>
                  {repository.name}
                </Heading>

                <HStack spacing={1}>
                  <Icon as={MdStars} color="blue.500" />
                  <Text as="span" color="blue.500">
                    {repository.stars}
                  </Text>
                </HStack>
              </Flex>

              <Text fontSize="xs" noOfLines={1}>
                {repository.description}
              </Text>
            </Flex>
          </SimpleGrid>
        </Box>
      ) : (
        <Box
          w={60}
          h={60}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
        >
          <Box h={1.5} bg="blue.900" />

          <VStack
            h="100%"
            p={6}
            align="center"
            justify="center"
            textAlign="center"
            spacing={4}
          >
            <Heading as="h4" size="md" noOfLines={1} isTruncated>
              {repository.name}
            </Heading>
            <HStack spacing={1} align="center" justify="center">
              <Icon as={MdStars} color="blue.500" />
              <Text as="span" color="blue.500">
                {repository.stars}
              </Text>
            </HStack>
            <Text noOfLines={4}>{repository.description}</Text>
          </VStack>
        </Box>
      )}
    </>
  );
}
