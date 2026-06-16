import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import {
  ArrowUpRight,
  Cog,
  Hammer,
  Wrench,
  Telescope,
  Globe2,
  Award,
  History,
} from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { stats, capabilities } from '@/data/catalog'

const milestones = [
  {
    year: '1998',
    title: 'Founded in Stuttgart',
    description:
      'Two former press-brake engineers and a control-systems PhD build their first sheet metal folder in a 600 m² workshop.',
    icon: Hammer,
  },
  {
    year: '2006',
    title: 'First Double Folding Machine',
    description:
      'A breakthrough in beam synchronization lets us fold both edges of a sheet in a single pass — the machine that defines our flagship line.',
    icon: Cog,
  },
  {
    year: '2012',
    title: 'Global service network',
    description:
      'Field service engineers and spare-parts depots open across Europe, North America, and Asia.',
    icon: Globe2,
  },
  {
    year: '2018',
    title: 'Closed-loop hydraulics',
    description:
      'We replace proportional valves with closed-loop servo-hydraulics, lifting repeatability from ±0.3° to ±0.1° across the family.',
    icon: Wrench,
  },
  {
    year: '2023',
    title: 'Robotic loading cells',
    description:
      'The Heavy Gauge line ships with optional robotic loading and stacking, integrating with our customers&rsquo; lights-out lines.',
    icon: Telescope,
  },
  {
    year: 'Today',
    title: '4,800 machines in the field',
    description:
      'In 52 countries, folding parts in architecture, HVAC, switchgear, automotive, shipyards, and cleanrooms.',
    icon: Award,
  },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink pb-16 pt-36 text-white md:pb-20 md:pt-44">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          data-strk-bg-id="about-hero-bg-7d2c81"
          data-strk-bg="[about-eyebrow] [about-subtitle] [about-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-15" />

        <div className="container-page">
          <div className="max-w-3xl">
            <p
              id="about-eyebrow"
              className="eyebrow eyebrow-line text-brass"
            >
              <span><History className="h-3 w-3" strokeWidth={1.75} /> Our story</span>
            </p>
            <h1
              id="about-title"
              className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
            >
              A foundry of engineers who never quite left the shop floor.
            </h1>
            <p
              id="about-subtitle"
              className="mt-6 max-w-2xl text-lg leading-relaxed text-steel"
            >
              ARTITECT MACHINERY was founded in 1998 by two press-brake
              engineers and a control-systems PhD who believed that
              sheet-metal folding deserved its own category of machine — and
              its own category of care. Twenty-five years later, we are still
              privately held, still designing in Stuttgart, and still picking
              up the phone when a customer calls.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-paper py-20 text-ink md:py-24">
        <div className="container-page">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line-2 bg-line-2 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-3 bg-paper p-8 md:p-10"
              >
                <dt className="text-xs font-medium uppercase tracking-eyebrow text-ash">
                  {stat.label}
                </dt>
                <dd className="text-5xl font-semibold leading-none tracking-tight text-ink md:text-6xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-bone py-20 text-ink md:py-28">
        <div className="container-page">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow eyebrow-line text-brass-2">Principles</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
                Three rules that have not changed since 1998.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ash md:text-lg">
                We are a small company. We answer the phone. We design the
                machine, we cast the frame, we write the firmware, and we
                service what we sell. Every other shortcut has, in our
                experience, come back as a service ticket.
              </p>
              <div className="mt-8">
                <Link to="/products" className="btn-primary">
                  See our machines
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </Link>
              </div>
            </div>
            <ul className="grid gap-6 lg:col-span-7 sm:grid-cols-2">
              {capabilities.map((cap, i) => (
                <li
                  key={cap.id}
                  className="flex flex-col gap-3 rounded-2xl border border-line-2 bg-paper p-6 md:p-8"
                >
                  <span className="text-xs font-semibold uppercase tracking-eyebrow text-brass-2">
                    Principle 0{i + 1}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ash">
                    {cap.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ink-2 py-20 text-white md:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow-line text-brass">Milestones</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Twenty-five years of folding machines.
            </h2>
          </div>
          <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {milestones.map((m) => {
              const Icon = m.icon
              return (
                <li
                  key={m.year}
                  className="flex flex-col gap-3 bg-ink-2 p-8 md:p-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-semibold leading-none tracking-tight text-brass">
                      {m.year}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brass/30 bg-ink-3 text-brass">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {m.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-steel">
                    {m.description}
                  </p>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-ink py-20 text-white md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-15" />
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-ink-2 p-8 md:flex-row md:items-center md:p-12">
            <div className="max-w-xl">
              <p className="eyebrow eyebrow-line text-brass">Work with us</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Engineer a machine that folds true for your shop.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Request a quote
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </Link>
              <Link to="/products" className="btn-secondary-dark">
                Browse the catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
