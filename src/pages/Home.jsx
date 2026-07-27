import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Shield, Users, Award, Clock, Truck, Search } from 'lucide-react'
import InquiryForm from '../components/InquiryForm'
import CTASection from '../components/CTASection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const services = [
    { icon: Search, title: 'Supplier Sourcing', desc: 'Identify and qualify manufacturers matching your product specifications and volume requirements.' },
    { icon: Shield, title: 'Factory Verification', desc: 'On-site audits to confirm legitimacy, production capacity, and compliance standards.' },
    { icon: Check, title: 'Quality Inspection', desc: 'Pre-shipment and in-process inspections to ensure products meet your quality standards.' },
    { icon: Clock, title: 'Production Monitoring', desc: 'Regular progress updates and milestone tracking throughout the manufacturing cycle.' },
    { icon: Truck, title: 'Shipping Coordination', desc: 'Freight booking, documentation, and logistics management from factory to destination.' },
  ]

  const processSteps = [
    { num: '01', title: 'Requirement Analysis', desc: 'We review your product specifications, target price, and quality requirements.' },
    { num: '02', title: 'Supplier Identification', desc: 'We shortlist 3-5 qualified factories based on capability, pricing, and reliability.' },
    { num: '03', title: 'Verification & Sampling', desc: 'Factory audits and sample evaluation before you commit to production.' },
    { num: '04', title: 'Order Management', desc: 'Contract negotiation, production monitoring, and quality control checkpoints.' },
    { num: '05', title: 'Logistics & Delivery', desc: 'Shipping arrangement, customs documentation, and final delivery coordination.' },
  ]

  const productCategories = [
    { title: 'Consumer Electronics', items: 'Smart home devices, audio equipment, accessories' },
    { title: 'Home & Garden', items: 'Furniture, kitchenware, lighting, decor' },
    { title: 'Fashion & Apparel', items: 'Clothing, footwear, bags, accessories' },
    { title: 'Industrial Equipment', items: 'Machinery parts, tools, safety equipment' },
    { title: 'Automotive Parts', items: 'Aftermarket components, accessories' },
    { title: 'Toys & Games', items: 'Educational toys, outdoor play, board games' },
  ]

  const problems = [
    'Difficulty finding factories that meet minimum order quantities and quality standards',
    'Uncertainty about supplier legitimacy and actual production capabilities',
    'Quality issues discovered only after products arrive at your warehouse',
    'Communication barriers leading to misunderstandings on specifications',
    'Complex logistics and documentation requirements for international shipping',
    'No visibility into production progress until it is too late to make changes',
  ]

  const trustPoints = [
    { number: '10+', label: 'Years in Operation' },
    { number: '850+', label: 'Projects Completed' },
    { number: '420+', label: 'Verified Suppliers' },
    { number: '38', label: 'Countries Served' },
  ]

  const caseStudies = [
    {
      client: 'HomeGoods Retailer, USA',
      product: 'Ceramic Tableware',
      result: 'Reduced defect rate from 12% to under 2% through improved QC protocols.',
      savings: '18% cost reduction',
    },
    {
      client: 'E-commerce Brand, Germany',
      product: 'Kitchen Appliances',
      result: 'Successfully sourced 3 new product lines with 4-week lead time from inquiry to first shipment.',
      savings: '22% below target cost',
    },
    {
      client: 'Hardware Distributor, Australia',
      product: 'Hand Tools',
      result: 'Established ongoing supply relationship with verified factory producing 15,000 units monthly.',
      savings: 'Consistent quality',
    },
  ]

  const faqs = [
    { q: 'What is the minimum order quantity you can handle?', a: 'We work with clients across a range of volumes. Many factories we partner with accept orders starting from 500-1000 units, though this varies by product category.' },
    { q: 'How do you verify that a factory is legitimate?', a: 'We conduct on-site visits, review business licenses, inspect production equipment, and speak with multiple staff members. We also cross-check with local business registries.' },
    { q: 'What happens if quality issues are found during inspection?', a: 'We document all issues with photos and detailed reports. You decide whether to accept, request rework, or reject the shipment. We support you in negotiating resolutions with the supplier.' },
    { q: 'Do you charge a commission on orders?', a: 'Our fees are transparent and agreed upfront. We typically work on a project fee or percentage basis depending on order complexity and volume. There are no hidden markups on product costs.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier shortlist is typically delivered within 7-10 business days. From inquiry to first shipment, most projects take 8-16 weeks depending on product complexity and production schedule.' },
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-16 pb-20 md:pt-20 md:pb-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm mb-6 tracking-wide">EST. 2014 • YIWU, CHINA</div>
          <h1 id="hero-title" className="text-4xl md:text-6xl font-semibold tracking-tighter leading-none mb-6">
            China Sourcing Agent<br />for Global Buyers
          </h1>
          <p id="hero-subtitle" className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10">
            We help overseas companies find reliable Chinese manufacturers, verify production capabilities, 
            control quality, and manage logistics from factory to destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-slate-900 font-medium rounded-md hover:bg-slate-100 transition-colors"
            >
              Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/how-it-works" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 text-white font-medium rounded-md hover:bg-white/5 transition-colors"
            >
              See How It Works
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">No upfront payment required for initial consultation.</p>
        </div>
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-factory"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
      </section>

      {/* Trust Bar */}
      <section className="border-b border-slate-200 bg-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-12 gap-y-4 text-center">
            {trustPoints.map((point, idx) => (
              <div key={idx}>
                <div className="text-2xl font-semibold text-slate-900">{point.number}</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 mt-0.5">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[2px] text-slate-500 mb-3">WHAT WE DO</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">End-to-End Sourcing Support</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">We manage the entire sourcing process so you can focus on your business.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            const serviceId = `service-${idx}`
            return (
              <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 transition-colors">
                <img 
                  className="w-full h-40 object-cover bg-slate-100"
                  data-strk-img-id={`service-img-${idx}`}
                  data-strk-img={`[${serviceId}-desc] [${serviceId}-title] factory inspection quality control`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={service.title}
                />
                <div className="p-7">
                  <div className="w-11 h-11 bg-slate-100 rounded-md flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-slate-700" />
                  </div>
                  <h3 id={`${serviceId}-title`} className="font-semibold text-lg text-slate-900 mb-2.5">{service.title}</h3>
                  <p id={`${serviceId}-desc`} className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center text-sm font-medium text-slate-900 hover:underline">
            View all services <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[2px] text-slate-500 mb-3">OUR APPROACH</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">The Sourcing Process</h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">A structured, transparent process from initial inquiry to final delivery.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-slate-200">
                <div className="text-xs font-mono text-slate-400 mb-3">{step.num}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center text-sm font-medium text-slate-900 hover:underline">
              Learn more about our process <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="text-xs tracking-[2px] text-slate-500 mb-3">PRODUCT EXPERTISE</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Products We Source</h2>
          </div>
          <Link to="/products" className="text-sm font-medium text-slate-900 hover:underline inline-flex items-center">
            Browse all categories <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {productCategories.map((cat, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-1.5">{cat.title}</h3>
              <p className="text-sm text-slate-600">{cat.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white border-y border-slate-200 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[2px] text-slate-500 mb-3">COMMON CHALLENGES</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Problems We Help Solve</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex gap-3 text-slate-700">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                <p className="text-[15px] leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credentials */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[2px] text-slate-500 mb-3">WHY BUYERS WORK WITH US</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Built on Transparency and Results</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-slate-200 rounded-lg p-7">
            <Award className="w-8 h-8 text-slate-700 mb-4" />
            <h3 className="font-semibold mb-2">No Hidden Markups</h3>
            <p className="text-sm text-slate-600">You receive the factory price. Our service fee is clearly stated upfront.</p>
          </div>
          <div className="border border-slate-200 rounded-lg p-7">
            <Users className="w-8 h-8 text-slate-700 mb-4" />
            <h3 className="font-semibold mb-2">Direct Factory Access</h3>
            <p className="text-sm text-slate-600">We introduce you to manufacturers. You maintain the relationship long-term.</p>
          </div>
          <div className="border border-slate-200 rounded-lg p-7">
            <Shield className="w-8 h-8 text-slate-700 mb-4" />
            <h3 className="font-semibold mb-2">Documented Processes</h3>
            <p className="text-sm text-slate-600">Every inspection, audit, and milestone is recorded and shared with you.</p>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="text-xs tracking-[2px] text-slate-500 mb-3">REAL RESULTS</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Recent Projects</h2>
            </div>
            <Link to="/case-studies" className="text-sm font-medium text-slate-900 hover:underline inline-flex items-center">
              View all case studies <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => {
              const caseId = `case-${idx}`
              return (
                <div key={idx} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                  <img 
                    className="w-full h-36 object-cover bg-slate-100"
                    data-strk-img-id={`case-img-${idx}`}
                    data-strk-img={`[${caseId}-product] [${caseId}-client] factory production quality control`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.product}
                  />
                  <div className="p-7">
                    <div id={`${caseId}-client`} className="text-xs uppercase tracking-widest text-slate-500 mb-3">{study.client}</div>
                    <div id={`${caseId}-product`} className="font-semibold text-lg text-slate-900 mb-1">{study.product}</div>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">{study.result}</p>
                    <div className="text-sm font-medium text-emerald-700">{study.savings}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[2px] text-slate-500 mb-3">QUESTIONS</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border border-slate-200 rounded-lg px-6 py-4">
              <summary className="font-medium text-slate-900 cursor-pointer list-none flex justify-between items-center">
                {faq.q}
                <span className="text-slate-400 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed pr-6">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/contact" className="text-sm font-medium text-slate-900 hover:underline">Still have questions? Contact us →</Link>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-slate-50 py-16 md:py-20 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <InquiryForm />
        </div>
      </section>

      <CTASection />
    </div>
  )
}

export default Home
