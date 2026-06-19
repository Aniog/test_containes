import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'I bought the Golden Sphere Huggies as a treat for myself and I have not taken them off since. The quality is incredible for the price — they look and feel so much more expensive.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'Gifted the Royal Heirloom Set to my best friend for her birthday. The packaging was beautiful and she absolutely loved it. Already planning my next order.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya K.',
    text: 'The Amber Lace Earrings are stunning in person. So lightweight and the gold tone is warm and rich. I get compliments every time I wear them. Velmora is my new go-to.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream-200">
      <div className="max-w-[1400px] mx-auto section-padding">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="divider-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-400 tracking-wide mb-3">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream-50 p-8 md:p-10 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-charcoal-100 leading-relaxed mb-6 italic font-serif text-base">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Name */}
              <p className="text-xs uppercase tracking-widest-xl text-charcoal-50 font-sans font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
