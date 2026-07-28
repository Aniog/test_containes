import { Section } from "@/components/shared/Section"
import { trustPoints } from "@/data/content"
import { ShieldCheck, Clock, Globe2, BadgeCheck } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Independent & On Your Side",
    desc: "We work for you, not the factory. Our inspections and audits are unbiased and documented.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    desc: "A dedicated coordinator replies within one business day and keeps you updated weekly.",
  },
  {
    icon: Globe2,
    title: "Global Shipping",
    desc: "We ship to 60+ countries by sea, air, and express with full documentation support.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    desc: "Clear written quotes with no hidden commissions. You always know what you pay and why.",
  },
]

export default function TrustSection() {
  return (
    <Section id="trust" className="bg-bg">
      <div className="rounded-3xl bg-primary-dark px-6 py-12 md:px-12 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {trustPoints.map((point) => (
            <div key={point.label}>
              <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                {point.value}
              </div>
              <div className="mt-2 text-sm text-slate-300">{point.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div key={feature.title} className="text-center md:text-left">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-primary mb-4">
                <Icon className="w-6 h-6" />
              </span>
              <h3 className="text-base font-bold text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{feature.desc}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
