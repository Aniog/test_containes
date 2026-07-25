import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: "I never take my Velmora huggies off. They've survived workouts, showers, and still look brand new. Truly demi-fine quality.",
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: "The perfect gift for myself. The packaging is so beautiful, I almost didn't want to open it. The jewelry is even more stunning in person.",
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: "Finally, gold jewelry that doesn't irritate my sensitive ears. Velmora's hypoallergenic promise is real. I'm a customer for life.",
      date: '3 weeks ago'
    }
  ];
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
          Loved by Our Community
        </h2>
        <div className="w-16 h-px bg-accent mx-auto" />
      </div>
      
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Stars */}
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-accent text-xl">★</span>
              ))}
            </div>
            
            {/* Text */}
            <p className="text-gray-600 leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </p>
            
            {/* Customer Info */}
            <div className="flex items-center space-x-3">
              {/* Avatar with Initial */}
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                <span className="font-serif text-lg text-gray-700">
                  {testimonial.initial}
                </span>
              </div>
              <div>
                <p className="font-medium text-sm">{testimonial.name}</p>
                <p className="text-xs text-gray-400">{testimonial.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
