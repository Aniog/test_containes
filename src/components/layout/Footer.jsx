import { Link } from 'react-router-dom'
import { Gamepad2, Twitter, Youtube, Twitch, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Level<span className="text-indigo-400">Up</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your ultimate destination for gaming news, deals, and the best games across all platforms.
            </p>
            <div className="flex gap-3 mt-4">
              {[Twitter, Youtube, Twitch, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Content</h4>
            <ul className="space-y-2">
              {[['News', '/news'], ['Reviews', '/news?category=review'], ['Guides', '/news?category=guide'], ['Blog', '/news?category=blog']].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Platforms</h4>
            <ul className="space-y-2">
              {['Steam', 'Epic', 'Nintendo', 'PlayStation', 'Xbox'].map((p) => (
                <li key={p}>
                  <Link to={`/deals?platform=${p}`} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Store</h4>
            <ul className="space-y-2">
              {[['All Games', '/store'], ['On Sale', '/store?sale=true'], ['Featured', '/store?featured=true'], ['New Releases', '/store']].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© 2026 LevelUp Gaming. All rights reserved.</p>
          <p className="text-gray-600 text-sm">Prices and availability subject to change.</p>
        </div>
      </div>
    </footer>
  )
}
