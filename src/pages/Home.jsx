import React from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import Hero from '@/components/home/Hero';
import ProductCard from '@/components/product/ProductCard';
import CategoryTiles from '@/components/home/CategoryTiles';
import UGCSection from '@/components/home/UGCSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Home = () => {
  const [bestsellers, setBestsellers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchBestsellers() {
      try {
        const { data: response } = await client
          .from('Products')
          .select('*')
          .eq('isBestseller', true)
          .limit(5);
        setBestsellers(response?.data?.list || []);
      } catch (err) {
        console.error('Failed to fetch bestsellers:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchBestsellers();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Trust Bar for Mobile (Standalone) */}
      <div className="md:hidden py-6 px-4 bg-[#F4F1ED] flex flex-wrap justify-center gap-x-6 gap-y-2 text-[8px] uppercase-spaced font-bold text-muted-foreground border-b border-border/40">
          <span>Free Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
          <div>
            <span className="uppercase-spaced text-[10px] font-bold text-accent mb-2 block">Curated Favorites</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Our Bestsellers</h2>
          </div>
          <Link to="/shop" className="group flex items-center gap-2 uppercase-spaced text-[10px] font-bold hover:text-accent transition-colors">
            View All Collection
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse flex flex-col gap-4">
                <div className="aspect-[3/4] bg-muted" />
                <div className="h-4 bg-muted w-3/4 mx-auto" />
                <div className="h-4 bg-muted w-1/2 mx-auto" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-6 md:gap-x-10">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <div className="hairline container mx-auto opacity-20" />

      <CategoryTiles />

      {/* Brand Story Split Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] overflow-hidden">
               <img
                  data-strk-img-id="brand-story-img"
                  data-strk-img="jewelry artisan workshop tools gold pieces close up luxury"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  className="w-full h-full object-cover transition-luxury hover:scale-105"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                  alt="Our Story"
                />
            </div>
            <div className="flex flex-col gap-8 md:pl-12">
              <span className="uppercase-spaced text-[10px] font-bold text-accent">Our Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-serif text-foreground leading-tight">
                Modern Heirlooms for the <br className="hidden lg:block" /> Contemporary Woman
              </h2>
              <div className="flex flex-col gap-6 text-muted-foreground font-light leading-relaxed max-w-lg">
                <p>
                  Velmora was born from a simple desire: to create jewelry that feels like an heirloom from the moment you put it on. We believe that fine jewelry shouldn't be reserved for special occasions—it should be a part of your everyday story.
                </p>
                <p>
                  Each piece is meticulously crafted using recycled gold and ethically sourced stones, designed to stand the test of time and transcend passing trends. 
                </p>
              </div>
              <Link to="/about" className="uppercase-spaced text-[10px] font-bold border-b border-foreground w-fit pb-1 hover:text-accent hover:border-accent transition-all">
                Learn About Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      <UGCSection />

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <span className="uppercase-spaced text-[10px] font-bold text-accent mb-8 block">Member Reviews</span>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: 'Sarah M.', text: 'The quality of the Golden Sphere huggies is incredible. They haven’t left my ears since I got them.' },
                { name: 'Elena R.', text: 'Beautifully packaged and even more stunning in person. Perfect for gifting myself.' },
                { name: 'Jessica L.', text: 'Finally, jewelry that actually feels premium at an accessible price. Customer service was amazing too.' }
              ].map((rev, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-accent text-accent" />)}
                  </div>
                  <p className="font-serif text-xl italic leading-relaxed text-foreground">"{rev.text}"</p>
                  <span className="uppercase-spaced text-[10px] font-bold text-muted-foreground mt-2">— {rev.name}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-foreground text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Join the Inner Circle</h2>
          <p className="text-white/60 mb-10 font-light leading-relaxed">
            Be the first to know about new collection launches, exclusive events, and receive 10% off your first order.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border border-white/20 px-6 py-4 flex-1 text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <button className="bg-white text-foreground hover:bg-accent hover:text-white px-10 py-4 uppercase-spaced text-xs font-bold transition-luxury">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

const Star = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default Home;
