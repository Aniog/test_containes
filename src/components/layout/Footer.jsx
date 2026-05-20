import { Link } from 'react-router-dom'
import { Gamepad2, Twitter, Youtube, Twitch, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-[#2d2d3d] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-slate-100">
                Game<span className="text-violet-400">Vault</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Your ultimate destination for gaming news, deals, and the best games across all platforms.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors"><Youtube className="w-4 h-4" /></a>
              <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors"><Twitch className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-slate-100 font-semibold text-sm mb-4 uppercase tracking-wider">Platforms</h4>
            <ul className="space-y-2">
              {['Steam', 'Epic Games', 'Nintendo', 'PlayStation', 'Xbox'].map((p) => (
                <li key={p}>
                  <Link to="/deals" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div>
            <h4 className="text-slate-100 font-semibold text-sm mb-4 uppercase tracking-wider">Content</h4>
            <ul className="space-y-2">
              {[
                { label: 'News', to: '/news?category=news' },
                { label: 'Reviews', to: '/news?category=review' },
                { label: 'Guides', to: '/news?category=guide' },
                { label: 'Blog', to: '/news?category=blog' },
                { label: 'Hot Deals', to: '/deals' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Store */}
          <div>
            <h4 className="text-slate-100 font-semibold text-sm mb-4 uppercase tracking-wider">Store</h4>
            <ul className="space-y-2">
              {[
                { label: 'All Games', to: '/store' },
                { label: 'On Sale', to: '/store?discount=true' },
                { label: 'New Releases', to: '/store' },
                { label: 'Top Rated', to: '/store' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2d2d3d] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">© 2026 GameVault. All rights reserved.</p>
          <p className="text-slate-600 text-sm">Built for gamers, by gamers.</p>
        </div>
      </div>
    </footer>
  )
}
