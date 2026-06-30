import { Link } from "react-router-dom"
import ImageLoader, { PLACEHOLDER } from "@/components/ImageLoader"

export default function BrandStory() {
  return (
    <ImageLoader as="section" className="bg-cream" deps={[]}>
      <div className="mx-auto grid max-w-editorial grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28 md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          <img
            alt="Velmora atelier"
            data-strk-img-id="story-velmora-1f"
            data-strk-img="[story-heading] [story-body] jewelry atelier craftsmanship gold"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src={PLACEHOLDER}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="eyebrow">Our Story</p>
          <h2 id="story-heading" className="mt-3 font-serif text-4xl leading-tight text-ink md:text-5xl">
            Quiet luxury, made to be lived in.
          </h2>
          <p id="story-body" className="mt-6 text-base leading-relaxed text-stone">
            Velmora began with a simple belief: that fine jewelry shouldn't wait
            for special occasions. Each piece is crafted in 18K gold plating over
            a hypoallergenic base, designed in our studio and finished by hand —
            so it feels as considered as it looks, every single day.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone">
            From the first sketch to the final polish, we obsess over the
            details that make a piece worth treasuring.
          </p>
          <div className="mt-8">
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </ImageLoader>
  )
}
