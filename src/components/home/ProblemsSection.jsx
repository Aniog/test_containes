import React from 'react';
import { problemsWeSolve } from '../../data/content';
import { MessageSquare, Shield, CheckCircle, Truck, Clock } from 'lucide-react';

const iconMap = {
  MessageSquare,
  Shield,
  CheckCircle,
  Truck,
  Clock,
};

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#1E3A5F]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            We Solve Your Sourcing Challenges
          </h2>
          <p className="text-lg text-white/70">
            Sourcing from China comes with challenges. We have the expertise and local presence to overcome them.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemsWeSolve.map((problem, index) => {
            const IconComponent = iconMap[Object.keys(iconMap)[index]] || MessageSquare;
            return (
              <div
                key={index}
                className="bg-white/5 hover:bg-white/10 rounded-xl p-6 border border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#E67E22] rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {problem.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;