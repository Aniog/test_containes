import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import StockImage from "@/components/ui/StockImage"
import Button from "@/components/ui/Button"

export default function About() {
  const rootRef = useRef(null)

  useEffect(() => {
    if (!rootRef.current) return undefined
    const id = window.requestAnimationFrame(() => {
      try {
        ImageHelper.loadImages(strkImgConfig, rootRef.current)
      } catch (err) {
        console.warn(err)
      }
    })
    return () => window.cancelAnimationFrame(id)
  }, [])

  return (
    <div ref={rootRef} className="bg-bone">
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <StockImage
          imgId="img-about-hero"
          query="[about-tagline] [about-headline] Paris atelier interior with gold jewelry on marble warm natural light"
          ratio="16x9"
          width={1800}
          alt="The Velmora atelier"
          className="absolute inset-0 w-full h-full"
          imgClassName="w-full h-full object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(27,24,21,0.4) 0%, rgba(27,24,21,0.6) 100%)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="container-editorial pb-14">
            <p id="about-tagline" className="eyebrow-gold text-bone/70 mb-3">Our Story</p>
            <h1
              id="about-headline"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-bone font-light leading-[1.05] tracking-tight max-w-3xl"
            >
              A small atelier in Paris, making jewelry for the everyday.
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-editorial max-w-3xl">
          <p className="font-serif text-2xl sm:text-3xl text-ink italic leading-relaxed">
            We started Velmora with a simple belief: the most beautiful jewelry is the one you wear every day, not the one that lives in a box.
          </p>
          <div className="mt-10 space-y-5 text-muted font-sans leading-relaxed">
            <p>
              Every piece in our collection is designed in-studio in Paris, then hand-finished by a small team of artisans in our workshop. We use recycled brass as our base, plate it in 18K gold, and set each stone by hand.
            </p>
            <p>
              The result is demi-fine jewelry that has the weight and finish of an heirloom, at a price that makes sense for today. It's jewelry for your everyday — work, weekends, dinner, and everything in between.
            </p>
            <p>
              We believe in slow craft, transparent pricing, and pieces that earn their place on your dresser. Thank you for being here.
            </p>
          </div>
          <div className="mt-12">
            <Button as={Link} to="/shop" variant="outline" size="lg">
              Shop the Collection
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
