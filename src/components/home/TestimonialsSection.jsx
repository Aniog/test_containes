import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} className="w-3.5 h-3.5" style={{ fill: '#C9A96E', color: '#C9A96E' }} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#1A1614' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-manrope text-xs tracking-widest uppercase mb-3" style={{ color: '#C9A96E' }}>
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light" style={{ color: '#FAF7F2' }}>
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="p-8 flex flex-col"
              style={{ border: '1px solid rgba(250,247,242,0.1)' }}
            >
              <StarRow />
              <blockquote
                className="font-cormorant text-lg italic leading-relaxed flex-1 mb-6"
                style={{ color: 'rgba(250,247,242,0.9)' }}
              >
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(201,169,110,0.2)' }}
                >
                  <span className="font-cormorant text-sm font-medium" style={{ color: '#C9A96E' }}>
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-manrope text-xs tracking-widest uppercase" style={{ color: 'rgba(250,247,242,0.5)' }}>
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
