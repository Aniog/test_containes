import React from 'react';
import { Factory, Users, Target, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '25+' },
    { label: 'Machines Delivered', value: '5000+' },
    { label: 'Countries Served', value: '40+' },
    { label: 'Satisfied Clients', value: '3000+' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision First',
      description: 'Every machine is engineered with meticulous attention to detail, ensuring consistent accuracy in every fold.',
    },
    {
      icon: Users,
      title: 'Customer Partnership',
      description: 'We work closely with our clients to understand their unique challenges and deliver tailored solutions.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers across 40+ countries with localized support and worldwide service networks.',
    },
    {
      icon: Factory,
      title: 'Innovation Driven',
      description: 'Continuous investment in R&D to bring the latest folding technology to the manufacturing floor.',
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 md:py-24">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            About ARTITECT MACHINERY
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Leading the industry in precision sheet metal folding solutions with 
            over two decades of engineering excellence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-slate-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Our Story</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Founded in 1998, ARTITECT MACHINERY began as a small engineering workshop 
                  with a vision to revolutionize sheet metal folding technology. Our founders, 
                  with decades of combined experience in industrial machinery, identified a gap 
                  in the market for precision-engineered folding solutions.
                </p>
                <p>
                  Today, we stand as a global leader in the manufacturing of double folding 
                  machines, sheet metal folders, and metal folding equipment. Our commitment 
                  to quality, innovation, and customer satisfaction has earned us the trust 
                  of thousands of businesses worldwide.
                </p>
                <p>
                  From our state-of-the-art manufacturing facility, we produce machines that 
                  meet the highest international standards. Every ARTITECT machine undergoes 
                  rigorous testing and quality assurance before leaving our facility.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden">
                <img
                  alt="ARTITECT MACHINERY manufacturing facility"
                  className="w-full h-full object-cover"
                  data-strk-img-id="about-facility-img"
                  data-strk-img="[about-facility-desc] [about-facility-title]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <h2 id="about-facility-title" className="sr-only">ARTITECT MACHINERY Facility</h2>
              <p id="about-facility-desc" className="sr-only">Modern manufacturing facility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Core Values</h2>
            <p className="section-subheading">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-6">
                  <value.icon className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-900">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            To empower manufacturers worldwide with innovative, reliable, and precise 
            sheet metal folding solutions. We strive to be the partner of choice for 
            businesses seeking to enhance their production capabilities through 
            cutting-edge machinery and exceptional service.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
