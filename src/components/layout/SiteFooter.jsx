import { Instagram, Mail, MapPin, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '@/components/shared/Logo.jsx'

const footerGroups = [
  {
    title: 'Shop',
    links: [
      { label: 'Bestsellers', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Huggies', to: '/shop?category=Huggies' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/#newsletter' },
      { label: 'Returns', to: '/#newsletter' },
      { label: 'Care Guide', to: '/#story' },
      { label: 'Contact', to: '/#newsletter' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Velmora', to: '/#story' },
      { label: 'Journal', to: '/#journal' },
      { label: 'Gift Cards', to: '/shop' },
      { label: 'Privacy', to: '/' },
    ],
  },
]

const socialLinks = [
  { label: 'Instagram', icon: Instagram, to: '/' },
  { label: 'Pinterest', icon: MoveRight, to: '/' },
  { label: 'Email', icon: Mail, to: '/' },
]

const SiteFooter = () => {
  return (
    <footer className="border-t border-truffle/10 bg-ivory text-velvet">
      <div className="page-shell grid gap-12 py-16 lg:grid-cols-[1.2fr_2fr]">
        <div className="space-y-6">
          <Logo />
          <p className="max-w-md text-sm leading-7 text-truffle">
            Quietly luxurious demi-fine jewelry designed for everyday rituals,
            cherished gifting, and polished self-purchase moments.
          </p>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-truffle">
            {['VISA', 'MASTERCARD', 'AMEX', 'PAYPAL'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-truffle/15 bg-porcelain px-3 py-2 text-velvet"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm text-truffle">
            <MapPin className="h-4 w-4 text-champagne" />
            Worldwide shipping from our New York studio.
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-xs font-medium uppercase tracking-[0.24em] text-champagne">
                {group.title}
              </h3>
              <div className="space-y-3 text-sm text-truffle">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    className="block transition-colors duration-300 hover:text-velvet"
                    to={link.to}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hairline">
        <div className="page-shell flex flex-col gap-4 py-5 text-sm text-truffle md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {socialLinks.map(({ label, icon: Icon, to }) => (
              <Link
                key={label}
                aria-label={label}
                className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-champagne"
                to={to}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
