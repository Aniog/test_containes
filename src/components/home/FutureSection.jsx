import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Rocket, Bot, Atom, Globe, Brain } from 'lucide-react';

const futureItems = [
  {
    id: 'agi',
    icon: Brain,
    title: 'Artificial General Intelligence',
    desc: 'AI that matches or exceeds human cognitive abilities across all domains — reasoning, creativity, and emotional intelligence.',
    titleId: 'future-agi-title',
    descId: 'future-agi-desc',
    imgId: 'future-agi-img-5c8b2e',
  },
  {
    id: 'quantum',
    icon: Atom,
    title: 'Quantum AI',
    desc: 'Combining quantum computing with AI to solve problems millions of times faster than classical computers.',
    titleId: 'future-quantum-title',
    descId: 'future-quantum-desc',
    imgId: 'future-quantum-img-7a3f1d',
  },
  {
    id: 'agents',
    icon: Bot,
    title: 'Autonomous AI Agents',
    desc: 'Self-directed AI systems that plan, execute multi-step tasks, and collaborate with other agents to achieve complex goals.',
    titleId: 'future-agents-title',
    descId: 'future-agents-desc',
    imgId: 'future-agents-img-2e9c4b',
  },
  {
    id: 'global',
    icon: Globe,
    title: 'Global AI Governance',
    desc: 'International frameworks ensuring AI development benefits all of humanity while preventing misuse and existential risks.',
    titleId: 'future-global-title',
    descId: 'future-global-desc',
    imgId: 'future-global-img-8d1a6f',
  },
];

const FutureSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="future-of-ai"
      ref={containerRef}
      className="py-20 md:py-28 bg-[#080818] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-ai-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-xs text-ai-purple uppercase tracking-widest font-medium mb-4">
          What's Next
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            The Future of AI
          </span>
        </h2>
        <p className="text-center text-slate-400 text-lg max-w-2xl mx-auto mb-4">
          We are at the beginning of the most transformative technological era in human history
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-16" />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {futureItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group flex gap-6 p-6 rounded-2xl bg-ai-card border border-indigo-500/20 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300">
                  <Icon className="w-7 h-7 text-ai-purple" />
                </div>
                <div>
                  <h3 id={item.titleId} className="text-xl font-semibold text-slate-100 mb-2">
                    {item.title}
                  </h3>
                  <p id={item.descId} className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden border border-indigo-500/30 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-indigo-900/40" />
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative z-10">
            <Rocket className="w-12 h-12 text-ai-cyan mx-auto mb-4 animate-float" />
            <h3 className="text-2xl md:text-4xl font-bold text-slate-100 mb-4">
              The AI Revolution is{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Just Beginning
              </span>
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
              Every breakthrough in AI opens new possibilities for science, medicine, creativity,
              and human potential. The question isn't whether AI will change the world — it already is.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                Join the AI Era
              </div>
              <div className="px-6 py-3 rounded-full border border-indigo-500/50 text-indigo-300 font-semibold text-sm">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
