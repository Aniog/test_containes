import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-navy-900 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gold-500/5" />
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Upgrade Your Fabrication Line?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Contact our sales team today for a personalized quote, product demo, or to discuss your specific sheet metal folding requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-3.5 rounded-lg font-semibold transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 border border-slate-500 hover:border-white text-white px-8 py-3.5 rounded-lg font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
