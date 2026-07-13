import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import { ArrowRight, CheckCircle2, ShieldCheck, ClipboardCheck, Ship } from "lucide-react"
import strkImgConfig from "@/strk-img-config.json"

const bullets = [
  { icon: ShieldCheck, label: "Independent supplier verification" },
  { icon: ClipboardCheck, label: "AQL quality inspections" },
  { icon: Ship, label: "End-to-end shipping coordination" },
]

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white">
      <div className="container-x py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-4">China Sourcing Agent</p>
            <h1 className="h-display">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="body-base mt-5 text-lg max-w-xl">
              We help overseas brands, retailers, and distributors find reliable
              Chinese suppliers, verify factories, inspect quality, and ship on
              time — in plain English.
            </p>

            <ul className="mt-7 space-y-3">
              {bullets.map((b) => (
                <li key={b.label} className="flex items-center gap-3 text-slate-700">
                  <span className="w-9 h-9 rounded-md bg-brand-50 text-brand-800 flex items-center justify-center">
                    <b.icon className="w-4.5 h-4.5 w-5 h-5" />
                  </span>
                  <span className="text-base font-medium">{b.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-primary text-base">
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link to="/services" className="btn-secondary text-base">
                Explore Our Services
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-5 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success-600" />
                Reply within 1 business day
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success-600" />
                No commitment, no fee to discuss
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-elevated">
                <img
                  data-strk-img-id="hero-factory-floor-3a4b5c"
                  data-strk-img="[hero-tagline] [hero-eyebrow]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  alt="Inside a Chinese manufacturing facility with quality control on a production line"
                  className="w-full h-full object-cover"
                />
              </div>
              <p id="hero-eyebrow" className="hidden">On-site factory verification and inspections</p>
              <p id="hero-tagline" className="hidden">China Sourcing Agent for Global Buyers</p>

              <div className="hidden md:flex absolute -bottom-6 -left-6 bg-white rounded-xl shadow-elevated p-4 w-64">
                <div className="w-10 h-10 rounded-md bg-brand-800 text-white flex items-center justify-center mr-3 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Verified factories</p>
                  <p className="text-xs text-slate-500 mt-0.5">Audited before any deposit is paid</p>
                </div>
              </div>

              <div className="hidden md:flex absolute -top-6 -right-6 bg-white rounded-xl shadow-elevated p-4 w-64">
                <div className="w-10 h-10 rounded-md bg-brand-800 text-white flex items-center justify-center mr-3 shrink-0">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">AQL inspections</p>
                  <p className="text-xs text-slate-500 mt-0.5">Defects caught in China, not in your warehouse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
