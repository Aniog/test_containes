import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-velmora-cream/10 bg-velmora-espresso text-velmora-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.2fr_repeat(3,1fr)] md:px-8 lg:px-10">
        <div className="space-y-5">
          <Link to="/" className="font-display text-3xl tracking-logo text-velmora-cream">
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-velmora-cream/70">
            Demi-fine jewelry designed for everyday rituals, meaningful gifting, and quiet statement moments.
          </p>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-product text-velmora-cream/70">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((item) => (
              <span key={item} className="rounded-full border border-velmora-cream/10 px-3 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs uppercase tracking-eyebrow text-velmora-gold">Shop</h3>
          <div className="space-y-3 text-sm text-velmora-cream/70">
            <Link to="/shop">All Jewelry</Link>
            <Link to="/#collections">Bestsellers</Link>
            <Link to="/shop?category=Earrings">Earrings</Link>
            <Link to="/shop?category=Necklaces">Necklaces</Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs uppercase tracking-eyebrow text-velmora-gold">Help</h3>
          <div className="space-y-3 text-sm text-velmora-cream/70">
            <Link to="/#shipping">Shipping & Returns</Link>
            <Link to="/#newsletter">Newsletter</Link>
            <Link to="/#reviews">Reviews</Link>
            <Link to="/shop">Gift Guide</Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs uppercase tracking-eyebrow text-velmora-gold">Company</h3>
          <div className="space-y-3 text-sm text-velmora-cream/70">
            <Link to="/#about">About</Link>
            <Link to="/#journal">Journal</Link>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
