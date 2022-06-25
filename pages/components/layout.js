import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <div className="scrollbar-secondary">
      <Navbar />
        <main>{children}</main>
    </div>
  )
}