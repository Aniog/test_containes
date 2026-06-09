import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-5xl font-bold">A</span>
                  </div>
                  <p className="text-slate-600 text-lg font-medium">Artitect Machinery</p>
                  <p className="text-slate-500 text-sm mt-2">Since 1998</p>
                </div>
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-slate-200">
              <p className="text-3xl font-bold text-blue-600">25+</p>
              <p className="text-sm text-slate-600">Years of Excellence</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Trusted Partner in Sheet Metal Fabrication
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              For over two decades, Artitect Machinery has been at the forefront of sheet metal 
              folding technology. Our commitment to innovation and quality has made us the 
              preferred choice for manufacturers worldwide.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              From small workshops to large-scale industrial operations, our machines deliver 
              consistent results that meet the highest industry standards. We believe in building 
              lasting relationships with our clients through exceptional products and service.
            </p>

            {/* Key Points */}
            <ul className="space-y-4 mb-8">
              {[
                'ISO 9001 certified manufacturing processes',
                'Comprehensive warranty and maintenance programs',
                'Global distribution and support network',
                'Custom solutions for specialized applications',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/25"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
