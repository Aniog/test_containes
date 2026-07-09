import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "My everyday staple", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Perfect for date night", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Gifted to myself", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
    { id: 4, caption: "Obsessed with these", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 5, caption: "Wedding day jewels", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. These pieces feel so much more expensive than they are.", rating: 5 },
    { name: "Sofia R.", text: "I wear my huggies every single day. They never tarnish and always get compliments.", rating: 5 },
    { name: "Isabella T.", text: "Bought the set as a gift for my sister. She loved it. Will definitely shop here again.", rating: 5 },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2823]">
          <img 
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=2000&q=80" 
            alt="Velmora Jewelry"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[0.1em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 max-w-md mx-auto">
            Demi-fine jewelry for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4 border-b border-[#E5E0D8] bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-2">Signature Pieces</p>
            <h2 className="font-serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-wider hover:text-[#8B7355] hidden md:block">View All →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="product-image-container bg-[#F8F5F1]">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="product-image product-image-primary"
                  />
                  <img 
                    src={product.images[1] || product.images[0]} 
                    alt={product.name}
                    className="product-image product-image-secondary"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-wider mb-1 pr-8">{product.name}</p>
                </Link>
                <div className="flex justify-between items-center">
                  <p className="text-[#8B7355] font-medium">${product.price}</p>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="quick-add btn btn-primary text-xs py-2 px-6"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-white py-16 border-y border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-8 text-center">As Seen On You</p>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-2">Discover</p>
          <h2 className="font-serif text-4xl">Shop by Category</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", path: "/shop", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80" },
            { name: "Necklaces", path: "/shop", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" },
            { name: "Huggies", path: "/shop", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-overlay">
                <span className="text-white text-xl font-serif tracking-wider">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white border-y border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80" 
              alt="Our Craft" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center p-10 md:p-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-4">Since 2018</p>
              <h2 className="font-serif text-4xl mb-6">Our Story</h2>
              <p className="text-[#6B665F] leading-relaxed mb-8">
                Velmora was born from a desire to create jewelry that feels special without the precious metal price tag. 
                Each piece is thoughtfully designed in our studio and crafted with the finest materials to ensure lasting beauty.
              </p>
              <Link to="/" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-8">From Our Community</p>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i}>
              <div className="stars flex justify-center mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-[#6B665F] italic mb-4">"{t.text}"</p>
              <p className="text-sm tracking-wider">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2C2823] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="font-serif text-3xl text-white mb-3 tracking-wider">Join for 10% off</p>
          <p className="text-[#A89F8F] text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex" onSubmit={(e) => { e.preventDefault(); toast.success('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input flex-1 rounded-l-none rounded-r-none border-[#3D3832] bg-[#3D3832] text-white placeholder:text-[#A89F8F]"
              required 
            />
            <button type="submit" className="btn btn-gold rounded-l-none">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;