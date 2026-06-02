import { Link } from 'react-router-dom';
import { ArrowRight, Microscope } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-24 md:py-32 bg-cosmos-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,212,255,0.08)_0%,transparent_60%)]" />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cyan-400/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-cyan-400/8 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-cyan-400/10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
        <div className="w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-8 animate-float">
          <Microscope className="w-8 h-8 text-cosmos-cyan" />
        </div>

        <h2 className="font-heading font-bold text-4xl md:text-6xl text-slate-50 mb-6 leading-tight">
          Ready to Dive Into the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmos-cyan to-cosmos-violet">
            Invisible?
          </span>
        </h2>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of curious minds exploring the microscopic world. From classroom to research lab — MicroCosmos is your guide.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/explore"
            className="flex items-center gap-2 bg-cosmos-cyan text-cosmos-black font-semibold px-8 py-4 rounded-full hover:bg-cyan-300 transition-all duration-200 text-base"
          >
            Begin Your Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 border border-cyan-400/30 text-slate-300 font-medium px-8 py-4 rounded-full hover:border-cyan-400/60 hover:text-cosmos-cyan transition-all duration-200 text-base"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
