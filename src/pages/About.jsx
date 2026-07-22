import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Button from "@/components/ui/Button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-2b7e1a"
          data-strk-bg="[about-hero-title] gold jewelry atelier craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="relative h-full flex items-end">
          <div className="mx-auto max-w-7xl px-6 md:px-10 pb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-3">Our Story</p>
            <h1
              id="about-hero-title"
              className="font-serif text-ivory text-5xl md:text-7xl font-light leading-tight"
            >
              Quietly made,
              <br />
              made to last
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
          <p className="text-cocoa text-lg leading-relaxed">
            Velmora began with a simple belief: that beautiful gold jewelry shouldn't require a
            special occasion. Each piece is hand-finished in small batches, 18K gold plated over a
            hypoallergenic base, and made to be worn — really worn — through the everyday.
          </p>
          <p className="mt-6 text-cocoa leading-relaxed">
            We design in studio and sell directly to you, so the quality stays high and the price
            stays honest. No markups, no middlemen, no compromise on the details that matter.
          </p>
          <div className="mt-10">
            <Button as={Link} to="/shop">Shop the Collection</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
