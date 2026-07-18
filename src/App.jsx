import { useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Instagram, Mail, Menu, Minus, Music2, Plus, Search, ShoppingBag, Star, X } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

const products = [
  { id: 'vivid-aura-jewels', name: 'Vivid Aura Jewels', category: 'Earrings', material: '18K Gold Plated', price: 42, rating: 4.9, reviews: 128, short: 'A sculptural gold ear cuff finished with a fine crystal accent for luminous everyday wear.', description: 'Designed to catch warm light from every angle, this adjustable ear cuff adds polish without a piercing. Wear it alone for a quiet statement or stack it with delicate hoops.', care: 'Keep dry, store separately in the Velmora pouch, and polish softly after wear. Nickel-free and hypoallergenic for sensitive ears.', imgId: 'product-vivid-aura-primary-a41c9d', hoverImgId: 'product-vivid-aura-hover-b72f1a', titleId: 'product-vivid-aura-title', descId: 'product-vivid-aura-desc' },
  { id: 'majestic-flora-nectar', name: 'Majestic Flora Nectar', category: 'Necklaces', material: 'Gold Vermeil', price: 68, rating: 4.8, reviews: 96, short: 'A delicate floral crystal necklace with soft color and an heirloom-inspired silhouette.', description: 'A romantic floral pendant set with multicolor crystals on a fine adjustable chain. It brings a gentle point of color to cashmere, silk, and evening necklines.', care: 'Avoid perfume and lotions directly on the pendant. Clean with a dry jewelry cloth and store clasped to prevent tangling.', imgId: 'product-majestic-flora-primary-c23e8b', hoverImgId: 'product-majestic-flora-hover-d91b2c', titleId: 'product-majestic-flora-title', descId: 'product-majestic-flora-desc' },
  { id: 'golden-sphere-huggies', name: 'Golden Sphere Huggies', category: 'Huggies', material: '18K Gold Plated', price: 38, rating: 5, reviews: 184, short: 'Chunky gold dome huggie earrings with a softly rounded, high-polish finish.', description: 'The pair you reach for every morning: light, bold, and refined. A rounded dome profile makes these huggies feel modern without overpowering.', care: 'Remove before swimming or showering. Secure the hinge after each wear and store away from harder jewelry pieces.', imgId: 'product-golden-sphere-primary-e38a6f', hoverImgId: 'product-golden-sphere-hover-f17d4e', titleId: 'product-golden-sphere-title', descId: 'product-golden-sphere-desc' },
  { id: 'amber-lace-earrings', name: 'Amber Lace Earrings', category: 'Earrings', material: 'Recycled Brass', price: 54, rating: 4.7, reviews: 72, short: 'Textured gold filigree drop earrings with airy movement and vintage warmth.', description: 'Fine lace-like metalwork creates elegant movement with very little weight. They bring occasion polish to a white shirt, slip dress, or wedding guest look.', care: 'Wipe gently after wear and keep in a soft pouch. Avoid prolonged moisture to preserve the textured finish.', imgId: 'product-amber-lace-primary-g55e1b', hoverImgId: 'product-amber-lace-hover-h84c3d', titleId: 'product-amber-lace-title', descId: 'product-amber-lace-desc' },
  { id: 'royal-heirloom-set', name: 'Royal Heirloom Set', category: 'Sets', material: '18K Gold Plated', price: 95, rating: 4.9, reviews: 143, short: 'A gift-boxed earring and necklace set made for birthdays, bridesmaids, and milestones.', description: 'A coordinated set with luminous gold detail, wrapped in a keepsake Velmora gift box. It is effortless to give and even easier to wear.', care: 'Store each piece in its own compartment. Polish gently with the included cloth before gifting or wearing.', imgId: 'product-royal-heirloom-primary-i71f6a', hoverImgId: 'product-royal-heirloom-hover-j28c9f', titleId: 'product-royal-heirloom-title', descId: 'product-royal-heirloom-desc' },
]

