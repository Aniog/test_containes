import React from "react"
import { Zap, Shield, BarChart3, Headphones, Globe, Rocket } from "lucide-react"

const features = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "We move quickly without sacrificing quality. Your project ships on time, every time.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security built in from day one. Your data is always protected.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: BarChart3,
    title: "Data-Driven",
    description: "Make smarter decisions with real-time analytics and actionable insights.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our team is always available to help you succeed. No ticket left unanswered.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Built to handle millions of users worldwide with low latency and high availability.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Zap,
    title: "Easy Integration",
    description: "Connect with your existing tools in minutes. No complex setup required.",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
]

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine cutting-edge technology with deep expertise to deliver results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} mb-5`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
