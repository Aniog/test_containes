import { Sparkles } from 'lucide-react';

const Hero = () => (
  <section
    id="about"
    className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050510]"
  >
    {/* Animated gradient orbs */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-700/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/25 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-3xl" />
    </div>

    {/* Grid overlay */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          'linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />

    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
        <Sparkles className="w-4 h-4" />
        The Future is Intelligent
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
        Artificial{' '}
        <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
          Intelligence
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        AI is reshaping how we live, work, and create. From language models to
        autonomous systems, explore the technology that is defining the next era
        of human progress.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#how-it-works"
          className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3 rounded-full transition-colors"
        >
          How It Works
        </a>
        <a
          href="#applications"
          className="border border-white/20 hover:border-violet-400 text-white font-semibold px-8 py-3 rounded-full transition-colors"
        >
          See Applications
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
