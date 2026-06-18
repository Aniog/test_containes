import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily R.',
    role: 'Birthday Celebration',
    rating: 5,
    quote:
      'The Red Velvet Dream was absolutely stunning — and even better tasting! My guests couldn\'t stop talking about it. Will definitely order again.',
    initials: 'ER',
  },
  {
    name: 'James & Sophie',
    role: 'Wedding Day',
    rating: 5,
    quote:
      'Sweet Crumbs made our wedding cake a true centerpiece. The ivory rose design was exactly what we envisioned, and the vanilla bean flavor was divine.',
    initials: 'JS',
  },
  {
    name: 'Priya M.',
    role: 'Corporate Event',
    rating: 5,
    quote:
      'Ordered a custom cake for our office party. The team was so helpful with the design, and it arrived perfectly on time. Absolutely delicious!',
    initials: 'PM',
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-[#f9a825] text-[#f9a825]" />
    ))}
  </div>
);

const Testimonials = () => (
  <section id="testimonials" className="py-20 px-4 md:px-8 bg-[#fdf6f0]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-block bg-[#fce4ec] text-[#c2185b] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          Reviews
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#2d1b0e] mb-4">
          What Our Customers Say
        </h2>
        <p className="text-[#9e7b6b] max-w-xl mx-auto leading-relaxed">
          Real stories from real cake lovers. We take pride in every slice we deliver.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white border border-[#f0ddd4] rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow flex flex-col"
          >
            <StarRating count={t.rating} />
            <blockquote className="mt-4 text-[#5c3d2e] leading-relaxed text-sm flex-1">
              "{t.quote}"
            </blockquote>
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#f0ddd4]">
              <div className="w-10 h-10 rounded-full bg-[#fce4ec] flex items-center justify-center text-[#c2185b] font-bold text-sm">
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-[#2d1b0e] text-sm">{t.name}</p>
                <p className="text-xs text-[#9e7b6b]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
