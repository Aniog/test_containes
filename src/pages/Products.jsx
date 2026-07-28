import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { PRODUCTS } from "@/data/content";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import InquiryForm from "@/components/sections/InquiryForm";

const NOTES = {
  "Consumer Goods": [
    "Sample evaluation against your spec sheet, not just the factory's",
    "Packaging and barcoding support for retail and Amazon FBA",
    "Lab testing for safety and material compliance (FDA, LFGB, REACH)",
  ],
  "Apparel & Textiles": [
    "Fabric and trim sourcing with mill-level traceability on request",
    "Fit sample rounds with measurement sheets before bulk production",
    "AQL-based inspections calibrated for garment defects",
  ],
  "Industrial & Hardware": [
    "Material certificates (mill cert, RoHS, REACH) collected at production",
    "Functional testing against your drawings and tolerances",
    "Pre-shipment dimensional and visual inspection",
  ],
  "Electronics & Components": [
    "Pre-production sample and lab testing (CE, FCC, RoHS, RCM)",
    "During-production function tests and traceability by batch",
    "Aging test, drop test, and packaging drop test on request",
  ],
  "Furniture & Home Décor": [
    "Material and finish samples approved before production",
    "Drop test and stability test for furniture, where relevant",
    "Container loading photos and packing list verification",
  ],
  "Packaging & Materials": [
    "Material and food-grade certificate handling",
    "Print proof and color match approval workflow",
    "Carton compression and drop tests for shipping durability",
  ],
};

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products We Source"
        title="Categories our team has direct experience in"
        subtitle="We work across consumer goods, industrial products, and packaging. Each category has its own supply base, lead times, and compliance requirements — we treat them differently."
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Products We Source" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCTS.map((p) => (
              <article key={p.category} className="card p-6 md:p-7">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-ink">{p.category}</h3>
                  <span className="badge">Sourced</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-ink-muted mb-2">
                      Examples
                    </p>
                    <ul className="space-y-1.5 text-sm text-ink-soft">
                      {p.items.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-ink-muted mb-2">
                      How we work in this category
                    </p>
                    <ul className="space-y-1.5 text-sm text-ink-soft">
                      {NOTES[p.category]?.map((n) => (
                        <li key={n} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface-muted">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Don't see your category?"
                title="We also work in adjacent categories"
                subtitle="If your product is not listed above, it is very likely we can still help. Tell us what you are sourcing and we will tell you honestly whether we are the right partner."
              />
              <ul className="mt-6 space-y-2 text-sm text-ink-soft">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Automotive parts and accessories</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Medical and personal protective equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Promotional and gift items</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Stationery and office supplies</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/contact" className="btn-primary">
                  Ask about your product <ArrowRight className="w-4 h-4" />
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
