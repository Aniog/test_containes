import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "@/components/site/PageHeader";
import StrkImage from "@/components/site/StrkImage";
import Faq from "@/components/site/Faq";
import InquiryForm from "@/components/forms/InquiryForm";
import ContactStrip from "@/components/site/ContactStrip";
import { services, faqs } from "@/data/site";

const Services = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Our services"
        title="Six services. One point of contact for your China project."
        subtitle="We work on a transparent service fee, not a markup on the goods. You pay the factory directly. We act as your local team — from supplier shortlist to delivered-to-your-door."
        primaryCtaLabel="Get a Free Sourcing Quote"
        primaryCtaTo="/contact"
      />

      <section className="section bg-white">
        <div className="container-x space-y-12">
          {services.map((s, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <div
                key={s.id}
                className={`grid items-center gap-10 lg:grid-cols-12 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
                id={`service-${s.id}`}
              >
                <div className="lg:col-span-6">
                  <div className="overflow-hidden rounded-xl border border-surface-200">
                    <StrkImage
                      imgId={`service-${s.id}-img`}
                      query={`[service-${s.id}-summary] [service-${s.id}-title] [services-section-title]`}
                      ratio="4x3"
                      width={900}
                      alt={s.title}
                      imgClassName="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <span className="eyebrow">{s.eyebrow}</span>
                  <h2
                    id={`service-${s.id}-title`}
                    className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-ink-900 md:text-[34px]"
                  >
                    {s.title}
                  </h2>
                  <p
                    id={`service-${s.id}-summary`}
                    className="mt-4 text-[16px] leading-relaxed text-ink-600"
                  >
                    {s.summary}
                  </p>
                  <ul className="mt-5 space-y-2.5 text-[15px] text-ink-700">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section bg-surface-50">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="eyebrow">Pricing</span>
              <h2
                id="services-pricing-title"
                className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-ink-900 md:text-[34px]"
              >
                Clear fees, written before we start.
              </h2>
              <p
                id="services-pricing-subtitle"
                className="mt-4 text-[15.5px] leading-relaxed text-ink-600"
              >
                Most projects fall into one of three pricing models. We send
                a written quote after reviewing your brief.
              </p>
            </div>
            <div className="md:col-span-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Sourcing only",
                  price: "from $200",
                  sub: "per shortlist",
                  body:
                    "Best when you have a clear product spec and just need a verified supplier.",
                },
                {
                  title: "Full service",
                  price: "3 – 7%",
                  sub: "of order value",
                  body:
                    "Sourcing + QC + shipping, with a minimum project fee per engagement.",
                },
                {
                  title: "Retainer",
                  price: "monthly",
                  sub: "for active sellers",
                  body:
                    "Dedicated project manager, ongoing supplier pipeline, priority inspections.",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="card flex flex-col p-6"
                  id={`service-pricing-${p.title.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <h3 className="text-[16.5px] font-semibold text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-2">
                    <span className="text-[24px] font-bold text-ink-900">
                      {p.price}
                    </span>{" "}
                    <span className="text-[13.5px] text-ink-500">
                      {p.sub}
                    </span>
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-600">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-ink-900 md:text-[34px]">
                Services FAQ
              </h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-ink-600">
                The questions buyers ask us most about how we work.
              </p>
            </div>
            <div className="md:col-span-8">
              <Faq items={faqs} idPrefix="services-faq" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-50">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="eyebrow">Start a project</span>
              <h2 className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-ink-900 md:text-[34px]">
                Tell us what you need.
              </h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink-600">
                A short description is enough. We will reply with a plan, a
                realistic price range, and a list of next steps.
              </p>
              <div className="mt-6">
                <Link to="/how-it-works" className="btn btn-outline btn-sm">
                  See the 5-step process
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="md:col-span-7">
              <InquiryForm idPrefix="services" />
            </div>
          </div>
        </div>
      </section>

      <ContactStrip
        title="Not sure which service fits? Start with a free shortlist."
        subtitle="Send us a brief. We will come back with the recommended services, a written quote, and a timeline."
      />
    </div>
  );
};

export default Services;
