'use client'

import useSWR from 'swr'
import { fetcher } from '@/libs'
import Nav from '@/components/Nav'

export default function CommitsPage() {
  const { data: commits, error: commitsError } = useSWR(
    'https://api.github.com/repos/cilions/my-app/commits',
    fetcher
  )

  if (commitsError) return <div>failed to load</div>
  if (!commits) return <div>loading...</div>

  return (
    <>
      <Nav />
      <ul>
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
  )
}
