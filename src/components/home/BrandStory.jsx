import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight } from "lucide-react"

export function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const cleanup = ImageHelper.loadImages(strkImgConfig, ref.current)
    return () => {
      if (typeof cleanup === "function") cleanup()
    }
  }, [])

  return (
    <section ref={ref} className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-md bg-muted"
            data-strk-bg-id="brand-story-bg"
            data-strk-bg="[brand-story-title] [brand-story-body]"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="900"
          />

          <div className="flex flex-col items-start lg:py-12">
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-primary">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Quiet Luxury, Made for Everyday
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 text-base leading-relaxed text-muted-foreground"
            >
              Velmora was born from a simple belief: fine jewelry should feel
              effortless. We design demi-fine pieces in small batches, using
              recycled brass and thick 18k gold plating so you can wear them
              from morning coffee to midnight toasts.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              No trends, no noise — just enduring silhouettes that become part
              of your story.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-foreground transition-colors hover:text-primary"
            >
              Read Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
