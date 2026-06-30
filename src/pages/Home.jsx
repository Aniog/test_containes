import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, testimonials, ugcContent } from '../data/products';

export default function Home() {
  const bestsellers = products.slice(0, 5);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop"
            alt="Luxury gold jewelry"
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ 
              background: 'linear-gradient(to bottom, rgba(26,26,26,0.3) 0%, rgba(26,26,26,0.5) 100%)'
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-cream px-6 max-w-3xl">
          <h1 
            className="font-serif text-5xl md:text-7xl mb-6 animate-fade-in"
            style={{ 
              fontFamily: 'var(--font-serif)',
              textShadow: '0 2px 20px rgba(0,0,0,0.3)'
            }}
          >
            Crafted to be Treasured
          </h1>
          <p 
            className="text-lg md:text-xl mb-8 text-cream/80 animate-fade-in delay-200"
            style={{ 
              textShadow: '0 1px 10px rgba(0,0,0,0.3)'
            }}
          >
            Discover our collection of premium demi-fine jewelry, designed for the modern woman who appreciates quiet luxury.
          </p>
          <Link 
            to="/shop" 
            className="btn-primary animate-fade-in delay-300"
            style={{ 
              backgroundColor: 'var(--color-cream)',
              color: 'var(--color-charcoal)',
              borderColor: 'var(--color-cream)'
            }}
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section 
        className="py-4 border-b"
        style={{ 
          backgroundColor: 'var(--color-warm-white)',
          borderColor: 'var(--color-border)'
        }}
      >
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-xs tracking-widest text-stone" style={{ color: 'var(--color-stone)' }}>
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden md:inline">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden md:inline">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden md:inline">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 
              className="font-serif text-3xl md:text-4xl mb-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Bestsellers
            </h2>
            <p className="text-stone" style={{ color: 'var(--color-stone)' }}>
              Our most loved pieces
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/shop" 
              className="btn-outline inline-flex items-center gap-2"
            >
              View All
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section 
        className="py-12 overflow-hidden"
        style={{ backgroundColor: 'var(--color-warm-white)' }}
      >
        <div className="container">
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-6 px-6">
            {ugcContent.map((item) => (
              <div 
                key={item.id}
                className="flex-shrink-0 w-40 md:w-48"
              >
                <div className="relative aspect-[9/16] overflow-hidden mb-3">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  <p 
                    className="absolute bottom-3 left-3 right-3 text-xs text-cream font-serif italic"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 
              className="font-serif text-3xl md:text-4xl mb-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Shop by Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div 
                  className="absolute inset-0 bg-charcoal/30 transition-opacity duration-300 group-hover:bg-charcoal/40"
                  style={{ backgroundColor: 'rgba(26, 26, 26, 0.3)' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span 
                    className="font-serif text-2xl md:text-3xl text-cream tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.2em' }}
                  >
                    {category.name.toUpperCase()}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split Section */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Image */}
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <span 
                className="text-xs tracking-[0.3em] text-gold mb-4 block"
                style={{ 
                  color: 'var(--color-gold)',
                  letterSpacing: '0.3em'
                }}
              >
                OUR STORY
              </span>
              <h2 
                className="font-serif text-3xl md:text-4xl mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Jewelry That Tells Your Story
              </h2>
              <p className="text-stone leading-relaxed mb-6" style={{ color: 'var(--color-stone)' }}>
                Founded with a passion for creating jewelry that transcends trends, Velmora brings you pieces that balance timeless elegance with modern sensibility. Each piece is crafted with intention, using only the finest materials to ensure lasting beauty.
              </p>
              <p className="text-stone leading-relaxed mb-8" style={{ color: 'var(--color-stone)' }}>
                We believe jewelry should be more than an accessory—it should be a treasured part of your personal narrative, worn with joy for years to come.
              </p>
              <Link 
                to="/about" 
                className="btn-outline inline-flex items-center gap-2"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        className="section"
        style={{ backgroundColor: 'var(--color-warm-white)' }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 
              className="font-serif text-3xl md:text-4xl"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="text-center p-8 bg-cream"
                style={{ backgroundColor: 'var(--color-cream)' }}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className="text-gold text-lg"
                      style={{ color: 'var(--color-gold)' }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                
                <p 
                  className="font-serif text-lg mb-4 italic leading-relaxed"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  "{testimonial.text}"
                </p>
                <p className="text-sm text-stone" style={{ color: 'var(--color-stone)' }}>
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section 
        className="section text-center"
        style={{ backgroundColor: 'var(--color-charcoal)', color: 'var(--color-cream)' }}
      >
        <div className="container max-w-xl">
          <h2 
            className="font-serif text-3xl md:text-4xl mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Join for 10% Off
          </h2>
          <p className="text-cream/60 mb-8" style={{ color: 'rgba(250, 248, 245, 0.6)' }}>
            Subscribe to our newsletter and receive 10% off your first order.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-cream/30 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
              style={{ 
                borderColor: 'rgba(250, 248, 245, 0.3)',
                color: 'var(--color-cream)'
              }}
            />
            <button 
              type="submit"
              className="btn-primary whitespace-nowrap"
              style={{ 
                backgroundColor: 'var(--color-gold)',
                color: 'var(--color-charcoal)',
                borderColor: 'var(--color-gold)'
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}