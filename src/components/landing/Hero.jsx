import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star } from "lucide-react"

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-white py-24 md:py-32 px-4"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-100/50 rounded-full translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <Badge className="w-fit">
            <Star className="w-3 h-3 mr-1" />
            Trusted by 10,000+ businesses
          </Badge>

          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
          >
            Grow your business with{" "}
            <span className="text-primary">smart tools</span>
          </h1>

          <p
            id="hero-subheading"
            className="text-lg text-slate-600 leading-relaxed max-w-lg"
          >
            Launchpad gives you everything you need to capture leads, manage contacts,
            and turn visitors into loyal customers — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <a href="#contact">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#features">See Features</a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">No credit card required · Free forever plan</p>
        </div>

        {/* Hero image */}
        <div className="relative hidden md:block">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
            <img
              alt="Business dashboard"
              data-strk-img-id="hero-dashboard-img-a1b2c3"
              data-strk-img="[hero-subheading] [hero-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-border px-4 py-3 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
              <span className="text-emerald-600 text-sm font-bold">✓</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">New contact saved</p>
              <p className="text-xs text-muted-foreground">Just now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
