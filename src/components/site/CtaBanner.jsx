import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="bg-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to source from China with confidence?
            </h2>
            <p className="mt-3 text-slate-300 text-base md:text-lg max-w-2xl">
              Send us your product brief. We'll come back within one business
              day with a clear sourcing plan, vetted supplier shortlist, and
              transparent fees.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-brand font-semibold px-6 py-3 text-base hover:bg-slate-100 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
