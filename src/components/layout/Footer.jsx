import { Link } from 'react-router-dom'
import { footerGroups, paymentMethods, socialLinks } from '@/data/store'

const Footer = () => (
  <footer className="border-t border-stone-200 bg-stone-950 text-stone-50">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_repeat(3,1fr)] lg:px-8">
      <div className="space-y-5">
        <Link
          to="/"
          className="inline-block font-['Cormorant_Garamond'] text-3xl tracking-[0.38em] text-stone-50"
        >
          VELMORA
        </Link>
        <p className="max-w-sm text-sm leading-7 text-stone-300">
          Premium demi-fine pieces designed to become part of your daily ritual.
        </p>
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-stone-300">
          {paymentMethods.map((method) => (
            <span
              key={method}
              className="rounded-full border border-white/15 px-3 py-2"
            >
              {method}
            </span>
          ))}
        </div>
      </div>

      {footerGroups.map((group) => (
        <div key={group.title} className="space-y-5">
          <h3 className="text-xs uppercase tracking-[0.32em] text-stone-400">
            {group.title}
          </h3>
          <ul className="space-y-3 text-sm text-stone-200">
            {group.links.map((link) => (
              <li key={link.label}>
                <Link className="transition duration-300 hover:text-amber-200" to={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-stone-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex flex-wrap gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="transition duration-300 hover:text-amber-200"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
