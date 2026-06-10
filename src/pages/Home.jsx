import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import {
  ArrowRight,
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Tag,
  Globe2,
  AlertTriangle,
  PackageX,
  Languages,
  Clock,
  CheckCircle2,
  Star,
  Users,
  MapPin,
} from 'lucide-react'
import InquiryForm from '../components/site/InquiryForm'
import CTASection from '../components/site/CTASection'

const services = [
  { icon: Search, title: 'Supplier sourcing', desc: 'We find shortlisted, manufacturer-direct suppliers that match your specs, MOQ and target price.' },
  { icon: ShieldCheck, title: 'Factory verification', desc: 'On-site visits, business license checks and capability audits before you commit to an order.' },
  { icon: ClipboardCheck, title: 'Quality inspection', desc: 'Pre-production, during-production and pre-shipment inspections by our QC engineers.' },
  { icon: Factory, title: 'Production follow-up', desc: 'We track lead time, materials and progress so your order ships on the date promised.' },
  { icon: Ship, title: 'Shipping & logistics', desc: 'Consolidation, sea/air freight booking, customs documentation and door-to-door delivery.' },
  { icon: Tag, title: 'Private label / OEM', desc: 'Custom packaging, logo printing and OEM development with reliable Chinese factories.' },
]

const processSteps = [
  { step: '01', title: 'Send your requirements', desc: 'Share product specs, target price, quantity and any reference links. We reply within 24 hours.' },
  { step: '02', title: 'Supplier shortlist', desc: 'We identify 3–5 verified manufacturers, compare quotes and present a clear sourcing plan.' },
  { step: '03', title: 'Samples & negotiation', desc: 'We manage sample rounds, negotiate pricing, MOQ and payment terms on your behalf.' },
  { step: '04', title: 'Production & QC', desc: 'On-site inspections at key milestones — materials, mid-production and pre-shipment.' },
  { step: '05', title: 'Shipping to your door', desc: 'Consolidation, freight booking, export documents and delivery to your warehouse.' },
]

const productCategories = [
  { id: 'home-kitchen', name: 'Home & Kitchen', desc: 'Cookware, small appliances, household goods' },
  { id: 'electronics', name: 'Consumer Electronics', desc: 'Accessories, IoT devices, audio products' },
  { id: 'apparel', name: 'Apparel & Textiles', desc: 'Garments, knitwear, fabrics, accessories' },
  { id: 'furniture', name: 'Furniture', desc: 'Indoor, outdoor, contract and flat-pack' },
  { id: 'industrial', name: 'Industrial & Hardware', desc: 'Tools, fasteners, components, fittings' },
  { id: 'beauty', name: 'Beauty & Personal Care', desc: 'Packaging, accessories, OEM products' },
  { id: 'sports', name: 'Sports & Outdoors', desc: 'Fitness, camping, cycling accessories' },
  { id: 'packaging', name: 'Packaging', desc: 'Boxes, pouches, labels, custom printing' },
]

const problems = [
  { icon: AlertTriangle, title: 'Hard to tell traders from real factories', desc: 'We verify business licenses, walk the production lines and confirm you are buying directly from a manufacturer.' },
  { icon: PackageX, title: 'Quality drops after the first order', desc: 'Our QC engineers run AQL inspections at each stage so defects are caught before goods leave the factory.' },
  { icon: Languages, title: 'Communication, time zones and language', desc: 'You get one English-speaking project manager handling all supplier communication on your behalf.' },
  { icon: Clock, title: 'Delays, missed shipping windows', desc: 'We follow up production weekly and flag risks early so your delivery date stays on track.' },
]

const trustPoints = [
  { value: '12+', label: 'Years sourcing in China' },
  { value: '600+', label: 'Verified factory partners' },
  { value: '40+', label: 'Countries of buyers served' },
  { value: 'AQL', label: 'Standard QC methodology' },
]

const cases = [
  {
    id: 'kitchenware-uk',
    industry: 'Home & Kitchen',
    country: 'United Kingdom',
    title: 'Cookware brand cuts defect rate from 6% to 0.8%',
    summary: 'We replaced an unreliable trader with a verified factory in Guangdong and added pre-shipment AQL inspection on every PO.',
    imgId: 'case-kitchenware-uk-7a3c19',
  },
  {
    id: 'electronics-de',
    industry: 'Consumer Electronics',
    country: 'Germany',
    title: 'Audio startup launches OEM product in 14 weeks',
    summary: 'End-to-end OEM development with tooling, certification support and consolidated air freight to Hamburg.',
    imgId: 'case-electronics-de-2f8b04',
  },
  {
    id: 'furniture-us',
    industry: 'Furniture',
    country: 'United States',
    title: 'Hospitality buyer consolidates 5 suppliers into one container',
    summary: 'Sourcing across two cities, weekly production updates and consolidated FCL shipping reduced landed cost by 11%.',
    imgId: 'case-furniture-us-91e7d2',
  },
]

