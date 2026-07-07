import { Link } from 'react-router-dom'
import Logo from './Logo'

const footerGroups = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
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
      { label: 'Contact', to: '/#newsletter' },
      { label: 'Gift Guide', to: '/#journal' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/#about' },
      { label: 'Journal', to: '/#journal' },
      { label: 'Instagram', to: '/#footer-socials' },
      { label: 'Pinterest', to: '/#footer-socials' },
    ],
  },
]

const paymentMethods = ['Visa', 'Mastercard', 'Amex', 'Apple Pay']
const socialLinks = ['Instagram', 'Pinterest', 'TikTok']

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_repeat(3,1fr)] lg:px-8">
        <div>
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-7 text-stone-300">
            Premium-but-accessible demi-fine jewelry designed for gifting, self-purchase, and everyday rituals.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="rounded-full border border-stone-700 px-4 py-2 text-xs uppercase tracking-widest text-stone-200"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs uppercase tracking-widest text-stone-400">{group.title}</h3>
            <div className="mt-5 space-y-3">
              {group.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block text-sm text-stone-100 transition duration-300 hover:text-amber-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-stone-800">
        <div
          id="footer-socials"
          className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-stone-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"
        >
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-5 text-stone-200">
            {socialLinks.map((social) => (
              <a key={social} href="#newsletter" className="transition duration-300 hover:text-amber-400">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
