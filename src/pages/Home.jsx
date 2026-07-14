import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Golden hour", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 4, caption: "Timeless beauty", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 5, caption: "Soft details", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday staple.", rating: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and the necklace is even more stunning in person.", rating: 5 },
    { name: "Isabella K.", text: "I bought the set as a gift and my sister hasn't taken it off since.", rating: 5 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#2C2825] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, thoughtfully designed for the modern woman.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5DFD6] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] uppercase text-[#6B635C]">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">•</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-2">Signature Pieces</p>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] uppercase hover:text-[#8B7355] hidden md:block">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/3.5] bg-[#F8F5F1] overflow-hidden">
                <img
                  src={product.image1}
                  alt={product.name}
                  className="product-image-primary absolute inset-0 w-full h-full object-cover"
                />
                <img
                  src={product.image2}
                  alt={product.name}
                  className="product-image-secondary absolute inset-0 w-full h-full object-cover"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="quick-add btn btn-primary text-xs py-2.5 px-6"
                >
                  Quick Add
                </button>
              </Link>
              <div className="pt-4">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-[0.1em] mb-1">{product.name}</p>
                </Link>
                <p className="text-sm text-[#6B635C]">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#F8F5F1] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-8">As Seen On You</p>
          <div className="ugc-scroll">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card">
                <img src={item.img} alt={item.caption} />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="serif text-white text-sm tracking-wide">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-2">Discover</p>
          <h2 className="serif text-4xl">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Earrings', path: '/shop?category=Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { name: 'Necklaces', path: '/shop?category=Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { name: 'Huggies', path: '/shop?category=Huggies', img: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80' },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay-label">
                <span className="text-white text-lg tracking-[0.15em] uppercase font-medium">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F8F5F1]">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1000&q=80"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-3">Since 2019</p>
            <h2 className="serif text-4xl mb-6">Our Story</h2>
            <p className="text-[#6B635C] leading-relaxed mb-8">
              Velmora was born from a desire to create jewelry that feels both precious and wearable.
              Each piece is crafted with intention, using only the finest materials and timeless design principles.
            </p>
            <Link to="/" className="text-sm tracking-[0.1em] uppercase border-b border-[#2C2825] pb-0.5 hover:text-[#8B7355] hover:border-[#8B7355]">
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#2C2825] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs tracking-[0.2em] uppercase text-[#C5A46E] mb-10">Voices of Velmora</p>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#C5A46E" color="#C5A46E" />
                  ))}
                </div>
                <p className="text-[#E5DFD6] italic mb-4 leading-relaxed">"{t.text}"</p>
                <p className="text-sm tracking-[0.1em] text-[#C5A46E]">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-3">Stay Connected</p>
        <h2 className="serif text-4xl mb-4">Join for 10% off your first order</h2>
        <p className="text-[#6B635C] mb-8">Be the first to know about new arrivals and exclusive offers.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            className="input flex-1"
            required
          />
          <button type="submit" className="btn btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;