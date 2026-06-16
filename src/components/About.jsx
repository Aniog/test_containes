import React from 'react';
import { Target, Eye, Heart, Users, TrendingUp, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '25+', label: 'Years in Business', icon: Award },
    { value: '500+', label: 'Machines Installed', icon: TrendingUp },
    { value: '98%', label: 'Customer Satisfaction', icon: Heart },
    { value: '35+', label: 'Countries Served', icon: Users },
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every machine we build is engineered to deliver exacting accuracy and consistent results.',
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'We continuously invest in R&D to bring you the latest advancements in folding technology.',
    },
    {
      icon: Heart,
      title: 'Reliability',
      description: 'Built with industrial-grade components for dependable performance year after year.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12">
              <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1.5" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                  </svg>
                </div>
                <div className="text-center relative z-10">
                  <div className="w-40 h-40 mx-auto bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/30">
                    <svg className="w-20 h-20 text-amber-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="10" y="60" width="80" height="30" rx="2" />
                      <rect x="20" y="20" width="60" height="40" rx="2" />
                      <line x1="10" y1="75" x2="10" y2="90" />
                      <line x1="90" y1="75" x2="90" y2="90" />
                      <path d="M35 35 L50 25 L65 35" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-2">Since 1999</h4>
                  <p className="text-slate-400">Manufacturing Excellence</p>
                </div>
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm opacity-90">Years</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block text-amber-600 font-semibold text-sm tracking-wider uppercase mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Crafting Precision{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                Sheet Metal Solutions
              </span>
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                For over two decades, ARTITECT MACHINERY has been at the forefront of sheet metal 
                fabrication technology. Our commitment to quality, innovation, and customer success 
                has made us a trusted name in the industry worldwide.
              </p>
              <p>
                We specialize in designing and manufacturing precision folding machines that meet 
                the exacting standards of modern fabrication shops. From compact manual folders to 
                advanced CNC-controlled systems, our products deliver the accuracy and reliability 
                your business demands.
              </p>
              <p>
                Every machine that leaves our facility undergoes rigorous quality testing to ensure 
                it meets our exacting standards. We combine traditional craftsmanship with modern 
                manufacturing techniques to create equipment that stands the test of time.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-amber-500" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-amber-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Our Values
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            The Principles That Drive Us
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-2xl border border-slate-200 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {value.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;