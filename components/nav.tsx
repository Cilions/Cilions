import Link from 'next/link'

export default function Nav() {
  return (
    <nav style={{ display: 'flex', gap: '0.5rem' }}>
      <Link href="/">[home]</Link>
      <Link href="/posts">[posts]</Link>
      <Link href="/logs">[logs]</Link>
    </nav>
  )
}
