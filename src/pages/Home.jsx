import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, testimonials, ugcContent } from '../data/products';

export default function Home() {
  const bestsellers = products.slice(0, 5);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-secondary/20 z-10" />
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-display md:text-h1 text-secondary max-w-3xl">
            Crafted to be Treasured
          </h1>
          <p className="font-sans text-body md:text-h3 text-secondary/80 mt-4 max-w-xl">
            Premium demi-fine jewelry designed for the modern woman. Elegant, timeless, and made to last.
          </p>
          <Link
            to="/shop"
            className="mt-8 px-8 py-4 bg-accent-gold text-secondary font-sans text-small uppercase tracking-widest font-semibold hover:bg-accent-gold-hover transition-colors shadow-button"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary text-text-light py-4">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 font-sans text-small uppercase tracking-widest text-text-light/70">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-text-primary">Bestsellers</h2>
            <p className="font-sans text-body text-text-secondary mt-2">
              Our most loved pieces, chosen by you
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section className="py-12 bg-primary overflow-hidden">
        <div className="flex gap-4 md:gap-6 animate-scroll hover:pause">
          {[...ugcContent, ...ugcContent].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-40 md:w-56"
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 font-serif text-small text-text-light italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-text-primary">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-h2 text-text-light group-hover:scale-110 transition-transform duration-300">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
                alt="Jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-h2 text-text-light">Our Story</h2>
              <p className="font-sans text-body text-text-light/70 mt-6 leading-relaxed">
                Founded with a passion for creating jewelry that transcends trends, Velmora represents the essence of quiet luxury. Each piece is thoughtfully designed and crafted using only the finest materials, ensuring that your jewelry becomes a treasured part of your story.
              </p>
              <p className="font-sans text-body text-text-light/70 mt-4 leading-relaxed">
                We believe in jewelry that doesn't just complete an outfit, but becomes a part of who you are — pieces you'll reach for again and again, for years to come.
              </p>
              <Link
                to="/about"
                className="inline-block mt-8 font-sans text-small uppercase tracking-widest text-accent-gold border-b border-accent-gold pb-1 hover:text-text-light transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-text-primary">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center p-8 bg-primary border border-border-divider">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                  ))}
                </div>
                <p className="font-sans text-body text-text-primary italic">
                  "{testimonial.text}"
                </p>
                <p className="font-sans text-small text-text-secondary mt-4">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-accent-gold">
        <div className="max-w-container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-h2 text-secondary">Join for 10% Off</h2>
          <p className="font-sans text-body text-secondary/80 mt-2 max-w-md mx-auto">
            Subscribe to our newsletter and receive 10% off your first order
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-primary border border-secondary/20 text-text-primary font-sans text-body placeholder:text-text-secondary focus:outline-none focus:border-secondary"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-secondary text-primary font-sans text-small uppercase tracking-widest font-semibold hover:bg-secondary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}