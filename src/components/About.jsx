import React from 'react';
import { Target, Clock, Wrench } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Every machine is calibrated to tolerances measured in hundredths of a millimeter. Accuracy is not negotiable.',
    },
    {
      icon: Clock,
      title: 'Built to Last',
      description: 'Our machines are still operating reliably after 30+ years. We design for decades, not years.',
    },
    {
      icon: Wrench,
      title: 'Crafted by Experts',
      description: 'Each unit is assembled by master technicians with an average of 18 years of experience.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left column - Text */}
          <div>
            <div className="uppercase tracking-[3px] text-xs font-medium text-[#B8860B] mb-4">OUR HERITAGE</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#0A1628] mb-6 leading-tight">
              Four decades of<br />mastering the fold.
            </h2>
            <div className="space-y-4 text-[#1C2833] text-lg">
              <p>
                Founded in 1987 in the industrial heart of Germany, ARTITECT MACHINERY began with a simple mission: to build folding machines that professionals could trust without compromise.
              </p>
              <p>
                Today, our equipment powers fabrication shops, aerospace manufacturers, and architectural metalworkers across five continents. We remain a family-owned company, guided by the same principles that built our reputation.
              </p>
            </div>
          </div>

          {/* Right column - Values */}
          <div className="space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flex gap-5 p-6 bg-[#F8F9FA] rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#0A1628] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0A1628] mb-2">{value.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
