import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Everyday elegance", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Golden hour", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 4, caption: "Timeless beauty", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 5, caption: "Effortless charm", image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
  ];

  const categories = [
    { name: "Earrings", path: "/shop", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
    { name: "Necklaces", path: "/shop", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
    { name: "Huggies", path: "/shop", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My necklace has become my signature piece.", rating: 5 },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. A wonderful gift.", rating: 5 },
    { name: "Isabella T.", text: "I wear my huggies every day. They never tarnish and always look new.", rating: 5 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#1A1816] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 max-w-md mx-auto">
            Demi-fine jewelry for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5E0D8] py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] uppercase text-[#6B6560]">
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
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-[#B89778] mb-2">Signature Pieces</div>
            <h2 className="font-serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] uppercase hover:text-[#B89778] hidden md:block">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-white py-16 border-y border-[#E5E0D8]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.2em] uppercase text-[#B89778] mb-2">As Seen On You</div>
            <h2 className="font-serif text-4xl">Moments in Gold</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[180px] snap-start">
                <div className="relative aspect-[9/16] bg-[#E5E0D8] overflow-hidden">
                  <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                  <div className="caption absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="font-serif text-white text-sm tracking-wide">{item.caption}</p>
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
          <div className="text-xs tracking-[0.2em] uppercase text-[#B89778] mb-2">Discover</div>
          <h2 className="font-serif text-4xl">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group block aspect-[4/3] relative overflow-hidden bg-[#E5E0D8]">
              <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover" />
              <div className="overlay absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="font-serif text-white text-3xl tracking-[0.1em]">{cat.name}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent md:hidden">
                <span className="font-serif text-white text-2xl tracking-[0.1em]">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white border-y border-[#E5E0D8]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80')] bg-cover bg-center" />
          <div className="px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center">
            <div className="text-xs tracking-[0.2em] uppercase text-[#B89778] mb-4">Since 2018</div>
            <h2 className="font-serif text-4xl mb-6">Our Story</h2>
            <p className="text-[#6B6560] leading-relaxed mb-8 max-w-md">
              Velmora was born from a desire to create jewelry that feels as precious as the moments it marks. 
              Each piece is thoughtfully designed in our studio and crafted with the finest materials.
            </p>
            <Link to="/" className="btn btn-outline w-fit">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] uppercase text-[#B89778] mb-2">Voices of Velmora</div>
          <h2 className="font-serif text-4xl">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center px-4">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} fill="#B89778" className="text-[#B89778]" />
                ))}
              </div>
              <p className="text-[#6B6560] italic mb-4">"{t.text}"</p>
              <p className="text-sm tracking-[0.1em] uppercase">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#1A1816] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="font-serif text-3xl text-white mb-3">Join for 10% off</div>
          <p className="text-[#B8B0A8] text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 px-5 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-[#B89778]"
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;