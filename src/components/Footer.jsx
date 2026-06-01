import { Link } from 'react-router-dom'
import { Archive, Github, Heart } from 'lucide-react'

const footerLinks = {
  Archive: [
    { label: 'Explore Memories', href: '/explore' },
    { label: 'Browse by Era', href: '/explore?filter=era' },
    { label: 'Browse by Emotion', href: '/explore?filter=emotion' },
    { label: 'Browse by Location', href: '/explore?filter=location' },
  ],
  Initiative: [
    { label: 'The Mission', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Partners', href: '/about#partners' },
    { label: 'Press', href: '/about#press' },
  ],
  Contribute: [
    { label: 'Submit a Memory', href: '/contribute' },
    { label: 'Guidelines', href: '/contribute#guidelines' },
    { label: 'Verification Process', href: '/contribute#verify' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-nebula-900/40 bg-cosmos/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-nebula-600/30 flex items-center justify-center">
                <Archive className="w-4 h-4 text-nebula-300" />
              </div>
              <div>
                <span className="font-display font-semibold text-white text-lg leading-none block">
                  Mnemosynē Archive
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Preserving the memories of humanity before the Great Migration. 
              Every story matters. Every moment deserves to be remembered.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span className="w-2 h-2 rounded-full bg-aurora-400 animate-pulse" />
              Archive Status: Active — 4,782,341 memories preserved
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-slate-200 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-nebula-900/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs font-mono">
            © 2089 Mnemosynē Archive Initiative. All memories preserved with care.
          </p>
          <p className="text-slate-500 text-xs flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-memory-love" /> for humanity
          </p>
        </div>
      </div>
    </footer>
  )
}
