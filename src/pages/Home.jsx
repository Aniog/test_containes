import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import InquiryForm from '@/components/forms/InquiryForm'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle, Users, Award, Clock, Shield, Truck } from 'lucide-react'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const services = [
    {
      icon: Users,
      title: 'Supplier Sourcing',
      desc: 'Identify and qualify manufacturers that match your product specifications and volume requirements.',
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      desc: 'On-site audits to confirm legitimacy, capabilities, and compliance before you place orders.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Inspection',
      desc: 'Pre-shipment and in-process inspections to ensure products meet your standards.',
    },
    {
      icon: Clock,
      title: 'Production Monitoring',
      desc: 'Regular progress updates and milestone tracking throughout the manufacturing cycle.',
    },
    {
      icon: Truck,
      title: 'Logistics Coordination',
      desc: 'Manage booking, documentation, and consolidation to ensure timely delivery.',
    },
    {
      icon: Award,
      title: 'Ongoing Support',
      desc: 'Dedicated account management for repeat orders and long-term supplier relationships.',
    },
  ]

  const processSteps = [
    { num: '01', title: 'Requirement Analysis', desc: 'We review your product specs, target price, and volume needs.' },
    { num: '02', title: 'Supplier Identification', desc: 'We shortlist 3-5 qualified factories based on your criteria.' },
    { num: '03', title: 'Verification & Sampling', desc: 'We audit factories and coordinate samples for your approval.' },
    { num: '04', title: 'Order Management', desc: 'We monitor production, conduct inspections, and handle logistics.' },
    { num: '05', title: 'Delivery & Follow-up', desc: 'We ensure on-time shipment and support future orders.' },
  ]

  const products = [
    'Electronics & Components',
    'Industrial Machinery',
    'Textiles & Apparel',
    'Home & Kitchen Goods',
    'Automotive Parts',
    'Medical Supplies',
    'Packaging Materials',
    'Consumer Products',
  ]

  const problems = [
    'Difficulty finding reliable manufacturers who meet quality standards',
    'Uncertainty about factory legitimacy and actual production capabilities',
    'Inconsistent product quality across batches',
    'Communication barriers and time zone challenges',
    'Complex logistics, documentation, and shipping coordination',
    'Lack of visibility into production progress and delays',
  ]

  const trustPoints = [
    { number: '12+', label: 'Years in Operation' },
    { number: '850+', label: 'Factories Audited' },
    { number: '2,400+', label: 'Orders Managed' },
    { number: '38', label: 'Countries Served' },
  ]

  const caseStudies = [
    {
      title: 'US Retailer Scales Private Label Kitchenware',
      result: 'Reduced defect rate from 8% to under 1%',
      desc: 'Helped a mid-size US retailer establish a reliable supply chain for 12 SKUs of kitchenware, managing audits, QC, and consolidated shipping.',
    },
    {
      title: 'European Distributor Sources Automotive Components',
      result: 'Achieved 6-week lead time improvement',
      desc: 'Supported a European automotive parts distributor in qualifying three new Tier-2 suppliers and implementing production monitoring protocols.',
    },
    {
      title: 'Australian Brand Launches Consumer Electronics Line',
      result: 'Delivered first 10,000 units on schedule',
      desc: 'Guided a startup through supplier selection, sample approval, and pre-shipment inspection for Bluetooth audio products.',
    },
  ]

  const faqs = [
    {
      q: 'How do you find suppliers for my product?',
      a: 'We use our database, industry networks, and targeted outreach to identify manufacturers that match your specifications, volume, and compliance requirements.',
    },
    {
      q: 'Do you charge a fee for sourcing?',
      a: 'Our sourcing and verification services are quoted based on project scope. We provide transparent pricing before any work begins.',
    },
    {
      q: 'Can you handle small order quantities?',
      a: 'Yes. We work with buyers across a range of order sizes. We will advise on realistic minimum order quantities for your product category.',
    },
    {
      q: 'How do you ensure product quality?',
      a: 'We conduct factory audits, coordinate sample approvals, and perform in-process and pre-shipment inspections according to agreed AQL standards.',
    },
    {
      q: 'Do you manage shipping and customs?',
      a: 'We coordinate freight booking, documentation, and consolidation. We can also recommend freight forwarders and assist with export procedures.',
    },
  ]

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              We help overseas companies find reliable Chinese suppliers, verify factories, inspect quality, and coordinate production and shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="xl">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-slate-400">No obligation. Typical response within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map((point, idx) => (
              <div key={idx}>
                <div className="text-3xl font-semibold text-slate-900">{point.number}</div>
                <div className="text-sm text-slate-600 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            End-to-end support for buyers sourcing from China.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Card key={idx} className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.desc}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Our Sourcing Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured approach to reduce risk and improve outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-4xl font-semibold text-teal-600 mb-3">{step.num}</div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/how-it-works">Learn More About the Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Products We Source</h2>
            <p className="text-lg text-slate-600 mb-6">
              We support sourcing across a wide range of categories for B2B buyers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {products.map((product, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span>{product}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" size="lg">
                <Link to="/products">See Full Product Categories</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden bg-slate-100">
            <img
              data-strk-img-id="home-products-hero"
              data-strk-img="[Products We Source] [Our Services] China factory warehouse industrial"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Factory and warehouse operations"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Problems We Solve</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Common challenges buyers face when sourcing directly from China.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex gap-4 bg-slate-800 rounded-xl p-6">
                <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <p className="text-slate-200">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credentials */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Why Buyers Work With Us</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Local Presence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Our team is based in China with direct access to factories across major manufacturing regions.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Transparent Process</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Clear reporting, documented inspections, and regular updates at every stage of the project.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Buyer-Focused</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">We represent your interests only. No hidden supplier commissions or conflicting incentives.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 mb-2">Case Studies</h2>
              <p className="text-lg text-slate-600">Real results for international buyers.</p>
            </div>
            <Link to="/case-studies" className="text-teal-600 font-medium mt-4 md:mt-0 hover:underline">View All Case Studies →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <CardDescription className="text-teal-600 font-medium">{study.result}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{study.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-slate-200 pb-6">
                <h3 className="font-semibold text-lg text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Still have questions? Contact us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold mb-4">Start Your Sourcing Project</h2>
            <p className="text-lg text-slate-300">Tell us about your requirements and receive a no-obligation quote.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 text-slate-900">
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
