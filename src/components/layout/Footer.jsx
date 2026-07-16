import { Link } from 'react-router-dom'

export default function Footer() {
  const columns = [
    {
      title: 'Shop',
      links: [
        { label: 'All Jewelry', to: '/shop' },
        { label: 'Earrings', to: '/shop?category=earrings' },
        { label: 'Necklaces', to: '/shop?category=necklaces' },
        { label: 'Huggies', to: '/shop?category=huggies' },
        { label: 'Gift Sets', to: '/shop?category=sets' },
      ],
    },
    {
      title: 'Help',
      links: [
        { label: 'Shipping & Returns', to: '/about' },
        { label: 'Size Guide', to: '/about' },
        { label: 'Care Instructions', to: '/about' },
        { label: 'FAQ', to: '/about' },
        { label: 'Contact Us', to: '/about' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Our Story', to: '/about' },
        { label: 'Journal', to: '/journal' },
        { label: 'Sustainability', to: '/about' },
        { label: 'Careers', to: '/about' },
      ],
    },
  ]

  return (
    <footer className="bg-warm-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.2em] uppercase text-white">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-white/60 max-w-xs leading-relaxed">
              Crafted to be treasured. Demi-fine gold jewelry designed for the modern woman —
              accessible luxury that lasts.
            </p>

            {/* Payment icons */}
            <div className="mt-8 flex items-center gap-3">
              {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(icon => (
                <div
                  key={icon}
                  className="bg-white/10 rounded px-2 py-1 text-[10px] text-white/70 font-medium tracking-wide"
                >
                  {icon}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              {['Instagram', 'Pinterest', 'TikTok'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-xs text-white/50 hover:text-gold transition-colors tracking-wide uppercase"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map(col => (
            <div key={col.title}>
              <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-white/40 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/70 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">Terms</a>
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
