import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Zap, Shield, BarChart2, Users, Clock, Globe } from "lucide-react"

const features = [
  {
    id: "feat-speed",
    icon: Zap,
    title: "Lightning Fast",
    description: "Deploy in seconds, not hours. Our optimized infrastructure keeps your team moving at full speed.",
    titleId: "feat-speed-title",
    descId: "feat-speed-desc",
    imgId: "feat-img-speed-d4e5f6",
  },
  {
    id: "feat-security",
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance built in from day one. Your data is always protected.",
    titleId: "feat-security-title",
    descId: "feat-security-desc",
    imgId: "feat-img-security-g7h8i9",
  },
  {
    id: "feat-analytics",
    icon: BarChart2,
    title: "Deep Analytics",
    description: "Understand your users with real-time dashboards and actionable insights that drive growth.",
    titleId: "feat-analytics-title",
    descId: "feat-analytics-desc",
    imgId: "feat-img-analytics-j1k2l3",
  },
  {
    id: "feat-collab",
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with shared workspaces, comments, and live editing.",
    titleId: "feat-collab-title",
    descId: "feat-collab-desc",
    imgId: "feat-img-collab-m4n5o6",
  },
  {
    id: "feat-time",
    icon: Clock,
    title: "Save Time",
    description: "Automate repetitive tasks and focus on what matters. Reclaim hours every week.",
    titleId: "feat-time-title",
    descId: "feat-time-desc",
    imgId: "feat-img-time-p7q8r9",
  },
  {
    id: "feat-global",
    icon: Globe,
    title: "Global Scale",
    description: "Serve customers anywhere in the world with our distributed, low-latency network.",
    titleId: "feat-global-title",
    descId: "feat-global-desc",
    imgId: "feat-img-global-s1t2u3",
  },
]

export default function FeaturesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="features" className="py-24 px-4 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="features-title" className="text-4xl font-bold text-slate-900 mb-4">
            Everything you need to succeed
          </h2>
          <p id="features-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
            A complete platform built for modern teams who want to move fast without breaking things.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.id}
                className="group p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-md hover:border-indigo-200 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 id={feature.titleId} className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p id={feature.descId} className="text-slate-600 text-sm leading-relaxed">
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
