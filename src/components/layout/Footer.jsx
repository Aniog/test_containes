import { Link } from 'react-router-dom'
import { footerLinks, paymentMethods } from '@/data/storeData'

const Footer = () => {
  return (
    <footer className="border-t border-stone-300/70 bg-stone-900 text-stone-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <div className="space-y-4">
          <Link to="/" className="inline-block font-serif text-3xl tracking-[0.35em] text-stone-50">
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-stone-300">
            Demi-fine gold jewelry designed for everyday wear, meaningful gifting, and the quietly luxurious moments in between.
          </p>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-stone-300">
            <a href="#" className="transition hover:text-amber-300">Instagram</a>
            <a href="#" className="transition hover:text-amber-300">Pinterest</a>
            <a href="#" className="transition hover:text-amber-300">TikTok</a>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-sm uppercase tracking-[0.35em] text-stone-200">{title}</h3>
              <ul className="space-y-3 text-sm text-stone-300">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-amber-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-stone-800/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs uppercase tracking-[0.28em] text-stone-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex flex-wrap gap-3">
            {paymentMethods.map((method) => (
              <span key={method} className="rounded-full border border-stone-700 px-3 py-1 text-stone-300">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
