import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'I bought the Amber Lace earrings for a wedding and they were absolutely stunning. The craftsmanship is incredible for the price — I received so many compliments.',
    rating: 5,
    product: 'Amber Lace Earrings',
  },
  {
    id: 2,
    name: 'Emma K.',
    text: 'The Golden Sphere Huggies are my everyday go-to. Comfortable enough to sleep in, elegant enough for a night out. Already on my third pair as gifts for friends.',
    rating: 5,
    product: 'Golden Sphere Huggies',
  },
  {
    id: 3,
    name: 'Priya D.',
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging alone felt luxurious, and the jewelry inside was even more beautiful than the photos.',
    rating: 5,
    product: 'Royal Heirloom Set',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-velmora-bg-alt py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold-dark mb-3">
            Love Letters
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-text-dark font-light">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 md:p-10 border border-velmora-border-light"
            >
              <Quote size={24} className="text-velmora-gold mb-4 opacity-40" strokeWidth={1} />
              
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < review.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border-light'}
                  />
                ))}
              </div>

              <p className="text-sm text-velmora-text-dark-muted leading-relaxed mb-6">
                "{review.text}"
              </p>

              <div className="border-t border-velmora-border-light pt-4">
                <p className="text-xs font-medium tracking-[0.1em] uppercase text-velmora-text-dark">
                  {review.name}
                </p>
                <p className="text-xs text-velmora-text-dark-muted mt-1">
                  Verified buyer · {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
