import Logo from '@/components/layout/Logo'
import { footerColumns, paymentLabels } from '@/data/storefront'

const Footer = () => (
  <footer className="border-t border-velmora-mist/50 bg-velmora-ink text-velmora-cream">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.2fr_repeat(3,1fr)] md:px-8 lg:px-10">
      <div className="space-y-5">
        <Logo />
        <p className="max-w-sm text-sm leading-7 text-velmora-cream/75">
          Demi-fine jewelry designed for everyday ritual, milestone gifting, and the moments in between.
        </p>
        <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.24em] text-velmora-cream/70">
          {paymentLabels.map((label) => (
            <span
              key={label}
              className="rounded-full border border-velmora-cream/20 px-3 py-2"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {footerColumns.map((column) => (
        <div key={column.title} className="space-y-4">
          <h3 className="text-xs uppercase tracking-[0.3em] text-velmora-cream/55">
            {column.title}
          </h3>
          <ul className="space-y-3 text-sm text-velmora-cream/80">
            {column.links.map((link) => (
              <li key={link}>
                <a href="#" className="transition-colors duration-300 hover:text-velmora-gold">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="border-t border-velmora-cream/10 px-5 py-5 md:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs uppercase tracking-[0.24em] text-velmora-cream/60 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Velmora Fine Jewelry</p>
        <div className="flex gap-5">
          <a href="#" className="transition-colors duration-300 hover:text-velmora-gold">
            Instagram
          </a>
          <a href="#" className="transition-colors duration-300 hover:text-velmora-gold">
            Pinterest
          </a>
          <a href="#" className="transition-colors duration-300 hover:text-velmora-gold">
            TikTok
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