const categories = [
  { name: 'Earrings', titleId: 'category-earrings-title', copyId: 'category-earrings-copy', bgId: 'category-earrings-bg-k41d8a', copy: 'Light-catching silhouettes for everyday ritual.' },
  { name: 'Necklaces', titleId: 'category-necklaces-title', copyId: 'category-necklaces-copy', bgId: 'category-necklaces-bg-l62e3b', copy: 'Fine layers, floral pendants, and gifting chains.' },
  { name: 'Huggies', titleId: 'category-huggies-title', copyId: 'category-huggies-copy', bgId: 'category-huggies-bg-m93a1c', copy: 'Polished hoops with a close, comfortable fit.' },
]

const ugcPosts = [
  { caption: 'Morning gold stack', titleId: 'ugc-morning-stack-title', bgId: 'ugc-morning-stack-bg-n1a2b3' },
  { caption: 'Soft neckline glimmer', titleId: 'ugc-soft-neckline-title', bgId: 'ugc-soft-neckline-bg-o4c5d6' },
  { caption: 'Dinner huggies', titleId: 'ugc-dinner-huggies-title', bgId: 'ugc-dinner-huggies-bg-p7e8f9' },
  { caption: 'A little gold gift', titleId: 'ugc-gift-unboxing-title', bgId: 'ugc-gift-unboxing-bg-q2b3c4' },
  { caption: 'Weekend ear cuff', titleId: 'ugc-weekend-ear-cuff-title', bgId: 'ugc-weekend-ear-cuff-bg-r5d6e7' },
]

const reviews = [
  { name: 'Maya R.', text: 'The Golden Sphere Huggies feel substantial but never heavy. They look far more expensive than they are.' },
  { name: 'Claire B.', text: 'The packaging was beautiful and the necklace made such an elegant birthday gift.' },
  { name: 'Nina S.', text: 'I wear my ear cuff almost daily. No irritation, beautiful shine, and it layers perfectly.' },
]

function ProductCard({ product, onAdd, compact = false }) {
  return (
    <article className="group relative overflow-hidden border border-velmora-champagne/35 bg-velmora-linen text-velmora-ink shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-velmora-parchment via-velmora-linen to-velmora-espresso/20">
          <div data-strk-bg-id={product.imgId} data-strk-bg={`[${product.descId}] [${product.titleId}]`} data-strk-bg-ratio="4x3" data-strk-bg-width="700" className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 group-hover:opacity-0" role="img" aria-label={product.name} />
          <div data-strk-bg-id={product.hoverImgId} data-strk-bg={`[${product.descId}] [${product.titleId}]`} data-strk-bg-ratio="4x3" data-strk-bg-width="700" className="absolute inset-0 bg-cover bg-center opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" role="img" aria-label={`${product.name} worn`} />
          <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/18 via-transparent to-transparent" />
        </div>
      </Link>
      <div className="space-y-3 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link to={`/product/${product.id}`}><h3 id={product.titleId} className="font-serif text-lg font-semibold uppercase tracking-[0.18em] text-velmora-ink transition-colors duration-300 group-hover:text-velmora-rose">{product.name}</h3></Link>
            <p id={product.descId} className="mt-1 line-clamp-2 text-sm leading-6 text-velmora-muted">{product.short}</p>
          </div>
          <p className="shrink-0 text-sm font-semibold text-velmora-ink">${product.price}</p>
        </div>
        {!compact && <button type="button" onClick={() => onAdd(product)} className="flex w-full items-center justify-center gap-2 border border-velmora-gold bg-velmora-gold px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-espresso opacity-100 transition-all duration-300 hover:bg-velmora-champagne md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"><ShoppingBag className="h-4 w-4" />Add to Cart</button>}
      </div>
    </article>
  )
}

