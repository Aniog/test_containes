import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-ivory p-8 md:p-10 rounded relative">
      {/* Quote mark decoration */}
      <div className="absolute top-6 left-6 text-6xl text-champagne/20 font-serif leading-none">
        "
      </div>
      
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 star-filled fill-current"
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-mocha text-lg leading-relaxed mb-6 relative z-10">
        {testimonial.text}
      </blockquote>
      
      {/* Attribution */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
          <span className="font-serif text-velvet text-lg">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-medium text-velvet">{testimonial.name}</p>
          <p className="text-sm text-taupe">Purchased: {testimonial.product}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-champagne text-sm tracking-[0.3em] uppercase mb-4">
            Love Letters
          </p>
          <h2 className="font-serif text-section text-velvet mb-4">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
