import { Instagram, Facebook, PinIcon as Pinterest, CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'FAQ'],
  Company: ['About Velmora', 'Journal', 'Contact', 'Stockists'],
}

const Footer = () => {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 text-stone-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:px-6 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:px-8">
        <div className="space-y-5">
          <Link to="/" className="font-serif text-3xl tracking-[0.36em] text-stone-50">
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-stone-400">
            Demi-fine gold jewelry designed for everyday luxury, meaningful gifting,
            and modern heirloom styling.
          </p>
          <div className="flex items-center gap-3 text-stone-300">
            <a href="#" className="rounded-full border border-stone-800 p-2 transition-colors hover:border-stone-600 hover:text-stone-50" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full border border-stone-800 p-2 transition-colors hover:border-stone-600 hover:text-stone-50" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full border border-stone-800 p-2 transition-colors hover:border-stone-600 hover:text-stone-50" aria-label="Pinterest">
              <Pinterest className="h-4 w-4" />
            </a>
          </div>
        </div>

        {Object.entries(footerColumns).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="text-xs uppercase tracking-[0.3em] text-stone-400">{heading}</h3>
            <ul className="mt-5 space-y-3 text-sm text-stone-300">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-stone-50">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-stone-400 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 text-stone-300">
            <CreditCard className="h-4 w-4" />
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
