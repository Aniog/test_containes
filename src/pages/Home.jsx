import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "My everyday staple", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80" },
    { id: 2, caption: "Perfect for date night", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80" },
    { id: 3, caption: "Gift from my love", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 4, caption: "Obsessed with these", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 5, caption: "Timeless elegance", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. These pieces feel so much more expensive than they are.", rating: 5 },
    { name: "Sophia K.", text: "I wear my huggies every day. They never tarnish and always get compliments.", rating: 5 },
    { name: "Isabella R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone is beautiful.", rating: 5 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#1a1816] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=2000&q=80')] bg-cover bg-center opacity-60" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b py-4 text-center text-xs tracking-[0.15em] text-[#6b665f] flex flex-wrap justify-center gap-x-8 gap-y-2">
        <span>Free Worldwide Shipping</span>
        <span>30-Day Returns</span>
        <span>18K Gold Plated</span>
        <span>Hypoallergenic</span>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-xs tracking-[0.2em] text-[#c5a26f]">DISCOVER</span>
            <h2 className="serif text-4xl mt-2">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-wide hover:text-[#c5a26f] hidden md:block">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.2em] text-[#c5a26f]">@VELMORA</span>
            <h3 className="serif text-3xl mt-2">As Seen on You</h3>
          </div>
          <div className="ugc-scroll flex gap-4 overflow-x-auto pb-4">
            {ugcItems.map(item => (
              <div key={item.id} className="relative flex-shrink-0 w-[180px] aspect-[9/16] overflow-hidden bg-gray-100">
                <img src={item.image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm italic serif">"{item.caption}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] text-[#c5a26f]">EXPLORE</span>
          <h2 className="serif text-4xl mt-2">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", path: "/shop?category=earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=huggies", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80" },
          ].map(cat => (
            <Link key={cat.name} to={cat.path} className="group relative aspect-[16/10] overflow-hidden bg-gray-100">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl serif tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80')] bg-cover bg-center" />
          <div className="px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center">
            <span className="text-xs tracking-[0.2em] text-[#c5a26f]">SINCE 2018</span>
            <h2 className="serif text-4xl mt-4 mb-6">Our Story</h2>
            <p className="text-[#6b665f] leading-relaxed mb-8">
              Velmora was born from a simple belief: that beautiful, well-crafted jewelry should be accessible without compromise. 
              Each piece is thoughtfully designed in our studio and crafted with the finest materials.
            </p>
            <Link to="/" className="btn btn-outline self-start">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <span className="text-xs tracking-[0.2em] text-[#c5a26f]">LOVED BY MANY</span>
        <h2 className="serif text-4xl mt-3 mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="px-4">
              <div className="flex justify-center mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#c5a26f] text-[#c5a26f]" />
                ))}
              </div>
              <p className="italic text-[#6b665f] mb-4">"{t.text}"</p>
              <p className="text-sm tracking-wide">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#1a1816] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <span className="text-[#c5a26f] text-xs tracking-[0.2em]">MEMBERS ONLY</span>
          <h3 className="serif text-3xl text-white mt-3 mb-3">Join for 10% off your first order</h3>
          <p className="text-[#8b7d6b] text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input flex-1 bg-white/5 border-white/20 text-white placeholder:text-white/40"
            />
            <button type="submit" className="btn btn-gold">Join</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;