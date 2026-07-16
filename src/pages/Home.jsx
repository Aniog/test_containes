import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrustBar from '../components/TrustBar';
import ProductCard from '../components/ProductCard';
import UGCRow from '../components/UGCRow';
import Testimonials from '../components/Testimonials';
import { products } from '../data/products';

const Home = () => {
  // Get 5 bestsellers (all products for now, could be curated)
  const bestsellers = products.slice(0, 5);

  const categories = [
    {
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      path: '/shop?category=Earrings',
    },
    {
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      path: '/shop?category=Necklaces',
    },
    {
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
      path: '/shop?category=Huggies',
    },
  ];

  return (
    <div className="min-h-screen bg-velmora-bg">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/25" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-white text-5xl md:text-6xl font-serif tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry for the moments that matter.
          </p>
          <Link to="/shop" className="btn btn-gold btn-lg inline-flex items-center gap-2">
            Shop the Collection
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em] uppercase">
          Scroll to explore
        </div>
      </section>

      <TrustBar />

      {/* Bestsellers */}
      <section className="section container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="uppercase text-xs tracking-[0.15em] text-velmora-text-muted mb-1">Curated for you</p>
            <h2 className="text-3xl font-serif">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-[0.1em] hover:text-velmora-accent">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="btn btn-outline btn-sm">View All Products</Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="section-sm bg-velmora-bg-alt">
        <div className="container mb-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="uppercase text-xs tracking-[0.15em] text-velmora-text-muted mb-1">From our community</p>
              <h2 className="text-3xl font-serif">Worn & Loved</h2>
            </div>
          </div>
        </div>
        <UGCRow />
      </section>

      {/* Shop by Category */}
      <section className="section container">
        <div className="text-center mb-10">
          <p className="uppercase text-xs tracking-[0.15em] text-velmora-text-muted mb-1">Find your piece</p>
          <h2 className="text-3xl font-serif">Shop by Category</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay" />
              <span className="label">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="section bg-velmora-bg-alt">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="aspect-[4/3] bg-velmora-border overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80"
                alt="Velmora atelier"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="uppercase text-xs tracking-[0.15em] text-velmora-text-muted mb-3">Since 2019</p>
              <h2 className="text-4xl font-serif mb-6">Our Story</h2>
              <div className="body-text text-[15px] text-velmora-text-muted space-y-4 mb-8">
                <p>
                  Velmora was born from a simple belief: that beautiful jewelry shouldn't require compromise.
                </p>
                <p>
                  We design demi-fine pieces that feel precious but live in the real world — worn daily, passed down, loved for years.
                </p>
                <p>
                  Each piece is crafted with intention, using responsibly sourced materials and traditional techniques.
                </p>
              </div>
              <Link to="/about" className="btn btn-outline">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section container">
        <div className="text-center mb-10">
          <p className="uppercase text-xs tracking-[0.15em] text-velmora-text-muted mb-1">In their words</p>
          <h2 className="text-3xl font-serif">What Our Customers Say</h2>
        </div>
        <Testimonials />
      </section>

      {/* Newsletter */}
      <section className="newsletter py-16">
        <div className="container max-w-xl text-center">
          <h2 className="font-serif text-3xl text-white mb-3">Join for 10% off your first order</h2>
          <p className="text-white/70 text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) {
                toast.success(`Thank you! 10% off code sent to ${email}`);
                e.target.reset();
              }
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="input flex-1 bg-transparent border-white/30 text-white placeholder:text-white/50"
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-white/50 mt-4 tracking-wide">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
