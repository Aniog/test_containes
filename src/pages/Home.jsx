import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Mail, ChevronRight } from "lucide-react";
import { products, categories, testimonials, ugcPosts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const containerRef = useRef(null);
  const [email, setEmail] = React.useState("");
  const { addItem } = useCart();

  const handleNewsletter = (e) => {
    e.preventDefault();
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <div ref={containerRef}>
      {/* 1. Hero */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://placehold.co/1920x1080/2C2420/C9A227?text=Warm+Gold+Jewelry+on+Model"
            alt="Gold jewelry editorial"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/40" />
        </div>
        <div className="relative z-10 text-center text-cream px-4 max-w-3xl mx-auto animate-fade-in-up">
          <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-cream/70 mb-5">
            Demi-Fine Jewelry
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] mb-6">
            Crafted to be
            <br />
            Treasured
          </h1>
          <p className="font-sans text-base sm:text-lg text-cream/80 font-light max-w-md mx-auto mb-10 leading-relaxed">
            Timeless pieces designed for the modern woman. 18K gold-plated,
            hypoallergenic, and made to last.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold text-charcoal font-sans text-xs uppercase tracking-widest px-10 py-4 hover:bg-cream hover:text-charcoal transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-cream border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4">
            {[
              "Free Worldwide Shipping",
              "30-Day Returns",
              "18K Gold Plated",
              "Hypoallergenic",
            ].map((item, i) => (
              <React.Fragment key={item}>
                <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-warmgray">
                  {item}
                </span>
                {i < 3 && (
                  <span className="hidden sm:inline text-divider">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bestsellers */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-sans text-[11px] uppercase tracking-widest text-warmgray mb-2">
                Most Loved
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">
                Bestsellers
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden sm:flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-widest text-warmgray hover:text-gold transition-colors"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {products.slice(0, 5).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-widest text-warmgray hover:text-gold transition-colors"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="py-12 lg:py-16 bg-stonebg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <p className="font-sans text-[11px] uppercase tracking-widest text-warmgray mb-2">
            @velmora
          </p>
          <h2 className="font-serif text-2xl lg:text-3xl text-charcoal">
            Styled by You
          </h2>
        </div>
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-2" style={{ width: 'max-content' }}>
            {ugcPosts.map((post) => (
              <div
                key={post.id}
                className="relative w-56 sm:w-64 flex-shrink-0 aspect-[9/16] bg-espresso overflow-hidden group cursor-pointer"
              >
                <img
                  src={`https://placehold.co/400x711/2C2420/C9A227?text=Reel+${post.id}`}
                  alt={post.caption}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-base text-cream italic leading-snug">
                    {post.caption}
                  </p>
                  <p className="font-sans text-[10px] text-cream/60 mt-1.5">
                    {post.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-sans text-[11px] uppercase tracking-widest text-warmgray mb-2">
              Explore
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">
              Shop by Category
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to="/shop"
                className="relative aspect-[4/5] overflow-hidden group"
              >
                <img
                  src={`https://placehold.co/800x1000/2C2420/C9A227?text=${encodeURIComponent(
                    cat.label
                  )}`}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl lg:text-3xl text-cream tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                    {cat.label}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <span className="font-sans text-[11px] uppercase tracking-widest text-cream/80">
                    {cat.label}
                  </span>
                  <ChevronRight
                    size={18}
                    className="text-cream/80 group-hover:text-gold transition-colors"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Brand Story */}
      <section id="story" className="py-16 lg:py-0 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:min-h-[600px]">
            <div className="relative aspect-[4/5] lg:aspect-auto overflow-hidden">
              <img
                src="https://placehold.co/900x1100/2C2420/C9A227?text=Jewelry+Craftsmanship"
                alt="Jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center py-12 lg:py-20 lg:pl-16 xl:pl-24">
              <div className="max-w-md">
                <p className="font-sans text-[11px] uppercase tracking-widest text-warmgray mb-4">
                  Our Story
                </p>
                <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6 leading-snug">
                  Designed with Intention, Worn with Confidence
                </h2>
                <p className="font-sans text-sm text-warmgray leading-[1.8] mb-4">
                  Velmora was born from a simple belief: beautiful jewelry
                  shouldn't require a special occasion. Every piece is designed
                  in-house and crafted in small batches using 18K gold-plated
                  brass and surgical-grade stainless steel.
                </p>
                <p className="font-sans text-sm text-warmgray leading-[1.8] mb-8">
                  We prioritize sustainability, ethical sourcing, and timeless
                  design over fleeting trends. Because the best accessories are
                  the ones you reach for every single day.
                </p>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-charcoal hover:text-gold transition-colors border-b border-charcoal pb-1 hover:border-gold"
                >
                  Discover Our Collection <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section id="testimonials" className="py-16 lg:py-24 bg-stonebg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-sans text-[11px] uppercase tracking-widest text-warmgray mb-2">
              Reviews
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">
              Loved by Thousands
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-cream p-8 lg:p-10 flex flex-col"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="font-serif text-lg text-charcoal italic leading-relaxed flex-1 mb-6">
                  "{t.text}"
                </p>
                <p className="font-sans text-xs uppercase tracking-widest text-warmgray">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="py-16 lg:py-24 bg-espresso">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail
            size={28}
            className="text-gold mx-auto mb-5"
            strokeWidth={1.5}
          />
          <h2 className="font-serif text-3xl lg:text-4xl text-cream mb-3">
            Join the Inner Circle
          </h2>
          <p className="font-sans text-sm text-cream/60 mb-8">
            Subscribe for 10% off your first order, early access to new
            collections, and styling inspiration.
          </p>
          <form
            onSubmit={handleNewsletter}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-cream/30 text-cream placeholder:text-cream/40 font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-charcoal font-sans text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-cream transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[11px] text-cream/30 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
