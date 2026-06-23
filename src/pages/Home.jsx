import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  Shield, Search, ClipboardCheck, Factory, Ship, Truck,
  ChevronRight, CheckCircle, X, Star, Users, Award, Globe,
  ArrowRight, HeadphonesIcon, Building2, Gauge, CreditCard,
  Image
} from 'lucide-react'

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We find and vet qualified Chinese manufacturers matching your exact product specifications and budget.' },
  { icon: Factory, title: 'Factory Audit', desc: 'On-site factory audits covering production capacity, certifications, quality systems, and financial health.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-shipment, during-production, and container-loading inspections to AQL international standards.' },
  { icon: Gauge, title: 'Production Monitoring', desc: 'Real-time production tracking, progress reports, and timeline management to ensure on-time delivery.' },
  { icon: Ship, title: 'Shipping & Logistics', desc: 'End-to-end freight forwarding, customs clearance, and delivery coordination to your destination.' },
  { icon: HeadphonesIcon, title: 'After-Sales Support', desc: 'Ongoing communication and issue resolution even after your goods have shipped.' },
]

const processSteps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and any certifications required.' },
  { step: '02', title: 'Supplier Identification', desc: 'We tap our network of 10,000+ pre-screened factories to shortlist the best matches for you.' },
  { step: '03', title: 'Factory Verification', desc: 'We conduct on-site audits, verify certifications, and send you detailed reports with photos and videos.' },
  { step: '04', title: 'Sample & Negotiation', desc: 'We arrange samples, negotiate pricing and payment terms on your behalf, and finalize the contract.' },
  { step: '05', title: 'Production & QC', desc: 'We monitor production with regular inspections, ensuring every unit meets your quality standards.' },
  { step: '06', title: 'Shipping & Delivery', desc: 'We handle all logistics — freight booking, customs documentation, and door-to-door delivery.' },
]

const problemSolutions = [
  { problem: 'Hard to find reliable suppliers', solution: 'We pre-screen factories with on-site audits and financial checks before recommending them.' },
  { problem: 'Quality doesn\'t match samples', solution: 'Multiple QC inspections during and after production against your approved sample.' },
  { problem: 'Communication barriers', solution: 'Bilingual team fluent in English and Mandarin — no lost-in-translation mistakes.' },
  { problem: 'Hidden costs and delays', solution: 'Transparent pricing, fixed service fees, and proactive timeline management with weekly updates.' },
  { problem: 'No factory visit capability', solution: 'Live video walkthroughs, detailed audit reports with photos, and real-time production tracking.' },
  { problem: 'Payment security concerns', solution: 'We structure milestone-based payments and can facilitate escrow arrangements.' },
]

const trustPoints = [
  { icon: Users, value: '500+', label: 'Satisfied Clients' },
  { icon: Factory, value: '10,000+', label: 'Verified Factories' },
  { icon: Award, value: '12+ Years', label: 'Industry Experience' },
  { icon: Globe, value: '30+', label: 'Countries Served' },
]

const faqs = [
  { q: 'What are your service fees?', a: 'Our fees depend on the scope of services. We offer flexible models: per-project fixed fees, monthly retainers, or a small percentage of order value. Contact us for a custom quote.' },
  { q: 'How do you ensure supplier reliability?', a: 'Every supplier undergoes a rigorous verification process: business license check, factory site audit, production capacity assessment, quality system review, and reference checks with past buyers.' },
  { q: 'Can you handle small orders?', a: 'Yes. We work with orders of all sizes — from small trial batches of a few hundred units to full-container production runs. We have factories that specialize in both.' },
  { q: 'What product categories do you cover?', a: 'We source across 20+ categories including electronics, apparel, home goods, hardware, machinery, packaging, automotive parts, furniture, toys, medical supplies, and more.' },
  { q: 'How long does the sourcing process take?', a: 'Initial supplier shortlisting takes 3–5 business days. Factory audits take 2–3 days per factory. From first contact to shipment, typical timelines are 4–8 weeks depending on product complexity.' },
  { q: 'Do you handle shipping and customs?', a: 'Yes, we provide end-to-end logistics: freight forwarding (sea/air/rail), customs clearance documentation, container booking, and coordination with your local freight forwarder.' },
]

const testimonials = [
  {
    name: 'Michael Roberts',
    company: 'TechAccessories Inc., USA',
    text: 'SSourcing China helped us cut sourcing costs by 22% while improving product quality. Their factory audit reports gave us complete confidence before placing our first order.',
    rating: 5,
  },
  {
    name: 'Sarah Lindqvist',
    company: 'Nordic Home Goods, Sweden',
    text: 'After two failed attempts with other agents, SSourcing China finally found us a furniture factory that actually delivers on quality and deadlines. Three years later, we\'re still working together.',
    rating: 5,
  },
  {
    name: 'David Chen',
    company: 'Aussie Outdoor Gear, Australia',
    text: 'The level of detail in their QC reports is outstanding. Every inspection comes with timestamped photos and clear notes. It\'s like having our own quality team in China.',
    rating: 5,
  },
]

