import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products, ugcImages, testimonials } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2C2C]">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=2000&q=90"
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-[56px] md:text-[72px] text-white tracking-[0.04em] leading-[1.05] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-[0.02em]">
            Demi-fine gold jewelry, made to last a lifetime.
          </p>
          <Link to="/shop" className="btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-xs tracking-[0.15em]">
          <span>SCROLL TO EXPLORE</span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E8E4DC] py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.12em] text-[#9A8F7D]">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden md:inline">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden md:inline">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden md:inline">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.15em] text-[#C5A26F] mb-2">DISCOVER</p>
            <h2 className="serif text-4xl tracking-[0.02em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.06em] hover:text-[#C5A26F] hidden md:block">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/3.5] overflow-hidden bg-[#E8E4DC]">
                <img
                  src={product.images.primary}
                  alt={product.name}
                  className="primary absolute inset-0 w-full h-full object-cover"
                />
                <img
                  src={product.images.secondary}
                  alt={product.name}
                  className="secondary absolute inset-0 w-full h-full object-cover opacity-0"
                />
              </Link>

              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-[0.1em] mb-1 pr-2">{product.name}</p>
                </Link>
                <p className="text-sm text-[#9A8F7D]">${product.price}</p>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="quick-add btn-primary text-xs px-6 py-2.5"
              >
                ADD TO CART
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-[0.06em]">VIEW ALL →</Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F5F0E6] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-xs tracking-[0.15em] text-[#C5A26F] mb-3">AS SEEN ON YOU</p>
          <h2 className="serif text-3xl tracking-[0.02em] mb-8">Moments in Gold</h2>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcImages.map((ugc) => (
              <div key={ugc.id} className="ugc-card flex-shrink-0 w-[180px] md:w-[200px] snap-start">
                <div className="relative aspect-[9/16] overflow-hidden bg-[#E8E4DC]">
                  <img
                    src={ugc.image}
                    alt={ugc.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="caption absolute inset-x-0 bottom-0 bg-[#2C2C2C]/70 px-4 py-3">
                    <p className="serif text-white text-sm tracking-[0.04em]">{ugc.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] text-[#C5A26F] mb-2">EXPLORE</p>
          <h2 className="serif text-4xl tracking-[0.02em]">Shop by Category</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: 'Earrings', path: '/shop?category=Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { label: 'Necklaces', path: '/shop?category=Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { label: 'Huggies', path: '/shop?category=Huggies', image: 'https://images.unsplash.com/photo-1535632787350-4e68b0f266d0?w=800&q=80' },
          ].map((cat) => (
            <Link key={cat.label} to={cat.path} className="category-tile group block aspect-[16/10] overflow-hidden">
              <img src={cat.image} alt={cat.label} className="w-full h-full object-cover" />
              <div className="overlay absolute inset-0 bg-[#2C2C2C]/60 flex items-center justify-center">
                <span className="text-white text-xl tracking-[0.15em] serif">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[4/3] bg-[#E8E4DC] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1000&q=80"
              alt="Our Craft"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-4">
            <p className="text-xs tracking-[0.15em] text-[#C5A26F] mb-3">EST. 2018</p>
            <h2 className="serif text-4xl tracking-[0.02em] mb-6">Our Story</h2>
            <div className="space-y-4 text-[#5A5548] leading-relaxed">
              <p>Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise.</p>
              <p>Each piece is thoughtfully designed in our studio and crafted with the finest materials—18K gold plating over hypoallergenic bases, set with crystals chosen for their brilliance and durability.</p>
            </div>
            <Link to="/about" className="inline-block mt-8 text-sm tracking-[0.06em] hover:text-[#C5A26F]">
              LEARN MORE ABOUT US →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#2C2C2C] py-16 text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.15em] text-[#C5A26F] mb-2">IN THEIR WORDS</p>
            <h2 className="serif text-3xl tracking-[0.02em]">Loved by Many</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="text-center px-4">
                <div className="flex justify-center gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#C5A26F" color="#C5A26F" />
                  ))}
                </div>
                <p className="text-[#E8E4DC] italic leading-relaxed mb-6">"{t.text}"</p>
                <p className="text-sm tracking-[0.06em] text-[#C5A26F]">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[600px] mx-auto px-6 py-20 text-center">
        <p className="text-xs tracking-[0.15em] text-[#C5A26F] mb-3">STAY CLOSE</p>
        <h2 className="serif text-3xl tracking-[0.02em] mb-4">Join for 10% off your first order</h2>
        <p className="text-[#5A5548] mb-8">Be the first to know about new arrivals and private previews.</p>

        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            className="input flex-1"
            required
          />
          <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
        </form>
        <p className="text-[10px] text-[#9A8F7D] mt-4 tracking-[0.04em]">We respect your inbox. Unsubscribe anytime.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E8E4DC] bg-[#F5F0E6] pt-14 pb-10">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-4 gap-y-12 text-sm">
          <div>
            <div className="serif text-2xl tracking-[0.15em] mb-4">VELMORA</div>
            <p className="text-[#9A8F7D] text-xs tracking-[0.06em]">Fine Jewelry Since 2018</p>
          </div>

          <div>
            <div className="tracking-[0.1em] text-xs mb-4 text-[#C5A26F]">SHOP</div>
            <div className="space-y-2 text-[#5A5548]">
              <Link to="/shop" className="block hover:text-[#C5A26F]">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[#C5A26F]">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#C5A26F]">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#C5A26F]">Huggies</Link>
            </div>
          </div>

          <div>
            <div className="tracking-[0.1em] text-xs mb-4 text-[#C5A26F]">HELP</div>
            <div className="space-y-2 text-[#5A5548]">
              <a href="#" className="block hover:text-[#C5A26F]">Shipping</a>
              <a href="#" className="block hover:text-[#C5A26F]">Returns</a>
              <a href="#" className="block hover:text-[#C5A26F]">Care Guide</a>
              <a href="#" className="block hover:text-[#C5A26F]">Contact</a>
            </div>
          </div>

          <div>
            <div className="tracking-[0.1em] text-xs mb-4 text-[#C5A26F]">COMPANY</div>
            <div className="space-y-2 text-[#5A5548]">
              <Link to="/about" className="block hover:text-[#C5A26F]">Our Story</Link>
              <Link to="/journal" className="block hover:text-[#C5A26F]">Journal</Link>
              <a href="#" className="block hover:text-[#C5A26F]">Sustainability</a>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 mt-14 pt-8 border-t border-[#E8E4DC] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#9A8F7D]">
          <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#C5A26F]">Instagram</a>
            <a href="#" className="hover:text-[#C5A26F]">Pinterest</a>
            <a href="#" className="hover:text-[#C5A26F]">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
