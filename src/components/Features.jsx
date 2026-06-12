import { Shield, Zap, Settings, Headphones, Award, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Heavy-duty steel frames and precision-machined components ensure decades of reliable operation in demanding industrial environments.',
  },
  {
    icon: Zap,
    title: 'High Productivity',
    description:
      'Advanced servo-electric and hydraulic drive systems deliver fast cycle times and consistent output, maximizing your production throughput.',
  },
  {
    icon: Settings,
    title: 'CNC Precision',
    description:
      'State-of-the-art CNC controls with intuitive touchscreen interfaces allow complex bending programs to be set up in minutes.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description:
      'Our global network of trained technicians provides installation, training, and ongoing maintenance support wherever you are.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description:
      'All machines are manufactured to ISO 9001 standards and carry CE certification, ensuring compliance with international safety requirements.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'With distribution partners in over 40 countries, ARTITECT MACHINERY delivers world-class folding solutions to fabricators worldwide.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0F1C2E] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
              Why Choose Us
            </span>
            <div className="w-10 h-px bg-[#C9A84C]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Engineering Excellence
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Every ARTITECT machine is the result of decades of engineering expertise,
            continuous innovation, and an unwavering commitment to quality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-[#1A2E45] hover:bg-[#1E3550] rounded-2xl p-8 border border-white/10 hover:border-[#C9A84C]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#C9A84C]/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C9A84C]/25 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#C9A84C]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#C9A84C]/20 to-[#C9A84C]/5 border border-[#C9A84C]/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
              Ready to upgrade your production?
            </h3>
            <p className="text-white/60">
              Talk to our specialists and find the right machine for your needs.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-shrink-0 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0F1C2E] font-semibold px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wide whitespace-nowrap"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
