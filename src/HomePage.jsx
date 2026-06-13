import { Link } from 'react-router-dom'
import { Button, Card, CardContent, Badge } from './ui.jsx'
import { useState } from 'react'

const TRUST_POINTS = [
  { title: '10+ Years Experience', desc: 'A decade of sourcing from China with proven results for global clients.' },
  { title: '500+ Verified Factories', desc: 'Extensive network of pre-audited, reliable manufacturers across all industries.' },
  { title: 'On-Ground Team', desc: 'Native Chinese team based in Guangzhou for in-person factory visits and inspections.' },
  { title: 'End-to-End Service', desc: 'From supplier search to final shipment — we handle every step of the process.' },
]

const SERVICES = [
  { icon: '🔍', title: 'Supplier Identification', desc: 'We identify and shortlist qualified manufacturers based on your product specifications, volume requirements, and budget.' },
  { icon: '🏭', title: 'Factory Verification', desc: 'On-site factory audits covering production capacity, certifications, equipment, workforce, and management systems.' },
  { icon: '✅', title: 'Quality Inspection', desc: 'Pre-production, during production, and pre-shipment inspections to ensure your products meet specifications.' },
  { icon: '📋', title: 'Production Follow-Up', desc: 'Regular factory visits and progress reports throughout production to keep your orders on schedule.' },
  { icon: '🚢', title: 'Shipping Coordination', desc: 'Full logistics support including freight forwarding, customs documentation, and consolidation services.' },
]

const PROBLEMS = [
  { title: 'Unknown Supplier Quality', desc: 'We verify factories in person so you don\'t rely on unverified Alibaba profiles.' },
  { title: 'Communication Barriers', desc: 'Our bilingual team bridges the language gap and negotiates clearly on your behalf.' },
  { title: 'Quality Inconsistency', desc: 'Systematic QC inspections at every production stage prevent defective shipments.' },
  { title: 'Late Deliveries', desc: 'We monitor production timelines closely and flag delays before they impact your business.' },
]

const PROCESS_STEPS = [
  { step: '01', title: 'Tell Us Your Needs', desc: 'Share your product specs, target price, and volume. We analyze your requirements and propose a sourcing plan.' },
  { step: '02', title: 'Supplier Matching', desc: 'We shortlist 3–5 qualified factories from our verified network and present detailed comparison reports.' },
  { step: '03', title: 'Factory Audit & Samples', desc: 'We visit shortlisted factories, negotiate pricing, arrange samples, and verify certifications.' },
  { step: '04', title: 'Production & QC', desc: 'We monitor production with regular inspections and send progress reports with photos and data.' },
  { step: '05', title: 'Shipping & Delivery', desc: 'We coordinate logistics, handle customs paperwork, and track your shipment until delivery.' },
]

