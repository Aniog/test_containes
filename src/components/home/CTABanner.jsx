import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-[#1a4f8a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#a8d4ff] mb-4">Get Started Today</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-[#a8b8cc] text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          Submit your sourcing request and receive a free, no-obligation quote within 24 hours. Our team is ready to help you find the right suppliers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:border-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
          >
            Learn How It Works
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {['No upfront fees', 'Response within 24 hours', 'China-based team', 'Transparent pricing'].map((point) => (
            <div key={point} className="flex items-center gap-2 text-[#a8b8cc] text-sm">
              <CheckCircle className="w-4 h-4 text-[#4ade80]" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
