import React from 'react';
import { Users, Headphones, Truck, Award, TrendingUp, HeartHandshake } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "Operator-First Design",
      description: "We spend hundreds of hours in fabrication shops before finalizing any design. The result: machines that feel natural from day one."
    },
    {
      icon: Headphones,
      title: "Lifetime Support",
      description: "Our technicians are available 24/7. Most issues are resolved remotely within 30 minutes. On-site service is guaranteed within 48 hours anywhere in the world."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Standard models ship in 4-6 weeks. Custom configurations typically deliver in 8-10 weeks. Rush production available for urgent needs."
    },
    {
      icon: Award,
      title: "5-Year Warranty",
      description: "Industry-leading coverage on all structural components and electronics. Wear items covered for 2 years. No fine print."
    },
    {
      icon: TrendingUp,
      title: "Future-Proof Technology",
      description: "Software updates keep your machine current for a decade. Retrofit kits available to add new capabilities as your needs evolve."
    },
    {
      icon: HeartHandshake,
      title: "Partnership Approach",
      description: "We don't just sell machines. We help you optimize your entire bending workflow, from quoting to delivery."
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="uppercase tracking-[3px] text-xs font-semibold text-white/50 mb-4">THE ARTITECT DIFFERENCE</div>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-none mb-6">
            More than a machine. A long-term partner.
          </h2>
          <p className="text-xl text-white/70">
            When you invest in ARTITECT, you're choosing a company that stands behind every machine for its entire working life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-2xl tracking-tight mb-3">{reason.title}</h3>
                <p className="text-white/70 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonial */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-light tracking-tight text-white/90 mb-8">
              "We've run our ARTITECT double folder 18 hours a day, 6 days a week for three years. 
              Zero unplanned downtime. The support team feels like an extension of our own staff."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="text-left">
                <div className="font-semibold">Marcus Chen</div>
                <div className="text-sm text-white/60">Production Director, Atlas Metalworks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
