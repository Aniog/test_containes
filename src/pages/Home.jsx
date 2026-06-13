import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Search, Factory, ClipboardCheck, Ship, Truck, CheckCircle, ChevronRight, Star, Users, Globe, Award, Clock, HeadphonesIcon, ArrowRight, FileSearch, Package } from 'lucide-react'
import Button from '@/components/ui/button'

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We find reliable suppliers that match your product requirements, budget, and quality standards.' },
  { icon: FileSearch, title: 'Supplier Verification', desc: 'Verify business licenses, factory capabilities, certifications, and trade references before engagement.' },
  { icon: Factory, title: 'Factory Audits', desc: 'On-site factory audits covering production capacity, quality systems, working conditions, and compliance.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-shipment inspections, during-production checks, and random sampling to ensure product quality.' },
  { icon: Package, title: 'Sample Management', desc: 'Coordinate sample requests, review samples against specifications, and manage approvals.' },
  { icon: Ship, title: 'Shipping & Logistics', desc: 'Coordinate freight, customs clearance, and door-to-door delivery from factory to your warehouse.' },
]

const processSteps = [
  { step: '01', title: 'Submit Your Requirements', desc: 'Tell us about your product, quantities, budget, and quality expectations.' },
  { step: '02', title: 'Supplier Matching', desc: 'We identify and vet suitable suppliers from our curated network of verified manufacturers.' },
  { step: '03', title: 'Quotation & Samples', desc: 'Receive competitive quotes and product samples for your evaluation and approval.' },
  { step: '04', title: 'Order & Production', desc: 'Once approved, we manage your order, follow production closely, and keep you updated.' },
  { step: '05', title: 'Quality Inspection', desc: 'Our QC team inspects goods during and after production to ensure specifications are met.' },
  { step: '06', title: 'Shipping & Delivery', desc: 'We handle logistics, documentation, and shipping so your goods arrive safely and on time.' },
]

const productCategories = [
  { title: 'Industrial Equipment', desc: 'Machinery, tools, industrial components, and manufacturing equipment.' },
  { title: 'Consumer Electronics', desc: 'Smartphones, accessories, audio devices, wearables, and smart home products.' },
  { title: 'Home & Living', desc: 'Furniture, home decor, kitchenware, bedding, and storage solutions.' },
  { title: 'Apparel & Textiles', desc: 'Garments, fabrics, accessories, footwear, and fashion items.' },
  { title: 'Packaging & Printing', desc: 'Custom packaging, labels, boxes, and promotional materials.' },
  { title: 'Auto Parts & Accessories', desc: 'Vehicle components, car accessories, and aftermarket parts.' },
  { title: 'Health & Beauty', desc: 'Cosmetics, personal care products, supplements, and wellness items.' },
  { title: 'Building Materials', desc: 'Construction materials, hardware, plumbing, and electrical supplies.' },
]

const problems = [
  { title: 'Finding Reliable Suppliers', desc: 'Struggling to separate legitimate manufacturers from trading companies or frauds? We verify each supplier thoroughly before introduction.', icon: Search },
  { title: 'Quality Consistency Issues', desc: 'Products arriving below sample quality or with defects? Our inspection protocols catch issues before shipment.', icon: Shield },
  { title: 'Communication Barriers', desc: 'Language and time zone differences causing misunderstandings? Our bilingual team manages all communication for you.', icon: Globe },
  { title: 'Production Delays', desc: 'Missed deadlines costing you sales? We monitor production schedules and intervene before delays happen.', icon: Clock },
  { title: 'Hidden Costs', desc: 'Unexpected fees eating into your margins? We provide transparent, itemized quotes so you know exactly what you\'re paying for.', icon: FileSearch },
  { title: 'Logistics Complexity', desc: 'Shipping, customs, and documentation overwhelming your team? We coordinate the entire logistics chain from factory to door.', icon: Truck },
]

const trustPoints = [
  { icon: Users, stat: '500+', label: 'Buyers Served Globally' },
  { icon: Factory, stat: '2,000+', label: 'Verified Suppliers' },
  { icon: Award, stat: '98%', label: 'Client Satisfaction Rate' },
  { icon: Ship, stat: '1,500+', label: 'Containers Shipped' },
]

const testimonials = [
  {
    quote: 'SSourcing China helped us find a reliable packaging supplier after months of dead ends. Their factory audit revealed issues we never would have spotted. We\'ve now placed three repeat orders.',
    author: 'Thomas Mueller',
    role: 'Procurement Manager, Germany',
  },
  {
    quote: 'The quality inspection service alone has saved us thousands in defective products. Their team is thorough, responsive, and truly understands international quality standards.',
    author: 'Sarah Chen',
    role: 'Founder, US-based E-commerce Brand',
  },
  {
    quote: 'What sets SSourcing apart is their transparency. They show you exactly what\'s happening at the factory, good or bad. That trust is invaluable when you\'re sourcing from halfway around the world.',
    author: 'James Okonkwo',
    role: 'Operations Director, Nigeria',
  },
]

