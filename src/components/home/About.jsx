import React from 'react';
import { Award, Users, Wrench, Headphones, Globe, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: '25+ Years Experience',
      description: 'Decades of expertise in precision sheet metal machinery manufacturing and engineering excellence.',
    },
    {
      icon: Users,
      title: 'Expert Engineering Team',
      description: 'Dedicated team of skilled engineers and technicians committed to innovation and quality.',
    },
    {
      icon: Wrench,
      title: 'Custom Solutions',
      description: 'Tailored machinery solutions designed to meet your specific production requirements.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services to keep your operations running.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers in 50+ countries with reliable shipping and local support networks.',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Efficient manufacturing and logistics ensuring timely delivery without compromising quality.',
    },
  ];

  const stats = [
    { value: '500+', label: 'Machines Installed' },
    { value: '50+', label: 'Countries Served' },
    { value: '99.8%', label: 'Customer Satisfaction' },
    { value: '24/7', label: 'Technical Support' },
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-safety-orange font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mt-3 mb-6">
            Engineering Excellence Since 1998
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            ARTITECT MACHINERY has been at the forefront of sheet metal folding technology for over two decades. 
            We combine traditional craftsmanship with modern innovation to deliver machinery that exceeds expectations.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-industrial-navy mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 bg-safety-orange/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-safety-orange/20 transition-colors">
                <feature.icon size={28} className="text-safety-orange" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 bg-industrial-navy rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Why Choose ARTITECT MACHINERY?
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We understand that investing in industrial machinery is a significant decision. That's why we're 
                committed to providing not just exceptional products, but a complete partnership that supports 
                your success at every stage.
              </p>
              <ul className="space-y-4">
                {[
                  'Rigorous quality testing on every machine',
                  'Comprehensive training and documentation',
                  'Genuine spare parts availability',
                  'Performance guarantees and warranties',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-safety-orange mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                data-strk-img-id="about-factory-8f2a9c"
                data-strk-img="[about-subtitle] [about-title] [section-title] [section-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT MACHINERY Manufacturing Facility"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
