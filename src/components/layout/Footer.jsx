import { footerColumns, paymentBadges, socialLinks } from '@/data/catalog'

const Footer = () => {
  return (
    <footer className="border-t border-stone-200 bg-white text-stone-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:px-8">
        <div>
          <a href="/" className="font-serif text-4xl tracking-[0.32em] text-stone-900">
            VELMORA
          </a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-stone-600">
            Premium demi-fine jewelry designed for daily wear, meaningful gifting,
            and a quietly elevated finish.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {paymentBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-stone-300 px-3 py-2 text-xs uppercase tracking-[0.2em] text-stone-600"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-stone-500">
              {column.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-700 transition duration-300 hover:text-amber-800"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-stone-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-stone-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Velmora Fine Jewelry. Crafted to be treasured.</p>
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition duration-300 hover:text-amber-800"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
