import { useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle2, Factory, Gauge, Mail, Phone, ShieldCheck, Sparkles, Wrench } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import './App.css'

const products = [
  {
    name: 'Double Folding Machine',
    description: 'Designed for repeated, accurate double folds on sheet metal parts with smooth handling and dependable output.',
    imageId: 'product-double-folding-machine-a7k4m2',
    titleId: 'product-double-folding-machine-title',
    descId: 'product-double-folding-machine-desc',
  },
  {
    name: 'Sheet Metal Folder',
    description: 'A strong, operator-friendly folder for workshops that need clean bends, flexible setup, and long service life.',
    imageId: 'product-sheet-metal-folder-b9n6p1',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    name: 'Metal Folding Machine',
    description: 'Built for precision folding across production environments where consistency, control, and durability matter.',
    imageId: 'product-metal-folding-machine-c3q8r5',
    titleId: 'product-metal-folding-machine-title',
    descId: 'product-metal-folding-machine-desc',
  },
]

const strengths = [
  { icon: Gauge, title: 'Precision folding', text: 'Balanced controls help operators achieve crisp, repeatable bend quality.' },
  { icon: ShieldCheck, title: 'Durable build', text: 'Engineered for daily industrial use with sturdy frames and reliable components.' },
  { icon: Wrench, title: 'Easy operation', text: 'User-friendly layouts make setup, adjustment, and production more efficient.' },
]

const productKeywords = [
  'double folder',
  'sheet metal folding machine',
  'metal folder',
  'metal folder machine',
  'double folding machine',
  'metal folding machine',
]

function App() {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <main ref={pageRef} className="min-h-screen bg-slate-50 text-slate-950">
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8" aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-3 text-white" aria-label="ARTITECT MACHINERY home">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-amber-300 shadow-lg backdrop-blur">
              <Factory className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold tracking-[0.22em]">ARTITECT</span>
              <span className="block text-xs font-semibold text-slate-300">MACHINERY</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-slate-100 backdrop-blur md:flex">
            <a className="transition hover:text-amber-300" href="#products">Products</a>
            <a className="transition hover:text-amber-300" href="#advantages">Advantages</a>
            <a className="transition hover:text-amber-300" href="#contact">Contact</a>
          </div>

          <a href="#contact" className="rounded-full bg-amber-400 px-4 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:bg-amber-300 sm:px-5">
            Request a Quote
          </a>
        </nav>
      </header>

      <section id="top" className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-industrial-folding-machine-bg-f6t2v9"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-slate-900/70" aria-hidden="true" />
        <div className="absolute left-1/2 top-28 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Elegant industrial folding solutions
            </p>
            <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              Precision sheet metal folding machines for modern production.
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              ARTITECT MACHINERY supplies double folding machine, double folder, sheet metal folder, metal folder machine, and metal folding machine solutions built for stable, accurate, user-friendly operation.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 font-bold text-slate-950 shadow-xl shadow-amber-950/20 transition hover:bg-amber-300">
                Explore Products
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/15">
                Talk to Our Team
              </a>
            </div>
            <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div>
                <dt className="text-3xl font-bold text-white">3</dt>
                <dd className="mt-1 text-sm text-slate-300">Core product lines</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-white">24/7</dt>
                <dd className="mt-1 text-sm text-slate-300">Inquiry access</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-white">B2B</dt>
                <dd className="mt-1 text-sm text-slate-300">Industrial focus</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
              <img
                className="h-[360px] w-full rounded-[1.5rem] object-cover md:h-[520px]"
                alt="ARTITECT MACHINERY sheet metal folding machine in production workshop"
                data-strk-img-id="hero-sheet-metal-folder-machine-k8d4n2"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="absolute -bottom-6 left-5 right-5 rounded-3xl border border-slate-200 bg-white p-5 text-slate-950 shadow-2xl md:left-auto md:right-8 md:w-72">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Product focus</p>
              <p className="mt-2 text-xl font-bold">Double folding and metal folder machines</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Reliable performance for sheet metal workshops, fabricators, and production teams.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">Our products</p>
            <h2 id="products-title" className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Metal folding machinery made clear, capable, and easy to choose.
            </h2>
            <p id="products-subtitle" className="mt-5 text-lg leading-8 text-slate-600">
              Browse ARTITECT MACHINERY solutions for double folding, sheet metal folding, and metal folder applications.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="overflow-hidden bg-slate-200">
                  <img
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                    alt={`${product.name} by ARTITECT MACHINERY`}
                    data-strk-img-id={product.imageId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] [products-subtitle] [products-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3 id={product.titleId} className="text-2xl font-bold text-slate-950">{product.name}</h3>
                  <p id={product.descId} className="mt-4 leading-7 text-slate-600">{product.description}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 font-bold text-slate-950 transition hover:text-amber-700">
                    Ask about this model
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {productKeywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">Why choose us</p>
            <h2 id="advantages-title" className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Elegant engineering with practical everyday usability.
            </h2>
            <p id="advantages-subtitle" className="mt-5 text-lg leading-8 text-slate-600">
              We focus on machinery that is precise, strong, and simple for teams to operate with confidence.
            </p>
            <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Built for production</p>
              <p className="mt-3 text-2xl font-bold">From small workshops to growing factories, ARTITECT MACHINERY helps teams create cleaner folds with less friction.</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {strengths.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-950 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-slate-100 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative rounded-[2rem] bg-slate-300 p-3 shadow-xl">
            <img
              className="h-[360px] w-full rounded-[1.5rem] object-cover md:h-[480px]"
              alt="Operator using a metal folder machine in an industrial workshop"
              data-strk-img-id="workshop-metal-folder-machine-h2s9x5"
              data-strk-img="[process-description] [process-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">User-friendly workflow</p>
            <h2 id="process-title" className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Clear controls, cleaner folds, smoother production days.
            </h2>
            <p id="process-description" className="mt-5 text-lg leading-8 text-slate-600">
              Our sheet metal folding machine solutions are presented for easy evaluation, with a focus on consistent bending, dependable parts, and straightforward operation.
            </p>
            <div className="mt-8 space-y-4">
              {['Discuss your metal thickness and folding needs', 'Choose the right double folder or metal folder machine', 'Receive practical guidance for setup and operation'].map((step) => (
                <div key={step} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-950 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-amber-600" aria-hidden="true" />
                  <p className="font-medium text-slate-800">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">Contact ARTITECT MACHINERY</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                Ready to find the right folding machine?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                Tell us about your production needs, material type, and target folding process. We will help you match the right machine category.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 text-slate-950 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-950">Request product guidance</h3>
              <div className="mt-6 space-y-4">
                <a href="mailto:sales@artitectmachinery.com" className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-semibold text-slate-800 transition hover:border-amber-300 hover:bg-amber-50">
                  <Mail className="h-5 w-5 text-amber-600" aria-hidden="true" />
                  sales@artitectmachinery.com
                </a>
                <a href="tel:+10000000000" className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-semibold text-slate-800 transition hover:border-amber-300 hover:bg-amber-50">
                  <Phone className="h-5 w-5 text-amber-600" aria-hidden="true" />
                  +1 000 000 0000
                </a>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-600">
                Replace these contact details with your preferred email and phone number whenever you are ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 pb-10 text-slate-300 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-white">ARTITECT MACHINERY</p>
          <p className="text-sm">Double folding machine · Sheet metal folder · Metal folding machine</p>
        </div>
      </footer>
    </main>
  )
}

export default App
