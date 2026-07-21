import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, testimonials, ugcContent } from '../data/products';

export default function Home() {
  const bestsellers = products.slice(0, 5);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-velmora-charcoal">
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop"
            alt="Gold jewelry on model"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/80 via-transparent to-transparent" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-velmora-cream mb-6 animate-fade-in">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl text-velmora-sand max-w-xl mb-10 animate-slide-up">
            Premium demi-fine jewelry designed for the modern woman. 
            Elegant pieces that become part of your story.
          </p>
          <Link
            to="/shop"
            className="btn-primary animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-sand py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-xs md:text-sm uppercase tracking-widest text-velmora-charcoal/70">
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
      <section className="py-20 md:py-28 bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
              Bestsellers
            </h2>
            <p className="text-velmora-taupe">Our most loved pieces</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop" className="btn-outline inline-flex items-center gap-2">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section className="py-16 bg-velmora-charcoal overflow-hidden">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream">
            Styled by You
          </h2>
        </div>
        
        <div className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-4 px-4">
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 md:w-56 relative group"
            >
              <div className="aspect-[9/16] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-velmora-cream text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 md:py-28 bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
              Shop by Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative overflow-hidden aspect-[3/4]"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-velmora-charcoal/20 group-hover:bg-velmora-charcoal/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-3xl md:text-4xl text-velmora-cream uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-28 bg-velmora-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:pl-12">
              <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-6">
                Our Story
              </h2>
              <p className="text-velmora-taupe leading-relaxed mb-6">
                Founded with a vision to create jewelry that feels like a natural extension of the woman who wears it, 
                Velmora represents the intersection of timeless elegance and modern sensibility.
              </p>
              <p className="text-velmora-taupe leading-relaxed mb-8">
                Each piece is thoughtfully designed in our studio, crafted with precision and care, 
                and made to be treasured for years to come. We believe in jewelry that doesn't just 
                accessorize — it empowers.
              </p>
              <Link
                to="/about"
                className="btn-outline inline-flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="text-center p-8 bg-velmora-sand/50"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'fill-velmora-gold text-velmora-gold'
                          : 'text-velmora-taupe'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-velmora-taupe italic mb-4">"{testimonial.text}"</p>
                <p className="font-serif text-velmora-charcoal">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28 bg-velmora-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-cream mb-4">
            Join for 10% Off
          </h2>
          <p className="text-velmora-cream/80 mb-8 max-w-md mx-auto">
            Subscribe to our newsletter and receive 10% off your first order, 
            plus exclusive access to new collections and private sales.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-transparent border border-velmora-cream/30 text-velmora-cream placeholder-velmora-cream/50 focus:outline-none focus:border-velmora-cream"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-velmora-cream text-velmora-gold uppercase tracking-widest text-sm hover:bg-velmora-charcoal hover:text-velmora-cream transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}