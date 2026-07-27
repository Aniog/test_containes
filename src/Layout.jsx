import Navbar from './components/shared/Navbar.jsx'
import Footer from './components/shared/Footer.jsx'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
