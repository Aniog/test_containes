import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="py-20 bg-velmora-creamDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-dark">What Our Clients Say</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-sm shadow-sm text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-muted'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-velmora-textLight italic mb-6">"{testimonial.text}"</p>

              {/* Author */}
              <p className="font-serif text-lg text-velmora-dark">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;