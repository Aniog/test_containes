import { Zap, Shield, BarChart2, Users, Bell, Globe } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Contact Management",
    description: "Capture and organize every lead automatically. Never lose a potential customer again.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description: "Get notified the moment someone fills out your contact form so you can respond fast.",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is encrypted and stored securely. We never share your contacts with third parties.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: BarChart2,
    title: "Analytics Dashboard",
    description: "Track form submissions, response rates, and conversion trends over time.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Bell,
    title: "Smart Follow-ups",
    description: "Set reminders and automate follow-up sequences to keep leads warm.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Embed your contact form on any website or share a direct link with anyone.",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything you need to capture leads
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            A complete toolkit for turning website visitors into real business opportunities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-10 h-10 rounded-lg ${feature.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${feature.color}`} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
