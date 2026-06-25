import { Shield, Zap, Settings, Headphones, Award, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Every machine is constructed with premium-grade steel and precision-machined components, ensuring decades of reliable operation in demanding industrial environments.',
  },
  {
    icon: Zap,
    title: 'High-Speed Production',
    description:
      'Advanced servo-electric and hydraulic drive systems deliver rapid cycle times without compromising accuracy, maximising your production output.',
  },
  {
    icon: Settings,
    title: 'CNC Precision',
    description:
      'State-of-the-art CNC controls with intuitive touchscreen interfaces allow operators to program complex bend sequences quickly and accurately.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description:
      'Our global network of engineers provides installation, training, and ongoing technical support to keep your machines running at peak performance.',
  },
  {
    icon: Award,
    title: 'ISO Certified Quality',
    description:
      'All Artitect Machinery products are manufactured under strict ISO 9001 quality management systems, guaranteeing consistent excellence in every unit.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'With distribution partners in over 40 countries, we deliver world-class sheet metal folding solutions wherever your business operates.',
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="bg-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
            Why Choose Artitect
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1B2A4A] mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            The Artitect Advantage
          </h2>
          <p className="text-[#5A6A82] text-lg max-w-2xl mx-auto leading-relaxed">
            We combine decades of engineering expertise with cutting-edge technology to deliver folding machines that set the industry standard.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl border border-[#DDE3EC] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-[#1B2A4A]/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C9A84C]/10 transition-colors duration-300">
                  <Icon size={24} className="text-[#1B2A4A] group-hover:text-[#C9A84C] transition-colors duration-300" />
                </div>
                <h3
                  className="text-lg font-bold text-[#1B2A4A] mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p className="text-[#5A6A82] text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#1B2A4A] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-2"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Ready to upgrade your production line?
            </h3>
            <p className="text-[#8A9BB0] text-base">
              Talk to our engineers and find the perfect folding solution for your needs.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-shrink-0 bg-[#C9A84C] text-[#1B2A4A] px-8 py-4 rounded-lg font-bold text-base hover:bg-[#b8943e] transition-colors duration-200 whitespace-nowrap"
          >
            Speak to an Engineer
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
