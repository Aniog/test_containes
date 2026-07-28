import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Award, Clock, Shield } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { toast } from 'sonner'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleQuoteSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log('Quote request:', Object.fromEntries(formData))
    toast.success('Thank you. We will contact you within 24 hours.')
    e.target.reset()
  }

  const services = [
    { icon: Users, title: 'Supplier Identification', desc: 'Find qualified manufacturers matching your requirements' },
    { icon: Shield, title: 'Factory Verification', desc: 'On-site audits and background checks on potential suppliers' },
    { icon: CheckCircle, title: 'Quality Inspection', desc: 'Pre-shipment and in-process quality control inspections' },
    { icon: Clock, title: 'Production Monitoring', desc: 'Track production progress and ensure delivery timelines' },
    { icon: Award, title: 'Compliance Support', desc: 'Product testing and certification assistance' },
  ]

  const process = [
    { step: '01', title: 'Requirement Analysis', desc: 'We discuss your product specifications, target price, and timeline.' },
    { step: '02', title: 'Supplier Matching', desc: 'We identify 3-5 qualified suppliers and provide detailed profiles.' },
    { step: '03', title: 'Verification & Sampling', desc: 'We conduct factory audits and coordinate sample production.' },
    { step: '04', title: 'Order Management', desc: 'We oversee production, conduct inspections, and manage logistics.' },
    { step: '05', title: 'Delivery & Support', desc: 'We coordinate shipping and provide ongoing after-sales support.' },
  ]

  const products = [
    { id: 'electronics', title: 'Electronics & Components', desc: 'Consumer electronics, PCBs, cables, power supplies' },
    { id: 'home', title: 'Home & Kitchen', desc: 'Appliances, cookware, furniture, home textiles' },
    { id: 'industrial', title: 'Industrial Equipment', desc: 'Machinery parts, tools, safety equipment' },
    { id: 'apparel', title: 'Apparel & Textiles', desc: 'Clothing, fabrics, accessories, footwear' },
    { id: 'auto', title: 'Automotive Parts', desc: 'OEM components, aftermarket accessories' },
    { id: 'packaging', title: 'Packaging Materials', desc: 'Boxes, labels, protective packaging' },
  ]

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory capabilities and legitimacy',
    'Language and cultural barriers in negotiations',
    'Quality issues discovered only after goods arrive',
    'Delays in production and missed delivery deadlines',
    'Complex logistics and customs clearance processes',
  ]

  const trustPoints = [
    { number: '850+', label: 'Projects Completed' },
    { number: '320', label: 'Active Clients' },
    { number: '98%', label: 'On-Time Delivery' },
    { number: '12', label: 'Years Experience' },
  ]

  const cases = [
    { id: 'case1', client: 'European Retail Chain', product: 'Kitchen Appliances', result: 'Reduced sourcing costs by 23% while improving quality metrics' },
    { id: 'case2', client: 'US E-commerce Brand', product: 'Consumer Electronics', result: 'Established 4 verified suppliers with 99.2% quality pass rate' },
    { id: 'case3', client: 'Australian Distributor', product: 'Industrial Tools', result: 'Cut lead time from 90 to 62 days through process optimization' },
  ]

  const faqs = [
    { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits covering production capacity, quality systems, financial stability, and compliance records. Each audit includes document verification and facility inspection.' },
    { q: 'What is your inspection process?', a: 'We follow AQL standards for pre-shipment inspections, checking product specifications, packaging, labeling, and functionality. Reports include photos and detailed findings.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier identification takes 1-2 weeks. Full verification and sampling typically requires 4-6 weeks before production begins.' },
    { q: 'Do you handle shipping and logistics?', a: 'We coordinate with freight forwarders and manage documentation. Clients can choose their preferred logistics partner or use our recommended carriers.' },
    { q: 'What are your service fees?', a: 'Our sourcing fee is typically 5-8% of order value depending on complexity. Inspection services are charged per project. We provide detailed quotes after understanding requirements.' },
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-[#0F2942] text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            We help overseas companies find reliable Chinese suppliers, verify factories, control quality, and manage production from start to delivery.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#3A8A7B] text-white text-lg font-medium rounded-lg hover:bg-[#2F6F63] transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-gray-400">Response within 24 hours • No obligation</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#0F2942] mb-4">Our Services</h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">Comprehensive support throughout the sourcing lifecycle</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
              <service.icon className="w-10 h-10 text-[#3A8A7B] mb-4" />
              <h3 className="text-xl font-semibold text-[#0F2942] mb-2">{service.title}</h3>
              <p className="text-[#64748B]">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-[#3A8A7B] font-medium hover:underline">
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0F2942] mb-4">Our Sourcing Process</h2>
            <p className="text-[#64748B]">A structured approach to minimize risk and ensure quality</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-4xl font-semibold text-[#3A8A7B] mb-3">{item.step}</div>
                <h3 className="font-semibold text-[#0F2942] mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748B]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-[#3A8A7B] font-medium hover:underline">
              Learn more about our process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#0F2942] mb-4">Products We Source</h2>
          <p className="text-[#64748B]">Categories we regularly source for our clients</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl border border-gray-200 h-64 flex items-end">
              <img
                data-strk-img-id={`product-${product.id}`}
                data-strk-img={`[product-${product.id}-desc] [product-${product.id}-title] products we source`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
              <div className="relative p-6 text-white">
                <h3 id={`product-${product.id}-title`} className="font-semibold text-xl mb-1">{product.title}</h3>
                <p id={`product-${product.id}-desc`} className="text-sm text-gray-200">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-[#3A8A7B] font-medium hover:underline">
            See detailed product categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0F2942] mb-4">Problems We Solve</h2>
            <p className="text-[#64748B]">Common sourcing challenges we help clients overcome</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex gap-3 p-5 bg-white rounded-lg border border-gray-200">
                <CheckCircle className="w-5 h-5 text-[#3A8A7B] flex-shrink-0 mt-0.5" />
                <span className="text-[#1E293B]">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#0F2942] mb-4">Why Buyers Trust Us</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustPoints.map((point, idx) => (
            <div key={idx}>
              <div className="text-4xl font-semibold text-[#0F2942] mb-1">{point.number}</div>
              <div className="text-[#64748B]">{point.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-[#64748B] mb-4">Our clients include importers, distributors, retailers, and brands across 28 countries.</p>
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#3A8A7B] font-medium hover:underline">
            Read case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0F2942] mb-4">Case Studies</h2>
            <p className="text-[#64748B]">Recent projects demonstrating our approach and results</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="text-sm text-[#3A8A7B] font-medium mb-2">{c.client}</div>
                <h3 className="font-semibold text-xl text-[#0F2942] mb-3">{c.product}</h3>
                <p className="text-[#64748B] mb-6">{c.result}</p>
                <Link to="/case-studies" className="text-sm text-[#3A8A7B] font-medium hover:underline">Read full case →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#0F2942] mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border border-gray-200 rounded-lg p-6">
              <summary className="font-semibold text-[#0F2942] cursor-pointer list-none flex justify-between items-center">
                {faq.q}
                <span className="text-[#3A8A7B] group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-[#64748B]">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/contact" className="text-[#3A8A7B] font-medium hover:underline">Still have questions? Contact us →</Link>
        </div>
      </section>

      <section className="bg-[#0F2942] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-semibold mb-4">Ready to Start Your Sourcing Project?</h2>
          <p className="text-gray-300 mb-10">Tell us about your requirements and receive a customized sourcing plan within 24 hours.</p>
          
          <form onSubmit={handleQuoteSubmit} className="bg-white rounded-xl p-8 text-left">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-[#1E293B] mb-1.5">Full Name</label>
                <input type="text" name="name" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A8A7B]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1E293B] mb-1.5">Company</label>
                <input type="text" name="company" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A8A7B]" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-[#1E293B] mb-1.5">Email Address</label>
                <input type="email" name="email" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A8A7B]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1E293B] mb-1.5">Phone / WhatsApp</label>
                <input type="tel" name="phone" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A8A7B]" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#1E293B] mb-1.5">Product Category & Description</label>
              <textarea name="product" rows="4" required placeholder="Describe the product you want to source, target quantity, and any specific requirements..." className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A8A7B] resize-y"></textarea>
            </div>
            <button type="submit" className="w-full md:w-auto px-8 py-3 bg-[#3A8A7B] text-white font-medium rounded-lg hover:bg-[#2F6F63] transition-colors">
              Submit Inquiry
            </button>
            <p className="mt-4 text-xs text-[#64748B]">Your information is confidential. We respond within one business day.</p>
          </form>
        </div>
      </section>
    </div>
  )
}