import React from 'react';
import { Star } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      initial: "S",
      rating: 5,
      text: "Absolutely love my Vivid Aura ear cuff! The quality is amazing for the price point. I get compliments every time I wear it."
    },
    {
      id: 2,
      name: "Emily R.",
      initial: "E",
      rating: 5,
      text: "The Majestic Flora necklace is even more beautiful in person. Delicate, elegant, and perfect for everyday wear."
    },
    {
      id: 3,
      name: "Jessica L.",
      initial: "J",
      rating: 5,
      text: "Bought the Golden Sphere Huggies as a gift for myself and I'm obsessed. They're so comfortable and look expensive!"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="font-serif text-3xl tracking-wider uppercase text-center mb-12">
        What Our Customers Say
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-white p-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">{testimonial.initial}</span>
              </div>
              <span className="font-medium">{testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
