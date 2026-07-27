import { useEffect, useRef } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileSearch,
  Globe2,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  SearchCheck,
  ShieldCheck,
  Ship,
  Truck,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import SourcingInquiryForm from './components/SourcingInquiryForm.jsx'
import './App.css'

const placeholder = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products-we-source' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

const services = [
  { icon: SearchCheck, title: 'Supplier search and shortlist', text: 'Compare suitable manufacturers and trading companies based on product fit, export experience, responsiveness, and basic compliance needs.' },
  { icon: Factory, title: 'Factory verification', text: 'Check business registration, production capability, site conditions, certificates, and whether the supplier matches your sourcing requirements.' },
  { icon: ClipboardCheck, title: 'Quality inspection', text: 'Pre-production, during-production, and pre-shipment inspections for workmanship, packaging, quantity, labeling, and specifications.' },
  { icon: PackageCheck, title: 'Production follow-up', text: 'Monitor samples, packaging, milestones, lead times, and corrective actions so issues are reported before shipment.' },
  { icon: Ship, title: 'Shipping coordination', text: 'Coordinate cartons, documents, freight forwarders, consolidation, and handover details for air, sea, courier, or multimodal shipments.' },
  { icon: FileSearch, title: 'Quotation review', text: 'Compare quotes, clarify specifications, review MOQ and payment terms, and reduce misunderstandings before order placement.' },
]

const processSteps = [
  { step: '01', title: 'Share requirements', text: 'Send product details, target quantity, destination, standards, timeline, and supplier concerns.' },
  { step: '02', title: 'Supplier screening', text: 'We identify suitable options, check company information, and compare capability against your RFQ.' },
  { step: '03', title: 'Quote and sample review', text: 'We clarify specifications, request quotes, compare key terms, and coordinate samples when needed.' },
  { step: '04', title: 'Factory and QC control', text: 'We verify factories, follow production, inspect quality, and document issues with photos and reports.' },
  { step: '05', title: 'Shipping handover', text: 'We coordinate packaging, labels, export documents, consolidation, and logistics handover.' },
]

const products = [
  { id: 'electronics-accessories', title: 'Electronics & Accessories', text: 'Chargers, cables, small devices, cases, smart accessories, and custom electronic parts.', imgId: 'product-electronics-accessories-b2b-8f2a9c' },
  { id: 'packaging-printing', title: 'Packaging & Printing', text: 'Retail packaging, cartons, labels, inserts, paper bags, and branded packaging materials.', imgId: 'product-packaging-printing-b2b-6d34fa' },
  { id: 'homeware-gifts', title: 'Homeware & Gifts', text: 'Household goods, kitchen items, seasonal products, promotional gifts, and lifestyle items.', imgId: 'product-homeware-gifts-b2b-a91c20' },
  { id: 'industrial-parts', title: 'Industrial Parts', text: 'Machined components, hardware, tools, metal parts, plastic parts, and OEM components.', imgId: 'product-industrial-parts-b2b-c77b11' },
  { id: 'apparel-textiles', title: 'Apparel & Textiles', text: 'Garments, bags, textiles, uniforms, private-label basics, and fabric-related accessories.', imgId: 'product-apparel-textiles-b2b-42df01' },
  { id: 'pet-outdoor', title: 'Pet & Outdoor Products', text: 'Pet supplies, sports goods, camping items, garden products, and consumer outdoor accessories.', imgId: 'product-pet-outdoor-b2b-31ae84' },
]

const problems = [
  'Unclear supplier identity or trading-company confusion',
  'Quotes that are hard to compare because specifications differ',
  'Slow communication across time zones and language barriers',
  'Sample quality that does not match mass production',
  'Delayed production updates and unclear shipment readiness',
  'Packaging, labeling, or documentation mistakes before export',
]

const trustPoints = [
  { title: 'China-based supplier communication', text: 'Local follow-up with factories helps reduce slow replies and unclear production status.' },
  { title: 'Practical verification workflow', text: 'We focus on business registration, capability, site evidence, and risk signals relevant to the order.' },
  { title: 'Inspection-focused reporting', text: 'QC checks are documented with photos, measurements, defect notes, and buyer-specific checkpoints.' },
  { title: 'Export coordination mindset', text: 'We help align packaging, cartons, labels, documents, and handover details before goods leave China.' },
]

