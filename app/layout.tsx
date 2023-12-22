import type { Metadata } from 'next'
import './globals.css'

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
      </head>
      <body>{children}</body>
    </html>
  )
}
