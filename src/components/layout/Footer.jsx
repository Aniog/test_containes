import { Instagram, CircleDashed as MoodboardIcon, CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'FAQ'],
  Company: ['Our Story', 'Journal', 'Contact', 'Privacy'],
}

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_2fr] md:px-8">
        <div className="space-y-5">
          <Link
            to="/"
            className="inline-block font-display text-2xl uppercase tracking-[0.38em]"
          >
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-stone-300">
            Demi-fine jewelry designed to bring a warm, polished finish to the everyday.
          </p>
          <div className="flex items-center gap-3 text-stone-300">
            <a href="#" aria-label="Instagram" className="rounded-full border border-stone-700 p-3 transition hover:border-stone-500 hover:text-stone-100">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Moodboard" className="rounded-full border border-stone-700 p-3 transition hover:border-stone-500 hover:text-stone-100">
              <MoodboardIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title} className="space-y-5">
              <h3 className="text-xs uppercase tracking-[0.32em] text-stone-400">{title}</h3>
              <ul className="space-y-3 text-sm text-stone-300">
                {links.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition hover:text-stone-100">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-stone-400 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 text-stone-300">
            <CreditCard className="h-4 w-4" />
            <span>Visa</span>
            <span>Mastercard</span>
            <span>AmEx</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
