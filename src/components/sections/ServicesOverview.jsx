import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { SERVICES } from "@/data/content"
import { Section, SectionHeader } from "@/components/shared/Section"

const ICON_MAP = {
  "supplier-sourcing": "Search",
  "factory-verification": "ShieldCheck",
  "quality-inspection": "ClipboardCheck",
  "production-follow-up": "Activity",
  "shipping-logistics": "Truck",
  "oem-odm": "PenTool",
}

function ServiceIcon({ name, className }) {
  const lucideProps = {
    className,
    "aria-hidden": true,
  }
  switch (name) {
    case "Search":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...lucideProps}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      )
    case "ShieldCheck":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...lucideProps}>
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    case "ClipboardCheck":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...lucideProps}>
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      )
    case "Activity":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...lucideProps}>
          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.5.5 0 0 1-.96 0L9.79 4.63a.5.5 0 0 0-.96 0l-2.35 8.36A2 2 0 0 1 4.55 14H2" />
        </svg>
      )
    case "Truck":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...lucideProps}>
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
          <circle cx="17" cy="18" r="2" />
          <circle cx="7" cy="18" r="2" />
        </svg>
      )
    case "PenTool":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...lucideProps}>
          <path d="m12 19 7-7 3 3-7 7-3-3z" />
          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="m2 2 7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      )
    default:
      return null
  }
}

export default function ServicesOverview() {
  return (
    <Section id="services" className="bg-white">
      <div className="container-x">
        <SectionHeader
          eyebrow="What we do"
          title="A complete China sourcing partner under one roof"
          subtitle="From the first supplier search to the moment your container is loaded at port, we coordinate the work that makes an import actually work."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              id={`svc-${s.id}`}
              className="card group flex flex-col gap-4 p-6 transition-shadow hover:shadow-md"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy/5 text-navy">
                <ServiceIcon name={ICON_MAP[s.id]} className="h-5 w-5" />
              </span>
              <h3
                id={`svc-${s.id}-title`}
                className="text-lg font-semibold text-ink-900"
              >
                {s.title}
              </h3>
              <p
                id={`svc-${s.id}-desc`}
                className="text-sm text-ink-700"
              >
                {s.desc}
              </p>
              <ul className="mt-1 space-y-1.5 text-sm text-ink-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/services" className="btn-ghost">
            See all services in detail
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
