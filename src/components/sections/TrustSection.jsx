import { Award, Globe, Users, Shield } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"

const stats = [
  { value: "500+", label: "Projects managed" },
  { value: "10+", label: "Years experience" },
  { value: "40+", label: "Countries served" },
  { value: "98%", label: "On-time delivery" },
]

const trustPoints = [
  {
    icon: Shield,
    title: "Risk reduction first",
    description: "Verification and inspections are not optional add-ons — they are built into our workflow.",
  },
  {
    icon: Globe,
    title: "Local presence",
    description: "Our team is based in China, with regular on-site visits to suppliers and factories.",
  },
  {
    icon: Users,
    title: "Buyer advocacy",
    description: "We represent your interests in negotiations, quality decisions, and dispute resolution.",
  },
  {
    icon: Award,
    title: "Transparent reporting",
    description: "You receive clear quotes, audit reports, inspection photos, and timeline updates at every stage.",
  },
]

export default function TrustSection() {
  return (
    <section className="section bg-slate-900 text-white">
      <div className="container-main">
        <SectionHeader
          badge="Trust"
          title="Built for reliable, long-term partnerships"
          description="Our clients stay with us because we treat every order with the same level of care and accountability."
          centered
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-white/5 p-6 text-center">
              <p className="text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.title} className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <point.icon className="h-8 w-8 text-accent" />
              <h3 className="mt-4 text-lg font-semibold text-white">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
