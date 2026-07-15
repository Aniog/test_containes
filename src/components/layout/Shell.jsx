import { Facebook, Heart, Instagram, Menu, Minus, Plus, Search, ShoppingBag, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { formatPrice, trustPoints } from '@/data/store.js'
import { useCart } from '@/context/CartContext.jsx'
import { JewelryArtwork } from '@/components/products/JewelryArtwork.jsx'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => (
  <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    {eyebrow ? <p className="mb-4 text-xs uppercase tracking-[0.35em] text-ink/60">{eyebrow}</p> : null}
    <h2 className="font-display text-4xl leading-none text-ink md:text-5xl">{title}</h2>
    {description ? <p className="mt-5 text-base leading-7 text-ink/70 md:text-lg">{description}</p> : null}
  </div>
)

export const PrimaryButton = ({ as: Component = 'button', className = '', children, ...props }) => (
  <Component
    className={[
      'inline-flex items-center justify-center rounded-full bg-champagne px-6 py-3 text-sm uppercase tracking-[0.28em] text-ink transition duration-300 hover:bg-champagne-deep',
      className,
    ].join(' ')}
    {...props}
  >
    {children}
  </Component>
)

export const SecondaryButton = ({ as: Component = 'button', className = '', children, ...props }) => (
  <Component
    className={[
      'inline-flex items-center justify-center rounded-full border border-line bg-transparent px-6 py-3 text-sm uppercase tracking-[0.28em] text-ink transition duration-300 hover:bg-ink hover:text-porcelain',
      className,
    ].join(' ')}
    {...props}
  >
    {children}
  </Component>
)

export const SiteHeader = () => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { setIsCartOpen, itemCount } = useCart()
  const isHome = location.pathname === '/'
  const isTransparent = isHome && !scrolled

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClassName = ({ isActive }) =>
    [
      'transition-colors duration-300',
      isTransparent ? 'text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.28)] hover:text-white/90' : 'text-ink/80 hover:text-ink',
      isActive ? 'font-medium' : '',
    ].join(' ')

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
          isTransparent
            ? 'border-transparent bg-[linear-gradient(180deg,rgba(22,18,16,0.42),rgba(22,18,16,0.16),transparent)]'
            : 'border-line/70 bg-porcelain/95 shadow-[0_8px_28px_rgba(32,24,19,0.08)] backdrop-blur-xl',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-12">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className={[
              'inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden',
              isTransparent ? 'border-white/30 bg-black/15 text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md' : 'border-line text-ink',
            ].join(' ')}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link to="/" className={['font-display text-2xl tracking-[0.35em] md:text-3xl', isTransparent ? 'text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.3)]' : 'text-ink'].join(' ')}>
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.28em] md:flex">
            {navLinks.map((link) => (
              link.to.startsWith('/#') ? (
                <a
                  key={link.label}
                  href={link.to}
                  className={['transition-colors duration-300', isTransparent ? 'text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.28)] hover:text-white/90' : 'text-ink/80 hover:text-ink'].join(' ')}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink key={link.label} to={link.to} className={linkClassName}>{link.label}</NavLink>
              )
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              aria-label="Search"
              className={[
                'inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300',
                isTransparent ? 'border-white/30 bg-black/15 text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md hover:bg-white/10' : 'border-line text-ink hover:bg-ink/5',
              ].join(' ')}
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={() => setIsCartOpen(true)}
              className={[
                'relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300',
                isTransparent ? 'border-white/30 bg-black/15 text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md hover:bg-white/10' : 'border-line text-ink hover:bg-ink/5',
              ].join(' ')}
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-champagne px-1 text-[10px] font-medium text-ink">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </header>
      {mobileMenuOpen ? <MobileNav onNavigate={() => setMobileMenuOpen(false)} /> : null}
    </>
  )
}

const MobileNav = ({ onNavigate }) => (
  <div className="fixed inset-0 z-40 bg-ink/45 backdrop-blur-sm md:hidden">
    <div className="ml-auto flex h-full w-[82%] max-w-sm flex-col bg-porcelain px-6 pb-10 pt-24 text-ink shadow-[0_18px_60px_rgba(32,24,19,0.18)]">
      <nav className="flex flex-col gap-5 text-sm uppercase tracking-[0.28em]">
        <Link to="/shop" onClick={onNavigate}>Shop</Link>
        <Link to="/shop" onClick={onNavigate}>Collections</Link>
        <a href="/#story" onClick={onNavigate}>About</a>
        <a href="/#journal" onClick={onNavigate}>Journal</a>
      </nav>
      <div className="mt-10 border-t border-line pt-6 text-sm text-ink/70">Complimentary gift-ready packaging with every order.</div>
    </div>
  </div>
)

export const TrustBar = () => (
  <div className="border-y border-line/80 bg-porcelain/95 py-3">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 text-[11px] uppercase tracking-[0.32em] text-ink/70 md:px-8 lg:px-12">
      {trustPoints.map((point) => (
        <span key={point} className="flex items-center gap-3">
          <span>{point}</span>
          <span className="hidden h-[1px] w-4 bg-line md:block" />
        </span>
      ))}
    </div>
  </div>
)

export const CartDrawer = () => {
  const { items, subtotal, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart()

  useEffect(() => {
    if (!isCartOpen) return undefined
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsCartOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isCartOpen, setIsCartOpen])

  return (
    <div className={['fixed inset-0 z-[60] transition', isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'].join(' ')}>
      <div className={['absolute inset-0 bg-ink/45 backdrop-blur-sm transition duration-300', isCartOpen ? 'opacity-100' : 'opacity-0'].join(' ')} onClick={() => setIsCartOpen(false)} />
      <aside className={['absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-porcelain shadow-[0_24px_90px_rgba(22,18,16,0.22)] transition duration-300', isCartOpen ? 'translate-x-0' : 'translate-x-full'].join(' ')}>
        <div className="flex items-center justify-between border-b border-line/80 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-ink/56">Your cart</p>
            <h2 className="mt-2 font-display text-3xl text-ink">Selected pieces</h2>
          </div>
          <button type="button" aria-label="Close cart" onClick={() => setIsCartOpen(false)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="rounded-[1.75rem] border border-line/80 bg-card p-8 text-center shadow-card">
              <p className="text-xs uppercase tracking-[0.3em] text-ink/56">Nothing here yet</p>
              <p className="mt-4 text-base leading-7 text-ink/72">Add a few quiet-luxury favorites and they’ll appear here in your cart drawer.</p>
              <PrimaryButton as={Link} to="/shop" onClick={() => setIsCartOpen(false)} className="mt-8">Shop Pieces</PrimaryButton>
            </div>
          ) : (
            items.map((item) => (
              <article key={item.cartId} className="flex gap-4 rounded-[1.6rem] border border-line/80 bg-card p-4 shadow-card">
                <Link to={`/product/${item.slug}`} onClick={() => setIsCartOpen(false)} className="h-28 w-24 shrink-0 overflow-hidden rounded-[1.1rem] bg-ink/5">
                  <JewelryArtwork productId={item.id} image={item.image} className="h-full w-full" />
                </Link>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link to={`/product/${item.slug}`} onClick={() => setIsCartOpen(false)} className="font-display text-lg uppercase tracking-[0.18em] text-ink">{item.name}</Link>
                        <p className="mt-2 text-xs uppercase tracking-[0.24em] text-ink/56">{item.variant}</p>
                      </div>
                      <button type="button" onClick={() => removeFromCart(item.cartId)} className="text-xs uppercase tracking-[0.24em] text-ink/56 transition hover:text-ink">Remove</button>
                    </div>
                    <p className="mt-3 text-sm tracking-[0.18em] text-ink">{formatPrice(item.price)}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 rounded-full border border-line bg-porcelain px-3 py-2">
                      <button type="button" onClick={() => updateQuantity(item.cartId, item.quantity - 1)}><Minus className="h-4 w-4 text-ink" /></button>
                      <span className="min-w-6 text-center text-xs uppercase tracking-[0.25em] text-ink">{item.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(item.cartId, item.quantity + 1)}><Plus className="h-4 w-4 text-ink" /></button>
                    </div>
                    <p className="text-sm tracking-[0.16em] text-ink">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="border-t border-line/80 px-6 py-5">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.24em] text-ink/62">
            <span>Subtotal</span>
            <span className="text-ink">{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-ink/60">Taxes and shipping are calculated at checkout. Checkout is not connected yet in this frontend preview.</p>
          <PrimaryButton className="mt-5 w-full">Proceed to Checkout</PrimaryButton>
        </div>
      </aside>
    </div>
  )
}

export const SiteFooter = () => (
  <footer className="mt-20 bg-stone-950 text-white md:mt-24">
    <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:px-12 lg:py-16">
      <div className="grid gap-10 border-b border-white/12 pb-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <Link to="/" className="font-display text-3xl tracking-[0.35em] text-white">VELMORA</Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">Premium-but-accessible demi-fine jewelry designed for thoughtful gifting and everyday self-adornment.</p>
          <div className="mt-6 flex items-center gap-3 text-white/70">
            <a href="#" aria-label="Instagram" className="rounded-full border border-white/15 p-3 transition hover:border-white/35 hover:text-white"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-white/15 p-3 transition hover:border-white/35 hover:text-white"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Pinterest" className="rounded-full border border-white/15 p-3 transition hover:border-white/35 hover:text-white"><Heart className="h-4 w-4" /></a>
          </div>
        </div>
        <FooterColumn title="Shop" links={[{ label: 'Bestsellers', to: '/shop' }, { label: 'Earrings', to: '/shop' }, { label: 'Necklaces', to: '/shop' }, { label: 'Huggies', to: '/shop' }]} />
        <FooterColumn title="Help" links={[{ label: 'Shipping & Returns', to: '/shop' }, { label: 'Gift Cards', to: '/shop' }, { label: 'Care Guide', to: '/shop' }, { label: 'Contact', to: '/shop' }]} />
        <FooterColumn title="Company" links={[{ label: 'About Velmora', to: '/#story' }, { label: 'Journal', to: '/#journal' }, { label: 'Privacy', to: '/shop' }, { label: 'Terms', to: '/shop' }]} />
      </div>
      <div className="flex flex-col gap-6 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-3 uppercase tracking-[0.22em]">
          <span className="rounded-full border border-white/12 px-3 py-2">Visa</span>
          <span className="rounded-full border border-white/12 px-3 py-2">Mastercard</span>
          <span className="rounded-full border border-white/12 px-3 py-2">Amex</span>
          <span className="rounded-full border border-white/12 px-3 py-2">PayPal</span>
        </div>
        <p>© 2026 Velmora Fine Jewelry. Crafted for keeps.</p>
      </div>
    </div>
  </footer>
)

const FooterColumn = ({ title, links }) => (
  <div>
    <p className="text-xs uppercase tracking-[0.32em] text-white/55">{title}</p>
    <div className="mt-5 flex flex-col gap-3 text-sm text-white/72">
      {links.map((link) => <Link key={link.label} to={link.to}>{link.label}</Link>)}
    </div>
  </div>
)
