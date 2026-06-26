import { Shield, Zap, Target, Wrench, BarChart3, Award } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Unmatched Precision',
    description: 'Every fold is engineered to exact tolerances, ensuring consistent quality across production runs of any size.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel frames and premium components mean your ARTITECT machine operates reliably for decades.',
  },
  {
    icon: Zap,
    title: 'Rapid Setup',
    description: 'Quick-change tooling and intuitive controls minimize downtime between jobs, keeping your production flowing.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Designed with serviceability in mind. Accessible components and straightforward diagnostics reduce maintenance costs.',
  },
  {
    icon: BarChart3,
    title: 'Smart Controls',
    description: 'CNC-compatible interfaces with programmable fold sequences, bend angle compensation, and real-time monitoring.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'All machines meet CE safety standards and undergo rigorous quality testing before shipping worldwide.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-steel-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">
            Why Choose Us
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-950 mt-4 mb-6">
            Engineered for Performance
          </h2>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto">
            Every ARTITECT machine combines decades of engineering expertise with cutting-edge technology to give your workshop a competitive edge.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-sm border border-steel-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <Icon className="w-7 h-7 text-brand-800 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">
                  {feature.title}
                </h3>
                <p className="text-steel-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
