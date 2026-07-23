import StarIcon from '@/components/ui/StarIcon';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 border-t border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-brand-espresso">What They Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-white p-8 md:p-10 border border-brand-sand/50">
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" filled />
                ))}
              </div>
              <p className="text-sm text-brand-charcoal leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs text-brand-muted mt-4 font-medium tracking-wide uppercase">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
