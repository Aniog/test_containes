import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import InquiryForm from '@/components/InquiryForm'
import SectionHeading from '@/components/SectionHeading'
import TrustBar from '@/components/TrustBar'
import { CheckCircle, Shield, Truck, Users, Award, Clock } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Supplier Sourcing',
    description: 'Identify and qualify manufacturers that match your product specifications, volume, and quality standards.'
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to confirm legitimacy, production capacity, quality systems, and compliance.'
  },
  {
    icon: CheckCircle,
    title: 'Quality Inspection',
    description: 'Pre-shipment, in-process, and container loading inspections to protect your investment.'
  },
  {
    icon: Clock,
    title: 'Production Monitoring',
    description: 'Regular progress updates and milestone tracking to keep your orders on schedule.'
  },
  {
    icon: Truck,
    title: 'Logistics Coordination',
    description: 'Freight booking, documentation, and customs support for smooth delivery.'
  },
  {
    icon: Award,
    title: 'Ongoing Support',
    description: 'Dedicated account management and continuous supplier relationship oversight.'
  }
]

const processSteps = [
  { step: '01', title: 'Brief & Requirements', desc: 'Share your product specs, target price, and timeline.' },
  { step: '02', title: 'Supplier Identification', desc: 'We shortlist 3-5 qualified factories based on your criteria.' },
  { step: '03', title: 'Verification & Samples', desc: 'Factory audits and sample evaluation before you commit.' },
  { step: '04', title: 'Order & Production', desc: 'We oversee production with regular quality checkpoints.' },
  { step: '05', title: 'Inspection & Shipping', desc: 'Final QC, documentation, and logistics coordination.' },
]

const productCategories = [
  'Electronics & Components',
  'Home & Kitchen Appliances',
  'Apparel & Textiles',
  'Industrial Machinery',
  'Automotive Parts',
  'Consumer Goods',
  'Packaging Materials',
  'Building & Construction'
]

const problems = [
  'Difficulty finding reliable suppliers who meet quality standards',
  'Uncertainty about factory legitimacy and production capacity',
  'Quality issues discovered only after goods arrive',
  'Communication barriers and time zone challenges',
  'Complex logistics, documentation, and customs processes',
  'Lack of visibility into production progress and delays'
]

const caseStudies = [
  {
    client: 'European Home Goods Retailer',
    result: 'Reduced defect rate from 8% to under 1%',
    detail: 'Implemented multi-stage QC protocol and supplier development program across 12 factories.'
  },
  {
    client: 'US Industrial Equipment Distributor',
    result: 'Cut lead time by 35% while maintaining quality',
    detail: 'Consolidated sourcing to 3 verified suppliers with improved production scheduling.'
  },
  {
    client: 'Australian Consumer Brand',
    result: 'Successfully launched 4 new product lines',
    detail: 'End-to-end sourcing support from supplier selection through first container delivery.'
  }
]

const faqs = [
  {
    q: 'How much does your service cost?',
    a: 'Our fees are transparent and typically range from 5-10% of order value depending on scope. We provide a clear quote before any work begins.'
  },
  {
    q: 'Do you require a minimum order quantity?',
    a: 'No. We work with buyers of all sizes, from startups testing a market to established companies placing container orders.'
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Initial supplier shortlist is typically delivered within 7-10 business days. Full verification and sampling adds 2-4 weeks depending on product complexity.'
  },
  {
    q: 'Can you help with existing suppliers?',
    a: 'Yes. We can audit and monitor your current suppliers, implement quality controls, or help you diversify your supply base.'
  },
  {
    q: 'Do you handle payments to suppliers?',
    a: 'We do not take custody of funds. We can advise on secure payment terms and help structure milestone payments to protect your interests.'
  }
]

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm mb-6 tracking-wide">
            EST. 2015 • SHANGHAI, CHINA
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            We help overseas companies find reliable suppliers, verify factories, 
            inspect quality, and coordinate production and shipping — with clear communication and no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-400">No obligation. Response within 24 hours.</p>
        </div>
      </section>

      <TrustBar />

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="End-to-End China Sourcing Services"
          description="From supplier discovery to delivery, we manage the complexities so you can focus on your business."
          align="center"
          className="mb-12"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-slate-700" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="text-sm font-medium text-slate-900 hover:underline">
            View all services →
          </Link>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <SectionHeading
            eyebrow="OUR PROCESS"
            title="A Clear, Structured Approach"
            description="We follow a proven 5-step process that keeps you informed at every stage."
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-4xl font-semibold text-slate-200 mb-3">{item.step}</div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-3 w-6 h-px bg-slate-300" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works">
              <Button variant="outline">Learn More About Our Process</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="PRODUCTS"
              title="Products We Source"
              description="We have experience across a wide range of categories and can support both standard and custom products."
            />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {productCategories.map((cat, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-slate-400" />
                  {cat}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/products">
                <Button variant="outline">Browse Product Categories</Button>
              </Link>
            </div>
          </div>
          <div className="bg-slate-100 rounded-xl p-8 lg:p-10">
            <h4 className="font-semibold mb-4">Common Requests We Handle</h4>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>• Custom OEM/ODM product development</li>
              <li>• Private label manufacturing</li>
              <li>• Component sourcing for assembly</li>
              <li>• Seasonal and promotional product runs</li>
              <li>• Compliance and certification support (CE, FCC, RoHS, etc.)</li>
              <li>• Packaging design and sourcing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="border-y border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <SectionHeading
            eyebrow="COMMON CHALLENGES"
            title="Problems We Solve for Buyers"
            align="center"
            className="mb-10"
          />
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div key={index} className="flex gap-3 p-5 border border-slate-200 rounded-lg">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading
          eyebrow="WHY BUYERS CHOOSE US"
          title="Built on Transparency and Results"
          align="center"
          className="mb-12"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'No Hidden Fees', desc: 'Clear pricing agreed upfront. You always know what you are paying for.' },
            { title: 'On-the-Ground Team', desc: 'Our team is based in China with direct access to factories across major manufacturing regions.' },
            { title: 'Buyer-First Approach', desc: 'We represent your interests only. We do not take commissions from suppliers.' }
          ].map((item, i) => (
            <div key={i} className="border-l-4 border-slate-900 pl-6">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <SectionHeading
              eyebrow="RESULTS"
              title="Case Studies"
            />
            <Link to="/case-studies" className="text-sm font-medium mt-4 md:mt-0 hover:underline">
              View all case studies →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{cs.client}</CardTitle>
                  <CardDescription className="text-emerald-700 font-medium mt-1">{cs.result}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{cs.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-20">
        <SectionHeading
          eyebrow="QUESTIONS"
          title="Frequently Asked Questions"
          align="center"
          className="mb-10"
        />
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
              <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
              <p className="text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-sm text-slate-600 mb-3">Still have questions?</p>
          <Link to="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[2px] uppercase text-slate-400 mb-3">START YOUR PROJECT</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Get a Free Sourcing Quote</h2>
            <p className="text-slate-300 max-w-md mx-auto">
              Tell us about your sourcing needs. We'll respond within one business day with next steps.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 md:p-10 text-slate-900">
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
