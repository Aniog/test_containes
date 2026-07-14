import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'I bought the Golden Sphere Huggies for myself and ended up ordering two more pairs as gifts. They look so much more expensive than they are.',
    rating: 5,
    product: 'Golden Sphere Huggies',
  },
  {
    name: 'Jessica L.',
    text: 'The Royal Heirloom Set arrived in the most beautiful packaging. My mum cried when she opened it. Velmora is my go-to for gifting now.',
    rating: 5,
    product: 'Royal Heirloom Set',
  },
  {
    name: 'Amara K.',
    text: 'Finally, gold jewelry I can wear every day without turning green. The quality is incredible for the price point. Already eyeing the Amber Lace Earrings.',
    rating: 5,
    product: 'Golden Sphere Huggies',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title mb-3">What Our Customers Say</h2>
          <p className="section-subtitle">Real reviews from real Velmora women.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-sand-50 p-6 md:p-8 border border-espresso/5"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-sm text-espresso/70 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-sans text-sm font-medium text-espresso">{t.name}</p>
                <p className="font-sans text-[11px] text-espresso/40 mt-0.5">
                  on {t.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
