import { MessageSquare, Zap, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "We read every message personally and respond with thoughtful, tailored replies — no bots, no templates.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "Expect a reply within 24 hours on business days. Urgent matters are prioritized and handled quickly.",
  },
  {
    icon: Shield,
    title: "Your Privacy Matters",
    description: "Your contact details are kept private and never shared with third parties. We respect your data.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Submit your message any time of day. We'll pick it up first thing and get back to you promptly.",
  },
]

const FeaturesSection = () => {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 id="features-title" className="text-3xl font-bold text-slate-900 mb-3">
            Why Reach Out to Us?
          </h2>
          <p id="features-subtitle" className="text-slate-600 max-w-xl mx-auto">
            We make it easy and comfortable to get in touch. Here's what you can expect when you contact us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <h3 className="text-base font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
