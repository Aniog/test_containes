import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 'test-1',
    name: 'Michael Hartmann',
    role: 'Production Manager',
    company: 'Hartmann Metal Works',
    quote: 'The double folding machine from Artitect transformed our production line. Precision is outstanding and the build quality is second to none.',
  },
  {
    id: 'test-2',
    name: 'Sarah Chen',
    role: 'Operations Director',
    company: 'Pacific Fabrication Co.',
    quote: 'We have been using Artitect sheet metal folders for 8 years. Reliability and after-sales support are exceptional. Highly recommended.',
  },
  {
    id: 'test-3',
    name: 'Roberto Alvarez',
    role: 'Chief Engineer',
    company: 'Alvarez Industrial',
    quote: 'Artitect machines deliver consistent results every time. The metal folding machine we purchased has exceeded all our performance expectations.',
  },
];

export default function HomeTestimonials() {
  return (
    <section className="bg-brand-offwhite py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-6 h-px bg-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">Testimonials</span>
            <div className="w-6 h-px bg-brand-gold" />
          </div>
          <h2 className="text-4xl font-bold text-brand-navy mb-3">Trusted by Industry Leaders</h2>
          <p className="text-brand-gray max-w-md mx-auto">
            Hear from the professionals who rely on Artitect Machinery every day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-brand-white rounded-2xl p-8 border border-brand-light shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="w-8 h-8 text-brand-gold/40 mb-4" />
              <p className="text-brand-navy text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-brand-light">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
                  <span className="text-brand-gold font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <div className="text-brand-navy font-semibold text-sm">{t.name}</div>
                  <div className="text-brand-gray text-xs">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
