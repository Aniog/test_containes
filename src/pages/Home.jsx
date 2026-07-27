import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Factory, ShieldCheck, ClipboardCheck, Ship, Package,
  CheckCircle, Star, ArrowRight, ChevronRight, Quote, Users, Building2,
  Globe, Award, Clock, ThumbsUp, Phone, Mail, MapPin,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import SectionHeader from '@/components/home/SectionHeader'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We find and vet qualified Chinese manufacturers matching your exact product specifications and budget requirements.',
    imgId: 'service-sourcing-8a2b1c',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify capabilities, certifications, production capacity, and ethical compliance.',
    imgId: 'service-factory-3d4e5f',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Control',
    desc: 'Rigorous inspections at every stage — from raw materials to final production — ensuring specifications are met.',
    imgId: 'service-qc-6g7h8i',
  },
  {
    icon: ClipboardCheck,
    title: 'Production Monitoring',
    desc: 'Regular production updates with photos and reports, so you always know the status of your orders.',
    imgId: 'service-production-9j0k1l',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'Complete freight coordination — FCL, LCL, air freight, and door-to-door delivery with customs clearance.',
    imgId: 'service-shipping-2m3n4o',
  },
  {
    icon: Package,
    title: 'Consolidation & Warehousing',
    desc: 'Combine orders from multiple suppliers, inspect, repack, and ship as one consolidated shipment to save costs.',
    imgId: 'service-warehouse-5p6q7r',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    desc: 'Share your product requirements, target price, order quantity, and any specifications. The more detail, the better.',
  },
  {
    step: '02',
    title: 'Supplier Identification',
    desc: 'We search our network of 50,000+ verified suppliers and identify the best matches for your product.',
  },
  {
    step: '03',
    title: 'Factory Audit & Verification',
    desc: 'We conduct on-site audits, verify certifications, assess production lines, and check business licenses.',
  },
  {
    step: '04',
    title: 'Sampling & Negotiation',
    desc: 'We coordinate samples, negotiate pricing and terms, and help you compare options side by side.',
  },
  {
    step: '05',
    title: 'Production & Quality Control',
    desc: 'We monitor production with regular inspections, ensuring quality at every stage through to final shipment.',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'We handle logistics, documentation, customs clearance, and coordinate delivery to your warehouse.',
  },
]

const problems = [
  {
    icon: Search,
    title: 'Finding reliable suppliers is hard',
    desc: 'Online platforms are full of unverified listings. We personally visit and audit every factory before recommending them.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality doesn\'t match samples',
    desc: 'We inspect production at every stage — raw materials, inline, and pre-shipment — so you get what you approved.',
  },
  {
    icon: Globe,
    title: 'Language and cultural barriers',
    desc: 'Our bilingual team bridges the communication gap, ensuring your requirements are clearly understood and followed.',
  },
  {
    icon: Clock,
    title: 'Production delays and hidden issues',
    desc: 'We provide weekly progress reports with photos, so you catch problems early — not when it\'s too late.',
  },
  {
    icon: Ship,
    title: 'Logistics is complicated',
    desc: 'From freight forwarding to customs paperwork, we manage the entire shipping process so you don\'t have to.',
  },
  {
    icon: Award,
    title: 'Risk of fraud or scams',
    desc: 'Every supplier we work with is verified in person. We handle payments securely and protect your interests.',
  },
]

const trustPoints = [
  { icon: Building2, value: '13+', label: 'Years in Business' },
  { icon: Factory, value: '800+', label: 'Factories Audited' },
  { icon: Package, value: '15,000+', label: 'Shipments Managed' },
  { icon: Globe, value: '45+', label: 'Countries Served' },
]

