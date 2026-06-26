import {
  ShieldCheck,
  Wrench,
  Globe2,
  Sparkles,
  Gauge,
  Headphones,
} from 'lucide-react'

const FEATURES = [
  {
    icon: Gauge,
    title: '±0.05 mm repeatability',
    text: 'CNC-calibrated backgauges and crowning systems keep fold angles within tight tolerances — shift after shift.',
  },
  {
    icon: ShieldCheck,
    title: '5-year frame warranty',
    text: 'Every welded frame is stress-relieved, machined in one setup, and backed by a five-year structural warranty.',
  },
  {
    icon: Wrench,
    title: 'Tooling without compromise',
    text: 'European-standard tool segments and quick-change carriers let you swap from a hem to a Pittsburgh seam in seconds.',
  },
  {
    icon: Sparkles,
    title: 'Operator-first HMI',
    text: 'A touchscreen control with saved programs, multilingual UI, and one-touch recall — onboarding in under an hour.',
  },
  {
    icon: Globe2,
    title: 'Global footprint',
    text: '1,800+ installations across 40+ countries, with regional service partners and on-stock spare parts worldwide.',
  },
  {
    icon: Headphones,
    title: '24 / 7 technical support',
    text: 'Remote diagnostics, video commissioning, and on-site engineers when you need them — not three weeks later.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-[#0E1B2C] py-20 text-white lg:py-28">
      {/* Decorative diagonal pattern */}
      <svg
        aria-hidden="true"
        className="absolute inset-y-0 left-0 -z-0 h-full w-1/3 opacity-[0.05]"
        viewBox="0 0 400 800"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="diag-why" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="#C8A85B" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag-why)" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left intro */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#C8A85B]">
              Why ARTITECT
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Built like a machine tool.
              <br />
              <span className="text-[#C8A85B]">Supported like a partner.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
              We started in a single workshop in 1998 making folder tooling for
              local fabricators. Today we ship complete folding systems to four
              continents — but every machine still leaves the floor tested
              against the same shop standard we used on day one.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-semibold text-[#C8A85B] tabular-nums md:text-4xl">
                  28 yrs
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-white/60">
                  Engineering heritage
                </div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-[#C8A85B] tabular-nums md:text-4xl">
                  180+
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-white/60">
                  Engineers on staff
                </div>
              </div>
            </div>
          </div>

          {/* Right feature grid */}
          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {FEATURES.map((f) => {
                const Icon = f.icon
                return (
                  <div
                    key={f.title}
                    className="bg-[#0E1B2C] p-7 transition hover:bg-[#142539]"
                  >
                    <Icon className="h-6 w-6 text-[#C8A85B]" strokeWidth={1.6} />
                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {f.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}