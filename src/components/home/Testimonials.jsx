import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Sarah", initial: "L.", text: "Absolutely stunning. The Golden Sphere Huggies have become my daily signature piece. The quality is exceptional for the price." },
    { name: "Eleanor", initial: "W.", text: "I bought the Royal Heirloom Set as a gift for myself and I couldn't be happier. The packaging felt so premium." },
    { name: "Maya", initial: "K.", text: "Beautifully understated. Velmora pieces hit that perfect balance between modern and timeless. I'm obsessed." }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F9F7F2] border-y border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#A68A56" className="text-[#A68A56]" />
                ))}
              </div>
              <p className="font-serif italic text-lg leading-relaxed text-[#1C1C1C]">
                "{review.text}"
              </p>
              <span className="text-xs uppercase tracking-[0.2em] text-[#888888]">
                {review.name} {review.initial}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
