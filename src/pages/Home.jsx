import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, testimonials, ugcContent } from '../data/products';

export default function Home() {
  const bestsellers = products.slice(0, 5);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-charcoal/60 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 animate-slide-up">
                Crafted to be Treasured
              </h1>
              <p className="text-lg text-white/80 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Premium demi-fine jewelry designed for the modern woman. 
                Elegant pieces that become part of your story.
              </p>
              <Link
                to="/shop"
                className="inline-block btn-primary animate-slide-up"
                style={{ animationDelay: '0.2s' }}
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-charcoal text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-xs tracking-widest uppercase">
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

      {/* Bestsellers Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Bestsellers</h2>
            <p className="text-gray-600">Our most-loved pieces</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-wider uppercase hover:text-velmora-gold transition-colors">
              View All
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section className="py-12 bg-velmora-warm overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-center">As Seen On You</h2>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-8 snap-x snap-mandatory scrollbar-hide">
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 md:w-56 snap-center"
            >
              <div className="relative aspect-[2/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Shop by Category</h2>
            <p className="text-gray-600">Find your perfect piece</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative overflow-hidden aspect-[3/4]"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-3xl text-white tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 bg-velmora-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
                alt="Jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded with a passion for creating jewelry that transcends trends, 
                Velmora represents the intersection of timeless elegance and modern sensibility. 
                Each piece is thoughtfully designed to become a treasured part of your personal journey.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our demi-fine collections feature premium materials—18K gold plating, 
                genuine crystals, and ethically sourced gemstones—crafted with the attention 
                to detail typically reserved for fine jewelry.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm tracking-wider uppercase hover:text-velmora-gold transition-colors"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center p-8 bg-velmora-warm">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-velmora-gold fill-velmora-gold" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <p className="font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-velmora-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Join for 10% Off
            </h2>
            <p className="text-gray-400 mb-8">
              Subscribe to our newsletter and receive 10% off your first order.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-velmora-gold"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}