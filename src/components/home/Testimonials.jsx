import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'I\'ve been wearing my Golden Sphere Huggies every day for three months and they still look brand new. The quality is incredible for the price.',
    rating: 5,
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emma K.',
    text: 'The Majestic Flora Nectar necklace is absolutely stunning. I get compliments every time I wear it. Perfect for gifting — my sister loved hers!',
    rating: 5,
    product: 'Majestic Flora Nectar',
  },
  {
    id: 3,
    name: 'Olivia R.',
    text: 'I ordered the Royal Heirloom Set as a birthday gift for myself and it exceeded all expectations. The packaging is beautiful and the jewelry is exquisite.',
    rating: 5,
    product: 'Royal Heirloom Set',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-[10px] uppercase tracking-widest-2xl text-velmora-gold mb-3">
            Loved by Many
          </p>
          <h2 className="font-serif text-3xl lg:text-heading-2 text-velmora-charcoal mb-4">
            What Our Customers Say
          </h2>
          <div className="section-divider" />
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded shadow-soft relative"
            >
              <Quote className="w-8 h-8 text-velmora-gold/20 absolute top-6 right-6" />
              
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-sand'
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm text-velmora-stone leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="border-t border-velmora-linen pt-4">
                <p className="font-serif text-base text-velmora-charcoal">{testimonial.name}</p>
                <p className="text-xs text-velmora-taupe mt-0.5">Purchased: {testimonial.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
