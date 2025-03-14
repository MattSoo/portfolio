"use client";
import Head from "next/head";
import styles from "@styles/Home.module.css";
import ContainerBlock from "@components/ContainerBlock";
import FavouriteProjects from "@components/FavouriteProjects";
import LatestCode from "@components/LatestCode";
import Hero from "@components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import { Repository } from "@lib/types";


const getLatestRepos = async (data: UserData, token?: string): Promise<Repository[] | undefined> => {
  try {
    const username = data.githubUsername;
    const headers: HeadersInit = token ? { Authorization: `Bearer ${token}` } : {};

    const res = await fetch(
      `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
      { headers }
    );

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
    }

    const json = await res.json();
    return json.items?.slice(0, 6);
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export default function Home({ repositories }: { repositories: Repository[] }) {
  return (
    <ContainerBlock
      title="Manu Arora - Developer, Writer, Creator"
      description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const get = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token?? "");

  return {
    props: {
      repositories,
    },
  };
};