import { Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="section-padding bg-warm-off">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="gold-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            What Our Customers Say
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            Real feedback from fabricators who rely on ARTITECT machines every day.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-stone-200 p-8 relative hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-amber/20 mb-4" />
              <blockquote className="text-stone-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="border-t border-stone-100 pt-4">
                <p className="font-semibold text-charcoal text-sm">{testimonial.author}</p>
                <p className="text-stone-400 text-xs">{testimonial.role}</p>
                <p className="text-amber text-xs font-medium">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
