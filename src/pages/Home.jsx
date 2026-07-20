import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products, ugcItems, testimonials } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#1A1A1A]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=2000&q=80')] bg-cover bg-center opacity-60" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl tracking-[0.04em] mb-6">Crafted to be Treasured</h1>
          <p className="text-lg text-[#A3A3A3] mb-10 max-w-md mx-auto">Timeless demi-fine jewelry, made with intention.</p>
          <Link to="/shop" className="btn btn-primary inline-block">Shop the Collection</Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="trust-bar border-b border-[#2A2A2A] py-4 text-center text-[#A3A3A3]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-xs tracking-[0.1em] uppercase text-[#A3A3A3] mb-2">Signature Pieces</div>
            <h2 className="font-serif text-4xl tracking-[0.02em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] uppercase hover:text-[#C5A46E]">View All →</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1A1A1A] mb-4">
                <img src={product.image1} alt={product.name} className="product-image-primary absolute inset-0 w-full h-full object-cover" />
                <img src={product.image2} alt={product.name} className="product-image-secondary absolute inset-0 w-full h-full object-cover" />
                <button 
                  onClick={(e) => handleAddToCart(e, product)}
                  className="quick-add absolute bottom-4 left-1/2 -translate-x-1/2 btn btn-primary text-xs px-6 py-2"
                >
                  Add to Cart
                </button>
              </div>
              <div className="product-name font-serif text-sm tracking-[0.08em] mb-1">{product.name}</div>
              <div className="text-[#C5A46E] text-sm">${product.price}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="border-y border-[#2A2A2A] py-12 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs tracking-[0.1em] uppercase text-[#A3A3A3] mb-6 text-center">As Seen On You</div>
          <div className="ugc-scroll flex gap-4 overflow-x-auto pb-4">
            {ugcItems.map((item) => (
              <div key={item.id} className="relative flex-shrink-0 w-[180px] aspect-[9/16] overflow-hidden">
                <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="font-serif text-sm tracking-[0.04em]">{item.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.1em] uppercase text-[#A3A3A3] mb-2">Discover</div>
          <h2 className="font-serif text-4xl tracking-[0.02em]">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Earrings', path: '/shop?category=earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { label: 'Necklaces', path: '/shop?category=necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { label: 'Huggies', path: '/shop?category=huggies', img: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80' },
          ].map((cat) => (
            <Link key={cat.label} to={cat.path} className="group relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
              <img src={cat.img} alt={cat.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-3xl tracking-[0.08em] text-white opacity-0 group-hover:opacity-100 transition-opacity">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80')] bg-cover bg-center" />
          <div className="px-8 md:px-16 py-16 md:py-24 flex flex-col justify-center">
            <div className="text-xs tracking-[0.1em] uppercase text-[#A3A3A3] mb-4">Since 2019</div>
            <h2 className="font-serif text-5xl tracking-[0.02em] mb-8 leading-none">Our Story</h2>
            <p className="text-[#A3A3A3] mb-8 max-w-md">Velmora was born from a desire to create jewelry that feels as meaningful as it is beautiful. Each piece is thoughtfully designed in our studio and crafted with the finest materials.</p>
            <Link to="/" className="text-sm tracking-[0.08em] uppercase hover:text-[#C5A46E] inline-flex items-center gap-2">Read More →</Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-[#2A2A2A]">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.1em] uppercase text-[#A3A3A3] mb-2">Voices</div>
          <h2 className="font-serif text-4xl tracking-[0.02em]">What Our Community Says</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="border border-[#2A2A2A] p-8">
              <div className="flex gap-1 mb-6 text-[#C5A46E]">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-[#A3A3A3] mb-6">"{t.text}"</p>
              <div className="text-sm tracking-[0.04em]">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="bg-[#1A1A1A] py-16 border-t border-[#2A2A2A]">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="font-serif text-3xl tracking-[0.04em] mb-4">Join for 10% off your first order</div>
          <p className="text-[#A3A3A3] text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Your email address" className="input flex-1" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;