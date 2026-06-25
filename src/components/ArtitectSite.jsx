import { useEffect, useRef } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Factory,
  Gauge,
  Mail,
  Menu,
  Phone,
  Ruler,
  Settings2,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    description:
      'Heavy-duty double folding technology designed for accurate, repeatable bends in production environments.',
    specs: ['Dual folding capability', 'Stable sheet handling', 'Precision angle control'],
    icon: Settings2,
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    description:
      'A refined folding solution for workshops that need clean edges, dependable speed, and simple operation.',
    specs: ['Clean edge formation', 'Operator-friendly controls', 'Built for daily output'],
    icon: Ruler,
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    description:
      'Strong, serviceable machinery for forming metal panels, covers, ducts, and custom fabrication parts.',
    specs: ['Rigid frame construction', 'Consistent bend quality', 'Low-maintenance design'],
    icon: Factory,
  },
]

const advantages = [
  {
    icon: Gauge,
    title: 'Precision folding performance',
    text: 'Engineered to support consistent bending results across sheet metal production runs.',
  },
  {
    icon: ShieldCheck,
    title: 'Durable industrial build',
    text: 'Robust frames, dependable components, and practical details for demanding workshop use.',
  },
  {
    icon: Wrench,
    title: 'Simple maintenance',
    text: 'User-friendly access points and thoughtful layouts help keep teams productive.',
  },
  {
    icon: Sparkles,
    title: 'Elegant operator experience',
    text: 'Clear controls, clean surfaces, and an efficient workflow make advanced folding easier to manage.',
  },
]

const processSteps = [
  'Discuss sheet size, material, and production goals',
  'Recommend the right double folder or metal folding machine',
  'Prepare configuration, delivery, and onboarding support',
]

const productKeywords =
  'double folding machine, Double folder, sheet metal folder, sheet metal folding machine, metal folder, metal folder machine, metal folding machine'

