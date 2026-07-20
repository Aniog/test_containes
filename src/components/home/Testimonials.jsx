import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sophia L.",
      text: "The quality of the Golden Sphere Huggies is breathtaking. They've become my daily staple.",
    },
    {
      id: 2,
      name: "Emma R.",
      text: "Velmora jewelry feels so premium but at such a fair price point. I'm obsessed with my new ear cuff.",
    },
    {
      id: 3,
      name: "Isabella M.",
      text: "The perfect gift! The packaging was editorial-level and the necklace was even more stunning in person.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Luminous Words</h2>
          <p className="uppercase-spaced text-[10px] text-zinc-500">From our Velmora community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="text-center space-y-6 px-4">
              <div className="flex justify-center gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="font-serif text-xl italic leading-relaxed text-zinc-800">
                "{review.text}"
              </p>
              <p className="uppercase-spaced text-[10px] text-zinc-500">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
