import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products, ugcImages, categories, testimonials } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=2000&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 text-center px-6">
          <h1 className="heading-serif text-white text-6xl md:text-7xl tracking-[0.04em] mb-4">Crafted to be Treasured</h1>
          <p className="text-white/90 text-lg mb-8 tracking-[0.05em]">Demi-fine jewelry for the modern woman</p>
          <Link to="/shop" className="btn-primary inline-block">Shop the Collection</Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4 border-b border-[#E5DFD3] text-center tracking-[0.1em]">
        FREE WORLDWIDE SHIPPING  ·  30-DAY RETURNS  ·  18K GOLD PLATED  ·  HYPOALLERGENIC
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <h2 className="heading-serif text-4xl tracking-[0.03em]">Bestsellers</h2>
          <Link to="/shop" className="text-sm tracking-[0.08em] uppercase hover:text-[#B8976F]">View All →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="product-image-container aspect-[4/3.5] mb-4">
                  <img src={product.image} alt={product.name} className="product-image absolute inset-0 w-full h-full object-cover" />
                  <img src={product.imageSecondary} alt={product.name} className="product-image-secondary absolute inset-0 w-full h-full object-cover" />
                  <button 
                    onClick={(e) => { e.preventDefault(); addToCart(product); }}
                    className="quick-add btn-primary text-xs py-2.5 px-6"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>
              <Link to={`/product/${product.id}`}>
                <p className="product-name text-sm tracking-[0.12em] mb-1">{product.name}</p>
                <p className="text-[#6B665F] text-sm">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#F5F2EB] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm tracking-[0.15em] uppercase text-[#6B665F] mb-8">As seen on you</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcImages.map(item => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[220px] aspect-[9/16] snap-start">
                <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="heading-serif text-4xl tracking-[0.03em] text-center mb-12">Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map(cat => (
            <Link key={cat.slug} to={`/shop?category=${cat.slug}`} className="category-tile aspect-[4/3] block">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <span className="category-label">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] bg-[#F5F2EB]">
          <img src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80" alt="Our atelier" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="heading-serif text-4xl tracking-[0.03em] mb-6">Our Story</h3>
          <p className="text-[#6B665F] leading-relaxed mb-6">
            Velmora was born from a simple belief: that beautiful, responsibly made jewelry should be accessible. 
            Each piece is crafted with care using 18K gold plating and hypoallergenic materials, designed to be 
            treasured for years to come.
          </p>
          <Link to="/shop" className="btn-outline inline-block">Learn More</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="heading-serif text-4xl tracking-[0.03em] text-center mb-14">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} className="fill-[#B8976F] text-[#B8976F]" />)}
                </div>
                <p className="text-[#6B665F] italic mb-4">"{t.text}"</p>
                <p className="text-sm tracking-[0.08em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2C2825] py-16 text-center px-6">
        <h3 className="heading-serif text-white text-3xl tracking-[0.03em] mb-3">Join for 10% off your first order</h3>
        <p className="text-white/70 mb-8 text-sm tracking-[0.05em]">Be the first to know about new arrivals and exclusive offers.</p>
        <div className="max-w-md mx-auto flex">
          <input type="email" placeholder="Your email address" className="newsletter-input flex-1 rounded-l-none" />
          <button className="btn-primary rounded-l-none">Subscribe</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F5F1] border-t border-[#E5DFD3] pt-14 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-y-10 text-sm">
          <div>
            <div className="heading-serif text-xl tracking-[0.15em] mb-4">VELMORA</div>
            <p className="text-[#6B665F] text-xs tracking-[0.05em]">Fine demi jewelry since 2019</p>
          </div>
          <div>
            <div className="font-medium tracking-[0.08em] mb-4">SHOP</div>
            <div className="space-y-2 text-[#6B665F]">
              <div><Link to="/shop">All Jewelry</Link></div>
              <div><Link to="/shop?category=Earrings">Earrings</Link></div>
              <div><Link to="/shop?category=Necklaces">Necklaces</Link></div>
              <div><Link to="/shop?category=Huggies">Huggies</Link></div>
            </div>
          </div>
          <div>
            <div className="font-medium tracking-[0.08em] mb-4">HELP</div>
            <div className="space-y-2 text-[#6B665F]">
              <div>Shipping</div>
              <div>Returns</div>
              <div>Care Guide</div>
              <div>Contact</div>
            </div>
          </div>
          <div>
            <div className="font-medium tracking-[0.08em] mb-4">COMPANY</div>
            <div className="space-y-2 text-[#6B665F]">
              <div>Our Story</div>
              <div>Journal</div>
              <div>Stockists</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-[#E5DFD3] flex flex-col md:flex-row justify-between text-xs text-[#6B665F] tracking-[0.05em]">
          <div>© 2026 Velmora. All rights reserved.</div>
          <div className="flex gap-6 mt-3 md:mt-0">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>Visa · Mastercard · Amex</span>
          </div>
        </div>
      </footer>
    </div>
  );
}