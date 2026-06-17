import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Package,
  ArrowRight, CheckCircle, Users, Globe, Clock, Award,
  ChevronRight, BarChart3, AlertTriangle, TrendingUp
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified suppliers across China matching your product specs, budget, and MOQ requirements.',
    link: '/services',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site audits to verify factory legitimacy, production capacity, certifications, and compliance standards.',
    link: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    description: 'Pre-shipment inspections, during-production checks, and container loading supervision to protect your investment.',
    link: '/services',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular factory visits and progress reports to keep your orders on schedule and within specification.',
    link: '/services',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management from factory door to your warehouse, including customs documentation.',
    link: '/services',
  },
  {
    icon: Package,
    title: 'Product Development',
    description: 'Assist with prototyping, sampling, packaging design, and OEM/ODM customization for new products.',
    link: '/services',
  },
]

const problems = [
  {
    problem: 'Hard to find reliable suppliers online',
    solution: 'We have a vetted network of 2,400+ verified factories across 15 provinces',
    icon: Search,
  },
  {
    problem: 'Language and cultural barriers',
    solution: 'Bilingual team bridges communication gaps and negotiates on your behalf',
    icon: Globe,
  },
  {
    problem: 'Quality issues after shipment',
    solution: 'Multi-stage QC inspections catch defects before goods leave China',
    icon: AlertTriangle,
  },
  {
    problem: 'Production delays and poor communication',
    solution: 'Weekly updates and on-site follow-up keep projects on track',
    icon: Clock,
  },
  {
    problem: 'Complicated shipping and customs',
    solution: 'Full logistics coordination with freight partners and documentation support',
    icon: Truck,
  },
  {
    problem: 'No visibility into factory conditions',
    solution: 'Detailed audit reports with photos, videos, and compliance documentation',
    icon: ShieldCheck,
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Share Your Requirements',
    description: 'Tell us what you need: product specs, target price, order volume, and timeline.',
  },
  {
    step: '02',
    title: 'We Find & Verify Suppliers',
    description: 'We shortlist 3-5 qualified factories, verify their credentials, and negotiate terms.',
  },
  {
    step: '03',
    title: 'Sampling & Evaluation',
    description: 'Coordinate samples, compare quality, and refine specifications before mass production.',
  },
  {
    step: '04',
    title: 'Production & QC Oversight',
    description: 'Monitor production progress, conduct inspections, and resolve issues in real time.',
  },
  {
    step: '05',
    title: 'Shipping & Delivery',
    description: 'Coordinate logistics, manage customs documentation, and ensure safe delivery.',
  },
]

const products = [
  { name: 'Electronics & Components', desc: 'Consumer electronics, PCBA, cables, chargers, IoT devices' },
  { name: 'Home & Garden', desc: 'Furniture, lighting, kitchenware, decor, outdoor products' },
  { name: 'Apparel & Textiles', desc: 'Garments, bags, fabrics, accessories, footwear' },
  { name: 'Machinery & Hardware', desc: 'Industrial equipment, tools, metal parts, hardware' },
  { name: 'Packaging & Printing', desc: 'Boxes, labels, bags, promotional materials' },
  { name: 'Automotive Parts', desc: 'Auto accessories, replacement parts, EV components' },
]

const stats = [
  { value: '2,400+', label: 'Verified Suppliers' },
  { value: '850+', label: 'Clients Served' },
  { value: '12+', label: 'Years Experience' },
  { value: '35+', label: 'Countries Served' },
]

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Verified Factory Network',
    description: 'Every supplier in our network undergoes a 40-point verification audit before onboarding.',
  },
  {
    icon: Users,
    title: 'Local Bilingual Team',
    description: 'Our Shenzhen-based team speaks Mandarin and English, eliminating communication gaps.',
  },
  {
    icon: Award,
    title: 'Industry Certifications',
    description: 'ISO 9001 certified processes. We follow international quality management standards.',
  },
  {
    icon: BarChart3,
    title: 'Transparent Reporting',
    description: 'Real-time dashboards, photo reports, and weekly updates so you stay in control.',
  },
]

const caseStudies = [
  {
    client: 'US Kitchenware Brand',
    result: 'Reduced defect rate from 8% to under 1%',
    description: 'Sourced 12 new suppliers, implemented 3-stage QC, saved $180K in returns.',
    industry: 'Home & Kitchen',
  },
  {
    client: 'European Electronics Distributor',
    result: 'Cut lead times from 90 to 55 days',
    description: 'Streamlined supplier base, improved production planning, established backup factories.',
    industry: 'Electronics',
  },
  {
    client: 'Australian Retail Chain',
    result: 'Launched 45 SKUs in 8 months',
    description: 'End-to-end sourcing and development support for a new private-label product line.',
    industry: 'Retail',
  },
]

