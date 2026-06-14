import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Link } from "react-router-dom"
import { ArrowRight, Cog, Globe2, Layers, Users } from "lucide-react"

const facts = [
  { value: "1998", label: "Founded" },
  { value: "320+", label: "Employees" },
  { value: "48", label: "Countries served" },
  { value: "24 mo", label: "Standard warranty" },
]

const values = [
  {
    icon: Cog,
    title: "Precision first",
    body: "We design for the operator who measures twice and bends once. Calibration is a way of life, not a checklist.",
  },
  {
    icon: Layers,
    title: "Honest engineering",
    body: "No proprietary consumables, no service lock-ins. Every part on every machine is documented and available.",
  },
  {
    icon: Globe2,
    title: "Built for the world",
    body: "Machines in 48 countries, service partners in 12. Your line keeps running, wherever you are.",
  },
  {
    icon: Users,
    title: "Partnership, not sales",
    body: "We quote the machine that fits your work — even if it means a smaller order. Long-term relationships compound.",
  },
]

export default function About() {
  const heroRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current)
  }, [])

  return (
    <>
      <section ref={heroRef} className="relative overflow-hidden bg-ink text-cream">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="about-hero-bg-77b219"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/80" aria-hidden="true" />
        <div className="container-page relative z-10 py-28 md:py-36 max-w-4xl">
          <p className="eyebrow text-gold">About ARTITECT</p>
          <h1
            id="about-hero-title"
            className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl text-cream"
          >
            We build machines the way our customers build things — one bend at a time.
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-8 text-base md:text-lg text-cream/70 leading-relaxed max-w-2xl"
          >
            Founded in 1998 in Shanghai, ARTITECT MACHINERY has grown from a
            12-person workshop into a global manufacturer of precision sheet
            metal folding machines — without ever losing the small-shop care
            that made us who we are.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink">
              Twenty-five years of better bends.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-steel leading-relaxed">
            <p>
              ARTITECT began in a single workshop with a single promise: that a
              sheet metal folding machine should bend exactly the way the
              operator intends, every time, for decades. That promise shaped
              our first double folder, and it shapes every machine we ship
              today.
            </p>
            <p>
              Over 3,200 machines later, our customers include HVAC fabricators,
              architectural metal workshops, electrical enclosure builders, and
              tier-one automotive suppliers — in 48 countries across six
              continents. We&apos;re proud of that reach, and prouder still of
              the small shops that have grown alongside us.
            </p>
            <p>
              Today, our engineering team of 60 works in a 35,000 m² facility in
              Shanghai, supported by a service network spanning Asia, Europe,
              and the Americas. Whatever the next 25 years bring, the standard
              remains the same: precision, durability, and a machine that earns
              its place in your shop.
            </p>
          </div>
        </div>

        <div className="container-page mt-16">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-hairline">
            {facts.map((f) => (
              <div key={f.label} className="bg-cream p-8">
                <dt className="text-[0.7rem] uppercase tracking-eyebrow text-muted">
                  {f.label}
                </dt>
                <dd className="mt-2 font-display text-4xl text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">What we stand for</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink">
              Four principles, in order of importance.
            </h2>
          </div>

          <div className="mt-16 grid gap-px bg-hairline sm:grid-cols-2">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-paper p-10">
                  <Icon className="w-7 h-7 text-gold" strokeWidth={1.25} />
                  <h3 className="mt-6 font-display text-2xl text-ink">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{v.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-tight bg-ink text-cream">
        <div className="container-page flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="font-display text-3xl md:text-4xl text-cream max-w-2xl">
            See what a properly configured folding machine can do for your shop.
          </h2>
          <Link
            to="/contact"
            className="btn bg-cream text-ink hover:bg-gold hover:text-ink self-start md:self-auto"
          >
            Talk to an engineer <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
