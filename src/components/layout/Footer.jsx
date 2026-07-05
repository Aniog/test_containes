import { Facebook, Instagram, Pin } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['About Velmora', 'Journal', 'Stockists', 'Privacy'],
}

function Footer() {
  return (
    <footer className="border-t border-line-inverse bg-velvet text-ivory">
      <div className="section-shell py-14 md:py-16">
        <div className="grid gap-12 border-b border-line-inverse pb-10 md:grid-cols-[1.4fr_2fr] md:items-start">
          <div className="space-y-5">
            <Link to="/" className="inline-block font-serif text-3xl tracking-[0.28em] text-ivory">
              VELMORA
            </Link>
            <p className="max-w-md text-sm leading-7 text-ivory/74">
              Demi-fine jewelry designed for gifting, self-purchase, and the quiet confidence of everyday polish.
            </p>
            <div className="flex items-center gap-3 text-ivory/78">
              <Instagram className="h-4 w-4" />
              <Facebook className="h-4 w-4" />
              <Pin className="h-4 w-4" />
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading} className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.24em] text-ivory/55">{heading}</h3>
                <ul className="space-y-3 text-sm text-ivory/78">
                  {links.map((label) => (
                    <li key={label}>
                      <a href="#" className="transition duration-300 hover:text-champagne">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-6 text-sm text-ivory/68 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-ivory/58">
            <span className="rounded-full border border-line-inverse px-3 py-2">Visa</span>
            <span className="rounded-full border border-line-inverse px-3 py-2">Mastercard</span>
            <span className="rounded-full border border-line-inverse px-3 py-2">AmEx</span>
            <span className="rounded-full border border-line-inverse px-3 py-2">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
