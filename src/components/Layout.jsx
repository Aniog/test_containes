import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen paper-texture text-ink antialiased">
      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  )
}
