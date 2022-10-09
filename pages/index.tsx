import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

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
        <title>Cilions ~ {data.bio}</title>
      </Head>

      {/* v0.2 */}

      <pre>Cilions ~ {data.bio}</pre>

      <pre style={{ margin: '2rem 0' }}>✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿</pre>

      <div style={{ margin: '2rem 0' }}>
        <pre>Twitter: (private)</pre>
        <Link href="https://twitter.com/Cilions_">
          <a>
            <pre>twitter.com/Cilions_</pre>
          </a>
        </Link>

        <pre>Spotify:</pre>
        <Link href="https://open.spotify.com/user/2gtgl72ljc9zuop4gun3d6qih">
          <a>
            <pre>spotify.com/user/2gtgl72ljc9zuop4gun3d6qih</pre>
          </a>
        </Link>

        <pre>Discord:</pre>
        <pre>Cilions#3795 (just copy)</pre>

        <pre>Github:</pre>
        <Link href="https://github.com/Cilions">
          <a>
            <pre>github.com/Cilions</pre>
          </a>
        </Link>

        <pre>Gitlab: (private)</pre>
        <Link href="https://gitlab.com/Cilions">
          <a>
            <pre>gitlab.com/Cilions</pre>
          </a>
        </Link>

        <pre>Google Developers: (private)</pre>
        <Link href="https://g.dev/clion">
          <a>
            <pre>g.dev/clion</pre>
          </a>
        </Link>
      </div>

      <pre>Mail:</pre>
      <a href="mailto:cilions@pm.me">
        <pre>cilions@pm.me</pre>
      </a>

      <pre style={{ margin: '2rem 0' }}>v0.2.1 ~ @cilions ❤️</pre>
    </>
  )
}

export default Home
