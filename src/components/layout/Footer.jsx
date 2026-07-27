import { Link } from 'react-router-dom'
import { Gem, Instagram, Send } from 'lucide-react'
import { footerColumns, paymentMethods } from '@/data/store'

const socialLinks = [
  { label: 'Instagram', Icon: Instagram },
  { label: 'Pinterest-inspired moodboard', Icon: Gem },
  { label: 'Send to a friend', Icon: Send },
]

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_repeat(3,1fr)] lg:px-10">
        <div className="space-y-5 text-stone-900">
          <Link to="/" className="font-serif text-3xl tracking-[0.35em]">
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-stone-600">
            Demi-fine jewelry designed for the rituals you repeat, the gifts you keep,
            and the quiet moments that deserve a little gold.
          </p>
          <div className="flex gap-3 text-stone-600">
            {socialLinks.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 transition hover:border-stone-900 hover:text-stone-900"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="space-y-4 text-stone-900">
            <h3 className="text-xs uppercase tracking-[0.35em] text-stone-500">
              {column.title}
            </h3>
            <ul className="space-y-3 text-sm text-stone-600">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-stone-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-stone-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-stone-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 Velmora Fine Jewelry. Crafted to be treasured.</p>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-stone-600">
            {paymentMethods.map((method) => (
              <span key={method} className="rounded-full border border-stone-200 px-3 py-2">
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
