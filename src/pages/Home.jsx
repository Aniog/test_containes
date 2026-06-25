import { Link } from 'react-router-dom'
import { getPickedImageUrl } from '@/lib/img.js'
import {
  ArrowRight, Shield, Search, ClipboardCheck,
  Truck, Factory, Star, ChevronDown, ChevronUp,
  Globe, Award, Clock
} from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist pre-vetted manufacturers that match your product specifications, volume requirements, and budget.',
    imgId: 'home-service-sourcing-8a2b1c',
    titleId: 'home-svc-title-sourcing',
    descId: 'home-svc-desc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering production capacity, certifications, equipment, and quality management systems.',
    imgId: 'home-service-factory-9b3c2d',
    titleId: 'home-svc-title-factory',
    descId: 'home-svc-desc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'In-line and pre-shipment inspections to ensure your products meet specifications before they leave the factory.',
    imgId: 'home-service-qc-0c4d3e',
    titleId: 'home-svc-title-qc',
    descId: 'home-svc-desc-qc',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end shipping coordination including freight forwarding, customs clearance, and delivery to your door.',
    imgId: 'home-service-shipping-1d5e4f',
    titleId: 'home-svc-title-shipping',
    descId: 'home-svc-desc-shipping',
  },
]

const problems = [
  { icon: Shield, title: 'Unverified Suppliers', desc: 'Stop risking payments to unknown factories. We verify every supplier before you commit.' },
  { icon: Search, title: 'Communication Barriers', desc: 'Our bilingual team bridges the language gap, ensuring your requirements are clearly understood.' },
  { icon: Award, title: 'Quality Inconsistency', desc: 'We catch defects before shipment with rigorous on-site inspections at every production stage.' },
  { icon: Clock, title: 'Missed Deadlines', desc: 'Our local presence means we can visit factories weekly to keep your production on schedule.' },
]

const trustPoints = [
  { number: '10+', label: 'Years Experience' },
  { number: '2,000+', label: 'Factories Audited' },
  { number: '500+', label: 'Clients Worldwide' },
  { number: '15,000+', label: 'Inspections Conducted' },
]

const caseStudies = [
  {
    id: 'electronics',
    title: 'Consumer Electronics',
    result: '35% cost reduction',
    desc: 'Helped a European brand transition from 3 unreliable suppliers to 1 strategic partner with full QC integration.',
    imgId: 'home-cs-electronics-a1b2c3',
    titleId: 'home-cs-title-electronics',
    descId: 'home-cs-desc-electronics',
  },
  {
    id: 'furniture',
    title: 'Home Furniture',
    result: '99.2% defect-free rate',
    desc: 'Sourced and quality-managed production of 12 container loads of solid wood furniture for a US retailer.',
    imgId: 'home-cs-furniture-d4e5f6',
    titleId: 'home-cs-title-furniture',
    descId: 'home-cs-desc-furniture',
  },
  {
    id: 'packaging',
    title: 'Custom Packaging',
    result: 'On-time delivery 100%',
    desc: 'Managed a complex multi-material packaging project across 3 factories for an Australian F&B brand.',
    imgId: 'home-cs-packaging-g7h8i9',
    titleId: 'home-cs-title-packaging',
    descId: 'home-cs-desc-packaging',
  },
]

