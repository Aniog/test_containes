import { useEffect, useRef } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Gauge,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import FeatureCard from './components/home/FeatureCard.jsx'
import ProductCard from './components/home/ProductCard.jsx'
import SectionHeading from './components/home/SectionHeading.jsx'
import StatCard from './components/home/StatCard.jsx'
import './App.css'

const products = [
  {
    title: 'Double Folding Machine',
    titleId: 'product-double-folding-machine-title',
    descId: 'product-double-folding-machine-desc',
    imageId: 'product-double-folding-machine-a7f3k2',
    badge: 'Flagship',
    description:
      'A refined double folding solution for workshops that need clean bends, steady repeatability, and confident daily production.',
    features: ['Dual-side folding workflow', 'Consistent sheet alignment', 'Ideal for precision metal panels'],
  },
  {
    title: 'Sheet Metal Folding Machine',
    titleId: 'product-sheet-metal-folding-machine-title',
    descId: 'product-sheet-metal-folding-machine-desc',
    imageId: 'product-sheet-metal-folding-machine-b9m4q8',
    badge: 'Versatile',
    description:
      'A user-friendly sheet metal folder engineered for smooth operation across fabrication, roofing, cladding, and custom parts.',
    features: ['Simple operator controls', 'Clean long-length bending', 'Built for steel, aluminum, and coated sheets'],
  },
  {
    title: 'Metal Folder Machine',
    titleId: 'product-metal-folder-machine-title',
    descId: 'product-metal-folder-machine-desc',
    imageId: 'product-metal-folder-machine-c5n8r1',
    badge: 'Reliable',
    description:
      'A durable metal folding machine platform that supports accurate angles, stable clamping, and dependable production output.',
    features: ['Rigid industrial frame', 'Repeatable angle control', 'Low-maintenance production design'],
  },
]

const advantages = [
  {
    icon: Gauge,
    title: 'Precision-focused performance',
    description:
      'Designed to help operators create crisp folds and dependable results without slowing down daily fabrication work.',
  },
  {
    icon: ShieldCheck,
    title: 'Durable machinery build',
    description:
      'Strong structural components and thoughtful engineering support long-term reliability in demanding workshops.',
  },
  {
    icon: Wrench,
    title: 'Practical support',
    description:
      'From product selection to operation guidance, ARTITECT MACHINERY keeps the buying process clear and useful.',
  },
]

const specs = [
  'Double folder and single-operation metal folder options',
  'Solutions for sheet metal folder, metal folder, and folding machine needs',
  'Application fit for panels, flashing, ducting, cladding, and workshop parts',
  'Machine recommendations based on sheet length, material, and bending workflow',
]

