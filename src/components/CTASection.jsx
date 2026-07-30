import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Source from China?
        </h2>
        <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
          Tell us what you need. Our team will respond within 24 hours with a tailored sourcing plan and cost estimate — at no charge.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#a93226] transition-colors text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-base"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
