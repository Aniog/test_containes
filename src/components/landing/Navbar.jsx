import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

const Navbar = ({ onContactClick }) => {
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-bold text-gray-900 text-lg">Acme</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </a>
          <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </a>
          <Link
            to="/contacts"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1.5"
          >
            <Users className="w-4 h-4" />
            View contacts
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contacts" className="md:hidden">
            <Button variant="ghost" size="sm">
              <Users className="w-4 h-4" />
            </Button>
          </Link>
          {isHome && (
            <Button size="sm" onClick={onContactClick}>
              Get in touch
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
