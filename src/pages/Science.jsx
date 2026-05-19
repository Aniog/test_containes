import ScienceTopics from '@/components/science/ScienceTopics';
import ScienceTimeline from '@/components/science/ScienceTimeline';

export default function Science() {
  return (
    <div className="min-h-screen bg-[#050d1a] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <p className="text-cyan-400 text-sm uppercase tracking-widest mb-3">Science</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            The Science of the <span className="text-cyan-400">Small</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
            Explore the scientific principles behind microbiology, cell biology, virology, and crystallography — the disciplines that reveal our invisible world.
          </p>
        </div>

        <ScienceTopics />
        <ScienceTimeline />
      </div>
    </div>
  );
}