const placeholderSvg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-slate-950/80 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-white" aria-label="ARTITECT MACHINERY home">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/50 bg-white/10 text-sm font-bold text-amber-200 shadow-lg shadow-black/20">
            AM
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-[0.24em]">ARTITECT</span>
            <span className="block text-xs font-medium tracking-[0.32em] text-slate-300">MACHINERY</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex" aria-label="Main navigation">
          <a className="transition hover:text-amber-200" href="#products">Products</a>
          <a className="transition hover:text-amber-200" href="#advantages">Advantages</a>
          <a className="transition hover:text-amber-200" href="#contact">Contact</a>
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-amber-300 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:bg-amber-200 md:inline-flex"
        >
          Request a quote
        </a>

        <a
          href="#contact"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white md:hidden"
          aria-label="Open contact section"
        >
          <Menu className="h-5 w-5" />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 opacity-40"
        data-strk-bg-id="artitect-hero-bg-a91f3d"
        data-strk-bg="[hero-subtitle] [hero-title] [hero-keywords]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-slate-900/70" aria-hidden="true" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-300/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-32">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-200">
            Precision sheet metal folding solutions
          </p>
          <h1 id="hero-title" className="text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
            Elegant machinery for powerful metal folding.
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            ARTITECT MACHINERY supplies double folding machines, sheet metal folders, and metal folder machines built for accurate, user-friendly production.
          </p>
          <p id="hero-keywords" className="sr-only">
            {productKeywords}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-7 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-amber-950/20 transition hover:bg-amber-200"
            >
              Explore products
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:border-amber-200 hover:text-amber-100"
            >
              Talk to our team
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/40 backdrop-blur-md">
            <img
              className="h-[28rem] w-full rounded-[1.5rem] object-cover"
              alt="ARTITECT MACHINERY sheet metal folding machine in a clean industrial workshop"
              data-strk-img-id="artitect-hero-machine-f4c8b2"
              data-strk-img="[hero-subtitle] [hero-title] [hero-keywords]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src={placeholderSvg}
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-white/15 bg-slate-950/85 p-5 text-white shadow-2xl backdrop-blur-xl md:left-auto md:w-80">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Built for fabricators</p>
            <p className="mt-3 text-2xl font-semibold text-white">Clean bends. Smooth workflow. Reliable output.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  const Icon = product.icon
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-slate-950 shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/60">
      <div className="relative h-64 overflow-hidden bg-slate-900">
        <img
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          alt={`${product.name} by ARTITECT MACHINERY`}
          data-strk-img-id={`artitect-${product.id}-c75e9a`}
          data-strk-img={`[${descId}] [${titleId}] [products-subtitle] [products-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          src={placeholderSvg}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 text-slate-950 shadow-lg">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="p-7">
        <h3 id={titleId} className="text-2xl font-semibold tracking-tight text-slate-950">
          {product.name}
        </h3>
        <p id={descId} className="mt-4 leading-7 text-slate-600">
          {product.description}
        </p>
        <ul className="mt-6 space-y-3">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-start gap-3 text-sm font-medium text-slate-700">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-amber-500" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function Products() {
  return (
    <section id="products" className="bg-stone-50 px-6 py-20 text-slate-950 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">Product range</p>
          <h2 id="products-title" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Machines made for exact folding work
          </h2>
          <p id="products-subtitle" className="mt-5 text-lg leading-8 text-slate-600">
            From double folders to sheet metal folding machines, ARTITECT MACHINERY focuses on dependable performance, clean operation, and long-term value.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Advantages() {
  return (
    <section id="advantages" className="bg-white px-6 py-20 text-slate-950 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">Why choose us</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Industrial strength with a refined, easy workflow.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            ARTITECT MACHINERY brings together robust metal forming engineering and a clean user experience, helping teams work confidently from setup to final fold.
          </p>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl shadow-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Product focus</p>
            <p className="mt-3 text-lg leading-8 text-slate-100">
              Double folder, sheet metal folder, metal folder machine, and metal folding machine solutions for fabrication teams that value accuracy and reliability.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {advantages.map((advantage) => {
            const Icon = advantage.icon
            return (
              <article key={advantage.title} className="rounded-[1.75rem] border border-slate-200 bg-stone-50 p-6 text-slate-950 shadow-lg shadow-slate-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 text-slate-950">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{advantage.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{advantage.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200">Easy buying process</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Clear guidance from selection to setup.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step} className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 text-white backdrop-blur">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-300 text-sm font-bold text-slate-950">
                  {index + 1}
                </span>
                <p className="mt-5 text-lg font-semibold leading-7 text-white">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-stone-50 px-6 py-20 text-slate-950 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-slate-950 text-white shadow-2xl shadow-slate-300/70">
        <div className="grid lg:grid-cols-[1fr_0.9fr]">
          <div className="p-8 md:p-12 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200">Request information</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Find the right folding machine for your workshop.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Tell ARTITECT MACHINERY what you need to fold, and we will help match your production goals with the right double folding machine, sheet metal folder, or metal folder machine.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <a href="tel:+0000000000" className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 text-white transition hover:border-amber-200">
                <Phone className="h-5 w-5 text-amber-200" />
                <span>
                  <span className="block text-sm text-slate-300">Phone</span>
                  <span className="block font-semibold text-white">Contact sales</span>
                </span>
              </a>
              <a href="mailto:sales@artitectmachinery.com" className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 text-white transition hover:border-amber-200">
                <Mail className="h-5 w-5 text-amber-200" />
                <span>
                  <span className="block text-sm text-slate-300">Email</span>
                  <span className="block font-semibold text-white">sales@artitectmachinery.com</span>
                </span>
              </a>
            </div>
          </div>

          <div className="relative min-h-[24rem] bg-slate-900">
            <img
              className="h-full min-h-[24rem] w-full object-cover opacity-90"
              alt="Precision sheet metal folding production floor"
              data-strk-img-id="artitect-contact-workshop-e182d4"
              data-strk-img="[products-subtitle] [products-title] [hero-keywords]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src={placeholderSvg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <p className="font-semibold tracking-[0.2em] text-white">ARTITECT MACHINERY</p>
        <p>Double folding machine · Sheet metal folder · Metal folding machine</p>
      </div>
    </footer>
  )
}

export default function ArtitectSite() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-stone-50 text-slate-950">
      <Header />
      <Hero />
      <Products />
      <Advantages />
      <Process />
      <Contact />
      <Footer />
    </div>
  )
}
