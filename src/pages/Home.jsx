import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, FileText,
  ArrowRight, Check, Star, Globe2, Users, Package, CalendarClock,
  BadgeCheck, MessageSquare, ChevronDown, Truck, Boxes, ShoppingCart,
} from 'lucide-react'
import InquiryForm from '../components/InquiryForm.jsx'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We screen factories and trading companies, compare quotations, and shortlist suppliers that match your specs, MOQ, and certifications.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site visits with photos, videos and a structured factory audit covering capacity, equipment, workforce and licenses.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production (DUPRO), and pre-shipment inspections following AQL 2.5 standards, with full reports.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We track production milestones, push for on-time delivery, and report progress weekly so you stay in control.',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'Door-to-door coordination by sea, air, rail or express. Consolidation, customs documents, and Incoterms handled end-to-end.',
  },
  {
    icon: FileText,
    title: 'Contracts & Documents',
    desc: 'Bilingual contracts, payment milestones, commercial invoices, packing lists, CO/Form A and other export documents.',
  },
]

const processSteps = [
  {
    n: '01',
    title: 'Tell us your sourcing brief',
    desc: 'Send product specs, target price, quantity, and any certifications. We confirm scope and timeline within 24 working hours.',
  },
  {
    n: '02',
    title: 'We shortlist verified suppliers',
    desc: 'We compare 3-5 vetted factories, request quotations, and benchmark price, MOQ, lead time, and capacity.',
  },
  {
    n: '03',
    title: 'Sample & negotiate',
    desc: 'We collect samples, consolidate them for you, and negotiate price, payment terms, and packaging in your name.',
  },
  {
    n: '04',
    title: 'Production & on-site QC',
    desc: 'We follow production weekly and run inspections (DUPRO and pre-shipment) at AQL 2.5 with photo and video reports.',
  },
  {
    n: '05',
    title: 'Shipping & delivery',
    desc: 'We arrange consolidation, export clearance, and shipping by sea, air or rail with full document handover.',
  },
]

const products = [
  { id: 'p1', name: 'Consumer Electronics', desc: 'Wearables, accessories, small appliances, IoT devices.' },
  { id: 'p2', name: 'Home & Kitchen', desc: 'Cookware, storage, decor, small home appliances.' },
  { id: 'p3', name: 'Apparel & Textiles', desc: 'Knit and woven garments, accessories, home textiles.' },
  { id: 'p4', name: 'Furniture', desc: 'Office, home, outdoor furniture and OEM design.' },
  { id: 'p5', name: 'Industrial & Hardware', desc: 'Tools, fasteners, fittings, industrial components.' },
  { id: 'p6', name: 'Outdoor & Sports', desc: 'Camping, fitness, cycling, water sports gear.' },
  { id: 'p7', name: 'Beauty & Personal Care', desc: 'Tools, packaging, accessories and ODM products.' },
  { id: 'p8', name: 'Toys & Baby', desc: 'CE, EN71, ASTM-compliant toys and baby products.' },
]

const problems = [
  {
    title: 'Unverified suppliers',
    body: 'You receive offers from "manufacturers" that are actually traders. We physically verify factories before you commit.',
  },
  {
    title: 'Quality drift in production',
    body: 'Bulk quality often differs from samples. We inspect during production and before shipment so issues are caught early.',
  },
  {
    title: 'Hidden cost & MOQ surprises',
    body: 'Hidden tooling fees, packaging upcharges, or sudden MOQ changes. We negotiate clear, line-item quotations in your name.',
  },
  {
    title: 'Communication & time-zone gaps',
    body: 'Delayed replies and language barriers slow you down. We act as your local team in China, in English, French, or Spanish.',
  },
  {
    title: 'Shipping & customs friction',
    body: 'Wrong HS codes, missing docs, or poor consolidation cost time and money. We coordinate the full export flow.',
  },
  {
    title: 'No on-the-ground oversight',
    body: 'Without local eyes, mistakes only surface on arrival. We visit factories on your behalf and report what we see.',
  },
]

const trustPoints = [
  { icon: CalendarClock, label: '12+ years', sub: 'sourcing experience' },
  { icon: Package, label: '1,200+', sub: 'orders shipped' },
  { icon: Globe2, label: '38 countries', sub: 'served worldwide' },
  { icon: Users, label: '300+', sub: 'B2B buyers served' },
]