const caseStudies = [
  { id: 'retail-packaging', title: 'Retail packaging supplier replacement', industry: 'Packaging', challenge: 'A European buyer needed a backup supplier after inconsistent lead times from an existing packaging vendor.', result: 'We shortlisted factories, checked print samples, compared carton specs, and coordinated a pre-shipment inspection before the first order.' },
  { id: 'industrial-components', title: 'OEM metal component verification', industry: 'Industrial parts', challenge: 'A distributor needed confidence that a quoted metal parts supplier had suitable machining capability.', result: 'We reviewed equipment evidence, clarified tolerances, checked sample dimensions, and helped the buyer decide whether to continue sampling.' },
  { id: 'consumer-electronics', title: 'Accessory production follow-up', industry: 'Electronics accessories', challenge: 'A brand owner needed clearer updates during production and shipment preparation for a repeat accessory order.', result: 'We tracked milestones, checked packaging details, photographed finished goods, and coordinated logistics documents with the forwarder.' },
]

const faqs = [
  { q: 'Do you work with small and medium buyers?', a: 'Yes. We support buyers who have clear product requirements and realistic order quantities. For early projects, we can start with supplier search, verification, and sample coordination.' },
  { q: 'Can you guarantee the lowest price?', a: 'No. Our role is to help buyers compare suppliers, reduce sourcing risk, clarify specifications, and make more informed decisions. The best supplier is not always the lowest-priced supplier.' },
  { q: 'Can you inspect products before shipment?', a: 'Yes. We can arrange quality checks based on the product type, order size, specifications, packaging requirements, and inspection timing.' },
  { q: 'What information should I send for a quote?', a: 'Please send product specifications, photos or drawings if available, target quantity, destination, standards, packaging needs, timeline, and any issues you have faced with previous suppliers.' },
]

const blogPosts = [
  { title: 'How to compare China supplier quotations fairly', excerpt: 'A practical checklist for reviewing MOQ, materials, packaging, payment terms, lead time, and specification differences.', tag: 'Supplier sourcing' },
  { title: 'What a factory verification can and cannot confirm', excerpt: 'Understand what local checks can reveal about business registration, production capacity, certificates, and order risk.', tag: 'Factory verification' },
  { title: 'Pre-shipment inspection points overseas buyers should define early', excerpt: 'Quality checks work best when specifications, packaging, labeling, quantity, and defect criteria are agreed before production.', tag: 'Quality control' },
]

function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={align === 'left' ? 'max-w-3xl' : 'mx-auto max-w-3xl text-center'}>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-brand-muted md:text-lg">{text}</p>}
    </div>
  )
}

function CTAButton({ children = 'Get a Free Sourcing Quote', to = '/contact' }) {
  return (
    <Link to={to} className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-navy md:text-base">
      {children}<ArrowRight className="h-4 w-4" />
    </Link>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/95 text-brand-ink backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="SSourcing China home">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-navy text-base font-bold text-white">SS</span>
          <span><span className="block text-lg font-bold tracking-tight text-brand-navy">SSourcing China</span><span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-brand-muted sm:block">China sourcing agent</span></span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-brand-pale text-brand-blue' : 'text-brand-muted hover:bg-brand-surface hover:text-brand-navy'}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block"><CTAButton /></div>
        <details className="relative lg:hidden">
          <summary className="flex list-none items-center rounded-xl border border-brand-border bg-white p-2 text-brand-navy shadow-sm"><Menu className="h-6 w-6" /></summary>
          <div className="absolute right-0 mt-3 w-72 rounded-2xl border border-brand-border bg-white p-3 shadow-soft">
            {navItems.map((item) => <Link key={item.path} to={item.path} className="block rounded-xl px-4 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-surface">{item.label}</Link>)}
            <Link to="/contact" className="mt-2 block rounded-xl bg-brand-blue px-4 py-3 text-center text-sm font-semibold text-white">Get a Free Sourcing Quote</Link>
          </div>
        </details>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 opacity-25" data-strk-bg-id="hero-factory-qc-shipping-background-1a2b3c" data-strk-bg="[hero-visual-context] [hero-subtitle] [hero-title]" data-strk-bg-ratio="16x9" data-strk-bg-width="1600" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-100">China-based sourcing support</p>
          <h1 id="hero-title" className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">China Sourcing Agent for Global Buyers</h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-blue-50 md:text-xl">SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.</p>
          <p id="hero-visual-context" className="sr-only" aria-hidden="true">Quality control inspector checking products in modern manufacturing factory production line warehouse export pallets</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><CTAButton /><Link to="/services" className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20 md:text-base">View sourcing services</Link></div>
          <div className="mt-10 grid gap-4 text-sm text-blue-50 sm:grid-cols-3">
            {['Supplier search', 'Factory verification', 'QC & shipping'].map((item) => <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3"><CheckCircle2 className="h-5 w-5 text-blue-100" />{item}</div>)}
          </div>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/10 p-3 shadow-soft backdrop-blur">
          <img alt="Quality control inspection in a China factory" className="h-full min-h-80 w-full rounded-2xl object-cover" data-strk-img-id="hero-modern-factory-qc-inspection-7b9c2d" data-strk-img="[hero-visual-context] [hero-subtitle] [hero-title]" data-strk-img-ratio="4x3" data-strk-img-width="900" src={placeholder} />
        </div>
      </div>
    </section>
  )
}

function ServicesGrid() {
  return <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => { const Icon = service.icon; return <article key={service.title} className="rounded-2xl border border-brand-border bg-white p-6 text-brand-ink shadow-sm transition hover:-translate-y-1 hover:shadow-soft"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-pale text-brand-blue"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-xl font-bold text-brand-navy">{service.title}</h3><p className="mt-3 text-sm leading-6 text-brand-muted">{service.text}</p></article> })}</div>
}

