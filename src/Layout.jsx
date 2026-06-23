import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}