const caseStudies = [
  {
    id: 'cs-1',
    title: 'Electronics Manufacturer Saves 22% on PCB Assembly',
    desc: 'A German electronics brand needed reliable PCB assembly. We vetted 8 factories, negotiated pricing, and implemented QC protocols that reduced defect rates from 3.2% to 0.4%.',
    result: '22% cost reduction, 0.4% defect rate',
    category: 'Electronics',
    imgId: 'cs-electronics-a1b2c3',
  },
  {
    id: 'cs-2',
    title: 'US Furniture Brand Scales Production 3x',
    desc: 'A fast-growing US furniture brand struggled to scale. We found a specialized manufacturer, set up production monitoring, and managed logistics for their national rollout.',
    result: '3x production scale, on-time delivery',
    category: 'Furniture',
    imgId: 'cs-furniture-d4e5f6',
  },
  {
    id: 'cs-3',
    title: 'UK Retailer Launches Private Label Kitchenware',
    desc: 'A UK retailer wanted to launch a private label kitchenware line. We sourced 5 suppliers, managed sampling, and coordinated quality inspections across all product categories.',
    result: '15 SKUs launched, 98% QC pass rate',
    category: 'Kitchenware',
    imgId: 'cs-kitchenware-g7h8i9',
  },
]

const faqs = [
  {
    q: 'How do you find and vet suppliers?',
    a: 'We maintain a database of 50,000+ suppliers across China. For each project, we shortlist candidates based on your requirements, then conduct on-site audits verifying business licenses, production capacity, quality systems, certifications, and export experience. We only recommend suppliers that pass our due diligence.',
  },
  {
    q: 'What are your fees?',
    a: 'Our fees depend on project scope and complexity. We typically charge a service fee based on order value (3-8%), with a minimum project fee. For large or ongoing projects, we offer customized pricing. We provide a transparent quote upfront — no hidden costs.',
  },
  {
    q: 'How do you handle quality control?',
    a: 'We offer inspections at every stage: raw material inspection, in-process quality control (IPQC), pre-shipment inspection (PSI), and container loading supervision. All inspections follow AQL standards and include detailed photo reports within 24 hours.',
  },
  {
    q: 'Do you handle payments to suppliers?',
    a: 'We can facilitate secure payment arrangements, including escrow-like structures where funds are released upon milestone completion. We also help negotiate favorable payment terms (e.g., 30% deposit, 70% after inspection).',
  },
  {
    q: 'What products can you source?',
    a: 'We source across virtually all categories: electronics, furniture, textiles, machinery, hardware, plastics, packaging, automotive parts, toys, sports equipment, and more. Our team has specialists in different product categories.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typically 2-4 weeks from initial requirements to supplier shortlist, then 2-4 weeks for sampling. Production timelines vary by product. We provide a detailed timeline during the initial consultation so you know what to expect.',
  },
]