function ProcessTimeline() {
  return <div className="grid gap-5 lg:grid-cols-5">{processSteps.map((item) => <article key={item.step} className="rounded-2xl border border-brand-border bg-white p-6 text-brand-ink shadow-sm"><span className="text-sm font-bold text-brand-blue">{item.step}</span><h3 className="mt-4 text-lg font-bold text-brand-navy">{item.title}</h3><p className="mt-3 text-sm leading-6 text-brand-muted">{item.text}</p></article>)}</div>
}

function ProductGrid() {
  return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{products.map((product) => { const titleId = `product-${product.id}-title`; const textId = `product-${product.id}-text`; return <article key={product.id} className="overflow-hidden rounded-2xl border border-brand-border bg-white text-brand-ink shadow-sm"><img alt={product.title} className="h-56 w-full object-cover" data-strk-img-id={product.imgId} data-strk-img={`[${textId}] [${titleId}] [products-section-title]`} data-strk-img-ratio="4x3" data-strk-img-width="700" src={placeholder} /><div className="p-6"><h3 id={titleId} className="text-xl font-bold text-brand-navy">{product.title}</h3><p id={textId} className="mt-3 text-sm leading-6 text-brand-muted">{product.text}</p></div></article> })}</div>
}

function TrustBand() {
  return <section className="bg-white py-14 text-brand-ink"><div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-4 lg:px-8">{trustPoints.map((point) => <div key={point.title} className="rounded-2xl border border-brand-border bg-brand-surface p-6"><BadgeCheck className="h-7 w-7 text-brand-blue" /><h3 className="mt-4 text-base font-bold text-brand-navy">{point.title}</h3><p className="mt-2 text-sm leading-6 text-brand-muted">{point.text}</p></div>)}</div></section>
}

function CaseStudyCards() {
  return <div className="grid gap-6 lg:grid-cols-3">{caseStudies.map((study) => <article key={study.id} className="rounded-2xl border border-brand-border bg-white p-6 text-brand-ink shadow-sm"><span className="rounded-full bg-brand-pale px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">{study.industry}</span><h3 className="mt-5 text-xl font-bold text-brand-navy">{study.title}</h3><p className="mt-4 text-sm font-semibold text-brand-ink">Challenge</p><p className="mt-2 text-sm leading-6 text-brand-muted">{study.challenge}</p><p className="mt-4 text-sm font-semibold text-brand-ink">What we did</p><p className="mt-2 text-sm leading-6 text-brand-muted">{study.result}</p></article>)}</div>
}

function FAQList() {
  return <div className="mx-auto max-w-4xl divide-y divide-brand-border rounded-3xl border border-brand-border bg-white text-brand-ink shadow-sm">{faqs.map((faq) => <details key={faq.q} className="group p-6 open:bg-brand-surface/60"><summary className="cursor-pointer list-none text-lg font-bold text-brand-navy">{faq.q}</summary><p className="mt-3 text-sm leading-7 text-brand-muted">{faq.a}</p></details>)}</div>
}

