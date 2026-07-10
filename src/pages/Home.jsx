import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Star } from 'lucide-react';
import { useCartDispatch } from '../hooks/useCart';
import { products, categories, testimonials } from '../data/products';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useCartDispatch();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bestsellers = products.filter((p) => p.bestseller);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, variant: product.variants[0] } });
    dispatch({ type: 'OPEN_DRAWER' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-surface/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="section-container flex items-center justify-between py-4">
          <Link to="/" className="font-display text-xl font-semibold tracking-widest text-ink">VELMORA</Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-secondary">
            <Link to="/shop" className="transition-colors hover:text-ink">Shop</Link>
            <Link to="/collection/Earrings" className="transition-colors hover:text-ink">Collections</Link>
            <Link to="/" className="transition-colors hover:text-ink">About</Link>
            <Link to="/" className="transition-colors hover:text-ink">Journal</Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 text-ink transition-colors hover:bg-background" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_DRAWER' })}
              className="relative rounded-full p-2 text-ink transition-colors hover:bg-background"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button className="md:hidden rounded-full p-2 text-ink transition-colors hover:bg-background" onClick={() => setMobileOpen((v) => !v)} aria-label="Menu">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-surface/95 backdrop-blur-md">
            <div className="section-container flex flex-col gap-4 py-6 text-sm font-medium text-ink">
              <Link to="/shop" onClick={() => setMobileOpen(false)} className="py-2">Shop</Link>
              <Link to="/collection/Earrings" onClick={() => setMobileOpen(false)} className="py-2">Collections</Link>
              <Link to="/" onClick={() => setMobileOpen(false)} className="py-2">About</Link>
              <Link to="/" onClick={() => setMobileOpen(false)} className="py-2">Journal</Link>
            </div>
          </div>
        )}
      </nav>

      <section className="relative h-[92vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1800&q=80"
          alt="Gold jewelry editorial"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="relative z-10 flex h-full items-end">
          <div className="section-container pb-24">
            <h1 className="font-display text-4xl font-semibold tracking-wide text-white md:text-6xl lg:text-7xl">Crafted to be Treasured</h1>
            <p className="mt-4 max-w-xl text-sm text-white/80 md:text-base">Quiet luxury demi-fine jewelry, designed for the modern collector. Warm 18K gold plating, refined silhouettes, and effortless elegance.</p>
            <Link to="/shop" className="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-ink transition-colors hover:bg-[#f5ecd7]">Shop the Collection</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="section-container flex flex-wrap items-center justify-center gap-6 py-4 text-xs font-medium uppercase tracking-widest text-ink-secondary md:gap-12">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline h-3 w-px bg-border-strong" />
          <span>30-Day Returns</span>
          <span className="hidden md:inline h-3 w-px bg-border-strong" />
          <span>18K Gold Plated</span>
          <span className="hidden md:inline h-3 w-px bg-border-strong" />
          <span>Hypoallergenic</span>
        </div>
      </section>

      <section className="section-container py-16 md:py-24">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-wide text-ink md:text-4xl">Bestsellers</h2>
            <p className="mt-2 text-sm text-ink-secondary">The pieces our community wears most.</p>
          </div>
          <Link to="/shop" className="hidden md:inline-flex text-sm font-medium text-ink underline underline-offset-4 hover:text-accent">View all</Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={() => addToCart(product)} />
          ))}
        </div>
        <Link to="/shop" className="mt-8 inline-flex md:hidden text-sm font-medium text-ink underline underline-offset-4 hover:text-accent">View all</Link>
      </section>

      <section className="section-container pb-16 md:pb-24">
        <h2 className="font-display text-3xl font-semibold tracking-wide text-ink md:text-4xl">As Seen On You</h2>
        <p className="mt-2 text-sm text-ink-secondary">Real moments, styled by our community.</p>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="relative h-[420px] w-[260px] flex-shrink-0 overflow-hidden rounded-2xl bg-background">
              <img
                src={`https://images.unsplash.com/photo-${['1611591437281-460bfbe1220a', '1599643478518-a784e5dc4c8f', '1630019852942-f89202989a59', '1535632066927-ab7c11ab9f6a', '1602173574767-37ac01994b2a'][item - 1]}?auto=format&fit=crop&w=800&q=80`}
                alt="Community style"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="font-display text-sm font-medium text-white">Wardrobe Edit {item}</p>
                <p className="text-xs text-white/80">@velmora_community</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container pb-16 md:pb-24">
        <h2 className="font-display text-3xl font-semibold tracking-wide text-ink md:text-4xl">Shop by Category</h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} to={`/collection/${category.name}`} className="group relative h-72 overflow-hidden rounded-2xl">
              <img src={category.image} alt={category.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-lg font-semibold tracking-widest text-white">{category.name.toUpperCase()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-container grid grid-cols-1 gap-10 pb-16 md:grid-cols-2 md:pb-24">
        <div className="h-80 overflow-hidden rounded-2xl md:h-full">
          <img src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80" alt="Brand story" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-3xl font-semibold tracking-wide text-ink md:text-4xl">Our Story</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-secondary md:text-base">
            Velmora was founded on a simple belief: fine jewelry should feel attainable, personal, and enduring. We design each piece in-house using recycled metals and ethically sourced crystals, then plate in 18K gold for a warm, luminous finish that lasts.
          </p>
          <Link to="/" className="mt-6 inline-flex text-sm font-semibold text-ink underline underline-offset-4 hover:text-accent">Read more about Velmora</Link>
        </div>
      </section>

      <section className="bg-surface">
        <div className="section-container py-16 md:py-24">
          <h2 className="font-display text-3xl font-semibold tracking-wide text-ink md:text-4xl">What Our Collectors Say</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((review) => (
              <div key={review.id} className="rounded-2xl border border-border bg-background p-6">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-secondary">“{review.text}”</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-ink">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-16 md:py-24">
        <div className="rounded-2xl bg-ink px-8 py-12 md:px-16 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-wide text-white md:text-4xl">Join for 10% off your first order</h2>
              <p className="mt-3 text-sm text-white/70">Be the first to know about new releases, styling stories, and exclusive offers.</p>
            </div>
            <form className="flex flex-col gap-3 md:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Email address"
                className="h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button type="submit" className="h-12 rounded-full bg-accent px-6 text-sm font-semibold text-white transition-colors hover:bg-accent/90">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-surface">
        <div className="section-container grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-lg font-semibold tracking-widest text-ink">VELMORA</p>
            <p className="mt-3 text-xs text-ink-secondary">Quiet luxury demi-fine jewelry for modern collectors.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">Shop</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-secondary">
              <li><Link to="/collection/Earrings" className="hover:text-ink">Earrings</Link></li>
              <li><Link to="/collection/Necklaces" className="hover:text-ink">Necklaces</Link></li>
              <li><Link to="/collection/Huggies" className="hover:text-ink">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-ink">All</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">Help</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-secondary">
              <li><Link to="/" className="hover:text-ink">Shipping</Link></li>
              <li><Link to="/" className="hover:text-ink">Returns</Link></li>
              <li><Link to="/" className="hover:text-ink">Contact</Link></li>
              <li><Link to="/" className="hover:text-ink">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-secondary">
              <li><Link to="/" className="hover:text-ink">Our Story</Link></li>
              <li><Link to="/" className="hover:text-ink">Sustainability</Link></li>
              <li><Link to="/" className="hover:text-ink">Press</Link></li>
              <li><Link to="/" className="hover:text-ink">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="hairline" />
        <div className="section-container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-xs text-ink-secondary">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-ink-secondary">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ProductCard = ({ product, onAdd }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="relative h-64 overflow-hidden rounded-2xl bg-background md:h-80">
        <img src={hovered && product.images[1] ? product.images[1] : product.images[0]} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.preventDefault();
              onAdd();
            }}
            className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-ink backdrop-blur-sm transition-colors hover:bg-white"
          >
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="mt-3">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-ink">{product.name}</p>
        <p className="mt-1 text-xs text-ink-secondary">{product.category}</p>
        <p className="mt-1 text-sm font-medium text-ink">${product.price}</p>
      </div>
    </div>
  );
};

export default Home;
