import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const Home = () => {
  const bestsellers = products.slice(0, 5);

  const testimonials = [
    { name: 'Sophia R.', stars: 5, text: 'The Golden Sphere Huggies are my new everyday staple. So comfortable and they look incredible.' },
    { name: 'Emma L.', stars: 5, text: 'Velmora hits that sweet spot of high-end design at a price that doesn\'t break the bank.' },
    { name: 'Isabella M.', stars: 5, text: 'Absolutely in love with the Amber Lace Earrings. The detail is stunning.' }
  ];

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          data-strk-bg-id="hero-bg"
          data-strk-bg="warm gold jewelry close up on model editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          className="absolute inset-0 bg-velmora-charcoal/20"
        >
           {/* Fallback overlay if image doesn't load */}
           <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 id="hero-title" className="text-white text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-white/90 text-sm md:text-lg uppercase tracking-widest-extra mb-10 max-w-xl mx-auto">
            Demi-fine gold jewelry for the modern woman.
          </p>
          <Link to="/shop">
             <Button variant="accent" size="lg" className="hover:scale-105 transition-transform">
               Shop the Collection
             </Button>
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 md:px-12 py-8 bg-white hairline-divider">
        {[
          'Free Worldwide Shipping',
          '30-Day Returns',
          '18K Gold Plated',
          'Hypoallergenic'
        ].map((item) => (
          <div key={item} className="text-[10px] md:text-xs uppercase tracking-widest-extra text-center font-medium">
            {item}
          </div>
        ))}
      </section>

      {/* Bestsellers Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-4">
            <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif lowercase italic">bestsellers</h2>
            <p className="text-xs uppercase tracking-widest-extra text-velmora-charcoal/60">The pieces you love most</p>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-widest-extra underline underline-offset-8 hover:text-velmora-gold transition-colors">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel Section */}
      <section className="overflow-hidden bg-velmora-sand py-20">
        <div className="px-6 md:px-12 mb-10">
           <h2 className="text-xs uppercase tracking-widest-extra text-center font-medium mb-2">Worn by you</h2>
           <p className="font-serif text-2xl text-center italic">@VelmoraFine</p>
        </div>
        <div className="flex overflow-x-auto space-x-4 px-6 md:px-12 no-scrollbar pb-10">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="flex-shrink-0 w-64 md:w-80 aspect-[9/16] relative bg-velmora-charcoal/10 group">
              <img
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img="jewelry on model neck ears vertical portrait close up warm mood"
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition duration-700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt="UGC Content"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                 <p className="text-white font-serif italic text-lg leading-tight">"A daily masterpiece."</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Tiles */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Earrings', img: 'gold earrings collection' },
          { name: 'Necklaces', img: 'gold necklaces collection' },
          { name: 'Huggies', img: 'gold huggie earrings collection' }
        ].map((cat) => (
          <Link key={cat.name} to={`/shop?category=${cat.name.toLowerCase()}`} className="group relative aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id={`cat-img-${cat.name}`}
              data-strk-img={cat.img}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={cat.name}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-white text-xs uppercase tracking-[0.3em] font-medium border-b border-transparent group-hover:border-white transition-all duration-300 pb-1">
                 {cat.name}
               </span>
            </div>
          </Link>
        ))}
      </section>

      {/* Brand Story Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-32">
        <div className="aspect-[4/5] bg-velmora-sand">
           <img
             data-strk-img-id="brand-story-img"
             data-strk-img="jewelry designer studio high end editorial gold jewelry"
             data-strk-img-ratio="4x5"
             data-strk-img-width="800"
             className="w-full h-full object-cover"
             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
             alt="Our Story"
           />
        </div>
        <div className="space-y-10">
          <div className="space-y-4">
             <h2 className="text-xs uppercase tracking-widest-extra text-velmora-charcoal/60">Our Story</h2>
             <h3 className="text-4xl font-serif italic lowercase leading-tight">thoughtfully designed,<br />ethically crafted.</h3>
          </div>
          <p className="text-velmora-charcoal/80 leading-relaxed text-sm md:text-base">
            Velmora was born from a desire for high-end jewelry that doesn't demand a mortgage. Each piece is crafted in gold vermeil or 18k plating, designed to transition effortlessly from morning coffee to evening cocktails.
          </p>
          <Link to="/about">
             <Button variant="outline">Learn More</Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-32 border-y border-velmora-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-16">
          {testimonials.map((t, i) => (
            <div key={i} className="flex-1 space-y-6 text-center md:text-left">
              <div className="flex justify-center md:justify-start space-x-1">
                {[...Array(5)].map((_, star) => (
                  <Star key={star} size={14} fill="#D4AF37" className="text-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-lg leading-relaxed italic">"{t.text}"</p>
              <p className="text-[10px] uppercase tracking-widest text-velmora-charcoal/60">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="bg-velmora-brandy/5 p-12 md:p-24 text-center space-y-10 border border-velmora-brandy/10">
           <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-widest-extra text-velmora-brandy">The Inner Circle</h2>
              <h3 className="text-4xl font-serif italic lowercase">join for 10% off your first order</h3>
           </div>
           <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="flex-grow bg-transparent border-b border-velmora-charcoal/20 py-3 text-xs tracking-widest outline-none focus:border-velmora-brandy transition-colors"
              />
              <Button variant="default" className="md:w-32">Submit</Button>
           </div>
           <p className="text-[10px] text-velmora-charcoal/40 uppercase tracking-widest max-w-sm mx-auto">
             Get exclusive access to new launches, private sales, and jewelry care tips.
           </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