const faqs = [
  { q: 'How do I know if a supplier is reliable?', a: 'We verify suppliers through business license checks, on-site factory visits, capability assessments, and trade reference verification. You receive a detailed report before any commitment.' },
  { q: 'What are your service fees?', a: 'Our fee structure depends on the scope of services required. We offer competitive, transparent pricing with no hidden costs. Contact us for a customized quote based on your project needs.' },
  { q: 'Do you work with small businesses?', a: 'Yes, we work with businesses of all sizes. Whether you\'re ordering your first sample or managing regular container shipments, we tailor our services to your budget and requirements.' },
  { q: 'How long does the sourcing process take?', a: 'Typical timelines: supplier identification 1-2 weeks, sample production 2-4 weeks, production 4-8 weeks depending on product complexity and order quantity.' },
  { q: 'Which industries do you cover?', a: 'We source across consumer electronics, industrial equipment, home goods, apparel, packaging, auto parts, building materials, health products, and more.' },
  { q: 'How do you handle quality disputes?', a: 'Our detailed inspection reports provide objective evidence. We facilitate communication between you and the supplier to resolve issues fairly. If necessary, we help negotiate returns or replacements.' },
]

export default function Home() {
  const containerRef = useRef(null)

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-brand-900 to-neutral-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-800/50 text-brand-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-brand-700/50">
              <Shield className="w-4 h-4" />
              Your Trusted China Sourcing Partner
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mb-8 leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can source from China with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-brand-500 hover:bg-brand-400 text-white shadow-lg shadow-brand-600/25">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((item, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-2">
                  <item.icon className="w-6 h-6 text-brand-600" />
                </div>
                <div className="text-2xl font-bold text-neutral-900">{item.stat}</div>
                <div className="text-sm text-neutral-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">End-to-End Sourcing Services</h2>
            <p className="text-lg text-neutral-600">Every step of your sourcing journey, managed by our experienced team based in China.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-xl p-6 lg:p-8 border border-neutral-200 hover:border-brand-300 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="md">
                View All Services
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">How We Work</h2>
            <p className="text-lg text-neutral-600">A structured, transparent process designed to minimize risk and maximize results.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative flex gap-4 p-6 rounded-xl border border-neutral-200 bg-neutral-50">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-neutral-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works">
              <Button variant="outline" size="md">
                Learn More About Our Process
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Products We Source</h2>
            <p className="text-lg text-neutral-600">We source across a wide range of industries and product categories.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {productCategories.map((cat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-brand-300 hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold text-neutral-900 mb-2">{cat.title}</h3>
                <p className="text-sm text-neutral-600">{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products">
              <Button variant="outline" size="md">
                See All Categories
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Problems We Solve</h2>
            <p className="text-lg text-neutral-600">Sourcing from China comes with challenges. Here\'s how we address them.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {problems.map((problem, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-xl border border-neutral-200 hover:border-red-200 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{problem.title}</h3>
                  <p className="text-sm text-neutral-600">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="py-16 lg:py-24 bg-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Work With Us</h2>
            <p className="text-lg text-brand-100">We\'re on the ground in China, giving you eyes and ears where it matters most.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-brand-200 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">On-the-Ground Team</h3>
              <p className="text-sm text-brand-100">Based in Guangzhou with regular travel to factories across Guangdong, Zhejiang, Jiangsu, and other manufacturing hubs.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <Shield className="w-8 h-8 text-brand-200 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Independent Inspections</h3>
              <p className="text-sm text-brand-100">We work for you, not suppliers. Our inspections are unbiased, thorough, and documented with photo evidence.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <Globe className="w-8 h-8 text-brand-200 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Bilingual Support</h3>
              <p className="text-sm text-brand-100">Fluency in Chinese, English, and international business practices means nothing gets lost in translation.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <Award className="w-8 h-8 text-brand-200 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Proven Track Record</h3>
              <p className="text-sm text-brand-100">500+ buyers served, 2000+ suppliers verified, 1500+ containers shipped across 40+ countries.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <FileSearch className="w-8 h-8 text-brand-200 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Full Transparency</h3>
              <p className="text-sm text-brand-100">Detailed reports, real-time updates, and full visibility into every step of your sourcing process.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <HeadphonesIcon className="w-8 h-8 text-brand-200 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Dedicated Account Manager</h3>
              <p className="text-sm text-brand-100">One point of contact for your entire project, ensuring consistency, accountability, and clear communication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Case Studies Preview */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-neutral-600">Real feedback from buyers we\'ve helped source products in China.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 lg:p-8 border border-neutral-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-neutral-700 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-neutral-100 pt-4">
                  <div className="font-medium text-neutral-900 text-sm">{t.author}</div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies">
              <Button variant="outline" size="md">
                View Case Studies
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-neutral-600">Common questions about working with a China sourcing agent.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-neutral-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-neutral-50 transition-colors">
                  <span className="font-medium text-neutral-900 pr-4">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-brand-600 to-brand-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Source from China with Confidence?</h2>
          <p className="text-lg text-brand-100 mb-8 max-w-xl mx-auto">
            Tell us what you need, and we\'ll get back to you within 24 hours with a customized sourcing plan.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg" className="bg-white text-brand-700 hover:bg-neutral-100 shadow-lg">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}