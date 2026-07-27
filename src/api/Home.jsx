import { Link } from 'react-router-dom'
import {
  Factory, ShieldCheck, PackageCheck, Ship, Search,
  Award, Users, Globe, CheckCircle, ArrowRight,
  Star, ChevronRight, Clock, ThumbsUp, TrendingUp,
} from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProblemsSection />
      <TrustSection />
      <ProductsPreviewSection />
      <CaseStudiesPreviewSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 text-gold-light font-medium px-4 py-1.5 rounded-full mb-6">
            <Globe className="w-4 h-4" />
            Trusted by 200+ Global Buyers Since 2012
          </div>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            We help you find reliable Chinese suppliers, verify factories, inspect product quality, 
            monitor production, and manage shipping — so you can source from China with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
            >
              How It Works
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-6 mt-10 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-gold" /> No Hidden Fees
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-gold" /> Factory Audit Included
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-gold" /> Quality Guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist the most suitable manufacturers based on your product specifications, volume needs, and budget.' },
    { icon: ShieldCheck, title: 'Factory Verification', desc: 'On-site factory audits covering production capacity, certifications, quality systems, and financial stability.' },
    { icon: PackageCheck, title: 'Quality Control', desc: 'Pre-production, during-production, and pre-shipment inspections following your specifications and AQL standards.' },
    { icon: Factory, title: 'Production Monitoring', desc: 'Regular production updates with timeline tracking, photos, and reports so you always know your order status.' },
    { icon: Ship, title: 'Shipping & Logistics', desc: 'Full logistics coordination including freight forwarding, customs clearance, and delivery to your destination.' },
  ]
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">End-to-End Sourcing Services</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">From finding the right supplier to delivering finished products to your warehouse, we handle every step of the China sourcing process.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div key={i} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-5 group-hover:bg-navy transition-colors">
                <svc.icon className="w-6 h-6 text-navy group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{svc.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    { num: '01', title: 'Submit Inquiry', desc: 'Tell us what you need — product specs, quantity, target price, and timeline.' },
    { num: '02', title: 'Supplier Search', desc: 'We research and shortlist 3-5 qualified manufacturers from our verified network.' },
    { num: '03', title: 'Factory Audit', desc: 'Our team visits each factory to verify capabilities, certifications, and quality systems.' },
    { num: '04', title: 'Sampling & Negotiation', desc: 'We coordinate samples, negotiate pricing, and help you select the best supplier.' },
    { num: '05', title: 'Production & QC', desc: 'We monitor production with regular inspections and quality control checks.' },
    { num: '06', title: 'Ship & Deliver', desc: 'We manage logistics, shipping, and customs clearance to your destination.' },
  ]
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">How Sourcing Works</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">A proven 6-step process that has helped over 200 buyers successfully source from China.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative p-6">
              <div className="text-5xl font-bold text-surface select-none mb-4">{step.num}</div>
              <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/how-it-works" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Learn More About Our Process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProblemsSection() {
  const problems = [
    { icon: Search, title: 'Finding Reliable Suppliers', desc: 'Online directories are full of middlemen and unverified factories. We do on-the-ground verification so you work directly with qualified manufacturers.' },
    { icon: ShieldCheck, title: 'Quality Concerns', desc: 'Product defects, material substitutions, and poor workmanship cost you time and money. Our QC inspections catch issues before they ship.' },
    { icon: Clock, title: 'Delayed Production', desc: 'Missed deadlines disrupt your business. We provide regular production updates and proactively resolve issues to keep your order on track.' },
    { icon: TrendingUp, title: 'Hidden Costs', desc: 'Unexpected fees in logistics, customs, and middleman margins eat into your profits. We provide transparent pricing with no hidden charges.' },
  ]
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold-light font-semibold text-sm tracking-wider uppercase">Problems We Solve</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Sourcing from China Shouldn't Be Risky</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">We eliminate the common headaches that importers face when sourcing from China.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-6 h-6 text-gold-light" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  const trustPoints = [
    { icon: Award, value: '12+ Years', label: 'Industry Experience' },
    { icon: Users, value: '200+', label: 'Global Buyers Served' },
    { icon: Factory, value: '5,000+', label: 'Factories in Network' },
    { icon: PackageCheck, value: '50,000+', label: 'Inspections Completed' },
  ]
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Your Trusted Partner in China</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">With over a decade of experience, we have built the expertise and network to source successfully.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((tp, i) => (
            <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mx-auto mb-4">
                <tp.icon className="w-6 h-6 text-navy" />
              </div>
              <div className="text-3xl font-bold text-navy mb-1">{tp.value}</div>
              <div className="text-text-secondary text-sm">{tp.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductsPreviewSection() {
  const categories = [
    { icon: Factory, name: 'Electronics & Components' },
    { icon: PackageCheck, name: 'Home & Kitchen Products' },
    { icon: ShieldCheck, name: 'Textiles & Apparel' },
    { icon: Search, name: 'Industrial Machinery' },
    { icon: Ship, name: 'Packaging & Materials' },
    { icon: Award, name: 'Sports & Outdoor Gear' },
  ]
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">What We Source</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Products We Help You Source</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">From consumer electronics to industrial equipment, we have experience across dozens of product categories.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className="bg-surface rounded-xl p-6 text-center hover:bg-navy hover:text-white transition-colors group cursor-pointer">
              <cat.icon className="w-8 h-8 text-navy group-hover:text-gold transition-colors mx-auto mb-3" />
              <span className="text-sm font-medium">{cat.name}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products-we-source" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors">
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function CaseStudiesPreviewSection() {
  const cases = [
    { title: 'Consumer Electronics Brand', result: 'Reduced unit cost by 18% while improving quality', desc: 'Helped a European electronics brand switch suppliers and implement QC protocols.' },
    { title: 'Home Goods Importer', result: 'Launched 3 new product lines in 6 months', desc: 'Sourced kitchenware, textiles, and home decor from 5 verified factories.' },
    { title: 'Industrial Parts Distributor', result: 'Achieved 99.2% quality acceptance rate', desc: 'Established a multi-factory sourcing network with rigorous inspection protocols.' },
  ]
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Success Stories</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">Real results from real clients who source through SSourcing China.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((cs, i) => (
            <div key={i} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="text-gold font-bold text-sm mb-3">CASE STUDY</div>
              <h3 className="text-lg font-bold text-navy mb-2">{cs.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">{cs.desc}</p>
              <div className="bg-surface rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 text-navy font-semibold text-sm">
                  <Star className="w-4 h-4 text-gold fill-gold" />{cs.result}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/case-studies" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [open, setOpen] = useState(null)
  const faqs = [
    { q: 'How much do your sourcing services cost?', a: 'Our pricing depends on the scope of your project. We offer transparent, fixed-fee and commission-based models. Contact us for a free quote tailored to your needs.' },
    { q: 'How do you verify suppliers and factories?', a: 'Our local team conducts on-site factory audits, checking business licenses, production capacity, quality management systems, certifications, and financial records. We also verify trade history and client references.' },
    { q: 'Do you handle small orders or only large volumes?', a: 'We work with both small businesses and large enterprises. While minimum order quantities (MOQs) depend on the supplier, we can often negotiate lower MOQs on your behalf.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier identification typically takes 1-2 weeks. Full sourcing, including factory audits, sampling, and negotiation, usually takes 3-6 weeks depending on product complexity.' },
    { q: 'What if there are quality issues with my order?', a: 'Our quality control inspections are designed to catch issues before shipment. If problems arise, we work with the supplier to resolve them — including rework, replacement, or refund as appropriate.' },
  ]
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
              <button className="w-full flex items-center justify-between p-5 text-left hover:bg-surface transition-colors" onClick={() => setOpen(open === i ? null : i)}>
                <span className="font-semibold text-navy pr-4">{faq.q}</span>
                <ChevronRight className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${open === i ? 'rotate-90' : ''}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5"><p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Sourcing from China?</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Tell us what you need, and we'll find the right supplier. No obligation, no hidden fees — just a clear plan to get your products manufactured.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base">
          Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