const cases = [
  {
    id: 'c1',
    industry: 'Home & Kitchen',
    title: 'Stainless cookware program for a European retailer',
    metric: '18% lower landed cost vs. previous supplier',
    desc: 'Replaced an unreliable trader with two audited factories. Implemented DUPRO and pre-shipment inspections.',
  },
  {
    id: 'c2',
    industry: 'Consumer Electronics',
    title: 'Smart accessories ODM for a US brand',
    metric: 'On-time delivery rate from 71% to 96%',
    desc: 'Took over production follow-up, weekly milestone reporting, and consolidated air shipments for product launches.',
  },
  {
    id: 'c3',
    industry: 'Outdoor & Sports',
    title: 'Camping gear sourcing for an Australian wholesaler',
    metric: 'Caught 1,400 defective units before shipment',
    desc: 'Pre-shipment AQL 2.5 inspection identified packaging and seam defects. Factory reworked at their own cost.',
  },
]

const faqs = [
  {
    q: 'How do you charge for your sourcing services?',
    a: 'For most projects we charge a flat sourcing fee plus a small commission on the order value, fully disclosed up front. Inspections and factory audits are quoted as fixed fees per visit. We never take hidden kickbacks from suppliers.',
  },
  {
    q: 'Are you a sourcing agent or a trading company?',
    a: 'We are a sourcing agent. We work for the buyer, not the factory. Quotations are issued in your name, and you can communicate directly with suppliers when you wish.',
  },
  {
    q: 'What is the minimum order size you support?',
    a: 'We typically work with orders from USD 5,000 and up. Smaller pilot orders can be considered on a case-by-case basis, especially when the buyer plans recurring purchases.',
  },
  {
    q: 'Which regions in China do you cover?',
    a: 'We are based in Yiwu, with regular visits to Guangdong, Zhejiang, Jiangsu, Fujian, and Shandong. We can dispatch inspectors nationwide within 48 hours for most cities.',
  },
  {
    q: 'Can you handle shipping and customs to my country?',
    a: 'Yes. We coordinate sea, air, rail and express shipments with audited freight forwarders, including consolidation, export clearance, and standard documents (CI, PL, CO, etc.). Final customs clearance is usually handled by your local broker.',
  },
  {
    q: 'How long does a typical sourcing project take?',
    a: 'Supplier shortlisting takes 5-10 working days. Sampling typically adds 1-3 weeks depending on the product. Production lead time is set by the factory, but we monitor it weekly.',
  },
]

