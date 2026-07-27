import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { BadgeCheck, Users, Headphones, BarChart3 } from 'lucide-react';

const trustPoints = [
  {
    title: "Native Team on the Ground",
    description: "Our bilingual experts based in Shenzhen and Yiwu understand the local business culture and have direct access to thousands of factories.",
    icon: Users
  },
  {
    title: "Transparent & Direct Pricing",
    description: "We don't take kickbacks from factories. You pay the factory price directly, and we charge a clear, flat service fee.",
    icon: BarChart3
  },
  {
    title: "AQL Quality Standards",
    description: "We use international AQL 2.5/4.0 standards for all inspections, providing detailed photo and video reports for your approval.",
    icon: BadgeCheck
  },
  {
    title: "Real-Time Communication",
    description: "No more waiting days for an email. Your dedicated account manager provides daily updates via WhatsApp, WeChat, or Slack.",
    icon: Headphones
  }
];

const TrustPoints = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 id="trust-title" className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Why Professional Buyers Choose <span className="text-primary">SSourcing China</span>
              </h2>
              <p id="trust-desc" className="text-slate-600 text-lg leading-relaxed">
                Small mistakes in China can lead to massive losses. We bridge the gap between global expectations and Chinese manufacturing reality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {trustPoints.map((point, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center">
                    <point.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-slate-800 tracking-tight">{point.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                data-strk-img-id="trust-section-img"
                data-strk-img="[trust-desc] [trust-title] office team china working"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="SSourcing China Team"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPoints;
