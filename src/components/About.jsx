import React from 'react';
import { Settings, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About ARTITECT MACHINERY
          </h2>
          <p id="about-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
            Decades of engineering excellence in sheet metal fabrication equipment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Placeholder */}
          <div className="h-96 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
            <Settings className="h-32 w-32 text-white opacity-30" />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Engineering the Future of Sheet Metal Fabrication
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded with a vision to revolutionize sheet metal folding technology, ARTITECT MACHINERY
              has grown to become a trusted name in the industry. We combine traditional craftsmanship
              with cutting-edge technology to deliver machines that exceed expectations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team of experienced engineers and technicians work tirelessly to ensure every machine
              that leaves our facility meets our rigorous quality standards. From initial design to
              final testing, precision is our priority.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3 mx-auto">
                  <Settings className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-slate-900">25+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3 mx-auto">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="text-sm text-gray-600">Machines Delivered</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3 mx-auto">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-slate-900">50+</p>
                <p className="text-sm text-gray-600">Countries Served</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on quality. Every component is tested and verified before assembly.',
              },
              {
                title: 'Innovation',
                description: 'We continuously invest in R&D to bring you the latest advancements in folding technology.',
              },
              {
                title: 'Customer Success',
                description: 'Your success is our success. We provide comprehensive support from consultation to after-sales service.',
              },
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-1 bg-blue-600 mx-auto mb-6" />
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
