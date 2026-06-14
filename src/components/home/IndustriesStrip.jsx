import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const industries = [
  { id: "hvac", title: "HVAC & ventilation" },
  { id: "enclosures", title: "Electrical enclosures" },
  { id: "architectural", title: "Architectural metal" },
  { id: "automotive", title: "Automotive & transport" },
  { id: "furniture", title: "Metal furniture" },
  { id: "energy", title: "Energy & infrastructure" },
]

export default function IndustriesStrip() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="section bg-cream">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Industries we serve</p>
          <h2 id="industries-title" className="mt-4 font-display text-4xl md:text-5xl text-ink">
            One machine, a thousand applications.
          </h2>
        </div>

        <ul className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <li key={ind.id} className="bg-cream p-8 flex items-center gap-6">
              <div className="w-20 h-20 bg-ink-soft overflow-hidden shrink-0">
                <img
                  alt={ind.title}
                  className="w-full h-full object-cover opacity-90"
                  data-strk-img-id={`home-industry-${ind.id}-2b8a47`}
                  data-strk-img={`[home-industry-${ind.id}-name] [industries-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <span
                id={`home-industry-${ind.id}-name`}
                className="font-display text-xl text-ink"
              >
                {ind.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
