import React from 'react';
import { Target, Zap, Shield, Headphones, Cpu, TrendingDown } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Achieve tolerances of ±0.1mm with our CNC-controlled systems. Every bend is consistent, every time.',
  },
  {
    icon: Zap,
    title: 'High-Speed Operation',
    description: 'Up to 12m/min processing speed with servo-driven backgauge for maximum productivity.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel construction with industrial-grade components designed for 24/7 operation.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: '24/7 technical support with on-site installation, training, and preventive maintenance programs.',
  },
  {
    icon: Cpu,
    title: 'Advanced Technology',
    description: 'Touch-screen CNC interface with programmable sequences and cloud-based monitoring.',
  },
  {
    icon: TrendingDown,
    title: 'Cost Effective',
    description: 'Reduce labor costs by 60% while increasing output quality and consistency.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Engineered for Excellence
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Our machines combine cutting-edge technology with proven reliability to deliver exceptional results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-amber-500 mb-2">25+</p>
              <p className="text-slate-400 text-sm lg:text-base">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-amber-500 mb-2">500+</p>
              <p className="text-slate-400 text-sm lg:text-base">Machines Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-amber-500 mb-2">99.8%</p>
              <p className="text-slate-400 text-sm lg:text-base">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-amber-500 mb-2">30+</p>
              <p className="text-slate-400 text-sm lg:text-base">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;