import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTABanner({
  eyebrow = "Ready to start?",
  title = "Tell us what you need to source from China.",
  description = "Send a short brief and we’ll come back with realistic MOQs, lead times, and a shortlist of pre-vetted factories within one business day.",
  primaryTo = "/contact",
  primaryLabel = "Get a Free Sourcing Quote",
  secondaryTo = "/how-it-works",
  secondaryLabel = "See how it works",
}) {
  return (
    <div className="bg-brand-800 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none"
           style={{
             backgroundImage:
               "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0, transparent 35%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.25) 0, transparent 40%)",
           }}
      />
      <div className="relative max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-500">
          {eyebrow}
        </p>
        <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-3 text-base md:text-lg text-white/80 leading-relaxed">
          {description}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            to={primaryTo}
            className="inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-semibold px-6 py-3 rounded-md transition shadow-sm"
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to={secondaryTo}
            className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-brand-800 font-semibold px-6 py-3 rounded-md transition"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
