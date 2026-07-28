import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Check, ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/content";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import InquiryForm from "@/components/sections/InquiryForm";

const ICONS = {
  "supplier-sourcing": "01",
  "factory-verification": "02",
  "quality-control": "03",
  "production-follow-up": "04",
  "shipping-coordination": "05",
  "sourcing-strategy": "06",
};

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Six services that cover the full China sourcing journey"
        subtitle="From the first supplier shortlist to the container on the water, we work as an extension of your team in China."
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Services" },
        ]}
      />

      <section ref={ref} className="section bg-white">
        <div className="container-x">
          <div className="space-y-12 md:space-y-16">
            {SERVICES.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 scroll-mt-24"
              >
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="card overflow-hidden">
                    <div
                      className="aspect-[4/3] w-full bg-surface-muted"
                      data-strk-bg-id={`svc-bg-${s.id}-d4e5f6`}
                      data-strk-bg={`[${s.id}-title] [${s.id}-desc] services`}
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="900"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-primary bg-primary-light rounded-md px-2 py-1">
                      {ICONS[s.id]}
                    </span>
                    <p className="eyebrow">Service</p>
                  </div>
                  <h2
                    id={`${s.id}-title`}
                    className="text-2xl md:text-3xl font-bold text-ink mb-3"
                  >
                    {s.title}
                  </h2>
                  <p
                    id={`${s.id}-desc`}
                    className="text-base text-ink-soft leading-relaxed mb-5"
                  >
                    {s.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Inquiry */}
      <section className="section bg-surface-muted">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Get a Quote"
                title="Not sure which service you need?"
                subtitle="Tell us your situation and we will recommend the right combination — sourcing, audit, QC, and shipping — for your project."
              />
              <div className="mt-6">
                <Link to="/how-it-works" className="btn-secondary">
                  How our process works <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
