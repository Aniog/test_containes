import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Shield, Search, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-secondary py-16 md:py-24 lg:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="max-w-2xl">
          <Badge className="mb-4" variant="secondary">
            Trusted China Sourcing Agent Since 2014
          </Badge>
          <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 text-lg text-muted-foreground md:text-xl">
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — end to end.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-accent" />
              Supplier Search
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent" />
              Factory Audit
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-accent" />
              Shipping Support
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="aspect-[4/3] w-full rounded-lg bg-muted shadow-xl"
            data-strk-bg-id="hero-bg-1"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="900"
          />
        </div>
      </div>
    </section>
  )
}
