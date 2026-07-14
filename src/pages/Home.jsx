import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { products, categories, testimonials, ugcContent } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

export default function Home() {
  const bestsellers = products.slice(0, 5);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop"
            alt="Gold jewelry on model"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/20 to-charcoal/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-cream px-4">
          <h1 className="font-serif text-display md:text-5xl lg:text-6xl mb-6 animate-fade-in">
            Crafted to be Treasured
          </h1>
          <p className="font-sans text-lg md:text-xl text-cream/80 max-w-xl mx-auto mb-10 animate-fade-in delay-200">
            Premium demi-fine jewelry designed for the modern woman. 
            Elegant pieces that become part of your story.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold hover:bg-gold-hover text-charcoal px-10 py-4 text-button uppercase tracking-wider transition-all hover:shadow-button animate-fade-in delay-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-cream-dark py-5 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-xs uppercase tracking-widest text-warm-gray">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Free Worldwide Shipping
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              30-Day Returns
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              18K Gold Plated
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Hypoallergenic
            </span>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="font-serif text-h2 md:text-h1">Bestsellers</h2>
            <p className="mt-3 text-warm-gray max-w-md mx-auto">
              Our most loved pieces, chosen by women who appreciate timeless elegance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {bestsellers.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-hover transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section className="py-16 bg-cream-dark overflow-hidden">
        <div className="container mb-8">
          <h2 className="font-serif text-h3 text-center">Worn with Love</h2>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto pb-4 scrollbar-hide">
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 md:w-48 relative group"
            >
              <div className="aspect-[9/16] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-3 left-3 right-3 text-cream text-sm font-serif italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="font-serif text-h2 md:text-h1">Shop by Category</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative overflow-hidden aspect-[3/4]"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-cream font-serif text-2xl md:text-3xl tracking-widest uppercase border border-cream/50 px-8 py-3 opacity-80 group-hover:opacity-100 group-hover:border-cream transition-all duration-300">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
                alt="Jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:pl-10">
              <span className="text-gold text-button uppercase tracking-widest">Our Story</span>
              <h2 className="font-serif text-h2 md:text-h1 mt-4 mb-6">
                Jewelry with Purpose
              </h2>
              <p className="text-warm-gray leading-relaxed mb-6">
                At Velmora, we believe jewelry is more than an accessory—it's a memory, 
                a statement, a treasure. Each piece is thoughtfully designed to bring 
                joy to your everyday moments.
              </p>
              <p className="text-warm-gray leading-relaxed mb-8">
                Our demi-fine collections blend premium quality with accessible luxury, 
                ensuring you can express your personal style without compromise.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-hover transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="font-serif text-h2 md:text-h1">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="text-center p-8 bg-cream-dark"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-warm-gray italic mb-4">"{testimonial.text}"</p>
                <p className="font-medium text-charcoal">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-h2 text-cream mb-4">
              Join the Velmora Circle
            </h2>
            <p className="text-cream/70 mb-8">
              Subscribe to receive 10% off your first order and be the first to know about new collections.
            </p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-transparent border border-cream/30 text-cream placeholder:text-cream/50 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-hover text-charcoal px-8 py-4 text-button uppercase tracking-wider transition-all hover:shadow-button whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}