import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products;

  const ugcItems = [
    { id: 1, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour glow", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Effortless beauty", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 4, caption: "Timeless details", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
    { id: 5, caption: "Quiet luxury", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
  ];

  const categories = [
    { name: "Earrings", path: "/shop", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80" },
    { name: "Necklaces", path: "/shop", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
    { name: "Huggies", path: "/shop", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My necklace has become my signature piece." },
    { name: "Sophia R.", text: "Beautiful packaging and the jewelry exceeded my expectations. Will be back!" },
    { name: "Isabella T.", text: "Perfect gift for my sister. She wears the earrings every day." },
  ];

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#2C2825] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, thoughtfully designed for the modern woman.
          </p>
          <Link to="/shop" className="btn btn-accent inline-block">
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-2 text-xs tracking-[0.15em] text-[#6B665F]">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span>30-DAY RETURNS</span>
            <span>18K GOLD PLATED</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">DISCOVER</div>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#8B7355] hidden md:block">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card group">
              <div className="aspect-[4/3.5] bg-[#E5E0D8] relative overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {product.images[1] && (
                  <img 
                    src={product.images[1]} 
                    alt={product.name}
                    className="secondary absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <button 
                  onClick={(e) => handleQuickAdd(product, e)}
                  className="quick-add btn btn-primary text-xs px-8"
                >
                  QUICK ADD
                </button>
              </div>
              <div className="pt-4">
                <div className="product-name text-sm tracking-wider mb-1">{product.name}</div>
                <div className="text-sm text-[#6B665F]">${product.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-white py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">AS SEEN ON</div>
            <h2 className="serif text-4xl">Worn by You</h2>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card w-[220px] aspect-[9/16] bg-[#E5E0D8] snap-start">
                <img src={item.img} alt={item.caption} className="w-full h-full object-cover" />
                <div className="ugc-caption">
                  <p className="serif text-lg tracking-wide">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">EXPLORE</div>
          <h2 className="serif text-4xl">Shop by Category</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Link key={idx} to={cat.path} className="category-tile group block aspect-[16/10] overflow-hidden bg-[#E5E0D8]">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="text-2xl serif tracking-wide group-hover:underline">{cat.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[url('https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1200&q=80')] bg-cover bg-center" />
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-3">EST. 2019</div>
              <h2 className="serif text-5xl mb-6 tracking-[-0.01em]">Our Story</h2>
              <p className="text-[#6B665F] leading-relaxed mb-8">
                Velmora was born from a desire to create jewelry that feels both precious and wearable. 
                Each piece is crafted with intention, using only the finest materials.
              </p>
              <Link to="/" className="text-sm tracking-[0.1em] border-b border-[#2C2825] pb-0.5 hover:text-[#8B7355] hover:border-[#8B7355]">
                READ MORE →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">LOVED BY MANY</div>
          <h2 className="serif text-4xl">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="text-center px-4">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#C5A46E" color="#C5A46E" />
                ))}
              </div>
              <p className="text-[#6B665F] italic mb-4">"{t.text}"</p>
              <div className="text-sm tracking-[0.1em]">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2C2825] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="text-[#C5A46E] text-xs tracking-[0.2em] mb-3">MEMBERS ONLY</div>
          <h2 className="serif text-4xl text-white mb-4">Join for 10% off</h2>
          <p className="text-white/70 text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="input flex-1 bg-white text-sm placeholder:text-[#6B665F]"
            />
            <button type="submit" className="btn btn-accent whitespace-nowrap">
              SUBSCRIBE
            </button>
          </form>
          <p className="text-[10px] text-white/50 mt-4 tracking-wider">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;