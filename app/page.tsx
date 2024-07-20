"use client";

import useSWR from "swr";
import { fetcher } from "@/libs";
import Link from "next/link";
import Nav from "@/components/Nav";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

export default function Home() {
  const { version } = require("@/package.json");

  const { data: user, error: userError } = useSWR(
    "https://api.github.com/users/cilions",
    fetcher
  );

  const { data: repos, error: reposError } = useSWR(
    "https://api.github.com/users/cilions/repos",
    fetcher
  );

  if (userError || reposError) return <Error />;
  if (!user || !repos) return <Loading />;

  return (
    <>
      <Nav />

      <div>
        <h3>open repos:</h3>
        {repos.map((repo: any) => (
          <p key={repo.id}>
            <Link href={repo.html_url}>{repo.full_name}</Link>
            <div style={{ margin: "0" }}>{repo.description}</div>
          </p>
        ))}
      </div>

      <div style={{ margin: "2rem 0" }}>
        <h3>social:</h3>
        <Link href="https://x.com/cilions_">
          <p>x.com/cilions_</p>
        </Link>
        <Link href="https://github.com/cilions">
          <p>github.com/cilions</p>
        </Link>
        <Link href="https://linkedin.com/in/cilions">
          <p>linkedin.com/in/cilions</p>
        </Link>
      </div>

      <h3>mail:</h3>
      <a href="mailto:cilions@pm.me">
        <p>cilions@pm.me</p>
      </a>

      <p style={{ margin: "0.5rem 0 0 0" }}>
        v{version} ~ @{user.login}
      </p>
    </>
  );
}
