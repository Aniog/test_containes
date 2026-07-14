import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => (
  <footer className="bg-velmora-espresso text-velmora-pearl">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_2fr] md:px-8 lg:py-20">
      <div>
        <h2 className="font-serif text-4xl font-semibold tracking-[0.16em]">VELMORA</h2>
        <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-pearl/75">
          Demi-fine gold jewelry made for luminous everyday rituals, intimate gifting, and pieces you keep close.
        </p>
        <div className="mt-6 flex gap-3">
          {[Instagram, Facebook, Twitter].map((Icon, index) => (
            <a key={index} href="#" className="rounded-full border border-velmora-pearl/20 p-3 text-velmora-pearl transition hover:border-velmora-brass hover:text-velmora-brass" aria-label="Social link">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-velmora-brass">Shop</h3>
          <ul className="grid gap-3 text-sm text-velmora-pearl/75">
            <li><a href="/shop" className="hover:text-velmora-brass">All Jewelry</a></li>
            <li><a href="/shop" className="hover:text-velmora-brass">Earrings</a></li>
            <li><a href="/shop" className="hover:text-velmora-brass">Necklaces</a></li>
            <li><a href="/shop" className="hover:text-velmora-brass">Gift Sets</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-velmora-brass">Help</h3>
          <ul className="grid gap-3 text-sm text-velmora-pearl/75">
            <li><a href="#" className="hover:text-velmora-brass">Shipping</a></li>
            <li><a href="#" className="hover:text-velmora-brass">Returns</a></li>
            <li><a href="#" className="hover:text-velmora-brass">Care Guide</a></li>
            <li><a href="#" className="hover:text-velmora-brass">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-velmora-brass">Company</h3>
          <ul className="grid gap-3 text-sm text-velmora-pearl/75">
            <li><a href="/#about" className="hover:text-velmora-brass">About</a></li>
            <li><a href="/#journal" className="hover:text-velmora-brass">Journal</a></li>
            <li><a href="#" className="hover:text-velmora-brass">Sustainability</a></li>
            <li><a href="#" className="hover:text-velmora-brass">Wholesale</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-velmora-pearl/10 px-5 py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-velmora-pearl/65 md:flex-row md:items-center md:justify-between md:px-3">
        <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex gap-2" aria-label="Payment methods">
          {['VISA', 'MC', 'AMEX', 'PAY'].map((label) => (
            <span key={label} className="rounded border border-velmora-pearl/20 px-2 py-1 font-semibold text-velmora-pearl/80">{label}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
