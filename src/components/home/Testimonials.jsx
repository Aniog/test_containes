import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah L.', text: 'The quality of the Golden Sphere Huggies is incredible. I wear them every day and they still look brand new.' },
    { name: 'Elena M.', text: 'Velmora has become my go-to for gifts. The packaging is as beautiful as the jewelry itself.' },
    { name: 'Jessica K.', text: 'Finally, jewelry that doesn’t irritate my sensitive skin. The 18K gold plating is truly hypoallergenic.' },
  ];

  return (
    <section className="py-24 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4 text-center">Loved by Our Community</h2>
          <div className="flex justify-center gap-1">
             {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-6">
              <p className="font-serif text-xl md:text-2xl leading-relaxed italic text-zinc-700">
                "{review.text}"
              </p>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
                {review.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
