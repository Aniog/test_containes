import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  CheckCircle, 
  Factory, 
  Shield, 
  Truck, 
  Search, 
  ClipboardCheck, 
  Package, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  Users,
  Award,
  Globe,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-all duration-200'
  const variants = {
    primary: 'bg-red-600 text-white hover:bg-red-700',
    secondary: 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-slate-900'
  }
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`py-16 md:py-20 ${className}`}>
    {children}
  </section>
)

const SectionTitle = ({ subtitle, title, description, className = '' }) => (
  <div className={`text-center max-w-3xl mx-auto mb-12 ${className}`}>
    {subtitle && <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">{subtitle}</p>}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {description && <p className="text-slate-600 text-lg">{description}</p>}
  </div>
)

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${className}`}>
    {children}
  </div>
)

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border border-slate-200 rounded-lg mb-4">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center font-medium text-slate-900 hover:bg-slate-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-slate-600">
          {answer}
        </div>
      )}
    </div>
  )
}

const Hero = () => (
  <section className="relative bg-slate-900 text-white overflow-hidden">
    <div className="absolute inset-0">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-001"
        data-strk-bg="China factory manufacturing industrial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'/%3E")' }}
      />
      <div className="absolute inset-0 bg-slate-900/80" />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          China Sourcing Agent for Global Buyers
        </h1>
        <p className="text-xl text-slate-200 mb-8">
          We help you find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping from China. Reduce risk, save time, and scale your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact">
            <Button className="w-full sm:w-auto text-lg px-8 py-4">
              Get a Free Sourcing Quote
            </Button>
          </Link>
          <Link to="/how-it-works">
            <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4">
              Learn How It Works
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
)

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify factory credentials, business licenses, production capacity, and certifications to ensure you work with legitimate suppliers.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Our QC team performs pre-shipment inspections, during-production checks, and container loading supervision to ensure quality standards.',
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'We monitor production progress, quality control points, and delivery schedules to keep your order on track.',
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'We coordinate freight forwarding, customs clearance, and documentation for hassle-free shipping to your destination.',
    },
    {
      icon: Package,
      title: 'Product Sourcing',
      description: 'We find the right manufacturers for your specific product requirements, negotiating competitive prices on your behalf.',
    },
    {
      icon: Shield,
      title: 'Sample Management',
      description: 'We handle sample requests, quality evaluation, and approval process to ensure samples match your specifications.',
    },
  ]

  return (
    <Section id="services" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Our Services" 
          title="End-to-End Sourcing Solutions" 
          description="Comprehensive services to handle every aspect of your China sourcing operations."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="secondary">
              View All Services <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  )
}

const ProcessSection = () => {
  const steps = [
    { number: '01', title: 'Submit Request', description: 'Tell us what you need - product details, quantity, target price, and timeline.' },
    { number: '02', title: 'Supplier Matching', description: 'We identify and verify suitable factories, then present you with options.' },
    { number: '03', title: 'Price Negotiation', description: 'We negotiate competitive pricing and terms on your behalf.' },
    { number: '04', title: 'Production Monitoring', description: 'We oversee production, conduct quality checks, and provide regular updates.' },
    { number: '05', title: 'Shipping & Delivery', description: 'We coordinate logistics, customs, and ensure safe delivery to your door.' },
  ]

  return (
    <Section id="process" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Our Process" 
          title="How We Work" 
          description="A transparent, step-by-step approach to simplify your China sourcing."
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-slate-50 rounded-lg p-6 h-full">
                <span className="text-4xl font-bold text-red-600/20">{step.number}</span>
                <h3 className="text-lg font-semibold text-slate-900 mt-2 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-slate-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

const ProductsSection = () => {
  const products = [
    { name: 'Electronics', description: 'Consumer electronics, gadgets, smart devices' },
    { name: 'Textiles & Apparel', description: 'Clothing, fabrics, fashion accessories' },
    { name: 'Home & Garden', description: 'Furniture, decor, kitchenware, outdoor items' },
    { name: 'Machinery', description: 'Industrial equipment, parts, tools' },
    { name: 'Packaging', description: 'Boxes, bags, labels, custom packaging' },
    { name: 'Toys & Games', description: 'Educational toys, games, puzzles' },
    { name: 'Health & Beauty', description: 'Cosmetics, personal care, wellness products' },
    { name: 'Sports & Outdoors', description: 'Fitness equipment, camping gear, sporting goods' },
  ]

  return (
    <Section id="products" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="What We Source" 
          title="Products We Handle" 
          description="Wide range of product categories from verified Chinese manufacturers."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="p-5 text-center hover:border-red-500 border-2 border-transparent">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{product.name}</h3>
              <p className="text-slate-600 text-sm">{product.description}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="secondary">
              View All Products <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  )
}

const ProblemsSection = () => {
  const problems = [
    {
      problem: 'Language barriers and communication issues',
      solution: 'Our bilingual team bridges the communication gap, ensuring clear understanding between you and suppliers.'
    },
    {
      problem: 'Risk of working with unreliable suppliers',
      solution: 'We verify factory credentials, visit facilities, and conduct due diligence to minimize risk.'
    },
    {
      problem: 'Quality control challenges',
      solution: 'Professional QC inspections at key production stages ensure your products meet specifications.'
    },
    {
      problem: 'Complex logistics and shipping',
      solution: 'We handle freight forwarding, customs, and documentation for seamless delivery.'
    },
  ]

  return (
    <Section id="problems" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Why Choose Us" 
          title="Problems We Solve" 
          description="We address the common challenges faced by overseas buyers sourcing from China."
        />
        <div className="space-y-6">
          {problems.map((item, index) => (
            <Card key={index} className="p-6 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.problem}</h3>
                <p className="text-slate-600">{item.solution}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}

const TrustSection = () => {
  const stats = [
    { value: '500+', label: 'Clients Served', icon: Users },
    { value: '8+', label: 'Years Experience', icon: Clock },
    { value: '98%', label: 'Client Satisfaction', icon: Star },
    { value: '50+', label: 'Industries Served', icon: Globe },
  ]

  return (
    <Section id="trust" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-red-500" />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

const CaseStudiesSection = () => {
  const cases = [
    {
      company: 'TechStart Inc.',
      industry: 'Electronics',
      challenge: 'Needed to source smart home devices from China with strict quality requirements.',
      result: 'We verified 15 factories, conducted 3 rounds of QC inspections, and delivered 50,000 units with less than 1% defect rate.',
    },
    {
      company: 'Fashion Forward',
      industry: 'Apparel',
      challenge: 'Required sustainable textile suppliers with organic certifications.',
      result: 'We identified certified manufacturers, negotiated 20% lower pricing, and managed full production cycle.',
    },
    {
      company: 'HomeGoods Plus',
      industry: 'Home & Garden',
      challenge: 'Sourcing furniture set with custom designs and packaging.',
      result: 'We coordinated with 3 factories, performed in-person inspections, and handled all shipping logistics.',
    },
  ]

  return (
    <Section id="cases" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Success Stories" 
          title="Case Studies" 
          description="Real results from our sourcing partnerships."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="p-6">
              <div className="text-sm text-red-600 font-medium mb-2">{caseStudy.industry}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{caseStudy.company}</h3>
              <div className="mb-4">
                <p className="text-sm font-medium text-slate-700 mb-1">Challenge:</p>
                <p className="text-slate-600 text-sm">{caseStudy.challenge}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700 mb-1">Result:</p>
                <p className="text-slate-600 text-sm">{caseStudy.result}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/case-studies">
            <Button variant="secondary">
              View All Case Studies <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  )
}

const FAQSection = () => {
  const faqs = [
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct factory visits, verify business licenses, check production capacity, review certifications, and check references. We provide detailed reports with photos and videos.',
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure depends on the services you need. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific requirements.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Timeline varies based on product complexity and availability. Typically, supplier matching takes 1-2 weeks, production takes 2-8 weeks, and shipping takes 2-6 weeks depending on destination.',
    },
    {
      question: 'Do you handle small orders?',
      answer: 'Yes, we work with businesses of all sizes, from startups to large enterprises. We can help with orders as small as 500 units, though larger orders typically yield better unit economics.',
    },
    {
      question: 'How do you ensure quality?',
      answer: 'We offer multiple QC options: pre-production inspection, during-production inspection, pre-shipment inspection, and container loading supervision. We provide detailed inspection reports with photos.',
    },
    {
      question: 'Can you help with shipping and customs?',
      answer: 'Yes, we coordinate full logistics including freight forwarding, customs clearance, and documentation. We work with reliable shipping partners to ensure timely delivery.',
    },
  ]

  return (
    <Section id="faq" className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="FAQ" 
          title="Frequently Asked Questions" 
          description="Common questions about our sourcing services."
        />
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </Section>
  )
}

const CTASection = () => (
  <Section id="cta" className="bg-red-600">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Ready to Streamline Your China Sourcing?
      </h2>
      <p className="text-xl text-red-100 mb-8">
        Get expert guidance, verified suppliers, and quality assurance for your next order.
      </p>
      <Link to="/contact">
        <Button variant="outline" className="text-lg px-10 py-4 bg-white text-red-600 hover:bg-slate-100">
          Get a Free Sourcing Quote
        </Button>
      </Link>
    </div>
  </Section>
)

const Home = () => {
  return (
    <>
      <Helmet>
        <title>China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China</title>
        <meta name="description" content="SSourcing China - Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping." />
      </Helmet>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <CTASection />
    </>
  )
}

export default Home