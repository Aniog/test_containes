import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ShieldCheck, Factory, Ship, Search, ClipboardCheck, Package, ArrowRight, Star, Users, Globe, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers in China that match your product requirements, budget, and quality standards.'
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, quality management systems, and social compliance.'
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications and standards.'
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs clearance, and delivery tracking to your destination.'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    description: 'Share your product requirements, target price, quantity, and quality standards with our team.'
  },
  {
    step: '02',
    title: 'We Source & Verify',
    description: 'We find suitable suppliers, verify their credentials, and negotiate terms on your behalf.'
  },
  {
    step: '03',
    title: 'Inspect & Approve',
    description: 'We conduct quality inspections at key production stages and provide detailed reports for your approval.'
  },
  {
    step: '04',
    title: 'Ship & Deliver',
    description: 'We coordinate shipping, handle logistics, and keep you updated until your goods arrive safely.'
  }
]

const trustPoints = [
  { icon: Users, text: '500+ verified suppliers in our network' },
  { icon: Globe, text: 'Serving buyers from 40+ countries' },
  { icon: Star, text: '98% client satisfaction rate' },
  { icon: ShieldCheck, text: '100% transparent process with detailed reports' }
]

const problems = [
  'Difficulty finding reliable suppliers in China',
  'Language and cultural barriers in negotiations',
  'Uncertainty about factory capabilities and legitimacy',
  'Quality issues that lead to returns and losses',
  'Complex logistics and customs procedures',
  'Time zone differences making communication challenging'
]

const faqs = [
  {
    question: 'What is a sourcing agent?',
    answer: 'A sourcing agent is a local representative who helps international buyers find and work with suppliers in China. We handle supplier research, factory verification, price negotiation, quality inspection, and shipping coordination on your behalf.'
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct comprehensive factory audits including business license verification, on-site visits, production capacity assessment, quality management system review, and reference checks with existing clients.'
  },
  {
    question: 'What quality inspections do you offer?',
    answer: 'We offer pre-production inspections (raw materials), during-production inspections (DUPRO), and pre-shipment inspections (PSI). Each inspection includes detailed photo reports and pass/fail criteria based on your specifications.'
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Timeline varies by product complexity. Typically, supplier identification takes 3-5 business days, factory verification 2-3 days, sample approval 1-2 weeks, and production 2-6 weeks. We provide realistic timelines during the initial consultation.'
  },
  {
    question: 'What are your fees?',
    answer: 'We offer flexible pricing models including commission-based (percentage of order value), fixed project fees, or retainer arrangements. Fees depend on product category, order volume, and service scope. Contact us for a customized quote.'
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we coordinate end-to-end logistics including freight forwarding, customs documentation, duties calculation, and delivery tracking. We work with reliable shipping partners to ensure smooth transit.'
  }
]

const Home = () => {
  const heroRef = useRef(null)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current)
  }, [])

  return (
    <div ref={heroRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China. Your trusted partner for hassle-free sourcing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Get a Free Sourcing Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/how-it-works">
                    See How It Works <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
                {trustPoints.slice(0, 2).map((point, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mr-2" />
                    {point.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                data-strk-img-id="hero-factory-visual-8f2a9c"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory and sourcing"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <p id="hero-title" className="hidden">China Sourcing Agent for Global Buyers</p>
              <p id="hero-subtitle" className="hidden">We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="flex items-center justify-center md:justify-start">
                <point.icon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              End-to-End Sourcing Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From finding the right supplier to delivering goods to your doorstep, we handle every step of the sourcing process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/services">View All Services <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Common Sourcing Challenges We Solve
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Many buyers struggle with these issues when sourcing from China. We eliminate the risks and complexities.
              </p>
              <ul className="space-y-4">
                {problems.map((problem, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-red-600" />
                      </div>
                    </div>
                    <span className="ml-3 text-slate-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                data-strk-img-id="problems-visual-3d4e5f"
                data-strk-img="[problems-title] [problems-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Sourcing challenges"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
              <h3 id="problems-title" className="hidden">Common Sourcing Challenges</h3>
              <p id="problems-subtitle" className="hidden">We solve the common problems buyers face when sourcing from China</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A simple, transparent process designed to give you confidence and control over your sourcing projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-bold text-blue-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-slate-300">
                    <ChevronRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/contact">Start Your Sourcing Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We source a wide range of products across multiple industries. Here are some of the categories we specialize in.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Electronics', 'Home & Garden', 'Apparel & Textiles', 'Toys & Gifts',
              'Auto Parts', 'Industrial Equipment', 'Health & Beauty', 'Sports & Outdoors',
              'Packaging', 'Lighting', 'Furniture', 'Jewelry & Accessories'
            ].map((category, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center rounded-lg border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                {category}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/products">View All Product Categories <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Recent Case Studies
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              See how we've helped businesses like yours source quality products from China.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'European Home Goods Retailer',
                category: 'Home & Garden',
                result: 'Reduced costs by 22% while improving quality'
              },
              {
                title: 'US Electronics Brand',
                category: 'Electronics',
                result: 'Found 3 certified suppliers in 2 weeks'
              },
              {
                title: 'Australian Sports Equipment Company',
                category: 'Sports & Outdoors',
                result: 'Passed 100% pre-shipment inspection'
              }
            ].map((study, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-slate-100 relative">
                  <img
                    data-strk-img-id={`case-study-preview-${idx}`}
                    data-strk-img={`[case-study-title-${idx}] [case-study-category-${idx}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <h3 id={`case-study-title-${idx}`} className="hidden">{study.title}</h3>
                  <p id={`case-study-category-${idx}`} className="hidden">{study.category}</p>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 mb-3">
                    {study.category}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{study.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{study.result}</p>
                  <Link to="/case-studies" className="text-sm font-medium text-blue-600 hover:text-blue-700 inline-flex items-center">
                    Read case study <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/case-studies">View All Case Studies <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Get answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-slate-200 bg-white overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-medium text-slate-900">{faq.question}</span>
                  <ChevronRight
                    className={`h-5 w-5 text-slate-400 transition-transform ${
                      openFaq === idx ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation sourcing quote. Tell us what you need, and we'll show you how we can help.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home