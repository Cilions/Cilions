import type { Metadata } from 'next'
import './globals.css'
import { ReCaptchaProvider } from 'next-recaptcha-v3'

export const metadata: Metadata = {
  title: 'cilions.co',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* API GitHub Avatar */}
        <link rel="icon" href="https://avatars.githubusercontent.com/cilions" />
        {/* Google Verification */}
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
