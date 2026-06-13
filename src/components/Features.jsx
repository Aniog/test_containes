import { Cpu, Gauge, Wrench, Headphones, Clock, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'CNC Precision Control',
    desc: 'Advanced computer-controlled bending ensures every fold meets exact specifications with repeatable accuracy.',
  },
  {
    icon: Gauge,
    title: 'High-Speed Production',
    desc: 'Optimized cycle times allow you to process more sheets per hour without compromising quality or precision.',
  },
  {
    icon: Wrench,
    title: 'Built to Last',
    desc: 'Heavy-duty steel frames and premium components are engineered for decades of reliable, continuous operation.',
  },
  {
    icon: Headphones,
    title: '24/7 Technical Support',
    desc: 'Our dedicated support team is available around the clock to keep your machines running at peak performance.',
  },
  {
    icon: Clock,
    title: 'Quick Setup & Training',
    desc: 'Comprehensive operator training and rapid installation mean you are productive from day one with minimal downtime.',
  },
  {
    icon: ShieldCheck,
    title: 'ISO 9001 Certified',
    desc: 'Every machine undergoes rigorous quality control and meets international standards for safety and performance.',
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-brand-navy py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-white mt-4 leading-tight">
            Engineered for Excellence
          </h2>
          <p className="text-brand-white/50 text-lg mt-4 leading-relaxed">
            Every ARTITECT machine is designed with precision engineering,
            built with premium materials, and backed by industry-leading support.
          </p>
          <div className="w-16 h-[3px] bg-brand-gold mx-auto mt-6 rounded-full" />
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-brand-navy-light/60 border border-white/[0.07] rounded-2xl p-8 hover:border-brand-gold/30 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors duration-300">
                  <IconComponent className="w-7 h-7 text-brand-gold" />
                </div>
                <h3 className="text-brand-white font-bold text-lg mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-brand-white/45 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
