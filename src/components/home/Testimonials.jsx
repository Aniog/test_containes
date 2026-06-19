import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section bg-[#1A1A1A] text-[#FDFCFA]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-3">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center p-8 border border-[#9A9A9A]/20"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < testimonial.rating ? 'text-[#C9A962]' : 'text-[#9A9A9A]'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg text-white/90 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#C9A962] text-[#1A1A1A] text-sm font-medium flex items-center justify-center">
                  {testimonial.initials}
                </span>
                <span className="text-sm text-white/70">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}