import { footerLinks } from '@/data/products'
import { paymentMethods } from '@/data/storefront'

const socialLinks = ['Instagram', 'Pinterest', 'TikTok']
const footerHref = '/shop'

const Footer = () => (
  <footer className="bg-neutral-950 text-stone-100">
    <div className="page-shell section-space pb-10">
      <div className="grid gap-12 border-b border-stone-800 pb-12 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
        <div>
          <p className="font-serif text-4xl tracking-[0.35em]">VELMORA</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-stone-300">
            Demi-fine jewelry designed for gifting, layering, and the everyday moments that deserve a little glow.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-xs uppercase tracking-[0.3em] text-stone-400">{title}</h3>
            <ul className="mt-5 space-y-3 text-sm text-stone-200">
              {links.map((link) => (
                <li key={link}>
                  <a href={footerHref} className="transition-colors duration-300 hover:text-amber-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5 pt-6 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          {paymentMethods.map((method) => (
            <span
              key={method}
              className="rounded-full border border-stone-800 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-stone-300"
            >
              {method}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-stone-300">
          {socialLinks.map((item) => (
            <a key={item} href="#" className="transition-colors duration-300 hover:text-amber-200">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
