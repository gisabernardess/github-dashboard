import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';
import { Flex, VStack } from '@chakra-ui/react';

import { api, trending } from '../services/api';

import { ListCard, RepositoryCard, UserCard } from '../components';

import { Repository, User } from '../models/types';

interface HomeProps {
  users: Pick<User, 'id' | 'username' | 'popularRepositoryName'>[];
  repositories: Repository[];
}

export default function Home({ users, repositories }: HomeProps) {
  return (
    <Flex as="main" w="100%" h="calc(100vh - 4rem)" mx="auto" px="6">
      <Flex w="100%" maxW={1024} h="100%" mx="auto">
        <VStack w="100%" mt={6}>
          <ListCard title="Trending Users">
            {users?.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </ListCard>
          <ListCard title="Most Active Users">
            {users?.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </ListCard>
          <ListCard title="Top Repositories">
            {repositories?.map((repository) => (
              <RepositoryCard key={repository.id} repository={repository} />
            ))}
          </ListCard>
        </VStack>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: trendingUsers } = await trending.get('/developers');
  // const { data: activeUsers } = await api.get(
  //   '/search/users?q=sort:followers&order:desc',
  // );
  const { data: trendingRepos } = await trending.get('/repositories');

  const developers = await trendingUsers
    .filter((trend) => trend.rank <= 3)
    .map(
      (user) =>
        ({
          id: user.rank,
          username: user.username,
          popularRepositoryName: user.popularRepository.repositoryName,
        } as User),
    );

  //console.log(activeUsers);

  const repositories = await trendingRepos
    .filter((trend) => trend.rank <= 4)
    .map(
      (repo) =>
        ({
          id: repo.rank,
          name: repo.repositoryName,
          stars: repo.totalStars,
          description: repo.description,
        } as Repository),
    );

  return {
    props: { users: developers, repositories: repositories },
  };
};
