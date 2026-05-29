import { useAuth } from '../hooks/useAuth.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { Shield, Clock, User, LogOut, BookOpen, Compass, ChevronRight } from 'lucide-react'

const CLEARANCE_CONFIG = {
  Observer: { color: 'text-slate-300', border: 'border-slate-500/30', bg: 'bg-slate-500/10', desc: 'Public access to the Archive catalog.' },
  Researcher: { color: 'text-cyan-300', border: 'border-cyan-400/30', bg: 'bg-cyan-400/10', desc: 'Full access to artifact descriptions and investigation files.' },
  Chronologist: { color: 'text-violet-300', border: 'border-violet-500/30', bg: 'bg-violet-500/10', desc: 'Unrestricted access to all classified materials.' },
}

export default function ProfilePage() {
  const { user, logout, clearanceLevel } = useAuth()
  const navigate = useNavigate()

  if (!user) return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <Shield className="w-12 h-12 text-slate-600 mx-auto mb-4" />
        <h2 className="font-cinzel text-xl text-slate-400 mb-2">Access Denied</h2>
        <p className="text-slate-600 mb-4">You must be signed in to view your profile.</p>
        <Link to="/login" className="text-cyan-400 hover:text-cyan-300 transition-colors">Sign In →</Link>
      </div>
    </div>
  )

  const cfg = CLEARANCE_CONFIG[clearanceLevel] || CLEARANCE_CONFIG.Observer

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Profile header */}
        <div className="glass border border-cyan-400/15 rounded-2xl p-8 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-3xl font-bold text-white">
              {(user.email || 'U')[0].toUpperCase()}
            </div>
            <div className="flex-1">
              <h1 className="font-cinzel text-2xl font-bold text-slate-100 mb-1">
                {user.user_metadata?.name || user.email?.split('@')[0] || 'Archive Member'}
              </h1>
              <p className="text-slate-500 text-sm mb-3">{user.email}</p>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${cfg.border} ${cfg.bg}`}>
                <Shield className={`w-3.5 h-3.5 ${cfg.color}`} />
                <span className={`font-mono-archive text-xs ${cfg.color}`}>{clearanceLevel.toUpperCase()} CLEARANCE</span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-400/20 text-red-400 hover:bg-red-400/10 transition-all text-sm"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>

        {/* Clearance info */}
        <div className={`glass border rounded-xl p-6 mb-6 ${cfg.border}`}>
          <div className="flex items-center gap-2 mb-3">
            <Shield className={`w-4 h-4 ${cfg.color}`} />
            <h2 className="font-cinzel text-sm font-semibold text-slate-200">Your Clearance Level</h2>
          </div>
          <p className="text-sm text-slate-400 mb-4">{cfg.desc}</p>
          {clearanceLevel !== 'Chronologist' && (
            <Link to="/membership" className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
              Upgrade clearance <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { to: '/archive', icon: BookOpen, label: 'Browse Archive', desc: 'Explore the artifact catalog', color: 'text-cyan-400' },
            { to: '/submit-sighting', icon: Compass, label: 'Submit Sighting', desc: 'Report a temporal anomaly', color: 'text-amber-400' },
            { to: '/investigations', icon: Clock, label: 'Investigations', desc: 'View active cases', color: 'text-red-400' },
          ].map(({ to, icon: Icon, label, desc, color }) => (
            <Link
              key={to}
              to={to}
              className="glass border border-cyan-400/10 hover:border-cyan-400/25 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 group"
            >
              <Icon className={`w-6 h-6 ${color} mb-3`} />
              <div className="font-cinzel text-sm font-semibold text-slate-200 group-hover:text-slate-100 mb-1">{label}</div>
              <div className="text-xs text-slate-500">{desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
