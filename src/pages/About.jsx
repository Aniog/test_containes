import { StrkImage, useStrkImages } from "@/components/ui/StrkImage"
import TrustBar from "@/components/home/TrustBar"

export default function About() {
  const ref = useStrkImages([])
  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <div className="container-editorial py-16 text-center md:py-24">
        <p className="eyebrow">Our Story</p>
        <h1 className="heading-serif mt-4 text-4xl md:text-6xl">
          Quietly made, warmly worn.
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-sans text-sm leading-relaxed text-ink-muted md:text-base">
          Velmora began with a simple belief: fine jewelry shouldn't wait for
          special occasions. We craft demi-fine pieces in 18K gold plating,
          designed in studio and finished by hand.
        </p>
      </div>

      <div className="container-editorial pb-20">
        <div className="relative aspect-[16/9] overflow-hidden bg-cream-200">
          <StrkImage
            imgId="about-hero-01"
            query="gold jewelry studio craftsmanship atelier"
            ratio="16x9"
            width={1600}
            alt="Velmora studio"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <TrustBar />
    </div>
  )
}
