import { Link } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  BadgeDollarSign,
  ClipboardCheck,
  Activity,
  Ship,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { SERVICES } from "@/data/site";

const ICONS = {
  Search,
  ShieldCheck,
  BadgeDollarSign,
  ClipboardCheck,
  Activity,
  Ship,
};

export default function ServicesOverview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="What we do"
            title="Six services, one sourcing partner"
            description="From supplier search to delivered goods, we manage the full chain so you can focus on your customers."
            className="max-w-2xl"
          />
          <Link
            to="/services"
            className="hidden text-sm font-semibold text-accent-700 hover:text-accent-800 sm:inline-flex sm:items-center sm:gap-1"
          >
            See all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] || Search;
            return (
              <article
                key={service.id}
                className="group relative flex flex-col rounded-2xl border border-ink-200 bg-white p-7 transition-colors hover:border-accent-300 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 text-accent-700 ring-1 ring-inset ring-accent-200">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-brand-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {service.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-ink-700">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-10 sm:hidden">
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent-700 hover:text-accent-800"
          >
            See all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}