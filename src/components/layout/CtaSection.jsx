import { Link } from "react-router-dom";

export default function CtaSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Source from China?
        </h2>
        <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          Tell us what you need. We will match you with verified suppliers and
          guide you through every step.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-secondary text-white text-base font-semibold hover:bg-secondary-dark transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-white/30 text-white text-base font-medium hover:bg-white/10 transition-colors"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
