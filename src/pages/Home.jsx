import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import ProductCard from "@/components/home/ProductCard";
import CategoryTile from "@/components/home/CategoryTile";
import TestimonialCard from "@/components/home/TestimonialCard";
import { products } from "@/data/products";

const Home = () => {
  const bestsellers = products.filter((p) => p.badge === "Bestseller");
  const categories = [
    { id: "earrings", label: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
    { id: "necklaces", label: "Necklaces", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80" },
    { id: "huggies", label: "Huggies", image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80" },
  ];

  const testimonials = [
    { name: "Sophia M.", initial: "S", text: "The quality is unreal for the price. I wear my Vivid Aura cuffs every single day.", rating: 5 },
    { name: "Emma R.", initial: "E", text: "Bought the Royal Heirloom Set as a gift and it was packaged so beautifully. She cried.", rating: 5 },
    { name: "Olivia T.", initial: "O", text: "Finally jewelry that feels premium but doesn’t break the bank. The Golden Spheres are my go-to.", rating: 5 },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
            Crafted to be Treasured
          </h1>
          <p className="mt-6 text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            Demi-fine jewelry designed for quiet luxury. Warm gold tones, considered details, and pieces meant to last.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 bg-white text-stone-900 px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-stone-100 transition-colors"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-4 text-[11px] uppercase tracking-[0.18em] text-stone-500">
            <span>Free Worldwide Shipping</span>
            <span className="hidden sm:inline text-stone-300">|</span>
            <span>30-Day Returns</span>
            <span className="hidden sm:inline text-stone-300">|</span>
            <span>18K Gold Plated</span>
            <span className="hidden sm:inline text-stone-300">|</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-900">Bestsellers</h2>
              <p className="mt-2 text-sm text-stone-500">Our most-loved pieces, chosen by you.</p>
            </div>
            <Link to="/shop" className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-700 hover:text-amber-800">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-700">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-10 bg-stone-50 border-y border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif text-xl text-stone-900 mb-6">As Worn By You</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="relative h-[420px] w-[260px] flex-shrink-0 snap-center overflow-hidden rounded-sm bg-stone-200"
              >
                <img
                  src={`https://images.unsplash.com/photo-${i === 1 ? "1611591437281-460bfbe1220a" : i === 2 ? "1630019852942-f89202989a59" : i === 3 ? "1602173574767-37ac01994b2a" : i === 4 ? "1602173574767-37ac01994b2a" : "1535632066927-ab7c9ab60908"}?w=600&q=80`}
                  alt={`UGC ${i}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white">
                  Wearing the Golden Sphere Huggies
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 mb-10 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((cat) => (
              <CategoryTile key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-stone-200">
              <img
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=80"
                alt="Velmora brand story"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-900">Our Story</h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">
                Velmora was born from a simple belief: fine jewelry should feel accessible, intentional, and timeless. We design each piece in small batches, using 18K gold-plated materials and hypoallergenic findings so you can wear them every day.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">
                From our studio to your jewelry box, we obsess over the details—because the best jewelry tells a story without saying a word.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-700 hover:text-amber-800"
              >
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 mb-10 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-24 bg-stone-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-stone-400 max-w-md mx-auto">
            Be the first to know about new releases, exclusive offers, and styling inspiration.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full sm:w-80 bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-stone-400 focus:outline-none focus:border-white/40"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-white text-stone-900 px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-stone-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