export default function Home() {
  const containerRef = useRef(null)
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', product: '', message: '' })

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will get back to you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', product: '', message: '' })
  }

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            data-strk-bg-id="hero-bg-7a1f3e"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="w-full h-full"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm mb-6">
              <CheckCircle className="w-4 h-4 text-accent-400" />
              <span>Trusted by 500+ global buyers across 45 countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
              We find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can focus on growing your business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="xl" onClick={() => navigate('/contact')}>
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="white" size="xl" onClick={() => navigate('/how-it-works')}>
                How It Works
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-accent-400 fill-accent-400" /> 4.9/5 from 200+ reviews
              </span>
              <span className="hidden sm:inline text-slate-500">|</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-accent-400" /> Response within 24 hours
              </span>
              <span className="hidden sm:inline text-slate-500">|</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-accent-400" /> No obligation quote
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-brand-900">{item.value}</div>
                <div className="text-sm text-slate-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Services"
            subtitle="End-to-end sourcing solutions — from finding the right supplier to delivering finished goods to your door."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-brand-900 mb-2">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How It Works"
            subtitle="A simple, transparent process designed to give you confidence in your sourcing decisions."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-brand-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-900 mb-2">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" onClick={() => navigate('/how-it-works')}>
              Learn More About Our Process
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Problems We Solve"
            subtitle="Sourcing from China has real challenges. We've built our services to address every one of them."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <problem.icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-900 mb-1.5">{problem.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Products We Source"
            subtitle="From electronics to furniture, we have specialists across all major product categories."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Electronics & PCB', icon: Search },
              { name: 'Furniture & Home', icon: Factory },
              { name: 'Textiles & Apparel', icon: Package },
              { name: 'Machinery & Parts', icon: ShieldCheck },
              { name: 'Hardware & Tools', icon: ClipboardCheck },
              { name: 'Plastics & Molding', icon: Ship },
              { name: 'Packaging Materials', icon: Package },
              { name: 'Automotive Parts', icon: Search },
              { name: 'Toys & Games', icon: Factory },
              { name: 'Sports Equipment', icon: ShieldCheck },
              { name: 'Kitchenware', icon: Package },
              { name: 'Building Materials', icon: ClipboardCheck },
            ].map((cat, i) => (
              <div key={i} className="bg-slate-50 rounded-lg p-4 text-center hover:bg-brand-50 hover:text-brand-700 transition-colors cursor-pointer">
                <cat.icon className="w-5 h-5 text-brand-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-slate-700">{cat.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" onClick={() => navigate('/products')}>
              View All Product Categories
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Case Studies"
            subtitle="Real results from real clients. See how we've helped businesses source smarter from China."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] bg-slate-200 relative overflow-hidden">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[cs-${cs.id}-desc] [cs-${cs.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {cs.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={`cs-${cs.id}-title`} className="font-semibold text-brand-900 mb-2">{cs.title}</h3>
                  <p id={`cs-${cs.id}-desc`} className="text-slate-500 text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-accent-600 bg-accent-50 rounded-lg px-3 py-2">
                    <ThumbsUp className="w-4 h-4" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" onClick={() => navigate('/case-studies')}>
              View All Case Studies
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-brand-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-12 h-12 text-accent-400 mx-auto mb-6 opacity-50" />
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
            "SSourcing China transformed our supply chain. They found suppliers we never would have discovered on our own, negotiated better prices than we were getting, and their quality control process gave us peace of mind. We've been working with them for 3 years now."
          </blockquote>
          <div>
            <div className="font-semibold text-lg">Michael Thompson</div>
            <div className="text-slate-300">CEO, Thompson Electronics — Chicago, USA</div>
          </div>
          <div className="flex justify-center gap-1 mt-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 text-accent-400 fill-accent-400" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our sourcing services."
          />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left font-medium text-brand-900 hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-slate-400 transition-transform shrink-0 ml-4 ${openFaq === i ? 'rotate-90' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-slate-500 leading-relaxed text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-brand-900 text-white p-8 md:p-10 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Get a Free Sourcing Quote</h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Tell us about your product and requirements. We'll respond within 24 hours with a detailed proposal.
                </p>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-400 shrink-0" />
                    <span className="text-slate-200">No obligation — free initial consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-400 shrink-0" />
                    <span className="text-slate-200">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-400 shrink-0" />
                    <span className="text-slate-200">Confidential — your project details are safe</span>
                  </div>
                </div>
                <div className="mt-8 space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Phone className="w-4 h-4 text-accent-400" /> +86 755 8888 6666
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Mail className="w-4 h-4 text-accent-400" /> info@ssourcingchina.com
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-accent-400" /> Shenzhen, Guangdong, China
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <Input
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                      <Input
                        placeholder="Your Company Ltd."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone / WhatsApp</label>
                      <Input
                        placeholder="+1 555 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Description *</label>
                    <Input
                      placeholder="e.g., Stainless steel water bottles, 500ml, BPA-free"
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Details</label>
                    <Textarea
                      placeholder="Tell us about your target price, order quantity, certifications needed, and any other requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    Submit Inquiry
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <p className="text-xs text-slate-400 text-center">
                    We'll never share your information. We respond to all inquiries within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}