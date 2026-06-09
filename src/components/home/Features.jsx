import { ShieldCheck, Zap, Scissors, Settings2 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "Unyielding Precision",
      description: "Achieve exact bends and pristine finishes with our advanced measuring and folding technology.",
      icon: Scissors
    },
    {
      title: "Elegant Interface",
      description: "User-friendly touchscreen controls make operating complex machinery intuitive for any operator.",
      icon: Settings2
    },
    {
      title: "Rugged Durability",
      description: "Built with premium industrial-grade materials to withstand decades of rigorous shop floor use.",
      icon: ShieldCheck
    },
    {
      title: "High-Speed Operation",
      description: "Maximize your throughput without compromising on quality using our optimized double folding systems.",
      icon: Zap
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wide text-blue-900 uppercase">Features</h2>
          <p className="mt-2 text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">
            Engineered for Excellence
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Our sheet metal folding machines integrate raw power with elegant, user-friendly control systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-300">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-xl bg-blue-100 text-blue-900 mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
