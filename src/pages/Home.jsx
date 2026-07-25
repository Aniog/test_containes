import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import Button from '../components/ui/Button';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80", caption: "Golden hour glow" },
    { id: 2, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80", caption: "Everyday elegance" },
    { id: 3, image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80", caption: "Soft light, soft gold" },
    { id: 4, image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80", caption: "Treasured moments" },
    { id: 5, image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80", caption: "Quiet luxury" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday staple." },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift that truly felt special." },
    { name: "Isabella T.", text: "Finally found pieces that don't irritate my sensitive skin. Love them." },
  ];

  return (
    <div className="min-h-screen bg-velmora-cream">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-velmora-base overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#C5A26F_0.5px,transparent_1px)] bg-[length:4px_4px] opacity-10" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif-heading text-6xl md:text-7xl text-velmora-cream tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-velmora-light-gold text-lg md:text-xl tracking-wide mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop">
            <Button variant="primary" size="lg">Shop the Collection</Button>
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-velmora-gold/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-velmora-taupe/20 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-velmora-taupe text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline text-velmora-taupe/30">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline text-velmora-taupe/30">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline text-velmora-taupe/30">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-velmora-gold mb-2">DISCOVER</p>
            <h2 className="serif-heading text-4xl tracking-wider">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-widest hover:text-velmora-gold transition-colors">VIEW ALL →</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="product-image-container aspect-[4/3.5] bg-velmora-base/5 mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.imageAlt}
                    className="product-image-primary w-full h-full object-cover"
                  />
                  <img 
                    src={product.imageSecondary} 
                    alt={product.imageAlt}
                    className="product-image-secondary w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="px-1">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-widest mb-1 pr-2 group-hover:text-velmora-gold transition-colors">{product.name}</p>
                </Link>
                <p className="text-sm text-velmora-taupe mb-3">${product.price}</p>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-widest">VIEW ALL →</Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-velmora-base py-16">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <p className="text-xs tracking-[0.2em] text-velmora-gold mb-2">AS SEEN ON YOU</p>
          <h2 className="serif-heading text-4xl text-velmora-cream tracking-wider">Moments in Gold</h2>
        </div>
        <div className="ugc-scroll flex gap-4 overflow-x-auto pb-4 pl-6 snap-x snap-mandatory">
          {ugcItems.map((item) => (
            <div key={item.id} className="relative flex-shrink-0 w-[220px] aspect-[9/16] overflow-hidden snap-start">
              <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="serif-heading text-velmora-cream text-sm tracking-wider">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-velmora-gold mb-2">EXPLORE</p>
          <h2 className="serif-heading text-4xl tracking-wider">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Earrings', path: '/shop?category=earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { label: 'Necklaces', path: '/shop?category=necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { label: 'Huggies', path: '/shop?category=huggies', img: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80' },
          ].map((cat) => (
            <Link key={cat.label} to={cat.path} className="group relative aspect-[16/10] overflow-hidden bg-velmora-base/5">
              <img src={cat.img} alt={cat.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-velmora-cream text-2xl tracking-[0.2em] serif-heading opacity-90 group-hover:opacity-100 transition-opacity">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="border-t border-velmora-taupe/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-velmora-base/5">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center">
            <p className="text-xs tracking-[0.2em] text-velmora-gold mb-3">EST. 2019</p>
            <h2 className="serif-heading text-4xl tracking-wider mb-6">Our Story</h2>
            <p className="text-velmora-taupe leading-relaxed mb-8 max-w-md">
              Velmora was born from a desire to create jewelry that feels both timeless and modern—pieces worthy of everyday wear and generational passing.
            </p>
            <Link to="/" className="text-sm tracking-[0.15em] hover:text-velmora-gold transition-colors inline-flex items-center gap-2">
              READ OUR STORY →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-xs tracking-[0.2em] text-velmora-gold mb-3">IN THEIR WORDS</p>
        <h2 className="serif-heading text-4xl tracking-wider mb-14">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {testimonials.map((t, idx) => (
            <div key={idx} className="border-l-2 border-velmora-gold pl-6">
              <div className="flex gap-0.5 mb-4 text-velmora-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-velmora-taupe mb-4 leading-relaxed">"{t.text}"</p>
              <p className="text-sm tracking-widest">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-velmora-base py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.2em] text-velmora-gold mb-3">JOIN THE CIRCLE</p>
          <h3 className="serif-heading text-3xl text-velmora-cream tracking-wider mb-4">Receive 10% off your first order</h3>
          <p className="text-velmora-light-gold/70 text-sm mb-8">Be the first to know about new arrivals and private collections.</p>
          <form className="flex" onSubmit={(e) => { e.preventDefault(); alert('Thank you! You are now subscribed.'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-velmora-cream text-velmora-base px-5 py-3 text-sm placeholder:text-velmora-taupe/50 focus:outline-none" 
              required 
            />
            <Button type="submit" variant="primary" className="rounded-none">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-velmora-cream border-t border-velmora-taupe/20 pt-14 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12 text-sm">
          <div>
            <p className="serif-heading tracking-[0.2em] text-xl mb-4">VELMORA</p>
            <p className="text-velmora-taupe text-xs tracking-widest">FINE JEWELRY</p>
          </div>
          <div>
            <p className="tracking-[0.1em] mb-4 text-velmora-base">SHOP</p>
            <div className="space-y-2 text-velmora-taupe">
              <Link to="/shop" className="block hover:text-velmora-base">All Jewelry</Link>
              <Link to="/shop?category=earrings" className="block hover:text-velmora-base">Earrings</Link>
              <Link to="/shop?category=necklaces" className="block hover:text-velmora-base">Necklaces</Link>
              <Link to="/shop?category=huggies" className="block hover:text-velmora-base">Huggies</Link>
            </div>
          </div>
          <div>
            <p className="tracking-[0.1em] mb-4 text-velmora-base">HELP</p>
            <div className="space-y-2 text-velmora-taupe">
              <a href="#" className="block hover:text-velmora-base">Shipping</a>
              <a href="#" className="block hover:text-velmora-base">Returns</a>
              <a href="#" className="block hover:text-velmora-base">Care Guide</a>
              <a href="#" className="block hover:text-velmora-base">Contact</a>
            </div>
          </div>
          <div>
            <p className="tracking-[0.1em] mb-4 text-velmora-base">COMPANY</p>
            <div className="space-y-2 text-velmora-taupe">
              <a href="#" className="block hover:text-velmora-base">Our Story</a>
              <a href="#" className="block hover:text-velmora-base">Journal</a>
              <a href="#" className="block hover:text-velmora-base">Sustainability</a>
              <a href="#" className="block hover:text-velmora-base">Stockists</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-velmora-taupe/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-velmora-taupe">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-5">
            <span>Instagram</span>
            <span>Pinterest</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;