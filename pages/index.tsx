import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/index.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <main className={styles.container}>
          <div className={styles.row}>
            <h1 className={styles.title}>Page Not Found</h1>
            <p>There doesn&apos;t seem to be anything here yet.</p>
            <p>
              Contact:{' '}
              <Link href="mailto:cilions@pm.me">
                <a>cilions@pm.me</a>
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
