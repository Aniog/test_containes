import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useStrkImages } from "@/components/layout/useStrkImages";
import SectionHeader from "@/components/sections/SectionHeader";
import InquiryForm from "@/components/sections/InquiryForm";
import { PRODUCT_CATEGORIES } from "@/data/content";

const CATEGORY_DETAIL = {
  "consumer-electronics": {
    blurb:
      "Bluetooth audio, smart home devices, charging accessories, computer peripherals. We look for factories with EMC test capability and clean-room assembly where it matters.",
    watch: ["EMC test certificates", "Component traceability", "Drop & cycle testing"],
  },
  "home-kitchen": {
    blurb:
      "Cookware, tableware, kitchen tools, storage, bedding. Common categories for Amazon FBA, retail, and DTC brands.",
    watch: ["Food-grade material certificates", "Dishwasher & heat cycle testing", "Carton drop test"],
  },
  apparel: {
    blurb:
      "Woven and knit garments, workwear, underwear, accessories. We focus on factories with export-grade cutting, sewing, and finishing lines.",
    watch: ["Fabric & yarn traceability", "Pre-production sample approval", "AQL 2.5 inspection"],
  },
  "beauty-personal-care": {
    blurb:
      "Skincare, haircare, cosmetics, hygiene products. We work with GMP- and ISO 22716-certified contract manufacturers.",
    watch: ["GMP / ISO 22716 certificate", "Stability and micro testing", "FDA / EU CPNP listing support"],
  },
  "industrial-equipment": {
    blurb:
      "Light industrial machinery, tooling, electrical components, MRO supplies. Heavier projects with longer lead times.",
    watch: ["CE / UL certification status", "Spare parts availability", "On-site FAT testing"],
  },
  packaging: {
    blurb:
      "Custom boxes, paper bags, labels, flexible packaging, retail-ready packaging. We align print proofs and Pantone colours before production.",
    watch: ["Pantone match and print proof", "Material compliance (FSC, recycled)", "Carton compression test"],
  },
  "sports-outdoor": {
    blurb:
      "Fitness gear, camping equipment, cycling accessories, water sports. Mixed soft-goods and hard-goods sourcing.",
    watch: ["Material & component sourcing", "Load and stress testing", "Weather resistance"],
  },
  "pet-supplies": {
    blurb:
      "Pet toys, beds, feeders, grooming tools, apparel. Fast-growing category with strict safety expectations in the US and EU.",
    watch: ["ASTM F963 / EN71 toy safety", "Material declarations", "CPSIA compliance for US"],
  },
  furniture: {
    blurb:
      "Flat-pack furniture, storage solutions, office furniture, outdoor furniture. Volume projects with detailed engineering specs.",
    watch: ["Knock-down test", "Load rating", "Compliance with CARB Phase 2 / TSCA"],
  },
  "toys-games": {
    blurb:
      "Children's toys, board games, plush, electronic toys. Strict compliance — we only shortlist factories that test against destination-market rules.",
    watch: ["EN71 / ASTM F963", "CPSIA tracking labels", "Age-grading and warnings"],
  },
  "auto-accessories": {
    blurb:
      "Interior accessories, organisers, tools, electronic add-ons. We check vehicle compatibility and product safety claims carefully.",
    watch: ["Compatibility claims", "Material certifications", "Heat & vibration testing"],
  },
  stationery: {
    blurb:
      "Office supplies, paper goods, writing instruments, kids' stationery. Steady category with strong OEM and private-label demand.",
    watch: ["Ink and material safety", "Carton and inner-pack spec", "Print accuracy"],
  },
};

export default function Products() {
  const ref = useStrkImages();
  return (
    <div ref={ref} className="bg-white">
      <section className="bg-navy text-white">
        <div className="container-x py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">Products we source</p>
            <h1 id="products-title" className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
              The product categories we are actively working in
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-2xl">
              If your product is not on the list, ask us anyway — we work with a wider network than this page suggests, and we will tell you honestly if it is outside our scope.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCT_CATEGORIES.map((cat) => {
              const detail = CATEGORY_DETAIL[cat.id];
              return (
                <article key={cat.id} className="card overflow-hidden flex flex-col">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                    <img
                      alt={cat.label}
                      data-strk-img-id={`prod-img-${cat.id}-p1`}
                      data-strk-img={`[prod-title-${cat.id}] [products-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 id={`prod-title-${cat.id}`} className="text-lg font-semibold text-ink">{cat.label}</h3>
                    {detail && <p className="mt-2 text-sm leading-6 text-ink-soft">{detail.blurb}</p>}
                    {detail && (
                      <>
                        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink">What we look for</p>
                        <ul className="mt-2 space-y-1.5 text-sm text-ink">
                          {detail.watch.map((w) => (
                            <li key={w} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 mt-0.5 text-success shrink-0" />
                              {w}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container-x py-16 md:py-24">
          <SectionHeader
            eyebrow="Not on the list?"
            title="We source outside this list too"
            subtitle="The list above is the categories we run most often. We regularly handle bespoke industrial parts, OEM tooling, and niche consumer goods — the same sourcing discipline applies."
          />
          <div className="mt-10 text-center">
            <Link to="/contact" className="btn-primary">
              Tell us what you need
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow">Get started</p>
              <h2 className="section-title mt-3 text-balance">
                Share your product brief and we will reply within 24 hours
              </h2>
              <p className="section-subtitle">
                A clear product description, target quantity, and destination market are enough to start. We come back with a shortlist and the next steps.
              </p>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
