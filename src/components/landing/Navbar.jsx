import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Users, Menu, X } from "lucide-react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className={`text-xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}>
          Acme<span className="text-indigo-400">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
            }`}
          >
            Features
          </a>
          <a
            href="#contact"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
            }`}
          >
            Contact
          </a>
          <Link to="/contacts">
            <Button
              size="sm"
              variant={scrolled ? "outline" : "ghost"}
              className={
                scrolled
                  ? "border-gray-300 text-gray-700"
                  : "border-white/30 text-white bg-white/10 hover:bg-white/20"
              }
            >
              <Users className="w-4 h-4 mr-1.5" />
              View Contacts
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-gray-700" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <a href="#features" className="block text-gray-700 font-medium py-2" onClick={() => setMobileOpen(false)}>
            Features
          </a>
          <a href="#contact" className="block text-gray-700 font-medium py-2" onClick={() => setMobileOpen(false)}>
            Contact
          </a>
          <Link to="/contacts" onClick={() => setMobileOpen(false)}>
            <Button size="sm" className="w-full mt-2">
              <Users className="w-4 h-4 mr-1.5" />
              View Contacts
            </Button>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
