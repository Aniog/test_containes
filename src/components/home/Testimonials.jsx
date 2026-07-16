import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'I wear my Golden Sphere Huggies every single day. They haven\'t tarnished at all — still look brand new after 3 months. The quality is incredible for the price.',
    rating: 5,
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging was beautiful and she absolutely loved it. Will definitely be back for more.',
    rating: 5,
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica L.',
    text: 'The Majestic Flora necklace is even more stunning in person. The crystals catch the light so beautifully. I get compliments every time I wear it.',
    rating: 5,
    product: 'Majestic Flora Nectar',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-label text-gold-500 mb-4">Reviews</p>
          <h2 className="heading-section text-charcoal-800">What Our Customers Say</h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-cream-50 border border-charcoal-100 p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <Quote size={28} className="text-gold-300 mx-auto mb-5" />

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-charcoal-600 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="divider mb-5" />
              <p className="font-medium text-charcoal-800 text-sm">{testimonial.name}</p>
              <p className="text-xs text-charcoal-400 mt-1">{testimonial.product}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