const productCategories = [
  { name: 'Electronics', imgId: 'prod-elec-a1b2c3' },
  { name: 'Apparel & Textiles', imgId: 'prod-apparel-d4e5f6' },
  { name: 'Home & Kitchen', imgId: 'prod-home-g7h8i9' },
  { name: 'Furniture', imgId: 'prod-furniture-j1k2l3' },
  { name: 'Hardware & Tools', imgId: 'prod-hardware-m4n5o6' },
  { name: 'Packaging', imgId: 'prod-packaging-p7q8r9' },
  { name: 'Automotive Parts', imgId: 'prod-auto-s1t2u3' },
  { name: 'Toys & Games', imgId: 'prod-toys-v4w5x6' },
]

export default function Home() {
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-900/70" />
        <div className="relative container-wide py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm mb-6">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-white/80">Trusted by 500+ global buyers since 2014</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-white/70 max-w-2xl mb-8 leading-relaxed">
              Find reliable Chinese suppliers, verify factories, inspect quality, and ship with confidence.
              We handle every step — so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded text-lg transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded text-lg transition-colors border border-white/20"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-surface-alt border-b border-surface-border">
        <div className="container-wide py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label}>
                <tp.icon className="mx-auto mb-2 text-brand-600" size={28} />
                <div className="text-2xl md:text-3xl font-extrabold text-brand-800">{tp.value}</div>
                <div className="text-sm text-text-secondary mt-1">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wide">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
              End-to-End Sourcing Services
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From finding the right factory to delivering finished goods to your warehouse — we manage the entire sourcing lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="group bg-surface border border-surface-border rounded-xl p-6 hover:border-brand-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-800 group-hover:text-white transition-colors">
                  <svc.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{svc.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand-800 font-semibold hover:text-accent-500 transition-colors">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-surface-alt">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wide">Problems We Solve</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
              Sourcing from China Shouldn't Be a Gamble
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We eliminate the risks, stress, and uncertainty that come with overseas sourcing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemSolutions.map((item) => (
              <div key={item.problem} className="bg-white rounded-xl p-6 border border-surface-border">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-50 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={14} className="text-accent-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-text mb-1">{item.problem}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mt-3">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={14} className="text-green-600" />
                  </div>
                  <p className="text-text-secondary text-sm">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wide">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
              Simple, Transparent Process
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Six clear steps from your product idea to goods delivered at your door.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((ps) => (
              <div key={ps.step} className="relative">
                <div className="text-5xl font-extrabold text-brand-100 mb-3">{ps.step}</div>
                <h3 className="text-lg font-semibold text-text mb-2">{ps.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{ps.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-brand-800 font-semibold hover:text-accent-500 transition-colors">
              Learn More About Our Process
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding bg-surface-alt">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wide">Products We Source</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
              We Source Across 20+ Categories
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From electronics to furniture, our network covers virtually every manufacturing sector in China.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productCategories.map((cat) => (
              <div key={cat.name} className="group bg-white rounded-xl overflow-hidden border border-surface-border hover:shadow-md transition-all">
                <div className="aspect-[4/3] bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center">
                  <Image size={48} className="text-brand-300 group-hover:text-brand-500 transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-text text-sm">{cat.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products-we-source" className="inline-flex items-center gap-2 text-brand-800 font-semibold hover:text-accent-500 transition-colors">
              View All Product Categories
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-900 text-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wide">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[testimonialIndex].rating }).map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl leading-relaxed mb-8">
                &ldquo;{testimonials[testimonialIndex].text}&rdquo;
              </blockquote>
              <div>
                <div className="font-semibold">{testimonials[testimonialIndex].name}</div>
                <div className="text-white/60 text-sm">{testimonials[testimonialIndex].company}</div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === testimonialIndex ? 'bg-accent-500 w-8' : 'bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wide">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
              Real Results for Real Clients
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              See how we've helped businesses across industries source better, save costs, and scale faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Electronics Startup Cuts Costs by 35%', cat: 'Consumer Electronics', color: 'from-blue-50 to-blue-100' },
              { title: 'Furniture Brand Scales to 3 New Factories', cat: 'Furniture & Home', color: 'from-amber-50 to-amber-100' },
              { title: 'Apparel Importer Achieves 99.2% QC Pass Rate', cat: 'Apparel & Textiles', color: 'from-green-50 to-green-100' },
            ].map((cs) => (
              <Link key={cs.title} to="/case-studies" className="group bg-surface border border-surface-border rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className={`aspect-[16/10] bg-gradient-to-br ${cs.color} flex items-center justify-center`}>
                  <Factory size={40} className="text-brand-300 group-hover:text-brand-500 transition-colors" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-accent-500 uppercase tracking-wide">{cs.cat}</span>
                  <h3 className="font-semibold text-text mt-1 group-hover:text-brand-800 transition-colors">{cs.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-brand-800 font-semibold hover:text-accent-500 transition-colors">
              Read All Case Studies
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface-alt">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wide">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl border border-surface-border">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-text list-none">
                  {faq.q}
                  <ChevronRight size={18} className="transition-transform group-open:rotate-90 text-text-muted" />
                </summary>
                <div className="px-5 pb-5 text-text-secondary text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-brand-800 text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Tell us about your product needs and get a free, no-obligation sourcing quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}