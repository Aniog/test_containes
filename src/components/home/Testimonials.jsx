import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alexandra M.',
    initial: 'A',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies. Worth every penny!',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Jessica R.',
    initial: 'J',
    rating: 5,
    text: 'Finally found jewelry that\'s elegant without being too expensive. The Majestic Flora Nectar is my absolute favorite piece.',
    product: 'Majestic Flora Nectar',
  },
  {
    id: 3,
    name: 'Olivia K.',
    initial: 'O',
    rating: 5,
    text: 'The gift box set was absolutely perfect for my best friend\'s birthday. The packaging alone made it feel luxurious.',
    product: 'Royal Heirloom Set',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-champagne-600 mb-3">
            Love Letters
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-8 shadow-sm border border-champagne-100"
            >
              {/* Avatar & Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-champagne-200 flex items-center justify-center">
                  <span className="font-serif text-charcoal-900 font-medium">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="font-sans font-semibold text-charcoal-900 text-sm">
                    {testimonial.name}
                  </p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-champagne-500 text-champagne-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Quote */}
              <p className="font-serif text-charcoal-700 italic leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              <p className="font-sans text-xs text-charcoal-500 uppercase tracking-wide">
                Purchased: {testimonial.product}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
