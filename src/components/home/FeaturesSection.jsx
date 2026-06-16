import { Zap, Target, Wrench, RotateCcw, ShieldCheck, Headphones } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Unmatched Precision',
    description: 'CNC-controlled back-gauge positioning delivers ±0.1mm accuracy on every fold, ensuring consistent quality across production runs.',
  },
  {
    icon: Zap,
    title: 'High-Speed Operation',
    description: 'Optimized hydraulic and servo-electric drives enable rapid cycle times without compromising fold quality or operator safety.',
  },
  {
    icon: Wrench,
    title: 'Quick Tool Change',
    description: 'Modular tooling system allows operators to switch between profiles in minutes, minimizing downtime between jobs.',
  },
  {
    icon: RotateCcw,
    title: 'Double Folding Capability',
    description: 'Unique double-fold mechanism completes complex profiles in a single pass, reducing handling time and improving throughput.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Last',
    description: 'Heavy-duty steel frame construction with precision-ground surfaces ensures decades of reliable, maintenance-free operation.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Dedicated technical team provides installation, training, and ongoing support to keep your production running smoothly.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brass-500 uppercase tracking-wider mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-900">
            Engineering Excellence in Every Detail
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Our machines are designed with decades of metalworking expertise,
            combining robust construction with intelligent automation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-200/60 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-brass-500/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brass-500" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
