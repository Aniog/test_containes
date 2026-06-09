import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Brain, Eye, MessageSquare, Cpu, BarChart2, Shield } from 'lucide-react';

const technologies = [
  {
    id: 'ml',
    icon: Brain,
    title: 'Machine Learning',
    desc: 'Algorithms that learn from data to make predictions and decisions without being explicitly programmed for each task.',
    gradient: 'from-blue-500 to-indigo-600',
    glow: 'rgba(59,130,246,0.3)',
    titleId: 'tech-ml-title',
    descId: 'tech-ml-desc',
    imgId: 'tech-ml-img-3a7f9d',
  },
  {
    id: 'nlp',
    icon: MessageSquare,
    title: 'Natural Language Processing',
    desc: 'Enabling computers to understand, interpret, and generate human language — powering chatbots, translation, and sentiment analysis.',
    gradient: 'from-purple-500 to-pink-600',
    glow: 'rgba(139,92,246,0.3)',
    titleId: 'tech-nlp-title',
    descId: 'tech-nlp-desc',
    imgId: 'tech-nlp-img-8c2e4b',
  },
  {
    id: 'cv',
    icon: Eye,
    title: 'Computer Vision',
    desc: 'Teaching machines to interpret and understand visual information from the world — images, videos, and real-time camera feeds.',
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.3)',
    titleId: 'tech-cv-title',
    descId: 'tech-cv-desc',
    imgId: 'tech-cv-img-5d1a8f',
  },
  {
    id: 'dl',
    icon: Cpu,
    title: 'Deep Learning',
    desc: 'Multi-layered neural networks inspired by the human brain, capable of learning complex patterns from massive datasets.',
    gradient: 'from-indigo-500 to-purple-600',
    glow: 'rgba(99,102,241,0.3)',
    titleId: 'tech-dl-title',
    descId: 'tech-dl-desc',
    imgId: 'tech-dl-img-2b6c3e',
  },
  {
    id: 'analytics',
    icon: BarChart2,
    title: 'Predictive Analytics',
    desc: 'Using historical data, statistical algorithms, and machine learning to forecast future outcomes and trends.',
    gradient: 'from-green-500 to-cyan-600',
    glow: 'rgba(34,197,94,0.3)',
    titleId: 'tech-analytics-title',
    descId: 'tech-analytics-desc',
    imgId: 'tech-analytics-img-7e4d2a',
  },
  {
    id: 'safety',
    icon: Shield,
    title: 'AI Safety & Ethics',
    desc: 'Ensuring AI systems are aligned with human values, transparent, fair, and safe — a critical field as AI grows more powerful.',
    gradient: 'from-orange-500 to-red-600',
    glow: 'rgba(249,115,22,0.3)',
    titleId: 'tech-safety-title',
    descId: 'tech-safety-desc',
    imgId: 'tech-safety-img-1f9b5c',
  },
];

const TechnologiesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="ai-technologies"
      ref={containerRef}
      className="py-20 md:py-28 bg-ai-dark"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-xs text-ai-purple uppercase tracking-widest font-medium mb-4">
          Core Disciplines
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AI Technologies
          </span>
        </h2>
        <p className="text-center text-slate-400 text-lg max-w-2xl mx-auto mb-4">
          The building blocks powering the AI revolution
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-16" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.id}
                className="group relative p-6 rounded-2xl bg-ai-card border border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] transition-all duration-300 overflow-hidden"
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.gradient} bg-opacity-20 flex items-center justify-center mb-5 shadow-lg`}
                  style={{ boxShadow: `0 0 20px ${tech.glow}` }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Text */}
                <h3 id={tech.titleId} className="text-xl font-semibold text-slate-100 mb-3">
                  {tech.title}
                </h3>
                <p id={tech.descId} className="text-slate-400 text-sm leading-relaxed mb-5">
                  {tech.desc}
                </p>

                {/* Card image */}
                <div className="rounded-xl overflow-hidden border border-indigo-500/10 h-36">
                  <img
                    alt={tech.title}
                    data-strk-img-id={tech.imgId}
                    data-strk-img={`[${tech.descId}] [${tech.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
