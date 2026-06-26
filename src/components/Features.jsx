import { Shield, Zap, Globe, Award, Users, Truck } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Precision Engineering',
    description: 'CNC-controlled systems with micron-level accuracy ensure every bend meets exact specifications.',
  },
  {
    icon: Zap,
    title: 'Fast Production',
    description: 'High-speed servo motors and optimized cycles maximize throughput without compromising quality.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'Worldwide service network with 24/7 technical support and rapid spare parts delivery.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'German-engineered components and rigorous quality testing guarantee lasting performance.',
  },
  {
    icon: Users,
    title: 'Expert Training',
    description: 'Comprehensive operator training and ongoing technical education included with every machine.',
  },
  {
    icon: Truck,
    title: 'Turnkey Solutions',
    description: 'Complete installation, setup, and integration services for seamless production launch.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-metal-light/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Built for Excellence
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Every ARTITECT machine represents decades of innovation, engineering expertise, 
            and a commitment to delivering solutions that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dark border-2 border-bg-dark flex items-center justify-center"
                >
                  <span className="text-white text-sm font-bold">{String.fromCharCode(64 + i)}</span>
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">ISO 9001 Certified</div>
              <div className="text-white/50 text-sm">Quality Management System</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
