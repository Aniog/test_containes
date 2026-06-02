export default function Footer() {
  const scrollToSection = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-teal-400 text-2xl font-black tracking-tight mb-3">
              Micro<span className="text-white">Cosmos</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Exploring the invisible universe through the lens of science and art. Revealing the extraordinary beauty of life at its smallest scale.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Organisms', href: '#organisms' },
                { label: 'Science', href: '#science' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-500 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>hello@microcosmos.science</li>
              <li>Research Institute, Cambridge, MA</li>
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="inline-block bg-teal-500 hover:bg-teal-400 text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors"
                >
                  Send a Message
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} MicroCosmos. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Science · Photography · Discovery
          </p>
        </div>
      </div>
    </footer>
  )
}
