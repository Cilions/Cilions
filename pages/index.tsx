import { version, name } from '../utils/getPackageInfo'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then(res => res.json())

const Home: NextPage = () => {
  const { data, error } = useSWR(
    'https://api.github.com/users/Cilions',
    fetcher
  )

  if (error) return <pre>failed to load</pre>
  if (!data) return <pre>loading...</pre>

  return (
    <>
      <Head>
        <title>
          {data.login} ~ {data.bio}
        </title>
      </Head>

      {/* v0.2 */}

      <pre>
        {data.login} ~ {data.bio}
      </pre>

      <pre style={{ margin: '2rem 0' }}>✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿</pre>

      <div style={{ margin: '2rem 0' }}>
        <pre>Twitter:</pre>
        <Link href="https://twitter.com/Cilions_">
          <a>
            <pre>twitter.com/Cilions_</pre>
          </a>
        </Link>

        <pre>Github:</pre>
        <Link href="https://github.com/Cilions">
          <a>
            <pre>github.com/Cilions</pre>
          </a>
        </Link>

        <pre>Instagram:</pre>
        <Link href="https://instagram.com/_cilions">
          <a>
            <pre>instagram.com/_cilions</pre>
          </a>
        </Link>

        <pre>Pinterest:</pre>
        <Link href="https://pinterest.com/cilions">
          <a>
            <pre>pinterest.com/Cilions</pre>
          </a>
        </Link>
      </div>

      <pre>Mail:</pre>
      <a href="mailto:cilions@pm.me">
        <pre>cilions@pm.me</pre>
      </a>

      <pre style={{ margin: '4rem 0' }}></pre>

      <Link href="https://github.com/Cilions/my-app">
        <a>
          <pre>Source code</pre>
        </a>
      </Link>
      <Link href="https://app.splitbee.io/public/cilions.icu">
        <a>
          <pre>Traffic analytics</pre>
        </a>
      </Link>
      <pre style={{ margin: '2rem 0' }}>v{version} ~ @{name} ❤️</pre>
    </>
  )
}

export default Home
