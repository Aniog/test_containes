import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Award, Globe2, Wrench } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useReveal } from "@/hooks/useReveal"
import { companyInfo, differentiators, trustStats } from "@/data/company"
import { cn } from "@/lib/utils"

function PillarBlock({ item, index }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={cn(
        "border-t border-hairline pt-8 transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <h3 className="font-serif text-2xl text-ink md:text-3xl">
        {item.title}
      </h3>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-steel-soft">
        {item.description}
      </p>
    </div>
  )
}

function Milestone({ year, label, body, index }) {
  const [ref, visible] = useReveal()
  return (
    <li
      ref={ref}
      className={cn(
        "grid grid-cols-12 gap-4 border-t border-hairline py-8 transition-all duration-700 md:gap-8",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      )}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="col-span-3 md:col-span-2">
        <p className="font-serif text-3xl text-brass-deep num-tabular md:text-4xl">
          {year}
        </p>
      </div>
      <div className="col-span-9 md:col-span-10">
        <h3 className="font-serif text-xl text-ink md:text-2xl">{label}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-steel-soft md:text-base">
          {body}
        </p>
      </div>
    </li>
  )
}

const milestones = [
  {
    year: "1998",
    label: "Founded in Stuttgart",
    body: "Artitect begins as a precision tooling shop serving the regional automotive supply chain.",
  },
  {
    year: "2004",
    label: "First swing-beam folder",
    body: "The Atlas D series is launched, setting the engineering template the company still follows.",
  },
  {
    year: "2011",
    label: "International expansion",
    body: "Regional service partners established in 18 countries. First 1 000-unit shipment year.",
  },
  {
    year: "2017",
    label: "CNC crowning standard",
    body: "Multi-axis crowning compensation becomes a standard feature on every Atlas and Titan model.",
  },
  {
    year: "2023",
    label: "Heavy duty Titan H series",
    body: "The 6-metre Titan H600 extends the line into plate-folding for shipyards and structural fabricators.",
  },
]

export default function About() {
  const heroRef = useRef(null)
  const factoryRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current)
  }, [])

  useEffect(() => {
    if (!factoryRef.current) return
    return ImageHelper.loadImages(strkImgConfig, factoryRef.current)
  }, [])

  return (
    <>
      <section
        ref={heroRef}
        className="relative isolate overflow-hidden bg-ink text-bone"
      >
        <div
          aria-hidden="true"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-eyebrow] [about-hero-title] [about-hero-sub]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          className="absolute inset-0 opacity-40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink"
        />

        <div className="container-content relative pt-40 pb-24 md:pt-48 md:pb-32">
          <div className="max-w-3xl">
            <span id="about-hero-eyebrow" className="eyebrow-light">
              About Artitect
            </span>
            <h1
              id="about-hero-title"
              className="mt-6 font-serif text-5xl font-medium leading-[1.05] text-bone md:text-6xl lg:text-7xl text-balance"
            >
              Twenty-seven years of building
              <br />
              <span className="text-brass">the same thing, only better.</span>
            </h1>
            <p
              id="about-hero-sub"
              className="mt-8 max-w-2xl text-base leading-relaxed text-bone/75 md:text-lg"
            >
              We started as a tooling shop. We became a machinery manufacturer
              because our customers kept asking us to build the folding machine
              that nobody else was making for them.
            </p>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="bg-bone section-pad-lg"
      >
        <div className="container-content">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Our story"
                title="A factory, not a brand."
                description="Artitect is a 220-person engineering and manufacturing company headquartered in Stuttgart. We design, weld, machine, assemble, and calibrate every machine we sell in our own facility."
              />

              <div className="mt-10 grid grid-cols-2 gap-4">
                {trustStats.map((s) => (
                  <div
                    key={s.label}
                    className="border border-hairline bg-paper p-5"
                  >
                    <p className="font-serif text-3xl text-ink num-tabular">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-eyebrow text-steel-soft">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={factoryRef}
              className="lg:col-span-7"
            >
              <div className="overflow-hidden border border-hairline">
                <img
                  alt="Artitect Machinery assembly hall in Stuttgart"
                  data-strk-img-id="about-img-factory"
                  data-strk-img="[about-hero-eyebrow] [about-hero-title] [about-hero-sub] [about-story-eyebrow] [about-story-title]"
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
                  className="aspect-[3/2] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <span id="about-story-eyebrow" className="hidden">
                Our story
              </span>
              <span id="about-story-title" className="hidden">
                A factory not a brand
              </span>

              <div className="mt-12 space-y-2">
                {differentiators.map((item, i) => (
                  <PillarBlock key={item.title} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="service"
        className="bg-paper section-pad-lg"
      >
        <div className="container-content">
          <SectionHeader
            eyebrow="Service & support"
            title="A regional engineer, not a ticket queue."
            description="Every Artitect machine is supported by a regional service engineer within 200 km of your site, a 24-hour spare-parts guarantee on wear components, and a planned-preventive-maintenance schedule we will draft with you at install."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: Wrench,
                title: "On-site commissioning",
                body: "Rigging, alignment, operator training, and the first production run on your floor — included in the price.",
              },
              {
                icon: Globe2,
                title: "48-country service network",
                body: "Local engineers, local spare-parts stock, and a direct line to the engineer who built your machine.",
              },
              {
                icon: Award,
                title: "Two-year warranty",
                body: "Full machine warranty, with optional extension to five years for the welded frame and tool rails.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-hairline bg-bone p-6 md:p-8"
              >
                <item.icon
                  className="h-7 w-7 text-brass-deep"
                  strokeWidth={1.5}
                />
                <h3 className="mt-5 font-serif text-2xl text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-soft">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone section-pad-lg">
        <div className="container-content">
          <SectionHeader
            eyebrow="Milestones"
            title="A short history of a long-running company."
          />
          <ol className="mt-12 border-b border-hairline">
            {milestones.map((m, i) => (
              <Milestone key={m.year} {...m} index={i} />
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink text-bone section-pad-lg">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="eyebrow-light">Visit us</span>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-bone md:text-4xl lg:text-5xl text-balance">
                Factory visits are the best way to choose a folding machine.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-bone/75">
                Spend a day at our Stuttgart facility, see a machine running on
                your material, and leave with a configuration in your hand.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="border border-white/10 bg-ink-soft/40 p-8">
                <p className="text-xs uppercase tracking-eyebrow text-brass">
                  Headquarters
                </p>
                <p className="mt-3 font-serif text-2xl text-bone">
                  {companyInfo.headquarters}
                </p>
                <p className="mt-2 text-sm text-bone/70">
                  {companyInfo.address}
                </p>
                <Link
                  to="/contact?topic=demo"
                  className="btn-accent mt-6 inline-flex"
                >
                  Book a factory visit
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
