import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { 
  Shield, CheckCircle, Truck, Factory, Search, ClipboardCheck, 
  Package, Users, Clock, Globe, ChevronRight, Star, ArrowRight,
  Phone, Mail, MapPin, Menu
} from 'lucide-react'

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-md'
  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white px-6 py-3',
    secondary: 'bg-blue-800 hover:bg-blue-900 text-white px-6 py-3',
    outline: 'border-2 border-blue-800 text-blue-800 hover:bg-blue-50 px-6 py-3',
  }
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

const SectionHeader = ({ eyebrow, title, description, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
    {eyebrow && <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">{eyebrow}</p>}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {description && <p className="text-slate-600 text-lg leading-relaxed">{description}</p>}
  </div>
)

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    description: 'We verify factory credentials, business licenses, production capacity, and facility conditions to ensure you work with legitimate partners.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    description: 'Pre-production, during-production, and pre-shipment inspections to catch issues early and ensure products meet your specifications.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular monitoring of production progress, timeline adherence, and prompt issue resolution throughout the manufacturing process.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management including customs clearance, documentation, and delivery tracking to your destination.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Submit Your Inquiry',
    description: 'Tell us what products you need, quantities, specifications, and target pricing. We respond within 24 hours.',
  },
  {
    number: '02',
    title: 'Receive Supplier Matches',
    description: 'We identify and vet 3-5 qualified suppliers based on your requirements. You review profiles and select your preferred partners.',
  },
  {
    number: '03',
    title: 'Sample Verification',
    description: 'We coordinate samples, conduct inspections, and provide detailed reports so you can verify quality before bulk production.',
  },
  {
    number: '04',
    title: 'Production & Monitoring',
    description: 'Regular production updates, quality checks at key stages, and immediate communication of any issues.',
  },
  {
    number: '05',
    title: 'Final Inspection',
    description: 'Comprehensive pre-shipment inspection ensures all products meet agreed specifications and standards.',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We handle all logistics, documentation, and coordinate delivery to your warehouse or distribution center.',
  },
]

const products = [
  { name: 'Electronics & Components', examples: 'PCBs, consumer electronics, smart devices' },
  { name: 'Textiles & Apparel', examples: 'Garments, fabrics, accessories' },
  { name: 'Machinery & Parts', examples: 'Industrial equipment, mechanical components' },
  { name: 'Home & Garden', examples: 'Furniture, décor, outdoor equipment' },
  { name: 'Packaging & Printing', examples: 'Boxes, labels, promotional materials' },
  { name: 'Sports & Outdoor', examples: 'Fitness equipment, camping gear' },
]

const trustPoints = [
  { icon: Shield, stat: '500+', label: 'Verified Suppliers' },
  { icon: Users, stat: '200+', label: 'Happy Clients' },
  { icon: CheckCircle, stat: '98%', label: 'Quality Pass Rate' },
  { icon: Clock, stat: '24h', label: 'Response Time' },
]

const caseStudies = [
  {
    industry: 'Consumer Electronics',
    client: 'TechRetail GmbH (Germany)',
    challenge: 'Needed to source Bluetooth speakers with strict quality requirements and tight delivery timeline.',
    solution: 'Verified 4 factories, coordinated sample testing, implemented QC checkpoints, and managed air freight.',
    result: 'Successfully launched product line with 99.2% customer satisfaction rate.',
  },
  {
    industry: 'Home Furnishings',
    client: 'Nordic Living (Sweden)',
    challenge: 'Sourcing sustainable furniture components from multiple suppliers while maintaining quality consistency.',
    solution: 'Established supplier network, implemented unified quality standards, coordinated consolidated shipping.',
    result: 'Reduced sourcing costs by 23% while improving product quality.',
  },
]

