import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { products, categories, testimonials, ugcContent } from '../data/products';
import { useCart } from '../context/CartContext';

function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop)'
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto animate-fade-in delay-100">
          Demi-fine jewelry designed for the modern woman. 
          Elegant, accessible, and made to last.
        </p>
        <Link 
          to="/shop" 
          className="btn btn-accent animate-fade-in delay-200"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-[var(--color-ivory)] py-4">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs uppercase tracking-wider text-[var(--color-muted)]">
          {items.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && <span className="hidden md:inline text-[var(--color-border)]">·</span>}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Bestsellers() {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-2">Bestsellers</h2>
          <p className="text-[var(--color-muted)]">Our most loved pieces</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart, delay = 0 }) {
  return (
    <div 
      className="product-card group animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="aspect-[3/4] bg-[var(--color-ivory)] relative overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="secondary-image">
            <img
              src={product.images[1]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="quick-view-overlay">
            <button
              onClick={(e) => {
                e.preventDefault();
                onAddToCart(product);
              }}
              className="btn btn-primary text-xs"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name text-xs">{product.name}</h3>
        </Link>
        <p className="text-sm mt-1">${product.price}</p>
      </div>
    </div>
  );
}

function UGC() {
  return (
    <section className="section bg-[var(--color-warm-white)]">
      <div className="container">
        <div className="ugc-scroll pb-4">
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="w-40 md:w-48 flex-shrink-0"
            >
              <div className="aspect-[9/16] bg-[var(--color-ivory)] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="font-serif text-sm text-white italic">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShopByCategory() {
  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-2">Shop by Category</h2>
          <p className="text-[var(--color-muted)]">Find your perfect piece</p>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop/${category.id}`}
              className="category-tile"
            >
              <img
                src={category.id === 'huggies' ? 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=600&fit=crop' : category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="label">
                <span className="font-serif text-xl md:text-2xl text-white uppercase tracking-wider">
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
    <section className="section bg-[var(--color-warm-white)]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[4/5] bg-[var(--color-ivory)] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Story</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              Founded with a vision to make fine jewelry accessible, Velmora 
              creates pieces that bridge the gap between luxury and everyday 
              elegance. Each piece is crafted with intention, designed to be 
              treasured for a lifetime.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-8">
              We believe jewelry should tell a story — whether it's the memory 
              of a special moment or a daily reminder of your worth. Our 
              demi-fine collections are made to be worn, loved, and passed down.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider hover:text-[var(--color-gold)] transition-colors"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section bg-[var(--color-ivory)]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-2">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <div className="flex justify-center gap-1 mb-4 stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              <p className="font-medium">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="section bg-[var(--color-charcoal)] text-white">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Join for 10% Off
          </h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter and receive 10% off your first order.
          </p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input flex-1 text-white"
            />
            <button type="submit" className="btn btn-accent whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
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
      <UGC />
      <ShopByCategory />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}