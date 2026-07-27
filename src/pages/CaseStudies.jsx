import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { MapPin, CalendarDays, ArrowRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import InquiryForm from "@/components/shared/InquiryForm";

const CASES = [
  {
    id: "furniture-us",
    category: "Home & Furniture",
    categoryId: "case-page-furniture-cat",
    title: "Solid-wood dining sets for a US DTC brand",
    titleId: "case-page-furniture-title",
    desc: "A US direct-to-consumer furniture brand was buying from a Shanghai trading company at 12% markup with 71% on-time delivery. We audited two factories in Shandong, negotiated direct pricing and ran combined container loading for 18 SKUs.",
    descId: "case-page-furniture-desc",
    region: "United States",
    regionId: "case-page-furniture-region",
    year: "2026",
    yearId: "case-page-furniture-year",
    stats: [
      { value: "−18%", label: "Landed cost" },
      { value: "96%", label: "On-time shipment" },
      { value: "2", label: "Verified factories" },
    ],
    imageId: "case-page-furniture-1a2b3c",
    image:
      "[case-page-furniture-desc] [case-page-furniture-title] [case-studies-page-eyebrow] [case-studies-page-title]",
  },
  {
    id: "beauty-eu",
    category: "Beauty & Personal Care",
    categoryId: "case-page-beauty-cat",
    title: "Skincare OEM for a French clean-beauty brand",
    titleId: "case-page-beauty-title",
    desc: "A French clean-beauty startup needed an ISO 22716 certified OEM for a 6-SKU skincare line. We found a Guangzhou-based factory, managed CPNP registration, ran formulation samples and shipped the first FCL to Le Havre in 78 days from PO.",
    descId: "case-page-beauty-desc",
    region: "France",
    regionId: "case-page-beauty-region",
    year: "2025",
    yearId: "case-page-beauty-year",
    stats: [
      { value: "78 days", label: "From PO to first FCL" },
      { value: "6", label: "SKUs launched" },
      { value: "100%", label: "CPNP pass" },
    ],
    imageId: "case-page-beauty-2b3c4d",
    image:
      "[case-page-beauty-desc] [case-page-beauty-title] [case-studies-page-eyebrow] [case-studies-page-title]",
  },
  {
    id: "electronics-au",
    category: "Electronics & Accessories",
    categoryId: "case-page-electronics-cat",
    title: "Wireless audio for an Australian retailer",
    titleId: "case-page-electronics-title",
    desc: "An Australian electronics retailer needed a wireless audio supplier that could scale from 500 to 50,000 units. We audited 4 candidates, ran 3 rounds of samples, and consolidated QC for 12 SKUs across two product lines.",
    descId: "case-page-electronics-desc",
    region: "Australia",
    regionId: "case-page-electronics-region",
    year: "2025",
    yearId: "case-page-electronics-year",
    stats: [
      { value: "0.6%", label: "Defect rate" },
      { value: "12", label: "SKUs consolidated" },
      { value: "100x", label: "Volume scale" },
    ],
    imageId: "case-page-electronics-3c4d5e",
    image:
      "[case-page-electronics-desc] [case-page-electronics-title] [case-studies-page-eyebrow] [case-studies-page-title]",
  },
  {
    id: "sports-uk",
    category: "Sports & Outdoor",
    categoryId: "case-page-sports-cat",
    title: "Cycling accessories for a UK e-commerce brand",
    titleId: "case-page-sports-title",
    desc: "A UK cycling accessories brand needed a one-stop supplier for lights, pumps and bags. We built a 3-factory cluster in Shenzhen, ran combined quality inspections and shipped consolidated pallets to a UK 3PL.",
    descId: "case-page-sports-desc",
    region: "United Kingdom",
    regionId: "case-page-sports-region",
    year: "2025",
    yearId: "case-page-sports-year",
    stats: [
      { value: "3", label: "Factory cluster" },
      { value: "−22%", label: "Unit cost" },
      { value: "21 days", label: "UK shelf to door" },
    ],
    imageId: "case-page-sports-4d5e6f",
    image:
      "[case-page-sports-desc] [case-page-sports-title] [case-studies-page-eyebrow] [case-studies-page-title]",
  },
  {
    id: "packaging-ca",
    category: "Packaging & Print",
    categoryId: "case-page-packaging-cat",
    title: "Custom packaging for a Canadian DTC cosmetics brand",
    titleId: "case-page-packaging-title",
    desc: "A Canadian cosmetics brand needed FSC-certified packaging with a 4-week production cycle. We connected them with a Jiangsu-based packaging supplier, ran dieline review and shipped to a Toronto 3PL with customs brokerage.",
    descId: "case-page-packaging-desc",
    region: "Canada",
    regionId: "case-page-packaging-region",
    year: "2024",
    yearId: "case-page-packaging-year",
    stats: [
      { value: "4 wks", label: "Production cycle" },
      { value: "FSC", label: "Certified mill" },
      { value: "5", label: "SKU packaging lines" },
    ],
    imageId: "case-page-packaging-5e6f7a",
    image:
      "[case-page-packaging-desc] [case-page-packaging-title] [case-studies-page-eyebrow] [case-studies-page-title]",
  },
  {
    id: "hardware-de",
    category: "Hardware & Industrial",
    categoryId: "case-page-hardware-cat",
    title: "Machined parts for a German engineering company",
    titleId: "case-page-hardware-title",
    desc: "A German industrial engineering company needed ISO 9001 certified CNC parts with tight tolerance. We audited two Ningbo suppliers, ran first-article inspection, and set up ongoing weekly container shipments to Hamburg.",
    descId: "case-page-hardware-desc",
    region: "Germany",
    regionId: "case-page-hardware-region",
    year: "2024",
    yearId: "case-page-hardware-year",
    stats: [
      { value: "ISO 9001", label: "Certified suppliers" },
      { value: "±0.02mm", label: "Tolerance met" },
      { value: "Weekly", label: "Container schedule" },
    ],
    imageId: "case-page-hardware-6f7a8b",
    image:
      "[case-page-hardware-desc] [case-page-hardware-title] [case-studies-page-eyebrow] [case-studies-page-title]",
  },
];

const CATEGORIES = [
  "All",
  "Home & Furniture",
  "Beauty & Personal Care",
  "Electronics & Accessories",
  "Sports & Outdoor",
  "Packaging & Print",
  "Hardware & Industrial",
];

export function CaseStudies() {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filter]);

  const visible = CASES.filter(
    (c) => filter === "All" || c.category === filter,
  );

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Recent sourcing work with buyers in 40+ countries"
        titleId="case-studies-page-title"
        description="A few real examples of how we help importers, brands and Amazon sellers go from RFQ to first shipment — and what they got out of the engagement."
        descriptionId="case-studies-page-desc"
        imageId="case-studies-page-hero-7a8b9c"
        imageQuery="[case-studies-page-desc] [case-studies-page-title] [case-studies-page-eyebrow]"
        imageAlt="Sourcing team reviewing a completed order on a factory floor"
        breadcrumb={[{ label: "Case Studies" }]}
        primaryCta={{ label: "Get a Free Sourcing Quote", to: "/contact" }}
        secondaryCta={{ label: "See our services", to: "/services" }}
      />

      <section ref={containerRef} className="section bg-white">
        <div className="container-x">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <SectionHeader
              eyebrow="Browse by category"
              title="Pick a project closest to yours"
              titleId="case-filter-title"
              description="Most buyers find a case close to their category, region or order size."
              descriptionId="case-filter-desc"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  filter === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {visible.map((c) => (
              <article
                key={c.id}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card transition-shadow hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    alt={c.title}
                    data-strk-img-id={c.imageId}
                    data-strk-img={c.image}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                  <span
                    id={c.categoryId}
                    className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    {c.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span
                      id={c.regionId}
                      className="inline-flex items-center gap-1.5"
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      {c.region}
                    </span>
                    <span
                      id={c.yearId}
                      className="inline-flex items-center gap-1.5"
                    >
                      <CalendarDays className="h-3.5 w-3.5" />
                      {c.year}
                    </span>
                  </div>
                  <h3
                    id={c.titleId}
                    className="text-lg font-semibold leading-snug text-primary"
                  >
                    {c.title}
                  </h3>
                  <p
                    id={c.descId}
                    className="text-sm text-muted-foreground"
                  >
                    {c.desc}
                  </p>
                  <dl className="mt-2 grid grid-cols-3 gap-2 border-t border-border pt-4">
                    {c.stats.map((s) => (
                      <div key={s.label} className="text-left">
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {s.label}
                        </dt>
                        <dd className="mt-1 text-base font-semibold text-primary">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Get started"
              title="Your project could be the next case study"
              titleId="case-cta-title"
              description="Most of our new clients come from referrals and repeat business. Send us a brief and we will show you a real shortlist for your product."
              descriptionId="case-cta-desc"
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/blog" className="btn-ghost">
                Read the blog
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseStudies;
