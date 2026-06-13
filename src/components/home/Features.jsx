import { Zap, Target, Settings, BarChart3, Clock, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Micron-Level Accuracy',
    description: 'Precision-ground beams and servo-controlled back-gauges deliver repeatable accuracy to ±0.1mm on every fold.',
  },
  {
    icon: Zap,
    title: 'High-Speed Operation',
    description: 'Optimized drive systems and rapid beam return cycles maximize throughput without sacrificing quality.',
  },
  {
    icon: Settings,
    title: 'Easy Programming',
    description: 'Intuitive touchscreen HMI with graphical bend sequencing makes complex programs fast and error-free.',
  },
  {
    icon: BarChart3,
    title: 'Production Analytics',
    description: 'Built-in production counters and diagnostics help you monitor performance and plan maintenance proactively.',
  },
  {
    icon: Clock,
    title: 'Rapid Setup',
    description: 'Tool-free beam adjustment and quick-change clamping systems minimize changeover time between jobs.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Lifetime Support',
    description: 'Dedicated after-sales support, remote diagnostics, and a global spare parts network keep you running.',
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-widest uppercase font-sans font-semibold">Why Choose ARTITECT</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-navy text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Built for Professionals
          </h2>
          <p className="text-navy/60 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            Every feature of an ARTITECT machine is designed with the working fabricator in mind — maximizing productivity, minimizing downtime.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 bg-white border border-gray-100 hover:border-gold/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 border border-gold/30 group-hover:border-gold group-hover:bg-gold/5 flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-navy text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-navy/60 font-sans text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-navy p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-surface text-2xl lg:text-3xl font-bold mb-2">
              Ready to see it in action?
            </h3>
            <p className="text-surface/60 font-sans text-base">
              Request a live demonstration or technical consultation with our engineering team.
            </p>
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="shrink-0 bg-gold text-navy text-sm font-semibold tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-200 font-sans"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
