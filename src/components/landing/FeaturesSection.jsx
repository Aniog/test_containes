import { Zap, Shield, HeartHandshake, BarChart3 } from "lucide-react"
import { Card } from "@/components/ui/Card"

const features = [
  {
    icon: Zap,
    title: "Fast Results",
    description: "We move quickly and deliver results that matter. No fluff, just impact.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "Your data and projects are safe with us. We take security seriously.",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Our team is always available to help you succeed every step of the way.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: BarChart3,
    title: "Data-Driven",
    description: "We use insights and analytics to make smarter decisions for your business.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
]

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Work With Us
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            We combine expertise, speed, and care to deliver exceptional outcomes for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="p-6 hover:shadow-md transition-shadow">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} mb-4`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
