import { Instagram, Music2, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { footerNavigation } from '@/data/products'

const SiteFooter = () => {
  return (
    <footer className="border-t border-line bg-surface-alt text-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_repeat(3,0.8fr)] lg:px-10">
        <div className="space-y-5">
          <Link to="/" className="font-serif text-3xl tracking-[0.35em] text-surface">
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-surface/72">
            Demi-fine jewelry designed to feel polished, personal, and quietly luxurious every day.
          </p>
          <div className="flex items-center gap-3 text-surface/80">
            <span className="rounded-full border border-surface/20 px-3 py-1 text-xs uppercase tracking-[0.24em]">
              Visa
            </span>
            <span className="rounded-full border border-surface/20 px-3 py-1 text-xs uppercase tracking-[0.24em]">
              Amex
            </span>
            <span className="rounded-full border border-surface/20 px-3 py-1 text-xs uppercase tracking-[0.24em]">
              PayPal
            </span>
          </div>
        </div>

        {Object.entries(footerNavigation).map(([title, items]) => (
          <div key={title} className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-surface/70">
              {title}
            </h3>
            <ul className="space-y-3 text-sm text-surface/82">
              {items.map((item) => (
                <li key={item}>
                  <Link to="/shop" className="transition-colors duration-300 hover:text-accent-soft">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-surface/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 text-sm text-surface/70 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-accent-soft" />
            <span>Free worldwide shipping on orders over $75</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" className="transition-colors duration-300 hover:text-accent-soft" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://tiktok.com" className="transition-colors duration-300 hover:text-accent-soft" aria-label="TikTok">
              <Music2 className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
