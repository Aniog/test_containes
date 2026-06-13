import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, CheckCircle, Search, Truck, BarChart3, Star, Users, Globe, Award, ChevronRight, ChevronDown, Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  { icon: Search, title: 'Supplier Verification', desc: 'We vet and verify Chinese suppliers through business licenses, trade records, and background checks to ensure you work with legitimate partners.' },
  { icon: Shield, title: 'Factory Audits', desc: 'Our team visits factories in person to assess production capacity, quality systems, working conditions, and compliance with international standards.' },
  { icon: CheckCircle, title: 'Quality Inspection', desc: 'Pre-shipment inspections, during-production checks, and random sampling ensure your products meet specifications before they leave the factory.' },
  { icon: BarChart3, title: 'Production Monitoring', desc: 'We track production schedules, raw material quality, and manufacturing progress to keep your orders on time and on spec.' },
  { icon: Truck, title: 'Shipping & Logistics', desc: 'From freight forwarding to customs clearance and door-to-door delivery, we manage the entire logistics chain for your China imports.' },
]

const processSteps = [
  { step: '01', title: 'Submit Your Requirements', desc: 'Tell us about the products you need, your budget, quality standards, and target timeline. We will review and respond within 24 hours.' },
  { step: '02', title: 'Supplier Matching', desc: 'We identify and vet potential suppliers from our network of pre-screened manufacturers. You receive a shortlist with detailed profiles.' },
  { step: '03', title: 'Negotiation & Sampling', desc: 'We handle price negotiation, payment terms, and sample coordination. Samples are shipped to you for approval before mass production.' },
  { step: '04', title: 'Production & QC', desc: 'During manufacturing, we conduct regular inspections, monitor quality, and provide you with photo and video progress reports.' },
  { step: '05', title: 'Shipping & Delivery', desc: 'We arrange freight, handle export documentation, and track your shipment until it arrives at your doorstep.' },
]

const products = [
  { name: 'Consumer Electronics', desc: 'Smartphones, accessories, audio devices, wearables, and smart home products.' },
  { name: 'Home & Kitchen', desc: 'Kitchen appliances, home decor, furniture, storage solutions, and cleaning products.' },
  { name: 'Fashion & Apparel', desc: 'Clothing, footwear, bags, accessories, and textiles from Chinese manufacturers.' },
  { name: 'Industrial & Machinery', desc: 'Manufacturing equipment, tools, packaging machinery, and industrial parts.' },
  { name: 'Health & Beauty', desc: 'Cosmetics, personal care products, supplements, and wellness devices.' },
  { name: 'Auto & Motorcycle', desc: 'Auto parts, accessories, tools, and motorcycle components and upgrades.' },
  { name: 'Baby & Toys', desc: 'Children toys, baby products, educational supplies, and playground equipment.' },
  { name: 'Pet Supplies', desc: 'Pet food, toys, accessories, grooming tools, and pet care products.' },
]

const problems = [
  { title: 'Unreliable Suppliers', desc: 'Many Chinese suppliers on online platforms are not what they claim. We verify each supplier before introduction.' },
  { title: 'Poor Product Quality', desc: 'Inconsistent quality is the #1 complaint from importers. Our inspection protocols catch issues before shipment.' },
  { title: 'Communication Gaps', desc: 'Language barriers and time zone differences cause costly misunderstandings. We bridge the gap as your local team.' },
  { title: 'Missed Deadlines', desc: 'Production delays can wreck your business. We monitor schedules daily and enforce deadlines.' },
  { title: 'Hidden Costs', desc: 'Unexpected fees in shipping, customs, or brokerage eat into margins. We provide transparent pricing upfront.' },
  { title: 'Scams & Fraud', desc: 'Fake companies and payment scams cost importers millions annually. We verify every supplier thoroughly.' },
]

const trustPoints = [
  { icon: Users, stat: '500+', label: 'Clients Served Worldwide' },
  { icon: CheckCircle, stat: '2,000+', label: 'Factory Audits Completed' },
  { icon: Globe, stat: '50+', label: 'Countries Shipped To' },
  { icon: Star, stat: '98%', label: 'Client Satisfaction Rate' },
  { icon: Award, stat: '8+ Years', label: 'Sourcing Experience' },
]

const caseStudies = [
  { title: 'Automotive Parts for German Distributor', result: 'Reduced defect rate from 12% to 0.8%, saved client $180K annually.', imgId: 'case-auto-parts-7f3d', tags: ['Automotive', 'QC'] },
  { title: 'Consumer Electronics for US E-commerce Brand', result: 'Scaled from 2 SKUs to 45, cut lead time by 40%.', imgId: 'case-electronics-9b2e', tags: ['Electronics', 'E-commerce'] },
  { title: 'Home Textiles for European Retail Chain', result: 'Verified 28 factories, selected 5 partners, delivered first order in 6 weeks.', imgId: 'case-textiles-4c1a', tags: ['Textiles', 'Retail'] },
]

const testimonials = [
  { quote: 'SSourcing China transformed our supply chain. Their factory audits saved us from partnering with an unqualified supplier that would have cost us dearly.', name: 'Thomas Mueller', role: 'Procurement Director, AutoParts GmbH' },
  { quote: 'We went from 2 products to a full catalog of 45 SKUs in 18 months. Their quality control is world-class.', name: 'Sarah Chen', role: 'Founder, BrightLife E-com' },
  { quote: 'The level of transparency and communication is exceptional. We always know exactly where our orders stand.', name: 'James Okonkwo', role: 'CEO, WestAfrica Retail' },
]

