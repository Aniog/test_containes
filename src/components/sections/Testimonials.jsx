import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah',
    initial: 'S',
    rating: 5,
    text: 'Absolutely love my Vivid Aura ear cuff! The quality is incredible for the price point. I get compliments every time I wear it.',
    location: 'New York, NY'
  },
  {
    id: 2,
    name: 'Emily',
    initial: 'E',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect gift for my sister. The packaging is so beautiful, and the pieces are even more stunning in person.',
    location: 'Los Angeles, CA'
  },
  {
    id: 3,
    name: 'Michaela',
    initial: 'M',
    rating: 5,
    text: 'Finally, jewelry that doesn\'t irritate my sensitive skin! The hypoallergenic claim is real. I haven\'t taken off my Golden Sphere Huggies in weeks.',
    location: 'Chicago, IL'
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-velmora">
        <div className="text-center mb-16">
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <h2 className="heading-serif text-4xl mb-4">Loved by Our Community</h2>
          <p className="body-text max-w-2xl mx-auto">
            Real reviews from real customers who have made Velmora part of their everyday.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 border border-border hover:border-gold/50 transition-colors duration-500"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="body-text mb-6 italic">"{testimonial.text}"</p>

              {/* Customer */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-cream-dark flex items-center justify-center">
                  <span className="text-gold font-serif text-lg">{testimonial.initial}</span>
                </div>
                <div>
                  <p className="font-medium text-charcoal">{testimonial.name}</p>
                  <p className="text-sm text-warm-gray">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
