import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  Search, 
  ShieldCheck, 
  ClipboardCheck, 
  Ship, 
  Factory, 
  CheckCircle2, 
  Users, 
  Globe, 
  Award, 
  Clock,
  ArrowRight,
  ChevronDown,
  Star
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers in China that match your product requirements, quality standards, and budget.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site audits to verify factory credentials, capacity, quality systems, and business legitimacy before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment and in-production inspections to ensure products meet your specifications and quality standards.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs documentation, and delivery tracking.',
  },
]

const problems = [
  {
    title: 'Unreliable suppliers',
    description: 'We verify every factory through on-site audits, business license checks, and reference validation.',
  },
  {
    title: 'Quality issues',
    description: 'Our QC inspectors catch defects before shipment, reducing returns and protecting your brand.',
  },
  {
    title: 'Communication barriers',
    description: 'Native Mandarin speakers bridge the gap between your requirements and Chinese manufacturers.',
  },
  {
    title: 'Hidden costs',
    description: 'Transparent pricing with no hidden fees. We negotiate MOQs, payment terms, and shipping costs on your behalf.',
  },
  {
    title: 'Shipping delays',
    description: 'We monitor production timelines and coordinate logistics to keep your supply chain on schedule.',
  },
]

const trustPoints = [
  { icon: Users, stat: '500+', label: 'Clients served' },
  { icon: Globe, stat: '40+', label: 'Countries' },
  { icon: Award, stat: '10+', label: 'Years experience' },
  { icon: Clock, stat: '24/7', label: 'Support' },
]

const faqs = [
  {
    question: 'What is a sourcing agent?',
    answer: 'A sourcing agent acts as your local representative in China, helping you find suppliers, negotiate prices, inspect quality, and coordinate shipping. We bridge the gap between overseas buyers and Chinese manufacturers.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits, verify business licenses, check production capacity, review quality control processes, and contact existing clients for references. We only recommend suppliers that meet our strict criteria.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our fees depend on the scope of work. We typically charge a percentage of the order value for sourcing and procurement services, or a fixed fee for inspection and verification services. Contact us for a customized quote.',
  },
  {
    question: 'Do you handle shipping?',
    answer: 'Yes, we coordinate end-to-end logistics including air freight, sea freight, customs clearance, and door-to-door delivery. We work with trusted freight forwarders to ensure timely and cost-effective shipping.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We source products across multiple categories including electronics, home and garden, apparel and textiles, industrial equipment, and more. If you have a specific product in mind, contact us to discuss your needs.',
  },
]

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <span>Trusted by 500+ global buyers</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg text-slate-600 max-w-xl">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get a Free Sourcing Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    See How It Works
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-700">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-slate-600">Rated 4.9/5 by our clients</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl"></div>
                <div className="absolute inset-4 bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Factory Verified</p>
                        <p className="text-sm text-slate-500">Shenzhen Electronics Co.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <ClipboardCheck className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">QC Passed</p>
                        <p className="text-sm text-slate-500">100% inspection completed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Ship className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Shipped</p>
                        <p className="text-sm text-slate-500">In transit to Los Angeles</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full mb-3">
                  <point.icon className="w-6 h-6 text-slate-700" />
                </div>
                <div className="text-2xl font-bold text-slate-900">{point.stat}</div>
                <div className="text-sm text-slate-600">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              End-to-End Sourcing Services
            </h2>
            <p className="text-lg text-slate-600">
              From finding the right supplier to delivering products to your doorstep, we handle every step of the sourcing process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-slate-600">
              Common challenges faced by overseas buyers sourcing from China, and how we help you overcome them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-600 font-bold text-sm">!</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{problem.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600">
              A simple, transparent process to source products from China with confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Share Requirements', description: 'Tell us what you need: product specs, quantity, budget, and timeline.' },
              { step: '2', title: 'We Source & Verify', description: 'We find matching suppliers, verify factories, and negotiate on your behalf.' },
              { step: '3', title: 'Inspect & Monitor', description: 'We inspect samples, monitor production, and ensure quality standards are met.' },
              { step: '4', title: 'Ship & Deliver', description: 'We coordinate shipping, handle customs, and deliver to your door.' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-slate-200 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 -right-4">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                Learn More About Our Process
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-slate-600">
              We source a wide range of products across multiple industries. Here are some of the categories we specialize in.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Electronics',
              'Home & Garden',
              'Apparel & Textiles',
              'Industrial Equipment',
              'Consumer Goods',
              'Auto Parts',
            ].map((category, index) => (
              <Link
                key={index}
                to="/products"
                className="group bg-slate-50 rounded-lg p-6 text-center border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <Factory className="w-8 h-8 text-slate-400 mx-auto mb-3 group-hover:text-slate-600 transition-colors" />
                <span className="text-sm font-medium text-slate-700">{category}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Categories
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-slate-600">
              See how we've helped businesses like yours source products from China successfully.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Electronics Retailer',
                result: 'Reduced sourcing costs by 22% while improving product quality',
                category: 'Electronics',
              },
              {
                title: 'Home Goods Brand',
                result: 'Found 3 new suppliers and launched 12 new products in 6 months',
                category: 'Home & Garden',
              },
              {
                title: 'Apparel Company',
                result: 'Cut defect rate from 8% to 1.5% with our QC services',
                category: 'Apparel',
              },
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-sm text-slate-500 mb-2">{study.category}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{study.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{study.result}</p>
                <Link to="/case-studies" className="text-sm font-medium text-slate-900 hover:text-slate-700 inline-flex items-center gap-1">
                  Read case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/case-studies">
              <Button variant="outline" size="lg">
                View All Case Studies
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Get answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-slate-50 rounded-lg border border-slate-200">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                  <span className="text-slate-900">{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  </span>
                </summary>
                <div className="text-slate-600 px-6 pb-6 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation sourcing quote. Tell us what you need, and we'll show you how we can help.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-slate-900">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
