import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight } from "lucide-react"

export default function BrandStory() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-bone py-20 md:py-32"
    >
      <div className="mx-auto grid max-w-8xl gap-10 px-5 md:grid-cols-12 md:gap-16 md:px-8">
        {/* Image */}
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-2">
            <img
              alt="Velmora atelier"
              data-strk-img-id="brand-story-img"
              data-strk-img="artisan hands working on fine gold jewelry in a soft lit atelier, warm natural light, editorial still life"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1100"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="md:col-span-6 md:flex md:flex-col md:justify-center">
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-3 font-display text-4xl font-light leading-[1.05] md:text-5xl lg:text-6xl">
            Quiet jewelry, for
            <br className="hidden md:block" /> the everyday ritual.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-text md:text-base">
            Velmora began with a single question — why does fine jewelry so
            often live in a box? We design pieces meant to be worn: with
            morning coffee, on the train, in the soft light of an ordinary
            Tuesday. Every piece is plated in 18K gold, hypoallergenic, and
            finished by hand in small batches.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-text md:text-base">
            No logos. No noise. Just jewelry that earns its place.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ink"
          >
            <span className="border-b border-ink/40 pb-1 transition-colors group-hover:border-ink">
              Read Our Story
            </span>
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
