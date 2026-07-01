import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrustBar from '../components/TrustBar';
import ProductCard from '../components/ProductCard';
import UGCRow from '../components/UGCRow';
import { products } from '../data/products';

const Home = () => {
  // Show first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  const categories = [
    { name: "Earrings", slug: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
    { name: "Necklaces", slug: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
    { name: "Huggies", slug: "Huggies", image: "https://images.unsplash.com/photo-1535632787350-4e68b47b86eb?w=800&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since. Beautiful packaging too." },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my skin. The gold tone is so warm and elegant." },
  ];

  return (
    <div className="min-h-screen bg-velmora-cream">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-velmora-base">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80" 
            alt="Velmora Fine Jewelry - Warm lit gold jewelry on model"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="heading-serif text-5xl md:text-6xl lg:text-7xl text-white tracking-[0.02em] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine jewelry for the woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em]">
          SCROLL TO EXPLORE
        </div>
      </section>

      <TrustBar />

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs tracking-[0.15em] text-velmora-gold uppercase">Signature Pieces</span>
            <h2 className="heading-serif text-3xl md:text-4xl mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-widest hover:text-velmora-gold transition-colors">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-widest hover:text-velmora-gold transition-colors">
            VIEW ALL →
          </Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <span className="text-xs tracking-[0.15em] text-velmora-gold uppercase">As Seen On You</span>
            <h2 className="heading-serif text-3xl md:text-4xl mt-1">Real Moments</h2>
          </div>
          <UGCRow />
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8">
          <span className="text-xs tracking-[0.15em] text-velmora-gold uppercase">Find Your Piece</span>
          <h2 className="heading-serif text-3xl md:text-4xl mt-1">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/shop?category=${cat.slug}`}
              className="category-tile group"
            >
              <img src={cat.image} alt={cat.name} />
              <div className="category-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-lg heading-serif tracking-wider group-hover:underline">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0">
          <div className="aspect-[4/3] md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80" 
              alt="Velmora atelier - artisan hands working on gold jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-12 md:py-0">
            <div className="max-w-md">
              <span className="text-xs tracking-[0.15em] text-velmora-gold uppercase">Since 2018</span>
              <h2 className="heading-serif text-4xl mt-2 mb-6">Our Story</h2>
              <p className="text-velmora-muted leading-relaxed mb-6">
                Velmora was born from a desire to create jewelry that feels personal, not performative. 
                Each piece is designed in our studio and crafted with care using traditional techniques 
                and modern sensibility.
              </p>
              <Link to="/about" className="btn btn-outline btn-sm inline-block">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.15em] text-velmora-gold uppercase">In Their Words</span>
          <h2 className="heading-serif text-3xl md:text-4xl mt-1">Loved by Many</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center px-4">
              <div className="stars mb-4 text-lg">★★★★★</div>
              <p className="text-velmora-muted italic leading-relaxed mb-4">"{testimonial.text}"</p>
              <p className="text-sm tracking-widest">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-velmora-base text-velmora-cream py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="heading-serif text-3xl mb-3">Join for 10% off</h2>
          <p className="text-velmora-taupe mb-8 text-sm">Be the first to know about new arrivals and private events.</p>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you. You are now subscribed to the Velmora journal.');
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              required 
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-velmora-taupe mt-4 tracking-widest">WE RESPECT YOUR INBOX</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
