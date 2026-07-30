import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  ChevronRight, Star, Globe, Users, Award, CheckCircle,
  ArrowRight, Package, Zap, MessageSquare
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specifications, MOQ, and budget.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm production capacity, certifications, working conditions, and business legitimacy.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections following AQL standards to catch defects before goods leave the factory.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    icon: Zap,
    title: 'Production Follow-up',
    desc: 'Regular updates and on-site monitoring to keep your production on schedule and within agreed specifications.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure timely delivery to your destination.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
  {
    icon: MessageSquare,
    title: 'Supplier Negotiation',
    desc: 'Leverage our local presence and language skills to negotiate better prices, payment terms, and lead times.',
    titleId: 'svc-neg-title',
    descId: 'svc-neg-desc',
  },
]

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, target price, and quantity.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our network and verified databases to find suitable manufacturers.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify capacity, quality systems, and compliance.' },
  { num: '04', title: 'Sampling & Approval', desc: 'Samples are arranged, inspected, and sent to you for final approval.' },
  { num: '05', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections at key stages.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics, prepare export documents, and track your shipment.' },
]

const problems = [
  { title: 'Unreliable Suppliers', desc: 'Struggling to find manufacturers who deliver consistent quality and meet deadlines?' },
  { title: 'Language Barriers', desc: 'Communication gaps causing misunderstandings about specs, pricing, or timelines?' },
  { title: 'Quality Issues', desc: 'Receiving goods that don\'t match samples or fail your quality standards?' },
  { title: 'Shipping Delays', desc: 'Unclear export processes leading to costly delays and missed market windows?' },
  { title: 'Fraud Risk', desc: 'Worried about paying deposits to factories that don\'t exist or can\'t deliver?' },
  { title: 'No Local Presence', desc: 'Unable to visit factories or monitor production from overseas?' },
]

const trustStats = [
  { value: '500+', label: 'Buyers Served', icon: Users },
  { value: '12+', label: 'Years in China', icon: Award },
  { value: '30+', label: 'Product Categories', icon: Package },
  { value: '98%', label: 'Client Satisfaction', icon: Star },
]

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and quote. Typical services include a sourcing fee, factory audit fee, and inspection fee — all clearly outlined before you commit.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard products, we typically present a shortlist of verified suppliers within 5–10 business days. Complex or highly customized products may take longer.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers scaling their supply chain.',
  },
  {
    q: 'Which product categories do you cover?',
    a: 'We source across 30+ categories including electronics, furniture, textiles, hardware, packaging, and more. Visit our Products page for the full list.',
  },
  {
    q: 'Can you handle shipping and customs?',
    a: 'We coordinate with licensed freight forwarders for sea and air freight. We prepare export documentation and can recommend customs brokers in your country.',
  },
  {
    q: 'What quality standards do your inspections follow?',
    a: 'Our inspections follow AQL (Acceptable Quality Limit) standards. We check dimensions, functionality, appearance, labeling, and packaging against your approved samples.',
  },
]

