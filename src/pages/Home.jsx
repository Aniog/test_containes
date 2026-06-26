import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import InquiryForm from '../components/InquiryForm'
import { 
  Search, CheckCircle, Package, Truck, Shield, Users, 
  Clock, Award, TrendingUp, Globe 
} from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'Identify and qualify manufacturers that match your product specifications, quality standards, and volume requirements.',
    },
    {
      icon: CheckCircle,
      title: 'Factory Verification',
      description: 'On-site audits to confirm legitimacy, production capacity, quality systems, and compliance with international standards.',
    },
    {
      icon: Shield,
      title: 'Quality Inspection',
      description: 'Pre-shipment, in-process, and pre-production inspections to ensure products meet your specifications before delivery.',
    },
    {
      icon: Package,
      title: 'Production Monitoring',
      description: 'Regular progress updates, milestone tracking, and issue resolution throughout the manufacturing cycle.',
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'Freight booking, documentation, customs clearance support, and delivery scheduling to your destination.',
    },
    {
      icon: Users,
      title: 'Order Management',
      description: 'End-to-end coordination including sample approval, contract negotiation, and payment milestone management.',
    },
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Requirement Discussion',
      description: 'We discuss your product specifications, target price, quantity, timeline, and quality requirements.',
    },
    {
      number: '02',
      title: 'Supplier Identification',
      description: 'We source and screen potential suppliers based on your criteria and present qualified options.',
    },
    {
      number: '03',
      title: 'Verification & Sampling',
      description: 'We verify factories and coordinate samples for your approval before production begins.',
    },
    {
      number: '04',
      title: 'Production & QC',
      description: 'We monitor production and conduct quality inspections at key stages to ensure compliance.',
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics, documentation, and track your shipment until it reaches your warehouse.',
    },
  ]

  const productCategories = [
    'Consumer Electronics & Accessories',
    'Home & Kitchen Products',
    'Apparel, Textiles & Fashion',
    'Industrial Components & Machinery',
    'Automotive Parts & Accessories',
    'Furniture & Home Furnishings',
    'Toys, Games & Sporting Goods',
    'Beauty, Health & Personal Care',
    'Packaging Materials & Supplies',
    'Tools, Hardware & Construction',
  ]

  const problems = [
    {
      problem: 'Difficulty finding reliable suppliers who meet quality standards',
      solution: 'We maintain a vetted network of manufacturers and conduct thorough due diligence before introduction.',
    },
    {
      problem: 'Uncertainty about factory legitimacy and production capability',
      solution: 'Our on-site verification confirms actual capacity, equipment, and operational legitimacy.',
    },
    {
      problem: 'Quality issues discovered only after goods arrive',
      solution: 'Multi-stage inspections catch defects before shipment, reducing costly returns and delays.',
    },
    {
      problem: 'Communication barriers and time zone challenges',
      solution: 'We serve as your local representative with English communication and China business hours coverage.',
    },
    {
      problem: 'Complex logistics and documentation requirements',
      solution: 'We handle freight coordination, export documentation, and customs requirements.',
    },
  ]

  const trustPoints = [
    { icon: Award, label: '10+ Years Experience' },
    { icon: Globe, label: '500+ Clients Served' },
    { icon: CheckCircle, label: '2,000+ Orders Managed' },
    { icon: Users, label: '300+ Verified Suppliers' },
  ]

  const caseStudies = [
    {
      client: 'European Retail Chain',
      product: 'Kitchen Appliances',
      result: 'Sourced 12 SKUs from 3 verified factories. Achieved 18% cost reduction while maintaining quality standards. 4,200 units delivered on schedule.',
    },
    {
      client: 'US E-commerce Brand',
      product: 'Consumer Electronics Accessories',
      result: 'Established ongoing supply relationship with 2 factories. Implemented QC protocols reducing defect rate from 8% to under 1%. Monthly shipments of 8,000+ units.',
    },
    {
      client: 'Australian Distributor',
      product: 'Industrial Safety Equipment',
      result: 'Identified compliant manufacturer for EN/ISO certified products. Managed first production run of 15,000 units with full documentation and inspection.',
    },
  ]

  const faqs = [
    {
      q: 'How do you charge for your services?',
      a: 'We offer transparent pricing based on project scope. Common models include a percentage of order value, fixed project fees, or monthly retainer arrangements. We provide a detailed quote after understanding your requirements.',
    },
    {
      q: 'Do you require exclusivity or minimum order commitments?',
      a: 'No. You are free to work with other agents or suppliers. We do not impose minimum order requirements, though some factories may have their own MOQ policies which we will communicate upfront.',
    },
    {
      q: 'How long does the sourcing process typically take?',
      a: 'Initial supplier identification usually takes 1-2 weeks. Sample production and approval adds 2-4 weeks depending on product complexity. Full production timelines vary by product and quantity.',
    },
    {
      q: 'Can you work with suppliers I have already identified?',
      a: 'Yes. We can verify factories you have found, conduct quality inspections, and manage production and shipping for existing supplier relationships.',
    },
    {
      q: 'What regions do you serve?',
      a: 'We work with buyers worldwide. Our clients are primarily based in North America, Europe, Australia, and Southeast Asia. We ship to any destination with standard international logistics.',
    },
    {
      q: 'How do you ensure product quality?',
      a: 'We conduct pre-production, in-process, and pre-shipment inspections. We use documented checklists based on your specifications. We can also arrange third-party lab testing when required.',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0A2540] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-[42px] leading-[1.15] font-semibold tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-2xl">
              We help overseas companies find reliable Chinese suppliers, verify factories, 
              inspect quality, and coordinate production and shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-[#64748B]">
              No upfront fees for initial consultation. Response within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-[#E2E8F0] bg-white py-6">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                <point.icon className="w-5 h-5 text-[#2563EB]" />
                <span className="text-sm font-medium text-[#475569]">{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[32px] font-semibold text-[#0A2540] mb-4">
              What We Do
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              End-to-end sourcing support from supplier identification through delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#F1F5F9] flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-[#0A2540]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0A2540] mb-2">{service.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sourcing Process Section */}
      <section className="py-16 md:py-20 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[32px] font-semibold text-[#0A2540] mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              A structured approach that reduces risk and keeps you informed at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-[#2563EB] text-sm font-semibold mb-2">{step.number}</div>
                <h3 className="text-lg font-semibold text-[#0A2540] mb-2">{step.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-2 -right-3 w-6 h-px bg-[#E2E8F0]" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/how-it-works">Learn More About the Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-[32px] font-semibold text-[#0A2540] mb-4">
                Products We Source
              </h2>
              <p className="text-[#475569] mb-6">
                We work across a wide range of product categories. Our team has experience 
                sourcing both consumer goods and industrial components.
              </p>
              <Button asChild variant="outline">
                <Link to="/products">Browse Product Categories</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {productCategories.map((category, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-[#475569] py-1">
                  <CheckCircle className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" />
                  <span>{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-16 md:py-20 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[32px] font-semibold text-[#0A2540] mb-4">
              Common Sourcing Challenges We Address
            </h2>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            {problems.map((item, index) => (
              <div key={index} className="border-l-4 border-[#2563EB] pl-6">
                <p className="font-medium text-[#0A2540] mb-1">Problem: {item.problem}</p>
                <p className="text-sm text-[#475569]">Solution: {item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-[32px] font-semibold text-[#0A2540] mb-2">
                Recent Projects
              </h2>
              <p className="text-[#475569]">Examples of sourcing work we have completed for clients.</p>
            </div>
            <Button asChild variant="outline" className="hidden md:block">
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="text-sm text-[#2563EB] font-medium mb-1">{study.client}</div>
                  <div className="font-semibold text-[#0A2540] mb-3">{study.product}</div>
                  <p className="text-sm text-[#475569] leading-relaxed">{study.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Button asChild variant="outline">
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-[32px] font-semibold text-[#0A2540] mb-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-[#E2E8F0]">
              {faqs.map((faq, index) => (
                <details key={index} className="group py-5">
                  <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-[#0A2540] list-none">
                    {faq.q}
                    <span className="text-[#64748B] group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <p className="mt-3 text-sm text-[#475569] pr-8">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/contact">Ask Us a Question</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry" className="py-16 md:py-20">
        <div className="max-w-[720px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-[32px] font-semibold text-[#0A2540] mb-3">
              Start a Sourcing Project
            </h2>
            <p className="text-[#475569]">
              Tell us about your requirements. We will respond within 24 hours with initial 
              supplier options or questions to clarify your needs.
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <InquiryForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to source from China?
          </h2>
          <p className="text-[#94A3B8] mb-6 max-w-md mx-auto">
            Get a no-obligation quote for your sourcing project.
          </p>
          <Button asChild size="lg" className="bg-[#2563EB] hover:bg-[#1D4ED8]">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home
