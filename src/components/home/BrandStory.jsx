import { Link } from "react-router-dom"
import { StrkImage } from "@/components/ui/StrkImage"
import { useImageLoader } from "@/hooks/useImageLoader"

export default function BrandStory() {
  const ref = useImageLoader([])
  return (
    <section ref={ref} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-stone order-1">
            <StrkImage
              imgId="brand-story-velmora-3b8c1d"
              query="[story-body] [story-title] gold jewelry craftsmanship atelier"
              ratio="4x5"
              width={800}
              alt="Velmora atelier crafting gold jewelry"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-2 md:pl-6">
            <p className="text-xs uppercase tracking-widest2 text-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-4xl md:text-5xl text-espresso leading-tight"
            >
              Quiet luxury, made to last
            </h2>
            <p
              id="story-body"
              className="mt-6 text-ink/80 leading-relaxed"
            >
              Velmora began with a simple belief: that beautiful, lasting jewelry
              should be part of every day, not saved for special occasions. We
              design each piece in our studio and craft it in 18K gold plating
              over solid brass — hypoallergenic, weighty in the hand, and made to
              be worn from morning to night.
            </p>
            <p className="mt-4 text-ink/80 leading-relaxed">
              No markups for markups' sake. No fleeting trends. Just considered
              design, honest materials, and a price that lets you build a
              collection you will treasure.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center uppercase tracking-wide2 text-xs font-medium text-ink border-b border-gold pb-1 hover:text-gold transition-colors duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
