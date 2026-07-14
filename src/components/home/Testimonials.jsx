import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    initial: 'S',
    rating: 5,
    text: 'The quality exceeded my expectations. I receive compliments on my Velmora pieces constantly. The gold doesn\'t tarnish even after months of daily wear.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    initial: 'E',
    rating: 5,
    text: 'Finally found jewelry that\'s both elegant and affordable. The packaging itself feels luxurious — perfect for gifting. Already planning my next purchase!',
    product: 'Majestic Flora Nectar',
  },
  {
    id: 3,
    name: 'Jessica L.',
    initial: 'J',
    rating: 5,
    text: 'As someone with sensitive ears, I\'ve struggled to find comfortable earrings. Velmora\'s hypoallergenic pieces are a game-changer. Beautiful and comfortable.',
    product: 'Royal Heirloom Set',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-champagne text-xs tracking-[0.3em] uppercase mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-gray-900">
            Loved by Thousands
          </h2>
          <div className="divider-gold w-12 mx-auto mt-4" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 md:p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-champagne text-champagne"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-warm-gray-600 leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-champagne/20 flex items-center justify-center">
                  <span className="text-champagne font-medium text-sm">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-warm-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-warm-gray-400">
                    Purchased: {testimonial.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="mt-12 text-center">
          <p className="text-sm text-warm-gray-400">
            <span className="font-medium text-warm-gray-900">4.9</span> average rating from{' '}
            <span className="font-medium text-warm-gray-900">2,847</span> reviews
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
