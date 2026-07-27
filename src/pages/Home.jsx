import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  CheckCircle, ArrowRight, ChevronDown, ChevronUp, 
  Factory, Search, ClipboardCheck, Truck, Package, Shield,
  Users, Globe, Award, Clock
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

// Hero Section
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background-light via-white to-blue-50 overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>Trusted by 500+ Global Buyers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              China Sourcing Agent for{' '}
              <span className="text-primary">Global Buyers</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-xl">
              We help you find verified suppliers, ensure product quality, and manage the entire sourcing process from factory to your doorstep. No more guesswork, just reliable partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  See How It Works
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-text-secondary">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">No upfront fees</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">Response within 24h</span>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary-light p-1">
              <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Factory className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">Factory Floor</h3>
                  <p className="text-text-secondary">Professional manufacturing environment</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-text-secondary">Verified Suppliers</p>
                <p className="font-semibold text-text-primary">2,000+ Factories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Trust Stats Bar
const TrustBar = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Globe, value: '35+', label: 'Countries' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Clock, value: '98%', label: 'On-Time Delivery' },
  ]

  return (
    <section className="bg-primary py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-blue-200 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Services Section
const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify factory credentials, business licenses, production capacity, and certifications to ensure you work with legitimate suppliers.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Our QC team performs pre-shipment inspections, during-production checks, and final random inspections to your specifications.',
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'We monitor production progress, ensure timeline adherence, and address any issues that arise during manufacturing.',
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'We coordinate freight forwarding, customs clearance, and documentation to deliver your goods safely and on time.',
    },
    {
      icon: Package,
      title: 'Product Sourcing',
      description: 'We help you find the right manufacturers, negotiate prices, and manage samples for any product category.',
    },
    {
      icon: Shield,
      title: 'Contract Protection',
      description: 'We help draft and review contracts to protect your interests and ensure clear terms with your suppliers.',
    },
  ]

  return (
    <section className="py-20 bg-background-light" id="services">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Our Sourcing Services
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Comprehensive solutions to ensure your China sourcing is smooth, safe, and successful.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">{service.title}</h3>
              <p className="text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Process Section
const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what you need - product specifications, quantity, target price, and timeline.',
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'We research and verify manufacturers, then present you with qualified options.',
    },
    {
      number: '03',
      title: 'Negotiate & Confirm',
      description: 'We negotiate prices, terms, and samples until you find the right match.',
    },
    {
      number: '04',
      title: 'Production Monitoring',
      description: 'We oversee production, conduct quality checks, and keep you updated.',
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We handle logistics, customs, and deliver your goods to your doorstep.',
    },
  ]

  return (
    <section className="py-20 bg-white" id="process">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            How Our Sourcing Works
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A simple, transparent 5-step process to source products from China with confidence.
          </p>
        </div>
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Link to="/how-it-works">
            <Button size="lg">
              Learn More About Our Process
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Products Section
const Products = () => {
  const products = [
    { name: 'Electronics', description: 'Consumer electronics, gadgets, smart devices' },
    { name: 'Textiles & Apparel', description: 'Clothing, fabrics, fashion accessories' },
    { name: 'Home & Garden', description: 'Furniture, decor, kitchenware, outdoor' },
    { name: 'Machinery', description: 'Industrial equipment, parts, tools' },
    { name: 'Packaging', description: 'Boxes, labels, custom packaging solutions' },
    { name: 'Health & Beauty', description: 'Cosmetics, personal care, wellness products' },
    { name: 'Toys & Games', description: 'Educational toys, games, gifts' },
    { name: 'Automotive', description: 'Parts, accessories, vehicle components' },
  ]

  return (
    <section className="py-20 bg-background-light" id="products">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Products We Source
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We have expertise across a wide range of product categories from verified Chinese manufacturers.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-border"
            >
              <h3 className="text-lg font-semibold text-text-primary mb-2">{product.name}</h3>
              <p className="text-text-secondary text-sm">{product.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="outline" size="lg">
              View All Categories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Problems We Solve
const Problems = () => {
  const problems = [
    {
      title: 'Language Barriers',
      description: 'We communicate fluently in English and Mandarin, eliminating miscommunication.',
    },
    {
      title: 'Supplier Scams',
      description: 'Our verification process ensures you work with legitimate, established factories.',
    },
    {
      title: 'Quality Issues',
      description: 'Regular inspections catch defects early, preventing costly shipments of bad products.',
    },
    {
      title: 'Hidden Costs',
      description: 'Transparent pricing and thorough cost breakdowns prevent unexpected expenses.',
    },
    {
      title: 'Shipping Complexities',
      description: 'We navigate customs, documentation, and logistics so you don\'t have to.',
    },
    {
      title: 'Time Zone Challenges',
      description: 'Based in China, we can respond quickly to any issues during your production cycle.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Problems We Solve
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Common challenges when sourcing from China, and how we help you overcome them.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="flex gap-4 p-6 rounded-xl bg-background-light border border-border"
            >
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{problem.title}</h3>
                <p className="text-text-secondary text-sm">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Case Studies Preview
const CaseStudies = () => {
  const cases = [
    {
      company: 'TechStart Inc.',
      industry: 'Electronics',
      challenge: 'Needed a reliable supplier for 50,000 smart home devices',
      result: 'Found verified factory, completed order 2 weeks early',
      metric: '35% cost savings',
    },
    {
      company: 'Fashion Forward',
      industry: 'Apparel',
      challenge: 'Struggled with inconsistent quality from previous suppliers',
      result: 'Implemented QC process, now 99.5% defect-free',
      metric: '99.5% quality rate',
    },
    {
      company: 'HomeGoods Plus',
      industry: 'Home & Garden',
      challenge: 'Complex multi-item order with custom packaging',
      result: 'Coordinated 8 suppliers, delivered as single shipment',
      metric: '40% faster delivery',
    },
  ]

  return (
    <section className="py-20 bg-background-light" id="case-studies">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Success Stories
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            See how we've helped businesses like yours source successfully from China.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Package className="w-16 h-16 text-primary/40" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {caseStudy.industry}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{caseStudy.company}</h3>
                <p className="text-text-secondary text-sm mb-3">{caseStudy.challenge}</p>
                <p className="text-success font-semibold text-sm mb-3">{caseStudy.result}</p>
                <div className="pt-3 border-t border-border">
                  <span className="text-2xl font-bold text-primary">{caseStudy.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/case-studies">
            <Button variant="outline" size="lg">
              View All Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
const FAQ = () => {
  const faqs = [
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct thorough verification including business license checks, factory visits, production capacity assessment, and verification of certifications (ISO, CE, etc.). We also check for any history of disputes or complaints.',
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure varies based on the services you need. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific requirements.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'The timeline varies depending on product complexity and availability of suppliers. Typically, initial supplier matches are provided within 5-7 business days. The full process from request to delivery can take 4-12 weeks.',
    },
    {
      question: 'Do you only work with large orders?',
      answer: 'We work with businesses of all sizes, from startups to large enterprises. Minimum order quantities (MOQs) vary by supplier and product. We\'ll help you find the right match for your volume requirements.',
    },
    {
      question: 'Can you help with product development?',
      answer: 'Yes, we can assist with product development including design improvements, material suggestions, and prototyping. Our team has experience helping clients refine their products for manufacturing.',
    },
    {
      question: 'What quality control measures do you offer?',
      answer: 'We offer multiple QC options: pre-production inspections, during-production inspections, pre-shipment inspections, and container loading supervision. We can customize the inspection level based on your needs.',
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Get answers to common questions about our China sourcing services.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-background-light transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-text-primary">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-text-secondary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-text-secondary flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-text-secondary">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
const CTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto mb-8">
            Get a free sourcing quote today. Tell us what you need, and we'll find the right suppliers for your business.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent-hover">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Main Home Page
const Home = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Products />
      <Problems />
      <CaseStudies />
      <FAQ />
      <CTA />
    </>
  )
}

export default Home