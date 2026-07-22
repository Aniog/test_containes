import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import { LayoutDashboard, UserPlus, Zap } from "lucide-react"
import LeadCapture from "@/pages/LeadCapture"
import Dashboard from "@/pages/Dashboard"
import './App.css'

function NavItem({ to, icon: Icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive
            ? "bg-indigo-50 text-indigo-700"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`
      }
    >
      <Icon className="w-4 h-4 shrink-0" />
      {label}
    </NavLink>
  )
}

function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 bg-white border-r border-slate-200 shrink-0">
        <div className="flex items-center gap-2 px-4 py-5 border-b border-slate-200">
          <div className="bg-indigo-600 rounded-lg p-1.5">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-slate-900 text-sm">LeadFlow CRM</span>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          <NavItem to="/dashboard" icon={LayoutDashboard} label="Dashboard" />
          <NavItem to="/" icon={UserPlus} label="Lead Form" />
        </nav>
        <div className="px-4 py-4 border-t border-slate-200">
          <p className="text-xs text-slate-400">LeadFlow CRM v1.0</p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-200 flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 rounded-lg p-1.5">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-slate-900 text-sm">LeadFlow CRM</span>
        </div>
        <div className="flex gap-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `p-2 rounded-lg ${isActive ? "bg-indigo-50 text-indigo-700" : "text-slate-500"}`
            }
          >
            <LayoutDashboard className="w-5 h-5" />
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `p-2 rounded-lg ${isActive ? "bg-indigo-50 text-indigo-700" : "text-slate-500"}`
            }
          >
            <UserPlus className="w-5 h-5" />
          </NavLink>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 md:pt-0 pt-14 overflow-auto">
        {children}
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LeadCapture />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
