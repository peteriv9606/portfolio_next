import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <div className={'Layout'}>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}