import Link from "next/link"
import Image from "next/image"
import Nav from "@/components/nav"

interface User {
  login: string
  avatar_url: string
  bio: string
}

async function fetchUserData(): Promise<User> {
  const userData = await fetch("https://api.github.com/users/cilions")
  const userJson = await userData.json()
  return userJson
}

async function fetchLastUpdate(): Promise<string> {
  const lastCommitResponse = await fetch("https://api.github.com/repos/cilions/cilions/commits")
  const commits = await lastCommitResponse.json()
  const lastCommitDate = new Date(commits[0].commit.author.date)
  return `${lastCommitDate.toLocaleString("default", {
    month: "short",
  })}, ${lastCommitDate.getFullYear()}`
}

export default async function Home() {
  const user = await fetchUserData()
  const lastUpdate = await fetchLastUpdate()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-8 max-w-6xl mx-auto w-full">
        <nav className="mb-16">
          <ul className="flex space-x-6">
            <li>
              <button className="flex items-center hover:text-gray-600 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 13L2 3L10 8L2 13Z" fill="currentColor"></path>
                </svg>
                <span className="ml-2">projects</span>
              </button>
            </li>
            <li>
              <Nav className="hover:text-gray-600 transition-colors group" text="blog" />
            </li>
            <li>
              <Link
                href="https://linkedin.com/in/cilions"
                className="flex items-center hover:text-gray-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                resume
                <svg
                  className="ml-1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3H13V11M13 3L3 13" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mb-16">
          {user && (
            <>
              <div className="flex items-center gap-6 mb-6">
                <Image
                  src={user.avatar_url || "/placeholder.svg"}
                  alt="Profile"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h1 className="text-2xl font-medium mb-2">
                    {user.login} <span className="text-gray-500 font-normal">/si.li.ons/</span>
                  </h1>
                  <p className="text-gray-600">
                    {user.bio || "frontend developer, focusing on web development and user interfaces."}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mb-12">
          <p className="text-sm text-gray-500 italic mb-4">Updated in {lastUpdate}</p>
          <p className="font-serif italic text-gray-600">&ldquo;I can make something good.&rdquo;</p>
        </div>

        <div className="block group">
          <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden transition-all duration-300 group-hover:shadow-lg flex items-center justify-center">
            <p className="text-gray-500 text-lg">Coming soon...</p>
          </div>
          <h3 className="font-medium">AISW</h3>
          <p className="text-gray-600">2025 · Your Gateway to Multiple AI Models</p>
        </div>
      </main>

      <footer className="p-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            {[
              { href: "https://x.com/cilions_", text: "x.com/cilions_" },
              {
                href: "https://github.com/cilions",
                text: "github.com/cilions",
              },
              {
                href: "https://linkedin.com/in/cilions",
                text: "linkedin.com/in/cilions",
              },
              { href: "mailto:cilions@pm.me", text: "cilions@pm.me" },
            ].map(({ href, text }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-gray-600 transition-colors flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {text}
                <svg
                  className="ml-1 inline-block"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3H13V11M13 3L3 13" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} cilions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
