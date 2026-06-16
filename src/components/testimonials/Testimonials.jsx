import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Torres',
    company: 'Pacific Steel Fabrication',
    role: 'Production Manager',
    text: 'The ARTITECT double folding machine transformed our production line. We reduced setup times by 60% and the precision is absolutely consistent. Best investment we have made in years.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    company: 'BuildRight Manufacturing',
    role: 'Operations Director',
    text: 'We evaluated five different brands before choosing ARTITECT. The build quality, accuracy, and after-sales support are simply in a class of their own. Highly recommended for any serious fabrication shop.',
    rating: 5,
  },
  {
    name: 'James Anderson',
    company: 'AeroSheet Industries',
    role: 'Chief Engineer',
    text: 'For aerospace-grade tolerances, there is no compromise. The CNC metal folding machine from ARTITECT delivers the precision our contracts demand, every single time without exception.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-surface-50">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold text-brand-gold uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy mb-6">
            Trusted by{' '}
            <span className="text-brand-gold">Professionals</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Hear from the fabricators and manufacturers who rely on
            ARTITECT machinery every day to deliver exceptional results.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 rounded-2xl border border-surface-200 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-brand-gold/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-surface-200 pt-4">
                <div className="font-bold text-brand-navy text-sm">{t.name}</div>
                <div className="text-xs text-brand-gold font-medium">{t.role}</div>
                <div className="text-xs text-slate-400">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
