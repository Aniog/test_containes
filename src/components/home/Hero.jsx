import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  ShieldCheck,
  ClipboardCheck,
  Ship,
  Factory,
} from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0">
        <div
          className="h-full w-full"
          data-strk-bg-id="home-hero-bg-4c1f7a"
          data-strk-bg="[home-hero-title] [home-hero-eyebrow]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/70" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-28">
        <div className="lg:col-span-7">
          <p
            id="home-hero-eyebrow"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70"
          >
            China Sourcing Agent · Based in Shenzhen
          </p>
          <h1
            id="home-hero-title"
            className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production and coordinate shipping — from
            first quotation to delivered container.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-accent-dark"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
            >
              How it works
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-white/85 sm:grid-cols-4">
            <FeatureLi icon={ShieldCheck} label="Verified suppliers" />
            <FeatureLi icon={ClipboardCheck} label="AQL inspections" />
            <FeatureLi icon={Factory} label="Production follow-up" />
            <FeatureLi icon={Ship} label="Shipping coordination" />
          </ul>
        </div>

        <div className="relative lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl">
            <img
              alt="QC inspector reviewing products on a factory line in China"
              className="block h-full w-full object-cover"
              data-strk-img-id="home-hero-img-7b2e91"
              data-strk-img="[home-hero-img-caption] [home-hero-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div
            id="home-hero-img-caption"
            className="absolute -bottom-6 left-4 right-4 rounded-xl border border-brand-line bg-white p-4 text-brand-ink shadow-lg md:left-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
              QC Inspection in Shenzhen
            </p>
            <p className="mt-1 text-sm font-medium">
              Independent factory inspections, AQL reports and on-site photos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureLi({ icon: Icon, label }) {
  return (
    <li className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-white/70" />
      <span>{label}</span>
    </li>
  )
}
