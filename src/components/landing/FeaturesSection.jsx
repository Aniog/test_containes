import { Zap, Shield, BarChart2, Users, Clock, Globe } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized for speed at every layer. Your team ships features in hours, not weeks.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant with end-to-end encryption. Your data stays safe and private.",
  },
  {
    icon: BarChart2,
    title: "Powerful Analytics",
    description:
      "Real-time dashboards and reports that give you the insights you need to grow.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Built for teams of all sizes. Invite members, assign roles, and work together seamlessly.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Automate repetitive tasks and focus on what matters most — building great products.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Deploy to 30+ regions worldwide. Serve your customers with low latency, anywhere.",
  },
]

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A complete toolkit designed to help modern teams move faster and
            build with confidence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
