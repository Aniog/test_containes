import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import InquiryForm from '@/components/home/InquiryForm'
import SectionHeading from '@/components/home/SectionHeading'
import ServiceGrid from '@/components/home/ServiceGrid'
import { caseStudies, faqs, problems, processSteps, productCategories, stats, trustPoints } from '@/lib/pageData'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,78,216,0.45),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.16),transparent_30%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 backdrop-blur">
            China-based sourcing support for international buyers
          </p>
          <h1 id="home-hero-title" className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="home-hero-subtitle" className="mt-6 text-lg leading-8 text-slate-200 sm:text-xl">
            Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical on-the-ground support in China.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact#inquiry" className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-600">
              Get a Free Sourcing Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/20">
              Explore services
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
          <div className="grid gap-4">
            {stats.map((stat) => (
              <div key={stat.value} className="rounded-2xl border border-white/15 bg-white p-5 text-slate-950 shadow-sm">
                <p className="text-2xl font-bold text-slate-950">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="bg-slate-50 py-16 text-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sourcing process"
          title="A structured path from brief to shipment"
          text="We keep each step visible so overseas buyers can compare options, reduce ambiguity, and make informed sourcing decisions."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {processSteps.map((item) => (
            <article key={item.step} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
              <p className="text-sm font-bold text-blue-700">{item.step}</p>
              <h3 className="mt-3 text-lg font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  return (
    <section className="bg-white py-16 text-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Products we source"
            title="Supplier research for practical product categories"
            text="We work across general manufacturing categories where clear specifications, realistic supplier screening, and quality follow-up can make a measurable difference."
          />
          <Link to="/products" className="mt-8 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">
            View product categories
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {productCategories.map((category) => (
            <div key={category} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-950">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
              <p className="text-sm font-semibold leading-6 text-slate-800">{category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProblemsSection() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Problems we solve</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Reduce sourcing uncertainty before it becomes a shipment problem</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">China sourcing can be efficient, but only when supplier capability, specifications, timing, quality checks, and logistics are handled with discipline.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {problems.map((problem) => (
            <div key={problem} className="rounded-2xl border border-white/10 bg-white/10 p-5 text-white">
              <p className="text-sm font-semibold leading-6 text-slate-100">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  return (
    <section className="bg-slate-50 py-16 text-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trust points"
          title="Clear evidence, practical reports, and steady coordination"
          text="Our work is designed for buyers who need realistic information before paying deposits, approving shipments, or expanding a supplier relationship."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => {
            const Icon = point.icon
            return (
              <article key={point.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{point.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{point.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function VisualBand() {
  return (
    <section className="bg-white py-16 text-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          { id: 'factory', title: 'Factory floor review', desc: 'Workshop capability, equipment, and production readiness.' },
          { id: 'qc', title: 'Quality control inspection', desc: 'Product checks, packaging details, and photo-based reports.' },
          { id: 'shipping', title: 'Shipping coordination', desc: 'Cartons, documents, loading timing, and export handover.' },
        ].map((item) => (
          <article key={item.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              alt={item.title}
              className="h-56 w-full object-cover"
              data-strk-img-id={`visual-${item.id}-4b7e29`}
              data-strk-img={`[visual-${item.id}-desc] [visual-${item.id}-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src={placeholder}
            />
            <div className="p-6 text-slate-950">
              <h3 id={`visual-${item.id}-title`} className="text-lg font-bold text-slate-950">{item.title}</h3>
              <p id={`visual-${item.id}-desc`} className="mt-2 text-sm leading-6 text-slate-700">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function CaseStudyPreview() {
  return (
    <section className="bg-white py-16 text-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Case studies" title="Examples of practical sourcing support" text="These examples show how clear screening, inspection, and coordination can help buyers make better decisions." />
          <Link to="/case-studies" className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-slate-100">View all cases</Link>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-950">
              <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
              <p className="mt-4 text-sm font-bold text-slate-800">Challenge</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.challenge}</p>
              <p className="mt-4 text-sm font-bold text-slate-800">Approach</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.approach}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-slate-50 py-16 text-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Common questions from overseas buyers" align="center" />
        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
              <summary className="cursor-pointer text-base font-bold text-slate-950">{faq.question}</summary>
              <p className="mt-4 text-sm leading-6 text-slate-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactCTA() {
  return (
    <section className="bg-slate-50 py-16 text-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Inquiry form"
            title="Get a Free Sourcing Quote"
            text="Tell us what you want to source, where the goods will ship, and what kind of support you need. A clear brief helps us respond with a more useful next step."
          />
          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-blue-950">
            <p className="text-sm font-bold text-blue-950">Useful details to include</p>
            <p className="mt-2 text-sm leading-6 text-blue-900">Product photos, drawings, expected quantity, destination country, target timeline, quality requirements, and whether you already have a supplier.</p>
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceGrid />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <VisualBand />
      <CaseStudyPreview />
      <FAQSection />
      <ContactCTA />
    </main>
  )
}
