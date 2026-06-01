import { Outlet } from 'react-router-dom'
import Navbar from '@/components/shared/Navbar'

const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-white/5 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-bold text-white mb-3">The Time Traveler's Archive</h4>
              <p className="text-xs text-white/30 leading-relaxed">
                A classified institution dedicated to the collection, preservation, and study of temporal artifacts from across all known timelines and dimensions.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Quick Access</h4>
              <ul className="space-y-2">
                <li><a href="/archive" className="text-xs text-white/30 hover:text-cyan transition-colors">Artifact Archive</a></li>
                <li><a href="/timeline" className="text-xs text-white/30 hover:text-cyan transition-colors">Timeline Explorer</a></li>
                <li><a href="/investigations" className="text-xs text-white/30 hover:text-cyan transition-colors">Active Investigations</a></li>
                <li><a href="/membership" className="text-xs text-white/30 hover:text-cyan transition-colors">Membership Portal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Status</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs text-white/30">Archive Systems Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber" />
                  <span className="text-xs text-white/30">3 Active Paradoxes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan" />
                  <span className="text-xs text-white/30">47 Agents Active</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] text-white/20 font-mono">
              © 2026 THE TIME TRAVELER'S ARCHIVE • EST. 1900 • ALL TIMELINES RESERVED • CLEARANCE REQUIRED FOR FULL ACCESS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
