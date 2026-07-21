import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import StockImage from "@/components/StockImage"
import { useReveal } from "@/hooks/useReveal"

export default function BrandStory() {
  const imageRef = useReveal(0.2)
  const textRef = useReveal(0.2)

  return (
    <section className="bg-ivory-200/40 py-20 sm:py-28 lg:py-32">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div ref={imageRef} className="reveal lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-ivory-200">
              <StockImage
                id="story-image-main"
                query="[story-quote] [story-title]"
                ratio="4x5"
                width="1200"
                alt="Founder working with fine jewelry at her studio"
                className="absolute inset-0"
                imgClassName="w-full h-full object-cover"
              />
            </div>
          </div>
          <div ref={textRef} className="reveal lg:col-span-6 lg:pl-8">
            <p className="eyebrow mb-5">Our story</p>
            <h2 id="story-title" className="display-lg font-serif">
              Designed to live in,
              <br />
              <span className="display-italic text-gold-500">made to last.</span>
            </h2>
            <p
              id="story-quote"
              className="mt-7 text-base sm:text-lg text-taupe-600 leading-relaxed font-light max-w-lg"
            >
              Velmora began at a kitchen table, with a single piece of 18K gold
              plate and a question: <em className="font-serif italic">why does fine jewelry feel so far away?</em>
              {" "}We design in small batches, work with family-run workshops, and price our pieces the way we'd want to buy them — fairly, transparently, and forever.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link to="/about" className="btn-link">
                Read our story
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8 max-w-md">
              <div>
                <dt className="font-serif text-3xl text-espresso-800">18K</dt>
                <dd className="mt-1 text-[10px] tracking-[0.2em] uppercase text-taupe-500">
                  Gold plated
                </dd>
              </div>
              <div>
                <dt className="font-serif text-3xl text-espresso-800">30d</dt>
                <dd className="mt-1 text-[10px] tracking-[0.2em] uppercase text-taupe-500">
                  Returns
                </dd>
              </div>
              <div>
                <dt className="font-serif text-3xl text-espresso-800">1%</dt>
                <dd className="mt-1 text-[10px] tracking-[0.2em] uppercase text-taupe-500">
                  To charity
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
