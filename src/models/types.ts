export type User = {
  id: number;
  username: string;
  avatarUrl: string;
  profile: string;
  name: string;
  email: string;
  bio: string;
  location: string;
  company: string;
  blog: string;
  followers: number;
  reposUrl: string;
  popularRepositoryName: string;
  repositories: Repository[];
};

export type Repository = {
  id: number;
  name: string;
  stars: number;
  description: string;
};
