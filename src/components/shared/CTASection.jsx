import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = ({
  title = "Ready to source from China with confidence?",
  description = "Tell us what you want to buy. We will reply with supplier options, indicative pricing, and a clear next step within one business day.",
  primaryLabel = "Get a Free Sourcing Quote",
  primaryTo = "/contact",
  secondaryLabel = "See how it works",
  secondaryTo = "/how-it-works",
}) => {
  return (
    <section className="bg-[#0B2545]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {title}
            </h2>
            <p className="mt-3 text-white/80 text-base md:text-lg max-w-2xl">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <Link
              to={primaryTo}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#C8102E] hover:bg-[#A30D26] text-white text-sm font-semibold transition-colors"
            >
              {primaryLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={secondaryTo}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/30 text-white hover:bg-white/10 text-sm font-semibold transition-colors"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
