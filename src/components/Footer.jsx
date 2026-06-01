import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-void border-t border-stardust py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-aurora to-nova flex items-center justify-center text-white text-xs font-bold">
                ✦
              </div>
              <div className="font-cinzel text-starlight text-sm font-semibold">Memory Archive</div>
            </div>
            <p className="text-twilight text-xs leading-relaxed max-w-xs">
              Preserving the memories of humanity before the Great Interstellar Migration. Every moment matters.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs text-twilight font-mono uppercase tracking-wider mb-4">Navigate</div>
            <div className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/explore', label: 'Explore Archive' },
                { to: '/submit', label: 'Contribute Memory' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className="block text-moonlight hover:text-starlight text-sm font-mono transition-colors duration-200">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div>
            <div className="text-xs text-twilight font-mono uppercase tracking-wider mb-4">Mission</div>
            <p className="text-twilight text-xs leading-relaxed">
              The Memory Archive Initiative was founded in 2026 to ensure that no human story is lost as we embark on humanity's greatest journey.
            </p>
            <div className="mt-4 text-xs font-mono text-aurora-light">
              847 days until departure
            </div>
          </div>
        </div>

        <div className="border-t border-stardust pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-twilight font-mono">
            © 2026 Memory Archive Initiative. All memories preserved for eternity.
          </div>
          <div className="text-xs text-twilight font-mono">
            Built for humanity. Carried to the stars.
          </div>
        </div>
      </div>
    </footer>
  )
}
