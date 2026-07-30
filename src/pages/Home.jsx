import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Star, CheckCircle,
  ArrowRight, Users, Package, Globe, Award, ChevronDown
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering production capacity, certifications, compliance, and working conditions.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections to ensure products meet your specifications before they leave China.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate freight forwarding, customs documentation, and delivery to your warehouse or port.',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
    imgId: 'svc-shipping-img-j1k2l3',
  },
]

const problems = [
  'Struggling to find reliable suppliers in China?',
  'Received poor-quality goods that didn\'t match samples?',
  'Unsure if a factory is legitimate before placing an order?',
  'Lost time and money on failed sourcing attempts?',
  'No one on the ground to follow up on your production?',
  'Confused by Chinese shipping and customs procedures?',
]

const trustPoints = [
  { icon: Users, value: '500+', label: 'Global Buyers Served' },
  { icon: Package, value: '1,200+', label: 'Products Sourced' },
  { icon: Globe, value: '30+', label: 'Countries Covered' },
  { icon: Award, value: '98%', label: 'Client Satisfaction Rate' },
]

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product specs, quantity, target price, and timeline.' },
  { num: '02', title: 'Supplier Matching', desc: 'We identify and vet 3–5 qualified suppliers from our verified network.' },
  { num: '03', title: 'Quotation & Samples', desc: 'You receive competitive quotes and can request product samples for evaluation.' },
  { num: '04', title: 'Order & Production', desc: 'We place the order, follow production progress, and keep you updated.' },
  { num: '05', title: 'Quality Inspection', desc: 'Our QC team inspects goods before shipment to ensure they meet your standards.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate freight and customs so your goods arrive safely and on time.' },
]

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of services required. We offer transparent pricing with no hidden charges. Contact us for a free initial consultation and quote.',
  },
  {
    q: 'How do you verify that a supplier is reliable?',
    a: 'We conduct on-site factory audits, review business licenses and certifications, check production capacity, and assess quality management systems before recommending any supplier.',
  },
  {
    q: 'Can you help with small orders or trial orders?',
    a: 'Yes. We work with buyers at all stages, including those placing their first trial order. We help negotiate MOQs and find suppliers willing to work with smaller initial quantities.',
  },
  {
    q: 'What product categories do you cover?',
    a: 'We source across a wide range of categories including electronics, home goods, apparel, toys, industrial equipment, health products, and more. See our Products page for details.',
  },
  {
    q: 'Do you offer private label or OEM services?',
    a: 'Yes. We can help you develop custom-branded products, work with factories on OEM/ODM projects, and manage the entire process from design to delivery.',
  },
]

export default function Home() {
  const containerRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current)
      if (heroRef.current) ImageHelper.loadImages(strkImgConfig, heroRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden" ref={heroRef}>
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              China-Based Sourcing Agent
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-red-300">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
              We help importers worldwide find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-accent text-white px-7 py-3.5 rounded-md font-semibold text-base hover:bg-red-700 transition-colors text-center"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white/40 text-white px-7 py-3.5 rounded-md font-semibold text-base hover:bg-white/10 transition-colors text-center flex items-center justify-center gap-2"
              >
                How It Works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label} className="flex flex-col items-center gap-1">
                <tp.icon className="w-6 h-6 text-accent mb-1" />
                <span className="text-2xl md:text-3xl font-bold text-primary">{tp.value}</span>
                <span className="text-sm text-gray-500">{tp.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-lightblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">End-to-End Sourcing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From finding the right supplier to delivering goods to your door, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={svc.title}
                  data-strk-img-id={svc.imgId}
                  data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-40 object-cover bg-gray-100"
                />
                <div className="p-5">
                  <div className="w-10 h-10 bg-lightblue rounded-lg flex items-center justify-center mb-3">
                    <svc.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 id={svc.titleId} className="font-bold text-primary text-lg mb-2">{svc.title}</h3>
                  <p id={svc.descId} className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Why Buyers Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Sourcing from China Doesn't Have to Be Risky
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Many importers face the same challenges when sourcing from China. We exist to solve them — with local expertise, verified networks, and hands-on support.
              </p>
              <ul className="space-y-3">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{p}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-block mt-8 bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
              >
                Talk to a Sourcing Expert
              </Link>
            </div>
            <div className="relative">
              <div
                className="rounded-xl overflow-hidden h-80 md:h-96 bg-gray-100"
                data-strk-bg-id="problems-bg-4c5d6e"
                data-strk-bg="[problems-section-title] China factory quality control inspection"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
              <span id="problems-section-title" className="sr-only">China factory quality control inspection</span>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-primary border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                        {['US', 'UK', 'AU'][i - 1]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Trusted by buyers in 30+ countries</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 text-gold fill-gold" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-lightblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How We Source for You</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              A clear, structured process from your first inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-4xl font-black text-lightblue mb-3 leading-none">{step.num}</div>
                <h3 className="font-bold text-primary text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
              Learn More About Our Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Real Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Case Studies</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              See how we've helped buyers across industries source successfully from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: 'Electronics',
                title: 'US Retailer Cuts Sourcing Costs by 28%',
                desc: 'We helped a US-based electronics retailer find a verified manufacturer, reducing unit costs while maintaining quality standards.',
                titleId: 'cs-home-1-title',
                descId: 'cs-home-1-desc',
                imgId: 'cs-home-1-img-m4n5o6',
              },
              {
                category: 'Home & Garden',
                title: 'UK Brand Launches Private Label Line',
                desc: 'A UK home goods brand used our OEM service to develop a custom product line, from design to branded packaging.',
                titleId: 'cs-home-2-title',
                descId: 'cs-home-2-desc',
                imgId: 'cs-home-2-img-p7q8r9',
              },
              {
                category: 'Apparel',
                title: 'Australian Importer Avoids Quality Dispute',
                desc: 'Our pre-shipment inspection caught defects before goods left China, saving the buyer from a costly return shipment.',
                titleId: 'cs-home-3-title',
                descId: 'cs-home-3-desc',
                imgId: 'cs-home-3-img-s1t2u3',
              },
            ].map((cs) => (
              <div key={cs.title} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-44 object-cover bg-gray-100"
                />
                <div className="p-5">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{cs.category}</span>
                  <h3 id={cs.titleId} className="font-bold text-primary text-lg mt-1 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed">{cs.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-lightblue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl border border-gray-100 shadow-sm group">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-primary text-base">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
