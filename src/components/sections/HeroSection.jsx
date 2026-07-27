import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/Button"

const highlights = [
  "Verified supplier network",
  "Factory audits & QC inspections",
  "End-to-end order follow-up",
]

export default function HeroSection() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-white">
      <div className="container-main grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            China Sourcing Agent for Global Buyers
          </div>
          <h1
            id="hero-title"
            className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
          >
            Source from China with Confidence
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl"
          >
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can focus on growing your business.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-700">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
            <img
              alt="China factory production line"
              data-strk-img-id="hero-main-img"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-4 shadow-lg md:block">
            <p className="text-2xl font-bold text-slate-900">10+</p>
            <p className="text-sm text-slate-500">Years in sourcing</p>
          </div>
        </div>
      </div>
    </section>
  )
}
