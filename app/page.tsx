// app/page.tsx
import Link from "next/link";
import Nav from "@/components/Nav";
import { version } from "@/package.json";

interface User {
  login: string;
}

interface Repo {
  id: number;
  full_name: string;
  html_url: string;
  description: string;
}

async function getData() {
  const [userData, reposData] = await Promise.all([
    fetch('https://api.github.com/users/cilions').then(res => res.json()),
    fetch('https://api.github.com/users/cilions/repos').then(res => res.json())
  ]);

  return { user: userData as User, repos: reposData as Repo[] };
}

export default async function Home() {
  const { user, repos } = await getData();

  return (
    <>
      <Nav />
      <main>
        <section>
          <h3>Open repos:</h3>
          {repos.map((repo) => (
            <div key={repo.id}>
              <Link href={repo.html_url}>{repo.full_name}</Link>
              <p>{repo.description}</p>
            </div>
          ))}
        </section>

        <section style={{ margin: "2rem 0" }}>
          <h3>Social:</h3>
          {[
            { href: "https://x.com/cilions_", text: "x.com/cilions_" },
            { href: "https://github.com/cilions", text: "github.com/cilions" },
            { href: "https://linkedin.com/in/cilions", text: "linkedin.com/in/cilions" }
          ].map(({ href, text }) => (
            <Link key={href} href={href}>
              <p>{text}</p>
            </Link>
          ))}
        </section>

        <section>
          <h3>Mail:</h3>
          <a href="mailto:cilions@pm.me">
            <p>cilions@pm.me</p>
          </a>
        </section>

        <footer style={{ margin: "0.5rem 0 0 0" }}>
          <p>v{version} ~ @{user?.login}</p>
        </footer>
      </main>
    </>
  );
}
