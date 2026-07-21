import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, testimonials, ugcContent } from '../data/products';

const HomePage = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background */}
        <div 
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-001"
          data-strk-bg="gold jewelry elegant woman"
          data-strk-bg-ratio="9x16"
          data-strk-bg-width="1920"
          style={{
            background: 'linear-gradient(135deg, #f5f0e8 0%, #e8e2d9 50%, #d4d0c5 100%)'
          }}
        >
          {/* Decorative gold accent */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(ellipse at 70% 30%, rgba(201, 169, 98, 0.3) 0%, transparent 60%)'
            }}
          />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-2xl mx-auto text-center">
            <p 
              className="text-xs tracking-[0.3em] uppercase mb-6 animate-fade-in"
              style={{ color: 'var(--color-accent)' }}
            >
              Demi-Fine Jewelry
            </p>
            <h1 
              className="font-serif text-5xl md:text-7xl leading-[1.1] mb-6 animate-slide-up"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Crafted to be Treasured
            </h1>
            <p 
              className="text-lg md:text-xl mb-10 max-w-lg mx-auto animate-slide-up delay-200"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Elegant 18K gold plated pieces designed for the modern woman. 
              Luxury within reach, made to last.
            </p>
            <Link 
              to="/shop"
              className="btn btn-primary animate-slide-up delay-300"
              style={{ 
                backgroundColor: 'var(--color-base)', 
                color: 'var(--color-white)',
                padding: '1rem 2.5rem'
              }}
            >
              Shop the Collection
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1" style={{ borderColor: 'var(--color-taupe)' }}>
            <div className="w-1 h-2 rounded-full" style={{ backgroundColor: 'var(--color-taupe)' }} />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section 
        className="py-4 border-b"
        style={{ 
          backgroundColor: 'var(--color-bg-primary)',
          borderColor: 'var(--color-border)'
        }}
      >
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-xs tracking-wider uppercase">
            {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item, i) => (
              <span key={i} className="flex items-center gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                <span style={{ color: 'var(--color-accent)' }}>✦</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Bestsellers</h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>Our most loved pieces</p>
          </div>
          
          <div className="grid-products">
            {bestsellers.map((product, index) => (
              <div 
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop" className="btn btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section className="py-12 overflow-hidden" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-center">As Seen On You</h2>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-4">
          {ugcContent.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-40 md:w-48 relative group cursor-pointer"
            >
              <div className="aspect-[9/16] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p 
                className="absolute bottom-3 left-3 right-3 font-serif text-sm italic text-white"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Shop by Category</h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>Find your perfect piece</p>
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
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span 
                    className="font-serif text-2xl md:text-3xl text-white tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Image */}
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="md:pl-8">
              <p 
                className="text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                Jewelry with Intention
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                At Velmora, we believe every piece of jewelry tells a story. 
                Our demi-fine collections are crafted with care, using only the finest 
                materials and thoughtful design that bridges the gap between 
                everyday luxury and accessible elegance.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                Each piece is designed to be worn, cherished, and passed down— 
                not just for today, but for a lifetime.
              </p>
              <Link 
                to="/about" 
                className="btn btn-outline"
                style={{ borderColor: 'var(--color-base)', color: 'var(--color-base)' }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="text-center p-8"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border-light)'
                }}
              >
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--color-accent)" color="var(--color-accent)" />
                  ))}
                </div>
                <p 
                  className="font-serif text-lg italic mb-6 leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  "{testimonial.text}"
                </p>
                <p className="font-medium" style={{ color: 'var(--color-text-primary)' }}>
                  {testimonial.initials}. {testimonial.name.split(' ')[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section 
        className="py-20"
        style={{ backgroundColor: 'var(--color-base)' }}
      >
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 
              className="font-serif text-3xl md:text-4xl mb-4 text-white"
            >
              Join the Velmora Circle
            </h2>
            <p className="mb-8 opacity-80 text-white">
              Subscribe for 10% off your first order and exclusive access to new collections.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
              />
              <button 
                type="submit"
                className="btn btn-accent whitespace-nowrap"
                style={{ 
                  backgroundColor: 'var(--color-accent)', 
                  color: 'var(--color-white)',
                  padding: '1rem 2rem'
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;