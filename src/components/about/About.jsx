import React from 'react';
import { Settings, Award, Users, Clock, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const aboutRef = React.useRef(null);

  React.useEffect(() => {
    if (aboutRef.current) {
      return ImageHelper.loadImages(strkImgConfig, aboutRef.current);
    }
  }, []);

  const features = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Precision Engineering',
      description: 'Every machine is crafted with micron-level precision to ensure consistent, accurate folds every time.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Certified',
      description: 'ISO 9001:2015 certified manufacturing with rigorous quality control at every production stage.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: 'Our team of engineers provides comprehensive training, maintenance, and technical support.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '25+ Years Experience',
      description: 'Over two decades of innovation in sheet metal folding technology and customer satisfaction.',
    },
  ];

  const specifications = [
    { label: 'Folding Capacity', value: 'Up to 10mm' },
    { label: 'Max Width', value: 'Up to 5000mm' },
    { label: 'Control System', value: 'CNC / Manual Options' },
    { label: 'Warranty', value: '2-5 Years' },
    { label: 'Certification', value: 'CE, ISO 9001' },
    { label: 'Delivery', value: '4-8 Weeks' },
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-900 text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            About ARTITECT MACHINERY
          </div>
          <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Engineering Excellence
            <span className="block text-blue-900">Since 1995</span>
          </h2>
          <p id="about-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
            We design and manufacture world-class sheet metal folding machines that
            combine precision engineering with user-friendly operation.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Image */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              data-strk-bg-id="about-image-001"
              data-strk-bg="[about-subtitle] [about-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
              style={{ minHeight: '400px' }}
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold mb-1">25+</div>
              <div className="text-sm text-blue-200">Years of Excellence</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Precision in Every Fold
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At ARTITECT MACHINERY, we've been at the forefront of sheet metal
              folding technology for over 25 years. Our machines are trusted by
              manufacturers worldwide for their precision, reliability, and ease of use.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From small workshops to large industrial operations, our double folding
              machines, sheet metal folders, and metal folding machines deliver
              consistent results that exceed industry standards.
            </p>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4">
              {specifications.map((spec, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">{spec.label}</div>
                  <div className="font-semibold text-gray-900">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
