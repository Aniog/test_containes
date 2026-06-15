import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Award, Users, Globe, Building2 } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const stats = [
    { label: 'Years of Experience', value: '25+', icon: Building2 },
    { label: 'Machinery Installations', value: '1,500+', icon: Globe },
    { label: 'Skilled Engineers', value: '120+', icon: Users },
    { label: 'Industry Awards', value: '12', icon: Award },
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="modern clean architecture industrial office"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Our Precision, <br /> Your Competitive Edge</h1>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl font-light">
            Founded on the principles of engineering excellence and industrial innovation, ARTITECT MACHINERY has become a global leader in metal folding technology.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="story-title" className="text-3xl font-bold text-gray-900 leading-tight">Decades of Industrial Innovation</h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Since our inception, ARTITECT MACHINERY has focused on one thing: pushing the boundaries of what's possible in sheet metal folding. Starting as a small engineering consultancy, we've evolved into a full-scale manufacturer of elite-level machinery.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Today, our folding machines, including our renowned double folders, are used by leading manufacturers across aerospace, automotive, and construction industries. We don't just build machines; we build the future of manufacturing.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-square bg-gray-100">
              <img
                data-strk-img-id="about-story-img"
                data-strk-img="[story-title] industrial design laboratory"
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Engineering Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100">
                <div className="flex justify-center mb-4">
                  <item.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{item.value}</div>
                <div className="mt-2 text-sm text-gray-500 font-medium tracking-wide uppercase">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Our Mission</h2>
          <p className="mt-6 text-2xl text-gray-500 italic font-light max-w-4xl mx-auto">
            "To empower manufacturers worldwide with precision-engineered machinery that maximizes efficiency, minimizes waste, and sets new standards for industrial quality."
          </p>
          <div className="mt-12 flex justify-center">
             <div className="w-24 h-1 bg-blue-600 rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
