import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import { ReCaptchaProvider } from 'next-recaptcha-v3'

export const metadata: Metadata = {
  openGraph: {
    title: 'cilions',
    url: 'https://cilions.co',
    siteName: 'cilions.co',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://avatars.githubusercontent.com/cilions" />
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
        <meta name="google-site-verification" content="4ZKRHU4Do-iPEMttbFstjdMrZ-iiSRQMo3Z0JZpnsvg" />
      </head>
      <body>
        <ReCaptchaProvider
          reCaptchaKey="${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}"
          language="en"
        >
          {children}
        </ReCaptchaProvider>
      </body>
    </html>
  )
}
