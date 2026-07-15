import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CartDrawer from '../components/CartDrawer';
import { products, testimonials, ugcItems } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <Navbar />

      <section className="relative h-[100dvh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#1C1A17]">
          <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80" alt="Velmora Jewelry" className="w-full h-full object-cover opacity-90" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white mb-6 tracking-[-0.02em]">Crafted to be Treasured</h1>
          <p className="text-white/80 text-lg mb-10 max-w-md mx-auto">Timeless demi-fine jewelry, made with intention.</p>
          <Link to="/shop" className="btn-primary inline-block">Shop the Collection</Link>
        </div>
      </section>

      <div className="border-y border-[#E5E0D8] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs tracking-[0.15em] text-[#6B665E] uppercase text-center">
          <span>Free Worldwide Shipping</span><span>30-Day Returns</span><span>18K Gold Plated</span><span>Hypoallergenic</span>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div><p className="text-xs tracking-[0.15em] text-[#6B665E] uppercase mb-2">Signature Pieces</p><h2 className="serif text-4xl">Bestsellers</h2></div>
          <Link to="/shop" className="text-sm underline hidden md:block">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0EDE6]">
                  <img src={product.images.primary} alt={product.name} className="primary absolute inset-0 w-full h-full object-cover" />
                  <img src={product.images.secondary || product.images.primary} alt={product.name} className="secondary absolute inset-0 w-full h-full object-cover opacity-0" />
                </div>
              </Link>
              <div className="p-5"><Link to={`/product/${product.id}`}><p className="product-name text-sm mb-1">{product.name}</p></Link><p className="text-sm text-[#6B665E]">${product.price}</p></div>
              <button onClick={() => addToCart(product)} className="quick-add btn-primary text-xs py-2.5 px-8">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1C1A17] py-16">
        <div className="max-w-7xl mx-auto px-6 mb-8"><p className="text-[#B89778] text-xs tracking-[0.15em] uppercase mb-2">As Seen On You</p><h3 className="serif text-3xl text-white">Moments in Gold</h3></div>
        <div className="flex gap-3 overflow-x-auto pb-4 px-6 scrollbar-hide">
          {ugcItems.map((item) => (
            <div key={item.id} className="ugc-card w-[180px] aspect-[9/16] rounded-sm overflow-hidden"><img src={item.image} alt={item.caption} className="w-full h-full object-cover" /><div className="ugc-caption">{item.caption}</div></div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.15em] text-[#6B665E] uppercase mb-2 text-center">Discover</p>
        <h2 className="serif text-4xl text-center mb-12">Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[{ label: 'Earrings', path: '/shop?category=earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },{ label: 'Necklaces', path: '/shop?category=necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },{ label: 'Huggies', path: '/shop?category=huggies', img: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80' }].map((cat, idx) => (
            <Link key={idx} to={cat.path} className="category-tile aspect-[16/10] overflow-hidden rounded-sm"><img src={cat.img} alt={cat.label} className="w-full h-full object-cover" /><div className="category-label">{cat.label}</div></Link>
          ))}
        </div>
      </section>

      <section className="border-t border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#1C1A17]"><img src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80" alt="Our Craft" className="w-full h-full object-cover" /></div>
          <div className="flex items-center p-10 md:p-16"><div><p className="text-xs tracking-[0.15em] text-[#6B665E] uppercase mb-4">Since 2018</p><h2 className="serif text-4xl mb-6">Our Story</h2><p className="text-[#6B665E] mb-8 leading-relaxed">Velmora was born from a desire to create jewelry that feels both precious and wearable. Each piece is thoughtfully designed in our studio and crafted with the finest materials—never mass-produced, always intentional.</p><Link to="/about" className="btn-accent-outline">Learn More</Link></div></div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-xs tracking-[0.15em] text-[#6B665E] uppercase mb-2">Voices of Velmora</p><h2 className="serif text-4xl mb-14">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">{testimonials.map((t) => (<div key={t.id} className="border border-[#E5E0D8] p-8"><div className="stars flex mb-4">{'★'.repeat(t.rating)}</div><p className="text-[#6B665E] mb-6 leading-relaxed">"{t.text}"</p><p className="text-sm tracking-wider">— {t.name}</p></div>))}</div>
      </section>

      <section className="bg-[#1C1A17] py-16">
        <div className="max-w-md mx-auto px-6 text-center"><h3 className="serif text-3xl text-white mb-3">Join for 10% off</h3><p className="text-white/60 mb-8 text-sm">Be the first to know about new arrivals and exclusive offers.</p><form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}><input type="email" placeholder="Your email address" className="input flex-1 bg-white/95" /><button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button></form></div>
      </section>

      <footer className="bg-[#F8F6F3] border-t border-[#E5E0D8] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12 text-sm">
          <div><div className="serif text-xl tracking-[0.2em] mb-4">VELMORA</div><p className="text-[#6B665E] text-xs">Fine demi-luxe jewelry</p></div>
          <div><div className="uppercase tracking-[0.1em] text-xs mb-4 text-[#6B665E]">Shop</div><div className="space-y-2 text-[#2C2823]"><Link to="/shop?category=earrings" className="block hover:text-[#B89778]">Earrings</Link><Link to="/shop?category=necklaces" className="block hover:text-[#B89778]">Necklaces</Link><Link to="/shop?category=huggies" className="block hover:text-[#B89778]">Huggies</Link></div></div>
          <div><div className="uppercase tracking-[0.1em] text-xs mb-4 text-[#6B665E]">Help</div><div className="space-y-2 text-[#2C2823]"><a href="#" className="block hover:text-[#B89778]">Shipping</a><a href="#" className="block hover:text-[#B89778]">Returns</a><a href="#" className="block hover:text-[#B89778]">Care Guide</a></div></div>
          <div><div className="uppercase tracking-[0.1em] text-xs mb-4 text-[#6B665E]">Company</div><div className="space-y-2 text-[#2C2823]"><Link to="/about" className="block hover:text-[#B89778]">Our Story</Link><Link to="/journal" className="block hover:text-[#B89778]">Journal</Link><a href="#" className="block hover:text-[#B89778]">Contact</a></div></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#E5E0D8] flex flex-col md:flex-row justify-between text-xs text-[#6B665E]"><p>© {new Date().getFullYear()} Velmora. All rights reserved.</p><div className="flex gap-4 mt-2 md:mt-0"><span>Instagram</span><span>·</span><span>Pinterest</span></div></div>
      </footer>

      <CartDrawer />
    </div>
  );
};

export default Home;
