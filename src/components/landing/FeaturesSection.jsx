import { Zap, Shield, BarChart3, Users, Clock, Star } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We move quickly without cutting corners. Your project ships on schedule, every time.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Built with best practices from day one. Your data and your customers' data stay safe.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: BarChart3,
    title: "Data-Driven",
    description: "Every decision is backed by real insights. We measure what matters and optimize accordingly.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "A small, focused team that genuinely cares about your success and stays in close contact.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Questions don't wait for business hours. We're responsive and keep you in the loop.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "We take pride in our craft. Every pixel, every line of code is done with care.",
    color: "bg-rose-100 text-rose-600",
  },
]

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 space-y-3">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Why choose us</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Everything you need to succeed</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            We combine strategy, design, and technology to deliver results that matter.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
