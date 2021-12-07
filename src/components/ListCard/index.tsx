import { Box, Heading, HStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ListCardProps {
  title: string;
  children: ReactNode;
}

export function ListCard({ title, children }: ListCardProps) {
  return (
    <Box w="100%" py={4} color="blue.900">
      <Heading as="h1" size="md">
        {title}
      </Heading>
      <HStack spacing={8} mt={7}>
        {children}
      </HStack>
    </Box>
  );
}
