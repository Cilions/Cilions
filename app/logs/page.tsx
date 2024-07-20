"use client";

import useSWR from "swr";
import { fetcher } from "@/libs";
import Nav from "@/components/Nav";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

export default function Logs() {
  const { data: commits, error: commitsError } = useSWR(
    "https://api.github.com/repos/cilions/me/commits",
    fetcher
  );

  if (commitsError) return <Error />;
  if (!commits) return <Loading />;

  return (
    <>
      <Nav />
      <ul style={{ padding: "0 1rem" }}>
        {commits.map((commit: any) => (
          <li key={commit.sha}>
            <p>
              <strong>{commit.commit.message}</strong>
            </p>
            <p>author: {commit.commit.author.name}</p>
            <p>date: {new Date(commit.commit.author.date).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
