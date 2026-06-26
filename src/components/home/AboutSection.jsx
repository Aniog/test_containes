import React from 'react';
import { Shield, Award, HeadphonesIcon, Truck } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '25+' },
  { label: 'Machines Delivered', value: '3,200+' },
  { label: 'Countries Served', value: '45+' },
  { label: 'Global Partners', value: '120+' },
];

const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Uncompromising Quality',
    description: 'Every machine undergoes rigorous testing and quality assurance before delivery.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'CE Certified',
    description: 'All our machinery meets European safety and quality standards.',
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: 'Expert Support',
    description: 'Dedicated technical support team available for installation and maintenance.',
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Global Logistics',
    description: 'Efficient worldwide shipping with professional installation services.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-bronze-light font-semibold text-sm tracking-widest uppercase mb-4">
            About Us
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
            Crafting Precision Since 1998
          </h2>
          <p className="text-navy-300 text-lg leading-relaxed">
            ARTITECT MACHINERY has been at the forefront of metal folding technology,
            delivering innovative solutions to fabricators worldwide. Our commitment to
            precision engineering drives every machine we build.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-bronze-light mb-2">
                {stat.value}
              </div>
              <div className="text-navy-400 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-lg border border-navy-700 bg-navy-800/50 hover:bg-navy-800 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-bronze-light/10 flex items-center justify-center text-bronze-light mb-4">
                {item.icon}
              </div>
              <h3 className="text-white font-heading text-lg mb-2">{item.title}</h3>
              <p className="text-navy-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}