import { Link } from 'react-router-dom'
import { Shield, Search, CheckCircle, Truck, Globe, Users, ArrowRight, Star, TrendingUp, Award } from 'lucide-react'

export default function Home() {
  const services = [
    { icon: Search, title: 'Supplier Sourcing', desc: 'We find and vet reliable manufacturers across China\'s industrial hubs, matching your product needs with qualified factories.' },
    { icon: Shield, title: 'Factory Verification', desc: 'On-site audits to confirm business licenses, production capacity, quality systems, and compliance before you commit.' },
    { icon: CheckCircle, title: 'Quality Inspection', desc: 'Pre-production, during-production, and pre-shipment inspections with detailed photo and video reports.' },
    { icon: TrendingUp, title: 'Production Monitoring', desc: 'Regular progress updates, timeline tracking, and issue resolution to keep your orders on schedule.' },
    { icon: Truck, title: 'Shipping Coordination', desc: 'End-to-end logistics support including freight forwarding, customs documentation, and delivery tracking.' },
    { icon: Globe, title: 'Market Intelligence', desc: 'Pricing analysis, material trends, and supplier landscape reports to help you make informed sourcing decisions.' },
  ]

  const processSteps = [
    { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, quantities, target price, and timeline.' },
    { step: '02', title: 'Supplier Matching', desc: 'We identify and pre-screen qualified factories from our verified network.' },
    { step: '03', title: 'Sample & Quotation', desc: 'Receive samples and competitive quotes from shortlisted suppliers for your review.' },
    { step: '04', title: 'Production & QC', desc: 'We monitor production and conduct quality inspections at every critical stage.' },
    { step: '05', title: 'Shipping & Delivery', desc: 'Coordinated logistics from factory floor to your warehouse, door to door.' },
  ]

  const products = [
    'Electronics & Components', 'Apparel & Textiles', 'Home & Garden',
    'Industrial Machinery', 'Auto Parts & Accessories', 'Packaging Materials',
    'Sports & Outdoor', 'Toys & Gifts', 'Building Materials',
  ]

  const trustPoints = [
    { icon: Users, stat: '500+', label: 'Verified Suppliers' },
    { icon: Globe, stat: '40+', label: 'Countries Served' },
    { icon: Award, stat: '12+', label: 'Years Experience' },
    { icon: Star, stat: '98%', label: 'Client Satisfaction' },
  ]

  const problems = [
    { problem: 'Unreliable suppliers', solution: 'We verify every factory with on-site audits and background checks before recommending them.' },
    { problem: 'Quality issues', solution: 'Multi-stage inspections with photo/video reports ensure products meet your standards.' },
    { problem: 'Communication barriers', solution: 'Bilingual team handles all negotiations, specifications, and follow-ups on your behalf.' },
    { problem: 'Hidden costs', solution: 'Transparent pricing with no hidden fees. You see exactly what you pay for.' },
    { problem: 'Shipping delays', solution: 'Proactive production monitoring and logistics coordination keep deliveries on track.' },
  ]

  const testimonials = [
    { name: 'James Mitchell', role: 'Procurement Director, TechGear Inc.', text: 'SSourcing China helped us reduce our sourcing costs by 30% while improving quality. Their factory audits saved us from two problematic suppliers.', rating: 5 },
    { name: 'Sarah Williams', role: 'Founder, EcoHome Brands', text: 'The quality inspection reports are incredibly detailed. We feel confident about every shipment that leaves the factory.', rating: 5 },
    { name: 'Marco Rossi', role: 'Operations Manager, EuroParts GmbH', text: 'Professional, responsive, and thorough. They handle everything from supplier selection to final delivery seamlessly.', rating: 5 },
  ]

  const faqs = [
    { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits covering business licenses, production capacity, quality management systems, working conditions, and export experience. Each supplier receives a detailed verification report.' },
    { q: 'What is your service fee structure?', a: 'We offer transparent pricing based on order value and service scope. Contact us for a customized quote — there are no hidden fees or surprise charges.' },
    { q: 'How long does the sourcing process take?', a: 'Typical timelines: supplier identification (1-2 weeks), sampling (2-4 weeks), production (4-8 weeks depending on complexity), and shipping (2-6 weeks). We provide detailed timelines for each project.' },
    { q: 'Do you work with small orders?', a: 'Yes, we work with businesses of all sizes. While larger orders benefit from better pricing, we support startups and small businesses with flexible MOQ arrangements.' },
    { q: 'What industries do you specialize in?', a: 'We source across all major categories including electronics, apparel, home goods, industrial equipment, auto parts, packaging, and more. Our team has expertise across diverse product categories.' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <Globe className="w-4 h-4" />
              <span>Trusted by 500+ businesses worldwide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-blue-400">for Global Buyers</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, 
              follow production, and coordinate shipping — all from one trusted partner in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-b border-border">
        <div className="container-custom py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, i) => (
              <div key={i} className="text-center">
                <point.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">{point.stat}</div>
                <div className="text-muted-foreground text-sm">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Sourcing Services</h2>
            <p className="section-subtitle">
              End-to-end sourcing support from supplier discovery to final delivery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="card bg-white">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              A streamlined 5-step process from inquiry to delivery
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-secondary">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Products We Source</h2>
            <p className="section-subtitle">
              We source across all major product categories from verified Chinese manufacturers
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {products.map((product, i) => (
              <span key={i} className="bg-white border border-border px-5 py-3 rounded-lg text-foreground font-medium hover:border-primary hover:text-primary transition-colors cursor-default">
                {product}
              </span>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
              View all product categories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Problems We Solve</h2>
            <p className="section-subtitle">
              Common sourcing challenges and how we address them
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {problems.map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-red-600 text-sm font-bold">✕</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.problem}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Trusted by businesses across North America, Europe, and beyond
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card bg-white">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed italic">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-muted-foreground text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Common questions about our sourcing services
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-border rounded-xl">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-foreground hover:text-primary transition-colors list-none">
                  {faq.q}
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Sourcing from China?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation sourcing quote. Tell us what you need and we'll get back to you within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 text-lg inline-flex items-center gap-2">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
