import { Link } from 'react-router-dom'
import { Gamepad2, Twitter, Youtube, Twitch, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#13161e] border-t border-[#2a2d3e] mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#4f8ef7] rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-black text-xl">
                Game<span className="text-[#4f8ef7]">Vault</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your ultimate destination for gaming news, deals, and digital game purchases across all platforms.
            </p>
            <div className="flex gap-3 mt-4">
              {[Twitter, Youtube, Twitch, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-500 hover:text-[#4f8ef7] transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platforms</h4>
            <ul className="space-y-2">
              {['Steam', 'Epic Games', 'Nintendo', 'PlayStation', 'Xbox'].map((p) => (
                <li key={p}>
                  <Link to={`/discounts?platform=${p.toLowerCase().replace(' ', '')}`} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div>
            <h4 className="text-white font-semibold mb-4">Content</h4>
            <ul className="space-y-2">
              {[
                { label: 'Latest News', to: '/news?category=news' },
                { label: 'Reviews', to: '/news?category=review' },
                { label: 'Guides', to: '/news?category=guide' },
                { label: 'Blog', to: '/news?category=blog' },
                { label: 'Hot Deals', to: '/discounts' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Store */}
          <div>
            <h4 className="text-white font-semibold mb-4">Store</h4>
            <ul className="space-y-2">
              {[
                { label: 'All Games', to: '/store' },
                { label: 'New Releases', to: '/store?filter=new' },
                { label: 'On Sale', to: '/store?filter=sale' },
                { label: 'Top Rated', to: '/store?sort=rating' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2a2d3e] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© 2026 GameVault. All rights reserved.</p>
          <p className="text-slate-600 text-xs">
            Not affiliated with Steam, Epic Games, Nintendo, PlayStation, or Xbox.
          </p>
        </div>
      </div>
    </footer>
  )
}
