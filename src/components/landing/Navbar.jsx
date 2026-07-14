import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const scrollTo = (id) => {
    setMobileOpen(false)
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-gray-900 text-lg">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            Acme Co.
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollTo("features")} className="text-sm text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer p-0">
              Features
            </button>
            <button onClick={() => scrollTo("contact")} className="text-sm text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer p-0">
              Contact
            </button>
            <Link to="/contacts" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              View Contacts
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button onClick={() => scrollTo("contact")}>Get in touch</Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 bg-transparent border-none cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <button onClick={() => scrollTo("features")} className="block w-full text-left text-sm text-gray-700 py-2 bg-transparent border-none cursor-pointer">
            Features
          </button>
          <button onClick={() => scrollTo("contact")} className="block w-full text-left text-sm text-gray-700 py-2 bg-transparent border-none cursor-pointer">
            Contact
          </button>
          <Link to="/contacts" className="block text-sm text-gray-700 py-2" onClick={() => setMobileOpen(false)}>
            View Contacts
          </Link>
          <Button className="w-full" onClick={() => scrollTo("contact")}>Get in touch</Button>
        </div>
      )}
    </header>
  )
}

export default Navbar
