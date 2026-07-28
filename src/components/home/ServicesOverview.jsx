import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Activity,
  Ship,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/data/content";
import SectionHeader from "@/components/sections/SectionHeader";

const ICONS = {
  "supplier-sourcing": Search,
  "factory-verification": ShieldCheck,
  "quality-control": ClipboardCheck,
  "production-follow-up": Activity,
  "shipping-coordination": Ship,
  "sourcing-strategy": Lightbulb,
};

export default function ServicesOverview() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="section bg-white">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
          <SectionHeader
            eyebrow="Our Services"
            title="End-to-end sourcing support in China"
            subtitle="Six core services that cover the full journey from supplier search to delivery at your door."
          />
          <Link
            to="/services"
            className="btn-ghost self-start md:self-end shrink-0"
          >
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.id] || Search;
            return (
              <article
                key={s.id}
                id={`svc-${s.id}-title`}
                className="card p-6 md:p-7 hover:shadow-elevated transition-shadow"
              >
                <div className="w-11 h-11 rounded-md bg-primary-light text-primary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {s.short}
                </p>
                <Link
                  to={`/services#${s.id}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
