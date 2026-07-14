import { MessageSquare } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <MessageSquare className="w-5 h-5 text-indigo-400" />
          <span>Connectly</span>
        </div>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Connectly. All rights reserved.
        </p>
        <Link to="/contacts" className="text-sm text-slate-400 hover:text-white transition-colors no-underline">
          View Saved Contacts →
        </Link>
      </div>
    </footer>
  )
}
