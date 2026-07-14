import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, CheckCircle,
  Users, Globe, Award, TrendingUp, ArrowRight, Star, HelpCircle
} from 'lucide-react'

const services = [
  { id: 'supplier-sourcing', icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget.' },
  { id: 'factory-verification', icon: ShieldCheck, title: 'Factory Verification', desc: 'On-site audits to verify production capacity, certifications, and business legitimacy.' },
  { id: 'quality-inspection', icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-shipment, during-production, and container loading inspections with detailed reports.' },
  { id: 'production-followup', icon: Factory, title: 'Production Follow-up', desc: 'Regular factory visits and progress updates to keep your order on schedule.' },
  { id: 'shipping-coordination', icon: Ship, title: 'Shipping & Logistics', desc: 'End-to-end freight coordination from factory door to your warehouse.' },
  { id: 'negotiation', icon: TrendingUp, title: 'Price Negotiation', desc: 'Leverage our local expertise to secure competitive pricing and favorable terms.' },
]

const processSteps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'We Source & Shortlist', desc: 'Our team identifies 3–5 qualified suppliers and presents detailed comparisons.' },
  { step: '03', title: 'Factory Verification', desc: 'We visit and audit the top candidates to confirm quality and reliability.' },
  { step: '04', title: 'Sample & Negotiation', desc: 'We arrange samples, negotiate pricing, and finalize terms on your behalf.' },
  { step: '05', title: 'Production & QC', desc: 'We monitor production milestones and conduct inspections before shipment.' },
  { step: '06', title: 'Ship to Your Door', desc: 'We coordinate logistics and documentation for smooth delivery worldwide.' },
]

const products = [
  'Electronics & Components', 'Home & Garden', 'Textiles & Apparel',
  'Industrial Equipment', 'Auto Parts', 'Packaging Materials',
  'Furniture', 'Building Materials', 'Consumer Goods', 'Health & Beauty',
  'Toys & Games', 'Sports & Outdoors'
]

const problems = [
  { title: 'Unreliable Suppliers', desc: 'Tired of suppliers who disappear after payment or deliver substandard goods? We verify every factory before you commit.' },
  { title: 'Quality Issues', desc: 'Receiving defective products costs time and money. Our QC inspections catch problems before shipping.' },
  { title: 'Communication Barriers', desc: 'Language and timezone gaps cause costly misunderstandings. We bridge the gap with bilingual project management.' },
  { title: 'Logistics Complexity', desc: 'Navigating Chinese export regulations and freight options is overwhelming. We handle it all.' },
]

const trustPoints = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Globe, value: '35+', label: 'Countries Reached' },
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: CheckCircle, value: '98%', label: 'Client Satisfaction' },
]

const faqs = [
  { q: 'What is a sourcing agent?', a: 'A sourcing agent acts as your local representative in China, finding suppliers, verifying factories, negotiating prices, inspecting quality, and coordinating shipments on your behalf.' },
  { q: 'How much does your service cost?', a: 'Our fees depend on the scope of work. Typically we charge a service fee or commission on order value. Contact us for a custom quote based on your project.' },
  { q: 'What is your minimum order requirement?', a: 'We work with orders of all sizes, though most factories have their own MOQs. We help you find suppliers that match your volume needs.' },
  { q: 'How long does the sourcing process take?', a: 'A typical sourcing project takes 2–4 weeks from requirement submission to supplier shortlist. Full production cycles vary by product complexity.' },
  { q: 'Do you handle shipping and customs?', a: 'Yes. We coordinate freight forwarding, export documentation, and can assist with customs clearance arrangements in your destination country.' },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-a3f9c1"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can buy with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-accent text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors text-base no-underline"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors text-base no-underline"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <point.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-bold text-primary">{point.value}</p>
                <p className="text-sm text-text-secondary mt-1">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Our Sourcing Services</h2>
            <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
              End-to-end support from supplier identification to delivery at your warehouse.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-card rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow">
                <service.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark no-underline transition-colors">
              View All Services <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">How Our Sourcing Process Works</h2>
            <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
              A clear, structured approach to finding and managing your Chinese suppliers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <span className="text-5xl font-bold text-accent/20">{step.step}</span>
                <h3 className="text-lg font-semibold text-primary mt-2">{step.title}</h3>
                <p className="text-text-secondary text-sm mt-2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Products We Source</h2>
            <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
              We source across a wide range of industries and product categories from China.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product} className="bg-card rounded-lg border border-border p-4 text-center hover:border-accent transition-colors">
                <p className="text-sm font-medium text-text-primary">{product}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark no-underline transition-colors">
              See Full Product List <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Problems We Solve</h2>
            <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
              Common challenges overseas buyers face when sourcing from China — and how we address them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-surface rounded-xl border border-border p-6 md:p-8">
                <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  {problem.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Client Success Stories</h2>
            <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
              Real results from real sourcing projects we have managed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Electronics Retailer, USA', result: 'Reduced unit cost by 22% with verified supplier', category: 'Electronics' },
              { title: 'Furniture Brand, Germany', result: 'Scaled from 1 container to 10 per month in 6 months', category: 'Furniture' },
              { title: 'Beauty Brand, Australia', result: 'Passed FDA compliance on first submission', category: 'Health & Beauty' },
            ].map((cs) => (
              <div key={cs.title} className="bg-card rounded-xl border border-border p-6">
                <span className="text-xs font-medium text-accent uppercase tracking-wide">{cs.category}</span>
                <h3 className="text-lg font-semibold text-primary mt-2">{cs.title}</h3>
                <p className="text-text-secondary text-sm mt-2 leading-relaxed">{cs.result}</p>
                <div className="flex items-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark no-underline transition-colors">
              View All Case Studies <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-surface rounded-lg border border-border p-5 group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-medium text-primary text-sm md:text-base pr-4">{faq.q}</span>
                  <HelpCircle className="w-5 h-5 text-text-muted flex-shrink-0 group-open:text-accent transition-colors" />
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Source from China with Confidence?
          </h2>
          <p className="mt-4 text-gray-200 text-lg max-w-2xl mx-auto">
            Tell us what you need and get a free, no-obligation sourcing proposal within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-accent text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors text-base no-underline"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