function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const overHero = location.pathname === '/' && !scrolled

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location.pathname])

  const navClass = overHero ? 'bg-black/28 text-white border-white/30 backdrop-blur-[3px] drop-shadow' : 'bg-velmora-linen/95 text-velmora-ink border-velmora-champagne/40 shadow-[0_8px_30px_rgba(36,26,22,0.06)] backdrop-blur-xl'
  const heroHeaderStyle = overHero ? { color: '#ffffff', textShadow: '0 2px 14px rgba(0,0,0,.88)', backgroundColor: 'rgba(0,0,0,.24)' } : undefined
  const heroLinkStyle = overHero ? { color: '#ffffff', textShadow: '0 2px 14px rgba(0,0,0,.9)' } : undefined
  const links = [{ label: 'Shop', href: '/shop' }, { label: 'Collections', href: '/shop?collection=gold' }, { label: 'About', href: '/about' }, { label: 'Journal', href: '/journal' }]

  return (
    <header style={heroHeaderStyle} className={`fixed inset-x-0 top-0 z-30 border-b transition-all duration-500 ${navClass}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" style={heroLinkStyle} className="font-serif text-3xl font-semibold tracking-[0.18em]">VELMORA</Link>
        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary navigation">{links.map((item) => <NavLink key={item.label} to={item.href} style={heroLinkStyle} className="text-xs font-bold uppercase tracking-[0.24em] opacity-90 transition-opacity hover:opacity-100">{item.label}</NavLink>)}</nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <button type="button" style={heroLinkStyle} className="rounded-full p-2 transition-colors hover:bg-velmora-champagne/20" aria-label="Search"><Search className="h-5 w-5" /></button>
          <button type="button" onClick={onCartOpen} style={heroLinkStyle} className="relative rounded-full p-2 transition-colors hover:bg-velmora-champagne/20" aria-label="Open cart"><ShoppingBag className="h-5 w-5" />{cartCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-espresso">{cartCount}</span>}</button>
          <button type="button" onClick={() => setMobileOpen((value) => !value)} style={heroLinkStyle} className="rounded-full p-2 transition-colors hover:bg-velmora-champagne/20 lg:hidden" aria-label="Toggle menu">{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>
      <div className={`overflow-hidden border-t border-velmora-champagne/30 bg-velmora-linen text-velmora-ink transition-all duration-500 lg:hidden ${mobileOpen ? 'max-h-80' : 'max-h-0 border-transparent'}`}>
        <nav className="grid gap-1 px-4 py-5">{links.map((item) => <Link key={item.label} to={item.href} className="border-b border-velmora-champagne/30 py-4 text-sm font-bold uppercase tracking-[0.22em]">{item.label}</Link>)}</nav>
      </div>
    </header>
  )
}

function CartDrawer({ open, onClose, items, updateQuantity, removeItem }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <>
      <div className={`fixed inset-0 z-40 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={onClose} aria-hidden="true" />
      <aside className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-linen text-velmora-ink shadow-soft transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-champagne/45 p-5"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-muted">Velmora</p><h2 className="font-serif text-3xl font-semibold text-velmora-ink">Your Cart</h2></div><button type="button" onClick={onClose} className="rounded-full border border-velmora-champagne/60 p-2 text-velmora-ink transition-colors hover:bg-velmora-parchment" aria-label="Close cart"><X className="h-5 w-5" /></button></div>
        {items.length === 0 ? <div className="flex flex-1 flex-col items-center justify-center px-8 text-center"><div className="mb-5 rounded-full bg-velmora-parchment p-5 text-velmora-gold"><ShoppingBag className="h-8 w-8" /></div><h3 className="font-serif text-3xl font-semibold text-velmora-ink">Your jewelry box is empty</h3><p className="mt-3 text-sm leading-6 text-velmora-muted">Discover warm gold pieces made for gifting, layering, and everyday rituals.</p><Link to="/shop" onClick={onClose} className="mt-7 bg-velmora-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-espresso transition-colors hover:bg-velmora-champagne">Start Shopping</Link></div> : <><div className="flex-1 overflow-y-auto p-5"><div className="space-y-5">{items.map((item) => <div key={`${item.id}-${item.tone}`} className="grid grid-cols-[84px_1fr] gap-4 border-b border-velmora-champagne/35 pb-5"><div className="flex aspect-square items-center justify-center overflow-hidden bg-velmora-parchment text-velmora-gold"><ShoppingBag className="h-7 w-7" aria-hidden="true" /></div><div className="min-w-0"><div className="flex items-start justify-between gap-3"><div><p id={`${item.titleId}-cart`} className="font-serif text-base font-semibold uppercase tracking-[0.16em] text-velmora-ink">{item.name}</p><p id={`${item.descId}-cart`} className="mt-1 text-xs uppercase tracking-[0.16em] text-velmora-muted">{item.tone} tone</p></div><p className="font-semibold text-velmora-ink">${item.price * item.quantity}</p></div><div className="mt-4 flex items-center justify-between"><div className="flex items-center border border-velmora-champagne/60"><button type="button" onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)} className="p-2 text-velmora-ink hover:bg-velmora-parchment" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button><span className="min-w-9 text-center text-sm font-semibold text-velmora-ink">{item.quantity}</span><button type="button" onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)} className="p-2 text-velmora-ink hover:bg-velmora-parchment" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button></div><button type="button" onClick={() => removeItem(item.id, item.tone)} className="text-xs font-bold uppercase tracking-[0.18em] text-velmora-rose hover:text-velmora-ink">Remove</button></div></div></div>)}</div></div><div className="border-t border-velmora-champagne/45 p-5"><div className="flex items-center justify-between text-base font-semibold text-velmora-ink"><span>Subtotal</span><span>${subtotal}</span></div><p className="mt-2 text-sm text-velmora-muted">Shipping and taxes calculated at checkout.</p><button type="button" className="mt-5 w-full bg-velmora-espresso px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-linen transition-colors hover:bg-velmora-ink">Checkout Preview</button></div></>}
      </aside>
    </>
  )
}

