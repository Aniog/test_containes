import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import strkImgConfig from "@/strk-img-config.json"

const benefits = [
  "CNC-ready precision folding",
  "Heavy-duty steel construction",
  "Tooling & support included",
]

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-20"
    >
      <div
        className="absolute inset-0 z-0 opacity-40"
        data-strk-bg-id="hero-bg-artitect-9x2a7c"
        data-strk-bg="[hero-title] [hero-subtitle] [hero-products]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-20 md:py-28 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Industrial folding solutions since 1998
          </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-50 leading-[1.1]"
          >
            Precision Metal Folding,
            <span className="text-cyan-400"> Built to Last.</span>
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
          >
            ARTITECT MACHINERY designs and manufactures double folding machines,
            double folders, sheet metal folders, and metal folding machines for
            fabricators who demand accuracy, speed, and reliability.
          </p>

          <p
            id="hero-products"
            className="mt-4 text-sm font-medium text-slate-400 uppercase tracking-widest"
          >
            Double folding machine · Double folder · Sheet metal folder · Metal folding machine
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#products">
                Explore Products <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Request a Quote</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
