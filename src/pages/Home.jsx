import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  const bestsellers = products.filter((p) => p.badge === 'Bestseller' || p.reviews > 100).slice(0, 5);

  const ugcItems = [
    { id: 'ugc-1', caption: 'Everyday elegance', product: 'Golden Sphere Huggies' },
    { id: 'ugc-2', caption: 'Layered perfection', product: 'Majestic Flora Nectar' },
    { id: 'ugc-3', caption: 'Office to evening', product: 'Amber Lace Earrings' },
    { id: 'ugc-4', caption: 'Gift ready', product: 'Royal Heirloom Set' },
    { id: 'ugc-5', caption: 'Weekend vibes', product: 'Vivid Aura Jewels' },
  ];

  const testimonials = [
    { name: 'Sarah M.', initial: 'S', text: 'The quality is incredible for the price. I get compliments every time I wear my Vivid Aura cuffs.', rating: 5 },
    { name: 'Emily R.', initial: 'E', text: 'Finally found jewelry that feels luxurious without the luxury price tag. The Golden Sphere Huggies are my go-to.', rating: 5 },
    { name: 'Jessica T.', initial: 'J', text: 'Bought the Royal Heirloom Set as a gift and it was absolutely stunning. Beautiful packaging too.', rating: 5 },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[90vh] sm:h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(26,26,26,0.3), rgba(26,26,26,0.5)), url('https://placehold.co/1920x1080/2C2C2C/C9A96E?text=Warm+gold+jewelry+on+model')`,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-medium tracking-wide text-brand-cream leading-tight">
            Crafted to be Treasured
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-brand-sand/90 max-w-xl mx-auto leading-relaxed font-light">
            Demi-fine jewelry designed for the modern woman. 18K gold-plated, hypoallergenic, and made to last.
          </p>
          <Link
            to="/shop"
            className="mt-8 sm:mt-10 inline-flex items-center gap-2 rounded-full bg-brand-gold px-8 py-3.5 text-sm font-semibold tracking-widest uppercase text-white hover:bg-brand-gold-dark transition-all duration-300 hover:shadow-lg"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-brand-border bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-border/60">
            {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
              <div key={item} className="py-4 sm:py-5 px-3 sm:px-4 text-center">
                <p className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-brand-charcoal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-16 sm:py-24 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-wide text-brand-ink">Bestsellers</h2>
            <div className="mt-4 mx-auto w-12 h-px bg-brand-gold" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-12 sm:py-16 bg-brand-sand/40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-ink text-center">
            As Seen On You
          </h2>
          <p className="mt-2 text-sm text-brand-muted text-center">Tag @velmora to be featured</p>
        </div>
        <div className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-40 sm:w-48 md:w-56 aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={`https://placehold.co/400x711/2C2C2C/C9A96E?text=${encodeURIComponent(item.product)}`}
                alt={item.product}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm sm:text-base text-brand-cream italic">{item.caption}</p>
                <p className="mt-1 text-[10px] sm:text-xs tracking-widest uppercase text-brand-gold-light">{item.product}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 sm:py-24 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-wide text-brand-ink">Shop by Category</h2>
            <div className="mt-4 mx-auto w-12 h-px bg-brand-gold" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { id: 'earrings', name: 'Earrings', img: 'https://placehold.co/600x750/F3EDE4/C9A96E?text=Earrings' },
              { id: 'necklaces', name: 'Necklaces', img: 'https://placehold.co/600x750/F3EDE4/C9A96E?text=Necklaces' },
              { id: 'huggies', name: 'Huggies', img: 'https://placehold.co/600x750/F3EDE4/C9A96E?text=Huggies' },
            ].map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden"
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl sm:text-3xl font-medium tracking-widest text-brand-cream group-hover:tracking-[0.25em] transition-all duration-500">
                    {cat.name.toUpperCase()}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 sm:py-24 bg-brand-sand/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://placehold.co/800x1000/2C2C2C/C9A96E?text=Velmora+story"
                alt="Velmora brand story"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="max-w-lg">
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-wide text-brand-ink">Our Story</h2>
              <div className="mt-6 w-12 h-px bg-brand-gold" />
              <p className="mt-6 text-brand-charcoal leading-relaxed">
                Velmora was born from a simple belief: fine jewelry should be accessible, sustainable, and designed for real life. 
                Each piece is crafted from 18K gold-plated brass, hypoallergenic and made to be worn daily.
              </p>
              <p className="mt-4 text-brand-charcoal leading-relaxed">
                We work with skilled artisans who share our commitment to quality and ethical practices. 
                From our studio to your jewelry box, every Velmora piece is made to be treasured.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-brand-gold hover:text-brand-gold-dark transition-colors"
              >
                Read Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-wide text-brand-ink">What Our Customers Say</h2>
            <div className="mt-4 mx-auto w-12 h-px bg-brand-gold" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-brand-border bg-white p-6 sm:p-8 shadow-soft">
                <div className="flex gap-1 text-brand-gold">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-brand-charcoal leading-relaxed italic">"{t.text}"</p>
                <p className="mt-4 text-xs font-semibold tracking-widest uppercase text-brand-ink">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-24 bg-brand-ink">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-wide text-brand-cream">
            Join for 10% Off Your First Order
          </h2>
          <p className="mt-4 text-brand-sand/70 text-sm sm:text-base">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration.
          </p>
          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks for subscribing!');
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 rounded-full bg-white/10 border border-brand-sand/20 px-5 py-3 text-sm text-brand-cream placeholder:text-brand-sand/50 focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold tracking-widest uppercase text-white hover:bg-brand-gold-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
