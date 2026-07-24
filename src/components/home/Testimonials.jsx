import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="section-padding bg-espresso-900 text-cream-50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold-400 mb-2 block">
            Testimonials
          </span>
          <h2 className="text-heading text-cream-50">
            What Our Customers Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-espresso-800/50 rounded-lg p-8 relative"
            >
              <Quote className="w-8 h-8 text-gold-500/30 absolute top-4 right-4" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-gold-400 fill-current' : 'text-espresso-600'}`}
                  />
                ))}
              </div>
              
              <p className="font-sans text-body text-cream-200 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-sans text-sm font-medium text-cream-100">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-xs text-cream-400">
                    Verified Buyer
                  </p>
                </div>
                <span className="font-sans text-xs text-cream-500 bg-espresso-700 px-3 py-1 rounded-full">
                  {testimonial.product}
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
