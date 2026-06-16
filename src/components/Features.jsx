import React from 'react';
import { Settings, Shield, Zap, Wrench, Gauge, Headphones, CheckCircle2 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Settings,
      title: 'Precision Engineering',
      description: 'Advanced CNC-controlled systems ensure millimeter-accurate bends with repeatability down to ±0.1mm.',
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Heavy-duty steel construction with industrial-grade components designed for years of reliable service.',
    },
    {
      icon: Zap,
      title: 'Fast Operation',
      description: 'High-speed bending cycles and automated settings reduce production time by up to 40%.',
    },
    {
      icon: Wrench,
      title: 'Easy Maintenance',
      description: 'Modular design with accessible components simplifies maintenance and reduces downtime.',
    },
    {
      icon: Gauge,
      title: 'Energy Efficient',
      description: 'Smart power management systems reduce energy consumption without compromising performance.',
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: '24/7 technical support with remote diagnostics and on-site service available worldwide.',
    },
  ];

  const highlights = [
    'Industry-leading 2-year warranty',
    'Free operator training included',
    'Custom configurations available',
    'Worldwide shipping & installation',
    'Financing options available',
    'CE & ISO certified',
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-amber-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Engineered for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
              Excellence
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Our folding machines combine cutting-edge technology with robust engineering 
            to deliver exceptional results in every application.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlights Banner */}
        <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Everything You Need to Succeed
              </h3>
              <p className="text-slate-400 mb-6">
                When you choose ARTITECT MACHINERY, you're not just getting a machine — 
                you're getting a complete partnership with comprehensive support.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Learn More
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;