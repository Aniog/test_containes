import React from 'react'
import { Link } from 'react-router-dom'
import {
  Search, Shield, Eye, Truck, CheckCircle, Users, Globe, Award,
  ArrowRight, Star, TrendingUp, Clock, FileCheck, Factory, Zap,
  MessageCircle, ChevronRight, BarChart3, Package, Heart, Mail
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and vet the best manufacturers for your product requirements, comparing pricing, capacity, and reliability.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    desc: 'On-site audits to confirm business licenses, production capabilities, certifications, and compliance standards.',
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    desc: 'Pre-production, in-line, and pre-shipment inspections with detailed reporting and photo documentation.',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'Regular progress updates, milestone tracking, and proactive issue resolution throughout manufacturing.',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'Freight forwarding, customs clearance, warehousing coordination, and door-to-door delivery management.',
  },
  {
    icon: FileCheck,
    title: 'Compliance & Testing',
    desc: 'Product testing, certification assistance (CE, FCC, FDA), and regulatory compliance for your target market.',
  },
]

const processSteps = [
  { num: '01', title: 'Share Your Requirements', desc: 'Tell us what products you need, target price, specifications, and quantity.' },
  { num: '02', title: 'Supplier Research & Verification', desc: 'We source suppliers, verify credentials, and present qualified options with pricing.' },
  { num: '03', title: 'Sample & Negotiation', desc: 'We arrange samples, negotiate pricing and terms on your behalf.' },
  { num: '04', title: 'Production & QC', desc: 'We monitor production, conduct inspections, and ensure quality at every stage.' },
  { num: '05', title: 'Shipping & Delivery', desc: 'We coordinate logistics, customs, and delivery to your specified destination.' },
]

const products = [
  { name: 'Electronics & Components', desc: 'Consumer electronics, PCBs, cables, chargers, IoT devices', icon: Zap },
  { name: 'Home & Garden', desc: 'Furniture, lighting, kitchenware, decor, gardening tools', icon: Package },
  { name: 'Apparel & Textiles', desc: 'Clothing, bags, fabrics, accessories, sportswear', icon: Heart },
  { name: 'Industrial & Machinery', desc: 'Equipment, tools, auto parts, packaging machinery', icon: Factory },
  { name: 'Consumer Goods', desc: 'Toys, stationery, beauty products, promotional items', icon: Star },
  { name: 'Building & Hardware', desc: 'Flooring, hardware, fasteners, construction materials', icon: BarChart3 },
]

const problems = [
  { problem: 'Unreliable suppliers who disappear after payment', solution: 'Verified supplier network with contractual guarantees and local presence.' },
  { problem: 'Quality issues discovered only after goods arrive', solution: 'Multi-stage inspection process catches defects before shipment.' },
  { problem: 'Language and cultural barriers with Chinese factories', solution: 'Bilingual team acts as your local representative in every interaction.' },
  { problem: 'Hidden costs and unexpected price increases', solution: 'Transparent pricing breakdowns and locked contracts before production starts.' },
  { problem: 'Delayed shipments and missed deadlines', solution: 'Real-time production tracking with proactive timeline management.' },
  { problem: 'No visibility into the manufacturing process', solution: 'Regular photo/video updates and milestone reports at every production stage.' },
]

const trustPoints = [
  { icon: Users, stat: '500+', label: 'Global clients served' },
  { icon: Factory, stat: '1,200+', label: 'Verified factories in network' },
  { icon: Globe, stat: '40+', label: 'Countries delivered to' },
  { icon: Award, stat: '10+', label: 'Years industry experience' },
]

const caseStudies = [
  {
    title: 'US Retailer Reduced Defect Rate by 94%',
    industry: 'Consumer Electronics',
    result: 'From 12% defect rate to under 0.7% in 6 months',
    desc: 'A US-based retailer sourcing Bluetooth speakers from Guangdong was experiencing high defect rates and inconsistent quality. We implemented a three-stage QC process, supplier audit, and production monitoring that nearly eliminated quality issues.',
    tags: ['Electronics', 'Quality Control', 'Supplier Audit'],
  },
  {
    title: 'EU Brand Launched Product Line in 8 Weeks',
    industry: 'Home & Garden',
    result: 'Full product development from design to delivery in 8 weeks',
    desc: 'A European home brand needed to launch a new kitchenware line. We identified 3 qualified manufacturers, managed sampling, negotiated pricing 18% below initial quotes, and coordinated ocean freight with on-time delivery.',
    tags: ['Home & Garden', 'Speed to Market', 'Cost Savings'],
  },
  {
    title: 'Australian Importer Saved 23% on Sourcing Costs',
    industry: 'Industrial Tools',
    result: '$180K annual savings through supplier optimization',
    desc: 'After conducting a full supply chain audit for an Australian importer of hand tools, we consolidated suppliers, renegotiated pricing, and optimized packaging to reduce shipping costs by 15%.',
    tags: ['Industrial', 'Cost Optimization', 'Supply Chain'],
  },
]

