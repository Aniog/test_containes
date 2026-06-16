import { Settings, Target, Wrench, Clock, Award, Headphones } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Unmatched Precision',
    description: 'Achieve tolerances within ±0.1mm with our advanced CNC-controlled folding systems.',
  },
  {
    icon: Settings,
    title: 'Robust Engineering',
    description: 'Heavy-duty steel frames and premium components ensure decades of reliable operation.',
  },
  {
    icon: Wrench,
    title: 'Easy Operation',
    description: 'Intuitive touchscreen controls and quick-change tooling minimize setup time.',
  },
  {
    icon: Clock,
    title: 'Fast Production',
    description: 'High-speed folding cycles and automated back-gauges maximize your throughput.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'All machines are CE certified and manufactured under ISO 9001 quality standards.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Dedicated technical support team available for installation, training, and maintenance.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mt-3">
            Built for Professionals
          </h2>
          <p className="text-slate-300 text-lg mt-4 leading-relaxed">
            ARTITECT MACHINERY combines 25 years of engineering expertise with modern
            manufacturing technology to deliver machines you can depend on.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 lg:p-8 hover:border-amber-500/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-slate-700/50 pt-16">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '1,200+', label: 'Machines Delivered' },
            { value: '40+', label: 'Countries Served' },
            { value: '99.5%', label: 'Customer Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-amber-500">{stat.value}</p>
              <p className="text-slate-400 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
