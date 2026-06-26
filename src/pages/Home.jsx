import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Shield, Factory, Search, ClipboardCheck, Truck, Package, Star, ChevronDown, ChevronUp, Users, Award, Clock, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist pre-vetted manufacturers matching your product specifications, budget, and quality requirements.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits verify production capacity, certifications, quality management systems, and export experience.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'AQL-based inspections at every stage — pre-production, during production, pre-shipment, and container loading.',
  },
  {
    icon: BarChart3,
    title: 'Production Follow-up',
    desc: 'Weekly progress reports with photos and videos keep you informed of production status, timelines, and any issues.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'Full logistics support including freight forwarding, customs documentation, consolidation, and door-to-door delivery.',
  },
  {
    icon: Package,
    title: 'Product Development',
    desc: 'OEM/ODM support from design review, prototyping, sampling, and packaging to final production handover.',
  },
]

const processSteps = [
  { step: '01', title: 'Define Requirements', desc: 'Share your product specs, target price, order quantity, and quality expectations with our team.' },
  { step: '02', title: 'Supplier Search', desc: 'We search our database and network to identify 3–5 qualified factories that match your needs.' },
  { step: '03', title: 'Factory Audit', desc: 'We conduct on-site audits of shortlisted factories, verifying licenses, capacity, and quality systems.' },
  { step: '04', title: 'Sampling & Quotes', desc: 'Factories produce samples. We negotiate pricing, collect samples, and ship them to you for approval.' },
  { step: '05', title: 'Production & QC', desc: 'We monitor production with regular inspections, ensuring quality standards are met at every stage.' },
  { step: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics, manage documentation, and track your shipment until it reaches your warehouse.' },
]

const productCategories = [
  { name: 'Electronics & Components', desc: 'Consumer electronics, PCBs, components, accessories' },
  { name: 'Machinery & Industrial', desc: 'CNC parts, motors, pumps, industrial equipment' },
  { name: 'Textiles & Apparel', desc: 'Garments, fabrics, home textiles, sportswear' },
  { name: 'Furniture & Home', desc: 'Indoor/outdoor furniture, lighting, home decor' },
  { name: 'Packaging & Printing', desc: 'Custom boxes, labels, bags, promotional materials' },
  { name: 'Hardware & Tools', desc: 'Fasteners, hand tools, power tools, hardware' },
  { name: 'Plastics & Molding', desc: 'Injection molding, blow molding, extrusion' },
  { name: 'Auto Parts', desc: 'Aftermarket auto parts, accessories, components' },
]

const problems = [
  { title: 'Unreliable Suppliers', desc: 'Many online directories list unverified factories. We only work with audited, compliant manufacturers.' },
  { title: 'Quality Issues', desc: 'Without on-site inspection, defects go undetected. Our QC team catches issues before they become your problem.' },
  { title: 'Communication Barriers', desc: 'Language and cultural gaps lead to misunderstandings. Our bilingual team bridges the gap effectively.' },
  { title: 'Hidden Costs', desc: 'Unexpected fees, poor negotiation, and logistics surprises eat margins. We provide transparent, all-in pricing.' },
  { title: 'Production Delays', desc: 'Factories overpromise and underdeliver. We track production milestones and hold suppliers accountable.' },
  { title: 'IP Protection', desc: 'Your designs and intellectual property need protection. We enforce NDAs and work with trusted partners.' },
]

const trustPoints = [
  { icon: Users, number: '500+', label: 'Buyers Served' },
  { icon: Factory, number: '3,000+', label: 'Factories Audited' },
  { icon: Package, number: '15,000+', label: 'Shipments Managed' },
  { icon: Award, number: '13+', label: 'Years Experience' },
]

const caseStudies = [
  {
    title: 'Sourcing Custom LED Lighting for a US Retailer',
    industry: 'Electronics',
    result: 'Delivered 50,000 units with 0.3% defect rate, 15% below target cost',
    desc: 'A US-based retailer needed custom LED strip lighting. We identified 3 qualified factories in Shenzhen, conducted factory audits, managed sampling, and oversaw production. The project was completed 2 weeks ahead of schedule.',
  },
  {
    title: 'Quality Control for European Furniture Brand',
    industry: 'Furniture',
    result: 'Reduced quality claims by 85% within 12 months',
    desc: 'A European furniture brand struggling with inconsistent quality from their Chinese supplier. We implemented a full QC program — pre-production through pre-shipment — reducing defect rates and warranty claims dramatically.',
  },
  {
    title: 'Industrial Parts Sourcing for Australian Manufacturer',
    industry: 'Industrial',
    result: 'Saved 30% on procurement costs, lead time reduced by 25%',
    desc: 'An Australian manufacturer needed precision CNC-machined parts. We vetted 7 suppliers, ran sample batches, and negotiated competitive pricing with guaranteed quality standards.',
  },
]

const faqs = [
  { q: 'What is the minimum order quantity (MOQ) you work with?', a: 'We work with orders of all sizes. While most factories we partner with prefer MOQs of 500–1,000 units, we can negotiate lower quantities for new buyers testing the market.' },
  { q: 'How do you charge for your sourcing services?', a: 'Our fee structure is transparent. We typically charge a service fee based on order value (3–8%) or a fixed project fee. For larger ongoing orders, we offer retainer arrangements. Contact us for a customized quote.' },
  { q: 'How do you protect my intellectual property?', a: 'We sign NDAs with all clients and require all factories to sign NDAs before receiving your design files. We also recommend splitting production across suppliers for sensitive components and registering IP in China.' },
  { q: 'Can you handle OEM and ODM projects?', a: 'Absolutely. We have extensive experience managing OEM/ODM projects from concept to delivery. Our team can assist with design review, prototyping, tooling, sampling, and full production management.' },
  { q: 'How long does the sourcing process take?', a: 'A typical sourcing project takes 4–8 weeks from initial brief to sample approval. Production timelines vary by product complexity and order size, typically 30–60 days. Rush orders can be accommodated.' },
  { q: 'Do you handle shipping and customs clearance?', a: 'Yes, we offer end-to-end logistics support. We coordinate with freight forwarders, handle export documentation, manage customs clearance, and can arrange door-to-door delivery to your warehouse.' },
  { q: 'What regions of China do you cover?', a: 'We are based in Shenzhen with coverage across all major manufacturing hubs: Guangdong, Zhejiang, Jiangsu, Fujian, Shandong, and Hebei. Our network spans over 20 industrial cities.' },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', product: '', quantity: '', message: '' })
  const [formStatus, setFormStatus] = useState('idle')

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormStatus('submitted')
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="section-container relative py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-white/80 mb-6">
              <Shield className="w-4 h-4 text-accent" />
              Trusted by 500+ Global Buyers Since 2012
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
              We help businesses worldwide find reliable Chinese suppliers, verify factories, 
              inspect quality, manage production, and coordinate shipping — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors shadow-lg"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-surface-alt border-b border-border">
        <div className="section-container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{item.number}</div>
                  <div className="text-sm text-text-muted">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">End-to-End Sourcing Solutions</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              From supplier discovery to final delivery, we manage every step of your China sourcing operation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-surface border border-border rounded-xl p-6 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">How We Source for You</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              A proven 6-step process that delivers consistent results for buyers worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item, i) => (
              <div key={item.step} className="relative">
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-extrabold text-accent/20 shrink-0 leading-none">{item.step}</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              View full process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Products</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Products We Source</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              We have deep expertise across multiple industries and product categories.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productCategories.map((cat) => (
              <div key={cat.name} className="border border-border rounded-xl p-6 hover:border-accent/30 hover:shadow-sm transition-all">
                <h3 className="font-semibold mb-1">{cat.name}</h3>
                <p className="text-sm text-text-muted">{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              See all product categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-white">Problems We Solve</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Sourcing from China comes with challenges. We have the solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">{problem.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{problem.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Client Success Stories</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Real results for real businesses sourcing from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{cs.industry}</span>
                  <h3 className="text-lg font-semibold mt-2 mb-3">{cs.title}</h3>
                  <p className="text-sm text-text-muted mb-4 leading-relaxed">{cs.desc}</p>
                  <div className="flex items-start gap-2 p-3 bg-surface-alt rounded-lg">
                    <Star className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-primary">{cs.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Frequently Asked Questions</h2>
            <p className="text-text-muted">
              Answers to common questions about working with a China sourcing agent.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-border rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold pr-4">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-text-muted shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-muted shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-text-muted text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 md:py-28" id="inquiry-form">
        <div className="section-container">
          <div className="max-w-4xl mx-auto bg-primary rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-primary-dark p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Get a Free Sourcing Quote
                </h2>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Tell us about your product and requirements. Our team will respond within 24 hours 
                  with a tailored sourcing proposal and cost estimate — no obligation.
                </p>
                <div className="space-y-4">
                  {[
                    'Free consultation and quote',
                    'Response within 24 business hours',
                    'No commitment required',
                    'Confidential and secure',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-sm text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-3 p-8 md:p-12 bg-white">
                {formStatus === 'submitted' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p className="text-text-muted">
                      Your inquiry has been received. Our team will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">Name *</label>
                        <input
                          id="name" name="name" type="text" required
                          value={formData.name} onChange={handleFormChange}
                          className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">Email *</label>
                        <input
                          id="email" name="email" type="email" required
                          value={formData.email} onChange={handleFormChange}
                          className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">Phone</label>
                        <input
                          id="phone" name="phone" type="tel"
                          value={formData.phone} onChange={handleFormChange}
                          className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                          placeholder="+1 555 0123"
                        />
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-text mb-1.5">Order Quantity</label>
                        <input
                          id="quantity" name="quantity" type="text"
                          value={formData.quantity} onChange={handleFormChange}
                          className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                          placeholder="e.g. 1,000 units"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-text mb-1.5">Product Description *</label>
                      <input
                        id="product" name="product" type="text" required
                        value={formData.product} onChange={handleFormChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                        placeholder="Describe the product you want to source"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">Additional Details</label>
                      <textarea
                        id="message" name="message" rows={4}
                        value={formData.message} onChange={handleFormChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors resize-none"
                        placeholder="Tell us about your requirements, target price, timeline, etc."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors shadow-sm"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}