const faqs = [
  {
    q: 'How does SSourcing China make money?',
    a: 'We charge a transparent service fee or a fixed percentage of order value, agreed before the project starts. We do not take hidden commissions from suppliers.',
  },
  {
    q: 'Can you help if I already have a Chinese supplier?',
    a: 'Yes. We can verify your existing supplier, run quality inspections, manage production follow-up and handle shipping, even if you found them yourself.',
  },
  {
    q: 'What is the minimum order size you support?',
    a: 'We work best with orders from around USD 3,000 and up. For very small orders we can still help with consolidation and inspection on a per-service basis.',
  },
  {
    q: 'Where are you located in China?',
    a: 'Our team is based in Shenzhen, with QC engineers covering Guangdong, Zhejiang, Jiangsu, Fujian and Shandong — the main manufacturing regions in China.',
  },
  {
    q: 'How long does a typical sourcing project take?',
    a: 'Supplier shortlist: 3–7 days. Sample round: 1–3 weeks. Mass production: usually 30–60 days depending on the product. We share a clear timeline before each project.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes. We sign NDAs with buyers and, when required, with factories before sharing product designs or proprietary specifications.',
  },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    let cleanup = null
    ;(async () => {
      try {
        const mod = await import('@strikingly/sdk')
        if (cancelled) return
        const cfg = (await import('../strk-img-config.json')).default || {}
        if (mod?.ImageHelper?.loadImages && containerRef.current) {
          cleanup = mod.ImageHelper.loadImages(cfg, containerRef.current)
        }
      } catch (e) {
        // ImageHelper is optional; preview still works without it.
      }
    })()
    return () => { cancelled = true; if (typeof cleanup === 'function') cleanup() }
  }, [])

  return (
    <div ref={containerRef}>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p id="hero-eyebrow" className="text-sm font-semibold uppercase tracking-wider text-red-600">
                Sourcing from China, simplified
              </p>
              <h1 id="hero-title" className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="hero-subtitle" className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                We help overseas buyers find reliable suppliers in China, verify factories, inspect quality and ship to your warehouse — with one English-speaking team handling the whole process.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  See how it works
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> 24-hour response</span>
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> On-site QC team</span>
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Manufacturer-direct pricing</span>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                <img
                  alt="Container shipping at a Chinese port"
                  className="aspect-[4/3] w-full object-cover"
                  data-strk-img-id="hero-shipping-port-9f12b3"
                  data-strk-img="[hero-subtitle] [hero-title] china port container shipping"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:flex w-56 items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Factory verified</p>
                  <p className="text-xs text-slate-500">Business license & on-site audit</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 hidden md:flex w-56 items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-900">
                  <ClipboardCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Pre-shipment QC</p>
                  <p className="text-xs text-slate-500">AQL 2.5 inspection report</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-16 grid grid-cols-2 gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6 md:grid-cols-4">
            {trustPoints.map((t) => (
              <div key={t.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-slate-900">{t.value}</p>
                <p className="mt-1 text-xs md:text-sm text-slate-600">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-red-600">Services</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Full-service sourcing, from supplier search to door delivery
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Pick a single service or hand the whole project to us. Either way, you keep full visibility and control.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-900 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-red-600">
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SOURCING PROCESS */}
      <section id="how-it-works" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-red-600">Sourcing Process</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                A clear five-step process, with you in control at every stage
              </h2>
              <p className="mt-4 text-base text-slate-600">
                You always know what is happening — supplier reports, quote sheets, sample updates and inspection reports are shared at every step.
              </p>
              <Link to="/how-it-works" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-red-600">
                Read the full process <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-8">
              <ol className="grid gap-4 sm:grid-cols-2">
                {processSteps.map((s) => (
                  <li key={s.step} className="rounded-xl border border-slate-200 bg-white p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-red-600">Step {s.step}</span>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS WE SOURCE */}
      <section id="products" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-red-600">Products We Source</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Categories we source every week
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                If your product is made in China, chances are we already know the cluster, the city and the right factories.
              </p>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-red-600">
              See all categories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((p) => (
              <article key={p.id} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt={p.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-strk-img-id={`product-${p.id}-thumb`}
                    data-strk-img={`[product-${p.id}-name] [product-${p.id}-desc] product manufacturing factory china`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-5">
                  <h3 id={`product-${p.id}-name`} className="text-base font-semibold text-slate-900">{p.name}</h3>
                  <p id={`product-${p.id}-desc`} className="mt-1 text-sm text-slate-600">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS WE SOLVE */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-red-400">Problems We Solve</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                The real reasons buyers struggle when sourcing from China
              </h2>
              <p className="mt-4 text-base text-slate-300">
                We&rsquo;ve been on the ground in China for over a decade. Here are the issues we fix for buyers most often.
              </p>
            </div>
            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              {problems.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-red-600/15 text-red-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST POINTS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-red-600">Why buyers trust us</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                On the ground in China, transparent with you
              </h2>
              <p className="mt-4 text-base text-slate-600">
                We don&rsquo;t over-promise. We give you supplier reports, factory photos, sample reviews and inspection results so you can make informed decisions.
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600" /> Manufacturer-direct, no hidden supplier kickbacks</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600" /> One English-speaking project manager per buyer</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600" /> AQL-based inspections with photos, video and reports</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600" /> Clear, written sourcing fees agreed upfront</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600" /> NDA signed on request before sharing your specs</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <img
                  alt="Factory production line in China"
                  className="aspect-[3/4] w-full object-cover"
                  data-strk-img-id="trust-factory-line-2c8d10"
                  data-strk-img="[trust-image-1-caption] china factory production line workers"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <img
                    alt="QC inspector checking product quality"
                    className="aspect-square w-full object-cover"
                    data-strk-img-id="trust-qc-inspector-77f0a4"
                    data-strk-img="[trust-image-2-caption] quality inspector clipboard factory inspection"
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <img
                    alt="Cargo containers being loaded onto a ship"
                    className="aspect-square w-full object-cover"
                    data-strk-img-id="trust-shipping-yard-19a3d8"
                    data-strk-img="[trust-image-3-caption] cargo container loading shipping port"
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>
              <span id="trust-image-1-caption" className="sr-only">Factory production line</span>
              <span id="trust-image-2-caption" className="sr-only">Quality inspector reviewing samples</span>
              <span id="trust-image-3-caption" className="sr-only">Container loading at shipping port</span>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-red-600">Case Studies</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Recent sourcing projects
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                A few examples of how we&rsquo;ve helped buyers fix supplier issues, launch new products and reduce landed cost.
              </p>
            </div>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-red-600">
              All case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cases.map((c) => (
              <article key={c.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="aspect-[3/2] overflow-hidden bg-slate-100">
                  <img
                    alt={c.title}
                    className="h-full w-full object-cover"
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[case-${c.id}-title] [case-${c.id}-summary] ${c.industry.toLowerCase()} china factory`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    <span>{c.industry}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {c.country}</span>
                  </div>
                  <h3 id={`case-${c.id}-title`} className="mt-3 text-lg font-semibold text-slate-900">
                    {c.title}
                  </h3>
                  <p id={`case-${c.id}-summary`} className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {c.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-red-600">FAQ</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Common questions from buyers
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Don&rsquo;t see your question? <Link to="/contact" className="font-semibold text-red-600 hover:text-red-700">Send us a message</Link>.
              </p>
            </div>
            <div className="lg:col-span-8">
              <dl className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
                {faqs.map((f, i) => (
                  <details key={f.q} className="group p-6" open={i === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <dt className="text-base font-semibold text-slate-900">{f.q}</dt>
                      <span className="ml-auto text-slate-400 transition-transform group-open:rotate-45">
                        <span className="block text-2xl leading-none">+</span>
                      </span>
                    </summary>
                    <dd className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</dd>
                  </details>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="inquiry" className="bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-red-600">Get a Quote</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Tell us what you want to source
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Share your product details below. We&rsquo;ll review and reply within 24 working hours with suggested suppliers, an indicative price range and next steps.
              </p>

              <ul className="mt-8 space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white border border-slate-200 text-slate-900"><Users className="h-4 w-4" /></span>
                  <div><p className="font-semibold text-slate-900">Dedicated project manager</p><p className="text-slate-600">English-speaking, based in Shenzhen.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white border border-slate-200 text-slate-900"><Globe2 className="h-4 w-4" /></span>
                  <div><p className="font-semibold text-slate-900">Buyers from 40+ countries</p><p className="text-slate-600">From single SKUs to full container loads.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white border border-slate-200 text-slate-900"><Star className="h-4 w-4" /></span>
                  <div><p className="font-semibold text-slate-900">No commitment to send a quote</p><p className="text-slate-600">First quote and supplier shortlist are free.</p></div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <InquiryForm sourcePage="home" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
