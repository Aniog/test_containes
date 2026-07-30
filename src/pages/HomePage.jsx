import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, CheckCircle2,
  Users, Globe, Award, TrendingUp, ChevronRight, Star
} from 'lucide-react'
import CTASection from '@/components/CTASection'

const services = [
  { id: 'supplier-sourcing', icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget requirements.' },
  { id: 'factory-verification', icon: ShieldCheck, title: 'Factory Verification', desc: 'On-site factory audits covering production capacity, certifications, equipment, and business legitimacy.' },
  { id: 'quality-inspection', icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-shipment, during-production, and container loading inspections with detailed photo reports.' },
  { id: 'production-followup', icon: Factory, title: 'Production Follow-up', desc: 'Regular factory visits and progress updates to keep your order on schedule and within spec.' },
  { id: 'shipping-coordination', icon: Ship, title: 'Shipping & Logistics', desc: 'End-to-end freight coordination including customs documentation, consolidation, and delivery tracking.' },
]

const processSteps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'Supplier Matching', desc: 'We research and shortlist 3-5 verified suppliers that match your criteria.' },
  { step: '03', title: 'Samples & Negotiation', desc: 'We coordinate samples, negotiate pricing, and finalize terms on your behalf.' },
  { step: '04', title: 'Production & QC', desc: 'We monitor production milestones and conduct quality inspections before shipment.' },
  { step: '05', title: 'Shipping & Delivery', desc: 'We arrange logistics and provide tracking until goods arrive at your warehouse.' },
]

const products = [
  'Electronics & Components', 'Home & Garden', 'Textiles & Apparel',
  'Industrial Equipment', 'Packaging Materials', 'Auto Parts',
  'Building Materials', 'Consumer Goods', 'Health & Beauty',
]

const problems = [
  'Unreliable suppliers who disappear after payment',
  'Quality issues discovered only after goods arrive',
  'Communication barriers and timezone differences',
  'Lack of transparency in production progress',
  'Complex shipping and customs procedures',
  'Difficulty verifying factory legitimacy remotely',
]

const stats = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Globe, value: '35+', label: 'Countries Reached' },
  { icon: Award, value: '12+', label: 'Years Experience' },
  { icon: TrendingUp, value: '98%', label: 'On-Time Delivery' },
]

const caseStudies = [
  { id: 'case-electronics', title: 'Consumer Electronics', client: 'US E-commerce Brand', result: 'Reduced unit cost by 22% while improving quality consistency across 50,000 units.', imgId: 'case-electronics-img-a3f2c1' },
  { id: 'case-furniture', title: 'Custom Furniture', client: 'European Retailer', result: 'Sourced 3 verified manufacturers and delivered first container in 45 days.', imgId: 'case-furniture-img-b7d4e2' },
  { id: 'case-packaging', title: 'Eco Packaging', client: 'Australian Brand', result: 'Found certified sustainable packaging supplier with 30% cost savings vs. local options.', imgId: 'case-packaging-img-c9a1f3' },
]

const faqs = [
  { q: 'What is the minimum order quantity (MOQ)?', a: 'MOQ varies by product and supplier. We work with factories that accommodate orders from 100 to 100,000+ units. We will match you with suppliers appropriate for your volume.' },
  { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits checking business licenses, production capacity, quality systems, worker conditions, and export experience. We provide a detailed verification report.' },
  { q: 'What does your service cost?', a: 'Our sourcing consultation is free. Service fees depend on the scope — typically a percentage of order value or a flat project fee. We provide a clear quote before you commit.' },
  { q: 'How long does the sourcing process take?', a: 'From initial brief to supplier shortlist typically takes 5-10 business days. Full cycle from sourcing to delivery ranges from 30-90 days depending on product complexity.' },
  { q: 'Do you handle shipping and customs?', a: 'Yes. We coordinate freight forwarding, customs documentation, and delivery logistics. We work with trusted forwarders for sea, air, and rail shipments.' },
]

export default function HomePage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-6">
                Trusted by 500+ Global Buyers
              </span>
              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="hero-subtitle" className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can buy with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-orange text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-dark transition-colors text-center"
                >
                  Get a Free Sourcing Quote
                </Link>
                <Link
                  to="/how-it-works"
                  className="border-2 border-navy text-navy font-semibold px-8 py-4 rounded-lg hover:bg-navy hover:text-white transition-colors text-center"
                >
                  How It Works
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                data-strk-img-id="hero-factory-img-8f2a9c"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory sourcing and quality inspection"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-navy mx-auto mb-2" />
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              End-to-End Sourcing Services
            </h2>
            <p id="services-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
              From finding the right supplier to delivering goods at your door — we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <service.icon className="w-10 h-10 text-navy mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-1 text-navy font-semibold hover:text-navy-light transition-colors">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              How Our Sourcing Process Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A clear, structured approach that takes you from product idea to delivered goods.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-navy font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                Products We Source
              </h2>
              <p id="products-subtitle" className="text-lg text-slate-600 mb-8">
                We source across a wide range of product categories from China's manufacturing hubs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {products.map((product) => (
                  <div key={product} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <span className="text-slate-700 text-sm">{product}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-1 text-navy font-semibold mt-8 hover:text-navy-light transition-colors"
              >
                See Full Product List <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <img
                data-strk-img-id="products-warehouse-img-d4e5f6"
                data-strk-img="[products-subtitle] [products-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China manufacturing warehouse with products"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Problems We Solve for Buyers
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Sourcing from China without local support exposes you to common risks. We eliminate them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((problem) => (
              <div key={problem} className="bg-white rounded-lg p-5 border border-slate-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="cases-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Client Success Stories
            </h2>
            <p id="cases-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from real sourcing projects we have managed for global buyers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <img
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.id}-result] [${cs.id}-title] [cases-subtitle] [cases-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cs.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-xs font-medium text-navy bg-navy/10 px-2 py-1 rounded-full">{cs.client}</span>
                  <h3 id={`${cs.id}-title`} className="text-lg font-semibold text-slate-900 mt-3 mb-2">{cs.title}</h3>
                  <p id={`${cs.id}-result`} className="text-slate-600 text-sm">{cs.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-1 text-navy font-semibold hover:text-navy-light transition-colors">
              View All Case Studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-slate-200 rounded-lg group">
                <summary className="px-6 py-4 cursor-pointer font-medium text-slate-900 hover:text-navy transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-4 text-slate-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-6">
            "SSourcing China helped us find a reliable electronics manufacturer in Shenzhen. Their factory audit saved us from a supplier with falsified certifications. Highly recommended for any serious buyer."
          </blockquote>
          <div className="text-slate-900 font-semibold">Mark Thompson</div>
          <div className="text-slate-500 text-sm">Procurement Director, TechGear USA</div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
