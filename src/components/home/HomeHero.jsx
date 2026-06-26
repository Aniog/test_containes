import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, Clock, Globe2 } from "lucide-react"
import { Container } from "@/components/ui/primitives"
import { Button } from "@/components/ui/button"

export default function HomeHero() {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        data-strk-bg-id="sourcingGlobalTrade9d4c"
        data-strk-bg="global trade handshake shipping"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/85 to-navy-900/60"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-20 md:py-28 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300 ring-1 ring-white/15">
              <Globe2 className="h-3.5 w-3.5" /> English-speaking team in China
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-200 leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories,
              inspect quality, follow production and coordinate shipping — all
              in clear English, with one point of contact.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                as={Link}
                to="/contact"
                variant="accent"
                size="lg"
                className="w-full sm:w-auto"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                as={Link}
                to="/how-it-works"
                variant="outlineLight"
                size="lg"
                className="w-full sm:w-auto"
              >
                See How It Works
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl">
              {[
                { v: "10+ yrs", l: "Sourcing experience" },
                { v: "500+", l: "Verified factories" },
                { v: "30+", l: "Countries served" },
                { v: "98%", l: "On-time shipments" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="text-2xl md:text-3xl font-bold text-white">
                    {s.v}
                  </dt>
                  <dd className="text-xs uppercase tracking-wider text-slate-300 mt-1">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-white">
                What you get with us
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {[
                  {
                    i: <ShieldCheck className="h-4 w-4 text-amber-400" />,
                    t: "Verified, factory-direct suppliers",
                  },
                  {
                    i: <Clock className="h-4 w-4 text-amber-400" />,
                    t: "1-business-day response, China time",
                  },
                  {
                    i: <Globe2 className="h-4 w-4 text-amber-400" />,
                    t: "Native-level English contracts & reports",
                  },
                ].map((row) => (
                  <li key={row.t} className="flex items-start gap-2.5">
                    <span className="mt-0.5">{row.i}</span>
                    <span>{row.t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                  Average reply time
                </p>
                <p className="mt-1 text-2xl font-bold text-white">{"< 24h"}</p>
                <p className="mt-1 text-xs text-slate-300">
                  Monday – Friday, China time
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}