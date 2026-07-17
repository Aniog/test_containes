import { CircleDot, Instagram, MoveUpRight, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=Earrings' },
    { label: 'Necklaces', to: '/shop?category=Necklaces' },
    { label: 'Huggies', to: '/shop?category=Huggies' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '/shop' },
    { label: 'Care Guide', to: '/#story' },
    { label: 'Gift Packaging', to: '/shop?category=Sets' },
  ],
  Company: [
    { label: 'About Velmora', to: '/#story' },
    { label: 'Journal', to: '/#journal' },
    { label: 'Contact', to: '/#newsletter' },
  ],
}

function SiteFooter() {
  return (
    <footer className="border-t border-pearl bg-velvet text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[1.2fr_2fr] lg:px-10">
        <div className="space-y-6">
          <Link to="/" className="inline-flex font-serif text-3xl tracking-luxe text-ivory">
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-pearl">
            Premium demi-fine jewelry designed for daily wear, thoughtful gifting, and a softly luminous finish.
          </p>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-pearl">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((item) => (
              <span key={item} className="rounded-full border border-pearl/30 px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-xs uppercase tracking-luxe text-pearl">{title}</h3>
              <div className="space-y-3 text-sm text-ivory">
                {links.map((link) => (
                  <Link key={link.label} to={link.to} className="flex items-center gap-2 transition hover:text-champagne">
                    <span>{link.label}</span>
                    <MoveUpRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-pearl/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs uppercase tracking-[0.22em] text-pearl md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
          <p>Velmora Fine Jewelry</p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" aria-label="Instagram" className="transition hover:text-champagne">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://pinterest.com" aria-label="Pinterest" className="transition hover:text-champagne">
              <CircleDot className="h-4 w-4" />
            </a>
            <a href="https://tiktok.com" aria-label="TikTok" className="transition hover:text-champagne">
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
