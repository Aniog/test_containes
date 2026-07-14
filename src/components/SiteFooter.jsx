import { Instagram, Facebook, CreditCard, ShieldCheck, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: ['New Arrivals', 'Bestsellers', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide'],
  Company: ['About Velmora', 'Journal', 'Contact'],
}

const SiteFooter = () => {
  return (
    <footer className="border-t border-velmora-taupe/20 bg-velmora-espresso px-5 pb-10 pt-16 text-velmora-ivory md:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-4">
            <Link to="/" className="font-serif text-3xl tracking-[0.42em] text-velmora-ivory">
              VELMORA
            </Link>
            <p className="max-w-sm text-sm leading-7 text-velmora-ivory/72">
              Demi-fine jewelry designed for self-gifting, thoughtful moments, and everyday rituals that feel quietly luxurious.
            </p>
            <div className="flex items-center gap-3 text-velmora-goldSoft">
              <Instagram className="h-5 w-5" />
              <Facebook className="h-5 w-5" />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.35em] text-velmora-goldSoft">
                  {title}
                </h3>
                <ul className="space-y-3 text-sm text-velmora-ivory/72">
                  {links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.28em] text-velmora-ivory/65">
            <span className="inline-flex items-center gap-2"><Truck className="h-4 w-4 text-velmora-goldSoft" /> Worldwide Shipping</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-velmora-goldSoft" /> Secure Checkout Ready</span>
            <span className="inline-flex items-center gap-2"><CreditCard className="h-4 w-4 text-velmora-goldSoft" /> Visa · Mastercard · Amex</span>
          </div>
          <p className="text-xs uppercase tracking-[0.28em] text-velmora-ivory/52">
            Velmora Fine Jewelry — Crafted to be treasured.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
