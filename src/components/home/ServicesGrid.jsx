import { Link } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  PackageOpen,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/content.js";

const iconMap = {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  PackageOpen,
};

const ServicesGrid = () => {
  return (
    <section className="bg-white border-b border-ink-200">
      <div className="container-page section-pad">
        <div className="max-w-3xl">
          <p className="eyebrow">What we do</p>
          <h2
            id="services-title"
            className="mt-3 text-3xl md:text-4xl font-bold text-ink-900 tracking-tight"
          >
            End-to-end China sourcing, in one accountable partner
          </h2>
          <p
            id="services-sub"
            className="mt-4 text-lg text-ink-700 leading-relaxed"
          >
            From your first inquiry to the cargo arriving at your warehouse —
            we handle the six steps that decide whether a China order is a win
            or a write-off.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div
                key={s.id}
                className="card card-hover p-6 flex flex-col"
              >
                <div className="grid h-11 w-11 place-items-center rounded-md bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3
                  id={`service-${s.id}-title`}
                  className="mt-5 text-lg font-semibold text-ink-900"
                >
                  {s.title}
                </h3>
                <p
                  id={`service-${s.id}-summary`}
                  className="mt-2 text-sm text-ink-700 leading-relaxed"
                >
                  {s.summary}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-ink-700">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-600 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            See all services in detail
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
