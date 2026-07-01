const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: "I haven't taken off my Golden Sphere Huggies since they arrived. The quality is incredible for the price point.",
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: 'The Majestic Flora necklace is even more beautiful in person. Packaging was gorgeous too - perfect gift.',
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: "Finally, jewelry that doesn't irritate my sensitive ears. Velmora has become my go-to brand.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide font-serif text-gray-900 mb-2">
            Loved by Our Community
          </h2>
          <div className="w-16 h-px bg-amber-700 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 space-y-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-700">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 font-light leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-light">{testimonial.initial}</span>
                </div>
                <span className="text-sm font-light text-gray-900">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
