const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Specimens', href: '#specimens' },
  { label: 'Facts', href: '#facts' },
];

export default function Footer() {
  return (
    <footer className="bg-cosmos-dark border-t border-cosmos-cyan/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="font-heading text-2xl font-bold mb-3"
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #00ffcc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              MicroCosmos
            </h3>
            <p className="text-cosmos-muted text-sm leading-relaxed max-w-xs">
              Exploring the invisible architecture of life — one microscopic image at a time.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-xs tracking-widest uppercase text-cosmos-dim font-semibold mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cosmos-muted hover:text-cosmos-cyan transition-colors duration-200 text-sm font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Science note */}
          <div>
            <h4 className="font-heading text-xs tracking-widest uppercase text-cosmos-dim font-semibold mb-5">
              Did You Know?
            </h4>
            <p className="text-cosmos-muted text-sm leading-relaxed">
              If all the bacteria in your body were laid end to end, they would stretch around the Earth{' '}
              <span className="text-cosmos-cyan font-semibold">2.5 times</span>.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cosmos-cyan/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cosmos-dim text-xs font-body">
            © {new Date().getFullYear()} MicroCosmos. All rights reserved.
          </p>
          <p className="text-cosmos-dim text-xs font-body">
            Dedicated to the wonders of the invisible world.
          </p>
        </div>
      </div>
    </footer>
  );
}
