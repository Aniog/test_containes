import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Shield, Search, ClipboardCheck, Truck, Factory, Users,
  CheckCircle, ArrowRight, Star, Globe, Award, Clock,
  ChevronDown, Package, FileCheck, Headphones
} from 'lucide-react'

const HomePage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-navy/5 text-navy text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Globe className="w-4 h-4" />
                Trusted by 500+ buyers worldwide
              </div>
              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="hero-subtitle" className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
                We help you find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can buy with confidence.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-orange text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-orange-dark transition text-center"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy px-6 py-3.5 rounded-lg font-semibold hover:bg-navy hover:text-white transition text-center"
                >
                  See How It Works
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  No upfront fees
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Response in 24h
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                data-strk-img-id="hero-main-img-a7f3b2"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China sourcing agent inspecting products in factory"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-navy">500+</p>
              <p className="text-sm text-slate-500 mt-1">Buyers Served</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy">2,000+</p>
              <p className="text-sm text-slate-500 mt-1">Suppliers Verified</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy">98%</p>
              <p className="text-sm text-slate-500 mt-1">On-Time Delivery</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy">12+</p>
              <p className="text-sm text-slate-500 mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              End-to-End Sourcing Services
            </h2>
            <p id="services-subtitle" className="mt-4 text-lg text-slate-600">
              From finding the right supplier to delivering goods at your door — we handle every step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Search, title: 'Supplier Sourcing', desc: 'We search, compare, and shortlist qualified manufacturers based on your product specs, MOQ, and budget.' },
              { icon: Factory, title: 'Factory Verification', desc: 'On-site factory audits to verify legitimacy, production capacity, certifications, and working conditions.' },
              { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-production, during-production, and pre-shipment inspections with detailed photo reports.' },
              { icon: Clock, title: 'Production Follow-up', desc: 'We monitor production timelines, communicate with factories, and keep you updated at every stage.' },
              { icon: Truck, title: 'Shipping & Logistics', desc: 'We coordinate freight forwarding, customs documentation, and delivery to your warehouse.' },
              { icon: Headphones, title: 'Ongoing Support', desc: 'Dedicated account manager for reorders, supplier negotiations, and issue resolution.' },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition group">
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange/10 transition">
                  <service.icon className="w-6 h-6 text-navy group-hover:text-orange transition" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-orange transition">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Our Sourcing Process
            </h2>
            <p id="process-subtitle" className="mt-4 text-lg text-slate-600">
              A proven 5-step process to get you from product idea to delivered goods.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Share Requirements', desc: 'Tell us what you need — product specs, quantity, budget, timeline.' },
              { step: '02', title: 'Supplier Matching', desc: 'We find and vet 3-5 qualified suppliers for your review.' },
              { step: '03', title: 'Samples & Negotiation', desc: 'We arrange samples, negotiate pricing, and finalize terms.' },
              { step: '04', title: 'Production & QC', desc: 'We monitor production and conduct quality inspections.' },
              { step: '05', title: 'Shipping & Delivery', desc: 'We handle logistics and deliver to your destination.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-orange transition">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Products We Source
            </h2>
            <p id="products-subtitle" className="mt-4 text-lg text-slate-600">
              We source across 50+ product categories from China's top manufacturing regions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Electronics & Components',
              'Home & Garden',
              'Apparel & Textiles',
              'Auto Parts & Accessories',
              'Machinery & Equipment',
              'Packaging & Printing',
              'Health & Beauty',
              'Sports & Outdoors',
              'Furniture & Decor',
              'Toys & Baby Products',
              'Building Materials',
              'Food & Beverage Equipment',
            ].map((cat, i) => (
              <div key={i} className="bg-slate-50 rounded-lg p-4 text-center border border-slate-100 hover:border-orange/30 hover:bg-orange/5 transition">
                <p className="text-sm font-medium text-slate-700">{cat}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-orange transition">
              See All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="problems-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Problems We Solve for Buyers
              </h2>
              <p id="problems-subtitle" className="mt-4 text-lg text-slate-600">
                Sourcing from China is complex. We eliminate the risks and headaches so you can focus on growing your business.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Finding trustworthy suppliers among thousands of options',
                  'Language barriers and cultural differences in negotiations',
                  'Quality inconsistencies between samples and bulk orders',
                  'Lack of visibility into production progress',
                  'Complex shipping, customs, and documentation',
                  'Scams, fraud, and unreliable trading companies',
                ].map((problem, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                data-strk-img-id="problems-img-c4d8e1"
                data-strk-img="[problems-subtitle] [problems-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality control inspection in Chinese factory"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="trust-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Why Buyers Trust SSourcing China
            </h2>
            <p id="trust-subtitle" className="mt-4 text-lg text-slate-600">
              We combine local expertise with international standards to deliver results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Verified Suppliers Only', desc: 'Every supplier goes through our multi-step verification process before being recommended.' },
              { icon: Award, title: 'Bilingual Team', desc: 'Native Chinese speakers with fluent English ensure nothing gets lost in translation.' },
              { icon: Globe, title: 'On-the-Ground Presence', desc: 'Our team is based in China's key manufacturing hubs — Guangzhou, Shenzhen, Yiwu, and more.' },
              { icon: FileCheck, title: 'Transparent Reporting', desc: 'Detailed inspection reports with photos, measurements, and defect analysis for every order.' },
              { icon: Package, title: 'No Hidden Fees', desc: 'Clear pricing structure with no surprises. You know exactly what you pay for.' },
              { icon: Users, title: 'Dedicated Account Manager', desc: 'One point of contact who knows your business, products, and quality standards.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl border border-slate-100 hover:border-orange/20 transition">
                <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="cases-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Client Success Stories
            </h2>
            <p id="cases-subtitle" className="mt-4 text-lg text-slate-600">
              See how we've helped buyers source products from China successfully.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'LED Lighting for US Retailer', result: '40% cost reduction vs. previous supplier', category: 'Electronics' },
              { title: 'Custom Furniture for EU Brand', result: 'Delivered 2,000 units with 99.2% pass rate', category: 'Furniture' },
              { title: 'Packaging for Australian FMCG', result: 'Reduced lead time from 60 to 35 days', category: 'Packaging' },
            ].map((study, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
                <span className="inline-block bg-navy/10 text-navy text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {study.category}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{study.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{study.result}</p>
                <Link to="/case-studies" className="text-sm text-orange font-medium hover:text-orange-dark transition">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-orange transition">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'What is a sourcing agent and why do I need one?', a: 'A sourcing agent acts as your local representative in China. We find suppliers, negotiate prices, verify factories, inspect quality, and manage logistics — saving you time, money, and risk.' },
              { q: 'How much does your service cost?', a: 'Our fees depend on the scope of work. Typically, we charge a service fee of 5-8% of the order value, or a fixed project fee for specific tasks like factory audits or inspections. We provide a clear quote upfront.' },
              { q: 'What is your minimum order requirement?', a: 'We work with orders starting from $5,000 FOB value. For smaller orders, we can discuss consolidation options or connect you with suitable trading companies.' },
              { q: 'How do you verify suppliers?', a: 'Our verification includes business license checks, on-site factory visits, production capacity assessment, quality system review, and reference checks with existing clients.' },
              { q: 'Can you help with product customization and OEM/ODM?', a: 'Yes. We work with factories that offer OEM and ODM services. We can help with product design, mold development, packaging customization, and private labeling.' },
            ].map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-medium text-slate-900">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Source from China with Confidence?
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Tell us what you're looking for and get a free sourcing plan within 24 hours. No commitment required.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-dark transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
