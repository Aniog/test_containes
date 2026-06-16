import './App.css'
import {
  ArrowRight,
  BadgeCheck,
  FoldHorizontal,
  Gauge,
  ShieldCheck,
  Wrench,
} from 'lucide-react'

const productKeywords = [
  'Double folding machine',
  'Double folder',
  'Sheet metal folder',
  'Sheet metal folding machine',
  'Metal folder',
  'Metal folder machine',
  'Metal folding machine',
]

const capabilityCards = [
  {
    title: 'Precision engineering',
    description:
      'Built for repeatable bends, clean finishes, and dependable output on demanding sheet metal jobs.',
    icon: Gauge,
  },
  {
    title: 'Operator-friendly workflow',
    description:
      'Clear layouts, practical controls, and accessible service points make daily operation easy and efficient.',
    icon: FoldHorizontal,
  },
  {
    title: 'Long-term reliability',
    description:
      'Strong frames, dependable components, and support-minded design help reduce downtime in production.',
    icon: ShieldCheck,
  },
]

const machines = [
  {
    name: 'Double Folding Machine',
    summary:
      'A premium solution for fast, accurate folding with smooth handling for modern fabrication lines.',
    points: ['High consistency across repeat jobs', 'Balanced power and finishing quality', 'Designed for professional industrial use'],
  },
  {
    name: 'Sheet Metal Folding Machine',
    summary:
      'Optimized for precise sheet metal forming where clean geometry, control, and throughput matter most.',
    points: ['Stable performance under daily production', 'Suitable for architectural and industrial applications', 'Built for efficient material handling'],
  },
  {
    name: 'Metal Folder Machine',
    summary:
      'A refined machine platform for workshops and factories that need dependable folding with user-friendly operation.',
    points: ['Straightforward setup', 'Reliable structural strength', 'Professional output with minimal complexity'],
  },
]

const processSteps = [
  'Consult on material type, thickness, and production goals',
  'Match the right folding system to your workflow',
  'Support installation, operation, and long-term performance',
]

const stats = [
  { value: '7+', label: 'core product search terms covered' },
  { value: '3', label: 'key machinery solution groups' },
  { value: '24/7', label: 'built-for-production mindset' },
]

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-8 md:px-10 md:py-10">
          <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                ARTITECT MACHINERY
              </p>
              <p className="mt-3 max-w-xl text-sm text-slate-300 md:text-base">
                Elegant machinery presentation for industrial folding solutions that are simple to understand and built to perform.
              </p>
            </div>
            <nav aria-label="Primary" className="flex flex-wrap gap-3 text-sm text-slate-200">
              <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-amber-400 hover:text-white" href="#products">
                Products
              </a>
              <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-amber-400 hover:text-white" href="#advantages">
                Advantages
              </a>
              <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-amber-400 hover:text-white" href="#contact">
                Contact
              </a>
            </nav>
          </header>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
                <BadgeCheck className="h-4 w-4" />
                Sheet metal folding systems with premium clarity
              </div>
              <div className="space-y-6">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                  Industrial folding machinery designed with precision, confidence, and ease of use.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  ARTITECT MACHINERY presents double folding machines, sheet metal folders, and metal folding solutions in a way that feels professional, elegant, and easy for buyers to navigate.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  Explore machines
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  Request a quote
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-sm md:p-8">
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                    <div className="text-3xl font-semibold text-white">{stat.value}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/60" id="products">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Product focus</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                A clear product range for folding performance
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                The site is structured around the exact product language buyers look for, while keeping the experience refined and easy to scan.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <Wrench className="h-4 w-4 text-amber-400" />
              Practical layout for industrial decision-makers
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {productKeywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-200"
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {machines.map((machine) => (
              <article
                key={machine.name}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 text-white shadow-xl shadow-black/20"
              >
                <div className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-300">
                  Signature machine
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{machine.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{machine.summary}</p>
                <ul className="mt-6 space-y-3">
                  {machine.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 text-slate-900" id="advantages">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">Why ARTITECT MACHINERY</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Elegant presentation backed by industrial substance
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Every section is built to help visitors understand machine value quickly, without losing the premium character expected from serious industrial equipment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {capabilityCards.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="inline-flex rounded-2xl bg-amber-100 p-3 text-amber-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">How we help</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Straightforward guidance from inquiry to operation
            </h2>
            <ol className="mt-8 space-y-5">
              {processSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-semibold text-slate-950">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-7 text-slate-300">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Typical applications</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
                <li>Architectural metalwork</li>
                <li>Industrial fabrication workshops</li>
                <li>Custom profile and panel production</li>
                <li>High-accuracy sheet metal processing</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Buyer priorities</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
                <li>Clean folding results</li>
                <li>Simple operation for teams</li>
                <li>Durability for long production runs</li>
                <li>Professional support and confidence</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-amber-500/10 p-8 md:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">Brand message</p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white">
                ARTITECT MACHINERY combines a premium industrial image with an approachable website experience, helping customers move from interest to inquiry without friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-900" id="contact">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">Start a conversation</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                  Looking for the right metal folding machine solution?
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Share your production needs and ARTITECT MACHINERY can guide you toward the right double folder or sheet metal folding system for your operation.
                </p>
              </div>
              <a
                href="mailto:sales@artitectmachinery.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                sales@artitectmachinery.com
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
