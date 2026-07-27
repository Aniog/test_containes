import { useEffect, useRef } from "react"
import { ArrowRight, ShieldCheck, Search, ClipboardCheck, Container } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Button from "@/components/ui/Button"

const trustChips = [
  { icon: ShieldCheck, label: "Factory verification" },
  { icon: ClipboardCheck, label: "On-site QC" },
  { icon: Container, label: "Shipping coordination" },
  { icon: Search, label: "Sourcing shortlists" },
]

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative bg-navy-600 text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="hero-bg-shipyard-2b9c11"
        data-strk-bg="[hero-tagline] [hero-headline] container yard port cranes shipping"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-600 via-navy-600/95 to-navy-600/70"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500"></span>
              <span id="hero-eyebrow">Based in Hangzhou · Working with factories across China</span>
            </div>
            <h1
              id="hero-headline"
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-tagline"
              className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl"
            >
              We help overseas buyers find reliable Chinese suppliers, verify
              factories on the ground, inspect production quality, and
              coordinate shipping — under one accountable point of contact.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button to="/contact" variant="primary" size="lg">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/how-it-works" variant="outlineLight" size="lg">
                See How It Works
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <dt className="text-3xl md:text-4xl font-bold text-white">12+</dt>
                <dd className="mt-1 text-sm text-slate-300">Years sourcing in China</dd>
              </div>
              <div>
                <dt className="text-3xl md:text-4xl font-bold text-white">1,800+</dt>
                <dd className="mt-1 text-sm text-slate-300">Suppliers in network</dd>
              </div>
              <div>
                <dt className="text-3xl md:text-4xl font-bold text-white">30+</dt>
                <dd className="mt-1 text-sm text-slate-300">Countries served</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-navyGlow border border-white/10">
              <img
                alt="Container yard at a Chinese port at sunset, with stacked shipping containers"
                data-strk-img-id="hero-photo-port-7a3f1c"
                data-strk-img="[hero-tagline] [hero-headline] container yard port cranes shipping"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-700/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-xl bg-white/95 backdrop-blur p-4 shadow-card">
                  <div className="grid grid-cols-2 gap-3">
                    {trustChips.map((chip) => {
                      const Icon = chip.icon
                      return (
                        <div
                          key={chip.label}
                          className="flex items-center gap-2 text-sm font-medium text-navy-600"
                        >
                          <Icon className="h-4 w-4 text-accent-500 flex-shrink-0" />
                          <span>{chip.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
