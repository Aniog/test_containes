import React from 'react';
import { Target, AlertCircle, TrendingUp, Handshake } from 'lucide-react';

const problems = [
  {
    title: 'High Minimum Order Quantities',
    solution: 'We negotiate lower MOQs with factories to help you test markets with less risk.',
    icon: Target,
  },
  {
    title: 'Communication Barriers',
    solution: 'Our native team handles all technical talks and negotiations in Chinese.',
    icon: Handshake,
  },
  {
    title: 'Poor Quality Control',
    solution: 'On-site inspections prevent defective goods from leaving the factory.',
    icon: AlertCircle,
  },
  {
    title: 'Logistics Nightmares',
    solution: 'We handle all customs, documentation, and freight forwarding details.',
    icon: TrendingUp,
  },
];

const TrustPoints = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-3">Why Work With Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Removing the Friction from China Sourcing
            </h3>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              Dealing with overseas manufacturers can be daunting. We act as your local office in China, providing the oversight you need to succeed.
            </p>
            
            <div className="space-y-4">
              {[
                "10+ Years of Industry Experience",
                "Transparent Pricing (No Hidden Fees)",
                "Daily Production Updates",
                "Strict Ethical Sourcing Standards"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((item, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                <item.icon className="text-blue-400 w-8 h-8 mb-6" />
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPoints;