function App() {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-stone-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-3 text-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400 text-lg font-black text-slate-950">
              A
            </span>
            <span>
              <span className="block text-base font-bold tracking-widest">ARTITECT</span>
              <span className="block text-xs font-semibold uppercase tracking-widest text-slate-300">Machinery</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-200 md:flex">
            <a className="transition hover:text-amber-300" href="#products">Products</a>
            <a className="transition hover:text-amber-300" href="#advantages">Advantages</a>
            <a className="transition hover:text-amber-300" href="#applications">Applications</a>
            <a className="transition hover:text-amber-300" href="#contact">Contact</a>
          </div>
          <a href="#contact" className="hidden rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300 md:inline-flex">
            Request a Quote
          </a>
          <Menu className="h-7 w-7 text-white md:hidden" aria-hidden="true" />
        </nav>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div
            className="absolute inset-0 opacity-40"
            data-strk-bg-id="hero-machinery-background-p6x9d2"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-slate-900/70" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-12 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-amber-200">
                <Sparkles className="h-4 w-4" />
                Elegant metal folding solutions
              </p>
              <h1 id="hero-title" className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Precision folding machinery for modern sheet metal work.
              </h1>
              <p id="hero-subtitle" className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                ARTITECT MACHINERY supplies double folding machines, sheet metal folders, metal folder machines, and metal folding machines built for accuracy, confidence, and easy operation.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-base font-bold text-slate-950 shadow-2xl shadow-amber-500/20 transition hover:bg-amber-300">
                  Explore Products
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-base font-bold text-white transition hover:border-amber-300 hover:text-amber-200">
                  Talk to Sales
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur">
                <img
                  alt="ARTITECT MACHINERY sheet metal folding machine"
                  className="h-72 w-full rounded-3xl object-cover sm:h-96 lg:h-80"
                  data-strk-img-id="hero-folding-machine-visual-k3n7w4"
                  data-strk-img="[hero-subtitle] [hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="absolute -bottom-10 left-6 right-6 rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-2xl shadow-slate-950/20 sm:left-auto sm:w-80">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-amber-300">
                    <Ruler className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Built around</p>
                    <p className="text-2xl font-bold text-slate-950">Accuracy</p>
                  </div>
                </div>
                <p className="mt-4 leading-7 text-slate-600">
                  Clear machine guidance for bending length, material type, and production workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24" aria-label="Company highlights">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            <StatCard value="3+" label="Product families" />
            <StatCard value="24h" label="Inquiry response" />
            <StatCard value="OEM" label="Flexible options" />
            <StatCard value="B2B" label="Workshop focused" />
          </div>
        </section>

        <section id="products" className="bg-stone-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Product range"
              title="Folding machines made simple to choose."
              description="Whether you call it a double folding machine, double folder, sheet metal folder, or metal folding machine, the goal is the same: clean bends, reliable handling, and easy operation."
              align="center"
            />
            <h2 id="products-title" className="sr-only">Double folding machine and sheet metal folding machine products</h2>
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.title} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section id="advantages" className="relative overflow-hidden bg-slate-950 py-16 text-white lg:py-24">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">Why ARTITECT</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Elegant machinery experience, from selection to production.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Our approach is straightforward: help buyers compare machine types, understand the fit, and move toward the right folding solution with confidence.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
                {advantages.map((item) => (
                  <FeatureCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="applications" className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-3 shadow-2xl shadow-slate-900/15">
              <img
                alt="Sheet metal folding application workshop"
                className="h-96 lg:h-full w-full rounded-3xl object-cover"
                data-strk-img-id="applications-sheet-metal-workshop-v8p2s6"
                data-strk-img="[applications-description] [applications-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">Applications</p>
              <h2 id="applications-title" className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                For sheet metal teams that need clarity before they buy.
              </h2>
              <p id="applications-description" className="mt-5 text-lg leading-8 text-slate-600">
                ARTITECT MACHINERY supports fabrication buyers looking for double folders, sheet metal folding machines, metal folder machines, and production-ready metal folding equipment.
              </p>
              <div className="mt-8 space-y-4">
                {specs.map((item) => (
                  <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-stone-50 p-4 text-slate-800">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-amber-500" />
                    <p className="leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-2xl shadow-slate-900/15 lg:grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-14">
                <Factory className="h-12 w-12 text-amber-300" />
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Designed for productive workshops and professional metal forming.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Present your material, desired folding length, and application. We will guide you toward a suitable machine category and configuration.
                </p>
              </div>
              <div className="grid gap-px bg-white/10 p-px sm:grid-cols-2">
                {['Sheet metal folder', 'Double folder', 'Metal folding machine', 'Metal folder machine'].map((item) => (
                  <div key={item} className="bg-slate-900 p-8 text-white">
                    <p className="text-xl font-bold text-white">{item}</p>
                    <p className="mt-3 leading-7 text-slate-300">Clear product positioning for buyers comparing industrial folding equipment.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Tell us what you need to fold."
                description="Send your sheet material, thickness, folding length, and target application. ARTITECT MACHINERY will help you narrow down the right folding machine choice."
              />
              <div className="mt-10 space-y-5 text-slate-700">
                <a href="mailto:sales@artitectmachinery.com" className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-stone-50 p-4 transition hover:border-amber-300">
                  <Mail className="h-6 w-6 text-amber-600" />
                  <span className="font-semibold text-slate-900">sales@artitectmachinery.com</span>
                </a>
                <a href="tel:+10000000000" className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-stone-50 p-4 transition hover:border-amber-300">
                  <Phone className="h-6 w-6 text-amber-600" />
                  <span className="font-semibold text-slate-900">Request phone consultation</span>
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-stone-50 p-4">
                  <MapPin className="h-6 w-6 text-amber-600" />
                  <span className="font-semibold text-slate-900">Serving industrial buyers worldwide</span>
                </div>
              </div>
            </div>

            <form className="rounded-3xl border border-slate-200 bg-stone-50 p-6 text-slate-950 shadow-xl shadow-slate-900/5 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-bold text-slate-900">
                  Name
                  <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-100" placeholder="Your name" type="text" />
                </label>
                <label className="block text-sm font-bold text-slate-900">
                  Email
                  <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-100" placeholder="you@company.com" type="email" />
                </label>
                <label className="block text-sm font-bold text-slate-900 sm:col-span-2">
                  Product interest
                  <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100" defaultValue="Double folding machine">
                    <option>Double folding machine</option>
                    <option>Double folder</option>
                    <option>Sheet metal folder</option>
                    <option>Metal folding machine</option>
                    <option>Metal folder machine</option>
                  </select>
                </label>
                <label className="block text-sm font-bold text-slate-900 sm:col-span-2">
                  Project details
                  <textarea className="mt-2 min-h-36 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-100" placeholder="Tell us your material, thickness, folding length, and application." />
                </label>
              </div>
              <button type="button" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-base font-bold text-white shadow-xl shadow-slate-900/15 transition hover:bg-slate-800 sm:w-auto">
                Send Inquiry
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="mt-4 text-sm leading-6 text-slate-500">
                This preview form is ready for future quote-request integration.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 px-6 py-8 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold tracking-widest text-white">ARTITECT MACHINERY</p>
          <p className="text-sm text-slate-300">Double folding machines, sheet metal folders, and metal folding machines.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
