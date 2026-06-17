import React from 'react';
import { Settings, Zap, Shield, Wrench, Award, Headphones } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Settings,
      title: "Precision Engineering",
      description: "Every component is machined to tolerances measured in microns. The result: consistent, accurate bends every single time."
    },
    {
      icon: Zap,
      title: "Effortless Operation",
      description: "Intuitive controls and ergonomic design mean operators become productive quickly. Less training, more output."
    },
    {
      icon: Shield,
      title: "Built to Last",
      description: "Heavy-duty frames, premium hydraulics, and industrial-grade electronics. Machines that work as hard as you do."
    },
    {
      icon: Wrench,
      title: "Easy Maintenance",
      description: "Modular design and accessible components make routine service straightforward. Minimal downtime, maximum uptime."
    },
    {
      icon: Award,
      title: "Quality Certified",
      description: "ISO 9001:2015 certified manufacturing. Every machine undergoes rigorous testing before it leaves our facility."
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Our technical team provides remote diagnostics, spare parts, and on-site service. We're with you for the long haul."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-white border border-gray-200 text-xs tracking-[2px] mb-4">WHY ARTITECT</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1a252f] mb-6 leading-tight">
              Engineered for those who value precision.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We don't just build machines. We build tools that help fabricators create better products, faster, with fewer mistakes and less waste.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm">
              <div className="px-5 py-2 bg-white rounded border border-gray-200">
                <span className="font-semibold text-[#1a252f]">98.7%</span>
                <span className="text-gray-500 ml-1">customer retention</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <div className="w-11 h-11 bg-[#1a252f] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="font-semibold text-lg text-[#1a252f] mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
