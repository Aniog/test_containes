import React from 'react';
import { Star, User } from 'lucide-react';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">What Our Customers Say</h2>
        <div className="w-16 h-px bg-gray-300 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Stars */}
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "{testimonial.text}"
            </p>

            {/* Customer Info */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <span className="text-sm font-medium text-gray-600">
                  {testimonial.initial}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium">{testimonial.name}</p>
                <p className="text-xs text-gray-500">
                  {new Date(testimonial.date).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;