import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, Shield, Eye, Truck, CheckCircle, ArrowRight,
  ChevronDown, ChevronUp, Factory, Globe, Users, Clock,
  Award, TrendingUp, Package, Lightbulb, AlertTriangle,
  Star, Quote, BarChart3, FileCheck, Boxes
} from 'lucide-react'

/* ── Hero Section ── */
const Hero = () => (
  <section className="relative bg-gradient-to-br from-primary via-primary-light to-slate-800 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-white/90 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 text-accent" />
            Trusted by 500+ global buyers
          </div>
          <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            China Sourcing Agent for{' '}
            <span className="text-accent">Global Buyers</span>
          </h1>
          <p id="hero-subtitle" className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl">
            We help overseas buyers find reliable Chinese suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping — all under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white text-lg font-semibold rounded-xl hover:bg-accent-dark transition-all shadow-lg hover:shadow-xl"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-medium rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              How It Works
            </Link>
          </div>
          <div className="flex items-center gap-8 mt-10 pt-8 border-t border-white/10">
            {[
              { value: '500+', label: 'Verified Suppliers' },
              { value: '30+', label: 'Countries Served' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Search, label: 'Supplier Search', color: 'bg-blue-500/20 text-blue-200' },
                  { icon: Shield, label: 'Factory Verification', color: 'bg-green-500/20 text-green-200' },
                  { icon: Eye, label: 'Quality Inspection', color: 'bg-purple-500/20 text-purple-200' },
                  { icon: Truck, label: 'Shipping & Logistics', color: 'bg-orange-500/20 text-orange-200' },
                ].map((item) => (
                  <div key={item.label} className={`${item.color} rounded-xl p-5 text-center`}>
                    <item.icon className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-medium text-white">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium text-sm">Quality Report Passed</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[92%] bg-green-400 rounded-full" />
                </div>
                <div className="text-xs text-blue-200 mt-2">92% quality score — Ready for shipment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ── Services Overview ── */
const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Verification',
    desc: 'We identify, vet, and verify Chinese suppliers that match your product specs, budget, and quality requirements.',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    icon: Shield,
    title: 'Factory Audits & Compliance',
    desc: 'On-site factory audits to verify licenses, production capacity, labor standards, and export capabilities.',
    color: 'bg-green-50 text-green-600 border-green-100',
  },
  {
    icon: Eye,
    title: 'Quality Control & Inspection',
    desc: 'Pre-production, in-line, and pre-shipment inspections with detailed photo and video reporting.',
    color: 'bg-purple-50 text-purple-600 border-purple-100',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'We monitor manufacturing timelines, track milestones, and keep you informed at every stage.',
    color: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight coordination including FCL, LCL, air freight, customs clearance, and door delivery.',
    color: 'bg-orange-50 text-orange-600 border-orange-100',
  },
  {
    icon: FileCheck,
    title: 'Sample Management',
    desc: 'We collect, review, and ship product samples so you can evaluate quality before placing bulk orders.',
    color: 'bg-teal-50 text-teal-600 border-teal-100',
  },
]

const ServicesSection = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Our Services</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">End-to-End China Sourcing Solutions</h2>
        <p className="text-slate-500 text-lg">From initial supplier discovery to final delivery, we handle every step of your supply chain in China.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc) => (
          <div key={svc.title} className={`p-6 rounded-xl border ${svc.color} hover:shadow-lg transition-shadow`}>
            <svc.icon className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">{svc.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
          View All Services <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
)

/* ── Sourcing Process ── */
const processSteps = [
  { step: '01', title: 'Tell Us What You Need', desc: 'Submit your product requirements, specs, target price, and quantity.' },
  { step: '02', title: 'We Find & Verify Suppliers', desc: 'Our team sources, vets, and shortlists qualified factories for you.' },
  { step: '03', title: 'Sample & Negotiation', desc: 'We arrange samples, assist with pricing negotiation, and finalize terms.' },
  { step: '04', title: 'Production Monitoring', desc: 'We track your order, conduct QC inspections, and send progress updates.' },
  { step: '05', title: 'Quality Inspection', desc: 'Final pre-shipment inspection ensures goods meet your standards.' },
  { step: '06', title: 'Shipping & Delivery', desc: 'We coordinate customs, freight, and last-mile delivery to your door.' },
]

const ProcessSection = () => (
  <section className="py-20 lg:py-28 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">How It Works</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Sourcing Process</h2>
        <p className="text-slate-500 text-lg">Six clear steps from inquiry to delivery. No hidden fees, no guesswork.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {processSteps.map((step) => (
          <div key={step.step} className="relative bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <span className="text-primary font-extrabold text-lg">{step.step}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/how-it-works" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
          See Full Process <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
)

/* ── Products We Source ── */
const productCategories = [
  { icon: Package, name: 'Consumer Electronics', desc: 'Phone accessories, chargers, speakers, earbuds, LED lights' },
  { icon: Boxes, name: 'Home & Garden', desc: 'Furniture, decor, kitchenware, storage solutions, lighting' },
  { icon: Factory, name: 'Industrial & Machinery', desc: 'CNC parts, hardware, tools, pumps, industrial components' },
  { icon: Star, name: 'Fashion & Textiles', desc: 'Apparel, bags, shoes, fabrics, custom manufacturing' },
  { icon: Award, name: 'Beauty & Health', desc: 'Cosmetics, skincare, supplements, packaging, devices' },
  { icon: Lightbulb, name: 'Promotional Products', desc: 'Custom gifts, branded merchandise, event giveaways' },
]

const ProductsSection = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">What We Source</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Products We Source from China</h2>
        <p className="text-slate-500 text-lg">We cover a wide range of product categories across major Chinese manufacturing hubs.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productCategories.map((cat) => (
          <div key={cat.name} className="group p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-accent/30 hover:bg-white hover:shadow-lg transition-all">
            <cat.icon className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">{cat.name}</h3>
            <p className="text-slate-500 text-sm">{cat.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/products" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
          View All Product Categories <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
)

/* ── Problems We Solve ── */
const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', solution: 'We pre-vet every supplier for legitimacy, capacity, and track record before you commit.' },
  { icon: Shield, title: 'Quality Issues', solution: 'Multi-stage inspections catch defects before they reach your warehouse.' },
  { icon: Globe, title: 'Language & Culture Barriers', solution: 'Bilingual team bridges communication gaps and negotiates on your behalf.' },
  { icon: Clock, title: 'Production Delays', solution: 'Proactive monitoring and milestone tracking keep your orders on schedule.' },
  { icon: TrendingUp, title: 'Hidden Costs', solution: 'Transparent pricing with detailed cost breakdowns — no surprise charges.' },
  { icon: BarChart3, title: 'Compliance & Certification', solution: 'We verify CE, FCC, RoHS, FDA, and other required certifications.' },
]

const ProblemsSection = () => (
  <section className="py-20 lg:py-28 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</span>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Common Sourcing Problems We Solve</h2>
        <p className="text-slate-400 text-lg">International sourcing is risky. We make it safe, simple, and cost-effective.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((p) => (
          <div key={p.title} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-accent/40 transition-colors">
            <p.icon className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-bold mb-2">{p.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{p.solution}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ── Trust Points ── */
const trustPoints = [
  { icon: Shield, value: '10+ Years', label: 'Industry Experience', desc: 'A decade of sourcing expertise in Chinese markets' },
  { icon: Globe, value: '30+ Countries', label: 'Global Client Base', desc: 'Serving buyers across North America, Europe, and Asia' },
  { icon: Users, value: '500+', label: 'Verified Suppliers', desc: 'Pre-screened factories in our verified supplier database' },
  { icon: CheckCircle, value: '98%', label: 'Satisfaction Rate', desc: 'Consistently high ratings from returning clients' },
]

const TrustSection = () => (
  <section className="py-20 lg:py-28 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Why Trust Us</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Built on Results, Not Promises</h2>
        <p className="text-slate-500 text-lg">We measure our success by the repeat business and referrals from our clients.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustPoints.map((tp) => (
          <div key={tp.label} className="bg-white rounded-xl p-6 text-center border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <tp.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="text-3xl font-extrabold text-primary mb-1">{tp.value}</div>
            <div className="text-sm font-semibold text-slate-800 mb-1">{tp.label}</div>
            <p className="text-slate-500 text-xs">{tp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ── Case Studies Preview ── */
const caseStudies = [
  {
    title: 'US Retailer Saved 35% on Home Furniture',
    category: 'Home & Garden',
    result: 'Reduced COGS by 35% and improved delivery time by 2 weeks',
    quote: 'SSourcing China found us a factory we never would have discovered on our own. Quality has been consistently excellent.',
    client: 'Mike R., Procurement Director — HomeStyle USA',
  },
  {
    title: 'EU Brand Launched 12 SKUs in 90 Days',
    category: 'Consumer Electronics',
    result: 'From concept to shelves in 90 days with zero quality issues',
    quote: 'They managed everything from sourcing to shipping. We just approved the designs and received the goods.',
    client: 'Anna K., CEO — TechNova Europe',
  },
  {
    title: 'Australian Importer Cut Lead Time by 40%',
    category: 'Industrial Components',
    result: 'Streamlined supply chain reduced lead time from 12 weeks to 7',
    quote: 'The production follow-up alone was worth it. We always knew exactly where our order stood.',
    client: 'James L., Operations Manager — BuildPro AU',
  },
]

const CaseStudiesSection = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Case Studies</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Real Results for Real Businesses</h2>
        <p className="text-slate-500 text-lg">See how we have helped companies around the world source from China with confidence.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {caseStudies.map((cs, i) => (
          <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow flex flex-col">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{cs.category}</span>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{cs.title}</h3>
            <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 rounded-lg px-3 py-2 mb-4">
              <CheckCircle className="w-4 h-4 shrink-0" />
              {cs.result}
            </div>
            <div className="flex-1 relative">
              <Quote className="w-6 h-6 text-slate-300 mb-2" />
              <p className="text-slate-600 text-sm italic leading-relaxed mb-3">{cs.quote}</p>
              <p className="text-xs font-medium text-slate-500">{cs.client}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
          View All Case Studies <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
)

/* ── FAQ Section ── */
const faqs = [
  {
    q: 'What types of products can you source from China?',
    a: 'We source a wide range of products including consumer electronics, home goods, industrial components, fashion items, beauty products, promotional merchandise, and more. Our supplier network covers major manufacturing hubs across China.',
  },
  {
    q: 'How do you verify suppliers and factories?',
    a: 'We conduct on-site factory visits, verify business licenses and certifications, check production capacity, review quality management systems, and assess export capabilities. We also check references from other buyers and review the factory\'s compliance history.',
  },
  {
    q: 'What are your fees and pricing structure?',
    a: 'We offer flexible pricing depending on the scope of services. For one-time projects, we charge a flat service fee. For ongoing sourcing, we offer monthly retainer packages. There are no hidden fees — all costs are transparent and agreed upon upfront.',
  },
  {
    q: 'How long does the sourcing process typically take?',
    a: 'Initial supplier shortlisting takes 3–5 business days. Sample development takes 7–15 days depending on the product. Production lead times vary by product type, typically 15–45 days. We provide realistic timelines for each project.',
  },
  {
    q: 'Do you handle shipping and customs clearance?',
    a: 'Yes, we coordinate end-to-end logistics including FCL/LCL sea freight, air freight, customs documentation, and door-to-door delivery. We work with trusted freight forwarders to ensure smooth transit.',
  },
  {
    q: 'Can you help with product certifications (CE, FCC, etc.)?',
    a: 'Yes. We help source products that already meet required certifications, and we can coordinate third-party testing when needed. We work with accredited testing laboratories for CE, FCC, RoHS, FDA, and other standards.',
  },
  {
    q: 'What happens if there is a quality issue?',
    a: 'We catch most issues during our multi-stage inspection process. If a defect is found post-delivery, we work with the factory to arrange replacements, refunds, or remediation. Our contracts include quality guarantee clauses to protect your interests.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply fill out our inquiry form with your product requirements, target price, and quantity. We will respond within 24 hours with a sourcing plan and estimated timeline. There is no obligation — our initial consultation is free.',
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-lg">Get answers to common questions about our sourcing services.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 text-sm sm:text-base pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Inquiry Form / CTA Section ── */
const InquirySection = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', product: '', quantity: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', company: '', product: '', quantity: '', message: '' })
    }, 1500)
  }

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-light to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Get Started</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get a Free Sourcing Quote</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Tell us what you need to source from China. Our team will respond within 24 hours
              with a tailored sourcing plan, supplier recommendations, and cost estimates.
            </p>
            <div className="space-y-4">
              {[
                'Free initial consultation — no obligation',
                'Supplier shortlist within 3–5 business days',
                'Transparent pricing with no hidden fees',
                'Dedicated bilingual sourcing manager',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-blue-100 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-500">We have received your inquiry and will respond within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-primary font-medium hover:underline text-sm">
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <input
                      name="name" type="text" required value={form.name} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                    <input
                      name="email" type="email" required value={form.email} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                    <input
                      name="company" type="text" value={form.company} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Product to Source *</label>
                    <input
                      name="product" type="text" required value={form.product} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900"
                      placeholder="e.g. LED lights, furniture"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Quantity</label>
                  <input
                    name="quantity" type="text" value={form.quantity} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900"
                    placeholder="e.g. 1,000 units"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Additional Details</label>
                  <textarea
                    name="message" rows={4} value={form.message} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none text-slate-900"
                    placeholder="Product specs, target price, certifications needed, timeline..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending...' : 'Get a Free Sourcing Quote'}
                </button>
                <p className="text-xs text-slate-400 text-center">We will respond within 24 hours. No spam, no obligations.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Home Page ── */
const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquirySection />
    </div>
  )
}

export default Home
