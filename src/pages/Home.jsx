import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, PackageCheck, Truck, Factory,
  ClipboardCheck, Ship, Users, Award, Star, ChevronRight,
  Globe, BarChart3, ArrowRight, CheckCircle2, Building2,
  Wrench, Shirt, Smartphone, Cpu, Sofa, ShoppingCart,
  ChevronDown, ChevronUp, MessageSquare, Clock,
} from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We find and vet qualified Chinese manufacturers that match your specific product requirements, budget, and quality standards.',
    bgImgId: 'home-service-sourcing-bg-a1b2c3',
    titleId: 'home-service-sourcing-title',
    descId: 'home-service-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'We conduct on-site factory audits to verify production capabilities, certifications, and business licenses before you commit.',
    bgImgId: 'home-service-factory-bg-d4e5f6',
    titleId: 'home-service-factory-title',
    descId: 'home-service-factory-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Our QC team performs in-line and pre-shipment inspections to ensure your products meet specifications and international standards.',
    bgImgId: 'home-service-qc-bg-g7h8i9',
    titleId: 'home-service-qc-title',
    descId: 'home-service-qc-desc',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'We coordinate FCL/LCL shipments, handle customs documentation, and manage freight forwarding to your destination port.',
    bgImgId: 'home-service-shipping-bg-j1k2l3',
    titleId: 'home-service-shipping-title',
    descId: 'home-service-shipping-desc',
  },
]

const processSteps = [
  { step: '01', title: 'Tell Us Your Needs', desc: 'Share your product specifications, target price, order quantity, and quality requirements.' },
  { step: '02', title: 'Supplier Identification', desc: 'We search our network and databases to identify 3-5 qualified suppliers matching your criteria.' },
  { step: '03', title: 'Factory Audit & Verification', desc: 'We conduct on-site factory visits, verify certifications, and assess production capabilities.' },
  { step: '04', title: 'Sampling & Negotiation', desc: 'We coordinate samples, negotiate pricing and terms, and help you select the best supplier.' },
  { step: '05', title: 'Production Monitoring', desc: 'We track production milestones, provide progress updates with photos, and ensure on-time delivery.' },
  { step: '06', title: 'QC & Shipping', desc: 'We perform quality inspection, coordinate logistics, and manage shipping to your destination.' },
]

const productCategories = [
  { icon: Smartphone, name: 'Electronics & Gadgets', desc: 'Smart devices, accessories, PCBA, components' },
  { icon: Wrench, name: 'Industrial Equipment', desc: 'Machinery, tools, molds, automation parts' },
  { icon: ShoppingCart, name: 'Consumer Goods', desc: 'Household items, kitchenware, packaging' },
  { icon: Shirt, name: 'Textiles & Apparel', desc: 'Garments, fabrics, home textiles, accessories' },
  { icon: Sofa, name: 'Furniture & Home', desc: 'Indoor/outdoor furniture, home decor' },
  { icon: Cpu, name: 'Auto Parts & Hardware', desc: 'Vehicle components, fasteners, metal parts' },
]

const trustPoints = [
  { icon: Factory, label: '500+ Verified Factories', desc: 'Extensive network of audited suppliers across China' },
  { icon: Globe, label: '15+ Years Experience', desc: 'Deep knowledge of China manufacturing landscape' },
  { icon: Award, label: 'ISO-Certified QC', desc: 'Professional quality inspection following international standards' },
  { icon: Users, label: 'Dedicated Project Manager', desc: 'Single point of contact for your entire sourcing project' },
]

const problems = [
  {
    problem: 'Unreliable suppliers who disappear after payment',
    solution: 'We verify every factory on-site before you commit a single dollar.',
    icon: Building2,
  },
  {
    problem: 'Hidden costs and inflated pricing',
    solution: 'We negotiate directly with factories using local market knowledge for transparent pricing.',
    icon: BarChart3,
  },
  {
    problem: 'Quality issues discovered too late',
    solution: 'In-line inspections catch problems early, pre-shipment checks ensure final quality.',
    icon: ShieldCheck,
  },
  {
    problem: 'Language barriers and cultural misunderstandings',
    solution: 'Bilingual team bridges communication gaps and manages cultural expectations.',
    icon: MessageSquare,
  },
]

const caseStudies = [
  {
    id: '1',
    title: 'Reducing Procurement Costs by 30%',
    client: 'European Electronics Brand',
    result: 'Identified 3 qualified PCB assembly suppliers, negotiated 30% cost reduction, established stable supply chain.',
  },
  {
    id: '2',
    title: 'From 12% Defect Rate to <1%',
    client: 'US Kitchenware Importer',
    result: 'Implemented in-line QC process, switched to a better-matched factory, reduced defect rate from 12% to under 1%.',
  },
  {
    id: '3',
    title: 'Custom Furniture Line Launch',
    client: 'Australian Furniture Retailer',
    result: 'Sourced factory specializing in solid wood, managed sampling iterations, delivered first 3 containers on time.',
  },
]

