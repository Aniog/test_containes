import Hero from '@/components/home/Hero';
import Bestsellers from '@/components/home/Bestsellers';
import UGCReel from '@/components/home/UGCReel';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-background">
      <Hero />

      {/* Trust Bar */}
      <div className="bg-velmora-charcoal text-white py-4 overflow-hidden border-y border-white/10">
        <div className="flex whitespace-nowrap animate-marquee items-center space-x-12 px-4 text-[10px] lg:text-xs uppercase tracking-widest font-medium">
          <span className="flex-shrink-0 flex items-center gap-2">Free Worldwide Shipping</span>
          <span className="w-1.5 h-1.5 rounded-full bg-velmora-gold"></span>
          <span className="flex-shrink-0 flex items-center gap-2">30-Day Returns</span>
          <span className="w-1.5 h-1.5 rounded-full bg-velmora-gold"></span>
          <span className="flex-shrink-0 flex items-center gap-2">18K Gold Plated</span>
          <span className="w-1.5 h-1.5 rounded-full bg-velmora-gold"></span>
          <span className="flex-shrink-0 flex items-center gap-2">Hypoallergenic</span>
          <span className="w-1.5 h-1.5 rounded-full bg-velmora-gold"></span>
          {/* Repeat for animation smoothness if needed, or just static for now */}
          <span className="hidden lg:inline lg:flex-shrink-0 flex lg:items-center lg:gap-2">Free Worldwide Shipping</span>
          <span className="hidden lg:inline lg:w-1.5 lg:h-1.5 lg:rounded-full lg:bg-velmora-gold"></span>
          <span className="hidden lg:inline lg:flex-shrink-0 flex lg:items-center lg:gap-2">30-Day Returns</span>
        </div>
      </div>

      <Bestsellers />

      {/* Categories */}
      <section className="py-24 bg-velmora-cream/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Earrings', path: '/shop?category=earrings', labelId: 'cat-ear-label' },
              { title: 'Necklaces', path: '/shop?category=necklaces', labelId: 'cat-neck-label' },
              { title: 'Huggies', path: '/shop?category=earrings&sub=huggies', labelId: 'cat-hug-label' },
            ].map((cat) => (
              <Link
                key={cat.title}
                to={cat.path}
                className="group relative aspect-[4/5] overflow-hidden bg-velmora-charcoal"
              >
                <img
                  data-strk-img-id={`cat-img-${cat.title.toLowerCase()}`}
                  data-strk-img={`[${cat.labelId}] fine jewelry gold background`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 id={cat.labelId} className="text-white font-serif text-3xl uppercase tracking-widest group-hover:scale-110 transition-transform duration-500">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 aspect-[4/5] overflow-hidden relative">
              <img
                data-strk-img-id="brand-story-img"
                data-strk-img="[story-title] [story-text] fine jewelry workshop gold"
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 id="story-title" className="serif-heading text-4xl lg:text-5xl leading-tight">
                Designed to become part of your narrative.
              </h2>
              <p id="story-text" className="text-velmora-taupe text-lg leading-relaxed font-serif italic">
                Velmora was born from the desire for jewelry that balances the ethereal beauty of high-end design with the practicality of daily life. Each piece is meticulously crafted in Demi-fine 18K gold plating, intended to be worn, loved, and eventually passed down.
              </p>
              <Link to="/about">
                <Button variant="outline">Our Story</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <UGCReel />

      {/* Testimonials */}
      <section className="py-24 bg-white border-y border-velmora-charcoal/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { name: 'Sarah M.', text: 'The quality of these huggies is incredible. I haven\'t taken them off in months and they still look brand new.' },
              { name: 'Elena R.', text: 'Finally, gold jewelry that doesn\'t irritate my skin! The Royal Heirloom set was the perfect birthday gift.' },
              { name: 'Chloe W.', text: 'Absolutely in love with the Vivid Aura cuff. It\'s so lightweight but makes every outfit feel elevated.' },
            ].map((review, i) => (
              <div key={review.name} className="flex flex-col items-center space-y-4">
                <div className="flex text-velmora-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-serif italic text-lg text-velmora-charcoal leading-relaxed">"{review.text}"</p>
                <p className="uppercase tracking-widest text-xs font-semibold text-velmora-taupe">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-velmora-cream">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 id="newsletter-title" className="serif-heading text-3xl uppercase">The Velmora Journal</h2>
            <p id="newsletter-text" className="text-velmora-taupe uppercase tracking-widest text-xs">
              Join our community for styling tips, new arrivals, and 10% off your first order.
            </p>
          </div>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="flex-grow bg-transparent border border-velmora-charcoal/20 px-6 py-4 text-xs tracking-widest uppercase focus:border-velmora-gold outline-none transition-colors"
              required
            />
            <Button type="submit" variant="primary">Join</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