function Hero() {
  return <section className="relative min-h-[88vh] overflow-hidden bg-velmora-espresso text-velmora-linen"><div className="absolute inset-0 scale-105 opacity-80" data-strk-bg-id="hero-warm-gold-model-bg-s8f2a1" data-strk-bg="[hero-subhead] [hero-title]" data-strk-bg-ratio="16x9" data-strk-bg-width="1800" /><div style={{ background: 'linear-gradient(90deg, rgba(0,0,0,.94), rgba(0,0,0,.72), rgba(0,0,0,.32))' }} className="absolute inset-0 hero-contrast-overlay bg-gradient-to-r from-black/90 via-black/65 to-black/25" /><div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-velmora-cream to-transparent" /><div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-4 pb-20 pt-32 sm:px-6 lg:px-8"><div className="max-w-2xl animate-fade-up"><p id="hero-eyebrow" style={{ color: '#fff7d6', textShadow: '0 3px 18px rgba(0,0,0,.9)', backgroundColor: 'rgba(0,0,0,.34)', display: 'inline-block', padding: '0.45rem 0.75rem' }} className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-amber-200 drop-shadow">Demi-fine gold jewelry</p><h1 id="hero-title" style={{ color: '#ffffff', textShadow: '0 6px 28px rgba(0,0,0,.72)' }} className="font-serif text-6xl font-semibold leading-[0.95] tracking-tight text-white drop-shadow-lg sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1><p id="hero-subhead" style={{ color: 'rgba(255,255,255,.96)', textShadow: '0 3px 18px rgba(0,0,0,.78)' }} className="mt-6 max-w-xl text-base leading-8 text-white/90 drop-shadow sm:text-lg">Warm, light-catching pieces for everyday rituals, thoughtful gifts, and the quiet confidence of gold worn close.</p><Link to="/shop" style={{ color: '#241A16', backgroundColor: '#D8B982', border: '1px solid rgba(255,255,255,.55)', boxShadow: '0 18px 50px rgba(0,0,0,.28)' }} className="hero-cta mt-9 inline-flex bg-velmora-gold px-7 py-4 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-espresso shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-velmora-champagne">Shop the Collection</Link></div></div></section>
}

function SectionHeading({ eyebrow, title, copy, dark = false }) {
  return <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"><p className={`text-xs font-bold uppercase tracking-[0.28em] ${dark ? 'text-velmora-champagne' : 'text-velmora-rose'}`}>{eyebrow}</p><h2 className={`mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl ${dark ? 'text-velmora-linen' : 'text-velmora-ink'}`}>{title}</h2>{copy && <p className={`mt-4 text-sm leading-7 sm:text-base ${dark ? 'text-velmora-parchment/85' : 'text-velmora-muted'}`}>{copy}</p>}</div>
}

