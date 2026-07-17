import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, ArrowRight } from 'lucide-react';
import { products, categories, testimonials, ugcContent } from '../data/products';
import { useCart } from '../context/CartContext';

function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-charcoal/70 via-velmora-charcoal/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-velmora-ivory mb-6 animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-lg md:text-xl text-velmora-ivory/80 max-w-xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Demi-fine jewelry that elevates every moment. Quality you can feel, beauty you can see.
        </p>
        <Link
          to="/shop"
          className="inline-block btn-primary animate-slide-up hover:scale-105"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-velmora-ivory/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-velmora-ivory/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-velmora-ivory py-4 border-b border-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && <span className="hidden md:inline text-velmora-sand">·</span>}
              <span className="font-sans text-xs tracking-widest uppercase text-velmora-charcoal/70">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Bestsellers() {
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">Bestsellers</h2>
          <p className="font-sans text-velmora-charcoal/60">Our most loved pieces</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {bestsellerProducts.map((product) => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] bg-velmora-ivory overflow-hidden mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredProduct === product.id ? 'opacity-0 scale-105' : 'opacity-100'
                    }`}
                  />
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                      hoveredProduct === product.id ? 'opacity-100' : 'opacity-0 scale-95'
                    }`}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className={`absolute bottom-4 left-4 right-4 py-3 bg-velmora-charcoal text-white font-sans text-xs tracking-widest uppercase transition-all duration-300 hover:bg-velmora-gold ${
                      hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    Add to Cart
                  </button>
                </div>
                <h3 className="product-name text-velmora-charcoal">{product.name}</h3>
                <p className="font-sans text-sm text-velmora-gold mt-1">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function UGCStrip() {
  return (
    <section className="py-12 bg-velmora-ivory overflow-hidden">
      <div className="flex gap-4 animate-scroll hover:pause">
        {[...ugcContent, ...ugcContent].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 w-40 md:w-48 relative group"
          >
            <div className="aspect-[2/3] bg-velmora-sand overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="font-serif text-sm text-white italic">"{item.caption}"</p>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function CategoryTiles() {
  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">Shop by Category</h2>
          <p className="font-sans text-velmora-charcoal/60">Find your perfect piece</p>
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
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-3xl md:text-4xl text-white tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section className="py-20 md:py-32 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="aspect-[4/5] bg-velmora-sand overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="font-sans text-xs tracking-widest uppercase text-velmora-gold">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mt-4 mb-6">
              Jewelry with Purpose
            </h2>
            <p className="font-sans text-velmora-charcoal/70 leading-relaxed mb-6">
              At Velmora, we believe every piece of jewelry tells a story. Founded with a passion for creating accessible luxury, we craft demi-fine pieces that balance timeless elegance with modern sensibility.
            </p>
            <p className="font-sans text-velmora-charcoal/70 leading-relaxed mb-8">
              Each piece is thoughtfully designed using quality materials, including 18K gold plating and hypoallergenic components, ensuring you can wear your treasures every day.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center p-8 bg-velmora-ivory">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-lg text-velmora-charcoal/80 italic mb-6">
                "{testimonial.text}"
              </p>
              <p className="font-sans text-sm tracking-wider text-velmora-charcoal">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-velmora-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-ivory mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-velmora-ivory/60 mb-8 max-w-md mx-auto">
          Subscribe to receive exclusive offers, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="text-velmora-gold font-serif text-xl">
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-transparent border border-velmora-ivory/30 text-velmora-ivory placeholder-velmora-ivory/40 font-sans focus:outline-none focus:border-velmora-gold transition-colors"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}