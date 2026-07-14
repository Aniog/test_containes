import { Zap, Shield, BarChart2, Users, Clock, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get up and running in minutes. No complex setup or technical knowledge required.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is stored safely. We take privacy seriously and never share your contacts.",
  },
  {
    icon: BarChart2,
    title: "Track Everything",
    description: "See who reached out, when, and what they said — all in one organized view.",
  },
  {
    icon: Users,
    title: "Manage Contacts",
    description: "Keep all your leads and contacts organized and easy to find whenever you need them.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Spend less time managing spreadsheets and more time building real relationships.",
  },
  {
    icon: HeartHandshake,
    title: "Build Trust",
    description: "A professional contact form shows visitors you're serious about hearing from them.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything you need to connect
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A simple, focused set of tools to help you capture and manage the people who matter most to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