const testimonials = [
  { name: 'James Mitchell', role: 'Procurement Director', company: 'TechGear Inc., USA', quote: 'SSourcing China transformed our supply chain. Their local team caught issues we never would have found remotely. Our defect rate dropped from 8% to under 1%.' },
  { name: 'Maria Hoffmann', role: 'Import Manager', company: 'EuroHome GmbH, Germany', quote: 'Working with SSourcing has been seamless. They handle everything from factory audits to shipping. We finally have a sourcing partner we can trust.' },
  { name: 'David Thompson', role: 'CEO', company: 'AussieTools Pty, Australia', quote: 'The transparency and professionalism are unmatched. Regular updates, clear pricing, and they actually deliver on their promises. Highly recommended.' },
]

const faqs = [
  { q: 'How do you select and verify suppliers?', a: 'We maintain a vetted network of 1,200+ factories. For each project, we conduct on-site audits verifying business licenses, production capacity, certifications, quality management systems, and past export history. We only recommend factories that pass our 50-point verification checklist.' },
  { q: 'What industries and product categories do you cover?', a: 'We source across most manufacturing categories including electronics, home goods, textiles, industrial equipment, consumer products, building materials, and more. Our network spans major manufacturing hubs across Guangdong, Zhejiang, Jiangsu, Fujian, and Shandong provinces.' },
  { q: 'What are your fees and pricing structure?', a: 'We offer flexible engagement models. For one-time projects, we charge a flat service fee based on project complexity. For ongoing sourcing relationships, we offer monthly retainer plans. Initial consultations and supplier research are free. We provide a detailed cost breakdown before any commitment.' },
  { q: 'How do you handle quality control?', a: 'We follow AQL (Acceptable Quality Level) standards and conduct inspections at multiple stages: pre-production (materials and setup), in-process (during manufacturing), and pre-shipment (final goods). Each inspection includes a detailed report with photos, measurements, and test results.' },
  { q: 'Can you handle small quantity orders?', a: 'Yes. While some factories have MOQs, we work with a range of manufacturer sizes. We can source from small-batch producers for startups and samples, and scale to high-volume factories as your business grows. There is no minimum order requirement for our sourcing service.' },
  { q: 'How long does the typical sourcing process take?', a: 'Timeline depends on product complexity. Simple products: 1-2 weeks for sourcing, 2-4 weeks for sampling, 2-6 weeks for production. Complex or custom products may take longer. We provide a detailed timeline during the proposal phase and keep you updated throughout.' },
]

// Helper components
const CTAButton = ({ children, to = '/contact', variant = 'primary', className }) => {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200'
  const variants = {
    primary: 'bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 shadow-md hover:shadow-lg',
    secondary: 'bg-white hover:bg-gray-50 text-navy-700 px-6 py-3 border border-navy-200 shadow-sm',
    ghost: 'text-navy-600 hover:text-accent-500 px-2 py-1',
  }
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
      <ArrowRight className="w-4 h-4" />
    </Link>
  )
}

