import { useEffect, useRef, useState } from 'react'
import { ArrowRight, CheckCircle2, Factory, Gauge, Mail, Menu, Phone, ShieldCheck, Sparkles, Wrench, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import './App.css'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-output folding power for repeatable bends, clean lines, and dependable day-to-day production.',
    specs: ['Dual-side folding', 'Precision clamping', 'Workshop-ready controls'],
    imgId: 'product-double-folding-machine-a9f2c1',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'A versatile solution for custom metal shops producing roofing, façade, ducting, and architectural parts.',
    specs: ['Consistent edge quality', 'Fast setup', 'Durable frame'],
    imgId: 'product-sheet-metal-folder-b7d4e8',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Elegant engineering for accurate folds across a wide range of metalworking applications.',
    specs: ['Smooth operation', 'Operator-friendly layout', 'Long service life'],
    imgId: 'product-metal-folding-machine-c5h8k2',
  },
]

const productTerms = [
  'Double folder',
  'Sheet metal folding machine',
  'Metal folder',
  'Metal folder machine',
  'Metal folding machine',
]

const advantages = [
  {
    icon: Gauge,
    title: 'Precision without complexity',
    text: 'Clear controls and rigid construction help teams make accurate bends with less trial and error.',
  },
  {
    icon: ShieldCheck,
    title: 'Built for dependable output',
    text: 'Industrial-grade design supports steady production, clean finishes, and confident operation.',
  },
  {
    icon: Wrench,
    title: 'Easy to own and maintain',
    text: 'Accessible layouts, practical details, and service-minded engineering keep work moving.',
  },
]

const processSteps = [
  'Share your material, thickness, and folding needs.',
  'Match the right folder configuration to your workflow.',
  'Receive guided setup support for confident production.',
]

function App() {
  console.log('Rendering ARTITECT MACHINERY landing page')

  const pageRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <main ref={pageRef} className="min-h-screen bg-slate-100 text-slate-950">
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8" aria-label="Primary navigation">
          <a href="#top" onClick={closeMenu} className="flex items-center gap-3 text-white" aria-label="ARTITECT MACHINERY home">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-amber-400 shadow-lg backdrop-blur">
              <Factory className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-none">
              <span className="block text-sm font-semibold tracking-[0.28em]">ARTITECT</span>
              <span className="block text-xs font-medium tracking-[0.24em] text-slate-300">MACHINERY</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            <a className="transition hover:text-amber-400" href="#products">Products</a>
            <a className="transition hover:text-amber-400" href="#advantages">Advantages</a>
            <a className="transition hover:text-amber-400" href="#contact">Contact</a>
          </div>

          <a href="#contact" className="hidden rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-950/20 transition hover:bg-amber-300 md:inline-flex">
            Request a Quote
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white md:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="mx-6 rounded-3xl border border-white/15 bg-slate-950/95 p-4 text-white shadow-2xl backdrop-blur md:hidden">
            <div className="grid gap-2 text-sm font-semibold text-slate-100">
              <a onClick={closeMenu} className="rounded-2xl px-4 py-3 hover:bg-white/10" href="#products">Products</a>
              <a onClick={closeMenu} className="rounded-2xl px-4 py-3 hover:bg-white/10" href="#advantages">Advantages</a>
              <a onClick={closeMenu} className="rounded-2xl px-4 py-3 hover:bg-white/10" href="#contact">Contact</a>
              <a onClick={closeMenu} className="mt-2 rounded-full bg-amber-400 px-4 py-3 text-center text-slate-950" href="#contact">Request a Quote</a>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 -z-10 opacity-40"
          data-strk-bg-id="hero-industrial-folding-machine-m8p4q2"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-950/90 to-slate-900/70" />
        <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />

        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-36">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
              Precision sheet metal machinery
            </p>
            <h1 id="hero-title" className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Elegant folding machines for serious metalwork.
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              ARTITECT MACHINERY supplies double folding machines, double folders, sheet metal folders, and metal folding machines designed for accuracy, durability, and easy operation.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-4 text-sm font-semibold text-slate-950 shadow-xl shadow-amber-950/20 transition hover:bg-amber-300">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-amber-400 hover:text-amber-300">
                Talk to an Expert
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-900">
              <img
                alt="ARTITECT MACHINERY sheet metal folding machine in a modern workshop"
                className="h-80 w-full object-cover md:h-[32rem]"
                data-strk-img-id="hero-machine-photo-q4v8n1"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="grid gap-3 bg-slate-900 p-5 text-white sm:grid-cols-3">
                {['Accurate folds', 'Solid frame', 'Friendly control'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm font-semibold text-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-6 text-slate-950">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-6 lg:px-8">
          {productTerms.map((term) => (
            <span key={term} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
              {term}
            </span>
          ))}
        </div>
      </section>

      <section id="products" className="bg-slate-100 py-16 text-slate-950 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">Product range</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Folding solutions shaped around your workshop.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              From a dependable metal folder to a powerful double folding machine, each solution is presented clearly so your team can choose with confidence.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {products.map((product) => {
              const titleId = `product-${product.id}-title`
              const descId = `product-${product.id}-desc`

              return (
                <article key={product.id} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-slate-950 shadow-xl shadow-slate-200/70">
                  <img
                    alt={product.title}
                    className="h-64 w-full object-cover"
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${descId}] [${titleId}] [hero-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="p-6 md:p-8">
                    <h3 id={titleId} className="text-2xl font-semibold tracking-tight text-slate-950">{product.title}</h3>
                    <p id={descId} className="mt-4 leading-7 text-slate-600">{product.description}</p>
                    <ul className="mt-6 space-y-3">
                      {product.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="advantages" className="bg-white py-16 text-slate-950 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">Why ARTITECT</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Industrial strength with a refined user experience.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The best machinery feels powerful and approachable. ARTITECT MACHINERY focuses on clear operation, sturdy construction, and polished presentation from quote to installation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {advantages.map((advantage) => {
              const Icon = advantage.icon
              return (
                <div key={advantage.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-slate-950 shadow-sm">
                  <div className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-amber-400">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950">{advantage.title}</h3>
                      <p className="mt-2 leading-7 text-slate-600">{advantage.text}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Simple buying process</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Find the right sheet metal folding machine faster.
              </h2>
              <div className="mt-8 space-y-5">
                {processSteps.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-slate-950">
                      {index + 1}
                    </span>
                    <p className="leading-7 text-slate-200">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="min-h-[24rem] bg-slate-800"
              data-strk-bg-id="process-metalwork-shop-bg-r7s3d9"
              data-strk-bg="[hero-subtitle] [hero-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="900"
              aria-label="Modern metalworking workshop"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-100 py-16 text-slate-950 md:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 md:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-slate-950">
              <Sparkles className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Ready to discuss your next folding machine?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Tell ARTITECT MACHINERY what you produce, and we will help you choose a double folder, sheet metal folder, or metal folding machine that fits your workflow.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="mailto:sales@artitectmachinery.com" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800">
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                sales@artitectmachinery.com
              </a>
              <a href="tel:+10000000000" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:border-amber-400 hover:text-amber-700">
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Request a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-slate-300 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="font-semibold tracking-[0.22em] text-white">ARTITECT MACHINERY</p>
          <p>Double folding machines, sheet metal folders, and metal folding machines.</p>
        </div>
      </footer>
    </main>
  )
}

export default App
