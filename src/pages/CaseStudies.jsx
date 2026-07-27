import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const caseStudies = [
  {
    id: "electronics-retailer",
    title: "European Electronics Retailer",
    industry: "Consumer Electronics",
    country: "Germany",
    challenge:
      "A German retailer needed to source a new line of Bluetooth speakers with specific EU compliance requirements. They had previously experienced quality issues with Chinese suppliers and wanted a reliable partner.",
    solution:
      "We conducted a targeted search across our database of CE-certified electronics manufacturers, shortlisted 5 factories, and performed on-site audits. We selected a factory with ISO 9001 certification and strong export experience to Europe.",
    result:
      "Negotiated 18% cost savings compared to their previous supplier. Delivered 10,000 units within 6 weeks. Defect rate of 0.8% — well below the 3% threshold.",
    metrics: [
      { label: "Cost Savings", value: "18%" },
      { label: "Units Delivered", value: "10,000" },
      { label: "Defect Rate", value: "0.8%" },
      { label: "Timeline", value: "6 Weeks" },
    ],
    imgId: "case-elec-1a2b3c",
  },
  {
    id: "fashion-brand",
    title: "US Fashion Accessories Brand",
    industry: "Apparel & Accessories",
    country: "United States",
    challenge:
      "A US brand needed a supplier for custom-designed bags across 20 SKUs. Their previous supplier had inconsistent quality, with defect rates of 12% causing customer complaints and returns.",
    solution:
      "We audited 5 factories specializing in bag manufacturing, assessed their QC processes, and selected the best fit. We implemented a comprehensive QC protocol including in-process and final inspections.",
    result:
      "Reduced defect rate from 12% to 1.5%. Achieved 15% cost reduction through better material sourcing. Successfully launched 20 SKUs in 10 weeks.",
    metrics: [
      { label: "Defect Rate Reduction", value: "1.5%" },
      { label: "Cost Reduction", value: "15%" },
      { label: "SKUs Launched", value: "20" },
      { label: "Timeline", value: "10 Weeks" },
    ],
    imgId: "case-fashion-4d5e6f",
  },
  {
    id: "industrial-distributor",
    title: "Australian Industrial Distributor",
    industry: "Industrial Tools",
    country: "Australia",
    challenge:
      "An Australian distributor needed to source safety equipment requiring specific AU standards certification. They struggled to find manufacturers willing to meet the certification requirements at competitive prices.",
    solution:
      "We identified manufacturers with experience in Australian standards compliance, managed certification documentation, and coordinated production across 3 factories to meet volume requirements.",
    result:
      "Achieved 22% cost reduction compared to their previous sourcing channel. All products certified to Australian standards. Established long-term partnership with 2 factories.",
    metrics: [
      { label: "Cost Reduction", value: "22%" },
      { label: "Factories", value: "3" },
      { label: "Certification", value: "100%" },
      { label: "Partnership", value: "Ongoing" },
    ],
    imgId: "case-industrial-7g8h9i",
  },
  {
    id: "uk-home-decor",
    title: "UK Home Decor Brand",
    industry: "Home & Garden",
    country: "United Kingdom",
    challenge:
      "A UK home decor brand needed to source handmade ceramic products with specific design requirements. They needed a factory capable of consistent quality across small batch production runs.",
    solution:
      "We identified specialty ceramic manufacturers in Jingdezhen with expertise in handmade production. We coordinated sample development, quality benchmarking, and shipping logistics.",
    result:
      "Sourced 5,000 units across 15 designs. Achieved 30% cost savings compared to domestic production. Products arrived with zero damage through our packaging optimization.",
    metrics: [
      { label: "Cost Savings", value: "30%" },
      { label: "Units", value: "5,000" },
      { label: "Designs", value: "15" },
      { label: "Damage Rate", value: "0%" },
    ],
    imgId: "case-homedecor-0j1k2l",
  },
  {
    id: "canadian-sports",
    title: "Canadian Sports Equipment Brand",
    industry: "Sports & Outdoor",
    country: "Canada",
    challenge:
      "A Canadian brand wanted to source a new line of camping equipment. They needed lightweight, durable products with specific material certifications and competitive pricing.",
    solution:
      "We sourced specialized outdoor equipment manufacturers, verified material certifications, and coordinated pre-production samples. We negotiated pricing based on forecasted annual volumes.",
    result:
      "Launched 8 new product SKUs in 12 weeks. Achieved 25% cost advantage over previous suppliers. Quality rating of 4.8/5 in customer reviews.",
    metrics: [
      { label: "New SKUs", value: "8" },
      { label: "Timeline", value: "12 Weeks" },
      { label: "Cost Advantage", value: "25%" },
      { label: "Quality Rating", value: "4.8/5" },
    ],
    imgId: "case-sports-3m4n5o",
  },
  {
    id: "french-cosmetics",
    title: "French Cosmetics Company",
    industry: "Beauty & Personal Care",
    country: "France",
    challenge:
      "A French cosmetics brand needed to source packaging components and beauty tools. They required suppliers with GMP certification and ability to handle complex custom designs.",
    solution:
      "We identified packaging manufacturers with GMP and ISO 22716 certification. We coordinated tooling development, color matching, and surface finish specifications.",
    result:
      "Sourced packaging for 12 product lines. Reduced packaging costs by 20%. All suppliers met EU cosmetics packaging regulations.",
    metrics: [
      { label: "Product Lines", value: "12" },
      { label: "Cost Reduction", value: "20%" },
      { label: "Compliance", value: "100%" },
      { label: "Delivery", value: "On Time" },
    ],
    imgId: "case-cosmetics-6p7q8r",
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="border-b bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Case Studies
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Real results from real partnerships. See how we&apos;ve helped
              buyers across industries source successfully from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((c, i) => (
              <article
                key={c.id}
                className="grid gap-8 overflow-hidden rounded-xl border bg-white shadow-sm lg:grid-cols-2 lg:gap-0"
              >
                <div
                  className={`overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <img
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[cs-page-desc-${c.id}] [cs-page-title-${c.id}] [cs-page-heading]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={c.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center p-6 sm:p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {c.industry}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {c.country}
                    </span>
                  </div>
                  <h2
                    id={`cs-page-title-${c.id}`}
                    className="mt-3 text-xl font-bold sm:text-2xl"
                  >
                    {c.title}
                  </h2>
                  <p
                    id={`cs-page-desc-${c.id}`}
                    className="mt-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <strong className="text-foreground">Challenge:</strong>{" "}
                    {c.challenge}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">Solution:</strong>{" "}
                    {c.solution}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">Result:</strong>{" "}
                    {c.result}
                  </p>
                  <div className="mt-4 grid grid-cols-4 gap-3">
                    {c.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-lg bg-muted p-2 text-center"
                      >
                        <div className="text-sm font-bold text-primary">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <span id="cs-page-heading" className="hidden">
            Case Studies
          </span>
        </div>
      </section>

      <section className="border-t bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Want Results Like These?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Let&apos;s discuss how we can help you source successfully from
            China.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-primary shadow-sm transition-colors hover:bg-white/90"
          >
            Start Your Sourcing Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}