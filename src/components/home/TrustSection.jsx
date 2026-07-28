import { Shield, Users, Globe, Award, Clock, Headphones } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"

const trustPoints = [
  {
    icon: Shield,
    title: "Verified Suppliers",
    desc: "Every factory is audited before we recommend it to you.",
  },
  {
    icon: Users,
    title: "Local Team",
    desc: "Our team is based in Shanghai and visits factories regularly.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "We serve buyers in North America, Europe, Australia, and the Middle East.",
  },
  {
    icon: Award,
    title: "Transparent Pricing",
    desc: "No hidden fees. You see exactly what you pay for.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    desc: "Initial supplier shortlist within 3–5 business days.",
  },
  {
    icon: Headphones,
    title: "Dedicated Manager",
    desc: "One point of contact for your entire sourcing project.",
  },
]

export default function TrustSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </span>
          <h2 id="trust-title" className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">
            Built on Trust, Transparency, and Results
          </h2>
          <p id="trust-desc" className="mt-4 text-text-secondary leading-relaxed">
            We are not a marketplace. We are your on-ground partner in China, committed to protecting your interests.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((t, i) => (
            <Card key={i} className="border-0 shadow-sm bg-surface">
              <CardContent className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-text-primary">{t.title}</h3>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">{t.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
