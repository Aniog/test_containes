import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HomeCta() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-brass font-medium">
          Let's build your bend
        </p>
        <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight text-ink leading-tight">
          Tell us about your sheet,<br className="hidden md:block" /> and we'll specify your machine.
        </h2>
        <p className="mt-8 text-graphite max-w-2xl mx-auto leading-relaxed">
          Share your material, thickness, and typical part. Our engineers will
          recommend the right configuration — from compact folder to
          large-format double folding system.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-ink text-paper hover:bg-steel rounded-sm px-8 py-4 text-sm tracking-wide font-medium transition-colors"
          >
            Talk to an engineer
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 border border-ink text-ink hover:bg-ink hover:text-paper rounded-sm px-8 py-4 text-sm tracking-wide font-medium transition-colors"
          >
            Browse machines
          </Link>
        </div>
      </div>
    </section>
  );
}
