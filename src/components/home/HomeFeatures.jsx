import React from 'react';
import { Microscope, Sparkles, Zap, Shield } from 'lucide-react';

const homeFeatures = [
  {
    icon: Microscope,
    title: 'High Resolution',
    desc: 'Captured using the latest electron microscopy technology.'
  },
  {
    icon: Sparkles,
    title: 'Natural Art',
    desc: 'Breathtaking patterns found in the cellular foundations of life.'
  },
  {
    icon: Zap,
    title: 'Dynamic World',
    desc: 'Visualizing biological processes as they happen in real-time.'
  },
  {
    icon: Shield,
    title: 'Protected Realms',
    desc: 'Preserving the delicate balance of microscopic ecosystems.'
  }
];

const HomeFeatures = () => {
  return (
    <section id="exhibitions" className="py-24 bg-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-[#e6f1ff] mb-6 leading-tight">
              Exploring the <span className="text-[#64ffda]">Infinite Small</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              Behind every scientific discovery lies a landscape of awe-inspiring beauty. Our mission is to bridge the gap between science and art, revealing the masterpieces of nature.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {homeFeatures.map((feature, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="p-3 bg-[#64ffda]/10 rounded-lg w-fit">
                    <feature.icon className="w-6 h-6 text-[#64ffda]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#e6f1ff]">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img 
                data-strk-img-id="feature-main-img"
                data-strk-img="microscopic organisms vibrant colors high detail"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Microscopic details"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#64ffda] rounded-full blur-3xl opacity-20" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#bd93f9] rounded-full blur-3xl opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
