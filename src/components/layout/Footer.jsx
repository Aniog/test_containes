import { Link } from 'react-router-dom'
import { Gamepad2, Twitter, Youtube, Twitch, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl mb-3">
              <Gamepad2 className="w-6 h-6 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                GameVault
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for game news, platform deals, and digital game purchases.
            </p>
            <div className="flex gap-3 mt-4">
              {[Twitter, Youtube, Twitch, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[['/', 'Home'], ['/news', 'News & Articles'], ['/deals', 'Platform Deals'], ['/store', 'Game Store']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platforms</h4>
            <ul className="space-y-2">
              {['Steam', 'Epic Games', 'Nintendo Switch', 'PlayStation', 'Xbox'].map((p) => (
                <li key={p}>
                  <Link to={`/deals?platform=${p}`} className="text-gray-400 hover:text-white text-sm transition-colors">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {[['news', 'News'], ['blog', 'Blog'], ['review', 'Reviews'], ['guide', 'Guides']].map(([cat, label]) => (
                <li key={cat}>
                  <Link to={`/news?category=${cat}`} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">© 2026 GameVault. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Not affiliated with Steam, Epic, Nintendo, PlayStation, or Xbox.</p>
        </div>
      </div>
    </footer>
  )
}
