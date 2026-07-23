import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="velmora-section">
      <div className="velmora-container mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--velmora-accent)' }}>
            Kind Words
          </p>
          <h2 className="velmora-heading text-3xl md:text-4xl lg:text-5xl mb-4" style={{ color: 'var(--velmora-text)' }}>
            What Our Customers Say
          </h2>
          <div className="velmora-divider-thin w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="text-center p-8 rounded-lg"
              style={{ backgroundColor: 'var(--velmora-surface)', border: '1px solid var(--velmora-border-light)' }}
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4"
                    fill="var(--velmora-star)"
                    style={{ color: 'var(--velmora-star)' }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base leading-relaxed mb-6 italic" style={{ color: 'var(--velmora-text-muted)', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.125rem' }}>
                "{t.text}"
              </p>

              {/* Author */}
              <p className="text-sm font-medium" style={{ color: 'var(--velmora-text)' }}>
                {t.name}
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--velmora-text-light)' }}>
                Verified Customer
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
