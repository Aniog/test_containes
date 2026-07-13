import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Factory, ShieldCheck, Ship, ClipboardCheck, Globe2, ArrowRight } from 'lucide-react'

const services = [
  { title: 'Supplier Sourcing', desc: 'We identify and vet manufacturers that match your product specs, volume, and price targets.', icon: Factory },
  { title: 'Factory Verification', desc: 'On-site audits of business licenses, production lines, and capacity before you commit.', icon: ShieldCheck },
  { title: 'Quality Inspection', desc: 'Pre-production, in-line, and final inspections with clear reporting and pass/fail criteria.', icon: ClipboardCheck },
  { title: 'Shipping Coordination', desc: 'Freight forwarding, customs support, and door-to-door logistics from China to your warehouse.', icon: Ship },
]

const problems = [
  'Unreliable suppliers with inconsistent quality',
  'Hidden costs and unclear pricing structures',
  'Communication barriers and delayed responses',
  'Difficulty verifying factory legitimacy',
  'Quality issues discovered only after shipment',
  'Complex logistics and customs paperwork',
]

const trustPoints = [
  { title: 'On-Ground Team', desc: 'Based in Guangzhou with Mandarin-speaking sourcing agents and QC inspectors.' },
  { title: 'Transparent Process', desc: 'Clear milestones, documented inspections, and regular progress updates.' },
  { title: 'Factory Network', desc: 'Access to verified manufacturers across electronics, home goods, industrial parts, and more.' },
  { title: 'End-to-End Support', desc: 'From sourcing to shipping, one point of contact manages the full order lifecycle.' },
]

const faqs = [
  { q: 'What products can you source?', a: 'We support a wide range of categories including electronics, home and kitchen, industrial components, textiles, packaging, and more. If you have a specific product, tell us your specs and we will confirm feasibility.' },
  { q: 'How do you verify suppliers?', a: 'We conduct factory audits, review business licenses, check production capacity, and may visit facilities in person. We also request samples and validate certifications before recommending a supplier.' },
  { q: 'What is included in quality inspection?', a: 'Inspections can cover pre-production checks, in-line monitoring, final random inspection, and container loading supervision. Reports include photos, measurements, and pass/fail results.' },
  { q: 'Do you handle shipping?', a: 'Yes. We coordinate freight forwarding, customs documentation, and door-to-door delivery. We can arrange sea, air, express, or rail depending on your timeline and budget.' },
  { q: 'How long does the sourcing process take?', a: 'Initial supplier shortlisting usually takes 3-7 business days. Sample approval and inspection scheduling depend on product complexity, but most orders move from quote to shipment within 4-8 weeks.' },
  { q: 'What fees do you charge?', a: 'We offer transparent service fees based on project scope. Contact us for a free quote tailored to your product, quantity, and requirements.' },
]

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl text-white">
            <h1 id="hero-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-4 text-base sm:text-lg text-slate-200">
              Find reliable suppliers, verify factories, inspect quality, and ship with confidence from China.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Verified suppliers</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> QC inspections</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Shipping support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <item.icon className="h-8 w-8 text-slate-900" />
              <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:underline">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-semibold text-slate-900">Problems We Solve</h2>
          <p className="mt-2 text-slate-600">Common sourcing challenges and how we help you avoid them.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-slate-900" />
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold text-slate-900">Why Buyers Work With Us</h2>
        <p className="mt-2 text-slate-600">A practical, transparent approach to China sourcing.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="mt-2 text-slate-600">Quick answers to common sourcing questions.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-sm font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild>
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
