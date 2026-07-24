import React from 'react';
import { ArrowRight, Star, ChevronRight } from 'lucide-react';
import { products, categories, testimonials } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, renderStars } from '@/lib/utils';

/* ───────── Hero ───────── */
function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1600&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-8xl mx-auto px-6 w-full">
          <div className="max-w-lg">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              Crafted to be<br />Treasured
            </h1>
            <p className="text-white/80 text-base md:text-lg mt-4 leading-relaxed max-w-md">
              Demi-fine gold jewelry for the everyday — warm, elegant, and made to last.
            </p>
            <a
              href="/shop"
              className="inline-flex items-center gap-2 mt-8 px-10 py-4 bg-[#C79A5E] text-white text-xs uppercase tracking-[0.12em] font-medium hover:bg-[#B8894D] transition-all duration-300"
            >
              Shop the Collection
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Trust Bar ───────── */
function TrustBar() {
  const benefits = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];
  return (
    <div className="border-y border-[#E8E2D8] bg-white">
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex items-center justify-center md:justify-between gap-6 md:gap-0 py-3.5 overflow-x-auto hide-scrollbar">
          {benefits.map((b) => (
            <span
              key={b}
              className="text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-[#6B6358] whitespace-nowrap"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────── Bestsellers Grid ───────── */
function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = React.useState(null);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Bestsellers</h2>
          <p className="text-[#6B6358] text-sm mt-3">Our most-loved pieces, chosen by you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <a href={`/product/${product.id}`} className="block">
                <div className="relative aspect-[4/5] bg-[#F0EBE4] overflow-hidden mb-3">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      hoveredId === product.id ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                    }`}
                  />
                  <img
                    src={product.images[1] || product.images[0]}
                    alt={`${product.name} alternate view`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      hoveredId === product.id ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                    }`}
                  />
                </div>
              </a>

              <div className="px-1">
                <h3 className="product-name text-xs md:text-sm truncate">
                  <a href={`/product/${product.id}`} className="hover:text-[#C79A5E] transition-colors">
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-[#1A1A1A] mt-1 font-medium">{formatPrice(product.price)}</p>

                {/* Quick Add — visible on hover (desktop) */}
                <button
                  onClick={() => addItem(product)}
                  className="btn-primary w-full text-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
                >
                  Add to Cart
                </button>

                {/* Mobile always visible */}
                <button
                  onClick={() => addItem(product)}
                  className="btn-primary w-full text-center mt-3 md:hidden"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── UGC Reel ───────── */
function UGCReel() {
  const ugcItems = [
    { id: 1, caption: 'Golden hour with my Vivid Aura cuff', image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&q=80' },
    { id: 2, caption: 'The perfect gift for bridesmaids', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80' },
    { id: 3, caption: 'Stacking my Golden Sphere Huggies', image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&q=80' },
    { id: 4, caption: 'Obsessed with the Amber Lace drops', image: 'https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?w=400&q=80' },
    { id: 5, caption: 'Everyday elegance with Velmora', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80' },
    { id: 6, caption: 'Date night jewelry sorted', image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&q=80' },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F0EBE4]">
      <div className="max-w-8xl mx-auto">
        <div className="px-6 mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">As Seen On You</h2>
          <p className="text-[#6B6358] text-sm mt-2">Tag @velmorajewelry for a chance to be featured</p>
        </div>

        <div className="overflow-x-auto hide-scrollbar px-6">
          <div className="flex gap-4 md:gap-6 pb-4" style={{ width: 'max-content' }}>
            {ugcItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-48 md:w-56 aspect-[9/16] bg-[#1A1A1A] overflow-hidden relative group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-white text-xs md:text-sm font-serif leading-relaxed">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Shop by Category ───────── */
function ShopByCategory() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-[#F0EBE4]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white tracking-[0.08em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Brand Story ───────── */
function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-8xl mx-auto">
        <div className="grid md:grid-cols-2">
          {/* Image side */}
          <div className="aspect-[4/5] md:aspect-auto md:h-full bg-[#F0EBE4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1000&q=80"
              alt="Crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="flex items-center px-6 md:px-16 py-12 md:py-0">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-[0.12em] text-[#C79A5E] mb-3">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
                Jewelry That Feels Like You
              </h2>
              <div className="w-12 h-0.5 bg-[#C79A5E] mt-6" />
              <p className="text-[#6B6358] text-sm md:text-base leading-relaxed mt-6">
                Velmora was born from a belief that fine jewelry shouldn't be reserved for special occasions.
                We craft demi-fine pieces with 18K gold plating — accessible luxury you can wear every day,
                without compromise.
              </p>
              <p className="text-[#6B6358] text-sm md:text-base leading-relaxed mt-4">
                Each piece is designed in-house, ethically sourced, and carefully finished to ensure it
                remains as luminous as the day you received it.
              </p>
              <a
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-[0.12em] text-[#1A1A1A] hover:text-[#C79A5E] transition-colors font-medium"
              >
                Read Our Story <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Testimonials ───────── */
function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-8xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">Loved by You</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {renderStars(t.rating).map((type, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      type === 'full' ? 'fill-[#C79A5E] text-[#C79A5E]' :
                      type === 'half' ? 'fill-[#C79A5E]/50 text-[#C79A5E]' :
                      'text-[#E8E2D8]'
                    }`}
                  />
                ))}
              </div>
              <p className="text-[#6B6358] text-sm leading-relaxed italic font-serif">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs uppercase tracking-[0.12em] text-[#1A1A1A] mt-4 font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Newsletter ───────── */
function Newsletter() {
  return (
    <section className="py-20 md:py-28 bg-[#C79A5E]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-white/80 text-sm mt-4 leading-relaxed">
          Be the first to know about new collections, exclusive previews, and jewelry care tips.
        </p>
        <form
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/60 transition-colors"
            required
          />
          <button
            type="submit"
            className="px-8 py-4 bg-white text-[#C79A5E] text-xs uppercase tracking-[0.12em] font-medium hover:bg-white/90 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

/* ───────── Main Home Page ───────── */
export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <ShopByCategory />
      <BrandStory />
      <TestimonialsSection />
      <Newsletter />
    </main>
  );
}