import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="relative bg-graphite text-bone overflow-hidden">
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="cta-bg-artitect-7740de"
        data-strk-bg="[cta-title] [cta-subtitle] precision metal folder workshop close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/85 to-graphite/30"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
            Ready to fold smarter?
          </p>
          <h2
            id="cta-title"
            className="font-serif font-medium tracking-tight text-3xl md:text-4xl lg:text-5xl text-bone max-w-2xl"
          >
            Tell us about the parts you fold — we&rsquo;ll suggest the right machine.
          </h2>
          <p
            id="cta-subtitle"
            className="mt-5 text-mist max-w-xl leading-relaxed"
          >
            Send us your drawings, materials and volumes. Our engineers will reply within 24 hours with a tailored configuration and quote.
          </p>
        </div>
        <div className="lg:col-span-4 flex lg:justify-end">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-gold text-ink px-8 py-5 text-xs uppercase tracking-[0.25em] font-medium hover:bg-bone transition-colors"
          >
            Start the conversation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
