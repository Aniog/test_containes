import { Link } from 'react-router-dom'

const footerGroups = [
  {
    title: 'Shop',
    links: [
      { label: 'Bestsellers', href: '/shop' },
      { label: 'Necklaces', href: '/shop?category=Necklaces' },
      { label: 'Earrings', href: '/shop?category=Earrings' },
      { label: 'Gift Sets', href: '/shop?category=Sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', href: '/shop' },
      { label: 'Returns', href: '/shop' },
      { label: 'Care Guide', href: '/#journal' },
      { label: 'Contact', href: '/#journal' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/#story' },
      { label: 'Journal', href: '/#journal' },
      { label: 'Wholesale', href: '/shop' },
      { label: 'Careers', href: '/shop' },
    ],
  },
]

const socialLinks = [
  { label: 'Instagram', href: '/#journal' },
  { label: 'Pinterest', href: '/#collections' },
  { label: 'TikTok', href: '/#journal' },
]

const Footer = () => {
  return (
    <footer className="border-t border-ink/10 bg-mist">
      <div className="content-wrap py-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="space-y-5">
            <p className="font-display text-3xl tracking-[0.22em] text-velvet">VELMORA</p>
            <p className="max-w-sm text-sm leading-7 text-ink/75">
              Demi-fine jewelry with a polished, warm finish designed for gifting and everyday wear.
            </p>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-ink/60">
              {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((payment) => (
                <span key={payment} className="rounded-full border border-ink/10 px-3 py-2">
                  {payment}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <p className="text-xs uppercase tracking-luxe text-champagne">{group.title}</p>
                <div className="space-y-3 text-sm text-ink/75">
                  {group.links.map((link) => (
                    <Link key={link.label} to={link.href} className="block transition-colors hover:text-velvet">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink/10 pt-6 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <Link key={link.label} to={link.href} className="transition-colors hover:text-velvet">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
