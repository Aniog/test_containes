import { useNavigate } from 'react-router-dom';

export default function MissionBanner() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 bg-space-black relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(79,142,247,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-nebula-blue/10 border border-nebula-blue/30 rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-nebula-blue animate-pulse" />
          <span className="text-nebula-blue text-sm font-inter">Migration countdown: 25 years remaining</span>
        </div>

        <h2 className="font-cinzel text-3xl md:text-5xl text-white mb-6 leading-tight">
          Nothing Human<br />
          <span className="text-stardust-gold">Should Be Forgotten</span>
        </h2>

        <p className="text-slate-300 text-lg font-inter leading-relaxed mb-6 max-w-2xl mx-auto">
          When the first ships leave Earth in 2051, they will carry more than people.
          They will carry every laugh, every loss, every first step and last breath
          that humanity has ever recorded.
        </p>

        <p className="text-slate-500 font-inter mb-10 max-w-xl mx-auto">
          The Memory Archive is a global initiative to ensure that the story of Earth
          travels with us to the stars. Every memory submitted becomes a permanent
          part of the human record.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/about')}
            className="px-8 py-4 bg-stardust-gold hover:bg-yellow-400 text-space-black font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 font-inter"
          >
            Learn About the Mission
          </button>
          <button
            onClick={() => navigate('/submit')}
            className="px-8 py-4 border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white rounded-lg transition-all duration-300 font-inter"
          >
            Add Your Memory
          </button>
        </div>
      </div>
    </section>
  );
}
