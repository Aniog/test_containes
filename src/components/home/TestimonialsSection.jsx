const testimonials = [
  {
    id: 1,
    quote:
      'The ARTITECT double folding machine transformed our production line. Precision is unmatched and the support team is outstanding.',
    author: 'Michael Torres',
    role: 'Production Manager',
    company: 'SteelCraft Industries',
  },
  {
    id: 2,
    quote:
      'We have been using ARTITECT sheet metal folders for over 10 years. Reliability and accuracy are second to none in the industry.',
    author: 'Sarah Müller',
    role: 'Head of Fabrication',
    company: 'EuroMetal GmbH',
  },
  {
    id: 3,
    quote:
      'From the initial consultation to after-sales support, ARTITECT MACHINERY exceeded every expectation. Highly recommended.',
    author: 'James Okafor',
    role: 'Operations Director',
    company: 'Precision Fab Co.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-brand-steel py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-brand-gold text-xs uppercase tracking-widest mb-3">
            Customer Stories
          </p>
          <h2 className="font-playfair font-bold text-brand-white text-4xl md:text-5xl mb-4">
            Trusted by Industry Leaders
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-brand-navy/60 border border-brand-steel hover:border-brand-gold/40 rounded-sm p-8 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="font-playfair text-brand-gold text-5xl leading-none mb-4 select-none">"</div>
              <p className="font-inter text-brand-silver text-sm leading-relaxed mb-6 italic">
                {t.quote}
              </p>
              <div className="border-t border-brand-steel pt-5">
                <p className="font-inter font-semibold text-brand-white text-sm">{t.author}</p>
                <p className="font-inter text-brand-silver text-xs mt-0.5">{t.role}</p>
                <p className="font-inter text-brand-gold text-xs mt-0.5">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
