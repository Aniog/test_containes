import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80", caption: "Golden hour glow" },
    { id: 2, image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80", caption: "Everyday elegance" },
    { id: 3, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", caption: "Effortless beauty" },
    { id: 4, image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80", caption: "Timeless layers" },
    { id: 5, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", caption: "Quiet luxury" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. These pieces feel like heirlooms.", rating: 5 },
    { name: "Sophia R.", text: "I wear my huggies every day. They never tarnish and always get compliments.", rating: 5 },
    { name: "Isabella T.", text: "The Royal Heirloom Set was the perfect gift for my sister. She adores it.", rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[var(--color-base)] text-[var(--color-white)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80')] bg-cover bg-center opacity-60" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl mb-6 tracking-[0.03em]">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl mb-10 text-[var(--color-cream)] max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[var(--color-border)] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs tracking-[0.12em] uppercase text-[var(--color-taupe)]">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-taupe)] mb-2">Signature Pieces</p>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-widest uppercase hover:text-[var(--color-gold)]">View All →</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] overflow-hidden bg-[var(--color-light-gray)]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <img 
                  src={product.hoverImage} 
                  alt={product.name} 
                  className="product-hover-image absolute inset-0 w-full h-full object-cover opacity-0"
                />
              </Link>
              <div className="p-5">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm mb-1 group-hover:text-[var(--color-gold)] transition-colors">{product.name}</p>
                </Link>
                <p className="text-sm text-[var(--color-taupe)] mb-3">${product.price}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="text-xs tracking-[0.1em] uppercase border-b border-[var(--color-base)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[var(--color-base)] py-16 text-[var(--color-white)]">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mb-2">As Seen On You</p>
          <h2 className="serif text-4xl">Moments of Beauty</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 px-6 scrollbar-hide">
          {ugcItems.map((item) => (
            <div key={item.id} className="ugc-card w-[180px] aspect-[9/16] rounded-sm overflow-hidden">
              <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
              <div className="ugc-caption">
                <p className="serif text-sm tracking-wide">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-taupe)] mb-2">Discover</p>
          <h2 className="serif text-4xl">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to="/shop" className="category-tile aspect-[16/10] overflow-hidden rounded-sm">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay-label">
                <span className="text-[var(--color-white)] text-xl tracking-[0.15em] serif">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80')] bg-cover bg-center" />
          <div className="p-12 md:p-16 flex flex-col justify-center">
            <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-taupe)] mb-4">Since 2018</p>
            <h2 className="serif text-5xl mb-8">Our Story</h2>
            <p className="text-[var(--color-taupe)] leading-relaxed mb-8">
              Velmora was born from a desire to create jewelry that feels both precious and wearable. 
              Each piece is thoughtfully designed in our atelier, using only the finest materials 
              to ensure lasting beauty and comfort.
            </p>
            <Link to="/about" className="btn btn-outline self-start">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-taupe)] mb-3">Kind Words</p>
        <h2 className="serif text-4xl mb-14">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="px-4">
              <div className="flex justify-center mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
                ))}
              </div>
              <p className="italic text-[var(--color-taupe)] mb-4">"{t.text}"</p>
              <p className="text-sm tracking-widest">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[var(--color-base)] py-16 text-center text-[var(--color-white)]">
        <div className="max-w-md mx-auto px-6">
          <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3">Stay Connected</p>
          <h3 className="serif text-3xl mb-4">Join for 10% off your first order</h3>
          <p className="text-sm text-[var(--color-cream)] mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3 bg-transparent border border-[var(--color-white)] text-sm placeholder:text-[var(--color-taupe)] focus:outline-none"
            />
            <button type="submit" className="btn btn-gold">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-base)] text-[var(--color-cream)] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <p className="serif text-2xl tracking-[0.2em] mb-4 text-[var(--color-white)]">VELMORA</p>
            <p className="text-xs text-[var(--color-taupe)]">Fine Jewelry</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.12em] uppercase mb-4 text-[var(--color-gold)]">Shop</p>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[var(--color-gold)]">All Jewelry</Link>
              <Link to="/shop" className="block hover:text-[var(--color-gold)]">Earrings</Link>
              <Link to="/shop" className="block hover:text-[var(--color-gold)]">Necklaces</Link>
              <Link to="/shop" className="block hover:text-[var(--color-gold)]">Huggies</Link>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.12em] uppercase mb-4 text-[var(--color-gold)]">Help</p>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[var(--color-gold)]">Shipping</a>
              <a href="#" className="block hover:text-[var(--color-gold)]">Returns</a>
              <a href="#" className="block hover:text-[var(--color-gold)]">Care Guide</a>
              <a href="#" className="block hover:text-[var(--color-gold)]">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.12em] uppercase mb-4 text-[var(--color-gold)]">Company</p>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-[var(--color-gold)]">Our Story</Link>
              <Link to="/journal" className="block hover:text-[var(--color-gold)]">Journal</Link>
              <a href="#" className="block hover:text-[var(--color-gold)]">Instagram</a>
              <a href="#" className="block hover:text-[var(--color-gold)]">Pinterest</a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-[var(--color-taupe)]">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;