const caseStudies = [
  {
    id: 'cs-furniture',
    title: 'Furniture Importer Reduces Defect Rate by 60%',
    category: 'Quality Control',
    result: '60% fewer defects',
    desc: 'A UK-based furniture retailer was receiving 15% defective goods. We implemented in-line inspections and reduced defects to under 6% within two orders.',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-a1b2c3',
  },
  {
    id: 'cs-electronics',
    title: 'Electronics Brand Cuts Sourcing Time by 40%',
    category: 'Supplier Sourcing',
    result: '40% faster sourcing',
    desc: 'A US consumer electronics brand needed 3 new suppliers in 30 days. We delivered 5 audited options in 18 days, all with relevant certifications.',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-d4e5f6',
  },
  {
    id: 'cs-textiles',
    title: 'Apparel Brand Saves 18% on Unit Costs',
    category: 'Negotiation',
    result: '18% cost savings',
    desc: 'By renegotiating with existing suppliers and introducing two competitive alternatives, we helped an Australian apparel brand reduce unit costs significantly.',
    titleId: 'cs-textiles-title',
    descId: 'cs-textiles-desc',
    imgId: 'cs-textiles-img-g7h8i9',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-brand-border rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-brand-light transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-brand-navy text-sm md:text-base pr-4">{q}</span>
        <ChevronRight className={`w-5 h-5 text-brand-blue flex-shrink-0 transition-transform ${open ? 'rotate-90' : ''}`} />
      </button>
      {open && (
        <div className="px-6 py-4 bg-brand-light border-t border-brand-border">
          <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  const containerRef = useRef(null)
  const caseRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, caseRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-7f3a2b"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full px-4 py-1.5 mb-6">
              <Globe className="w-4 h-4 text-brand-accent" />
              <span className="text-brand-accent text-sm font-medium">China-Based Sourcing Agent</span>
            </div>
            <h1 id="hero-title" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-brand-accent">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              We help importers worldwide find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-amber-500 text-white font-semibold px-7 py-3.5 rounded-lg text-base transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg text-base transition-colors"
              >
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {trustStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <stat.icon className="w-5 h-5 text-brand-accent" />
                  <span className="text-white font-bold text-lg">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-blue py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white text-sm font-medium">
            {['AQL Quality Inspections', 'On-Site Factory Audits', 'English-Speaking Team', 'Transparent Pricing', 'No Hidden Fees'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 id="services-title" className="font-display text-3xl md:text-4xl font-bold text-brand-navy mt-2 mb-4">
              End-to-End China Sourcing Services
            </h2>
            <p id="services-subtitle" className="text-brand-muted text-lg max-w-2xl mx-auto">
              From finding the right supplier to delivering goods to your door, we manage every step of the sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white rounded-xl border border-brand-border p-6 hover:shadow-md hover:border-brand-sky transition-all group">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors">
                  <svc.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 id={svc.titleId} className="font-display font-semibold text-brand-navy text-lg mb-2">{svc.title}</h3>
                <p id={svc.descId} className="text-brand-muted text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-sky transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">Common Challenges</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mt-2 mb-4">
              Problems We Solve for Importers
            </h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              Sourcing from China comes with real risks. Here's how we help you avoid the most common pitfalls.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 border border-brand-border">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-500 text-lg font-bold">!</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">{p.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-brand-border flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-green-700 text-sm font-medium">SSourcing China handles this</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mt-2 mb-4">
              How We Source for You
            </h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              A structured, transparent process from your first inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="bg-brand-light rounded-xl p-6 border border-brand-border h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display font-bold text-3xl text-brand-accent">{step.num}</span>
                    {i < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-brand-border z-10" />
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-brand-navy text-lg mb-2">{step.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-sky text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-brand-light" ref={caseRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">Results</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mt-2 mb-4">
              Client Case Studies
            </h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              Real outcomes from buyers who partnered with SSourcing China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-brand-border hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-light text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full">{cs.category}</span>
                    <span className="bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">{cs.result}</span>
                  </div>
                  <h3 id={cs.titleId} className="font-display font-semibold text-brand-navy text-base mb-2 leading-snug">{cs.title}</h3>
                  <p id={cs.descId} className="text-brand-muted text-sm leading-relaxed">{cs.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-sky transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 md:py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Why Buyers Trust SSourcing China
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: 'China-Based Team', desc: 'Our team is on the ground in China, visiting factories and managing suppliers directly.' },
              { icon: ShieldCheck, title: 'Verified Suppliers Only', desc: 'Every supplier we recommend has passed our multi-point verification process.' },
              { icon: ClipboardCheck, title: 'AQL Inspections', desc: 'We follow internationally recognized AQL standards for all quality inspections.' },
              { icon: Users, title: 'Dedicated Account Manager', desc: 'You get a single point of contact who knows your business and requirements.' },
            ].map((tp) => (
              <div key={tp.title} className="text-center">
                <div className="w-14 h-14 bg-brand-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <tp.icon className="w-7 h-7 text-brand-accent" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{tp.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll send you a free, no-obligation sourcing quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-amber-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
