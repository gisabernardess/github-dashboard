import { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Icon,
  HStack,
  VStack,
  Divider,
  Avatar,
} from '@chakra-ui/react';
import { HiOutlineUser } from 'react-icons/hi';

import { api } from '../../services/api';

import { RepositoryCard } from '../RepositoryCard';

import { Repository, User } from '../../models/types';

interface UserCardProps {
  user: Pick<User, 'id' | 'username' | 'popularRepositoryName'>;
}

export function UserCard({ user }: UserCardProps) {
  const [developer, setDeveloper] = useState<User>({} as User);
  const [repository, setRepository] = useState<Repository>({} as Repository);

  useEffect(() => {
    api.get(`/users/${user.username}`).then(({ data }) =>
      setDeveloper({
        id: data.id,
        username: data.login,
        avatarUrl: data.avatar_url,
        profile: data.html_url,
        name: data.name,
        email: data.email,
        bio: data.bio,
        location: data.location,
        company: data.company,
        blog: data.blog,
        followers: data.followers,
        reposUrl: data.repos_url,
      } as User),
    );

    api
      .get(`/repos/${user.username}/${user.popularRepositoryName}`)
      .then(({ data }) =>
        setRepository({
          id: data.id,
          name: data.name,
          stars: data.stargazers_count,
          description: data.description,
        }),
      );
  }, [user.popularRepositoryName, user.username]);

  return (
    <Box
      w={80}
      h={80}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
    >
      <Box
        h={20}
        bg={`linear-gradient(to right, rgb(167,167,167,0.5), rgb(167,167,167,0.5)), no-repeat center/cover url("${developer.avatarUrl}")`}
      />

      <Box h={7} textAlign="center">
        <Avatar
          size="lg"
          name={developer.name}
          src={developer.avatarUrl}
          bottom="3rem"
        />
      </Box>

      <VStack spacing={2.5} align="center" justify="center">
        <Heading as="h4" size="md">
          {developer.name}
        </Heading>
        <Text fontSize="sm">@{developer.email ?? developer.username}</Text>
        <HStack align="center" justify="center">
          <Icon as={HiOutlineUser} />
          <Text as="span" fontWeight="700">
            {developer.followers}
          </Text>
          <Text as="span" color="gray.400">
            Followers
          </Text>
        </HStack>

        <Divider w="80%" />

        {repository && <RepositoryCard repository={repository} isUser />}
      </VStack>
    </Box>
  );
}
