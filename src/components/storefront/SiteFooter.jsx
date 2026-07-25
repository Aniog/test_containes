import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=Earrings' },
    { label: 'Necklaces', to: '/shop?category=Necklaces' },
    { label: 'Huggies', to: '/shop?category=Huggies' },
  ],
  Help: [
    { label: 'Shipping', to: '/#newsletter' },
    { label: 'Returns', to: '/#newsletter' },
    { label: 'Contact', to: '/#newsletter' },
  ],
  Company: [
    { label: 'Our Story', to: '/#story' },
    { label: 'Journal', to: '/#journal' },
    { label: 'Gift Edit', to: '/collections' },
  ],
}

function SiteFooter() {
  return (
    <footer className="border-t border-mist bg-espresso px-4 py-14 text-ivory sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
        <div>
          <Link to="/" className="font-display text-4xl tracking-editorial text-ivory">
            VELMORA
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-shell">
            Demi-fine gold jewelry designed for everyday glow, thoughtful gifting, and quietly luxurious moments.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs uppercase tracking-editorial text-shell">
            {['Visa', 'Mastercard', 'AmEx', 'PayPal'].map((item) => (
              <span key={item} className="rounded-full border border-shell/40 px-3 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>

        {Object.entries(footerColumns).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-xs uppercase tracking-editorial text-shell">{title}</h3>
            <ul className="mt-5 space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-ivory transition-colors duration-300 ease-editorial hover:text-champagne"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-shell/20 pt-6 text-xs uppercase tracking-editorial text-shell sm:flex-row sm:items-center sm:justify-between">
        <span>Instagram · Pinterest · TikTok</span>
        <span>© 2026 Velmora Fine Jewelry</span>
      </div>
    </footer>
  )
}

export default SiteFooter
