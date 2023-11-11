import { version } from '../utils/getPackageInfo'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then(res => res.json())

const Home: NextPage = () => {
  const { data: user, error: userError } = useSWR(
    'https://api.github.com/users/Cilions',
    fetcher
  )

  const { data: repos, error: reposError } = useSWR(
    'https://api.github.com/users/Cilions/repos',
    fetcher
  )

  if (userError || reposError) return <pre>failed to load</pre>
  if (!user || !repos) return <pre>loading...</pre>

  return (
    <>
      <Head>
        <title>
          {user.login} ~ {user.bio}
        </title>
      </Head>

      <pre>
        {user.login} ~ {user.bio}
      </pre>

      <div style={{ margin: '2rem 0' }}>
        <pre>Open Repos:</pre>
        <>
          {repos.map((repo: any) => (
            <pre key={repo.id}>
              <Link href={repo.html_url}>
                <a>{repo.full_name}</a>
              </Link>
              {/* ({repo.language}) {repo.description} */}
            </pre>
          ))}
        </>
      </div>

      <div style={{ margin: '2rem 0' }}>
        <pre>Social:</pre>
        <Link href="https://x.com/Cilions_">
          <a>
            <pre>x.com/Cilions_</pre>
          </a>
        </Link>
        <Link href="https://github.com/Cilions">
          <a>
            <pre>github.com/Cilions</pre>
          </a>
        </Link>
        <Link href="https://linkedin.com/in/cilions">
          <a>
            <pre>linkedin.com/in/cilions</pre>
          </a>
        </Link>
      </div>

      <pre>Mail:</pre>
      <a href="mailto:cilions@pm.me">
        <pre>cilions@pm.me</pre>
      </a>

      <pre style={{ margin: '2rem 0' }}>
        v{version} ~ @{user.login} ❤️
      </pre>
    </>
  )
}

export default Home
