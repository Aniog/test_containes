const testimonials = [
  {
    id: 1,
    quote:
      "The ARTITECT double folding machine transformed our production line. Accuracy is exceptional and the support team is always responsive.",
    author: "Michael T.",
    role: "Production Manager",
    company: "SteelForm Industries",
  },
  {
    id: 2,
    quote:
      "We've been using ARTITECT sheet metal folders for 8 years. Reliability is unmatched — minimal downtime, consistent results every time.",
    author: "Sarah K.",
    role: "Operations Director",
    company: "PrecisionFab Ltd.",
  },
  {
    id: 3,
    quote:
      "Outstanding build quality and intuitive controls. Our operators were fully trained within a day. Highly recommend for any serious fabrication shop.",
    author: "James R.",
    role: "Workshop Supervisor",
    company: "MetalCraft Solutions",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 lg:py-32 bg-surface">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* About Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <p className="text-steel text-sm font-semibold uppercase tracking-widest mb-3">About ARTITECT</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy tracking-tight mb-6">
            25 Years of Folding<br />Perfection
          </h2>
          <div className="w-16 h-1 bg-gold mb-8" />
          <p className="text-muted text-base leading-relaxed mb-5">
            Founded in 1999, ARTITECT MACHINERY has grown from a specialist engineering workshop
            into a globally recognised manufacturer of precision sheet metal folding equipment.
            Our machines are designed by engineers, for engineers — with a relentless focus on
            accuracy, reliability, and ease of use.
          </p>
          <p className="text-muted text-base leading-relaxed mb-8">
            Every machine that leaves our facility has been rigorously tested and calibrated to
            meet the exacting standards our customers depend on. From compact workshop folders
            to fully automated industrial systems, ARTITECT delivers the right solution for
            every application.
          </p>
          <div className="flex flex-wrap gap-8">
            {[
              { value: 'ISO 9001', label: 'Certified Quality' },
              { value: 'CE', label: 'Safety Certified' },
              { value: '40+', label: 'Countries' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-bold text-steel">{item.value}</div>
                <div className="text-xs text-muted uppercase tracking-wider mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual panel */}
        <div className="relative">
          <div className="bg-navy rounded-lg p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-steel/10 rounded-tr-full" />
            <div className="relative z-10">
              <div className="text-gold text-6xl font-bold leading-none mb-2">25</div>
              <div className="text-surface/70 text-sm uppercase tracking-widest mb-8">Years of Excellence</div>
              <div className="space-y-4">
                {[
                  'Precision-engineered components',
                  'In-house R&D and manufacturing',
                  'Global distribution network',
                  'Dedicated after-sales support',
                  'Custom machine configurations',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-surface/80 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Decorative border */}
          <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-gold/20 rounded-lg -z-10" />
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <div className="text-center mb-12">
          <p className="text-steel text-sm font-semibold uppercase tracking-widest mb-3">Customer Stories</p>
          <h3 className="text-3xl font-bold text-navy">What Our Clients Say</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white rounded-lg p-8 shadow-sm border border-border relative">
              <div className="text-gold text-5xl font-serif leading-none mb-4 opacity-40">"</div>
              <p className="text-navy/80 text-sm leading-relaxed mb-6 italic">{t.quote}</p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-navy text-sm">{t.author}</div>
                <div className="text-muted text-xs mt-0.5">{t.role}, {t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
