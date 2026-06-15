import React, { useRef, useEffect } from 'react';
import { Factory, Users, Award, Target } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const values = [
    {
      icon: Factory,
      title: 'Precision Manufacturing',
      description: 'State-of-the-art facilities with rigorous quality control at every step.',
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Your success is our priority. We build lasting partnerships with every client.',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning designs and innovations that set industry standards.',
    },
    {
      icon: Target,
      title: 'Continuous Innovation',
      description: 'Constantly pushing boundaries to deliver cutting-edge folding solutions.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50" ref={containerRef}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative fade-in">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              data-strk-bg-id="about-image-8f2a9c"
              data-strk-bg="[about-subtitle] [about-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />
            
            {/* Experience Badge */}
            <div className="absolute bottom-8 left-8 bg-white rounded-xl p-6 shadow-xl">
              <div className="text-5xl font-bold text-steel-blue mb-2">25+</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="slide-in-right">
            <div className="inline-flex items-center px-4 py-2 bg-deep-navy text-white rounded-full text-sm font-semibold mb-6">
              ABOUT ARTITECT
            </div>
            
            <h2 
              id="about-title"
              className="text-4xl md:text-5xl font-bold text-deep-navy mb-6"
            >
              Crafting Precision Since 1999
            </h2>
            
            <p id="about-subtitle" className="text-lg text-gray-600 mb-6 leading-relaxed">
              ARTITECT MACHINERY has been at the forefront of sheet metal folding technology 
              for over two decades. What started as a small workshop has grown into a 
              globally recognized manufacturer of precision folding machines.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to innovation, quality, and customer satisfaction has made us 
              the trusted choice for fabricators worldwide. Every machine that leaves our 
              facility carries our reputation for excellence.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-steel-blue bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-steel-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-deep-navy mb-1">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a href="#contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Learn More About Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