const faqs = [
  {
    q: 'What is your typical project timeline?',
    a: 'Supplier identification takes 1-2 weeks. Sampling 2-4 weeks. Production 30-60 days depending on complexity. We provide a detailed timeline with your proposal.',
  },
  {
    q: 'How do you charge for your services?',
    a: 'We operate on a transparent fee structure: a fixed sourcing fee per project, plus optional QC and logistics services. No hidden commissions from suppliers.',
  },
  {
    q: 'Do you work with small order volumes?',
    a: 'Yes. We support startups and SMEs with MOQs as low as 500 units for many product categories. Contact us to discuss your specific needs.',
  },
  {
    q: 'Can you help with custom product development?',
    a: 'Absolutely. Our team assists with prototyping, mold development, packaging design, and OEM/ODM projects from concept to production.',
  },
  {
    q: 'What happens if quality issues arise?',
    a: 'We conduct pre-shipment inspections and during-production checks. If defects are found, we work with the factory for rework or replacement before goods ship.',
  },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          data-strk-bg-id="hero-bg-ssourcing-1a2b3c"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              <span>Trusted by 850+ buyers in 35+ countries</span>
            </div>
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              China Sourcing Agent for{' '}
              <span className="text-secondary">Global Buyers</span>
            </h1>
            <p
              id="hero-subtitle"
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl"
            >
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping — all from one trusted partner in China since 2012.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white text-base font-semibold rounded-md hover:bg-secondary-hover transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white text-base font-semibold rounded-md hover:bg-white/20 transition-colors border border-white/20"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary border-b border-primary-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-primary-light text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-4">
              End-to-End Sourcing Solutions
            </h2>
            <p className="text-slate-500 text-lg">
              From finding suppliers to delivering goods to your door, we handle every step of the sourcing process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group p-8 bg-slate-50 rounded-lg border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-6">
                Problems We Solve for Overseas Buyers
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Sourcing from China can be risky without local presence. We eliminate the common pain points that cost businesses time, money, and reputation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-hover transition-colors"
              >
                Discuss Your Project <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="space-y-5">
              {problems.map((item) => (
                <div key={item.problem} className="flex gap-4 p-5 bg-white rounded-lg border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold mb-1">{item.problem}</p>
                    <p className="text-slate-500 text-sm">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-4">
              How We Work
            </h2>
            <p className="text-slate-500 text-lg">
              A proven 5-step process designed to minimize risk and maximize results for every sourcing project.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="relative text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-slate-200" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-hover transition-colors"
            >
              Learn more about our process <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-4">
              Products We Source
            </h2>
            <p className="text-slate-500 text-lg">
              Our team has deep expertise across major manufacturing categories in China.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="group p-6 bg-white rounded-lg border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Package className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-bold text-slate-800">{product.name}</h3>
                </div>
                <p className="text-slate-500 text-sm">{product.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-colors"
            >
              View All Categories <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Results</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3">
                Client Success Stories
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center text-primary font-semibold mt-4 md:mt-0 hover:text-primary-hover transition-colors"
            >
              View all case studies <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.client}
                className="p-8 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-lg transition-all"
              >
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                  {cs.industry}
                </span>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{cs.client}</h3>
                <p className="text-secondary font-bold text-lg mb-3">{cs.result}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{cs.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Buyers Trust SSourcing China
            </h2>
            <p className="text-primary-light text-lg">
              We have built our reputation on transparency, consistency, and results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((tp) => (
              <div key={tp.title} className="text-center">
                <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-5">
                  <tp.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tp.title}</h3>
                <p className="text-primary-light text-sm leading-relaxed">{tp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-lg border border-slate-100 shadow-sm open:shadow-md transition-all"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-slate-800 font-semibold pr-4">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-500 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-slate-500 text-lg mb-8 max-w-2xl mx-auto">
            Share your requirements and receive a free sourcing quote within 48 hours. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white text-base font-semibold rounded-md hover:bg-secondary-hover transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="mailto:info@ssourcingchina.com"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-slate-700 text-base font-semibold rounded-md hover:border-primary hover:text-primary transition-colors"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}