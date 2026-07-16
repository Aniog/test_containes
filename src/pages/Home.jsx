import React from 'react';
import Hero from '@/components/home/Hero';
import Bestsellers from '@/components/home/Bestsellers';
import UGCReel from '@/components/home/UGCReel';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah L.', text: 'The quality of these huggies is incredible for the price. I wear them every day and the gold hasn\'t faded at all.' },
    { name: 'Emma M.', text: 'Absolutely stunned by the packaging and the weight of the necklace. It feels so much more expensive than it is.' },
    { name: 'Olivia R.', text: 'Velmora is my new go-to for gifting. Every piece I\'ve bought has been received with so much love.' },
  ];

  return (
    <section className="py-24 bg-white border-y">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {reviews.map((review, i) => (
            <div key={i} className="space-y-6">
              <div className="flex justify-center space-x-1 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="font-serif italic text-lg text-stone-700 leading-relaxed px-4">
                "{review.text}"
              </p>
              <p className="text-[10px] tracking-[0.2em] font-medium uppercase text-muted-foreground">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-accent/5">
      <div className="max-w-4xl mx-auto bg-primary text-primary-foreground p-12 md:p-20 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif">Join the Inner Circle</h2>
          <p className="text-sm tracking-[0.1em] font-light max-w-sm mx-auto opacity-80 leading-relaxed">
            Receive exclusive early access to new collections and 10% off your first order.
          </p>
        </div>
        <form className="flex flex-col md:flex-row max-w-md mx-auto gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-transparent border-b border-stone-500 py-3 text-sm focus:outline-none focus:border-accent text-white placeholder:text-stone-400 font-serif"
            required
          />
          <button
            type="submit"
            className="bg-white text-primary px-8 py-3 text-[10px] tracking-[0.2em] font-medium uppercase hover:bg-accent hover:text-white transition-all duration-300"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <main className="animate-in fade-in duration-700">
      <Hero />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
