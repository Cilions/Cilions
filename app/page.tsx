import Link from "next/link";
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
    fetch("https://api.github.com/users/cilions").then((res) => res.json()),
    fetch("https://api.github.com/users/cilions/repos").then((res) => res.json()),
  ]);
  return { user: userData as User, repos: reposData as Repo[] };
}

export default async function Home() {
  const { user, repos } = await getData();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="m-0 sm:m-4 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="rounded-md p-4 transition duration-300 hover:shadow-md flex flex-col"
            >
              <Link href={repo.html_url} rel="noopener noreferrer" target="_blank">
                <h3 className="text-lg font-medium">{repo.full_name}</h3>
              </Link>
              <p className="flex-grow">{repo.description}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="p-4 flex flex-row items-center">
        <div className="space-x-4 font-medium">
          {[
            { href: "https://x.com/cilions_", text: "x.com/cilions_" },
            { href: "https://github.com/cilions", text: "github.com/cilions" },
            { href: "https://linkedin.com/in/cilions", text: "linkedin.com/in/cilions" },
          ].map(({ href, text }) => (
            <Link key={href} href={href} rel="noopener noreferrer" target="_blank">
              <p>{text}</p>
            </Link>
          ))}
          <Link href="mailto:cilions@pm.me">
            <p>cilions@pm.me</p>
          </Link>
        </div>
      </footer>
    </div>
  );
}