const FAQ = [
  { q: 'What types of products do you source from China?', a: 'We source across virtually all manufacturing categories: electronics, machinery, textiles, home goods, packaging, automotive parts, medical supplies, and more. Our team has specialists for different industries to ensure technical competence.' },
  { q: 'How much does your sourcing service cost?', a: 'Our fee structure depends on the scope of work. We offer project-based pricing, retainer models, and commission-based arrangements. Contact us for a free quote tailored to your needs — we are transparent about all costs.' },
  { q: 'Do you handle small orders or only large volumes?', a: 'We work with businesses of all sizes. Whether you need a small trial order or container-level production, we can help. Minimum order quantities depend on the specific product and factory.' },
  { q: 'How do you ensure supplier reliability?', a: 'Every factory we recommend undergoes our verification process: business license check, on-site facility inspection, production capacity assessment, quality management system review, and reference checks with past buyers.' },
  { q: 'Can you help with product design and development?', a: 'Yes. We can connect you with design partners, assist with prototyping, advise on materials and manufacturing processes, and manage the sampling and iteration process with factories.' },
  { q: 'What shipping methods do you support?', a: 'We coordinate sea freight (FCL/LCL), air freight, rail freight (China-Europe Railway Express), and express courier services. We handle all documentation including commercial invoices, packing lists, and certificates of origin.' },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Based in Guangzhou, serving buyers worldwide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all through one trusted partner on the ground in China.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-blue-900 hover:bg-gray-100 border-0 shadow-lg">
                  Get a Free Sourcing Quote
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  How It Works →
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span> 500+ Verified Factories
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span> 10+ Years in Business
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span> 30+ Countries Served
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-blue-500 via-green-400 to-blue-500" />
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {TRUST_POINTS.map((point, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-blue-700 mb-1">{point.title.split(' ')[0]}{point.title.includes('+') ? '+' : ''}</div>
                <div className="text-sm text-gray-600">{point.title.replace(/^\d+\+?\s*/, '')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <Badge variant="blue" className="mb-3">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Sourcing Solutions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">From identifying the right factory to delivering finished products to your warehouse — we manage every stage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent>
                  <div className="text-3xl mb-4">{svc.icon}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline">View All Services →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="amber" className="mb-3">Problems We Solve</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The challenges of sourcing from China — solved.</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Sourcing from China without local expertise leads to costly mistakes. We eliminate the risks that keep procurement managers up at night.
              </p>
              <div className="space-y-4">
                {PROBLEMS.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{p.title}</h4>
                      <p className="text-sm text-gray-500">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-6">What You Risk Without a Local Agent</h3>
              <div className="space-y-5">
                {[
                  { issue: 'Supplier scams & fake credentials', impact: 'Financial loss & legal complications' },
                  { issue: 'Poor product quality', impact: 'Customer returns & brand damage' },
                  { issue: 'Production delays', impact: 'Missed sales & inventory shortages' },
                  { issue: 'Hidden costs & markups', impact: 'Eroded profit margins' },
                  { issue: 'Compliance & certification gaps', impact: 'Customs issues & regulatory fines' },
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <span className="flex-shrink-0 w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs">!</span>
                    <div>
                      <div className="font-medium text-sm text-gray-900">{r.issue}</div>
                      <div className="text-xs text-gray-400">{r.impact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <Badge variant="green" className="mb-3">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">A Proven 5-Step Process</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Simple, transparent, and effective — our workflow has delivered results for hundreds of buyers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="relative">
                <Card className="h-full">
                  <CardContent>
                    <div className="text-4xl font-extrabold text-blue-100 mb-3">{step.step}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 text-gray-300 text-xl z-10">→</div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works">
              <Button variant="outline">See Full Process →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <Badge variant="blue" className="mb-3">Case Studies</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Results for Real Clients</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { title: 'European Electronics Brand', result: '35% cost reduction', desc: 'Sourced PCB assemblies and reduced unit costs while improving quality consistency.' },
              { title: 'US Home Goods Retailer', result: '6-month faster time-to-market', desc: 'Identified 3 qualified furniture factories and managed full production cycle.' },
              { title: 'Australian Machinery Importer', result: 'Zero defects on first shipment', desc: 'Rigorous supplier audit and QC protocol eliminated quality issues.' },
            ].map((cs, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-2">{cs.result}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{cs.title}</h3>
                  <p className="text-sm text-gray-500">{cs.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/case-studies">
              <Button variant="outline">View All Case Studies →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="blue" className="mb-3">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
            {FAQ.map((item, i) => (
              <div key={i} className="bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left text-gray-900 font-medium hover:bg-gray-50 transition-colors"
                >
                  <span className="pr-4">{item.q}</span>
                  <svg className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && <div className="px-6 pb-5 text-gray-600 leading-relaxed">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Sourcing from China?</h2>
          <p className="text-blue-100 mb-8 text-lg">Tell us what you need — we will find the right supplier, ensure quality, and handle logistics.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 border-0 shadow-lg">
              Get a Free Sourcing Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}