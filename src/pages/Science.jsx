import { BookOpen } from 'lucide-react';
import ScienceArticleList from '@/components/science/ScienceArticleList';

const milestones = [
  { year: '1676', event: 'Leeuwenhoek first observes bacteria using a handcrafted microscope.' },
  { year: '1857', event: 'Pasteur proves fermentation is caused by microorganisms.' },
  { year: '1928', event: 'Fleming discovers penicillin from the mold Penicillium notatum.' },
  { year: '1953', event: 'Watson and Crick describe the double helix structure of DNA.' },
  { year: '1983', event: 'PCR technique invented, revolutionizing microbial identification.' },
  { year: '2012', event: 'CRISPR-Cas9 gene editing system developed for precise DNA modification.' },
];

const Science = () => {
  return (
    <div className="min-h-screen bg-[#050b18]">
      {/* Page Header */}
      <div className="relative pt-32 pb-16 hero-gradient overflow-hidden">
        <div className="orb w-72 h-72 bg-violet-500/15 top-0 left-1/3 animate-pulse-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-3 h-3" />
            Science & Research
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-4">
            The Science of the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Small
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Cutting-edge research, historical discoveries, and deep dives into the science 
            that reveals the hidden machinery of life.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Articles */}
        <div className="mb-8">
          <h2 className="font-display font-bold text-2xl text-slate-100 mb-2">Latest Articles</h2>
          <p className="text-slate-400 text-sm">Explore our growing library of microbiology content.</p>
        </div>
        <ScienceArticleList />

        {/* Timeline */}
        <div className="mt-24" id="discoveries">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium px-4 py-2 rounded-full mb-4">
              Historical Timeline
            </div>
            <h2 className="font-display font-bold text-3xl text-slate-100">
              Milestones in Microbiology
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#0d1526] border-2 border-cyan-500/40 flex items-center justify-center z-10 relative">
                      <span className="text-cyan-300 font-display font-bold text-xs">{m.year.slice(-2)}</span>
                    </div>
                  </div>
                  <div className="bg-[#0d1526] border border-cyan-500/15 rounded-xl p-5 flex-1 card-hover">
                    <div className="text-cyan-400 font-display font-bold text-sm mb-1">{m.year}</div>
                    <p className="text-slate-300 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Science;
