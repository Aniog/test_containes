import { Link } from "react-router-dom"
import { MessageSquare } from "lucide-react"

export default function Navbar() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-indigo-600 font-bold text-xl no-underline">
          <MessageSquare className="w-6 h-6" />
          <span className="text-slate-900">Connectly</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors bg-transparent border-none cursor-pointer p-0"
          >
            Features
          </button>
          <button
            onClick={scrollToContact}
            className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors bg-transparent border-none cursor-pointer p-0"
          >
            Contact
          </button>
          <Link
            to="/contacts"
            className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors no-underline"
          >
            View Contacts
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contacts"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 no-underline"
          >
            View Contacts
          </Link>
          <button
            onClick={scrollToContact}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  )
}