// Page sections
const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 min-h-[92vh] flex items-center">
    {/* Pattern overlay */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-6 backdrop-blur-sm border border-white/10">
            Trusted by 500+ Businesses Worldwide
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            China Sourcing Agent for
            <span className="block text-accent-400 mt-1">Global Buyers</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
            Find reliable Chinese suppliers, verify factories, inspect quality, and ship with confidence.
            We manage your entire sourcing process so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton>Get a Free Sourcing Quote</CTAButton>
            <CTAButton variant="secondary" to="/how-it-works" className="border-white/20 text-white hover:bg-white/10">
              See How It Works
            </CTAButton>
          </div>

          <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
            <div className="flex -space-x-2">
              {[0,1,2,3].map(i => (
                <div key={i} className="w-9 h-9 rounded-full bg-navy-400 border-2 border-navy-800 flex items-center justify-center text-white text-xs font-bold">
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[0,1,2,3,4].map(i => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-sm text-gray-400">4.9/5 from 200+ verified client reviews</p>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Supplier Verified</p>
                    <p className="text-gray-400 text-sm">Factory audit completed - 96/100 score</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Eye className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">QC Inspection Passed</p>
                    <p className="text-gray-400 text-sm">Pre-shipment inspection - AQL 2.5</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Truck className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Shipment Dispatched</p>
                    <p className="text-gray-400 text-sm">Container loaded - ETA 28 days</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Project Complete</p>
                    <p className="text-gray-400 text-sm">Delivered on time, under budget</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const TrustBanner = () => (
  <section className="bg-navy-50 border-y border-navy-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <p className="text-center text-sm text-gray-500 uppercase tracking-wider font-medium mb-8">
        Trusted by businesses across industries
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {trustPoints.map((item) => (
          <div key={item.label} className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm mb-3 border border-navy-100">
              <item.icon className="w-6 h-6 text-navy-600" />
            </div>
            <p className="text-3xl font-extrabold text-navy-900">{item.stat}</p>
            <p className="text-sm text-gray-500 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const ServicesSection = () => (
  <section className="py-20 bg-white" id="services">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Our Services"
        title="End-to-End Sourcing Solutions"
        subtitle="From initial supplier research to final delivery, we handle every step of your China sourcing journey."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="group p-6 bg-gray-50 hover:bg-white rounded-xl border border-gray-100 hover:border-navy-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 bg-navy-100 group-hover:bg-navy-600 rounded-xl flex items-center justify-center mb-4 transition-colors">
              <service.icon className="w-6 h-6 text-navy-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-navy-900 mb-2">{service.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <CTAButton to="/services">Explore All Services</CTAButton>
      </div>
    </div>
  </section>
)

const ProcessSection = () => (
  <section className="py-20 bg-navy-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="How It Works"
        title="Your Sourcing Process, Simplified"
        subtitle="A clear, step-by-step approach that keeps you informed and in control at every stage."
      />
      <div className="relative">
        {/* Desktop connector line */}
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-navy-200" style={{ left: '10%', right: '10%' }} />
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {processSteps.map((step, idx) => (
            <div key={step.num} className="relative text-center">
              <div className="relative z-10 w-20 h-20 mx-auto bg-white rounded-2xl shadow-md border border-navy-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-extrabold text-navy-600">{step.num}</span>
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <CTAButton to="/how-it-works">Learn More About Our Process</CTAButton>
      </div>
    </div>
  </section>
)

const ProductsSection = () => (
  <section className="py-20 bg-white" id="products">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="What We Source"
        title="Products We Source"
        subtitle="We work across a broad range of product categories from factories across China's major manufacturing regions."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-navy-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-navy-50 group-hover:bg-navy-600 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                <product.icon className="w-5 h-5 text-navy-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-base font-bold text-navy-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <CTAButton to="/products">View All Product Categories</CTAButton>
      </div>
    </div>
  </section>
)

const ProblemsSection = () => (
  <section className="py-20 bg-navy-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 bg-white/10 text-accent-300 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
          Common Challenges
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Problems We Solve for Global Buyers
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Sourcing from China comes with real risks. Here is how we address the most common ones.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((item, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-accent-400/30 transition-colors">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-accent-400 text-xs font-bold">!</span>
              </div>
              <p className="text-gray-200 font-medium text-sm">{item.problem}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-3.5 h-3.5 text-green-400" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{item.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const CaseStudiesSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Case Studies"
        title="Real Results for Real Businesses"
        subtitle="See how we have helped companies around the world solve sourcing challenges and improve their supply chains."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {caseStudies.map((study, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="h-48 bg-gradient-to-br from-navy-700 to-navy-900 p-6 flex flex-col justify-end">
              <span className="text-xs font-medium text-navy-200 uppercase tracking-wider">{study.industry}</span>
              <h3 className="text-lg font-bold text-white mt-1">{study.title}</h3>
            </div>
            <div className="p-6">
              <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full mb-3">
                {study.result}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{study.desc}</p>
              <div className="flex flex-wrap gap-2">
                {study.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-navy-50 text-navy-600 text-xs rounded">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <CTAButton to="/case-studies">View All Case Studies</CTAButton>
      </div>
    </div>
  </section>
)

const TestimonialsSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Testimonials"
        title="What Our Clients Say"
        subtitle="Hear from procurement professionals who trust SSourcing China with their supply chain."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex items-center gap-1 mb-4">
              {[0,1,2,3,4].map(i => (
                <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-navy-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {t.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const FAQSection = () => {
  const [openIdx, setOpenIdx] = React.useState(null)
  return (
    <section className="py-20 bg-navy-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Common questions about our sourcing services, process, and pricing."
        />
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-semibold text-navy-900 pr-4">{faq.q}</span>
                <ChevronRight className={cn('w-5 h-5 text-gray-400 shrink-0 transition-transform', openIdx === idx && 'rotate-90')} />
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const InquirySection = () => (
  <section className="py-20 bg-gradient-to-br from-navy-800 to-navy-900 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '30px 30px'
      }} />
    </div>
    <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="inline-block px-3 py-1 bg-white/10 text-accent-300 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
        Start Sourcing
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to Source Products from China?
      </h2>
      <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
        Get a free sourcing consultation and detailed quote. No commitment required. Our team typically responds within 24 hours.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <CTAButton>Get a Free Sourcing Quote</CTAButton>
        <a
          href="mailto:info@ssourcingchina.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
        >
          <Mail className="w-4 h-4" />
          Email Us Directly
        </a>
      </div>
    </div>
  </section>
)

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrustBanner />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <FAQSection />
      <InquirySection />
    </div>
  )
}

export default Home
