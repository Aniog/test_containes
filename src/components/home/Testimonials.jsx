import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      initial: 'S',
      rating: 5,
      text: 'Absolutely love my Velmora pieces. The quality is outstanding and they look so elegant. I get compliments every time I wear them!'
    },
    {
      id: 2,
      name: 'Emily R.',
      initial: 'E',
      rating: 5,
      text: 'Bought the Royal Heirloom Set as a gift for myself and it was the best decision. The packaging is beautiful and the jewelry is even more stunning in person.'
    },
    {
      id: 3,
      name: 'Jessica L.',
      initial: 'J',
      rating: 5,
      text: 'Finally found a brand that makes demi-fine jewelry that actually lasts. No tarnishing after months of wear. Will definitely be buying more!'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light tracking-[0.1em] text-gray-900 font-['Cormorant_Garamond']">
            What Our Customers Say
          </h2>
          <div className="mt-4 w-16 h-px bg-amber-700 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-700 text-lg">★</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6 italic font-['Cormorant_Garamond'] text-lg">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-800 font-semibold text-sm">
                    {testimonial.initial}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-900">
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
