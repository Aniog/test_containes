import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophie Laurent',
    role: 'Wedding Client',
    text: 'La Douceur made our wedding cake and it was absolutely stunning. Every guest asked where we got it. The flavors were incredible — we chose the lemon lavender and it was perfection.',
    rating: 5,
    initials: 'SL',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Birthday Order',
    text: 'Ordered the dark chocolate fudge cake for my daughter\'s birthday. She said it was the best cake she\'d ever had. The ganache drip was gorgeous and it tasted even better than it looked.',
    rating: 5,
    initials: 'MC',
  },
  {
    id: 3,
    name: 'Isabelle Moreau',
    role: 'Regular Customer',
    text: 'I\'ve been ordering from La Douceur for three years now. The quality is always consistent and the team is so warm and helpful. Their seasonal specials are always worth trying.',
    rating: 5,
    initials: 'IM',
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-24 px-6 bg-[#fdf6ee]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block text-rose-400 text-sm font-semibold tracking-widest uppercase mb-3">
          Reviews
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#3d2b1f] mb-4">
          What Our Customers Say
        </h2>
        <p className="text-[#7a5c4a] text-lg max-w-xl mx-auto">
          Don't just take our word for it — here's what our happy customers have to say.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-[#fffaf5] rounded-2xl border border-[#f0dcc8] p-8 shadow-md hover:shadow-xl transition-all duration-300 relative">
            <Quote className="absolute top-6 right-6 w-8 h-8 text-rose-100" />
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#d4a853] text-[#d4a853]" />
              ))}
            </div>
            <p className="text-[#7a5c4a] text-base leading-relaxed mb-6 italic">
              "{t.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-rose-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-[#3d2b1f] text-sm">{t.name}</p>
                <p className="text-[#7a5c4a] text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
