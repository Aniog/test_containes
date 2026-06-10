import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Wrench, 
  Clock, 
  Award, 
  Settings 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning-Fast Setup",
      description: "Tool changes and program setup in under 90 seconds. Spend more time producing, less time preparing."
    },
    {
      icon: ShieldCheck,
      title: "Built-In Safety Systems",
      description: "Light curtains, two-hand operation, and emergency stops are standard. Operator safety without compromise."
    },
    {
      icon: Wrench,
      title: "Minimal Maintenance",
      description: "Self-lubricating components and sealed bearings mean routine service only every 2,000 operating hours."
    },
    {
      icon: Clock,
      title: "24/7 Production Ready",
      description: "Designed for continuous operation. Our machines routinely exceed 15,000 hours of uptime before major service."
    },
    {
      icon: Award,
      title: "Industry-Leading Accuracy",
      description: "Repeatability of ±0.1° and positioning accuracy within 0.05mm. Every fold, every time."
    },
    {
      icon: Settings,
      title: "Smart Controls",
      description: "Intuitive touchscreen interface with offline programming, job memory, and remote diagnostics capability."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="uppercase tracking-[3px] text-xs font-semibold text-slate-500 mb-4">WHY OUR MACHINES STAND OUT</div>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-none mb-6">
            Thoughtful engineering. Real-world results.
          </h2>
          <p className="text-xl text-slate-600">
            Every feature is designed to solve real problems fabricators face every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-100 group-hover:bg-slate-900 flex items-center justify-center mb-6 transition-colors">
                  <Icon className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-2xl tracking-tight text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
