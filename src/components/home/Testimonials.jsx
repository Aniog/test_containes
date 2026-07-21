import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: 'I absolutely love my Velmora pieces. The quality is outstanding for the price point, and I get compliments every time I wear them.',
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: 'Bought the Royal Heirloom Set as a gift for myself and it was the best decision. The packaging made it feel so luxurious.',
    },
    {
      id: 3,
      name: 'Maria',
      initial: 'M',
      rating: 5,
      text: 'Finally, jewelry that doesn\'t irritate my sensitive skin! The hypoallergenic claim is real. Will definitely be buying more.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl lg:text-4xl mb-4">What Our Customers Say</h2>
        <div className="w-16 h-px bg-[#8B7355] mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-[#FAF8F5] p-8 lg:p-10 border border-[#E8E0D8] hover:shadow-premium transition-shadow duration-300"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-[#8B7355]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-[#2A2520] leading-relaxed mb-8 italic">
              "{testimonial.text}"
            </p>

            {/* Customer Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B7355] rounded-full flex items-center justify-center text-[#FAF8F5] font-serif">
                {testimonial.initial}
              </div>
              <span className="font-serif text-sm tracking-wider uppercase">
                {testimonial.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
