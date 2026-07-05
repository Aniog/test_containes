import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useReveal } from "@/hooks/useReveal"
import { cn } from "@/lib/utils"
import StockImage from "@/components/ui/StockImage"

export default function BrandStory() {
  const [ref, inView] = useReveal({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-bone-2" aria-labelledby="story-heading">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div
            className={cn(
              "relative aspect-[4/5] overflow-hidden bg-bone transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            )}
          >
            <StockImage
              imgId="img-story"
              query="[story-quote] [story-heading] founder portrait in atelier with gold jewelry tools warm natural light"
              ratio="4x5"
              width={1100}
              alt="Velmora founder in the atelier"
              className="absolute inset-0 w-full h-full"
              imgClassName="w-full h-full object-cover"
            />
          </div>
          <div
            className={cn(
              "lg:pl-6 transition-all duration-700 delay-150",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            )}
          >
            <p className="eyebrow-gold mb-5">Our Story</p>
            <h2
              id="story-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-ink font-light leading-[1.05] tracking-tight"
            >
              A small atelier, making jewelry for the everyday.
            </h2>
            <p
              id="story-quote"
              className="mt-7 text-lg sm:text-xl font-serif italic text-muted leading-relaxed"
            >
              We started Velmora with one question: why does fine jewelry have to live in a box? Our pieces are made to live in — to wear, to forget, to put on again tomorrow.
            </p>
            <p className="mt-5 text-sm sm:text-base text-muted font-sans leading-relaxed max-w-prose2">
              Every Velmora piece is hand-finished in our Paris atelier from recycled brass, plated in 18K gold and set with hand-cut crystals. The result is demi-fine jewelry that looks like an heirloom, costs like a gift, and is made to last.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-eyebrow text-ink hover:text-gold-deep transition-colors font-sans border-b border-ink hover:border-gold pb-1"
            >
              Read Our Story <ArrowRight size={14} strokeWidth={1.4} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