function HomePage() {
  return <><Hero /><section className="bg-brand-surface py-16 text-brand-ink md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeader eyebrow="Services" title="Sourcing support from RFQ to shipment" text="Use SSourcing China when you need practical local support to reduce supplier, quality, production, and shipping uncertainty." /><div className="mt-12"><ServicesGrid /></div></div></section><section className="bg-white py-16 text-brand-ink md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeader eyebrow="How it works" title="A clear sourcing process for overseas buyers" text="We keep the workflow transparent so you know what is being checked, compared, and coordinated at each stage." /><div className="mt-12"><ProcessTimeline /></div></div></section><section className="bg-brand-surface py-16 text-brand-ink md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeader eyebrow="Products" title="Products we source" text="We help buyers evaluate Chinese suppliers across common B2B categories where verification, specification clarity, and QC are important." /><h2 id="products-section-title" className="sr-only">Products we source</h2><div className="mt-12"><ProductGrid /></div></div></section><section className="bg-white py-16 text-brand-ink md:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"><div><SectionHeader align="left" eyebrow="Problems we solve" title="Reduce common sourcing risks before they become expensive" text="Many overseas buyers do not need more supplier names. They need better screening, clearer specifications, stronger follow-up, and practical on-the-ground checks." /><div className="mt-8"><CTAButton /></div></div><div className="grid gap-4 sm:grid-cols-2">{problems.map((problem) => <div key={problem} className="flex gap-3 rounded-2xl border border-brand-border bg-brand-surface p-5 text-brand-ink"><ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-brand-blue" /><p className="text-sm font-medium leading-6 text-brand-ink">{problem}</p></div>)}</div></div></section><TrustBand /><section className="bg-brand-surface py-16 text-brand-ink md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeader eyebrow="Case studies" title="Practical sourcing support examples" text="Examples are representative of the type of work buyers request: supplier screening, verification, inspection, and shipment coordination." /><div className="mt-12"><CaseStudyCards /></div></div></section><section className="bg-white py-16 text-brand-ink md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeader eyebrow="FAQ" title="Common questions from global buyers" /><div className="mt-10"><FAQList /></div></div></section><section className="bg-brand-navy py-16 text-white md:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">Start your RFQ</p><h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Send your product requirements for review</h2><p className="mt-4 text-base leading-7 text-blue-50">Tell us what you want to source, what you already know, and where the product needs to ship. We will respond with practical next steps.</p></div><SourcingInquiryForm compact /></div></section></>
}

function PageHero({ eyebrow, title, text, icon: Icon }) {
  return <section className="page-hero-surface py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-4xl"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-100"><Icon className="h-7 w-7" /></div><p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">{eyebrow}</p><h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">{title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">{text}</p></div></div></section>
}

function ServicesPage() {
  return <main className="bg-brand-surface text-brand-ink"><PageHero eyebrow="Services" title="China sourcing services for overseas buyers" text="Choose focused support for supplier search, factory verification, quotation review, production follow-up, quality inspection, and shipping coordination." icon={Boxes} /><section className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><ServicesGrid /></div></section></main>
}

function HowItWorksPage() {
  return <main className="bg-white text-brand-ink"><PageHero eyebrow="How it works" title="A structured workflow from sourcing brief to shipment handover" text="The process is built to make supplier selection, verification, QC, and shipping decisions clearer for overseas buyers." icon={ClipboardCheck} /><section className="bg-brand-surface py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><ProcessTimeline /></div></section><section className="py-16 md:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><img alt="Factory production follow-up and inspection" className="h-full min-h-80 rounded-3xl object-cover shadow-soft" data-strk-img-id="process-factory-production-follow-up-9c8d7e" data-strk-img="[process-detail-title] [process-detail-text]" data-strk-img-ratio="4x3" data-strk-img-width="900" src={placeholder} /><div className="flex flex-col justify-center"><h2 id="process-detail-title" className="text-3xl font-bold text-brand-navy">Clear updates at each decision point</h2><p id="process-detail-text" className="mt-5 text-base leading-8 text-brand-muted">We focus on useful evidence: supplier responses, registration checks, photos, sample observations, inspection notes, production status, and shipping readiness.</p><div className="mt-8"><CTAButton /></div></div></div></section></main>
}

function ProductsPage() {
  return <main className="bg-brand-surface text-brand-ink"><PageHero eyebrow="Products we source" title="Supplier support across practical B2B product categories" text="We work best when specifications are clear or can be clarified through samples, drawings, reference photos, packaging requirements, and target order quantities." icon={PackageCheck} /><section className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 id="products-section-title" className="sr-only">Products we source</h2><ProductGrid /></div></section></main>
}

