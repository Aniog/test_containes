import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import {
  Award,
  Clock,
  Headphones,
  ShieldCheck,
  TrendingUp,
  Wrench,
} from "lucide-react"
import strkImgConfig from "@/strk-img-config.json"

const reasons = [
  {
    icon: Award,
    title: "Engineering Excellence",
    description:
      "Every machine is designed by experienced mechanical engineers and tested to ISO-quality standards.",
  },
  {
    icon: ShieldCheck,
    title: "Built to Last",
    description:
      "Rugged steel frames, hardened tooling, and premium components ensure decades of dependable service.",
  },
  {
    icon: Clock,
    title: "Fast Lead Times",
    description:
      "Streamlined manufacturing and global warehousing keep your project moving on schedule.",
  },
  {
    icon: Wrench,
    title: "Tooling & Spares",
    description:
      "Original replacement parts, optional tooling packages, and operator training available worldwide.",
  },
  {
    icon: Headphones,
    title: "Lifetime Support",
    description:
      "Our technical support team is available by phone, email, or video call for installation and service.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Productivity",
    description:
      "CNC upgrades, automation-ready interfaces, and custom configurations grow with your business.",
  },
]

export default function WhyUsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="why-us"
      ref={containerRef}
      className="bg-slate-900 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
              Why ARTITECT
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-50">
              Trusted by Fabricators Worldwide
            </h2>
            <p className="mt-4 text-slate-400 text-lg leading-relaxed">
              We combine precision engineering with practical shop-floor
              experience. The result is a range of folding machines that are
              powerful, safe, and easy to operate.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-100">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 h-80 md:h-[480px]">
            <img
              data-strk-img-id="why-us-factory-4b8c1d"
              data-strk-img="[why-us-title] [why-us-desc]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="ARTITECT machinery factory"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p
                id="why-us-title"
                className="text-2xl md:text-3xl font-bold text-slate-50"
              >
                Built for the Real World
              </p>
              <p
                id="why-us-desc"
                className="mt-2 text-slate-300"
              >
                Precision manufacturing floor with heavy-duty folding equipment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
