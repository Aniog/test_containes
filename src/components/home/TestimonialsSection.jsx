import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael Chen',
    role: 'Production Manager',
    company: 'SteelWorks Inc.',
    content: 'The double folding machine from Artitect has transformed our production line. Precision and reliability are outstanding.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Operations Director',
    company: 'MetalCraft Solutions',
    content: 'We have been using Artitect machinery for over 10 years. The quality and support are unmatched in the industry.',
    rating: 5,
  },
  {
    id: 3,
    name: 'David Martinez',
    role: 'Workshop Owner',
    company: 'Precision Fabrication',
    content: 'The sheet metal folder exceeded our expectations. Easy to use, accurate, and built to last. Highly recommended.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block bg-blue-600/20 text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Trusted by manufacturers worldwide for quality and reliability.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 hover:border-blue-500/50 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-700">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 pt-12 border-t border-slate-800">
          <p className="text-xl text-slate-300 mb-6">
            Ready to experience the Artitect difference?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-blue-600/25"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
