import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@/lib/imageHelper';
import { Users, Target, Lightbulb, Handshake } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages({}, containerRef.current);
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Every machine is built with meticulous attention to detail, ensuring accuracy that meets the highest industry standards.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We continuously invest in R&D to bring cutting-edge technology to sheet metal fabrication.',
    },
    {
      icon: Users,
      title: 'Customer Partnership',
      description: 'We work closely with our clients to understand their needs and deliver tailored solutions.',
    },
    {
      icon: Handshake,
      title: 'Reliable Support',
      description: 'From installation to maintenance, our global support team is always ready to assist.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            About ARTITECT MACHINERY
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            With over two decades of expertise, we have established ourselves as a leading manufacturer of precision sheet metal folding equipment. Our commitment to quality and innovation drives everything we do.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { number: '20+', label: 'Years Experience' },
            { number: '50+', label: 'Countries Served' },
            { number: '10,000+', label: 'Machines Installed' },
            { number: '98%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.number}</p>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-slate-100"
            >
              <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="mt-20 relative rounded-2xl overflow-hidden aspect-[21/9] bg-slate-100">
          <img
            alt="Manufacturing facility"
            data-strk-img-id="about-facility-8f2a9c"
            data-strk-img="[about-subtitle] [about-title]"
            data-strk-img-ratio="21x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent flex items-center">
            <div className="p-8 lg:p-12 max-w-xl">
              <h3 id="about-title" className="text-2xl lg:text-3xl font-bold text-white mb-4">
                State-of-the-Art Manufacturing
              </h3>
              <p id="about-subtitle" className="text-slate-200 text-lg leading-relaxed">
                Our 50,000 sq ft facility houses advanced CNC machines and rigorous quality control systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
