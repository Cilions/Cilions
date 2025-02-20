import type { User } from "@/utils/interfaces"

export async function fetchUserData(): Promise<User> {
  const userData = await fetch(
    `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
  )
  const userJson = await userData.json()
  return userJson
}

export async function fetchLastUpdate(): Promise<string> {
  const lastCommitResponse = await fetch(
    `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/repos/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/commits`
  )
  const commits = await lastCommitResponse.json()
  const lastCommitDate = new Date(commits[0].commit.author.date)
  return `${lastCommitDate.toLocaleString("default", {
    month: "short",
  })}, ${lastCommitDate.getFullYear()}`
}