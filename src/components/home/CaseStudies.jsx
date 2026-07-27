import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, MapPin, CalendarDays } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "@/components/shared/SectionHeader";

const CASES = [
  {
    id: "case-furniture-us",
    title: "Solid-wood dining sets for a US DTC brand",
    titleId: "case-furniture-title",
    desc: "Replaced a trading-company supplier with two audited factories in Shandong. Cut landed cost by 18% and on-time shipment from 71% to 96%.",
    descId: "case-furniture-desc",
    region: "United States",
    regionId: "case-furniture-region",
    date: "Q1 2026",
    dateId: "case-furniture-date",
    stat: "−18% landed cost",
    statId: "case-furniture-stat",
    imageId: "home-case-furniture-1a2b3c",
    image:
      "[case-furniture-stat] [case-furniture-desc] [case-furniture-title] [home-cases-eyebrow] [home-cases-title]",
  },
  {
    id: "case-beauty-eu",
    title: "Skincare OEM for a French clean-beauty brand",
    titleId: "case-beauty-title",
    desc: "Found an ISO 22716 certified OEM in Guangzhou, managed CPNP registration and shipped the first FCL to Le Havre in 78 days.",
    descId: "case-beauty-desc",
    region: "France",
    regionId: "case-beauty-region",
    date: "Q4 2025",
    dateId: "case-beauty-date",
    stat: "78 days to first FCL",
    statId: "case-beauty-stat",
    imageId: "home-case-beauty-2b3c4d",
    image:
      "[case-beauty-stat] [case-beauty-desc] [case-beauty-title] [home-cases-eyebrow] [home-cases-title]",
  },
  {
    id: "case-electronics-au",
    title: "Wireless audio for an Australian retailer",
    titleId: "case-electronics-title",
    desc: "Audited 4 candidates, ran 3 rounds of samples, and consolidated QC for 12 SKUs. Defect rate fell from 4.2% to 0.6%.",
    descId: "case-electronics-desc",
    region: "Australia",
    regionId: "case-electronics-region",
    date: "Q3 2025",
    dateId: "case-electronics-date",
    stat: "0.6% defect rate",
    statId: "case-electronics-stat",
    imageId: "home-case-electronics-3c4d5e",
    image:
      "[case-electronics-stat] [case-electronics-desc] [case-electronics-title] [home-cases-eyebrow] [home-cases-title]",
  },
];

export function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="case-studies" className="section bg-muted">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Case studies"
            title="Recent work with buyers around the world"
            titleId="home-cases-title"
            description="A few examples of how we help importers, brands and Amazon sellers move from RFQ to first shipment."
            descriptionId="home-cases-desc"
            className="max-w-2xl"
          />
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent"
          >
            All case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CASES.map((c) => (
            <article
              key={c.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imageId}
                  data-strk-img={c.image}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span
                  id={c.statId}
                  className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-sm"
                >
                  {c.stat}
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
                    id={c.dateId}
                    className="inline-flex items-center gap-1.5"
                  >
                    <CalendarDays className="h-3.5 w-3.5" />
                    {c.date}
                  </span>
                </div>
                <h3
                  id={c.titleId}
                  className="text-lg font-semibold leading-snug text-primary"
                >
                  {c.title}
                </h3>
                <p id={c.descId} className="text-sm text-muted-foreground">
                  {c.desc}
                </p>
                <Link
                  to="/case-studies"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent"
                >
                  Read the case
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
