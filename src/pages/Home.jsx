import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import UGCRow from '../components/UGCRow';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  
  // Bestsellers - first 5 products
  const bestsellers = products.slice(0, 5);

  // Testimonials
  const testimonials = [
    {
      id: 1,
      text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.",
      name: "Elena M.",
      rating: 5,
    },
    {
      id: 2,
      text: "Bought the Royal Heirloom Set as a gift for my sister. She cried when she opened it. Worth every penny.",
      name: "Sofia R.",
      rating: 5,
    },
    {
      id: 3,
      text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold is so warm and beautiful.",
      name: "Aisha K.",
      rating: 5,
    },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! You've been subscribed and your 10% discount code has been sent to your email.");
  };

  return (
    <div className="min-h-screen bg-base-50">
      <Navbar />

      {/* 1. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-base-900">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=85"
            alt="Velmora Fine Jewelry - Woman wearing elegant gold jewelry"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl text-white tracking-[0.02em] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 tracking-[0.02em]">
            Demi-fine gold jewelry for the modern woman
          </p>
          <Link
            to="/shop"
            className="btn btn-gold inline-block"
          >
            SHOP THE COLLECTION
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="border-b border-base-200 bg-base-50 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.1em] text-base-700 text-center">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden sm:inline text-base-300">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden sm:inline text-base-300">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden sm:inline text-base-300">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs tracking-[0.15em] text-gold-600">DISCOVER</span>
            <h2 className="font-serif text-3xl tracking-[0.02em] mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden sm:block text-sm tracking-[0.05em] hover:text-gold-600">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link to="/shop" className="text-sm tracking-[0.05em] hover:text-gold-600">
            VIEW ALL →
          </Link>
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="bg-base-100 py-12 border-y border-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs tracking-[0.15em] text-gold-600">AS SEEN ON</span>
              <h3 className="font-serif text-2xl tracking-[0.02em] mt-1">Real Moments</h3>
            </div>
          </div>
          <UGCRow />
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.15em] text-gold-600">EXPLORE</span>
          <h2 className="font-serif text-3xl tracking-[0.02em] mt-1">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Earrings', path: '/shop?category=Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { name: 'Necklaces', path: '/shop?category=Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { name: 'Huggies', path: '/shop?category=Huggies', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group block aspect-[16/10] overflow-hidden">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-label">
                {cat.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story Split */}
      <section className="bg-base-100 border-y border-base-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80"
              alt="Velmora atelier - hands crafting fine jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 py-14 md:py-0 md:px-16">
            <div>
              <span className="text-xs tracking-[0.15em] text-gold-600">SINCE 2018</span>
              <h2 className="font-serif text-4xl tracking-[0.02em] mt-3 mb-6">Our Story</h2>
              <div className="text-base-700 leading-relaxed space-y-4 text-[15px]">
                <p>
                  Velmora was born from a simple belief: that beautiful, lasting jewelry should be accessible without compromise.
                </p>
                <p>
                  We work with skilled artisans to create demi-fine pieces in 18K gold plating that feel as precious as solid gold — but designed for everyday wear.
                </p>
              </div>
              <Link to="/about" className="inline-block mt-8 text-sm tracking-[0.08em] border-b border-base-900 pb-0.5 hover:text-gold-600 hover:border-gold-600">
                READ OUR STORY →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.15em] text-gold-600">LOVED BY MANY</span>
          <h2 className="font-serif text-3xl tracking-[0.02em] mt-1">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial">
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-[15px] leading-relaxed text-base-700 mb-4">"{t.text}"</p>
              <p className="text-sm tracking-[0.05em] text-base-600">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl tracking-[0.02em] mb-3">Join for 10% off</h3>
          <p className="text-base-200 text-sm mb-8 tracking-[0.02em]">
            Be the first to know about new arrivals, private sales, and styling inspiration.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              required
              className="flex-1 bg-transparent border border-base-300 px-5 py-3 text-sm placeholder:text-base-400 focus:outline-none focus:border-gold-500"
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">
              SUBSCRIBE
            </button>
          </form>
          <p className="text-[10px] text-base-400 mt-4 tracking-[0.05em]">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
