import {
  Building2,
  Wind,
  Cpu,
  Utensils,
  Car,
  Ship,
} from 'lucide-react'
import { industries } from '@/data/catalog'

const iconMap = {
  Building2,
  Wind,
  Cpu,
  Utensils,
  Car,
  Ship,
}

export default function Industries() {
  return (
    <section
      className="bg-bone py-24 text-ink md:py-32"
      aria-labelledby="industries-title"
    >
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p
              id="industries-eyebrow"
              className="eyebrow eyebrow-line text-brass-2"
            >
              <span>Industries we serve</span>
            </p>
            <h2
              id="industries-title"
              className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
            >
              From architectural cladding to shipyard plate.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ash">
            An ARTITECT folder is at work in fabrication shops on six continents —
            bending the parts that show up in the buildings you walk through,
            the planes you fly on, and the kitchens where you cook.
          </p>
        </div>

        <ul
          id="industries-list"
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line-2 bg-line-2 md:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon] || Building2
            return (
              <li
                key={industry.id}
                className="group flex flex-col gap-4 bg-bone p-8 transition-colors hover:bg-paper md:p-10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brass/30 bg-paper text-brass-2">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-eyebrow text-ash">
                    0{industries.indexOf(industry) + 1}
                  </span>
                </div>
                <h3
                  id={`industry-${industry.id}-title`}
                  className="text-lg font-semibold tracking-tight text-ink"
                >
                  {industry.name}
                </h3>
                <p
                  id={`industry-${industry.id}-desc`}
                  className="text-sm leading-relaxed text-ash"
                >
                  {industry.description}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
