import { Facebook, Gem, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = {
  Shop: [
    { label: 'New In', href: '/shop' },
    { label: 'Bestsellers', href: '/#bestsellers' },
    { label: 'Gift Sets', href: '/shop?category=Sets' },
    { label: 'Necklaces', href: '/shop?category=Necklaces' },
  ],
  Help: [
    { label: 'Shipping', href: '/#trust' },
    { label: 'Returns', href: '/#trust' },
    { label: 'Care Guide', href: '/product/golden-sphere-huggies' },
    { label: 'Contact', href: '/#newsletter' },
  ],
  Company: [
    { label: 'About', href: '/#story' },
    { label: 'Journal', href: '/#journal' },
    { label: 'Stockists', href: '/shop' },
    { label: 'Privacy', href: '/' },
  ],
}

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com', Icon: Facebook },
  { label: 'Jewelry care', href: '/product/golden-sphere-huggies', Icon: Gem },
]

export default function Footer() {
  return (
    <footer className="bg-[#221c1f] text-[#f6f0ea]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.1fr_1fr] lg:px-12 lg:py-16">
        <div>
          <Link
            to="/"
            className="font-['Cormorant_Garamond'] text-3xl font-semibold tracking-[0.35em] text-[#f6f0ea]"
          >
            VELMORA
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#ddc6bb]">
            Premium-but-accessible demi-fine jewelry designed for daily wear, quiet gifting, and lasting polish.
          </p>
          <div className="mt-6 flex items-center gap-3 text-[#ddc6bb]">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c7b7]/30 transition hover:border-[#b78b54] hover:text-[#b78b54]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {Object.entries(columns).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs uppercase tracking-[0.32em] text-[#b78b54]">{title}</p>
              <ul className="mt-5 space-y-3 text-sm text-[#efe3d6]">
                {links.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="transition hover:text-[#b78b54]">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[#4b4042]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs uppercase tracking-[0.24em] text-[#ddc6bb] md:flex-row md:items-center md:justify-between md:px-8 lg:px-12">
          <p>Visa · Mastercard · Amex · Apple Pay</p>
          <p>© 2026 Velmora Fine Jewelry</p>
        </div>
      </div>
    </footer>
  )
}
