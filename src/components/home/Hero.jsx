import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2, Search, ShieldCheck, Truck, ClipboardList } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import { Button } from "@/components/ui/Button"
import strkImgConfig from "@/strk-img-config.json"

const bullets = [
  { icon: Search, label: "Supplier sourcing" },
  { icon: ShieldCheck, label: "Factory verification" },
  { icon: ClipboardList, label: "Quality inspection" },
  { icon: Truck, label: "Shipping coordination" },
]

export function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, bgRef.current)
  }, [])

  return (
    <section className="relative bg-navy-900 text-white overflow-hidden">
      {/* Background image */}
      <div
        ref={bgRef}
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-headline] [hero-subhead] [hero-eyebrow]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
        className="absolute inset-0 bg-cover bg-center opacity-30"
        aria-hidden="true"
      />
      {/* Navy overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/70" aria-hidden="true" />

      <div className="relative container-x py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p id="hero-eyebrow" className="eyebrow text-accent-300 mb-4">
              China Sourcing Partner · Since 2016
            </p>
            <h1
              id="hero-headline"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subhead"
              className="mt-5 text-lg md:text-xl text-navy-100 max-w-2xl leading-relaxed"
            >
              We help overseas buyers find reliable suppliers, verify factories,
              inspect quality, follow production, and coordinate shipping — from
              your first inquiry to the goods arriving at your door.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="white" size="lg">
                  How It Works
                </Button>
              </Link>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-3 max-w-xl">
              {bullets.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm text-navy-50"
                >
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-navy-800/80 border border-navy-700">
                    <Icon className="w-4 h-4 text-accent-300" />
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: trust panel */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-white text-slate-900 p-6 md:p-7 shadow-xl border border-slate-100">
              <p className="eyebrow text-accent-600">Why buyers work with us</p>
              <h2 className="mt-2 text-xl md:text-2xl font-bold">
                A local team, transparent fees, and clear reporting.
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                <TrustItem text="Direct factory relationships — no anonymous trading layer." />
                <TrustItem text="You sign the PO with the factory and pay the factory directly." />
                <TrustItem text="On-site audits, sampling, and inspections with photo reports." />
                <TrustItem text="Fixed service fees agreed in advance — no hidden commissions." />
                <TrustItem text="English-speaking coordinators in Shenzhen, Yiwu and Ningbo." />
              </ul>
              <div className="mt-6 pt-5 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  Active buyers in 40+ countries. Average reply time under 1
                  business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustItem({ text }) {
  return (
    <li className="flex items-start gap-2.5">
      <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0 mt-0.5" />
      <span className="text-slate-700">{text}</span>
    </li>
  )
}

export default Hero
