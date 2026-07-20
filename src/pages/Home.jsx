import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import Button from '../components/ui/Button';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "My everyday staple", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 2, caption: "Perfect for date night", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 3, caption: "Gift from my love", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80" },
    { id: 4, caption: "Obsessed with these", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80" },
    { id: 5, caption: "Timeless elegance", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.", rating: 5 },
    { name: "Sophia R.", text: "Bought the Flora Nectar necklace as a gift for my sister. She hasn't taken it off since. Beautiful packaging too.", rating: 5 },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so rich and elegant.", rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* 1. Sticky Nav is in Navbar component */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-[#2C2522] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=2000&q=80')] bg-cover bg-center opacity-90" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine jewelry for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop">
            <Button variant="accent">Shop the Collection</Button>
          </Link>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="border-b border-[#E5DFD6] py-4">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[#6B635E] tracking-[0.05em]">
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

      {/* 4. Bestsellers */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-[#8B7355] mb-2">Signature Pieces</p>
            <h2 className="font-serif text-4xl tracking-[-0.01em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.05em] hover:text-[#8B7355] transition-colors">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card group">
              <div className="img-container aspect-[4/3] relative">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <img 
                  src={product.images[1] || product.images[0]} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    // Quick add handled by product detail for now
                    window.location.href = `/product/${product.id}`;
                  }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 btn btn-accent text-xs px-6 py-2.5 opacity-0 group-hover:opacity-100 transition-all"
                >
                  Quick Add
                </button>
              </div>
              <div className="p-4">
                <p className="product-name text-sm tracking-[0.1em] mb-1">{product.name}</p>
                <p className="text-[#6B635E] text-sm">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. UGC Reel-style Row */}
      <section className="bg-[#F4F0E9] py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <p className="uppercase tracking-[0.2em] text-sm text-[#8B7355] mb-8 text-center">As Seen On You</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-[180px] snap-start relative">
                <div className="aspect-[9/16] bg-[#2C2522] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="font-serif text-white text-sm tracking-[0.05em]">"{item.caption}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.2em] text-sm text-[#8B7355] mb-2">Discover</p>
          <h2 className="font-serif text-4xl tracking-[-0.01em]">Shop by Category</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", path: "/shop?category=earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=huggies", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80" },
          ].map((cat, idx) => (
            <Link key={idx} to={cat.path} className="group relative aspect-[16/10] overflow-hidden bg-[#2C2522]">
              <img 
                src={cat.img} 
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-3xl tracking-[0.15em] group-hover:text-[#C5A46E] transition-colors">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F4F0E9]">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1000&q=80" 
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <p className="uppercase tracking-[0.2em] text-sm text-[#8B7355] mb-4">Since 2018</p>
            <h2 className="font-serif text-4xl tracking-[-0.01em] mb-6">Our Story</h2>
            <p className="body-text text-[#6B635E] mb-8">
              Velmora was born from a desire to create jewelry that feels as precious as the moments it marks. 
              Each piece is thoughtfully designed in our New York studio and crafted with the finest materials.
            </p>
            <Link to="/about" className="inline-block text-sm tracking-[0.1em] border-b border-[#8B7355] pb-0.5 hover:text-[#8B7355]">
              Read More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-[#F4F0E9] py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.2em] text-sm text-[#8B7355] mb-2">In Their Words</p>
            <h2 className="font-serif text-4xl tracking-[-0.01em]">Our Community</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8">
                <div className="stars mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="body-text text-[#6B635E] mb-6">"{t.text}"</p>
                <p className="text-sm tracking-[0.05em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-serif text-3xl tracking-[-0.01em] mb-3">Join the Circle</h2>
          <p className="text-[#6B635E] mb-8">Be the first to know about new arrivals and receive 10% off your first order.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you! Welcome to the Velmora circle.'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input flex-1"
              required 
            />
            <Button type="submit" variant="primary">Subscribe</Button>
          </form>
          <p className="text-xs text-[#9A9088] mt-4">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;