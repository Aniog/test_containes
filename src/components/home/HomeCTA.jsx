import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomeCTA() {
  return (
    <section className="py-24 md:py-32 bg-[#0f1629] border-t border-[#1e2a4a]">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#f5c842] mb-6">
          Ready to Explore?
        </p>
        <h2 className="font-serif text-4xl md:text-6xl font-light text-[#f0f4ff] mb-6 leading-tight">
          The universe is waiting
          <br />
          <em className="text-[#f5c842] not-italic">for your questions.</em>
        </h2>
        <p className="text-[#8892b0] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Every great discovery began with a question. Submit yours to your
          physics teacher and start your journey through the cosmos.
        </p>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-3 px-10 py-4 bg-[#f5c842] text-[#0a0e1a] font-semibold rounded-full hover:bg-amber-300 transition-all duration-300 shadow-[0_0_40px_rgba(245,200,66,0.25)] hover:shadow-[0_0_60px_rgba(245,200,66,0.4)] text-base"
        >
          Ask a Question
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