const faqs = [
  { q: 'How do you find and verify suppliers?', a: 'We combine our existing supplier database with targeted sourcing. Every factory undergoes a physical audit covering licenses, production capacity, quality systems, equipment, and export history.' },
  { q: 'What are your service fees?', a: 'We offer flexible pricing models: a fixed project fee, a percentage of order value (typically 3-8%), or a retainer for ongoing sourcing. Contact us for a tailored quote based on your specific needs.' },
  { q: 'How do you handle quality control?', a: 'We provide in-line inspections during production and pre-shipment inspections before container loading. Our inspectors use AQL sampling standards and provide detailed photo reports within 24 hours.' },
  { q: 'Can you help with small orders?', a: 'Yes. While we primarily work with orders of $5,000+, we can accommodate smaller trial orders. We also help negotiate MOQs (minimum order quantities) with suppliers.' },
  { q: 'Do you handle shipping and customs?', a: 'Absolutely. We coordinate FOB and CIF shipments, handle documentation, and can recommend trusted freight forwarders. We also assist with customs clearance requirements for your destination country.' },
  { q: 'How long does the sourcing process take?', a: 'Initial supplier shortlisting takes 5-7 business days. Factory audits take 3-5 days. Sample development typically takes 2-4 weeks depending on product complexity. Full production timelines vary by product and order size.' },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-border rounded-lg">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-semibold text-text-primary pr-4">{faq.q}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-text-muted flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-5 pb-5">
          <p className="text-text-secondary leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  const heroBgUrl = getPickedImageUrl('home-hero-bg-1a2b3c')

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        {heroBgUrl && (
          <div className="absolute inset-0 opacity-15">
            <div
              className="w-full h-full"
              style={{ backgroundImage: `url(${heroBgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          </div>
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 rounded-full px-4 py-1.5 text-sm mb-6">
              <Globe className="w-4 h-4" />
              <span>Trusted by 500+ buyers in 40+ countries</span>
            </div>
            <h1 id="home-hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="home-hero-subtitle" className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
              We help international businesses find verified suppliers, inspect quality, follow production, and coordinate shipping — so you can source from China with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-hover transition-colors text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/20 transition-colors text-base"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label}>
                <div className="text-3xl md:text-4xl font-bold text-primary">{tp.number}</div>
                <div className="text-sm text-text-muted mt-1">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Sourcing from China Shouldn't Be Risky
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We eliminate the common challenges international buyers face when sourcing from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 border border-border">
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{p.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              End-to-End Sourcing Services
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              From supplier discovery to final delivery — we handle every step of your China sourcing journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc) => (
              <div key={svc.title} className="flex gap-6 p-6 bg-background rounded-xl border border-border">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                    <svc.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 id={svc.titleId} className="text-xl font-semibold text-text-primary mb-2">{svc.title}</h3>
                  <p id={svc.descId} className="text-text-secondary leading-relaxed mb-4">{svc.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:text-primary-light transition-colors">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              See how we've helped businesses source successfully from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => {
              const csImg = getPickedImageUrl(cs.imgId)
              return (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-border">
                <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                  {csImg && (
                    <img
                      alt={cs.title}
                      src={csImg}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="inline-block bg-green-50 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                    {cs.result}
                  </div>
                  <h3 id={cs.titleId} className="font-semibold text-text-primary mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-text-secondary text-sm leading-relaxed">{cs.desc}</p>
                </div>
              </div>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
            >
              View all case studies <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A simple, transparent process designed to get you results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Tell Us Your Needs', desc: 'Share your product specs, target price, and volume requirements.' },
              { step: '02', title: 'Supplier Matching', desc: 'We shortlist pre-vetted factories that match your criteria.' },
              { step: '03', title: 'Audit & Sample', desc: 'Factory audit, sample development, and negotiation.' },
              { step: '04', title: 'Production & Ship', desc: 'QC monitoring, production follow-up, and shipping coordination.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{s.title}</h3>
                <p className="text-text-secondary text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
            >
              See the full process <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
          <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
            "SSourcing China transformed our supply chain. They found a factory that cut our costs by 30% while improving quality. Their QC team caught issues we would have never seen until it was too late."
          </blockquote>
          <div className="text-white/70">
            <p className="font-semibold text-white">Michael R.</p>
            <p className="text-sm">CEO, TechAccessories GmbH — Germany</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-secondary">
              Common questions about working with a China sourcing agent.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Tell us what you need, and we'll provide a free sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-hover transition-colors text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}