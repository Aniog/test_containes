import { Shield, Zap, Settings, Award, Headphones, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Every machine is constructed from premium-grade steel and components, engineered to withstand decades of continuous industrial use.',
  },
  {
    icon: Zap,
    title: 'High-Speed Precision',
    description:
      'Advanced servo-electric and hydraulic drive systems deliver rapid cycle times without compromising on bending accuracy.',
  },
  {
    icon: Settings,
    title: 'Easy to Operate',
    description:
      'Intuitive touch-screen HMI and programmable CNC controls make setup fast and operation accessible for all skill levels.',
  },
  {
    icon: Award,
    title: 'ISO Certified Quality',
    description:
      'All ARTITECT machines are manufactured under strict ISO 9001 quality management standards and CE certified for global markets.',
  },
  {
    icon: Headphones,
    title: 'Lifetime Support',
    description:
      'Our global service network provides on-site installation, training, and rapid spare parts delivery to keep your production running.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'Trusted by fabricators, manufacturers, and contractors in over 40 countries across Europe, Asia, the Americas, and beyond.',
  },
];

const stats = [
  { value: '25+', label: 'Years in Industry' },
  { value: '500+', label: 'Machines Installed' },
  { value: '40+', label: 'Countries Served' },
  { value: '24/7', label: 'Technical Support' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-steel-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Why Choose ARTITECT
          </span>
          <h2 className="font-serif font-bold text-white text-4xl md:text-5xl mb-4">
            Precision You Can Rely On
          </h2>
          <p className="text-steel-300 text-lg max-w-2xl mx-auto">
            We combine decades of engineering expertise with cutting-edge technology
            to deliver folding machines that set the industry standard.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-gold-500 rounded-full" />
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-steel-800 hover:bg-steel-700 rounded-2xl p-7 border border-steel-700/50 hover:border-gold-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/15 flex items-center justify-center mb-5 group-hover:bg-gold-500/25 transition-colors">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-serif font-semibold text-white text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-steel-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="bg-steel-800 rounded-2xl border border-steel-700/50 px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-serif font-bold text-4xl text-gold-400 mb-1">
                  {stat.value}
                </span>
                <span className="text-steel-300 text-sm font-medium">{stat.label}</span>
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
