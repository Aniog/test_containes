import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { TrendingUp, Users, Globe, DollarSign } from 'lucide-react';

const stats = [
  { icon: DollarSign, value: '$1.8T', label: 'Global AI Market by 2030', color: 'text-ai-blue' },
  { icon: Users, value: '97M', label: 'New Jobs Created by AI', color: 'text-ai-purple' },
  { icon: Globe, value: '77%', label: 'Devices Use AI Features', color: 'text-ai-cyan' },
  { icon: TrendingUp, value: '40%', label: 'Productivity Boost', color: 'text-green-400' },
];

const WhatIsAISection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="what-is-ai"
      ref={containerRef}
      className="py-20 md:py-28 bg-[#080818]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <p className="text-center text-xs text-ai-cyan uppercase tracking-widest font-medium mb-4">
          Understanding AI
        </p>

        {/* Section heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            What is Artificial Intelligence?
          </span>
        </h2>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-12" />

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Text content */}
          <div>
            <p id="what-is-ai-desc" className="text-slate-300 text-lg leading-relaxed mb-6">
              Artificial Intelligence is the simulation of human intelligence processes by computer
              systems. It encompasses machine learning, reasoning, problem-solving, perception,
              and language understanding — enabling machines to perform tasks that typically
              require human cognition.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              From the algorithms that recommend your next song to the systems diagnosing diseases
              with superhuman accuracy, AI is quietly becoming the backbone of modern civilization.
              It learns from data, adapts to new inputs, and performs human-like tasks at scale.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Machine Learning', 'Deep Learning', 'Neural Networks', 'NLP', 'Computer Vision'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-indigo-500/10 border border-indigo-500/30 text-indigo-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />
            <div className="relative rounded-3xl overflow-hidden border border-indigo-500/20 shadow-[0_0_40px_rgba(99,102,241,0.15)]">
              <img
                alt="Artificial Intelligence visualization"
                data-strk-img-id="what-is-ai-img-9b4c1e"
                data-strk-img="[what-is-ai-desc] neural network artificial intelligence technology"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label, color }) => (
            <div
              key={label}
              className="p-6 rounded-2xl bg-ai-card border border-indigo-500/20 text-center hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <p className={`text-3xl md:text-4xl font-extrabold mb-2 ${color}`}>{value}</p>
              <p className="text-slate-400 text-sm leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsAISection;
