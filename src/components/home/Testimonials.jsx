import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'I ordered the Golden Sphere Huggies and they are absolutely stunning. The quality is incredible for the price — they look and feel so much more expensive than they are. I haven\'t taken them off since they arrived!',
  },
  {
    name: 'Emily K.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for my best friend\'s birthday. The packaging was beautiful and the jewelry inside was even more gorgeous. She cried happy tears. Will definitely be ordering again.',
  },
  {
    name: 'Jessica L.',
    rating: 5,
    text: 'As someone with very sensitive skin, I\'m always nervous about jewelry. The hypoallergenic promise is real — I\'ve worn these earrings every day for a month with zero irritation. The quality is remarkable.',
  },
];

export default function Testimonials() {
  return (
    <section className="velmora-section bg-cream">
      <div className="velmora-container">
        <div className="text-center mb-12 md:mb-16">
          <p className="velmora-overline mb-3">Love Letters</p>
          <h2 className="font-serif text-heading-2 md:text-heading-1 text-velvet-900">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="velmora-card p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-sm text-velvet-600 leading-relaxed flex-1 mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="font-serif text-base font-semibold text-gold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-sans text-sm font-medium text-velvet-800">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
