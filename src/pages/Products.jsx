import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "../components/ui/Primitives.jsx";
import InquiryForm from "../components/ui/InquiryForm.jsx";
import CTABanner from "../components/sections/CTABanner.jsx";
import { productCategories } from "../data/site.js";
import { productIconMap } from "../data/icons.js";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

export default function Products() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!strkImgConfig || Object.keys(strkImgConfig).length === 0) return;
    return ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  return (
    <>
      <section ref={heroRef} className="bg-navy text-white">
        <div className="container-content py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="kicker text-accent mb-3">Products we source</p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Across 8+ categories, with a dedicated category lead for each
            </h1>
            <p className="mt-5 text-lg text-white/80">
              Each manufacturing cluster in China has its own specialism. We work with
              vetted factories in the right cluster for your product, not a single
              generic factory.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Brief us on your product
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {productCategories.map((c) => {
            const Icon = productIconMap[c.slug] || productIconMap.packaging;
            return (
              <article key={c.slug} className="card card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-navy text-white flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-navy text-xl font-semibold leading-snug">{c.title}</h2>
                    <p className="mt-2 text-ink/80">{c.description}</p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {c.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-sm text-ink/80"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="mt-5">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-accent"
                      >
                        Source in this category <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section className="surface-steel">
        <SectionHeader
          kicker="Don't see your category?"
          title="If it can be made in China, we can probably source it"
          subtitle="The list above covers what we source most often. If your product is in a different category — promotional goods, custom tooling, niche industrial — tell us about it. We will tell you straight away whether we are the right team for it."
        />
        <div className="text-center">
          <Link to="/contact" className="btn-primary">
            Describe your product
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      <Section id="inquiry">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeader
              kicker="Get a quote"
              title="Tell us what you need to source"
              subtitle="We respond within 1 business day with realistic next steps, clarifying questions, and a written quote."
            />
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
