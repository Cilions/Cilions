import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args: Parameters<typeof fetch>) => 
    fetch(...args).then((res) => res.json());

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
        <title>{data.login} ~ {data.bio}</title>
      </Head>

      {/* v0.2 */}

      <pre>{data.login} ~ {data.bio}</pre>

      <pre style={{ margin: '2rem 0' }}>✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿</pre>

      <div style={{ margin: '2rem 0' }}>

      <pre>Inst: (private)</pre>
        <Link href="https://instagram.com/_cilions">
          <a>
            <pre>instagram.com/_cilions</pre>
          </a>
        </Link>

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
        <Link href="https://discordapp.com/users/608740202491674634">
          <a>
            <pre>discordapp.com/users/608740202491674634</pre>
          </a>
        </Link>

        <pre style={{ margin: '2rem 0' }}>๑ ⋆˚₊⋆─────────────⋆˚₊⋆ ๑</pre>

        <pre>Github:</pre>
        <Link href="https://github.com/Cilions">
          <a>
            <pre>github.com/Cilions</pre>
          </a>
        </Link>

        <pre>LinkedIn:</pre>
        <Link href="https://linkedin.com/in/cilions">
          <a>
            <pre>linkedin.com/in/cilions</pre>
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

      <pre style={{ margin: '2rem 0' }}>v0.2.4 ~ @cilions ❤️</pre>
    </>
  )
}

export default Home
