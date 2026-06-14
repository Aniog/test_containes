import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = [
    'ISO 9001:2015 certified manufacturing',
    'CE and CSA compliant equipment',
    'In-house engineering and R&D team',
    'Global spare parts availability',
    'Custom machine configurations available',
    'Comprehensive training programs',
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">About ARTITECT</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Building Trust Through Quality Since 1998
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              For over two decades, ARTITECT MACHINERY has been at the forefront of sheet metal folding technology. Our commitment to precision engineering and customer success has made us a trusted partner for fabricators worldwide.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Every machine that leaves our facility undergoes rigorous testing and quality assurance to ensure it meets our exacting standards. We believe in building relationships that last as long as our machines.
            </p>

            {/* Highlights List */}
            <ul className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 lg:p-12">
              {/* Factory Illustration */}
              <svg viewBox="0 0 400 300" className="w-full" fill="none">
                {/* Building */}
                <rect x="50" y="120" width="300" height="150" rx="4" fill="#64748B" />
                <rect x="70" y="100" width="80" height="30" rx="2" fill="#475569" />
                <rect x="170" y="80" width="60" height="50" rx="2" fill="#475569" />
                <rect x="250" y="90" width="80" height="40" rx="2" fill="#475569" />
                
                {/* Windows */}
                <rect x="80" y="140" width="30" height="30" rx="2" fill="#1E293B" />
                <rect x="130" y="140" width="30" height="30" rx="2" fill="#1E293B" />
                <rect x="80" y="190" width="30" height="30" rx="2" fill="#1E293B" />
                <rect x="130" y="190" width="30" height="30" rx="2" fill="#1E293B" />
                
                {/* Door */}
                <rect x="180" y="200" width="40" height="70" rx="2" fill="#1E293B" />
                
                {/* Chimney */}
                <rect x="280" y="50" width="20" height="50" rx="2" fill="#94A3B8" />
                <ellipse cx="290" cy="45" rx="15" ry="10" fill="#D97706" opacity="0.6" />
                
                {/* Ground */}
                <rect x="20" y="270" width="360" height="20" rx="2" fill="#475569" />
                
                {/* Accent Elements */}
                <circle cx="350" cy="140" r="30" fill="#D97706" opacity="0.3" />
                <circle cx="60" cy="160" r="20" fill="#D97706" opacity="0.2" />
              </svg>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white rounded-2xl p-6 shadow-xl">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm opacity-90">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;