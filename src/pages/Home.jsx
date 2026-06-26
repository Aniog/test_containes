import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import SectionHeading from '@/components/shared/SectionHeading'
import CTA from '@/components/shared/CTA'
import { CheckCircle, Users, Award, Clock, Shield, Truck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    document.title = 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China'
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    return cleanup
  }, [])

  const services = [
    { icon: Users, title: 'Supplier Sourcing', desc: 'Identify and qualify manufacturers matching your specifications and volume requirements.' },
    { icon: Shield, title: 'Factory Verification', desc: 'On-site audits, business license checks, and capability assessments.' },
    { icon: CheckCircle, title: 'Quality Control', desc: 'Pre-shipment inspections, in-line checks, and sample verification.' },
    { icon: Clock, title: 'Production Monitoring', desc: 'Regular progress updates and timeline management throughout manufacturing.' },
    { icon: Truck, title: 'Shipping Coordination', desc: 'Freight booking, documentation, and logistics management to your destination.' },
  ]

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capabilities',
    'Quality issues discovered only after goods arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and documentation requirements',
    'Risk of payment to unverified suppliers',
  ]

  const trustPoints = [
    { number: '850+', label: 'Projects Completed' },
    { number: '320', label: 'Active Buyers' },
    { number: '12', label: 'Years Experience' },
    { number: '18', label: 'Industries Served' },
  ]

  const caseStudies = [
    { id: 'cs1', title: 'Kitchen Appliance Brand', result: 'Reduced defect rate from 8% to 1.2%', category: 'Home & Kitchen' },
    { id: 'cs2', title: 'Industrial Equipment Importer', result: 'Secured 3 qualified suppliers in 6 weeks', category: 'Industrial' },
    { id: 'cs3', title: 'Consumer Electronics Retailer', result: 'Cut lead time by 22% through process optimization', category: 'Electronics' },
  ]

  const faqs = [
    { q: 'How do you charge for your services?', a: 'We work on a transparent fee structure based on project scope. Most clients pay a combination of a project management fee and a percentage of order value. We provide a detailed quote before any work begins.' },
    { q: 'Do you guarantee supplier performance?', a: 'We cannot guarantee supplier performance as we are an intermediary. However, we conduct thorough verification and implement quality controls to minimize risk. We work only with suppliers who meet our standards.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier identification typically takes 2-4 weeks. Full verification, sampling, and first production run can take 8-16 weeks depending on product complexity and order size.' },
    { q: 'Can you help with small orders?', a: 'We focus on buyers with meaningful order volumes. Minimum order values vary by product category. Contact us to discuss your specific requirements.' },
    { q: 'Do you handle payments to suppliers?', a: 'We do not handle payments directly. We provide guidance on secure payment methods and can coordinate with your bank or trade finance provider.' },
  ]

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="hero relative py-20 md:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-home"
          data-strk-bg="China factory production line manufacturing"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10">
            We help overseas companies find reliable Chinese suppliers, verify factories, control quality, and manage production and shipping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-base px-8">
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-base px-8">
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-400">No obligation. Response within 24 hours.</p>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-slate-200 bg-slate-50 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-600">
          <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> ISO 9001 aligned processes</div>
          <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> On-site factory audits</div>
          <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> English-speaking team</div>
          <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> 12+ years in operation</div>
        </div>
      </div>

      {/* Services */}
      <section className="section max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="What We Do" 
          subtitle="End-to-end support for buyers sourcing from China. We act as your local team on the ground."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center mb-5">
                <service.icon className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
          <div className="service-card bg-slate-900 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-3">Need something specific?</h3>
              <p className="text-slate-300">We also provide custom services including product development support, packaging compliance, and private label coordination.</p>
            </div>
            <Link to="/services" className="text-white underline mt-6 inline-block">View all services →</Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading 
            title="Our Sourcing Process" 
            subtitle="A structured approach designed to reduce risk and improve outcomes at each stage."
          />
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { num: '01', title: 'Requirements', desc: 'We document your specs, target price, volume, and timeline.' },
              { num: '02', title: 'Supplier Search', desc: 'We identify 5-8 qualified factories from our database and network.' },
              { num: '03', title: 'Verification', desc: 'We conduct on-site audits and background checks on shortlisted suppliers.' },
              { num: '04', title: 'Sampling & QC', desc: 'We manage samples, negotiate terms, and set quality checkpoints.' },
              { num: '05', title: 'Production & Ship', desc: 'We monitor production and coordinate inspection and logistics.' },
            ].map((step, idx) => (
              <div key={idx} className="process-step bg-white p-6 rounded-lg border border-slate-200">
                <div className="text-3xl font-semibold text-slate-300 mb-3">{step.num}</div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/how-it-works" className="text-sm font-medium text-slate-700 hover:text-slate-900 underline">Read detailed process →</Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Products We Source" 
          subtitle="We work across multiple categories with buyers who have clear specifications and realistic volume expectations."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'Electronics & Components', 'Home Appliances', 'Kitchenware & Cookware', 'Furniture & Home Decor',
            'Apparel & Textiles', 'Industrial Machinery', 'Automotive Parts', 'Packaging Materials',
            'Consumer Electronics', 'Tools & Hardware', 'Lighting & Electrical', 'Sports & Outdoor'
          ].map((cat, idx) => (
            <Link key={idx} to="/products" className="product-card text-sm hover:bg-slate-50">
              {cat}
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/products" className="text-sm font-medium underline">See full product categories and examples →</Link>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Common Sourcing Challenges We Address</h2>
            <p className="text-slate-300 text-lg">Practical solutions for buyers who have experienced these issues before.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex gap-3 p-5 bg-slate-800 rounded-lg">
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-200">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points / Stats */}
      <section className="section max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustPoints.map((stat, idx) => (
            <div key={idx}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-sm text-slate-500 max-w-2xl mx-auto">
          These numbers reflect completed projects and active client relationships over our 12 years of operation. We do not claim to be the largest or fastest.
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="Recent Case Studies" subtitle="Examples of projects we have completed for international buyers." />
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <Link key={idx} to="/case-studies" className="case-card group">
                <img
                  data-strk-img-id={`home-case-${cs.id}`}
                  data-strk-img={`home-case-${cs.id}-title home-case-${cs.id}-category China factory production quality control`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  alt={cs.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <div id={`home-case-${cs.id}-category`} className="text-xs text-slate-500 mb-1">{cs.category}</div>
                  <h4 id={`home-case-${cs.id}-title`} className="font-semibold mb-2 group-hover:underline">{cs.title}</h4>
                  <p className="text-sm text-slate-600">{cs.result}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/case-studies" className="text-sm font-medium underline">View all case studies →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section max-w-4xl mx-auto px-6">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="border border-slate-200 rounded-lg p-5 group">
              <summary className="faq-question cursor-pointer list-none flex justify-between items-center">
                {faq.q}
                <span className="text-slate-400 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="faq-answer mt-3 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-8 text-sm">
          <Link to="/contact" className="underline">Still have questions? Contact us →</Link>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold mb-3">Start Your Sourcing Project</h2>
            <p className="text-slate-600">Tell us about your requirements. We will respond within one business day.</p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <CTA compact />
            <div className="mt-8">
              <form action="/contact" method="GET">
                <Button asChild size="lg" className="w-full">
                  <Link to="/contact">Get a Free Sourcing Quote</Link>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
