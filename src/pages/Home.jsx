import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Star,
  CheckCircle, ArrowRight, Globe, Users, Award, Clock,
  ChevronDown, Package, Zap, AlertTriangle, TrendingUp
} from 'lucide-react'
import CTAButton from '@/components/CTAButton'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits confirm production capacity, certifications, and working conditions before you commit.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections catch defects early, protecting your brand and reducing returns.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'We monitor your order at every production stage and keep you updated with clear progress reports.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'From freight booking to customs documentation, we coordinate logistics so your goods arrive on time.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'We help you develop custom-branded products with reliable OEM factories across China.',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-img-p7q8r9',
  },
]

const stats = [
  { value: '500+', label: 'Buyers Served', icon: Users },
  { value: '12+', label: 'Years in China', icon: Award },
  { value: '30+', label: 'Product Categories', icon: Package },
  { value: '98%', label: 'Client Satisfaction', icon: Star },
]

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Factories that miss deadlines, change specs, or disappear after payment.' },
  { icon: ShieldCheck, title: 'Quality Failures', desc: 'Goods that arrive damaged, non-compliant, or different from samples.' },
  { icon: Globe, title: 'Language Barriers', desc: 'Miscommunication that leads to costly mistakes and delays.' },
  { icon: TrendingUp, title: 'Hidden Costs', desc: 'Unexpected fees, poor freight rates, and unclear payment terms.' },
]

