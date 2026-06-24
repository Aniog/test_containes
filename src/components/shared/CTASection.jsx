import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-graphite text-bone">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-3 gap-10 items-end">
        <div className="lg:col-span-2">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brass mb-5">
            Tell us what you fold
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight">
            Send us a sheet, and we will{" "}
            <span className="italic text-brass">recommend the machine</span>{" "}
            that suits it best.
          </h2>
          <p className="mt-6 max-w-xl text-mist/80 font-light leading-relaxed">
            Share your sheet sizes, materials, and target volumes — our
            application engineers will respond within one working day with
            specifications, indicative pricing, and a delivery window.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:items-end">
          <Link
            to="/contact"
            className="bg-bone text-ink px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-brass-soft transition-colors text-center"
          >
            Request a quote
          </Link>
          <Link
            to="/products"
            className="border border-bone/30 text-bone px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-bone/10 transition-colors text-center"
          >
            Compare models
          </Link>
        </div>
      </div>
    </section>
  );
}