function FaqItem({ q, a, defaultOpen }) {
  const detailsRef = useRef(null)
  return (
    <details
      ref={detailsRef}
      open={defaultOpen}
      className="group bg-white border border-slate-200 rounded-lg p-5 md:p-6 open:shadow-sm transition"
    >
      <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
        <span className="font-semibold text-slate-900 text-base md:text-lg">{q}</span>
        <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0 mt-1 transition group-open:rotate-180" />
      </summary>
      <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">{a}</p>
    </details>
  )
}

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    ;(async () => {
      try {
        const sdk = await import('@strikingly/sdk')
        const cfg = await import('../strk-img-config.json')
        if (sdk?.ImageHelper?.loadImages && containerRef.current) {
          cleanup = sdk.ImageHelper.loadImages(cfg.default || cfg, containerRef.current)
        }
      } catch (e) {
        // ignore - images will simply use placeholders
      }
    })()
    return () => { if (typeof cleanup === 'function') cleanup() }
  }, [])

  return (
    <div ref={containerRef}>
      {/* HERO */}
      <section className="relative bg-brand-navy text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="home-hero-bg-9f3c7a"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-accent bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-6">
                <BadgeCheck className="w-3.5 h-3.5" /> Trusted China sourcing partner
              </div>
              <h1
                id="home-hero-title"
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              >
                China Sourcing Agent for Global Buyers
              </h1>
              <p
                id="home-hero-subtitle"
                className="mt-6 text-lg text-slate-200 max-w-xl leading-relaxed"
              >
                We help overseas B2B buyers find reliable suppliers, verify
                factories, inspect quality, follow production, and coordinate
                shipping from China.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentDark text-white px-7 py-3.5 rounded-md font-semibold shadow-sm transition"
                >
                  Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-7 py-3.5 rounded-md font-semibold transition"
                >
                  See how it works
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-accent" /> No hidden fees
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-accent" /> AQL 2.5 inspection
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-accent" /> EN / FR / ES support
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-accent/20 rounded-2xl blur-2xl" />
                <img
                  alt="Factory production line in China"
                  className="relative rounded-xl shadow-2xl w-full object-cover aspect-[4/3]"
                  data-strk-img-id="home-hero-image-2b9ef1"
                  data-strk-img="[home-hero-subtitle] [home-hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute -bottom-5 -left-5 bg-white text-slate-900 rounded-lg shadow-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 text-green-700 rounded-md flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Verified Factories</div>
                    <div className="text-xs text-slate-500">On-site audits in 48h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((t) => {
              const Icon = t.icon
              return (
                <div key={t.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-md flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{t.label}</div>
                    <div className="text-sm text-slate-500">{t.sub}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div id="services-eyebrow" className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3">
              Our Services
            </div>
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              End-to-end sourcing, from factory floor to your warehouse
            </h2>
            <p id="services-subtitle" className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
              Six core services delivered by a local team that knows Chinese
              manufacturing, packaging, and export logistics.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="bg-white border border-slate-200 rounded-lg p-6 md:p-7 hover:border-brand-blue hover:shadow-md transition group"
                >
                  <div className="w-11 h-11 bg-blue-50 text-brand-blue rounded-md flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy"
            >
              See all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SOURCING PROCESS */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div id="process-eyebrow" className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3">
                Our Process
              </div>
              <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                A simple, transparent sourcing process
              </h2>
              <p id="process-subtitle" className="mt-4 text-slate-600 leading-relaxed">
                Five clear steps with regular updates. You always know what we
                are doing, what comes next, and what the costs are.
              </p>
              <Link
                to="/how-it-works"
                className="mt-6 inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy"
              >
                Read full workflow <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-8">
              <ol className="relative border-l-2 border-slate-200 ml-3 space-y-8">
                {processSteps.map((step) => (
                  <li key={step.n} className="pl-8 relative">
                    <div className="absolute -left-[19px] top-0 w-9 h-9 rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-bold">
                      {step.n}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-1.5 text-slate-600 text-sm md:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS WE SOURCE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div id="products-eyebrow" className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3">
                Products We Source
              </div>
              <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Categories we know best
              </h2>
              <p id="products-subtitle" className="mt-4 text-slate-600 leading-relaxed">
                We focus on B2B import categories with a proven supplier network
                and recurring buyers in the EU, North America, and Australia.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy"
            >
              View all categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <article
                key={p.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md hover:border-brand-blue transition group"
              >
                <img
                  alt={p.name}
                  className="w-full aspect-[4/3] object-cover"
                  data-strk-img-id={`product-cat-${p.id}-7c2`}
                  data-strk-img={`[product-${p.id}-desc] [product-${p.id}-title] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-4">
                  <h3 id={`product-${p.id}-title`} className="font-semibold text-slate-900 text-sm md:text-base">
                    {p.name}
                  </h3>
                  <p id={`product-${p.id}-desc`} className="mt-1 text-xs text-slate-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS WE SOLVE */}
      <section className="py-16 md:py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-accent mb-3">
              Problems We Solve
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Real sourcing risks, handled by people on the ground
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Importing from China has well-known risks. Our job is to remove
              them so you can focus on selling.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((p) => (
              <div
                key={p.title}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition"
              >
                <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div id="cases-eyebrow" className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3">
                Case Studies
              </div>
              <h2 id="cases-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Outcomes for buyers like you
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy"
            >
              All case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <article
                key={c.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition flex flex-col"
              >
                <img
                  alt={c.title}
                  className="w-full aspect-[3/2] object-cover"
                  data-strk-img-id={`case-${c.id}-img-3a`}
                  data-strk-img={`[case-${c.id}-desc] [case-${c.id}-title] [cases-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-2">
                    {c.industry}
                  </div>
                  <h3 id={`case-${c.id}-title`} className="text-lg font-semibold text-slate-900 mb-2">
                    {c.title}
                  </h3>
                  <div className="text-sm font-semibold text-brand-accent mb-3">
                    {c.metric}
                  </div>
                  <p id={`case-${c.id}-desc`} className="text-sm text-slate-600 leading-relaxed flex-1">
                    {c.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Honest answers to the questions buyers ask before working with a
              sourcing agent.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3">
                Free Sourcing Quote
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Tell us what you want to source
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Share your product brief and we will respond within 24 working
                hours with a clear scope, indicative price range, and next steps.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {[
                  'A dedicated sourcing specialist on your project',
                  'Free initial supplier shortlist for qualified inquiries',
                  'Transparent fees, no kickbacks from suppliers',
                  'NDA available on request',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  Prefer email? Write directly to{' '}
                  <a
                    href="mailto:hello@ssourcingchina.com"
                    className="font-semibold text-brand-blue hover:underline"
                  >
                    hello@ssourcingchina.com
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
