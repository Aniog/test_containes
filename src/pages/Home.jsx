import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Users, Award, Truck } from 'lucide-react'

const Home = () => {
  const services = [
    { title: 'Supplier Identification', desc: 'Find qualified manufacturers matching your product requirements.' },
    { title: 'Factory Verification', desc: 'On-site audits to confirm capabilities, capacity, and legitimacy.' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process inspections to ensure standards.' },
    { title: 'Production Monitoring', desc: 'Regular progress updates and milestone tracking.' },
    { title: 'Shipping Coordination', desc: 'Logistics management from factory to your destination.' },
    { title: 'Ongoing Support', desc: 'Communication and issue resolution throughout the process.' },
  ]

  const process = [
    { step: '01', title: 'Inquiry', desc: 'Share your product requirements and target specifications.' },
    { step: '02', title: 'Sourcing', desc: 'We identify and shortlist 3-5 qualified suppliers.' },
    { step: '03', title: 'Verification', desc: 'Factory audits and sample evaluation before selection.' },
    { step: '04', title: 'Production', desc: 'Order placement with ongoing quality monitoring.' },
    { step: '05', title: 'Inspection', desc: 'Final quality check before shipment authorization.' },
    { step: '06', title: 'Delivery', desc: 'Shipping coordination and documentation support.' },
  ]

  const products = [
    'Consumer Electronics & Components',
    'Home & Garden Products',
    'Apparel & Textiles',
    'Industrial Equipment & Parts',
    'Furniture & Furnishings',
    'Automotive Components',
    'Packaging Materials',
    'Medical & Healthcare Supplies',
  ]

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capacity',
    'Language and cultural barriers in supplier communication',
    'Quality issues discovered only after products arrive',
    'Complex logistics and documentation requirements',
    'Lack of visibility into production progress',
  ]

  const trustPoints = [
    { icon: Users, label: '200+ Clients Served' },
    { icon: Award, label: '500+ Factories Audited' },
    { icon: Truck, label: '98% On-Time Delivery' },
    { icon: CheckCircle, label: '12 Years Experience' },
  ]

  const caseStudies = [
    { client: 'European Retail Chain', result: 'Reduced sourcing time by 60% while maintaining quality standards across 3 product categories.' },
    { client: 'US Industrial Distributor', result: 'Identified and verified 2 new suppliers, achieving 22% cost reduction with improved lead times.' },
    { client: 'Australian E-commerce Brand', result: 'Established reliable supply chain for 15 SKUs with zero quality issues over 18 months.' },
  ]

  const faqs = [
    { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits covering production capability, quality systems, financial stability, and compliance documentation.' },
    { q: 'What is your inspection process?', a: 'We perform in-process checks during production and comprehensive pre-shipment inspections using AQL sampling standards.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier shortlist is typically delivered within 2-3 weeks. Full verification and order placement varies by product complexity.' },
    { q: 'Do you charge for sourcing services?', a: 'We offer a free initial consultation. Our service fees are transparent and discussed upfront based on project scope.' },
    { q: 'Which regions in China do you cover?', a: 'We work with suppliers across all major manufacturing regions including Guangdong, Zhejiang, Jiangsu, and Shandong provinces.' },
  ]

  return (
    <div>
      <section className="bg-[#F8FAFC] section-padding">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-[#475569] mb-8">
              We help overseas companies find reliable Chinese suppliers, verify factories, 
              manage quality control, and coordinate shipping with clear communication at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-lg">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="btn-secondary text-lg">
                See How It Works
              </Link>
            </div>
            <p className="text-sm text-[#64748B] mt-4">No obligation. Response within 24 hours.</p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[#E2E8F0]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <point.icon className="w-8 h-8 text-[#1E40AF] mb-3" />
                <span className="font-semibold text-lg">{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              End-to-end support for sourcing, quality assurance, and logistics.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card">
                <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-[#475569]">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>

      <section id="process" className="section-padding bg-[#F8FAFC]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Sourcing Process</h2>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              A structured approach that keeps you informed at every stage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <div key={index} className="card">
                <div className="text-[#1E40AF] font-mono text-sm mb-2">STEP {item.step}</div>
                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-[#475569]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="btn-secondary">Learn More About Our Process</Link>
          </div>
        </div>
      </section>

      <section id="products" className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Products We Source</h2>
              <p className="text-lg text-[#475569] mb-8">
                We work across diverse product categories with established supplier networks.
              </p>
              <Link to="/products" className="btn-primary">Browse Categories</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {products.map((product, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                  <CheckCircle className="w-5 h-5 text-[#059669] flex-shrink-0" />
                  <span className="text-sm">{product}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="problems" className="section-padding bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Problems We Solve</h2>
            <p className="text-lg text-[#475569]">
              Common challenges our clients face when sourcing from China.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-lg border border-[#E2E8F0]">
                <CheckCircle className="w-6 h-6 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-lg text-[#475569]">Results from recent client engagements.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="card">
                <div className="font-semibold text-lg mb-4">{study.client}</div>
                <p className="text-[#475569]">{study.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-secondary">View All Case Studies</Link>
          </div>
        </div>
      </section>

      <section id="faq" className="section-padding bg-[#F8FAFC]">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-[#475569]">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary">Still Have Questions? Contact Us</Link>
          </div>
        </div>
      </section>

      <section id="inquiry" className="section-padding">
        <div className="container max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Request a Free Sourcing Quote</h2>
            <p className="text-lg text-[#475569]">
              Tell us about your sourcing needs. We'll respond within 24 hours.
            </p>
          </div>
          <form className="card space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Thank you. Your inquiry has been submitted.'); }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" required />
              </div>
              <div>
                <label className="form-label">Company</label>
                <input type="text" className="form-input" required />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" required />
              </div>
              <div>
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-input" />
              </div>
            </div>
            <div>
              <label className="form-label">Product Category or Description</label>
              <input type="text" className="form-input" required />
            </div>
            <div>
              <label className="form-label">Estimated Annual Volume</label>
              <input type="text" className="form-input" placeholder="e.g., 5,000 units, $50,000+" />
            </div>
            <div>
              <label className="form-label">Additional Details</label>
              <textarea className="form-input min-h-[120px]" placeholder="Target price range, timeline, quality requirements, or other specifications..." />
            </div>
            <button type="submit" className="btn-primary w-full text-lg py-4">
              Submit Inquiry
            </button>
            <p className="text-xs text-center text-[#64748B]">
              Your information is confidential. We do not share client details with third parties.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home