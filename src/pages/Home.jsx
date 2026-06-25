import { ArrowRight, CheckCircle2, Globe2 } from 'lucide-react'
import InquiryForm from '../components/InquiryForm.jsx'
import SectionShell from '../components/SectionShell.jsx'
import { CaseStudyCards, FAQList, ProblemsSolved, ProcessTimeline, ProductsGrid, ServicesGrid, TrustPoints } from '../components/DataSections.jsx'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.32),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_52%,#172554_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
              <Globe2 className="h-4 w-4" /> China-based sourcing agent for overseas buyers
            </p>
            <h1 id="home-hero-title" className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="home-hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              SSourcing China helps international buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with clear China-side support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/contact#inquiry" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-sm font-black text-slate-950 shadow-lg shadow-amber-400/20 hover:bg-amber-300">
                Get a Free Sourcing Quote <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/services" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-sm font-bold text-white hover:bg-white/10">
                View sourcing services
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {['Supplier search', 'Factory checks', 'QC and shipping'].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-bold text-white">
                  <CheckCircle2 className="h-5 w-5 text-cyan-200" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <div className="grid h-full min-h-[420px] gap-3 rounded-2xl bg-white/10 p-3">
              <div className="rounded-xl bg-slate-900 p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">Sourcing desk</p>
                <h2 className="mt-3 text-2xl font-black text-white">Supplier, QC, and shipping coordination in one workflow</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/15 bg-white p-5 text-slate-950">
                  <p className="text-sm font-black text-blue-700">01</p>
                  <p className="mt-2 font-black text-slate-950">Supplier shortlist</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">Filter potential factories by fit, capability, and communication.</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white p-5 text-slate-950">
                  <p className="text-sm font-black text-blue-700">02</p>
                  <p className="mt-2 font-black text-slate-950">Factory check</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">Review credentials and production setup before key decisions.</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white p-5 text-slate-950">
                  <p className="text-sm font-black text-blue-700">03</p>
                  <p className="mt-2 font-black text-slate-950">QC inspection</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">Coordinate checks before goods leave the factory.</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white p-5 text-slate-950">
                  <p className="text-sm font-black text-blue-700">04</p>
                  <p className="mt-2 font-black text-slate-950">Shipment follow-up</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">Align carton data, readiness, and export coordination.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell eyebrow="Services" title="Practical sourcing support across the buying process" intro="Choose focused support for a single stage or ask us to manage the complete sourcing workflow from supplier search to shipment readiness.">
        <ServicesGrid />
      </SectionShell>

      <SectionShell className="bg-slate-50" eyebrow="Process" title="A clear sourcing process built for overseas buyers" intro="We keep communication structured, reduce uncertainty, and help you make supplier decisions based on practical information.">
        <ProcessTimeline />
      </SectionShell>

      <SectionShell eyebrow="Products we source" title="Common product categories for B2B buyers" intro="We support a wide range of manufactured goods and can review custom product requirements before starting a supplier search.">
        <ProductsGrid />
      </SectionShell>

      <SectionShell className="bg-slate-50" eyebrow="Problems we solve" title="Reduce common China sourcing risks before they become costly">
        <ProblemsSolved />
      </SectionShell>

      <SectionShell eyebrow="Trust points" title="A professional China-side partner for supplier communication and follow-up">
        <TrustPoints />
      </SectionShell>

      <SectionShell className="bg-slate-50" eyebrow="Case studies" title="Examples of practical sourcing support">
        <CaseStudyCards />
      </SectionShell>

      <SectionShell eyebrow="FAQ" title="Questions global buyers often ask">
        <FAQList />
      </SectionShell>

      <section className="bg-blue-950 py-16 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">Start a project</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">Ready to review your sourcing requirements?</h2>
            <p className="mt-5 text-lg leading-8 text-blue-100">Send your product details and we will help identify the next practical sourcing steps.</p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  )
}
