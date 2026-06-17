import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Award, Users, Globe, Target } from 'lucide-react';

const stats = [
  { icon: Award, value: '30+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Global Clients' },
  { icon: Globe, value: '45+', label: 'Countries Served' },
  { icon: Target, value: '99%', label: 'Client Satisfaction' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="about-image-8f2a9c"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT MACHINERY manufacturing facility"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2744]/30 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#e85d04] text-white p-6 rounded-xl shadow-xl">
              <p className="text-3xl font-bold">30+</p>
              <p className="text-sm font-medium">Years of Excellence</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-[#e85d04] font-semibold text-sm tracking-wider uppercase mb-4">
              About Us
            </span>
            <h2 id="about-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2744] mb-6">
              Engineering Excellence in Metal Fabrication
            </h2>
            <p id="about-subtitle" className="text-lg text-gray-600 leading-relaxed mb-6">
              ARTITECT MACHINERY has been at the forefront of sheet metal folding technology 
              for over three decades. We combine German engineering precision with innovative 
              design to deliver machinery that sets industry standards.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our commitment to quality and customer satisfaction has made us a trusted 
              partner for manufacturers worldwide. Every machine we build undergoes rigorous 
              testing to ensure it meets our exacting standards for performance and durability.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-[#f5f7fa] rounded-xl">
                  <stat.icon className="w-8 h-8 text-[#e85d04] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[#1a2744]">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 md:mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600">
              The principles that guide everything we do at ARTITECT MACHINERY
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f5f7fa] p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#e85d04]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#e85d04]" />
              </div>
              <h4 className="text-xl font-bold text-[#1a2744] mb-3">Precision</h4>
              <p className="text-gray-600 leading-relaxed">
                Every component is manufactured to exacting tolerances, ensuring 
                consistent performance and reliability in every machine we produce.
              </p>
            </div>

            <div className="bg-[#f5f7fa] p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#e85d04]/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#e85d04]" />
              </div>
              <h4 className="text-xl font-bold text-[#1a2744] mb-3">Quality</h4>
              <p className="text-gray-600 leading-relaxed">
                We use only the finest materials and components, backed by 
                comprehensive quality control at every stage of production.
              </p>
            </div>

            <div className="bg-[#f5f7fa] p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#e85d04]/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#e85d04]" />
              </div>
              <h4 className="text-xl font-bold text-[#1a2744] mb-3">Partnership</h4>
              <p className="text-gray-600 leading-relaxed">
                We build lasting relationships with our clients, providing 
                ongoing support and expertise long after the sale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
