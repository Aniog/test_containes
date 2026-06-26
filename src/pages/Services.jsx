import { Link } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  BadgeDollarSign,
  ClipboardCheck,
  Activity,
  Ship,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import CTA from "@/components/shared/CTA";
import { SERVICES } from "@/data/site";

const ICONS = {
  Search,
  ShieldCheck,
  BadgeDollarSign,
  ClipboardCheck,
  Activity,
  Ship,
};

export default function Services() {
  return (
    <>
      <section className="border-b border-ink-200 bg-ink-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Services"
            title="End-to-end sourcing support, one partner in China"
            description="Each service can be booked on its own, but most clients use us across the full chain — from supplier search to delivery at your door."
          />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {SERVICES.map((service, idx) => {
              const Icon = ICONS[service.icon] || Search;
              return (
                <article
                  key={service.id}
                  className="flex flex-col rounded-2xl border border-ink-200 bg-white p-7 transition-colors hover:border-accent-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-900 text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-sm font-semibold text-ink-500">
                      Service {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-brand-900">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {service.summary}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-ink-700">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Engagement models"
                title="One project or an ongoing partnership"
                description="Most clients start with a single project. As trust builds, many move to a retainer model with preferential rates and a dedicated account manager."
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              <Plan
                title="Project-based"
                price="Flat fee per project"
                description="Best for one-off orders and new buyers testing the workflow."
                items={[
                  "Supplier shortlist & negotiation",
                  "Sampling coordination",
                  "Optional QC and shipping",
                ]}
              />
              <Plan
                title="Retainer"
                price="Monthly fee"
                description="For buyers with ongoing orders who need a dedicated sourcing team."
                items={[
                  "Dedicated account manager",
                  "Preferential inspection rates",
                  "Priority capacity booking",
                ]}
                highlight
              />
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Not sure which service fits?"
        description="Send us a brief description of your project and we'll suggest a service mix with an indicative budget."
        primary={{ to: "/contact", label: "Get a Free Sourcing Quote" }}
        secondary={{ to: "/how-it-works", label: "See How It Works" }}
      />
    </>
  );
}

function Plan({ title, price, description, items, highlight }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border bg-white p-6 ${
        highlight
          ? "border-accent-300 ring-2 ring-accent-200"
          : "border-ink-200"
      }`}
    >
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold text-brand-900">{title}</h3>
        {highlight && (
          <span className="rounded-full bg-accent-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-700 ring-1 ring-inset ring-accent-200">
            Most chosen
          </span>
        )}
      </div>
      <p className="mt-1 text-sm font-semibold text-accent-700">{price}</p>
      <p className="mt-3 text-sm text-ink-600">{description}</p>
      <ul className="mt-5 space-y-2 text-sm text-ink-700">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent-700 hover:text-accent-800"
      >
        Discuss this option
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}