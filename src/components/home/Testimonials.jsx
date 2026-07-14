import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Emma',
      initial: 'L',
      review: "Absolutely stunning pieces. The weight and shine feel so much more premium than the price point suggests. I haven't taken off my huggies since they arrived.",
    },
    {
      name: 'Isabella',
      initial: 'M',
      review: "The packaging was like opening an editor's gift box. The necklace is delicate yet feels sturdy. Definitely my new go-to for gifting.",
    },
    {
      name: 'Sophia',
      initial: 'V',
      review: "Love the quiet luxury vibe. The gold tone is perfectly balanced—not too yellow, just a rich, warm glow that flatters everything.",
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="text-center mb-16">
        <h2 id="testimonials-title" className="text-3xl font-serif mb-4">What Our Clients Say</h2>
        <div className="flex justify-center space-x-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {reviews.map((rev, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-8 bg-velmora-bg border border-transparent hover:border-velmora-border transition-all duration-500">
            <p className="text-sm md:text-base font-serif italic mb-8 leading-relaxed text-velmora-fg">
              &ldquo;{rev.review}&rdquo;
            </p>
            <div className="mt-auto">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-velmora-fg">
                {rev.name} {rev.initial}.
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
