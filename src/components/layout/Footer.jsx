import { Link } from 'react-router-dom'
import { Clock, Shield, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-cyan-400/10 bg-slate-950/80 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full border border-cyan-400/60 flex items-center justify-center">
                <Clock className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <div className="font-cinzel text-sm font-bold text-slate-100 tracking-widest">THE TIME TRAVELER'S</div>
                <div className="font-cinzel text-xs text-cyan-400 tracking-[0.3em]">ARCHIVE</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              A classified institution dedicated to the collection, preservation, and study of artifacts from across all known timelines and dimensions.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-violet-400" />
              <span className="font-mono-archive text-xs text-violet-400">CLEARANCE REQUIRED FOR FULL ACCESS</span>
            </div>
          </div>

          <div>
            <h4 className="font-cinzel text-xs text-slate-400 tracking-widest uppercase mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { to: '/archive', label: 'The Archive' },
                { to: '/timeline', label: 'Timeline Map' },
                { to: '/investigations', label: 'Investigations' },
                { to: '/membership', label: 'Membership' },
                { to: '/submit-sighting', label: 'Submit Sighting' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-slate-500 hover:text-cyan-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-xs text-slate-400 tracking-widest uppercase mb-4">Clearance Levels</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-500" />
                <span className="text-sm text-slate-500">Observer — Public</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-sm text-slate-500">Researcher — Registered</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                <span className="text-sm text-slate-500">Chronologist — Verified</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/signup" className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                <Mail className="w-3.5 h-3.5" /> Apply for Membership
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-400/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono-archive text-xs text-slate-600">
            © {new Date().getFullYear()} THE TIME TRAVELER'S ARCHIVE — ALL TIMELINES RESERVED
          </p>
          <p className="font-mono-archive text-xs text-slate-700">
            TEMPORAL INTEGRITY PROTOCOL v4.7.2 — ACTIVE
          </p>
        </div>
      </div>
    </footer>
  )
}
