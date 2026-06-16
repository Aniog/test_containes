import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Banner */}
        <div className="relative rounded-3xl overflow-hidden h-96 mb-20">
          <div 
            className="absolute inset-0"
            data-strk-bg-id="about-hero"
            data-strk-bg="modern factory facility industrial"
            data-strk-bg-ratio="21x9"
            data-strk-bg-width="1600"
          >
            <div className="absolute inset-0 bg-blue-900/60" />
          </div>
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">
              Innovating the Future of <br /> Metal Fabrication
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Legacy of Precision</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in 2005, ARTITECT MACHINERY has grown from a specialized workshop into a global leader in metal folding technology. Our obsession with precision and reliability has earned us the trust of manufacturing partners across six continents.
              </p>
              <p>
                We believe that every fold matters. That's why we combine decades of mechanical engineering experience with cutting-edge software solutions to create machines that don't just work—they excel.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                data-strk-img-id="about-workshop"
                data-strk-img="high precision industrial machinery metal working"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Our Workshop"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-bold">20+</p>
              <p className="text-sm uppercase tracking-widest font-semibold">Years of <br /> Excellence</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-2xl mb-6">
              <Target className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mission</h3>
            <p className="text-gray-600">
              To empower industries with the most accurate, reliable, and user-friendly metalworking machinery on the market.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-2xl mb-6">
              <Lightbulb className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">
              Constantly pushing the boundaries of what's possible through continuous R&D and technological integration.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-2xl mb-6">
              <Users className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Commitment</h3>
            <p className="text-gray-600">
              Building long-lasting relationships through exceptional support and a dedication to our customers' success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
