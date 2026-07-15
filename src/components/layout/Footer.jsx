import { Facebook, Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = [
  { title: 'Shop', links: ['New Arrivals', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About Velmora', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-porcelain">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1.85fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.22em]">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-linen">
              Premium demi-fine gold jewelry made for the rituals of gifting, self-purchase, and everyday glow.
            </p>
            <div className="mt-7 flex items-center gap-3 text-velmora-champagne">
              <a href="#journal" className="rounded-full border border-velmora-champagne/40 p-2 transition hover:bg-velmora-champagne hover:text-velmora-espresso" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#journal" className="rounded-full border border-velmora-champagne/40 p-2 transition hover:bg-velmora-champagne hover:text-velmora-espresso" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#journal" className="rounded-full border border-velmora-champagne/40 p-2 transition hover:bg-velmora-champagne hover:text-velmora-espresso" aria-label="TikTok">
                <Music2 className="h-4 w-4" />
              </a>
              <a href="mailto:hello@velmora.example" className="rounded-full border border-velmora-champagne/40 p-2 transition hover:bg-velmora-champagne hover:text-velmora-espresso" aria-label="Email Velmora">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-champagne">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-linen">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#top" className="transition hover:text-velmora-champagne">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-porcelain/15 pt-7 text-xs text-velmora-linen md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. Crafted for direct-to-you demi-fine luxury.</p>
          <div className="flex items-center gap-2">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((icon) => (
              <span key={icon} className="rounded border border-velmora-porcelain/20 px-2.5 py-1 text-[0.65rem] font-bold text-velmora-porcelain">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
