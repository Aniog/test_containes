import { Link, useLocation } from "react-router-dom"
import { MessageSquare, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-slate-900 text-lg">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          ContactUs
        </Link>

        <div className="flex items-center gap-1">
          <Link
            to="/"
            className={cn(
              "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              pathname === "/"
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            )}
          >
            Home
          </Link>
          <Link
            to="/contacts"
            className={cn(
              "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              pathname === "/contacts"
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            )}
          >
            <Users className="w-4 h-4" />
            View Contacts
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
