import React from 'react';
import { Factory, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every machine is built to exacting standards, ensuring consistent performance and reliability.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work closely with our clients to understand their needs and deliver tailored solutions.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest business practices and transparent communication form the foundation of our relationships.',
    },
    {
      icon: Factory,
      title: 'Innovation',
      description: 'Continuous improvement in design and technology keeps us at the forefront of the industry.',
    },
  ];

  const milestones = [
    { year: '1995', event: 'Founded with a vision for precision metalworking machinery' },
    { year: '2005', event: 'Expanded to international markets across Europe and Asia' },
    { year: '2015', event: 'Introduced CNC-controlled folding systems' },
    { year: '2020', event: 'Launched smart factory integration solutions' },
    { year: '2024', event: 'Celebrated 30 years of engineering excellence' },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Artitect Machinery
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Three decades of engineering excellence in precision metal folding solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 1995, Artitect Machinery began with a simple mission: to design and manufacture the most reliable, precise metal folding machines in the industry. What started as a small workshop has grown into a globally recognized brand trusted by manufacturers across six continents.
                </p>
                <p>
                  Our team of experienced engineers combines traditional craftsmanship with cutting-edge technology to create machines that deliver unmatched accuracy and durability. Every Artitect machine is a testament to our commitment to quality and customer satisfaction.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible in metal folding technology, helping businesses of all sizes achieve their production goals with confidence.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl p-12 flex items-center justify-center">
              <Factory className="w-32 h-32 text-blue-900" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our history of innovation and growth.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                    }`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="text-blue-900 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-900 rounded-full border-4 border-white shadow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-blue-200">Machines Sold</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">60+</div>
              <div className="text-blue-200">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
