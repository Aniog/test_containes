import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-[#1a4f8a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 mb-6">
          <MessageSquare className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">Free consultation — no commitment required</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Tell us what you need and we'll provide a free sourcing assessment within 24 hours — including supplier options, estimated costs, and a clear action plan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg text-base transition-colors"
          >
            Learn How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