function CaseStudiesPage() {
  return <main className="bg-brand-surface text-brand-ink"><PageHero eyebrow="Case studies" title="Examples of practical sourcing work" text="These examples show how buyers use SSourcing China for screening, verification, QC, and order coordination without exaggerated claims." icon={FileSearch} /><section className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><CaseStudyCards /></div></section></main>
}

function BlogPage() {
  return <main className="bg-brand-surface text-brand-ink"><PageHero eyebrow="Blog" title="Practical sourcing notes for overseas buyers" text="Guides and checklists about supplier search, verification, inspection planning, and China shipping coordination." icon={Globe2} /><section className="py-16 md:py-24"><div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">{blogPosts.map((post) => <article key={post.title} className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm"><span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">{post.tag}</span><h2 className="mt-4 text-xl font-bold text-brand-navy">{post.title}</h2><p className="mt-3 text-sm leading-6 text-brand-muted">{post.excerpt}</p><Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-navy">Ask about this topic <ArrowRight className="h-4 w-4" /></Link></article>)}</div></section></main>
}

function ContactPage() {
  return <main className="bg-brand-surface text-brand-ink"><PageHero eyebrow="Contact" title="Request a free sourcing quote" text="Send product details and sourcing requirements. We will review your request and suggest a practical next step." icon={Mail} /><section className="py-16 md:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div className="rounded-3xl border border-brand-border bg-white p-8 shadow-sm"><h2 className="text-2xl font-bold text-brand-navy">Contact SSourcing China</h2><p className="mt-4 text-sm leading-7 text-brand-muted">For the fastest review, include product specifications, target quantity, destination, required standards, packaging needs, and timeline.</p><div className="mt-8 space-y-5"><div className="flex gap-3"><Mail className="h-5 w-5 text-brand-blue" /><span className="text-sm font-medium text-brand-ink">Inquiry form response after practical review</span></div><div className="flex gap-3"><MapPin className="h-5 w-5 text-brand-blue" /><span className="text-sm font-medium text-brand-ink">China-based sourcing coordination</span></div><div className="flex gap-3"><Phone className="h-5 w-5 text-brand-blue" /><span className="text-sm font-medium text-brand-ink">Calls can be arranged after initial RFQ review</span></div><div className="flex gap-3"><Truck className="h-5 w-5 text-brand-blue" /><span className="text-sm font-medium text-brand-ink">Factory, QC, production, and shipping support</span></div></div></div><SourcingInquiryForm /></div></section></main>
}

function Footer() {
  return <footer className="bg-brand-navy text-white"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8"><div><div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-base font-bold text-brand-navy">SS</span><span className="text-lg font-bold">SSourcing China</span></div><p className="mt-4 max-w-md text-sm leading-7 text-blue-50">China-based sourcing agent helping overseas buyers find suppliers, verify factories, inspect quality, follow production, and coordinate shipping.</p></div><div><h3 className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">Pages</h3><div className="mt-4 grid gap-2 text-sm text-blue-50">{navItems.slice(1, 5).map((item) => <Link key={item.path} to={item.path} className="hover:text-white">{item.label}</Link>)}</div></div><div><h3 className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">Inquiry</h3><p className="mt-4 text-sm leading-7 text-blue-50">Send your RFQ for supplier screening, factory checks, QC, and shipping coordination.</p><div className="mt-5"><CTAButton /></div></div></div><div className="border-t border-white/10 py-5 text-center text-xs text-blue-100">© 2026 SSourcing China. Practical sourcing support for global buyers.</div></footer>
}

function ScrollAndImages({ children }) {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [location.pathname])
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => { ImageHelper.loadImages(strkImgConfig, containerRef.current) })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname])

  return <div ref={containerRef}>{children}</div>
}

function AppContent() {
  return <ScrollAndImages><Header /><Routes><Route path="/" element={<HomePage />} /><Route path="/services" element={<ServicesPage />} /><Route path="/how-it-works" element={<HowItWorksPage />} /><Route path="/products-we-source" element={<ProductsPage />} /><Route path="/case-studies" element={<CaseStudiesPage />} /><Route path="/blog" element={<BlogPage />} /><Route path="/contact" element={<ContactPage />} /></Routes><Footer /></ScrollAndImages>
}

function App() {
  return <BrowserRouter><AppContent /></BrowserRouter>
}

export default App
