import { Instagram, MoveRight, PinIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = {
  Shop: ['New Arrivals', 'Bestsellers', 'Gift Sets', 'Necklaces'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'FAQ'],
  Company: ['About Velmora', 'Journal', 'Contact', 'Stockists'],
}

const SiteFooter = () => (
  <footer className="bg-velvet-950 text-cream-50">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
      <div className="space-y-6">
        <Link to="/" className="font-serif text-4xl tracking-[0.45em] text-cream-50">
          VELMORA
        </Link>
        <p className="max-w-md text-sm leading-7 text-cream-200/80">
          Demi-fine jewelry for everyday heirlooms — quietly luxurious pieces designed to be gifted, layered, and treasured.
        </p>
        <div className="flex items-center gap-3 text-cream-200/80">
          <span className="rounded-full border border-cream-200/20 px-3 py-2 text-xs uppercase tracking-[0.3em]">
            Visa
          </span>
          <span className="rounded-full border border-cream-200/20 px-3 py-2 text-xs uppercase tracking-[0.3em]">
            Mastercard
          </span>
          <span className="rounded-full border border-cream-200/20 px-3 py-2 text-xs uppercase tracking-[0.3em]">
            Amex
          </span>
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-3">
        {Object.entries(columns).map(([title, items]) => (
          <div key={title} className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-300">{title}</p>
            <ul className="space-y-3 text-sm text-cream-200/80">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-cream-50">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="border-t border-cream-200/15">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-xs uppercase tracking-[0.3em] text-cream-200/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2"><Instagram className="h-4 w-4" /> Instagram</span>
          <span className="inline-flex items-center gap-2"><PinIcon className="h-4 w-4" /> Pinterest</span>
        </div>
        <p className="inline-flex items-center gap-2">
          Crafted in small runs <MoveRight className="h-4 w-4" /> Worldwide shipping
        </p>
      </div>
    </div>
  </footer>
)

export default SiteFooter
