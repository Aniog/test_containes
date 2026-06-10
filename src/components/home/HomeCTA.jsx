import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomeCTA = () => {
  return (
    <section className="bg-ink text-bone relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs uppercase tracking-widest2 text-accent font-medium">
                Begin Your Project
              </span>
            </div>
            <h2 className="mt-6 font-serif font-light text-4xl md:text-6xl tracking-tight leading-[1.05]">
              Tell us about your <span className="italic text-accentSoft">sheet</span>.
              <br />
              We'll engineer the fold.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-silver text-[17px] leading-relaxed mb-8 lg:max-w-sm lg:ml-auto">
              From quick quotations to bespoke engineering — talk to a real
              engineer, not a salesperson.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-bone text-ink px-8 py-4 text-xs uppercase tracking-widest2 hover:bg-accent transition-colors group"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
