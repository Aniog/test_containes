import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Clock, Scale, FileText } from 'lucide-react';
import SectionHeader from '../sections/SectionHeader';

const problems = [
  {
    icon: AlertTriangle,
    problem: "Unreliable suppliers and scams",
    solution: "We verify every factory through on-site visits and provide detailed background reports before you commit."
  },
  {
    icon: Clock,
    problem: "Language and communication barriers",
    solution: "Our bilingual team bridges the gap, handling all negotiations and technical discussions in your language."
  },
  {
    icon: Scale,
    problem: "Quality control challenges",
    solution: "Professional inspectors at every production stage ensure your products meet your exact specifications."
  },
  {
    icon: FileText,
    problem: "Complex logistics and documentation",
    solution: "We manage all shipping, customs paperwork, and regulatory compliance to deliver hassle-free."
  }
];

const ProblemsWeSolve = () => {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Problems We Solve"
              subtitle="Sourcing from China comes with challenges. We help you navigate them with confidence."
              align="left"
            />
            
            <div className="mt-8 space-y-6">
              {problems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{item.problem}</h4>
                    <p className="text-text-secondary text-sm">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-gray-200">Factories Verified</div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-gray-300">Client Satisfaction</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">30+</div>
                  <div className="text-sm text-gray-300">Countries Served</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">12+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">24h</div>
                  <div className="text-sm text-gray-300">Response Time</div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;
