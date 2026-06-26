import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Shield, CheckCircle, Factory, Ship, ClipboardCheck, Users, 
  Package, Building2, Search, FileCheck, Truck, BarChart3,
  ArrowRight, ChevronDown, ChevronUp, Star, Globe, Award
} from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'
import Button from '@/components/common/Button'

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you within 24 hours.')
    setFormData({ name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '' })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[--color-primary] via-[--color-primary-light] to-[--color-primary] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Globe className="w-4 h-4 text-[--color-accent-light]" />
                <span className="text-white/90 text-sm font-medium">Trusted by 500+ Global Buyers</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
                Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all with one trusted partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[--color-accent] text-white font-bold text-lg rounded-lg hover:bg-[--color-accent-dark] transition-all shadow-lg hover:shadow-xl"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-lg hover:bg-white/20 transition-all border border-white/20"
                >
                  How It Works
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-[--color-accent]/20 rounded-full blur-3xl"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <Factory className="w-10 h-10 text-[--color-accent-light] mx-auto mb-2" />
                      <p className="text-white font-semibold">Factory Verification</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <ClipboardCheck className="w-10 h-10 text-[--color-success-light] mx-auto mb-2" />
                      <p className="text-white font-semibold">Quality Control</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <Ship className="w-10 h-10 text-[--color-accent-light] mx-auto mb-2" />
                      <p className="text-white font-semibold">Shipping & Logistics</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <Shield className="w-10 h-10 text-[--color-success-light] mx-auto mb-2" />
                      <p className="text-white font-semibold">Risk Mitigation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white py-12 border-b border-[--color-border]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Clients Served' },
              { value: '12+', label: 'Years Experience' },
              { value: '50+', label: 'Industries Covered' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[--color-primary] mb-1">{stat.value}</div>
                <div className="text-sm text-[--color-text-muted]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-[--color-bg-light]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Problems We Solve for You"
            subtitle="Sourcing from China comes with challenges. We handle them so you can focus on your business."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <Search className="w-6 h-6" />,
                title: 'Finding Reliable Suppliers',
                description: 'We verify supplier credentials, factory presence, and production capacity before recommending them.'
              },
              {
                icon: <FileCheck className="w-6 h-6" />,
                title: 'Language & Communication Barriers',
                description: 'Our bilingual team bridges the gap, ensuring clear communication and accurate specifications.'
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Quality Assurance Concerns',
                description: 'Professional QC inspections at every production stage catch issues before shipment.'
              },
              {
                icon: <Package className="w-6 h-6" />,
                title: 'Hidden Costs & Surprises',
                description: 'Transparent pricing and detailed quotes prevent unexpected costs throughout the process.'
              },
              {
                icon: <Truck className="w-6 h-6" />,
                title: 'Complex Logistics',
                description: 'We handle customs clearance, documentation, and shipping coordination end-to-end.'
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: 'Production Timeline Risks',
                description: 'Regular updates and on-site monitoring ensure your order ships on time.'
              },
            ].map((problem, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[--color-bg-navy-light] rounded-lg flex items-center justify-center text-[--color-primary] mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-semibold text-[--color-text-dark] mb-2">{problem.title}</h3>
                <p className="text-[--color-text-muted] text-sm leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="End-to-End Sourcing Solutions"
            subtitle="Comprehensive services covering every step of your China sourcing journey."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: <Factory className="w-8 h-8" />,
                title: 'Supplier Verification',
                description: 'Background checks, factory audits, and capability assessments to ensure you work with legitimate partners.',
                features: ['Business license verification', 'Factory site visits', 'Production capacity analysis', 'Financial stability check']
              },
              {
                icon: <ClipboardCheck className="w-8 h-8" />,
                title: 'Quality Control',
                description: 'Professional inspections at pre-production, during production, and before shipment.',
                features: ['AQL sampling', 'Product specification check', 'Packaging inspection', 'Loading supervision']
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Production Follow-up',
                description: 'Regular updates and on-site monitoring to keep your order on track.',
                features: ['Progress reports', 'Sample approval', 'Issue resolution', 'Timeline management']
              },
              {
                icon: <Ship className="w-8 h-8" />,
                title: 'Shipping & Logistics',
                description: 'Complete freight forwarding, customs clearance, and delivery coordination.',
                features: ['Sea & air freight', 'Customs documentation', 'Cargo insurance', 'Door-to-door delivery']
              },
            ].map((service, index) => (
              <div key={index} className="group bg-[--color-bg-light] rounded-xl p-6 hover:bg-[--color-bg-navy-light] transition-colors">
                <div className="w-14 h-14 bg-[--color-primary] rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[--color-text-dark] mb-3">{service.title}</h3>
                <p className="text-[--color-text-muted] text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[--color-text-muted]">
                      <CheckCircle className="w-4 h-4 text-[--color-success]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/services" variant="primary" size="lg">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[--color-bg-light]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Work With You"
            subtitle="A simple, transparent process from inquiry to delivery."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Submit Inquiry',
                description: 'Tell us what you need — product details, quantity, target price, and timeline.'
              },
              {
                step: '02',
                title: 'Supplier Matching',
                description: 'We identify and verify suitable factories, then present you with options and quotes.'
              },
              {
                step: '03',
                title: 'Production & QC',
                description: 'We monitor production, conduct inspections, and handle any issues that arise.'
              },
              {
                step: '04',
                title: 'Shipping & Delivery',
                description: 'We coordinate shipping, customs, and deliver to your doorstep.'
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                  <div className="text-5xl font-bold text-[--color-bg-light] mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-[--color-text-dark] mb-3">{item.title}</h3>
                  <p className="text-[--color-text-muted] text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-[--color-border]" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/how-it-works" variant="primary" size="lg">
              Learn More About Our Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Product Categories"
            title="What We Source"
            subtitle="We handle a wide range of product categories across multiple industries."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {[
              { name: 'Electronics & Components', icon: <Package className="w-6 h-6" /> },
              { name: 'Machinery & Equipment', icon: <Factory className="w-6 h-6" /> },
              { name: 'Textiles & Garments', icon: <Package className="w-6 h-6" /> },
              { name: 'Home & Garden', icon: <Building2 className="w-6 h-6" /> },
              { name: 'Medical Supplies', icon: <Shield className="w-6 h-6" /> },
              { name: 'Sports & Outdoors', icon: <Package className="w-6 h-6" /> },
              { name: 'Packaging Materials', icon: <Package className="w-6 h-6" /> },
              { name: 'Automotive Parts', icon: <Factory className="w-6 h-6" /> },
              { name: 'Consumer Goods', icon: <Package className="w-6 h-6" /> },
              { name: 'Industrial Hardware', icon: <Factory className="w-6 h-6" /> },
              { name: 'Beauty & Personal Care', icon: <Package className="w-6 h-6" /> },
              { name: 'Office Supplies', icon: <Package className="w-6 h-6" /> },
            ].map((product, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-[--color-bg-light] rounded-lg hover:bg-[--color-bg-navy-light] transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-[--color-primary] rounded-lg flex items-center justify-center text-white">
                  {product.icon}
                </div>
                <span className="text-sm font-medium text-[--color-text-dark]">{product.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/products" variant="outline" size="lg">
              View All Product Categories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-[--color-primary]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Success Stories"
            title="Case Studies"
            subtitle="Real results for real businesses sourcing from China."
            className="text-white"
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                client: 'European Retail Chain',
                industry: 'Home Decor',
                challenge: 'Needed 50,000 units of ceramic home decor with strict quality requirements.',
                result: 'Identified verified factory, implemented QC checkpoints, delivered on time with 99.2% quality pass rate.',
                metric: '40% cost savings'
              },
              {
                client: 'US Medical Device Company',
                industry: 'Medical Equipment',
                challenge: 'Required FDA-compliant manufacturing with full documentation trail.',
                result: 'Factory audit revealed compliance gaps. Partnered with compliant facility, achieved certification.',
                metric: '100% compliance'
              },
              {
                client: 'Australian Tech Startup',
                industry: 'Consumer Electronics',
                challenge: 'Limited budget, needed prototype to production in 60 days.',
                result: 'Accelerated sourcing process, negotiated favorable terms, delivered ahead of schedule.',
                metric: '35 days delivery'
              },
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-[--color-accent]" fill="currentColor" />
                  <span className="text-sm font-medium text-[--color-text-muted]">{study.industry}</span>
                </div>
                <h3 className="text-lg font-semibold text-[--color-text-dark] mb-2">{study.client}</h3>
                <p className="text-sm text-[--color-text-muted] mb-4">{study.challenge}</p>
                <div className="border-t border-[--color-border] pt-4">
                  <p className="text-sm text-[--color-text-muted] mb-3">{study.result}</p>
                  <div className="inline-block bg-[--color-success]/10 text-[--color-success] px-3 py-1 rounded-full text-sm font-semibold">
                    {study.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/case-studies" variant="secondary" size="lg">
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Trust Us"
            title="Built on Trust & Transparency"
            subtitle="What sets us apart from other sourcing agents."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: 'No Hidden Fees',
                description: 'Transparent pricing model. You only pay for services you use, with no surprise charges.'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Verified Suppliers Only',
                description: 'Every supplier in our network has been personally verified through site visits and audits.'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Dedicated Team',
                description: 'You get a dedicated account manager who knows your business and speaks your language.'
              },
            ].map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[--color-bg-navy-light] rounded-full flex items-center justify-center text-[--color-primary] mx-auto mb-4">
                  {point.icon}
                </div>
                <h3 className="text-lg font-semibold text-[--color-text-dark] mb-2">{point.title}</h3>
                <p className="text-[--color-text-muted] text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[--color-bg-light]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our sourcing services."
          />
          <div className="mt-12 space-y-4">
            {[
              {
                question: 'What is the minimum order quantity you work with?',
                answer: 'We typically work with orders starting at $5,000 USD. For smaller orders, we can recommend suitable suppliers, but our full service model works best with larger volumes.'
              },
              {
                question: 'How do you verify suppliers?',
                answer: 'Our verification process includes business license checks, factory site visits, production capacity assessments, financial stability reviews, and reference checks from existing clients.'
              },
              {
                question: 'What quality control inspections do you offer?',
                answer: 'We offer pre-production, during production (DPI), pre-shipment (PSI), and loading supervision inspections. Each includes detailed reports with photos and compliance checklists.'
              },
              {
                question: 'How long does typical sourcing take?',
                answer: 'Sourcing timelines vary based on product complexity. Simple products may take 2-4 weeks, while complex products or new tooling can take 6-12 weeks. We provide estimated timelines during the quotation phase.'
              },
              {
                question: 'What are your service fees?',
                answer: 'Our fees are based on the services you require. We offer transparent pricing with no hidden costs. Contact us for a custom quote based on your specific needs.'
              },
              {
                question: 'Do you handle shipping and logistics?',
                answer: 'Yes, we provide complete logistics services including freight forwarding, customs clearance, documentation, cargo insurance, and door-to-door delivery coordination.'
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-[--color-text-dark]">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[--color-text-muted]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[--color-text-muted]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-[--color-text-muted] text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Form */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[--color-accent] font-semibold text-sm uppercase tracking-wider mb-4">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[--color-text-dark] mb-6">
                Ready to Source from China?
              </h2>
              <p className="text-lg text-[--color-text-muted] mb-8">
                Fill out the form and get a free, no-obligation quote within 24 hours. We'll review your requirements and provide tailored recommendations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[--color-success]" />
                  <span className="text-[--color-text-muted]">Free consultation and quote</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[--color-success]" />
                  <span className="text-[--color-text-muted]">No obligation to proceed</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[--color-success]" />
                  <span className="text-[--color-text-muted]">Response within 24 hours</span>
                </div>
              </div>
            </div>
            <div className="bg-[--color-bg-light] rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[--color-text-dark] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 border border-[--color-border] rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all text-[--color-text-dark]"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[--color-text-dark] mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 border border-[--color-border] rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all text-[--color-text-dark]"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[--color-text-dark] mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-[--color-border] rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all text-[--color-text-dark]"
                      placeholder="Your Company Ltd"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[--color-text-dark] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-[--color-border] rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all text-[--color-text-dark]"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-[--color-text-dark] mb-1.5">
                      Product to Source *
                    </label>
                    <input
                      type="text"
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 border border-[--color-border] rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all text-[--color-text-dark]"
                      placeholder="e.g., Ceramic mugs"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-[--color-text-dark] mb-1.5">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-[--color-border] rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all text-[--color-text-dark]"
                      placeholder="e.g., 10,000 units"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[--color-text-dark] mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2.5 border border-[--color-border] rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all text-[--color-text-dark] resize-none"
                    placeholder="Tell us more about your requirements, target price, timeline, etc."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[--color-accent] text-white font-bold text-lg rounded-lg hover:bg-[--color-accent-dark] transition-all shadow-lg hover:shadow-xl"
                >
                  Get a Free Quote
                </button>
                <p className="text-xs text-center text-[--color-text-muted]">
                  By submitting this form, you agree to our Privacy Policy and consent to be contacted regarding your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
