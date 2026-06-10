import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle2, Users, Globe, Award, ArrowRight,
  Package, Headphones, BarChart3, Clock
} from 'lucide-react'

const services = [
  { id: 'supplier-sourcing', icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist verified suppliers that match your product specs, MOQ, and budget.' },
  { id: 'factory-verification', icon: Factory, title: 'Factory Verification', desc: 'On-site factory audits to confirm production capacity, certifications, and business legitimacy.' },
  { id: 'quality-inspection', icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-shipment, during-production, and container loading inspections with detailed reports.' },
  { id: 'production-followup', icon: BarChart3, title: 'Production Follow-up', desc: 'Regular progress updates, timeline tracking, and issue resolution throughout manufacturing.' },
  { id: 'shipping-coordination', icon: Truck, title: 'Shipping & Logistics', desc: 'End-to-end freight coordination including customs documentation and delivery tracking.' },
  { id: 'ongoing-support', icon: Headphones, title: 'Ongoing Support', desc: 'Dedicated account manager for continuous supplier management and reorder coordination.' },
]

const processSteps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'We Source & Verify', desc: 'Our team identifies suppliers, visits factories, and negotiates on your behalf.' },
  { step: '03', title: 'Sample & Approve', desc: 'We arrange samples, coordinate revisions, and get your final approval.' },
  { step: '04', title: 'Production & QC', desc: 'We monitor production milestones and conduct quality inspections.' },
  { step: '05', title: 'Ship & Deliver', desc: 'We handle logistics, customs paperwork, and delivery to your door.' },
]

const products = [
  'Electronics & Components', 'Textiles & Apparel', 'Home & Garden',
  'Industrial Equipment', 'Packaging Materials', 'Auto Parts',
  'Health & Beauty', 'Building Materials'
]

const problems = [
  { title: 'Language Barriers', desc: 'We handle all communication in Chinese with your suppliers.' },
  { title: 'Unreliable Suppliers', desc: 'We verify every factory before you place an order.' },
  { title: 'Quality Issues', desc: 'Our inspectors check goods before they leave China.' },
  { title: 'Shipping Confusion', desc: 'We manage freight, customs, and documentation.' },
  { title: 'Time Zone Gaps', desc: 'Our team works China hours so you don\'t have to.' },
  { title: 'Scam Risk', desc: 'We confirm business licenses and visit factories in person.' },
]

const stats = [
  { value: '500+', label: 'Verified Suppliers' },
  { value: '12+', label: 'Years Experience' },
  { value: '30+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
]

const faqs = [
  { q: 'What is a sourcing agent?', a: 'A sourcing agent acts as your representative in China, finding suppliers, negotiating prices, inspecting quality, and coordinating shipments on your behalf.' },
  { q: 'How much does your service cost?', a: 'Our fees depend on the scope of work. Typically we charge a service fee or commission on order value. Contact us for a custom quote based on your needs.' },
  { q: 'What is your minimum order requirement?', a: 'We work with orders of all sizes. However, most Chinese factories have their own MOQs which we can help negotiate down when possible.' },
  { q: 'How do you verify suppliers?', a: 'We conduct on-site factory visits, check business licenses, review production capacity, inspect quality systems, and verify export history.' },
  { q: 'How long does the sourcing process take?', a: 'Initial supplier identification takes 5-10 business days. The full process from sourcing to delivery typically takes 4-8 weeks depending on product complexity.' },
  { q: 'Can you help with existing supplier issues?', a: 'Yes. We can audit your current suppliers, resolve quality disputes, and help you find alternative sources if needed.' },
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
          data-strk-bg-id="hero-bg-9f3a2c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
              We help you find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
              End-to-End Sourcing Services
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              From finding the right supplier to delivering goods at your warehouse — we handle every step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center text-accent font-semibold hover:text-accent-hover transition-colors">
              View All Services <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
              How Our Sourcing Process Works
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              A clear, structured process that keeps you informed at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="relative text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-px bg-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                Products We Source
              </h2>
              <p className="mt-4 text-slate-600 text-lg">
                We source across a wide range of industries. If it's made in China, we can find it for you.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {products.map((product) => (
                  <div key={product} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-slate-700">{product}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/products"
                className="inline-flex items-center mt-8 text-accent font-semibold hover:text-accent-hover transition-colors"
              >
                See Full Product List <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                data-strk-img-id="products-showcase-4b7e1d"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Products sourced from China factories"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
              Problems We Solve
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Importing from China comes with real challenges. Here's how we address them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-slate-800 mb-2">{problem.title}</h3>
                <p className="text-sm text-slate-600">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Why Buyers Trust SSourcing China
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Local Team', desc: 'Native Chinese-speaking team based in major manufacturing hubs.' },
              { icon: Globe, title: 'Global Experience', desc: 'Serving buyers from 30+ countries across diverse industries.' },
              { icon: Award, title: 'Verified Network', desc: 'Pre-vetted supplier database built over 12+ years.' },
              { icon: Clock, title: 'Fast Response', desc: 'Same-day replies and real-time production updates.' },
            ].map((point) => (
              <div key={point.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <point.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-base font-semibold text-white mb-2">{point.title}</h3>
                <p className="text-sm text-slate-300">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
              Client Success Stories
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Real results from real sourcing projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 'case-electronics', title: 'Electronics Retailer, USA', result: 'Reduced unit cost by 35% with verified supplier switch', category: 'Electronics' },
              { id: 'case-furniture', title: 'Furniture Brand, Germany', result: 'Scaled from 1 container to 10/month with consistent quality', category: 'Furniture' },
              { id: 'case-apparel', title: 'Apparel Startup, UK', result: 'Launched private label line in 8 weeks from concept to delivery', category: 'Apparel' },
            ].map((cs) => (
              <div key={cs.id} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">{cs.category}</span>
                <h3 className="mt-4 text-lg font-semibold text-slate-800">{cs.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{cs.result}</p>
                <Link to="/case-studies" className="inline-flex items-center mt-4 text-sm text-accent font-medium hover:text-accent-hover transition-colors">
                  Read More <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white rounded-xl border border-slate-200 group">
                <summary className="px-6 py-4 cursor-pointer text-base font-medium text-slate-800 hover:text-primary transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Source from China?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Tell us what you need and get a free sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center mt-8 bg-white text-accent hover:bg-slate-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
