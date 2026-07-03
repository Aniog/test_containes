import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: "I absolutely love my Velmora pieces. The quality is outstanding for the price point, and I get compliments every time I wear them.",
      product: 'Vivid Aura Jewels',
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: "Finally, jewelry that doesn't irritate my sensitive skin! The hypoallergenic claim is real. Beautiful pieces that I wear daily.",
      product: 'Golden Sphere Huggies',
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: "Purchased the Royal Heirloom Set as a gift for myself, and it was the best decision. The packaging made it feel so luxurious.",
      product: 'Royal Heirloom Set',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif-display text-4xl md:text-5xl mb-4">What Our Customers Say</h2>
          <p className="text-[#6B6560] text-lg">Real reviews from real customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#F8F5F0] p-8 rounded-lg hover-lift"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#B8860B]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#2A2520] mb-6 italic">"{testimonial.text}"</p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#B8860B] text-white flex items-center justify-center font-medium">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-[#6B6560]">Verified Buyer</p>
                </div>
              </div>

              {/* Product Reference */}
              <p className="text-xs text-[#6B6560] mt-4 pt-4 border-t border-[#D4CFC8]/50">
                Purchased: {testimonial.product}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
