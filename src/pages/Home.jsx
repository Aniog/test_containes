import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronRight } from 'lucide-react';
import { products, testimonials, ugcItems, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

// Section 2: Trust Bar
function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-charcoal text-cream/80 py-3 overflow-hidden">
      <div className="flex items-center justify-center gap-6 md:gap-12 section-padding">
        {items.map((item, i) => (
          <React.Fragment key={item}>
            {i > 0 && <span className="text-gold/40 text-xs">·</span>}
            <span className="text-[11px] tracking-widest-2xl uppercase whitespace-nowrap">
              {item}
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// Section 3: Bestsellers
function Bestsellers() {
  return (
    <section className="py-16 md:py-24 max-w-[1400px] mx-auto section-padding">
      <div className="text-center mb-12">
        <p className="text-label text-gold mb-3">Curated Selection</p>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Bestsellers</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/shop" className="btn-outline">
          View All Jewelry
        </Link>
      </div>
    </section>
  );
}

// Section 4: UGC Reel
function UGCReel() {
  return (
    <section className="py-16 md:py-20 bg-cream-dark">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-10 section-padding">
          <p className="text-label text-gold mb-3">Styled By You</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">#VelmoraStyle</h2>
        </div>
        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 section-padding scrollbar-hide">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-sm overflow-hidden relative group"
            >
              <div
                className="w-full h-full"
                data-strk-bg-id={item.imgId}
                data-strk-bg={`${item.caption} gold jewelry woman wearing earrings necklace`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-lg text-cream leading-snug">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section 5: Shop by Category
function ShopByCategory() {
  const categoryData = [
    {
      id: 'earrings',
      name: 'Earrings',
      imgId: 'cat-earrings',
      query: 'gold earrings jewelry collection display',
    },
    {
      id: 'necklaces',
      name: 'Necklaces',
      imgId: 'cat-necklaces',
      query: 'gold necklace jewelry collection display',
    },
    {
      id: 'huggies',
      name: 'Huggies',
      imgId: 'cat-huggies',
      query: 'gold huggie hoop earrings jewelry collection',
    },
  ];

  return (
    <section className="py-16 md:py-24 max-w-[1400px] mx-auto section-padding">
      <div className="text-center mb-12">
        <p className="text-label text-gold mb-3">Explore</p>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Shop by Category</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categoryData.map((cat, i) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/5] rounded-sm overflow-hidden"
          >
            <div
              className="w-full h-full"
              data-strk-bg-id={cat.imgId}
              data-strk-bg={cat.query}
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-end justify-center pb-8">
              <div className="text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-cream mb-2 tracking-wider">
                  {cat.name}
                </h3>
                <span className="text-xs tracking-widest-2xl uppercase text-cream/70 group-hover:text-cream transition-colors flex items-center justify-center gap-1">
                  Shop Now <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Section 6: Brand Story
function BrandStory() {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-[1400px] mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <div
              data-strk-bg-id="brand-story-img"
              data-strk-bg="artisan crafting gold jewelry workshop warm lighting"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-label text-gold mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-snug">
              Jewelry That Tells Your Story
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-6">
              Velmora was born from a simple belief: every woman deserves access to beautifully crafted
              jewelry that doesn't compromise on quality or break the bank. We work directly with
              skilled artisans to bring you demi-fine pieces that feel luxurious, last beautifully,
              and become part of your everyday story.
            </p>
            <p className="text-charcoal-light leading-relaxed mb-8">
              Every piece in our collection is crafted from 18K gold-plated sterling silver,
              designed to be hypoallergenic and enduring. We skip the middleman and the markup,
              delivering premium jewelry straight to your door.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase font-medium text-charcoal hover:text-gold transition-colors group"
            >
              Read Our Full Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 7: Testimonials
function Testimonials() {
  return (
    <section className="py-16 md:py-24 max-w-[1400px] mx-auto section-padding">
      <div className="text-center mb-12">
        <p className="text-label text-gold mb-3">Reviews</p>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal">What Our Customers Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, i) => (
          <div
            key={testimonial.id}
            className="bg-cream-dark/50 rounded-sm p-8 text-center animate-fade-in"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-charcoal-light leading-relaxed mb-6 text-sm">
              "{testimonial.text}"
            </p>
            <div>
              <p className="font-serif text-lg text-charcoal">{testimonial.name}</p>
              <p className="text-xs text-charcoal-light mt-1">{testimonial.product}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Section 8: Newsletter
function Newsletter() {
  return (
    <section className="py-16 md:py-20 bg-charcoal">
      <div className="max-w-[1400px] mx-auto section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-label text-gold mb-4">Stay Connected</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-cream/60 mb-8 text-sm">
            Be the first to discover new collections, exclusive offers, and styling inspiration.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 px-5 py-3 text-sm tracking-wide focus:border-gold/50 transition-colors"
            />
            <button type="submit" className="btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-cream/30 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

// Main Home Component
export default function Home() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef}>
      {/* Section 1: Hero */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg"
          data-strk-bg="luxury gold jewelry close up warm light model wearing elegant necklace earrings"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/60" />

        {/* Content */}
        <div className="relative z-10 text-center section-padding max-w-3xl">
          <p className="text-label text-gold-light mb-4 animate-fade-in">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream mb-6 animate-fade-in animate-delay-100">
            Crafted to be Treasured
          </h1>
          <p className="text-cream/80 mb-8 max-w-lg mx-auto text-sm md:text-base leading-relaxed animate-fade-in animate-delay-200">
            Premium demi-fine jewelry in 18K gold. Designed for the modern woman who appreciates
            quiet luxury and timeless elegance.
          </p>
          <Link
            to="/shop"
            className="btn-gold animate-fade-in animate-delay-300"
          >
            Shop the Collection
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border-2 border-cream/40 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-cream/60 rounded-full mt-1.5" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Bestsellers */}
      <Bestsellers />

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto section-padding">
        <div className="divider" />
      </div>

      {/* UGC Reel */}
      <UGCReel />

      {/* Shop by Category */}
      <ShopByCategory />

      {/* Brand Story */}
      <BrandStory />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
