import React from 'react';
import { ShieldCheck, Clock, Banknote, Users, MessageSquare, Scale } from 'lucide-react';

const trustPoints = [
  { icon: <ShieldCheck size={24} />, title: 'Risk Mitigation', desc: 'We verify every factory to ensure they are legitimate and capable.' },
  { icon: <Clock size={24} />, title: 'Speed to Market', desc: 'Direct local presence means faster communication and quicker production cycles.' },
  { icon: <Banknote size={24} />, title: 'Cost Optimized', desc: 'Direct-from-factory pricing without middleman markups.' },
  { icon: <MessageSquare size={24} />, title: 'No Language Barrier', desc: 'Our bilingual team ensures your requirements are perfectly understood.' },
  { icon: <Users size={24} />, title: 'Market Insights', desc: 'Local trends and supplier network built over 10 years in China.' },
  { icon: <Scale size={24} />, title: 'Strict QC', desc: 'Local QC team on the ground to catch defects before they leave the factory.' }
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id="why-title" className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Overseas Buyers Trust Us</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Sourcing from China can be complex and risky. We act as your local office on the ground, protecting your interests and ensuring your supply chain remains robust.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex flex-col">
                  <div className="text-secondary mb-3">{point.icon}</div>
                  <h4 className="font-bold text-primary mb-2">{point.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3] relative">
              <img 
                data-strk-img-id="trust-image"
                data-strk-img="China business meeting factory quality control inspection"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="SSourcing China Team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Simple Stats Overlay */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-xl hidden md:block border border-gray-100">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Trusted Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10k+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">SKUs Sourced</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
