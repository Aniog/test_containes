import {
  ArrowRight,
  CheckCircle2,
  Cog,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react'
import FeatureCard from '@/components/home/FeatureCard'
import ProcessStep from '@/components/home/ProcessStep'
import ProductCard from '@/components/home/ProductCard'
import SectionHeading from '@/components/home/SectionHeading'

const products = [
  {
    title: 'Double Folding Machine',
    eyebrow: 'Flagship range',
    description:
      'Built for fast, repeatable folding performance with refined motion control and stable clamping for demanding production lines.',
    highlights: ['Clean fold consistency', 'High operator comfort', 'Smooth repeat jobs'],
  },
  {
    title: 'Precision Sheet Metal Folder',
    eyebrow: 'Flexible production',
    description:
      'A versatile sheet metal folder for workshops that need elegant accuracy across varied materials, dimensions, and bend profiles.',
    highlights: ['Adaptable setup', 'Compact workflow fit', 'Friendly daily operation'],
  },
  {
    title: 'Automated Metal Folding Machine',
    eyebrow: 'Scalable output',
    description:
      'Designed for manufacturers seeking efficient handling, dependable structure, and a polished production experience from setup to delivery.',
    highlights: ['Reliable machine frame', 'Production-ready design', 'Confident output planning'],
  },
]

const features = [
  {
    icon: Gauge,
    title: 'Precision-first performance',
    description:
      'Stable motion, accurate folding, and dependable control help teams achieve cleaner parts with less guesswork.',
  },
  {
    icon: Cog,
    title: 'User-friendly operation',
    description:
      'Interfaces and workflows are presented in a way that feels simple for operators while still supporting industrial output.',
  },
  {
    icon: ShieldCheck,
    title: 'Built for confidence',
    description:
      'Rigid structure, practical safeguards, and durable finishing support consistent daily use in fabrication environments.',
  },
  {
    icon: Wrench,
    title: 'Practical machine matching',
    description:
      'We position each machine range around the customer’s material profile, bend length, and production rhythm.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Define your production target',
    description:
      'Start with material type, sheet thickness, panel length, and output goals so the machine recommendation is grounded in real work.',
  },
  {
    number: '02',
    title: 'Configure the right folder',
    description:
      'Choose a double folder or sheet metal folding machine that fits your process, operator needs, and workshop footprint.',
  },
  {
    number: '03',
    title: 'Move into confident operation',
    description:
      'Adopt a cleaner workflow with equipment that balances elegant engineering, everyday usability, and dependable performance.',
  },
]

const applications = [
  'Architectural panels',
  'Roofing and cladding lines',
  'Cabinet and enclosure work',
  'HVAC and general fabrication',
]

const keywords = [
  'double folding machine',
  'double folder',
  'sheet metal folder',
  'sheet metal folding machine',
  'metal folder',
  'metal folder machine',
  'metal folding machine',
]

function Home() {
  return (
    <div className="min-h-screen bg-stone-100 text-slate-950">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/90 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/30 bg-white/5 text-sm font-semibold tracking-[0.28em] text-amber-300">
              AM
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-amber-200">
                ARTITECT MACHINERY
              </p>
              <p className="text-sm text-slate-300">Elegant folding solutions</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#products" className="transition hover:text-white">
              Products
            </a>
            <a href="#advantages" className="transition hover:text-white">
              Advantages
            </a>
            <a href="#workflow" className="transition hover:text-white">
              Workflow
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Request a quote
          </a>
        </div>
      </header>

      <main>
        <section
          id="top"
          className="overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-stone-900 text-white"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/25 bg-white/5 px-4 py-2 text-sm text-amber-100">
                <Sparkles className="h-4 w-4 text-amber-300" />
                Premium sheet metal folding systems
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                Elegant machinery for accurate, user-friendly metal folding.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                ARTITECT MACHINERY presents a refined range of double folding machines,
                sheet metal folders, and metal folding systems designed for precision,
                ease of use, and confident day-to-day production.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-amber-300"
                >
                  Explore products
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#workflow"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  See the workflow
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-amber-400/10 blur-3xl" />
              <div className="relative space-y-5 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur md:p-8">
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-amber-200">
                    Machine focus
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">
                    Double folder systems with a premium operator experience
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-300">
                    Ideal for teams that want folding equipment to feel powerful,
                    organized, and easy to adopt across the production floor.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      'Refined control feel',
                      'Stable folding structure',
                      'Clean production layout',
                      'Workshop-ready usability',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100"
                      >
                        <CheckCircle2 className="h-4 w-4 text-amber-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white p-5 text-slate-950">
                    <div className="mb-3 inline-flex rounded-full bg-amber-100 p-3 text-amber-600">
                      <Layers3 className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950">Flexible product range</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      From standalone metal folders to advanced sheet metal folding
                      machines, the range stays clear and easy to compare.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-amber-300 p-5 text-slate-950">
                    <div className="mb-3 inline-flex rounded-full bg-slate-950/10 p-3 text-slate-900">
                      <Cog className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950">Built around usability</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-800">
                      Elegant machine design means operators spend less time adapting
                      and more time producing with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Product line"
              title="A polished range of folding machines for modern fabrication"
              description="Choose between double folding machines, sheet metal folders, and scalable metal folding systems tailored to your production style."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section id="advantages" className="bg-slate-950 py-20 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Why ARTITECT MACHINERY"
              title="Industrial capability presented in a way buyers can trust quickly"
              description="The experience is engineered to feel premium, but every decision still supports usability, clarity, and production confidence."
              dark
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">
                Application fit
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                Ready for the parts and panels your workshop handles every day
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                ARTITECT MACHINERY solutions are positioned for businesses that need
                a clean path from material input to consistent folded output.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {applications.map((application) => (
                <div
                  key={application}
                  className="rounded-[1.75rem] border border-slate-200 bg-stone-50 p-6 text-slate-950"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Use case
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-950">{application}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    A strong match for fabrication teams that want a folder machine to
                    deliver both precision and a smoother production rhythm.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="bg-stone-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Simple workflow"
              title="A buyer journey that stays clear from first inquiry to final machine choice"
              description="Keep the decision process practical, well-structured, and easy for both technical teams and business stakeholders."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {steps.map((step) => (
                <ProcessStep key={step.number} {...step} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-20 text-white lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-200">
                Next step
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-white">
                Tell us your sheet size, material needs, and production target.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                We will help you compare the right double folder, sheet metal folder,
                or metal folding machine style for a more elegant and productive setup.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-amber-300"
                >
                  Review product range
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#top"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Back to top
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-200">
                Inquiry checklist
              </p>
              <div className="mt-6 space-y-4">
                {[
                  'Material type and thickness',
                  'Required bend length and part style',
                  'Daily or monthly output expectation',
                  'Preferred workflow and operator setup',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-300" />
                    <p className="text-base text-slate-100">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="font-medium text-slate-950">ARTITECT MACHINERY</p>
          <p>Elegant and user-friendly machinery presentation for sheet metal folding solutions.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
