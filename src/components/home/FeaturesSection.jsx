import { Settings, Shield, Zap, Wrench, BarChart2, Globe } from 'lucide-react';

const features = [
  {
    icon: Settings,
    title: 'CNC Precision Control',
    description:
      'Advanced CNC systems with intuitive touchscreen interfaces allow operators to program complex multi-bend sequences with micron-level accuracy.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Heavy-duty welded steel frames, hardened tooling, and premium components ensure decades of reliable operation in demanding industrial environments.',
  },
  {
    icon: Zap,
    title: 'High-Speed Production',
    description:
      'Servo-driven beam and back gauge systems deliver rapid cycle times without sacrificing precision — keeping your production line moving.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description:
      'Designed for minimal downtime. Accessible service points, modular components, and remote diagnostics make maintenance fast and straightforward.',
  },
  {
    icon: BarChart2,
    title: 'Consistent Repeatability',
    description:
      'Closed-loop feedback systems guarantee identical results across thousands of bends — critical for high-volume production and quality control.',
  },
  {
    icon: Globe,
    title: 'Global Support Network',
    description:
      'Dedicated technical support, spare parts availability, and on-site service engineers across 40+ countries ensure you are never left without help.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-[#0D1B2A] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#C9A84C]" />
            <span
              className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Why ARTITECT
            </span>
            <div className="w-10 h-px bg-[#C9A84C]" />
          </div>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Engineering That
            <span className="text-[#C9A84C]"> Delivers</span>
          </h2>
          <p
            className="text-[#8A9BB0] text-base max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Every ARTITECT machine is designed around one principle: giving you the precision,
            reliability, and support to outperform the competition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-[#1A3A5C]/50 border border-[#C9A84C]/10 p-8 hover:border-[#C9A84C]/50 hover:bg-[#1A3A5C] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#C9A84C]/10 flex items-center justify-center mb-6 group-hover:bg-[#C9A84C]/20 transition-colors">
                  <Icon size={24} className="text-[#C9A84C]" />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[#8A9BB0] text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 bg-[#1A3A5C] border border-[#C9A84C]/30 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-2xl md:text-3xl font-extrabold text-white mb-2"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Ready to upgrade your production?
            </h3>
            <p className="text-[#8A9BB0] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Talk to our engineers and find the right folding machine for your needs.
            </p>
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 bg-[#C9A84C] text-[#0D1B2A] font-bold px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#E8C97A] transition-colors duration-200"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
