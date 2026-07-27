import React from "react";
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
import { services } from "@/data/site";

const iconMap = {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  PackageOpen,
};

const ServicesSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Our services</span>
            <h2
              id="services-section-title"
              className="mt-3 text-[32px] font-bold leading-tight tracking-tight text-ink-900 md:text-[42px]"
            >
              Six services. One point of contact for your China project.
            </h2>
          </div>
          <p
            id="services-section-subtitle"
            className="max-w-md text-[15.5px] leading-relaxed text-ink-600"
          >
            Pick the pieces you need, or let us run the whole project from
            shortlist to delivery. We work on a transparent service fee, not
            a margin on the goods.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon] || Search;
            return (
              <article
                key={s.id}
                className="card card-hover flex flex-col p-6"
                id={`service-${s.id}-card`}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent-50 text-accent-600">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500">
                    {s.eyebrow}
                  </span>
                </div>
                <h3
                  id={`service-${s.id}-title`}
                  className="mt-5 text-[20px] font-semibold leading-snug text-ink-900"
                >
                  {s.title}
                </h3>
                <p
                  id={`service-${s.id}-summary`}
                  className="mt-2.5 text-[14.5px] leading-relaxed text-ink-600"
                >
                  {s.summary}
                </p>
                <ul className="mt-4 space-y-2 text-[14px] text-ink-700">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex-1" />
                <Link
                  to="/services"
                  className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink-900 hover:text-accent-600"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
