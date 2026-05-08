import { Link } from 'react-router-dom'
import { Gamepad2, Twitter, Youtube, Twitch } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">
                Game<span className="text-blue-400">Pulse</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Your one-stop destination for gaming news, reviews, and the best deals across Steam, Epic, Nintendo, PlayStation, and Xbox.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-red-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-purple-400 transition-colors">
                <Twitch className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Content</h4>
            <ul className="space-y-2">
              {['News', 'Reviews', 'Articles', 'Blog'].map(item => (
                <li key={item}>
                  <Link to="/news" className="text-slate-400 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Platforms</h4>
            <ul className="space-y-2">
              {['Steam', 'Epic Games', 'Nintendo', 'PlayStation', 'Xbox'].map(item => (
                <li key={item}>
                  <Link to="/deals" className="text-slate-400 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">© 2026 GamePulse. All rights reserved.</p>
          <p className="text-slate-600 text-xs">Prices and availability subject to change. Not affiliated with any platform.</p>
        </div>
      </div>
    </footer>
  )
}
