import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CtaBanner = ({
  title = "Ready to start sourcing in China?",
  description = "Tell us your product, target price, and timeline. We reply within one business day with a clear scope and fee.",
  button = "Get a Free Sourcing Quote",
}) => {
  return (
    <section className="bg-slate-900 text-white">
      <div className="container-x py-14 md:py-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              {title}
            </h2>
            <p className="mt-3 text-slate-300">{description}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 text-base font-semibold text-white hover:bg-red-700 transition shadow-sm"
          >
            {button}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
