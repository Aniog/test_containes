import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Search, ClipboardCheck, Factory, Truck, Users, Award, Star, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We find and shortlist pre-vetted manufacturers that match your product specifications, MOQ, and budget.', imgId: 'home-svc-sourcing-8a2f1c' },
  { icon: Factory, title: 'Factory Verification', desc: 'On-site factory audits verify production capacity, certifications, equipment, and management quality.', imgId: 'home-svc-factory-9b3e2d' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-shipment, during-production, and container loading inspections to international standards.', imgId: 'home-svc-qc-7c1d4e' },
  { icon: Truck, title: 'Shipping Coordination', desc: 'End-to-end logistics from factory to your warehouse, including customs documentation and freight.', imgId: 'home-svc-shipping-5f6a8b' },
]

const trustPoints = [
  { icon: ShieldCheck, title: 'Verified Suppliers Only', desc: 'Every factory we recommend has passed our rigorous on-site audit process.' },
  { icon: Users, title: '15+ Years Experience', desc: 'Our team has deep expertise across manufacturing sectors in Guangdong, Zhejiang, and Jiangsu.' },
  { icon: Award, title: 'ISO-Certified QC', desc: 'Inspections follow AQL 2.5 / 4.0 standards with detailed photo reports within 24 hours.' },
  { icon: Star, title: '300+ Clients Worldwide', desc: 'From startups to Fortune 500 companies across North America, Europe, and Australia.' },
]

const problems = [
  { problem: 'Unreliable suppliers with fake credentials', solution: 'On-site factory audits verify business licenses, production lines, and real capacity.' },
  { problem: 'Quality that does not match samples', solution: 'Third-party QC inspections at every stage: pre-production, during production, pre-shipment.' },
  { problem: 'Hidden costs and payment risks', solution: 'Transparent pricing, milestone-based payments, and documented change orders.' },
  { problem: 'Communication barriers and delays', solution: 'Bilingual team manages all supplier communication in real-time, no delays or misunderstandings.' },
]

const faqs = [
  { q: 'What is the minimum order quantity you work with?', a: 'We work with MOQs starting from 500 units, depending on the product category. We can advise whether your target volume is feasible before you commit.' },
  { q: 'How long does it take to find a suitable supplier?', a: 'Typically 5-10 business days for supplier identification and 3-5 days for factory audits. Complex or niche products may take slightly longer.' },
  { q: 'Do you handle shipping and customs?', a: 'Yes. We coordinate FOB, CIF, and DDP shipments. Our freight partners handle sea, air, and rail freight with full customs documentation.' },
  { q: 'How do you charge for your services?', a: 'We offer flexible models: a flat project fee, a percentage of order value, or a monthly retainer for ongoing sourcing needs. Contact us for a tailored quote.' },
  { q: 'Can you protect my product design and IP?', a: 'Yes. We sign NDAs before sharing your specifications, and we work with suppliers who respect IP. We can also recommend legal partners in China for patent and trademark protection.' },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div
            data-strk-bg-id="home-hero-bg-3a7f1e"
            data-strk-bg="[home-hero-subtitle] [home-hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="w-full h-full"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 id="home-hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="home-hero-subtitle" className="text-lg md:text-xl text-blue-200 leading-relaxed mb-8 max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, manage production, and coordinate shipping — so you can scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((tp, i) => (
              <div key={i} className="flex items-start gap-3">
                <tp.icon className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-brand-900">{tp.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{tp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="home-problems-title" className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Sourcing from China comes with real risks. We eliminate them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <p className="text-red-600 font-semibold text-sm mb-2">Problem</p>
                <p className="text-slate-800 mb-3">{item.problem}</p>
                <p className="text-brand-600 font-semibold text-sm mb-1">Our Solution</p>
                <p className="text-slate-600 text-sm">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="home-services-title" className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              End-to-End Sourcing Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From supplier discovery to final delivery, we manage every step.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <div className="relative mb-5 rounded-lg overflow-hidden aspect-[3/2]">
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[home-svc-${i}-desc] [home-services-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <svc.icon className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="font-semibold text-brand-900 mb-2">{svc.title}</h3>
                <p id={`home-svc-${i}-desc`} className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1 text-brand-600 text-sm font-medium mt-4 hover:text-brand-700 transition-colors">
                  Learn more <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-brand-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Tell us what you need, and we will find the right supplier for you — free initial consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-lg text-base transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-brand-900 hover:text-brand-600 transition-colors">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
