import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm text-indigo-300 font-medium">
          <Sparkles className="w-4 h-4" />
          The Future of Intelligence is Here
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Explore the World of{' '}
          <span className="gradient-text">Artificial Intelligence</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          From machine learning to neural networks, discover how AI is reshaping
          industries, empowering humans, and building a smarter tomorrow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('features')}
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:scale-105 border-none cursor-pointer text-base animate-pulse-glow"
          >
            Explore AI <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollTo('how-it-works')}
            className="flex items-center justify-center gap-2 glass hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:scale-105 cursor-pointer text-base"
          >
            How It Works
          </button>
        </div>

        {/* Floating badge */}
        <div className="mt-20 flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
          {['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Generative AI'].map((tag) => (
            <span key={tag} className="glass px-4 py-1.5 rounded-full text-indigo-300 text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