const faqs = [
  { q: 'What does a China sourcing agent do?', a: 'A sourcing agent in China helps overseas buyers find reliable suppliers, verify factory credentials, negotiate pricing, monitor production, inspect product quality, and arrange international shipping. We act as your local eyes and ears.' },
  { q: 'How much does your service cost?', a: 'Our fees depend on the scope and complexity of your project. We typically charge a percentage of order value for full-service sourcing, or a fixed project fee for specific services like factory audits or inspections. Contact us for a free quote.' },
  { q: 'What is the minimum order quantity (MOQ) you can handle?', a: 'We work with projects of all sizes, from small-batch orders for startups to high-volume production for established businesses. We will find suppliers that match your required quantities.' },
  { q: 'How do you verify suppliers?', a: 'We check business licenses, tax certificates, export qualifications, and trade references. For shortlisted factories, we conduct on-site visits to evaluate production capacity, quality systems, workforce, and working conditions.' },
  { q: 'What if the product quality does not meet my standards?', a: 'We prevent this through our multi-stage inspection process: raw material checks, during-production inspections, and pre-shipment inspection. If issues arise, we work with the supplier to resolve them before shipment.' },
  { q: 'How long does the sourcing process take?', a: 'A typical sourcing project takes 4-12 weeks from requirements to shipment, depending on product complexity, customization, and supplier lead times. We provide a detailed timeline upfront.' },
]

function AccordionItem({ q, a, open, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left font-medium text-neutral-900 hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <span>{q}</span>
        {open ? <Minus className="w-5 h-5 text-brand-600 flex-shrink-0" /> : <Plus className="w-5 h-5 text-brand-600 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-neutral-600 text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const [openFaq, setOpenFaq] = React.useState(null)

  useEffect(() => {
    if (heroRef.current) {
      return ImageHelper.loadImages(strkImgConfig, heroRef.current)
    }
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-neutral-900 overflow-hidden" ref={heroRef}>
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/80 to-neutral-900/60" />
        <div className="container-section relative py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-brand-400 font-semibold text-sm md:text-base mb-4 tracking-wide uppercase" id="hero-subtitle">China Sourcing Agent</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6" id="hero-title">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Find reliable Chinese suppliers, verify factories, inspect quality, and ship with confidence. Your local team in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors text-lg shadow-lg shadow-brand-600/25">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/how-it-works" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-section py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustPoints.map((tp, i) => (
              <div key={i} className="flex items-center gap-3">
                <tp.icon className="w-6 h-6 text-brand-600" />
                <div>
                  <span className="font-bold text-neutral-900">{tp.stat}</span>
                  <span className="text-neutral-500 text-sm ml-1.5">{tp.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section">
          <h2 className="section-heading">Our Sourcing Services</h2>
          <p className="section-subheading">End-to-end sourcing support from supplier discovery to your warehouse door.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((s, i) => (
              <div key={i} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{s.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-section">
          <h2 className="section-heading">Problems We Solve</h2>
          <p className="section-subheading">Sourcing from China comes with risks. We help you avoid the common pitfalls.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {problems.map((p, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center mb-3">
                  <span className="text-red-500 font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">{p.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section">
          <h2 className="section-heading">Our Sourcing Process</h2>
          <p className="section-subheading">A proven 5-step process that ensures quality, transparency, and peace of mind.</p>
          <div className="mt-12 space-y-8">
            {processSteps.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="btn-primary">
              Learn More About Our Process
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-section">
          <h2 className="section-heading">Products We Source</h2>
          <p className="section-subheading">Across major manufacturing categories in China. If it is made in China, we can source it.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {products.map((p, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-neutral-900 mb-1">{p.name}</h3>
                <p className="text-neutral-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="btn-secondary">
              View All Categories
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section">
          <h2 className="section-heading">Case Studies</h2>
          <p className="section-subheading">Real results from real clients across industries.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100 relative overflow-hidden">
                  <img
                    alt={`Case study: ${cs.title}`}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[cs-desc-${i}] [cs-title-${i}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {cs.tags.map((tag, ti) => (
                      <span key={ti} className="text-xs font-medium text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h3 id={`cs-title-${i}`} className="font-bold text-neutral-900 mb-2">{cs.title}</h3>
                  <p id={`cs-desc-${i}`} className="text-neutral-600 text-sm">{cs.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-secondary">
              View All Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-section">
          <h2 className="section-heading">What Our Clients Say</h2>
          <p className="section-subheading">Trusted by importers and businesses worldwide.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
                  <p className="text-neutral-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section max-w-3xl mx-auto">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading">Common questions about working with a China sourcing agent.</p>
          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} q={faq.q} a={faq.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-brand-600">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Sourcing Smarter?</h2>
          <p className="text-lg text-brand-100 max-w-2xl mx-auto mb-8">Get a free, no-obligation quote. Tell us what you need and we will respond within 24 hours.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-600 font-semibold rounded-lg hover:bg-brand-50 transition-colors text-lg shadow-lg">
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}