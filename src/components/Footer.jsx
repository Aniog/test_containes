export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🐾</span>
              <span className="text-white font-bold text-xl font-display">Animal Kingdom</span>
            </div>
            <p className="text-sm leading-relaxed">
              Celebrating the incredible diversity of life on Earth and inspiring people to protect it.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              {[
                { label: 'Featured Animals', href: '#featured' },
                { label: 'Habitats', href: '#habitats' },
                { label: 'Fun Facts', href: '#facts' },
                { label: 'Conservation', href: '#conservation' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Conservation orgs */}
          <div>
            <h4 className="text-white font-semibold mb-4">Conservation Partners</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              {[
                { label: 'World Wildlife Fund', href: 'https://www.worldwildlife.org' },
                { label: 'IUCN Red List', href: 'https://www.iucnredlist.org' },
                { label: 'National Geographic', href: 'https://www.nationalgeographic.com' },
                { label: 'Wildlife Conservation Society', href: 'https://www.wcs.org' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2026 Animal Kingdom. Built with love for wildlife.
          </p>
          <p className="text-xs text-gray-600">
            🌍 Every species matters. Every action counts.
          </p>
        </div>
      </div>
    </footer>
  )
}
