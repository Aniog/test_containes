import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Home = () => {
  const { addItem, openCart } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              Crafted to be Treasured
            </h1>
            <p className="mt-4 text-base text-white/80 sm:text-lg">
              Demi-fine jewelry in warm 18K gold, designed for the modern collector.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3 text-sm font-semibold uppercase tracking-widest text-brand-bg transition-colors hover:bg-brand-accentHover"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-brand-border bg-brand-bg">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest text-brand-muted sm:gap-10">
            <span>Free Worldwide Shipping</span>
            <span className="hidden h-3 w-px bg-brand-border sm:block" />
            <span>30-Day Returns</span>
            <span className="hidden h-3 w-px bg-brand-border sm:block" />
            <span>18K Gold Plated</span>
            <span className="hidden h-3 w-px bg-brand-border sm:block" />
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl text-brand-text sm:text-4xl">Bestsellers</h2>
            <p className="mt-2 text-sm text-brand-muted">Our most-loved pieces, chosen by you.</p>
          </div>
          <Link to="/shop" className="hidden text-xs uppercase tracking-widest text-brand-accent hover:text-brand-accentHover sm:block">
            View all
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addItem} />
          ))}
        </div>
      </section>

      {/* UGC Reel-style row */}
      <section className="border-y border-brand-border bg-brand-bg">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-brand-text sm:text-3xl">Worn by You</h2>
          <p className="mt-1 text-sm text-brand-muted">Tag @velmora to be featured.</p>
          <div className="mt-6 flex gap-4 overflow-x-auto pb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="relative h-[420px] w-[260px] flex-shrink-0 overflow-hidden rounded-sm">
                <img
                  src={`https://images.unsplash.com/photo-${['1611591437281-460bfbe1220a', '1608042314453-ae338d80c427', '1630019852942-f89202989a59', '1602173574767-37ac01994b2a', '1596944924616-7b38e7cfac36'][i - 1]}?w=600&q=80`}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-display text-sm italic text-white/90">
                  “The Golden Sphere Huggies are my new everyday essential.”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-brand-text sm:text-4xl">Shop by Category</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {['Earrings', 'Necklaces', 'Huggies'].map((category) => (
            <Link
              key={category}
              to={`/shop?category=${category}`}
              className="group relative h-64 overflow-hidden rounded-sm sm:h-80"
            >
              <img
                src={`https://images.unsplash.com/photo-${['1611591437281-460bfbe1220a', '1608042314453-ae338d80c427', '1630019852942-f89202989a59'][['Earrings','Necklaces','Huggies'].indexOf(category)]}?w=800&q=80`}
                alt={category}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />
              <span className="absolute inset-0 flex items-center justify-center font-display text-2xl tracking-widest text-white sm:text-3xl">
                {category}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand story */}
      <section className="border-y border-brand-border bg-brand-bg">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            <div className="h-72 overflow-hidden rounded-sm sm:h-96">
              <img
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=80"
                alt="Velmora brand story"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl text-brand-text sm:text-4xl">Our Story</h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-textSoft">
                Velmora was founded on a simple belief: fine jewelry should feel effortless, personal, and within reach. We design each piece in our London studio, using recycled 18K gold-plated brass and ethically sourced crystals.
              </p>
              <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-accent hover:text-brand-accentHover">
                Read more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-brand-text sm:text-4xl">What Our Clients Say</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { name: 'Sophie M.', text: 'The packaging alone felt like a gift. The necklace is even more beautiful in person.' },
            { name: 'Elena R.', text: 'I wear the huggies every day. They’re lightweight and the gold tone is perfect.' },
            { name: 'Priya K.', text: 'Fast shipping and the quality is outstanding for the price. Will buy again.' },
          ].map((review, idx) => (
            <div key={idx} className="rounded-sm border border-brand-border bg-brand-surface p-6">
              <div className="flex gap-1 text-brand-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-brand-textSoft">“{review.text}”</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-brand-muted">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-y border-brand-border bg-brand-surfaceAlt">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-brand-text sm:text-4xl">Join for 10% off your first order</h2>
            <p className="mt-2 text-sm text-brand-muted">Be the first to know about new releases and exclusive offers.</p>
            <form
              className="mt-6 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks for subscribing!');
              }}
            >
              <input
                type="email"
                required
                placeholder="Email address"
                className="flex-1 rounded-full border border-brand-border bg-brand-bg px-5 py-3 text-sm text-brand-text placeholder:text-brand-muted focus:border-brand-accent focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-brand-accent px-7 py-3 text-sm font-semibold uppercase tracking-widest text-brand-bg transition-colors hover:bg-brand-accentHover"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

const ProductCard = ({ product, onAdd }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative h-64 overflow-hidden rounded-sm bg-brand-surfaceAlt sm:h-72">
          <img
            src={hovered ? product.images[1] : product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
        </div>
        <div className="mt-3">
          <h3 className="font-display text-base uppercase tracking-widest text-brand-text">{product.name}</h3>
          <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
        </div>
      </Link>
      <button
        onClick={() => onAdd(product, 'gold', 1)}
        className={`mt-3 w-full rounded-full border border-brand-border py-2 text-xs uppercase tracking-widest transition-all ${
          hovered ? 'bg-brand-accent text-brand-bg' : 'bg-transparent text-brand-text hover:border-brand-accent hover:text-brand-accent'
        }`}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Home;