const trustPoints = [
  'China-based team with local market knowledge',
  'Fluent in English, Chinese, and supplier negotiations',
  'Transparent fee structure — no hidden commissions',
  'Detailed written reports for every inspection',
  'Established relationships with 1,000+ vetted factories',
  'Experience across 30+ product categories',
]

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer transparent, project-based pricing. Contact us for a free quote tailored to your needs.',
  },
  {
    q: 'Can you help with small orders or samples?',
    a: 'Yes. We assist buyers at all stages, from initial samples to full production runs. There is no minimum order requirement to engage our services.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site factory audits covering business licenses, production capacity, equipment, workforce, and compliance certifications.',
  },
  {
    q: 'What product categories do you cover?',
    a: 'We source across 30+ categories including electronics, furniture, clothing, machinery, toys, health products, and more.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typical timelines: supplier shortlist in 5–10 days, factory audit in 3–5 days, quality inspection in 1–3 days. Full timelines depend on your product complexity.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate freight forwarding, export documentation, and can connect you with trusted customs brokers in your country.',
  },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-ss001"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-gold rounded-full" />
              <span className="text-white/90 text-sm font-medium">China-Based Sourcing Agent</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-gold">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              We help importers worldwide find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
                Get a Free Sourcing Quote
              </CTAButton>
              <CTAButton to="/how-it-works" variant="white-outline" className="text-base px-8 py-4">
                How It Works
              </CTAButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {['500+ Buyers Served', '12+ Years in China', '30+ Categories'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/70 text-sm">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/40" />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <Icon className="w-7 h-7 text-china-red mx-auto mb-2" />
                <div className="text-3xl font-bold text-navy">{value}</div>
                <div className="text-text-muted text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-light-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-china-red text-sm font-semibold uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">End-to-End Sourcing Services</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              From finding the right factory to getting goods to your door, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, titleId, descId, imgId }) => (
              <div key={title} className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative h-44 overflow-hidden">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-navy/30" />
                  <div className="absolute bottom-3 left-3 bg-white rounded-lg p-2">
                    <Icon className="w-5 h-5 text-navy" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={titleId} className="text-navy font-bold text-lg mb-2">{title}</h3>
                  <p id={descId} className="text-text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/services" variant="secondary">View All Services</CTAButton>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-china-red text-sm font-semibold uppercase tracking-wider">Why Buyers Need Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-6">
                Sourcing from China Is Complex.<br />We Make It Simple.
              </h2>
              <p className="text-text-muted text-lg mb-8">
                Without a trusted local partner, overseas buyers face real risks. We eliminate those risks with on-the-ground expertise.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {problems.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 bg-light-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-navy font-semibold text-sm mb-1">{title}</h4>
                      <p className="text-text-muted text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  data-strk-img-id="problems-img-ss002"
                  data-strk-img="[problems-section-title] China factory quality control inspection"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Quality control inspection in China factory"
                  id="problems-section-title"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-navy font-bold text-sm">Quality Verified</div>
                    <div className="text-text-muted text-xs">Before every shipment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">How We Source for You</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              A structured, transparent process from your first inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit Your Requirements', desc: 'Tell us what you need — product specs, quantity, target price, and timeline.' },
              { step: '02', title: 'Supplier Research & Shortlist', desc: 'We identify and vet 3–5 qualified factories that match your criteria.' },
              { step: '03', title: 'Audit & Sample Review', desc: 'We visit factories, verify credentials, and arrange samples for your approval.' },
              { step: '04', title: 'Production & Delivery', desc: 'We monitor production, inspect finished goods, and coordinate shipping.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full hover:bg-white/10 transition-colors">
                  <div className="text-gold text-4xl font-bold mb-4 opacity-60">{step}</div>
                  <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/how-it-works" variant="white-outline">See Full Process</CTAButton>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-light-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-china-red text-sm font-semibold uppercase tracking-wider">Product Categories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Products We Source</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              We have sourcing experience across a wide range of product categories from Chinese manufacturers.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: 'Electronics', imgId: 'cat-elec-ss003', titleId: 'cat-elec-title' },
              { label: 'Furniture', imgId: 'cat-furn-ss004', titleId: 'cat-furn-title' },
              { label: 'Clothing & Textiles', imgId: 'cat-cloth-ss005', titleId: 'cat-cloth-title' },
              { label: 'Machinery', imgId: 'cat-mach-ss006', titleId: 'cat-mach-title' },
              { label: 'Toys & Baby', imgId: 'cat-toys-ss007', titleId: 'cat-toys-title' },
              { label: 'Health & Beauty', imgId: 'cat-health-ss008', titleId: 'cat-health-title' },
              { label: 'Sports & Outdoor', imgId: 'cat-sport-ss009', titleId: 'cat-sport-title' },
              { label: 'Packaging', imgId: 'cat-pack-ss010', titleId: 'cat-pack-title' },
              { label: 'Auto Parts', imgId: 'cat-auto-ss011', titleId: 'cat-auto-title' },
              { label: 'Home Decor', imgId: 'cat-home-ss012', titleId: 'cat-home-title' },
            ].map(({ label, imgId, titleId }) => (
              <div key={label} className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <img
                  data-strk-img-id={imgId}
                  data-strk-img={`[${titleId}] China manufacturing product`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={label}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/40 transition-colors" />
                <div className="absolute inset-0 flex items-end p-3">
                  <span id={titleId} className="text-white font-semibold text-sm">{label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/products" variant="secondary">Browse All Categories</CTAButton>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  data-strk-img-id="trust-img-ss013"
                  data-strk-img="[trust-section-title] China sourcing agent team professional"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="SSourcing China team"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-gold rounded-xl p-4 shadow-lg">
                <div className="text-white font-bold text-2xl">12+</div>
                <div className="text-white/90 text-xs">Years in China</div>
              </div>
            </div>
            <div>
              <span className="text-china-red text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
              <h2 id="trust-section-title" className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-6">
                A Partner You Can Trust in China
              </h2>
              <p className="text-text-muted text-lg mb-8">
                We operate from China, speak the language, and understand the market. Our clients get honest advice, not just what they want to hear.
              </p>
              <ul className="space-y-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-text-dark text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton to="/contact" variant="primary">Start a Conversation</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="bg-light-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-china-red text-sm font-semibold uppercase tracking-wider">Client Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Case Studies</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Real examples of how we've helped buyers source successfully from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: 'Electronics',
                title: 'US Retailer Reduces Defect Rate by 60%',
                desc: 'A US-based electronics importer was receiving 15% defective goods. We implemented pre-shipment inspections and reduced defects to under 6%.',
                imgId: 'cs-elec-ss014',
                titleId: 'cs-elec-title',
                descId: 'cs-elec-desc',
              },
              {
                category: 'Furniture',
                title: 'Australian Brand Launches Private Label Line',
                desc: 'We sourced and verified 3 furniture factories in Foshan, coordinated samples, and managed the first production run for a new private label brand.',
                imgId: 'cs-furn-ss015',
                titleId: 'cs-furn-title',
                descId: 'cs-furn-desc',
              },
              {
                category: 'Clothing',
                title: 'European Buyer Cuts Sourcing Time by 40%',
                desc: 'By handling supplier research, factory audits, and sample coordination, we reduced the buyer\'s sourcing cycle from 12 weeks to 7 weeks.',
                imgId: 'cs-cloth-ss016',
                titleId: 'cs-cloth-title',
                descId: 'cs-cloth-desc',
              },
            ].map(({ category, title, desc, imgId, titleId, descId }) => (
              <div key={title} className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}] China sourcing`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-china-red text-white text-xs font-semibold px-3 py-1 rounded-full">{category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={titleId} className="text-navy font-bold text-base mb-2">{title}</h3>
                  <p id={descId} className="text-text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/case-studies" variant="secondary">View All Case Studies</CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-china-red text-sm font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-light-blue transition-colors">
                  <span className="text-navy font-semibold text-sm md:text-base pr-4">{q}</span>
                  <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-text-muted text-sm leading-relaxed border-t border-border pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need. We'll respond within 24 hours with a tailored sourcing plan and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
              Get a Free Sourcing Quote
            </CTAButton>
            <CTAButton to="/how-it-works" variant="white-outline" className="text-base px-8 py-4">
              Learn How It Works
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
