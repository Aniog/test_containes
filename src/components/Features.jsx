import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Hammer, Ruler, Zap, ShieldCheck } from 'lucide-react';

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const features = [
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Built to Last",
      desc: "Our machines are constructed with industrial-grade materials for maximum durability."
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Precision Engineering",
      desc: "Achieve micron-level accuracy with our advanced folding technology and CNC systems."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Efficiency",
      desc: "Optimized cycle times that double your production output without sacrificing quality."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Certified Safety",
      desc: "All Artitect machines meet rigorous international safety and quality standards."
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center p-6 border border-slate-50 hover:border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="mb-6 p-4 bg-slate-50 text-brand-primary group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300 rounded-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
