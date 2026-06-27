import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: 'Absolutely love my Velmora pieces. The quality is outstanding for the price point, and they\'ve held up beautifully over months of daily wear.',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: 'I bought the Royal Heirloom Set as a gift for myself, and it\'s even more beautiful in person. The packaging made it feel so luxurious.',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: 'Finally, jewelry that doesn\'t irritate my sensitive skin! The hypoallergenic claim is real. I haven\'t taken off my huggies in weeks.',
      date: '3 weeks ago'
    }
  ];

  return (
    <section className="py-20 bg-[#F5F3F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl text-center mb-4">What Our Customers Say</h2>
        <p className="text-center text-[#9A9590] mb-12 tracking-wide">Real reviews from real customers</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-sm">
              <div className="flex text-[#C9A96E] mb-4">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="text-[#2C2C2C] mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#C9A96E] rounded-full flex items-center justify-center text-white font-serif">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-[#9A9590]">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
