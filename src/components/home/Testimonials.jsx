import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: rating }).map((_, i) => (
      <Star
        key={i}
        className="w-4 h-4 fill-velmora-gold text-velmora-gold"
      />
    ));
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-velmora-gold text-sm tracking-ultrawide uppercase">
            Love Letters
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream mt-3">
            What Our Customers Say
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-espresso p-8 rounded-lg border border-velmora-taupe/20"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <p className="text-velmora-sand leading-relaxed mb-6 italic font-serif text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-velmora-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-velmora-gold font-serif text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="text-velmora-cream font-medium">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
