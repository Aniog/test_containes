import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';
import { products } from '@/data/products';

// UGC / Reel-style data
const ugcItems = [
  { id: 1, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80", caption: "My everyday staple" },
  { id: 2, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80", caption: "Gifted myself this beauty" },
  { id: 3, image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80", caption: "Perfect for date night" },
  { id: 4, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80", caption: "Obsessed with the detail" },
  { id: 5, image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80", caption: "Wore this to my wedding" },
];

const testimonials = [
  { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for months and they still look brand new." },
  { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. Worth every penny." },
  { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so rich and warm." },
];

const Home = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1C1B18]">
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1C1B18]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=90" 
            alt="Velmora Fine Jewelry - Warm lit gold jewelry on model"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl tracking-[2px] text-[#F8F5F0] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-[#EDE8DF] text-lg md:text-xl tracking-[1px] mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry for the woman who values quiet luxury.
          </p>
          <Link to="/shop">
            <Button size="lg" className="tracking-[2px]">
              SHOP THE COLLECTION
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#F8F5F0]/60 text-xs tracking-[3px]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#D4C9B8] py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[2px] text-[#4A463F] text-center">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden sm:inline">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden sm:inline">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden sm:inline">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs tracking-[3px] text-[#BFA46F]">DISCOVER</span>
            <h2 className="font-serif text-3xl tracking-[1px] mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden sm:block text-sm tracking-[1.5px] text-[#BFA46F] hover:underline">
            VIEW ALL →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-8 sm:hidden">
          <Link to="/shop" className="text-sm tracking-[1.5px] text-[#BFA46F]">VIEW ALL →</Link>
        </div>
      </section>

      {/* UGC Reel-style Row */}
      <section className="bg-[#EDE8DF] py-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs tracking-[3px] text-[#BFA46F]">AS SEEN ON</span>
              <h3 className="font-serif text-2xl tracking-[1px] mt-1">Real Moments</h3>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm tracking-[1.5px] text-[#BFA46F] hover:underline hidden sm:block">
              @VELMORA ON INSTAGRAM →
            </a>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="relative flex-shrink-0 w-[160px] md:w-[180px] snap-start">
                <div className="aspect-[9/16] overflow-hidden bg-[#D4C9B8]">
                  <img 
                    src={item.image} 
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="font-serif text-[#F8F5F0] text-sm tracking-[0.5px] italic">
                    "{item.caption}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[3px] text-[#BFA46F]">EXPLORE</span>
          <h2 className="font-serif text-3xl tracking-[1px] mt-1">Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Earrings', category: 'earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { label: 'Necklaces', category: 'necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { label: 'Huggies', category: 'huggies', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80' },
          ].map((cat) => (
            <Link 
              key={cat.category} 
              to={`/shop?category=${cat.category}`}
              className="group relative aspect-[16/10] overflow-hidden bg-[#1C1B18]"
            >
              <img 
                src={cat.image} 
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-3xl tracking-[3px] text-[#F8F5F0] group-hover:text-[#BFA46F] transition-colors">
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[4/3] bg-[#EDE8DF] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1000&q=80" 
              alt="Velmora atelier - hands crafting fine jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-4 md:py-8">
            <span className="text-xs tracking-[3px] text-[#BFA46F]">SINCE 2018</span>
            <h2 className="font-serif text-4xl tracking-[1px] mt-3 mb-6">Our Story</h2>
            <div className="text-[#4A463F] leading-relaxed space-y-4 text-[15px]">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise.
              </p>
              <p>
                We design demi-fine pieces in 18K gold plating over hypoallergenic brass — pieces that feel as precious as solid gold, but designed for everyday wear.
              </p>
            </div>
            <Link to="/about" className="inline-block mt-6 text-sm tracking-[1.5px] text-[#BFA46F] hover:underline">
              READ OUR FULL STORY →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#EDE8DF] py-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs tracking-[3px] text-[#BFA46F]">LOVED BY MANY</span>
            <h2 className="font-serif text-3xl tracking-[1px] mt-1">What Our Customers Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#BFA46F] fill-[#BFA46F]" />
                  ))}
                </div>
                <p className="text-[#4A463F] italic leading-relaxed">"{t.text}"</p>
                <p className="mt-4 text-sm tracking-[1px] text-[#1C1B18]">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[600px] mx-auto px-6 py-20 text-center">
        <span className="text-xs tracking-[3px] text-[#BFA46F]">JOIN THE CIRCLE</span>
        <h2 className="font-serif text-3xl tracking-[1px] mt-3 mb-3">Join for 10% off your first order</h2>
        <p className="text-[#4A463F] text-sm mb-8">Be the first to know about new collections, styling tips, and private events.</p>
        
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            if (email) {
              alert(`Thank you! 10% off code sent to ${email}`);
              e.target.reset();
            }
          }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input 
            type="email" 
            name="email"
            placeholder="YOUR EMAIL ADDRESS" 
            required
            className="flex-1 h-12 border border-[#D4C9B8] bg-[#F8F5F0] px-4 text-sm tracking-[1px] placeholder:text-[#8A8175] focus:border-[#BFA46F] focus:outline-none"
          />
          <Button type="submit" className="sm:px-10 tracking-[2px]">
            SUBSCRIBE
          </Button>
        </form>
        <p className="text-[10px] text-[#8A8175] mt-3 tracking-[1px]">We respect your inbox. Unsubscribe anytime.</p>
      </section>
    </div>
  );
};

export default Home;
