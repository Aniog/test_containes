import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velvet-100 overflow-hidden relative">
            <img
              data-strk-img-id="velmora-brand-story-f8g9h0"
              data-strk-img="[brand-heading] [brand-sub]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p id="brand-sub" className="text-[11px] tracking-widest uppercase text-gold-600 mb-3">
              Our Story
            </p>
            <h2
              id="brand-heading"
              className="font-serif text-3xl lg:text-4xl text-midnight-900 leading-tight mb-4"
            >
              Jewelry That Belongs
              <br />
              <span className="italic">In Your Story</span>
            </h2>
            <p className="text-sm text-velvet-600 leading-relaxed mb-6">
              Velmora was born from a simple belief — that beautiful, well-crafted
              jewelry should not require a luxury price tag. Every piece is
              designed in-house and plated in 18K gold, using ethically sourced
              materials and hypoallergenic metals. We create pieces you can wear
              every day, treasure forever, and feel good about.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-midnight-900 hover:text-gold-600 transition-colors group"
            >
              Read More
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}