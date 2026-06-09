import React, { useEffect, useRef } from 'react';
import { Settings, ShieldCheck, Zap } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    name: 'Precision Engineering',
    description: 'Every metal folding machine is calibrated to deliver exact folds, minimizing waste and maximizing efficiency.',
    icon: Settings
  },
  {
    name: 'Elegant Interface',
    description: 'A user-friendly control system ensuring that your operators can learn and master the double folder quickly.',
    icon: Zap
  },
  {
    name: 'Robust Durability',
    description: 'Constructed from premium materials, our sheet metal folders are designed to withstand years of heavy industrial use.',
    icon: ShieldCheck
  }
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    } catch(e) {
      console.warn(e);
    }
  }, []);

  return (
    <section id="about" className="py-24 bg-slate-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id="about-title" className="text-3xl font-bold text-slate-900 sm:text-4xl">About ARTITECT MACHINERY</h2>
            <p id="about-desc-1" className="mt-6 text-lg text-slate-600">
              For over a decade, ARTITECT MACHINERY has set the gold standard in the sheet metal folding industry. 
              We believe that heavy machinery shouldn't be archaic and difficult to use.
            </p>
            <p id="about-desc-2" className="mt-4 text-lg text-slate-600">
              Our line of double folding machines and versatile metal folders blend elegant design with unparalleled power. 
              Whether you need a compact metal folder or a high-capacity double folder, our commitment to quality remains the same.
            </p>
            
            <dl className="mt-10 space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="relative pl-12">
                  <dt className="text-lg font-bold text-slate-900">
                    <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                      <feature.icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base text-slate-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              data-strk-img-id="about-factory-img-1"
              data-strk-img="[about-desc-1] [about-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Artitect Machinery Factory"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
