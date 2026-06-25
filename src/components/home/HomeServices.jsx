import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Building2,
  ClipboardCheck,
  TrendingUp,
  Ship,
  DraftingCompass,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";

const iconMap = {
  Search,
  Building2,
  ClipboardCheck,
  TrendingUp,
  Ship,
  DraftingCompass,
};

export function HomeServices() {
  const containerRef = useRef(null);

  return (
    <Section id="services" size="default" tone="default">
      <div ref={containerRef} className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Services"
            title="End-to-end sourcing, on your behalf in China"
            description="Six core services covering the full journey from supplier shortlist to consolidated shipment. Pick one, or hand the whole process to us."
          />
          <div className="flex-shrink-0">
            <Button to="/services" variant="outline" size="md">
              All services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Search;
            return (
              <Link
                key={service.id}
                to={`/services#${service.slug}`}
                id={`home-service-${service.slug}`}
                className={cn(
                  "group flex flex-col h-full rounded-xl border border-brand-line bg-white p-6 md:p-7 transition-all duration-200",
                  "hover:border-brand-navy/40 hover:shadow-md hover:-translate-y-0.5"
                )}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-red/10 text-brand-red">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3
                  id={`home-service-${service.slug}-title`}
                  className="mt-5 text-lg font-semibold text-brand-navy"
                >
                  {service.title}
                </h3>
                <p
                  id={`home-service-${service.slug}-desc`}
                  className="mt-2 text-sm leading-relaxed text-brand-ink-muted flex-1"
                >
                  {service.short}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
