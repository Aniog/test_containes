import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const points = [
  {
    number: '01',
    title: 'Engineered, not assembled',
    body: 'Our machines are designed end-to-end in our own engineering studio. Nothing is rebranded.',
  },
  {
    number: '02',
    title: 'Made for working hands',
    body: 'Controls placed where operators actually stand. Panels you can clean with one wipe.',
  },
  {
    number: '03',
    title: 'A quieter shop floor',
    body: 'Servo-electric drives replace noisy hydraulics — your team will notice the calm by lunchtime.',
  },
]

export default function HomeCraft() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-graphite-900 text-bone-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid gap-14 lg:grid-cols-2 items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-graphite-800 order-2 lg:order-1">
          <img
            alt="Craftsmanship in the ARTITECT workshop"
            data-strk-img-id="home-craft-img-4d8b2a"
            data-strk-img="[home-craft-desc] [home-craft-title] precision metal fabrication workshop close-up brushed steel"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 border-l-2 border-brass-500 pl-4">
            <p className="eyebrow eyebrow-light">Made in our workshop</p>
            <p className="mt-1 text-bone-50 font-serif text-xl">Brescia, Italy</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow eyebrow-light">Our Craft</p>
          <h2
            id="home-craft-title"
            className="mt-4 font-serif font-light text-4xl md:text-5xl text-bone-50 leading-tight"
          >
            Every machine carries our signature.
          </h2>
          <div className="hairline-brass mt-6" />
          <p
            id="home-craft-desc"
            className="mt-6 text-steel-300 leading-relaxed max-w-lg"
          >
            From the first sketch to the final acceptance test, an ARTITECT
            machine passes through fewer hands than most furniture. That is by
            design — and it is what makes the difference you can feel under
            your palm.
          </p>

          <div className="mt-10 space-y-8">
            {points.map((point) => (
              <div key={point.number} className="flex gap-6">
                <span className="font-serif text-2xl text-brass-300 shrink-0">
                  {point.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-bone-50">{point.title}</h3>
                  <p className="mt-2 text-sm text-steel-300 leading-relaxed">
                    {point.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
