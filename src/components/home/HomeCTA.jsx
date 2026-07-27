import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-white mb-4">
              Ready to Source Smarter from China?
            </h2>
            <p className="text-blue-100/80 text-lg leading-relaxed mb-8">
              Tell us what you need and we will send you a free, no-obligation
              sourcing quote within 48 hours. No upfront payment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary font-medium rounded-md hover:bg-slate-100 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <img
                data-strk-img-id="cta-shipping-4d5e6f"
                data-strk-img="[cta-title] [cta-desc]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Shipping containers at port"
                className="w-full h-auto rounded-md object-cover"
              />
              <div className="mt-4 flex items-center justify-between text-white/80 text-sm">
                <span>Average quote turnaround: 48 hours</span>
                <span>Free initial consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
