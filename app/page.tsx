'use client'

import { ReCaptchaProvider } from 'next-recaptcha-v3'
import useSWR from 'swr'
import { fetcher } from '@/libs'
import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
  const { version } = require('@/package.json')

  const { data: user, error: userError } = useSWR(
    'https://api.github.com/users/cilions',
    fetcher
  )

  const { data: repos, error: reposError } = useSWR(
    'https://api.github.com/users/cilions/repos',
    fetcher
  )

  if (userError || reposError) return <pre>failed to load</pre>
  if (!user || !repos) return <pre>loading...</pre>

  return (
    <>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
        </Script>

        <pre>
          {user.login} ~ {user.bio}
        </pre>

        <div style={{ margin: '2rem 0' }}>
          <pre>Open Repos:</pre>
          <>
            {repos.map((repo: any) => (
              <pre key={repo.id}>
                <Link href={repo.html_url}>{repo.full_name}</Link>{' '}
                {repo.node_id}
                <pre style={{ margin: '0' }}>{repo.description}</pre>
              </pre>
            ))}
          </>
        </div>

        <div style={{ margin: '2rem 0' }}>
          <pre>Social:</pre>
          <Link href="https://x.com/cilions_">
            <pre>x.com/cilions_</pre>
          </Link>
          <Link href="https://github.com/cilions">
            <pre>github.com/cilions</pre>
          </Link>
          <Link href="https://linkedin.com/in/cilions">
            <pre>linkedin.com/in/cilions</pre>
          </Link>
        </div>

        <pre>Mail:</pre>
        <a href="mailto:cilions@pm.me">
          <pre>cilions@pm.me</pre>
        </a>

        <pre style={{ margin: '2rem 0 0 0' }}>
          This site is protected by reCAPTCHA and the Google{' '}
          <Link href="https://policies.google.com/privacy">Privacy Policy</Link>{' '}
          and{' '}
          <Link href="https://policies.google.com/terms">Terms of Service</Link>{' '}
          apply.
        </pre>

        <pre style={{ margin: '0.5rem 0 0 0' }}>
          v{version} ~ @{user.login} ❤︎‬
        </pre>
    </>
  )
}
