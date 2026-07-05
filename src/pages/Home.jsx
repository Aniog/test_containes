import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import StarRating from '../components/StarRating';

const Home = () => {
  // Bestsellers - first 5 products
  const bestsellers = products.slice(0, 5);

  // UGC mock data - vertical reel style
  const ugcItems = [
    { id: 1, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80', caption: 'Morning light on the Vivid Aura' },
    { id: 2, image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80', caption: 'The Flora Nectar for every day' },
    { id: 3, image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80', caption: 'Golden Sphere, my signature' },
    { id: 4, image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80', caption: 'Lace details that catch the eye' },
    { id: 5, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80', caption: 'The Heirloom Set, gifted to me' },
  ];

  // Testimonials
  const testimonials = [
    { name: 'Elena M.', text: 'The quality is exceptional. I wear my huggies every day and they still look brand new.', rating: 5 },
    { name: 'Sofia R.', text: 'Bought the Flora Nectar as a gift for my sister. She hasn\'t taken it off since.', rating: 5 },
    { name: 'Aisha K.', text: 'Finally, jewelry that feels luxurious without the markup. The ear cuffs are my favorite.', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      {/* 1. Sticky Nav is in Layout */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[620px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2522]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=85" 
            alt="Velmora Fine Jewelry - Warm lit gold jewelry on model"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white tracking-[0.05em] leading-[1.05]">
            Crafted to be<br />Treasured
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman. Quiet luxury, made to last.
          </p>
          <Link 
            to="/shop" 
            className="btn btn-gold mt-8 inline-block"
          >
            Shop the Collection
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar bg-white border-b border-[#D4C9B8] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-center text-[#6B6058]">
          <span>Free Worldwide Shipping</span>
          <span className="hidden sm:inline text-[#D4C9B8]">·</span>
          <span>30-Day Returns</span>
          <span className="hidden sm:inline text-[#D4C9B8]">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden sm:inline text-[#D4C9B8]">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">CURATED FOR YOU</span>
            <h2 className="font-serif text-4xl tracking-[0.02em] mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.05em] text-[#8B7355] hover:text-[#2C2522] transition-colors">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="text-sm tracking-[0.05em] text-[#8B7355]">VIEW ALL →</Link>
        </div>
      </section>

      {/* 5. Reel-style UGC Row */}
      <section className="bg-[#F1EDE6] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-6">
            <div>
              <span className="text-xs tracking-[0.15em] text-[#8B7355]">AS SEEN ON</span>
              <h2 className="font-serif text-3xl tracking-[0.02em] mt-1">Real Moments</h2>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[160px] md:w-[180px] aspect-[9/16] bg-[#2C2522] overflow-hidden snap-start">
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="ugc-caption">
                  <p className="font-serif text-sm leading-tight">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#6B6058] mt-2 tracking-widest">SWIPE FOR MORE</p>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.15em] text-[#8B7355]">DISCOVER</span>
          <h2 className="font-serif text-4xl tracking-[0.02em] mt-1">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Earrings', path: '/shop?category=Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { name: 'Necklaces', path: '/shop?category=Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { name: 'Huggies', path: '/shop?category=Huggies', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80' },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group block aspect-[16/10] md:aspect-[4/3] relative overflow-hidden bg-[#2C2522]">
              <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover" />
              <div className="overlay absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="font-serif text-white text-3xl tracking-[0.1em] group-hover:tracking-[0.15em] transition-all">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story Split Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#F1EDE6] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1000&q=80" 
              alt="Velmora atelier - hands crafting fine jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-8 md:px-12 lg:px-16 py-14 md:py-16 flex flex-col justify-center">
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">SINCE 2018</span>
            <h2 className="font-serif text-4xl tracking-[0.02em] mt-3 mb-6">Our Story</h2>
            <div className="prose prose-sm text-[#6B6058] max-w-prose space-y-4 text-[15px] leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful, lasting jewelry should be accessible without compromise.
              </p>
              <p>
                We work with skilled artisans to create demi-fine pieces in 18K gold plating over sterling silver — pieces that feel as precious as solid gold, but designed for everyday wear.
              </p>
            </div>
            <Link to="/about" className="mt-8 inline-block text-sm tracking-[0.1em] text-[#8B7355] hover:text-[#2C2522] transition-colors">
              READ OUR FULL STORY →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.15em] text-[#8B7355]">LOVED BY MANY</span>
          <h2 className="font-serif text-4xl tracking-[0.02em] mt-1">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="text-center px-4">
              <StarRating rating={t.rating} />
              <p className="mt-4 text-[#2C2522] leading-relaxed">"{t.text}"</p>
              <p className="mt-4 text-sm text-[#6B6058]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter Capture */}
      <section className="bg-[#2C2522] py-14">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="font-serif text-white text-3xl tracking-[0.05em]">Join for 10% off<br />your first order</h3>
          <p className="text-[#A89C8F] mt-3 text-sm">Be the first to know about new arrivals and private events.</p>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) {
                alert(`Thank you! 10% off code sent to ${email}`);
                e.target.reset();
              }
            }}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <input 
              type="email" 
              name="email"
              placeholder="YOUR EMAIL ADDRESS" 
              required
              className="newsletter-input flex-1 text-white placeholder:text-[#6B6058] border-b border-white/40 focus:border-white"
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap px-8">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-[#6B6058] mt-3 tracking-widest">WE RESPECT YOUR INBOX. UNSUBSCRIBE ANYTIME.</p>
        </div>
      </section>

      {/* 10. Footer is in Layout */}
    </div>
  );
};

export default Home;
