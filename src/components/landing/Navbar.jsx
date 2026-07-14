import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"

export default function Navbar({ onContactClick }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
          Acme Co.
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          <Link to="/contacts" className="hover:text-slate-900 transition-colors">View Contacts</Link>
        </nav>
        <Button size="sm" onClick={onContactClick}>
          Get in Touch
        </Button>
      </div>
    </header>
  )
}
