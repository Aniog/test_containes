import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const [selectedVariants, setSelectedVariants] = React.useState({});

  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 2, caption: "Golden hour", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
    { id: 3, caption: "Effortless elegance", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
    { id: 4, caption: "Everyday luxury", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
    { id: 5, caption: "Timeless beauty", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" },
  ];

  const categories = [
    { name: "Earrings", path: "/shop?category=Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
    { name: "Necklaces", path: "/shop?category=Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
    { name: "Huggies", path: "/shop?category=Huggies", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80" },
  ];

  // Fix UGC images to use valid URLs
  const validUgcImages = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies daily for months and they still look brand new.", rating: 5 },
    { name: "Sophia K.", text: "Bought the Royal Heirloom Set as a gift. My sister was absolutely delighted.", rating: 5 },
    { name: "Isabella R.", text: "Velmora pieces have become my signature jewelry. Timeless and elegant.", rating: 5 },
  ];

  const handleAddToCart = (product) => {
    const variant = selectedVariants[product.id] || product.variant[0];
    addToCart(product, variant);
  };

  const handleVariantChange = (productId, variant) => {
    setSelectedVariants({ ...selectedVariants, [productId]: variant });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#1A1816] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-[72px] md:text-[88px] leading-[0.95] tracking-[0.02em] text-white mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-[#D4BFA3] text-lg tracking-[0.05em] mb-10 max-w-md mx-auto">
            Demi-fine jewelry for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-[#B8976E] opacity-50" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5DFD6] py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-[#6B6560] uppercase text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#B8976E] mb-2">DISCOVER</p>
            <h2 className="serif text-4xl tracking-[0.02em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] underline hover:text-[#B8976E] hidden md:block">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => {
            const currentVariant = selectedVariants[product.id] || product.variant[0];
            return (
              <div key={product.id} className="product-card group">
                <div className="product-image-container aspect-[4/3.5] relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image product-image-primary absolute inset-0"
                  />
                  <img
                    src={product.imageAlt}
                    alt={product.name}
                    className="product-image product-image-secondary absolute inset-0 opacity-0"
                  />
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 btn btn-primary text-xs opacity-0 group-hover:opacity-100 transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="p-5">
                  <p className="product-name text-sm tracking-[0.12em] mb-1 pr-2">{product.name}</p>
                  <p className="text-sm text-[#6B6560] mb-3">${product.price}</p>
                  <div className="flex gap-2">
                    {product.variant.map((v) => (
                      <button
                        key={v}
                        onClick={() => handleVariantChange(product.id, v)}
                        className={`variant-pill text-[10px] py-1 px-3 ${currentVariant === v ? 'active' : ''}`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/shop" className="text-sm tracking-[0.1em] underline hover:text-[#B8976E] md:hidden mt-6 inline-block">View All</Link>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#1A1816] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-center text-[#B8976E] text-xs tracking-[0.2em] mb-8">AS SEEN ON YOU</p>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card w-[180px] md:w-[200px] aspect-[9/16] snap-start">
                <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                <div className="ugc-caption">
                  <p>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-[#B8976E] mb-2">EXPLORE</p>
          <h2 className="serif text-4xl tracking-[0.02em]">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile aspect-[16/10] overflow-hidden">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay-label">
                <span className="text-white text-lg tracking-[0.15em] serif">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-[#F5F2ED]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:pr-20 py-16 md:py-0">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#B8976E] mb-4">EST. 2018</p>
              <h2 className="serif text-4xl tracking-[0.02em] mb-6">Our Story</h2>
              <p className="body-text text-[#6B6560] max-w-md mb-8">
                Velmora was born from a desire to create jewelry that feels both precious and wearable. 
                Each piece is thoughtfully designed in our studio and crafted with the finest materials.
              </p>
              <Link to="/" className="text-sm tracking-[0.1em] underline hover:text-[#B8976E]">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-[#B8976E] mb-2">LOVED BY MANY</p>
          <h2 className="serif text-4xl tracking-[0.02em]">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="text-center px-4">
              <div className="flex justify-center mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#B8976E] text-[#B8976E]" />
                ))}
              </div>
              <p className="body-text text-[#6B6560] mb-6">"{t.text}"</p>
              <p className="text-sm tracking-[0.1em]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#1A1816] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-[#B8976E] text-xs tracking-[0.2em] mb-3">MEMBERS ONLY</p>
          <h3 className="serif text-white text-3xl tracking-[0.02em] mb-4">Join for 10% off your first order</h3>
          <p className="text-[#D4BFA3] text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="input flex-1 bg-[#F8F5F1] border-[#E5DFD6]"
              required
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F5F1] border-t border-[#E5DFD6] pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-y-12 mb-16">
            <div>
              <p className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</p>
              <p className="text-sm text-[#6B6560]">Fine jewelry, thoughtfully made.</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.15em] mb-4 text-[#B8976E]">SHOP</p>
              <div className="space-y-2 text-sm text-[#6B6560]">
                <Link to="/shop" className="block hover:text-[#2C2825]">All Jewelry</Link>
                <Link to="/shop?category=Earrings" className="block hover:text-[#2C2825]">Earrings</Link>
                <Link to="/shop?category=Necklaces" className="block hover:text-[#2C2825]">Necklaces</Link>
                <Link to="/shop?category=Huggies" className="block hover:text-[#2C2825]">Huggies</Link>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.15em] mb-4 text-[#B8976E]">HELP</p>
              <div className="space-y-2 text-sm text-[#6B6560]">
                <a href="#" className="block hover:text-[#2C2825]">Shipping</a>
                <a href="#" className="block hover:text-[#2C2825]">Returns</a>
                <a href="#" className="block hover:text-[#2C2825]">Care Guide</a>
                <a href="#" className="block hover:text-[#2C2825]">Contact</a>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.15em] mb-4 text-[#B8976E]">COMPANY</p>
              <div className="space-y-2 text-sm text-[#6B6560]">
                <a href="#" className="block hover:text-[#2C2825]">Our Story</a>
                <a href="#" className="block hover:text-[#2C2825]">Journal</a>
                <a href="#" className="block hover:text-[#2C2825]">Stockists</a>
                <a href="#" className="block hover:text-[#2C2825]">Careers</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-[#E5DFD6] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B6560]">
            <p>© {new Date().getFullYear()} Velmora. All rights reserved.</p>
            <div className="flex gap-6">
              <span>Instagram</span>
              <span>Pinterest</span>
              <span>Facebook</span>
            </div>
            <div className="flex gap-4">
              <span>Visa</span>
              <span>MC</span>
              <span>Amex</span>
              <span>PayPal</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;