function Home({ onAdd }) {
  return <main><Hero /><section className="border-y border-velmora-champagne/45 bg-velmora-parchment text-velmora-ink"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] sm:px-6 lg:grid-cols-4 lg:px-8">{['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => <span key={item}>{item}</span>)}</div></section><section className="bg-velmora-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24"><SectionHeading eyebrow="Most Loved" title="Bestsellers in Warm Gold" copy="Five signature pieces chosen for everyday shine, effortless gifting, and refined layering." /><div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-5">{products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}</div></section><section className="bg-velmora-espresso py-16 text-velmora-linen lg:py-24"><SectionHeading dark eyebrow="Worn by Velmora" title="Golden Moments, Captured Softly" copy="A reel-inspired glimpse of ear stacks, necklines, and gifts in real life." /><div className="no-scrollbar flex gap-4 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-8">{ugcPosts.map((post) => <article key={post.titleId} className="group relative aspect-[9/16] min-w-[220px] overflow-hidden border border-velmora-champagne/25 bg-velmora-ink shadow-soft sm:min-w-[270px]"><div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" data-strk-bg-id={post.bgId} data-strk-bg={`[${post.titleId}]`} data-strk-bg-ratio="9x16" data-strk-bg-width="520" /><div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/72 via-transparent to-transparent" /><p id={post.titleId} className="absolute bottom-5 left-5 right-5 font-serif text-3xl font-semibold leading-none text-velmora-linen">{post.caption}</p></article>)}</div></section><section className="bg-velmora-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24"><SectionHeading eyebrow="Shop by Category" title="Find Your Signature Shape" /><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">{categories.map((category) => <Link to={`/shop?category=${category.name}`} key={category.name} className="group relative min-h-[380px] overflow-hidden bg-velmora-espresso text-velmora-linen shadow-soft"><div className="absolute inset-0 opacity-80 transition-transform duration-700 group-hover:scale-105" data-strk-bg-id={category.bgId} data-strk-bg={`[${category.copyId}] [${category.titleId}]`} data-strk-bg-ratio="3x4" data-strk-bg-width="800" /><div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/78 via-velmora-ink/20 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7 transition-transform duration-500 md:translate-y-8 md:group-hover:translate-y-0"><h3 id={category.titleId} className="font-serif text-5xl font-semibold text-velmora-linen">{category.name}</h3><p id={category.copyId} className="mt-3 text-sm leading-6 text-velmora-parchment md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100">{category.copy}</p></div></Link>)}</div></section><BrandStory /><Testimonials /><Newsletter /></main>
}

function BrandStory() {
  return <section className="surface-noise px-4 py-16 sm:px-6 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl overflow-hidden border border-velmora-champagne/40 bg-velmora-linen shadow-soft lg:grid-cols-2"><div className="min-h-[460px] bg-velmora-parchment" data-strk-bg-id="brand-story-workbench-bg-t4c8e2" data-strk-bg="[brand-story-copy] [brand-story-title]" data-strk-bg-ratio="4x3" data-strk-bg-width="1000" /><div className="flex items-center p-8 sm:p-12 lg:p-16"><div><p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-rose">From our studio</p><h2 id="brand-story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight text-velmora-ink sm:text-6xl">Fine feeling, everyday intention.</h2><p id="brand-story-copy" className="mt-6 text-base leading-8 text-velmora-muted">Velmora designs demi-fine jewelry with the restraint of heirloom pieces and the ease of modern daily wear. Every curve, clasp, and crystal is chosen to flatter warm light and move with you.</p><Link to="/about" className="mt-8 inline-flex border-b border-velmora-gold pb-1 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-ink transition-colors hover:text-velmora-rose">Our Story</Link></div></div></div></section>
}

function Testimonials() {
  return <section className="bg-velmora-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24"><SectionHeading eyebrow="Notes from customers" title="Loved for Gifting and Keeping" /><div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">{reviews.map((review) => <blockquote key={review.name} className="border border-velmora-champagne/40 bg-velmora-linen p-7 text-velmora-ink shadow-soft"><div className="mb-5 flex gap-1 text-velmora-gold" aria-label="5 star review">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div><p className="font-serif text-2xl leading-8 text-velmora-ink">“{review.text}”</p><footer className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-velmora-muted">{review.name}</footer></blockquote>)}</div></section>
}