const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ) you can handle?',
    a: 'We work with orders of all sizes. While many Chinese factories have MOQs, we can find suppliers that match your volume needs — whether that is 100 units or 10,000.',
  },
  {
    q: 'How do you charge for your sourcing services?',
    a: 'We offer flexible pricing models including a percentage of order value, fixed project fees, or a retainer model. Contact us for a customized quote based on your sourcing needs.',
  },
  {
    q: 'How do you ensure product quality?',
    a: 'We follow a three-stage quality process: factory audit before engagement, in-line inspection during production, and pre-shipment inspection before shipping. All inspections follow AQL international standards.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes, we coordinate FCL and LCL shipments, prepare all export/import documentation, and work with trusted freight forwarders to deliver goods to your destination port or warehouse.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typical timelines: supplier identification (1-2 weeks), sampling (2-4 weeks), production (depends on product complexity), QC and shipping (1-4 weeks). We provide a detailed timeline at project start.',
  },
  {
    q: 'Can you help with product design and development?',
    a: 'Yes, we can connect you with Chinese design engineers and prototyping services. We also help adapt your designs for Chinese manufacturing processes.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left font-medium text-navy"
      >
        <span>{faq.q}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 flex-shrink-0 ml-4" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 ml-4" />}
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-slate-600 leading-relaxed">
          {faq.a}
        </div>
      )}
    </div>
  )
}

export default function Home() {
  const containerRef = useRef(null)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            data-strk-bg-id="home-hero-bg-x1y2z3"
            data-strk-bg="[home-hero-subtitle] [home-hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="container-main relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-1.5 text-sm mb-6">
              <Globe className="w-4 h-4 text-gold" />
              Trusted by buyers from 30+ countries
            </div>
            <h1 id="home-hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="home-hero-subtitle" className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping — all with a trusted partner on the ground in China.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-gold hover:bg-gold-hover text-white font-semibold px-8 py-3.5 rounded-lg text-center transition-colors inline-flex items-center justify-center gap-2"
              >
                Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-lg text-center transition-colors"
              >
                How It Works
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-gold" /> No upfront fees</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-gold" /> Factory audit reports</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-gold" /> Dedicated project manager</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge Bar */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="container-main">
          <p className="text-center text-sm text-slate-500 mb-6">TRUSTED BY BUYERS WORLDWIDE</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((point) => (
              <div key={point.label} className="flex items-start gap-3">
                <div className="bg-navy/5 p-2 rounded-lg">
                  <point.icon className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{point.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-[#f7f8fa] section-padding">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">Problems We Solve</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">Sourcing from China Shouldn't Be Risky</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We eliminate the common headaches of importing from China so you can focus on growing your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex gap-4">
                  <div className="bg-red-50 p-2.5 rounded-lg h-fit">
                    <item.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <p className="text-red-600 text-sm font-medium">Problem</p>
                    <p className="text-slate-800 font-semibold mt-1">{item.problem}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-green-600 text-sm font-medium">Our Solution</p>
                      <p className="text-slate-700 mt-1">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">Our Services</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">End-to-End China Sourcing Solutions</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              From supplier discovery to final delivery, we handle every step of the sourcing journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4">
                  <svc.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 id={svc.titleId} className="text-lg font-semibold text-navy mb-2">{svc.title}</h3>
                <p id={svc.descId} className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                <div className="mt-4 h-32 rounded-lg overflow-hidden">
                  <div
                    data-strk-bg-id={svc.bgImgId}
                    data-strk-bg={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="600"
                    className="w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Sourcing Process */}
      <section className="bg-navy text-white section-padding">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Sourcing Process</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">How We Source for You</h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              A proven 6-step process that ensures transparency, quality, and on-time delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <span className="text-gold text-3xl font-bold">{step.step}</span>
                <h3 className="text-lg font-semibold mt-3 mb-2">{step.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-hover font-semibold transition-colors"
            >
              View full process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">Industries</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">Products We Source</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We cover major manufacturing categories across China's industrial regions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <div key={cat.name} className="flex items-start gap-4 bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="bg-navy/5 p-3 rounded-lg">
                  <cat.icon className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">{cat.name}</h3>
                  <p className="text-sm text-slate-500 mt-1">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-accent-blue hover:underline font-semibold transition-colors"
            >
              View all product categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-[#f7f8fa] section-padding">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">Case Studies</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">Real Results for Real Buyers</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              See how we've helped businesses source smarter from China.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <Star className="w-5 h-5 text-gold mb-4" />
                <h3 className="text-lg font-semibold text-navy mb-2">{cs.title}</h3>
                <p className="text-sm font-medium text-accent-blue mb-3">{cs.client}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{cs.result}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-accent-blue hover:underline font-semibold transition-colors"
            >
              Read more case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="bg-navy rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-15">
              <div
                data-strk-bg-id="home-cta-bg-m4n5o6"
                data-strk-bg="[home-cta-title] [home-cta-subtitle]"
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="1200"
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 id="home-cta-title" className="text-3xl md:text-4xl font-bold">Ready to Start Sourcing from China?</h2>
              <p id="home-cta-subtitle" className="mt-4 text-slate-300 text-lg">
                Tell us what you need, and we'll find the right supplier for you. Free consultation, no obligation.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gold hover:bg-gold-hover text-white font-semibold px-8 py-3.5 rounded-lg text-center transition-colors inline-flex items-center justify-center gap-2"
                >
                  Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-lg text-center transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7f8fa] section-padding">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
