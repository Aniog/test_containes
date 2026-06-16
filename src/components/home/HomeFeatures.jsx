import { Shield, Gauge, Wrench, Zap } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'High Precision',
    description: 'Achieve tolerances within 0.1mm with our advanced CNC-controlled folding systems.',
  },
  {
    icon: Zap,
    title: 'Maximum Speed',
    description: 'Rapid cycle times with automated sheet handling for high-volume production runs.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel construction with hardened tooling ensures decades of reliable operation.',
  },
  {
    icon: Wrench,
    title: 'Easy Operation',
    description: 'Intuitive touchscreen controls and programmable sequences reduce operator training time.',
  },
];

const HomeFeatures = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight mb-4">
            Why Choose ARTITECT
          </h2>
          <p className="text-slate-600 text-lg">
            Our machines combine German engineering principles with modern innovation to deliver superior performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 lg:p-8 rounded-xl border border-slate-200 hover:border-accent-500/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent-500" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