function Newsletter() {
  return <section className="bg-velmora-cream px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24"><div className="mx-auto max-w-7xl bg-velmora-gold p-8 text-velmora-espresso shadow-glow sm:p-12 lg:p-16"><div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center"><div><p className="text-xs font-extrabold uppercase tracking-[0.28em] text-velmora-espresso/80">Velmora letters</p><h2 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">Join for 10% off your first order</h2><p className="mt-4 max-w-xl text-sm leading-7 text-velmora-espresso/85">Receive early access to new drops, gifting edits, and quiet styling notes.</p></div><form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}><input type="email" placeholder="Email address" className="min-h-14 flex-1 border border-velmora-espresso/25 bg-velmora-linen px-5 text-velmora-ink placeholder:text-velmora-muted focus:outline-none focus:ring-2 focus:ring-velmora-espresso/40" aria-label="Email address" /><button type="submit" className="min-h-14 bg-velmora-espresso px-7 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-linen transition-colors hover:bg-velmora-ink">Sign Up</button></form></div></div></section>
}

function Shop({ onAdd }) {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const filtered = useMemo(() => {
    const list = products.filter((product) => (category === 'All' || product.category === category) && (material === 'All' || product.material === material) && (price === 'All' || (price === '$30–$50' && product.price <= 50) || (price === '$50–$80' && product.price > 50 && product.price <= 80) || (price === '$80–$120' && product.price > 80)))
    if (sort === 'price-low') return [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') return [...list].sort((a, b) => b.price - a.price)
    if (sort === 'rating') return [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [category, material, price, sort])

  return <main className="bg-velmora-cream pt-28 text-velmora-ink"><section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8"><div className="border-b border-velmora-champagne/45 pb-8"><p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-rose">Velmora shop</p><div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><h1 className="font-serif text-6xl font-semibold leading-none text-velmora-ink sm:text-7xl">The Collection</h1><p className="mt-5 max-w-2xl text-base leading-8 text-velmora-muted">Demi-fine gold jewelry designed for luminous daily wear, generous gifting, and soft evening light.</p></div><label className="flex max-w-xs flex-col gap-2 text-xs font-bold uppercase tracking-[0.18em] text-velmora-muted">Sort<select value={sort} onChange={(event) => setSort(event.target.value)} className="h-12 border border-velmora-champagne/60 bg-velmora-linen px-4 text-sm font-semibold normal-case tracking-normal text-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-gold/40"><option value="featured">Featured</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option><option value="rating">Top Rated</option></select></label></div></div></section><section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8"><aside className="h-fit border border-velmora-champagne/40 bg-velmora-linen p-5 shadow-soft lg:sticky lg:top-28"><h2 className="font-serif text-3xl font-semibold text-velmora-ink">Filter</h2><FilterGroup title="Category" options={['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']} value={category} onChange={setCategory} /><FilterGroup title="Price" options={['All', '$30–$50', '$50–$80', '$80–$120']} value={price} onChange={setPrice} /><FilterGroup title="Material" options={['All', '18K Gold Plated', 'Gold Vermeil', 'Recycled Brass']} value={material} onChange={setMaterial} /></aside><div><div className="mb-5 flex items-center justify-between text-sm text-velmora-muted"><p>{filtered.length} pieces</p><p>Free shipping over $75</p></div><div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{filtered.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}</div>{filtered.length === 0 && <div className="border border-velmora-champagne/40 bg-velmora-linen p-10 text-center text-velmora-ink"><h3 className="font-serif text-3xl font-semibold">No pieces found</h3><p className="mt-2 text-sm text-velmora-muted">Try easing one of the filters to discover more Velmora jewelry.</p></div>}</div></section></main>
}

function FilterGroup({ title, options, value, onChange }) {
  return <div className="mt-7 border-t border-velmora-champagne/35 pt-5"><p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-muted">{title}</p><div className="grid gap-2">{options.map((option) => <label key={option} className="flex items-center gap-3 text-sm text-velmora-ink"><input type="radio" checked={value === option} onChange={() => onChange(option)} className="accent-velmora-gold" /><span>{option}</span></label>)}</div></div>
}

function ProductDetail({ onAdd }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [selectedImage, setSelectedImage] = useState(0)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const gallery = [product.imgId, product.hoverImgId, `${product.id}-detail-lifestyle-u8c3d1`]
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const copy = { Description: product.description, 'Materials & Care': `${product.material}. ${product.care}`, 'Shipping & Returns': 'Free worldwide shipping on orders over $75. Unworn pieces may be returned within 30 days in original packaging.' }

  return <main className="bg-velmora-cream pb-20 pt-28 text-velmora-ink"><section className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8"><div className="grid gap-4 lg:grid-cols-[92px_1fr]"><div className="order-2 flex gap-3 lg:order-1 lg:flex-col">{gallery.map((imageId, index) => <button key={imageId} type="button" onClick={() => setSelectedImage(index)} className={`aspect-square w-20 overflow-hidden border bg-velmora-parchment transition-all ${selectedImage === index ? 'border-velmora-gold' : 'border-velmora-champagne/35'}`} aria-label={`View image ${index + 1}`}><div data-strk-bg-id={`${imageId}-thumb`} data-strk-bg={`[${product.descId}] [${product.titleId}]`} data-strk-bg-ratio="1x1" data-strk-bg-width="240" className="h-full w-full bg-cover bg-center" role="img" aria-label={product.name} /></button>)}</div><div className="order-1 aspect-[4/5] overflow-hidden bg-gradient-to-br from-velmora-parchment to-velmora-linen shadow-soft lg:order-2"><div data-strk-bg-id={`${gallery[selectedImage]}-main`} data-strk-bg={`[${product.descId}] [${product.titleId}]`} data-strk-bg-ratio="4x3" data-strk-bg-width="1100" className="h-full w-full bg-cover bg-center" role="img" aria-label={product.name} /></div></div><aside className="lg:sticky lg:top-28 lg:self-start"><p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-rose">{product.category}</p><h1 id={product.titleId} className="mt-3 font-serif text-5xl font-semibold uppercase leading-tight tracking-[0.16em] text-velmora-ink sm:text-6xl">{product.name}</h1><div className="mt-5 flex items-center justify-between border-y border-velmora-champagne/45 py-4"><p className="text-2xl font-semibold text-velmora-ink">${product.price}</p><div className="flex items-center gap-2 text-sm text-velmora-muted"><span className="flex text-velmora-gold">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</span><span>{product.rating} ({product.reviews})</span></div></div><p id={product.descId} className="mt-6 text-base leading-8 text-velmora-muted">{product.short}</p><div className="mt-8"><p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-muted">Tone</p><div className="flex gap-3">{['Gold', 'Silver'].map((option) => <button key={option} type="button" onClick={() => setTone(option)} className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-all ${tone === option ? 'border-velmora-gold bg-velmora-gold text-velmora-espresso' : 'border-velmora-champagne bg-transparent text-velmora-ink hover:bg-velmora-parchment'}`}>{option}</button>)}</div></div><div className="mt-7 flex items-center gap-4"><div className="flex h-14 items-center border border-velmora-champagne/60 bg-velmora-linen"><button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 text-velmora-ink" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button><span className="min-w-10 text-center font-semibold text-velmora-ink">{quantity}</span><button type="button" onClick={() => setQuantity(quantity + 1)} className="px-4 text-velmora-ink" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button></div><button type="button" onClick={() => onAdd(product, { tone, quantity })} className="h-14 flex-1 bg-velmora-gold px-6 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-espresso transition-all hover:bg-velmora-champagne hover:shadow-glow">Add to Cart</button></div><div className="mt-8 border-t border-velmora-champagne/45">{Object.keys(copy).map((title) => <div key={title} className="border-b border-velmora-champagne/45"><button type="button" onClick={() => setOpenAccordion(openAccordion === title ? '' : title)} className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink">{title}<span>{openAccordion === title ? '−' : '+'}</span></button>{openAccordion === title && <p className="pb-5 text-sm leading-7 text-velmora-muted">{copy[title]}</p>}</div>)}</div></aside></section><section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-8 flex items-end justify-between gap-4"><h2 className="font-serif text-4xl font-semibold text-velmora-ink">You may also like</h2><p className="hidden text-sm text-velmora-muted sm:block">Warm gold pieces with the same quiet polish.</p></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{related.map((item) => <ProductCard key={item.id} product={item} onAdd={onAdd} compact />)}</div></section></main>
}

function Footer() {
  const columns = [{ title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] }, { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] }, { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Reviews'] }]
  return <footer className="bg-velmora-espresso text-velmora-linen"><div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"><div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]"><div><Link to="/" className="font-serif text-4xl font-semibold tracking-[0.2em]">VELMORA</Link><p className="mt-5 max-w-sm text-sm leading-7 text-velmora-parchment/85">Demi-fine gold jewelry designed for everyday rituals, meaningful gifts, and a lifetime of small luminous moments.</p><div className="mt-7 flex gap-3">{[Instagram, Music2, Mail].map((Icon, index) => <a key={index} href="#" className="rounded-full border border-velmora-champagne/35 p-3 text-velmora-linen transition-colors hover:bg-velmora-gold hover:text-velmora-espresso" aria-label="Social link"><Icon className="h-4 w-4" /></a>)}</div></div><div className="grid gap-8 sm:grid-cols-3">{columns.map((column) => <div key={column.title}><h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">{column.title}</h3><ul className="mt-5 space-y-3 text-sm text-velmora-parchment/85">{column.links.map((link) => <li key={link}><a href="#" className="transition-colors hover:text-velmora-champagne">{link}</a></li>)}</ul></div>)}</div></div><div className="mt-14 flex flex-col gap-5 border-t border-velmora-champagne/25 pt-7 text-sm text-velmora-parchment/80 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Velmora Fine Jewelry. All rights reserved.</p><div className="flex items-center gap-2">{['VISA', 'MC', 'AMEX', 'PAY'].map((payment) => <span key={payment} className="border border-velmora-champagne/35 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-velmora-linen">{payment}</span>)}</div></div></div></footer>
}

function InfoPage({ type }) {
  const isJournal = type === 'journal'
  return <main className="surface-noise min-h-[70vh] pt-28 text-velmora-ink"><section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8"><p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-rose">Velmora {isJournal ? 'Journal' : 'Story'}</p><h1 className="mt-4 font-serif text-6xl font-semibold leading-none sm:text-7xl">{isJournal ? 'Editorial notes on gold, gifting, and ritual.' : 'Quietly made. Warmly worn.'}</h1><p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-velmora-muted">{isJournal ? 'A future home for styling guides, gift edits, and behind-the-scenes notes from the Velmora studio.' : 'Velmora is a direct-to-consumer demi-fine jewelry house creating refined gold pieces at an accessible price point.'}</p></section></main>
}

function AppShell({ cartCount, cartItems, cartOpen, onCartOpen, onCartClose, updateQuantity, removeItem, children }) {
  const imageRootRef = useRef(null)
  const location = useLocation()
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => ImageHelper.loadImages(strkImgConfig, imageRootRef.current))
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search, cartOpen, cartItems.length])

  return <div ref={imageRootRef} className="min-h-screen bg-velmora-cream text-velmora-ink"><Header cartCount={cartCount} onCartOpen={onCartOpen} />{children}<Footer /><CartDrawer open={cartOpen} onClose={onCartClose} items={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} /></div>
}

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

  const addToCart = (product, options = {}) => {
    const tone = options.tone || 'Gold'
    const quantity = options.quantity || 1
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id && item.tone === tone)
      return existing ? items.map((item) => item.id === product.id && item.tone === tone ? { ...item, quantity: item.quantity + quantity } : item) : [...items, { ...product, tone, quantity }]
    })
    setCartOpen(true)
  }
  const updateQuantity = (id, tone, quantity) => setCartItems((items) => items.map((item) => item.id === id && item.tone === tone ? { ...item, quantity } : item).filter((item) => item.quantity > 0))
  const removeItem = (id, tone) => setCartItems((items) => items.filter((item) => !(item.id === id && item.tone === tone)))

  return <BrowserRouter><AppShell cartCount={cartCount} cartItems={cartItems} cartOpen={cartOpen} onCartOpen={() => setCartOpen(true)} onCartClose={() => setCartOpen(false)} updateQuantity={updateQuantity} removeItem={removeItem}><Routes><Route path="/" element={<Home onAdd={addToCart} />} /><Route path="/shop" element={<Shop onAdd={addToCart} />} /><Route path="/product/:productId" element={<ProductDetail onAdd={addToCart} />} /><Route path="/about" element={<InfoPage type="about" />} /><Route path="/journal" element={<InfoPage type="journal" />} /></Routes></AppShell></BrowserRouter>
}

export default App
