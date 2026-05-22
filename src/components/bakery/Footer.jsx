const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🍞</span>
            <div>
              <p className="font-serif text-xl font-bold text-white">Bread & Bakery</p>
              <p className="text-tan text-sm">Baked with love since 1999</p>
            </div>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-tan hover:text-golden text-sm font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-4">
            {['Instagram', 'Facebook', 'Twitter'].map((social) => (
              <a
                key={social}
                href="#"
                aria-label={social}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-tan hover:bg-golden hover:text-white transition-colors duration-200 text-xs font-bold"
              >
                {social[0]}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-tan/60 text-sm">
            © {new Date().getFullYear()} Bread & Bakery. All rights reserved. Made with 🧡 and flour.
          </p>
        </div>
      </div>
    </footer>
  );
}
