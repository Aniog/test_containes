import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Factory, Users, Globe, Target } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const stats = [
    { icon: Factory, value: '25+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Clients Worldwide' },
    { icon: Globe, value: '40+', label: 'Countries Served' },
    { icon: Target, value: '99%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" ref={containerRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 text-sm font-semibold rounded-full mb-4">
            About Us
          </span>
          <h2 id="about-title" className="text-3xl sm:text-4xl font-bold text-brand-900 mb-4">
            Engineering Excellence in Sheet Metal Machinery
          </h2>
          <p id="about-subtitle" className="text-lg text-brand-600 leading-relaxed">
            ARTITECT MACHINERY has been at the forefront of sheet metal folding technology for over two decades, delivering precision equipment that powers industries worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-brand-50 rounded-xl p-6 text-center border border-brand-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-brand-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-3xl font-bold text-brand-800 mb-1">{stat.value}</p>
              <p className="text-sm text-brand-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-brand-900 mb-4">
              Our Story
            </h3>
            <p className="text-brand-600 leading-relaxed mb-4">
              Founded in 1998, ARTITECT MACHINERY began with a simple mission: to create the most precise and reliable sheet metal folding machines in the industry. What started as a small engineering workshop has grown into a global manufacturer serving clients across 40+ countries.
            </p>
            <p className="text-brand-600 leading-relaxed mb-6">
              Our team of experienced engineers combines traditional craftsmanship with cutting-edge technology to deliver machines that meet the demanding requirements of modern manufacturing. Every ARTITECT machine is built with quality, durability, and precision in mind.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-800 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors"
            >
              Partner With Us
            </a>
          </div>
          <div className="relative">
            <div className="aspect-video bg-brand-100 rounded-xl overflow-hidden">
              <img
                alt="ARTITECT Machinery manufacturing facility"
                className="w-full h-full object-cover"
                data-strk-img-id="about-factory-img-8f2a9c"
                data-strk-img="[about-title] [about-subtitle]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-brand-50 rounded-2xl p-8 sm:p-12 border border-brand-100">
          <h3 className="text-2xl font-bold text-brand-900 mb-8 text-center">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-brand-800 mb-2">Precision</h4>
              <p className="text-brand-600">
                Every component is engineered to exacting standards, ensuring consistent, repeatable results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-brand-800 mb-2">Partnership</h4>
              <p className="text-brand-600">
                We build lasting relationships with our clients, providing support long after installation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-brand-800 mb-2">Innovation</h4>
              <p className="text-brand-600">
                Continuous R&D investment keeps our machines at the cutting edge of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
