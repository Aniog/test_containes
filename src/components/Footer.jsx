import React from 'react'
import { Instagram, MoveRight, Pin } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = {
  Shop: ['New In', 'Earrings', 'Necklaces', 'Huggies'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['Our Story', 'Journal', 'Gifting', 'Wholesale'],
}

function Footer() {
  return (
    <footer className="border-t border-stone-300/70 bg-stone-950 px-5 py-16 text-stone-100 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Link className="font-serif text-3xl tracking-[0.35em]" to="/">
            VELMORA
          </Link>
          <p className="mt-6 max-w-md text-sm leading-7 text-stone-300">
            Demi-fine jewelry with a warm editorial sensibility — thoughtfully designed for gifting,
            collecting, and wearing on repeat.
          </p>
          <div className="mt-8 flex items-center gap-3 text-stone-300">
            <a
              aria-label="Instagram"
              className="rounded-full border border-stone-700 p-3 transition hover:border-amber-200 hover:text-amber-200"
              href="#"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              aria-label="Pinterest"
              className="rounded-full border border-stone-700 p-3 transition hover:border-amber-200 hover:text-amber-200"
              href="#"
            >
              <Pin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {Object.entries(columns).map(([label, items]) => (
            <div key={label}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-400">
                {label}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-stone-200">
                {items.map((item) => (
                  <li key={item}>
                    <a className="transition hover:text-amber-200" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-6 border-t border-stone-800 pt-8 text-sm text-stone-400 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          {['Visa', 'Mastercard', 'Amex', 'Apple Pay'].map((item) => (
            <span
              key={item}
              className="rounded-full border border-stone-800 px-4 py-2 text-xs uppercase tracking-[0.2em] text-stone-300"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
          Crafted for keeps <MoveRight className="h-4 w-4" />
        </p>
      </div>
    </footer>
  )
}

export default Footer
