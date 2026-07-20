import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl text-primary text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-card-bg p-8 shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-accent fill-current' : 'text-border'}`} 
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-secondary leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/5 flex items-center justify-center">
                  <span className="font-serif text-sm text-primary">
                    {testimonial.initials}
                  </span>
                </div>
                <span className="text-sm font-medium text-primary">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;