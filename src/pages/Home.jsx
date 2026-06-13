import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle, Users, Award, Clock } from 'lucide-react'

const Home = () => {
  const services = [
    { title: 'Supplier Identification', desc: 'Find qualified suppliers matching your requirements' },
    { title: 'Factory Verification', desc: 'On-site audits and background checks' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process quality control' },
    { title: 'Production Monitoring', desc: 'Track progress and ensure timelines' },
    { title: 'Logistics Coordination', desc: 'Shipping arrangements and documentation' },
  ]

  const process = [
    { step: '01', title: 'Requirement Analysis', desc: 'Understand your product specifications and sourcing goals' },
    { step: '02', title: 'Supplier Sourcing', desc: 'Identify and shortlist potential suppliers' },
    { step: '03', title: 'Verification & Audit', desc: 'Conduct factory visits and capability assessments' },
    { step: '04', title: 'Sample Evaluation', desc: 'Review product samples and quality standards' },
    { step: '05', title: 'Order Management', desc: 'Monitor production and coordinate delivery' },
  ]

  const products = [
    'Consumer Electronics', 'Home & Garden', 'Industrial Equipment',
    'Textiles & Apparel', 'Automotive Parts', 'Medical Supplies',
  ]

  const problems = [
    'Difficulty finding reliable suppliers',
    'Quality issues with received products',
    'Communication barriers with factories',
    'Uncertainty about supplier legitimacy',
    'Complex logistics and documentation',
    'Production delays and missed deadlines',
  ]

  const trustPoints = [
    { icon: Users, label: '500+ Verified Suppliers' },
    { icon: Award, label: '10+ Years Experience' },
    { icon: CheckCircle, label: '98% Client Retention' },
    { icon: Clock, label: 'Average 4-Week Lead Time' },
  ]

  const caseStudies = [
    { client: 'European Retail Chain', result: 'Reduced sourcing costs by 23%', category: 'Home Goods' },
    { client: 'US Industrial Distributor', result: 'Established 3 new supplier relationships', category: 'Equipment' },
    { client: 'Australian E-commerce Brand', result: 'Improved quality pass rate to 99.2%', category: 'Consumer Products' },
  ]

  const faqs = [
    { q: 'What is the minimum order quantity?', a: 'MOQs vary by product category. We work with suppliers offering flexible quantities based on your needs.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier identification typically takes 2-4 weeks. Full verification and first order coordination takes 6-10 weeks.' },
    { q: 'Do you charge upfront fees?', a: 'We offer a free initial consultation. Service fees are discussed after understanding your specific requirements.' },
    { q: 'Which regions in China do you cover?', a: 'We work with suppliers across all major manufacturing regions including Guangdong, Zhejiang, Jiangsu, and Shandong.' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0A2540] text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-xl text-[#94A3B8] mb-10 max-w-3xl mx-auto">
            Connect with verified Chinese suppliers. We handle supplier identification, 
            factory verification, quality control, and logistics coordination.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>

      {/* Trust Points */}
      <section className="border-b border-[#E2E8F0] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-4">
                <point.icon className="w-8 h-8 text-[#0D9488]" />
                <span className="font-medium text-[#1E293B]">{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              End-to-end sourcing support from supplier discovery to delivery coordination.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 border border-[#E2E8F0] rounded-lg">
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-[#64748B] text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-[#F8FAFC] py-20" id="process">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Sourcing Process</h2>
            <p className="text-[#64748B]">A structured approach to finding and working with suppliers.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-semibold text-[#0D9488] mb-3">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748B]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/how-it-works">Learn More About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20" id="products">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Products We Source</h2>
            <p className="text-[#64748B]">Experience across diverse product categories and industries.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.map((product, index) => (
              <div key={index} className="p-4 text-center border border-[#E2E8F0] rounded-lg text-sm font-medium">
                {product}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/products">Explore Product Categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Problems We Solve</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[#E2E8F0]">
                <CheckCircle className="w-5 h-5 text-[#0D9488] mt-0.5 flex-shrink-0" />
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20" id="case-studies">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Case Studies</h2>
            <p className="text-[#64748B]">Results from recent sourcing projects.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="p-6 border border-[#E2E8F0] rounded-lg">
                <div className="text-sm text-[#0D9488] mb-2">{study.category}</div>
                <h3 className="font-semibold mb-3">{study.client}</h3>
                <p className="text-[#64748B]">{study.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-[#E2E8F0]">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-[#64748B]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center border-t">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-[#64748B] mb-8">
            Contact us for a free consultation and quote for your sourcing project.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home