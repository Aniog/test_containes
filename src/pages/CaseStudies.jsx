import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "@/components/shared/SectionHeader";
import CtaButton from "@/components/shared/CtaButton";

const caseStudies = [
  {
    client: "European Hardware Distributor",
    location: "Germany",
    title: "Switching to a Reliable Metal Parts Supplier",
    challenge: "The client was receiving inconsistent metal components from a supplier found online. Defect rates reached 12%, causing customer complaints and returns.",
    solution: "We conducted factory audits at three potential suppliers, evaluated sample quality, and recommended a manufacturer with better equipment and quality processes. We then set up incoming material checks and pre-shipment inspections.",
    result: "Defect rate dropped to under 2% within two production runs. The client placed repeat orders with confidence.",
    tags: ["Factory Verification", "Quality Control", "Industrial Components"],
  },
  {
    client: "Australian Retail Brand",
    location: "Australia",
    title: "Seasonal Packaging and Private Label Launch",
    challenge: "The client needed 15,000 units of private-label products packaged and delivered in time for a seasonal launch. Multiple suppliers were involved.",
    solution: "We sourced the product manufacturer and packaging supplier, coordinated sample approvals, tracked production weekly, and managed consolidation and sea freight booking.",
    result: "The full order was delivered on schedule, ready for the seasonal campaign.",
    tags: ["Supplier Sourcing", "Production Follow-Up", "Shipping"],
  },
  {
    client: "US E-Commerce Seller",
    location: "United States",
    title: "Cost Reduction for Electronics Accessories",
    challenge: "The client's margins were shrinking due to rising costs from their existing supplier. They needed equivalent quality at a lower landed cost.",
    solution: "We identified two alternative suppliers, compared quotes and samples, negotiated payment terms, and established a quality standard for repeat orders.",
    result: "Landed cost reduced by 18% while product consistency improved through structured QC checkpoints.",
    tags: ["Supplier Sourcing", "Negotiation", "Quality Control"],
  },
  {
    client: "Middle Eastern Trading Company",
    location: "UAE",
    title: "Multi-Category Sourcing for a New Product Line",
    challenge: "The client wanted to launch a new catalog with products across home goods, packaging, and promotional items, but had no supplier network in China.",
    solution: "We built a supplier shortlist for each category, coordinated sampling, and provided factory verification reports. We also supported the first orders with production follow-up.",
    result: "The client launched five new product lines with verified suppliers and a repeatable sourcing process.",
    tags: ["Supplier Sourcing", "Factory Verification", "Project Management"],
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold tracking-wider text-teal-400 uppercase mb-3">Case Studies</span>
            <h1 id="cs-title" className="text-4xl md:text-5xl font-bold mb-6">Real Results from Real Projects</h1>
            <p id="cs-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed">
              See how businesses like yours have improved their sourcing outcomes with our support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Selected Client Projects"
            description="Each project is different. These examples show typical challenges and outcomes we help clients achieve."
          />

          <div className="space-y-12 md:space-y-16">
            {caseStudies.map((study, index) => {
              const titleId = `study-title-${index}`;
              const descId = `study-desc-${index}`;
              const imgId = `study-img-${index}`;
              const isEven = index % 2 === 0;

              return (
                <article key={study.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                      <img
                        data-strk-img-id={imgId}
                        data-strk-img={`[${descId}] [${titleId}] [cs-title] [cs-subtitle]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-slate-500 mb-2">{study.client} · {study.location}</p>
                    <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{study.title}</h2>
                    <p id={descId} className="sr-only">{study.title}. {study.challenge} {study.solution} {study.result}</p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-1">Challenge</h4>
                        <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-1">Solution</h4>
                        <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                      </div>
                      <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
                        <h4 className="text-sm font-semibold text-teal-800 uppercase tracking-wide mb-1">Result</h4>
                        <p className="text-teal-900 font-medium">{study.result}</p>
                      </div>
                    </div>
                    <CtaButton to="/contact">Discuss a Similar Project</CtaButton>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
