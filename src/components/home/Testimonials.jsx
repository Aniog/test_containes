import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-3">Loved by Thousands</h2>
          <p className="font-sans text-sm text-brand-text-secondary max-w-md mx-auto">
            Real words from real customers who wear Velmora every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-brand-surface border border-brand-border-light rounded-sm p-6 md:p-8 card-hover"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-accent fill-brand-accent" />
                ))}
              </div>
              <p className="font-sans text-sm text-brand-text-secondary leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-sans text-xs font-medium text-brand-text uppercase tracking-wider">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}