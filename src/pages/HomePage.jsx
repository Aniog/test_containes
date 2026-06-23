import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'VIVID AURA JEWELS', price: 42, desc: 'Gold ear cuff with crystal accent', category: 'Earrings' },
  { id: 2, name: 'MAJESTIC FLORA NECTAR', price: 68, desc: 'Multicolor floral crystal necklace', category: 'Necklaces' },
  { id: 3, name: 'GOLDEN SPHERE HUGGIES', price: 38, desc: 'Chunky gold dome huggie earrings', category: 'Huggies' },
  { id: 4, name: 'AMBER LACE EARRINGS', price: 54, desc: 'Textured gold filigree drop earrings', category: 'Earrings' },
  { id: 5, name: 'ROYAL HEIRLOOM SET', price: 95, desc: 'Gift-boxed earring + necklace set', category: 'Sets' },
];

const testimonials = [
  { name: 'Sarah M.', initial: 'S', rating: 5, text: 'Absolutely love my Vivid Aura Jewels! The quality is exceptional.' },
  { name: 'Emily R.', initial: 'E', rating: 5, text: 'The Majestic Flora Nectar is even more beautiful in person.' },
  { name: 'Jessica L.', initial: 'J', rating: 5, text: 'Perfect gift for my sister. She hasn\'t taken off the Golden Sphere Huggies!' },
];

function HomePage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-velmora-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-velmora-charcoal via-velmora-black to-black opacity-90"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-7xl font-serif mb-6 tracking-wide">Crafted to be Treasured</h2>
          <p className="text-lg md:text-xl tracking-wide mb-8 max-w-2xl mx-auto leading-relaxed">Discover our collection of demi-fine gold jewelry, designed for those who appreciate understated elegance and timeless beauty.</p>
          <Link to="/shop" className="inline-block bg-velmora-gold text-white px-10 py-4 uppercase tracking-wider hover:bg-velmora-gold-dark transition-colors duration-300 text-sm font-medium">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-velmora-cream border-y border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm uppercase tracking-wide text-velmora-charcoal">
          <span className="flex items-center gap-2">✦ Free Worldwide Shipping</span>
          <span className="flex items-center gap-2">✦ 30-Day Returns</span>
          <span className="flex items-center gap-2">✦ 18K Gold Plated</span>
          <span className="flex items-center gap-2">✦ Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif uppercase tracking-widest text-center mb-4">Bestsellers</h2>
        <p className="text-center text-velmora-gray mb-12 tracking-wide">Our most loved pieces</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="h-64 bg-velmora-beige rounded-md mb-4 flex items-center justify-center group-hover:bg-velmora-gold/10 transition-colors duration-300">
                <span className="text-velmora-gray">✦ Jewelry Image</span>
              </div>
              <h3 className="font-serif text-lg uppercase tracking-wide mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{product.desc}</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-velmora-gold">★</span>
                ))}
              </div>
              <p className="text-velmora-gold font-semibold text-lg">${product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* UGC Reel-style Row */}
      <section className="py-20 bg-velmora-charcoal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif uppercase tracking-widest text-center mb-12">Styled by You</h2>
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-none w-72 h-96 bg-velmora-black/50 rounded-lg flex items-center justify-center snap-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-velmora-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✦</span>
                  </div>
                  <p className="font-serif italic text-lg">"Absolutely love this piece"</p>
                  <p className="text-sm mt-2 opacity-80">@customer_{i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif uppercase tracking-widest text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Earrings', desc: 'Delicate & bold designs' },
            { name: 'Necklaces', desc: 'Statement & everyday pieces' },
            { name: 'Huggies', desc: 'Comfortable everyday wear' },
          ].map((cat) => (
            <Link key={cat.name} to="/shop" className="relative h-80 bg-velmora-beige rounded-lg overflow-hidden group cursor-pointer flex items-center justify-center">
              <div className="absolute inset-0 bg-velmora-charcoal/0 group-hover:bg-velmora-charcoal/60 transition-colors duration-300"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-serif uppercase tracking-widest mb-2">{cat.name}</h3>
                <p className="text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="h-96 bg-velmora-beige rounded-lg flex items-center justify-center">
            <span className="text-velmora-gray">Brand Image</span>
          </div>
          <div>
            <h2 className="text-4xl font-serif uppercase tracking-widest mb-6">Our Story</h2>
            <p className="text-lg leading-relaxed mb-6 text-velmora-charcoal">
              At Velmora, we believe jewelry should be treasured, not just worn. Each piece is crafted with intention, 
              using 18K gold plating and hypoallergenic materials to ensure beauty that lasts.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-velmora-charcoal">
              From our studio to your jewelry box, every detail matters. We create pieces that transition seamlessly 
              from morning coffee to evening elegance.
            </p>
            <Link to="/about" className="inline-block border-b-2 border-velmora-gold pb-1 uppercase tracking-wider text-sm font-medium hover:text-velmora-gold transition-colors">
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif uppercase tracking-widest text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-velmora-gold text-xl">★</span>
                ))}
              </div>
              <p className="text-lg mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-velmora-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-velmora-gold font-serif">{t.initial}</span>
                </div>
                <span className="font-medium">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-velmora-charcoal text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif uppercase tracking-widest mb-4">Join the Velmora Family</h2>
          <p className="mb-8 tracking-wide">Subscribe for 10% off your first order and exclusive access to new collections.</p>
          {subscribed ? (
            <div className="bg-velmora-gold/20 rounded-lg p-6">
              <p className="text-lg">Thank you for subscribing! Check your email for your 10% discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-none focus:outline-none focus:border-velmora-gold text-white placeholder:text-white/50"
                required
              />
              <button type="submit" className="bg-velmora-gold text-white px-8 py-3 uppercase tracking-wider hover:bg-velmora-gold-dark transition-colors duration-300 text-sm font-medium">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
