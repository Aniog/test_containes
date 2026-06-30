import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-container py-16 md:py-24">
      <div className="text-center mb-12">
        <p className="text-gold-500 text-xs uppercase tracking-extra-wide mb-3">
          What Our Customers Say
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-warm-800">
          Loved by Thousands
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="bg-white p-8 shadow-card border border-pearl/50"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Stars */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-gold-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-warm-700 text-sm leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center">
                <span className="text-gold-600 font-medium text-sm">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-warm-800 font-medium text-sm">
                  {testimonial.name}
                </p>
                <p className="text-warm-500 text-xs">
                  on {testimonial.product}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
