import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeCallToAction = () => {
  return (
    <section className="py-24 md:py-32 bg-obsidian relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-bio-green/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-bio-green" />
          <span className="font-mono text-[11px] text-bio-green tracking-widest uppercase">
            Begin Your Observation
          </span>
          <div className="w-8 h-px bg-bio-green" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
          Ready to Look Closer?
        </h2>
        <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
          The most extraordinary structures in biology are invisible to the naked eye. Adjust your focus, calibrate your lens, and prepare to see the world as it truly is.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/specimens"
            className="inline-flex items-center gap-3 px-8 py-4 bg-bio-green text-obsidian font-semibold rounded-full hover:bg-bio-green-dim transition-all duration-200 shadow-glow-green group"
          >
            Enter the Specimen Hub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 px-8 py-4 border border-border-dim text-text-secondary font-medium rounded-full hover:border-bio-green/30 hover:text-text-primary transition-all duration-200"
          >
            Browse the Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCallToAction;
