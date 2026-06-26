import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { SERVICES } from "@/lib/site-data";
import PageHero from "@/components/site/PageHero";
import Icon from "@/components/site/Icon";

export default function Services() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Services"
        title="End-to-end sourcing services from China"
        description="Whether you need a one-off supplier check or a fully managed import program, we cover every stage between your purchase order and your warehouse door."
        titleId="services-page-title"
        descId="services-page-desc"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SERVICES.map((s) => (
              <article
                key={s.id}
                id={s.id}
                className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy-700 flex-shrink-0">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-navy-900">
                      {s.title}
                    </h2>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      {s.summary}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5 border-t border-slate-200 pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Not sure which services you need?
          </h2>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
            Send us a few details about your project. We will recommend a scope and
            send back an indicative quote, with no obligation.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3.5 transition"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
