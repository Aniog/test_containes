import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { CASES } from "@/data/site";

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E";

const CaseStudies = () => {
  return (
    <>
      <section className="bg-paper-soft border-b border-line">
        <div className="container-x py-14 md:py-20 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-ink-600 mb-3">
            Case Studies
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 leading-tight max-w-3xl mx-auto">
            Selected projects for buyers around the world
          </h1>
          <p className="mt-5 text-lg text-ink-700 leading-relaxed max-w-2xl mx-auto">
            Real engagements across consumer, industrial, and OEM product
            categories. Buyer names kept confidential at their request.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CASES.map((c) => (
            <article
              key={c.id}
              className="bg-white border border-line rounded-lg overflow-hidden hover:border-ink-700 transition-colors flex flex-col"
            >
              <div className="aspect-[16/9] bg-paper-muted">
                <img
                  alt={c.title}
                  data-strk-img-id={`case-${c.id}-img-3a72df`}
                  data-strk-img={`[case-${c.id}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="900"
                  src={placeholder}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 bg-ink-100 text-ink-900 rounded-full font-semibold">
                    {c.industry}
                  </span>
                  <span className="text-ink-600">{c.region}</span>
                </div>
                <h2
                  id={`case-${c.id}-title`}
                  className="mt-3 text-xl font-bold text-ink-900"
                >
                  {c.title}
                </h2>
                <p className="mt-3 text-sm md:text-base text-ink-700 leading-relaxed">
                  {c.summary}
                </p>
                <p className="mt-4 text-sm font-semibold text-trust">
                  <CheckCircle2 className="inline w-4 h-4 mr-1 -mt-0.5" />
                  {c.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink-900 text-white">
        <div className="container-x py-14 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Have a similar project in mind?
          </h2>
          <p className="mt-3 text-ink-100/85 max-w-2xl mx-auto">
            Send us a short brief. We will tell you honestly what is realistic
            and how long it will take.
          </p>
          <div className="mt-7">
            <Button as={Link} to="/contact#quote" size="lg">
              Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;