const faqs = [
  {
    question: 'How do you verify suppliers are legitimate?',
    answer: 'We conduct thorough verification including business license checks, factory visits, facility inspections, financial stability assessment, and review of existing client references. Every supplier in our network has been personally vetted by our team.',
  },
  {
    question: 'What are your fees for sourcing services?',
    answer: 'Our fee structure depends on the scope of services required. We typically charge a percentage of the order value or a fixed project fee. Initial consultations and supplier matching are often complimentary. Contact us for a detailed quote based on your specific needs.',
  },
  {
    question: 'How do you handle quality control?',
    answer: 'We offer multiple QC options: pre-production inspection (materials and setup), during-production inspection (progress checks), pre-shipment inspection (final quality check), and container loading supervision. Reports include detailed photos and compliance documentation.',
  },
  {
    question: 'What if products arrive with quality issues?',
    answer: 'We document everything during inspection phases to minimize risk. If issues arise, we work with suppliers on corrective actions, replacement, or refunds based on inspection findings and contract terms.',
  },
  {
    question: 'Do you handle shipping and logistics?',
    answer: 'Yes, we coordinate full logistics including inland transportation, export customs, freight forwarding, import customs clearance, and final delivery. We work with established shipping partners to ensure competitive rates and reliable service.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Timeline varies by product complexity. Typical ranges: simple product identification (1-2 weeks), sample verification (2-4 weeks), production (4-12 weeks depending on quantity), shipping (2-6 weeks). We provide detailed timelines during the planning phase.',
  },
]

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            data-strk-bg-id="hero-bg-001"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-900/90" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">
                China Sourcing Agent
              </p>
              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="hero-subtitle" className="text-xl text-slate-300 leading-relaxed mb-8">
                Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all with one trusted partner based in China.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  How It Works
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
                <img
                  data-strk-img-id="hero-img-001"
                  data-strk-img="[hero-subtitle] [hero-title] factory manufacturing production"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="China manufacturing facility"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="relative bg-white/5 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustPoints.map((point, index) => (
                <div key={index} className="text-center">
                  <point.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <p className="text-3xl font-bold text-white">{point.stat}</p>
                  <p className="text-slate-400 text-sm">{point.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Our Services"
            title="End-to-End Sourcing Solutions"
            description="From finding suppliers to delivering products, we handle every step of the sourcing process so you can focus on your business."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Why Work With Us"
                title="Challenges We Solve for You"
                centered={false}
              />
              <div className="space-y-6">
                {[
                  { problem: "Can't verify if suppliers are legitimate", solution: "We personally visit and verify every factory" },
                  { problem: "Quality issues discovered after shipment", solution: "Multi-stage QC inspections catch problems early" },
                  { problem: "Communication barriers with suppliers", solution: "Native Mandarin speakers, fluent in English" },
                  { problem: "Production delays and missed deadlines", solution: "Regular monitoring and proactive updates" },
                  { problem: "Complex logistics and customs", solution: "Full logistics coordination from factory to door" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Challenge: {item.problem}</p>
                      <p className="text-slate-600">Solution: {item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-blue-200 rounded-2xl" />
              <img
                data-strk-img-id="problems-img-001"
                data-strk-img="quality inspection factory checking products"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality inspection in progress"
                className="relative rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Work Together"
            description="A clear, transparent process that keeps you informed at every step."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-blue-100 absolute -top-2 -left-2">{step.number}</div>
                <div className="relative pt-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors"
            >
              See Detailed Process
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Product Categories"
            title="Products We Source"
            description="We have established networks across multiple manufacturing sectors in China."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Package className="w-6 h-6 text-orange-500" />
                  <h3 className="text-lg font-bold">{product.name}</h3>
                </div>
                <p className="text-slate-400 text-sm">{product.examples}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold transition-colors"
            >
              View All Categories
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Success Stories"
            title="Case Studies"
            description="Real examples of how we've helped businesses succeed with China sourcing."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {study.industry}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{study.client}</h3>
                <div className="space-y-4 mt-6">
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-slate-700">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-slate-700">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-teal-700 uppercase tracking-wider mb-1">Result</p>
                    <p className="text-slate-700 font-medium">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors"
            >
              View More Case Studies
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers to common questions about our sourcing services."
          />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl border border-slate-200 group"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-slate-900 hover:text-blue-700 transition-colors list-none">
                  <span>{faq.question}</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your sourcing project. We'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:info@ssourcing.cn"
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
