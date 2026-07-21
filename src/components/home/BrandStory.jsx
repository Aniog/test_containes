import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import SectionHeading from "@/components/shared/SectionHeading"
import StockImage from "@/components/shared/StockImage"

const BrandStory = () => {
  return (
    <section className="bg-champagne py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-truffle shadow-card">
          <StockImage
            imageId="brand-story-image-0b92c"
            query="[brand-story-text] [brand-story-title]"
            ratio="3x4"
            width="1200"
            alt="Velmora jewelry styled editorially"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <div className="flex items-center">
          <div>
            <SectionHeading
              eyebrow="Velmora World"
              title="Designed to bring an editorial softness to everyday gold"
              description="Velmora was imagined for women who want jewelry to feel polished, giftable, and beautifully wearable. Every silhouette is shaped to be refined enough for a milestone and effortless enough for the everyday."
            />
            <p id="brand-story-title" className="sr-only">
              Designed to bring an editorial softness to everyday gold
            </p>
            <p id="brand-story-text" className="mt-6 text-base leading-7 text-velvet/72">
              From sculptural huggies to softly sparkling necklaces, our collection is grounded in warm tones, luminous finishes, and quiet luxury that never feels overstated.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.24em] text-velvet transition hover:text-rosewood"
            >
              Our Story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
