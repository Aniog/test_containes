import React from 'react';
import { 
  Gauge, 
  ShieldCheck, 
  Settings, 
  Headphones, 
  Zap, 
  Award 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Gauge,
      title: 'Unmatched Accuracy',
      description: 'Folding precision within ±0.1° with automatic angle correction and digital readouts.',
    },
    {
      icon: ShieldCheck,
      title: 'Safety First',
      description: 'Light curtains, two-hand operation, and emergency stops meet the strictest international standards.',
    },
    {
      icon: Settings,
      title: 'Easy Setup',
      description: 'Tool changes in under 60 seconds. Intuitive controls mean minimal training required.',
    },
    {
      icon: Headphones,
      title: 'Lifetime Support',
      description: 'Direct access to factory technicians. Remote diagnostics and on-site service available worldwide.',
    },
    {
      icon: Zap,
      title: 'High Productivity',
      description: 'Cycle times as low as 3 seconds per bend. Optimized for continuous operation.',
    },
    {
      icon: Award,
      title: 'Proven Reliability',
      description: 'Mean time between failures exceeds 25,000 hours. Built for 24/7 production environments.',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="uppercase tracking-[3px] text-xs font-medium text-[#B8860B] mb-4">WHY CHOOSE ARTITECT</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#0A1628] mb-4">
            Engineered for Professionals
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Every detail is designed to maximize productivity, safety, and long-term value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-8 rounded-2xl border border-gray-200 hover:border-[#B8860B]/30 transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-[#F8F9FA] flex items-center justify-center mb-6 group-hover:bg-[#B8860B] transition-colors">
                  <Icon className="w-7 h-7 text-[#0A1628] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-[#0A1628] mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 md:p-10 bg-[#0A1628] rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-semibold text-2xl tracking-tight mb-1">Ready to elevate your fabrication?</div>
            <div className="text-white/70">Speak with a specialist about the right machine for your operation.</div>
          </div>
          <button 
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition - bodyRect - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="px-8 py-3.5 bg-[#B8860B] text-white font-medium rounded-md hover:bg-[#9A7209] transition-colors whitespace-nowrap"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
