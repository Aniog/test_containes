import { Zap, Shield, BarChart2, Clock, Globe, Heart } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Instant Capture",
    description: "Every submission is saved immediately to your contacts list — no delays, no lost leads.",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description: "Your contacts are stored locally in your browser. No third-party servers involved.",
  },
  {
    icon: BarChart2,
    title: "Easy Overview",
    description: "Browse all your contacts in a clean, searchable table with timestamps and details.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Access your contact list any time, right from the same page — no login required.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Fully responsive design that looks great on desktop, tablet, and mobile devices.",
  },
  {
    icon: Heart,
    title: "Built with Care",
    description: "Thoughtfully designed to make a great first impression on every visitor.",
  },
]

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete contact capture solution that's simple to use and easy to manage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 mb-4">
                  <Icon className="h-5 w-5 text-brand-600" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
