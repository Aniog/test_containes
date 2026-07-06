import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageTag } from "@/components/ImageTag"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-linen">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto">
            <ImageTag
              id="brand-story-img"
              query="[brand-story-title] [brand-story-body]"
              ratio="1x1"
              width={900}
              alt="Velmora jewelry craftsmanship"
              aspectClass="absolute inset-0 h-full w-full"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-14 md:px-12 md:py-20 lg:px-20">
            <p className="font-sans text-xs font-medium uppercase tracking-extra-wide text-gold">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="mt-4 font-serif text-3xl font-normal leading-snug text-espresso md:text-4xl lg:text-5xl"
            >
              Jewelry That Feels Like a Quiet Confidence
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 font-sans leading-relaxed text-taupe"
            >
              Velmora was born from a simple belief: luxury should feel personal, not performative.
              Every piece is designed in-house and finished in 18k gold plate — refined enough for
              evenings, durable enough for everyday.
            </p>
            <p className="mt-4 font-sans leading-relaxed text-taupe">
              We skip the middlemen and markups so you can invest in pieces that last, without the
              guilt of traditional fine jewelry.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-extra-wide text-espresso hover:text-gold"
            >
              Read Our Story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
