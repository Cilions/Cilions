import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <Link href="/">home</Link> | <Link href="/logs">logs</Link>
    </nav>
  )
}

export default Nav
