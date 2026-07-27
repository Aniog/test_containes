import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import {
  Search,
  BadgeCheck,
  ClipboardCheck,
  Activity,
  Ship,
  Boxes,
  ArrowRight,
} from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "@/components/shared/SectionHeader";

const SERVICES = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    titleId: "svc-sourcing-title",
    desc: "We match your product spec to 3–5 pre-vetted Chinese factories within 48 hours.",
    descId: "svc-sourcing-desc",
    image:
      "[svc-sourcing-desc] [svc-sourcing-title] [home-services-eyebrow] [home-services-title]",
    imageId: "home-svc-sourcing-a1b2c3",
    ratio: "4x3",
    width: 600,
    bullets: ["RFQ to 3–5 factories", "Price & MOQ comparison", "Sample coordination"],
  },
  {
    icon: BadgeCheck,
    title: "Factory Verification",
    titleId: "svc-verify-title",
    desc: "On-site checks of legal status, production capacity, equipment and export history.",
    descId: "svc-verify-desc",
    image:
      "[svc-verify-desc] [svc-verify-title] [home-services-eyebrow] [home-services-title]",
    imageId: "home-svc-verify-b2c3d4",
    ratio: "4x3",
    width: 600,
    bullets: ["License & ownership check", "Capacity & workforce", "Reference clients"],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspections",
    titleId: "svc-qc-title",
    desc: "DPI, IPC and PSI inspections against your AQL standards with photo and video reports.",
    descId: "svc-qc-desc",
    image:
      "[svc-qc-desc] [svc-qc-title] [home-services-eyebrow] [home-services-title]",
    imageId: "home-svc-qc-c3d4e5",
    ratio: "4x3",
    width: 600,
    bullets: ["AQL-based sampling", "Same-day reports", "Corrective action follow-up"],
  },
  {
    icon: Activity,
    title: "Production Follow-up",
    titleId: "svc-prod-title",
    desc: "Weekly status updates, milestone photos and escalation when deadlines slip.",
    descId: "svc-prod-desc",
    image:
      "[svc-prod-desc] [svc-prod-title] [home-services-eyebrow] [home-services-title]",
    imageId: "home-svc-prod-d4e5f6",
    ratio: "4x3",
    width: 600,
    bullets: ["Weekly progress reports", "Milestone photos", "Issue escalation"],
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    titleId: "svc-ship-title",
    desc: "FCL, LCL, air and rail quotes from China to your port or Amazon FBA warehouse.",
    descId: "svc-ship-desc",
    image:
      "[svc-ship-desc] [svc-ship-title] [home-services-eyebrow] [home-services-title]",
    imageId: "home-svc-ship-e5f6a7",
    ratio: "4x3",
    width: 600,
    bullets: ["Sea, air & rail", "Customs paperwork", "Door-to-door tracking"],
  },
  {
    icon: Boxes,
    title: "Sample Consolidation",
    titleId: "svc-sample-title",
    desc: "Collect samples from multiple factories, photograph and ship them in one parcel.",
    descId: "svc-sample-desc",
    image:
      "[svc-sample-desc] [svc-sample-title] [home-services-eyebrow] [home-services-title]",
    imageId: "home-svc-sample-f6a7b8",
    ratio: "4x3",
    width: 600,
    bullets: ["Multi-factory samples", "Photo documentation", "Combined shipment"],
  },
];

export function ServicesOverview() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="services" className="section bg-white">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="What we do"
            title="End-to-end sourcing services"
            titleId="home-services-title"
            description="From the first supplier search to the container landing at your port, we manage each step in one place with one accountable team."
            descriptionId="home-services-desc"
            className="max-w-2xl"
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent"
          >
            See all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.titleId}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card transition-shadow hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imageId}
                    data-strk-img={service.image}
                    data-strk-img-ratio={service.ratio}
                    data-strk-img-width={service.width}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/5 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3
                      id={service.titleId}
                      className="text-lg font-semibold text-primary"
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p id={service.descId} className="text-sm text-muted-foreground">
                    {service.desc}
                  </p>
                  <ul className="mt-auto space-y-1.5 border-t border-border pt-4 text-sm text-ink/85">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;
