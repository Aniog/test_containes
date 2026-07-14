import { testimonials } from '@/data/products';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

function TestimonialsSection() {
  return (
    <section className="py-20 md:py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            What Our Customers Say
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Real stories from women who wear Velmora every day
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                'bg-secondary p-8 relative',
                'animate-slide-up'
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Mark */}
              <div className="absolute top-4 right-6 text-6xl font-serif text-accent/20 leading-none">
                &ldquo;
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="font-serif text-lg italic text-text-primary leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="font-medium text-accent">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {testimonial.product}
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

export default TestimonialsSection;
