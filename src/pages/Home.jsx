import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, ugcImages, testimonials } from '../data/products';

const Home = ({ onAddToCart }) => {
  const bestsellers = products.slice(0, 5);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-bg-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=2000&q=80')] bg-cover bg-center opacity-60" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-wider mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-text-muted text-center">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span>30-DAY RETURNS</span>
            <span>18K GOLD PLATED</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-accent mb-2">DISCOVER</p>
            <h2 className="font-serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-wider hover:text-accent hidden md:block">View All →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] text-accent mb-2 text-center">AS SEEN ON</p>
          <h2 className="font-serif text-4xl text-center mb-10">Real Moments</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {ugcImages.map(item => (
              <div key={item.id} className="ugc-card w-[180px] aspect-[9/16] rounded-lg overflow-hidden">
                <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                <div className="ugc-caption">
                  <p className="font-serif text-sm italic">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-accent mb-2">EXPLORE</p>
          <h2 className="font-serif text-4xl">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", category: "earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", category: "necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", category: "huggies", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80" },
          ].map(cat => (
            <Link key={cat.category} to={`/shop?category=${cat.category}`} className="category-tile group aspect-[4/3] rounded-lg overflow-hidden block">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-serif text-3xl tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80" 
              alt="Our atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center p-12 md:p-16">
            <div>
              <p className="text-xs tracking-[0.2em] text-accent mb-4">SINCE 2019</p>
              <h2 className="font-serif text-4xl mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Velmora was born from a desire to create jewelry that feels both precious and wearable. 
                Each piece is thoughtfully designed in our studio and crafted with the finest materials, 
                ensuring beauty that lasts a lifetime.
              </p>
              <Link to="/about" className="btn btn-outline inline-block">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-accent mb-2">LOVED BY MANY</p>
          <h2 className="font-serif text-4xl">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <div className="flex gap-1 mb-4 text-gold">
                {Array.from({ length: t.rating }).map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="italic mb-4">"{t.text}"</p>
              <p className="text-sm text-muted-foreground">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl mb-3 text-white">Join for 10% off</h2>
          <p className="text-white/70 mb-6 text-sm">Be the first to know about new arrivals and exclusive offers.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/40"
            />
            <button className="btn btn-gold">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
