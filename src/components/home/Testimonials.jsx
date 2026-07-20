import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah L.', text: 'Absolutely love my Golden Sphere Huggies! They look so much more expensive than they are. The quality is exceptional.' },
    { name: 'Emma R.', text: 'The Royal Heirloom Set was the perfect gift for my bridesmaid. The packaging was beautiful and she wears it every day!' },
    { name: 'Chloe M.', text: 'Finally found jewelry that doesn\'t irritate my sensitive ears. Velmora pieces are both stunning and comfortable.' }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl font-serif">Loved by our Community</h2>
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <div key={index} className="text-center space-y-6 flex flex-col items-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="font-serif italic text-lg line-clamp-3">"{review.text}"</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
EOF > /workspace/my-app/src/components/home/Testimonials.jsx
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah L.', text: 'Absolutely love my Golden Sphere Huggies! They look so much more expensive than they are. The quality is exceptional.' },
    { name: 'Emma R.', text: 'The Royal Heirloom Set was the perfect gift for my bridesmaid. The packaging was beautiful and she wears it every day!' },
    { name: 'Chloe M.', text: 'Finally found jewelry that doesn\'t irritate my sensitive ears. Velmora pieces are both stunning and comfortable.' }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl font-serif">Loved by our Community</h2>
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <div key={index} className="text-center space-y-6 flex flex-col items-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="font-serif italic text-lg line-clamp-3">"{review.text}"</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
