const testimonials = [
  {
    id: 1,
    name: 'Sarah',
    initial: 'S',
    rating: 5,
    text: 'Absolutely love my Velmora pieces. The quality is exceptional and they\'ve become my everyday staples. Worth every penny.',
    location: 'New York, NY',
  },
  {
    id: 2,
    name: 'Emily',
    initial: 'E',
    rating: 5,
    text: 'I\'ve received so many compliments on my necklace. The gold tone is perfect and hasn\'t faded at all. Highly recommend!',
    location: 'Los Angeles, CA',
  },
  {
    id: 3,
    name: 'Jessica',
    initial: 'J',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift to myself and it\'s stunning. The packaging made it feel so luxurious.',
    location: 'Chicago, IL',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider text-velmora-text mb-4">
            What Our Customers Say
          </h2>
          <div className="w-16 h-[1px] bg-velmora-gold mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-cream p-8 md:p-10 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center mb-4 space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-velmora-gold text-lg">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-base leading-relaxed text-velmora-text-secondary mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="text-velmora-gold font-serif text-lg">
                    {testimonial.initial}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-serif text-sm tracking-wider uppercase text-velmora-text">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-velmora-text-secondary">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
