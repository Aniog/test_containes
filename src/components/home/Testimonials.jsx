import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      'The ARTITECT double folding machine transformed our production line. Precision is unmatched — we reduced scrap by 40% in the first month.',
    author: 'Michael Bauer',
    role: 'Production Manager',
    company: 'Bauer Metal Works, Germany',
  },
  {
    id: 2,
    quote:
      'Outstanding build quality and exceptional after-sales support. Our ARTITECT machine has been running 24/7 for three years without a single issue.',
    author: 'Sarah Chen',
    role: 'Operations Director',
    company: 'Pacific Fabrications, Australia',
  },
  {
    id: 3,
    quote:
      'We evaluated five manufacturers before choosing ARTITECT. The CNC control system is intuitive, and the folding accuracy is simply superior.',
    author: 'Carlos Mendez',
    role: 'Chief Engineer',
    company: 'Mendez Industrial, Mexico',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-sans text-xs font-semibold text-gold tracking-[0.3em] uppercase mb-4">
            Client Testimonials
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-navy mb-4">
            Trusted by Industry Leaders
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-border-subtle p-8 flex flex-col"
            >
              <Quote size={28} className="text-gold mb-6 flex-shrink-0" />
              <p className="font-sans text-steel leading-relaxed text-sm flex-1 mb-8 italic">
                "{t.quote}"
              </p>
              <div className="border-t border-border-subtle pt-6">
                <p className="font-sans font-semibold text-navy text-sm">{t.author}</p>
                <p className="font-sans text-xs text-steel-light mt-1">{t.role}</p>
                <p className="font-sans text-xs text-gold mt-0.5">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
