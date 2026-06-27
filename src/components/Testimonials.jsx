import { Star } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Sarah', initial: 'S', rating: 5, text: 'Absolutely love my Vivid Aura earrings! The quality is incredible and they look so elegant.' },
  { id: 2, name: 'Emily', initial: 'E', rating: 5, text: 'The Royal Heirloom Set was the perfect gift. Beautiful packaging and stunning pieces.' },
  { id: 3, name: 'Jessica', initial: 'J', rating: 5, text: 'I get compliments every time I wear my Majestic Flora necklace. Truly special jewelry.' },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">What Our Customers Say</h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-velmora-cream p-8 text-center">
            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={18} className="text-velmora-gold fill-velmora-gold" />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-600 mb-6 italic font-serif leading-relaxed">
              "{testimonial.text}"
            </p>

            {/* Customer */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-velmora-gold text-white flex items-center justify-center font-serif">
                {testimonial.initial}
              </div>
              <span className="font-serif text-sm uppercase tracking-wider">
                {testimonial.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
