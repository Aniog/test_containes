import { Link } from 'react-router-dom'
import {
  ArrowRight, ShieldCheck, Search, Eye, Truck, Factory,
  CheckCircle2, Globe, Users, Award, BarChart3, Clock,
  AlertTriangle, FileCheck, ThumbsUp, Package, ChevronRight,
  Zap, TrendingDown, Shield, Star
} from 'lucide-react'
import CTABanner from '../components/CTABanner'
import InquiryForm from '../components/InquiryForm'

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist qualified suppliers from our verified network of 3,000+ factories across China.' },
  { icon: ShieldCheck, title: 'Factory Verification', desc: 'On-site factory audits to verify business licenses, production capacity, quality systems, and compliance standards.' },
  { icon: Eye, title: 'Quality Inspection', desc: 'Pre-production, in-line, and pre-shipment inspections following AQL standards to ensure your specifications are met.' },
  { icon: Clock, title: 'Production Monitoring', desc: 'Regular updates and milestone tracking throughout manufacturing to keep your orders on schedule.' },
  { icon: Truck, title: 'Shipping Coordination', desc: 'End-to-end logistics management including freight forwarding, customs clearance, and door-to-door delivery.' },
  { icon: FileCheck, title: 'Sample Management', desc: 'We coordinate samples, document specifications, and manage revisions until the product meets your standards.' },
]

const processSteps = [
  { num: '01', title: 'Submit Requirements', desc: 'Share your product specs, target price, quantity, and any special requirements.' },
  { num: '02', title: 'Supplier Matching', desc: 'We source and verify suppliers, request competitive quotes, and present the best options.' },
  { num: '03', title: 'Sample & Approval', desc: 'We coordinate product samples and help you evaluate quality until satisfied.' },
  { num: '04', title: 'Order & Production', desc: 'We place the order, monitor production milestones, and conduct quality inspections.' },
  { num: '05', title: 'QC & Shipping', desc: 'Final pre-shipment inspection, packaging verification, and coordinated shipping.' },
]

const productCategories = [
  { icon: Package, name: 'Consumer Electronics', desc: 'Phone accessories, audio, smart devices, and gadgets' },
  { icon: Star, name: 'Home & Garden', desc: 'Furniture, kitchenware, lighting, decor, and outdoor products' },
  { icon: Award, name: 'Fashion & Apparel', desc: 'Clothing, bags, shoes, jewelry, and textile products' },
  { icon: Zap, name: 'Auto Parts', desc: 'OEM and aftermarket auto parts, accessories, and tools' },
  { icon: BarChart3, name: 'Beauty & Personal Care', desc: 'Cosmetics, skincare, packaging, and beauty tools' },
  { icon: ThumbsUp, name: 'Promotional Products', desc: 'Custom branded items, corporate gifts, and trade show giveaways' },
  { icon: Factory, name: 'Industrial Equipment', desc: 'Machinery, components, tools, and manufacturing equipment' },
  { icon: Globe, name: 'Toys & Games', desc: 'Children toys, board games, outdoor play, and educational products' },
]

const problems = [
  { icon: AlertTriangle, problem: 'Unreliable suppliers who deliver late or ship defective products', solution: 'We pre-verify every supplier with on-site audits and maintain a vetted factory network.' },
  { icon: TrendingDown, problem: 'Hidden costs, price inflation, and unexpected quality issues', solution: 'Transparent pricing with competitive quotes from multiple suppliers and rigorous QC inspections.' },
  { icon: Shield, problem: 'Communication barriers and difficulty managing production remotely', solution: 'Our bilingual team manages all factory communication and provides regular production updates.' },
  { icon: Truck, problem: 'Complex shipping logistics, customs issues, and delivery delays', solution: 'Full shipping coordination with customs expertise and reliable freight partners.' },
]

const trustPoints = [
  { icon: Users, stat: '3,000+', label: 'Verified Factories', desc: 'Pre-screened supplier network across major manufacturing regions' },
  { icon: Globe, stat: '45+', label: 'Countries Served', desc: 'Clients in North America, Europe, Australia, and the Middle East' },
  { icon: CheckCircle2, stat: '98%', label: 'On-Time Delivery', desc: 'Consistent track record of meeting production and shipping deadlines' },
  { icon: Award, stat: '10+', label: 'Years Experience', desc: 'A decade of sourcing expertise across diverse product categories' },
]

const caseStudies = [
  {
    id: 1, client: 'US Retail Company', industry: 'Home & Garden',
    title: 'Reduced Costs by 32% While Improving Product Quality',
    desc: 'A mid-size US retailer was struggling with inconsistent quality and high prices. We identified three alternative factories, conducted audits, and reduced defect rates from 8% to under 1.5%.',
    results: ['32% cost reduction', '1.5% defect rate', '4-week faster delivery'],
  },
  {
    id: 2, client: 'European Electronics Brand', industry: 'Consumer Electronics',
    title: 'Scaled from Prototype to 50,000 Units in 12 Weeks',
    desc: 'An electronics brand needed to quickly scale production. We sourced specialized manufacturers, managed tooling, and delivered 50,000 units within the target timeline.',
    results: ['50,000 units delivered', 'On-time production', 'FCC certified'],
  },
  {
    id: 3, client: 'Australian Importer', industry: 'Promotional Products',
    title: 'Built a Reliable Supply Chain for 200+ Custom Products',
    desc: 'We established relationships with 15 specialized factories, created standardized QC procedures, and built a streamlined ordering system.',
    results: ['200+ active SKUs', '15 factory partners', '99.2% order accuracy'],
  },
]

const testimonials = [
  { quote: 'SSourcing China transformed our supply chain. Their factory audits saved us from working with a supplier that would have cost us hundreds of thousands in defective products.', name: 'Michael R.', role: 'Procurement Director, US Manufacturing Co.' },
  { quote: 'We tried working directly with Chinese factories before and ran into constant issues. With SSourcing, we finally have a reliable, transparent sourcing process.', name: 'Sarah L.', role: 'Founder, European E-Commerce Brand' },
  { quote: 'Their QC inspection caught a critical defect before shipment that our previous agent missed entirely. The level of detail in their reports is impressive.', name: 'James K.', role: 'Import Manager, Australian Distributor' },
]

const faqs = [
  { q: 'What types of products can you source?', a: 'We source a wide range of products including consumer electronics, home goods, fashion items, auto parts, beauty products, toys, industrial equipment, and promotional products. Our network covers over 3,000 verified factories across major manufacturing regions in China.' },
  { q: 'How do you verify suppliers?', a: 'Our verification process includes checking business licenses, conducting on-site factory audits, verifying production capacity, reviewing quality management systems (ISO certifications), and checking references from existing clients. We also assess financial stability and compliance with international standards.' },
  { q: 'What are your fees?', a: 'We offer flexible pricing models including commission-based (typically 5-10% of order value) and fixed-fee arrangements depending on the project scope. We provide a detailed quote after understanding your specific requirements. There are no upfront charges for initial supplier research and quotation.' },
  { q: 'How long does the sourcing process take?', a: 'Initial supplier matching and quotes typically take 3-5 business days. Sample production takes 7-14 days depending on complexity. Full production timelines vary by product, but we provide detailed schedules upfront and monitor progress throughout.' },
  { q: 'Do you handle small orders?', a: 'Yes, we work with businesses of all sizes. While minimum order quantities depend on the specific product and factory, we have partners who accommodate smaller orders. We will always be upfront about MOQs during the quotation process.' },
  { q: 'What happens if there is a quality issue?', a: 'Our pre-shipment inspections are designed to catch issues before products leave the factory. If a quality issue is found, we work directly with the factory to resolve it, which may include rework, replacement, or compensation. We act as your advocate throughout the process.' },
]

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1B3A6B] to-[#1B4D8E] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-amber-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium text-blue-200 mb-6 backdrop-blur-sm">
                <Globe className="w-4 h-4" />
                Trusted by 500+ Global Buyers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-tight mb-6 tracking-tight">
                China Sourcing Agent for <span className="text-[#F59E0B]">Global Buyers</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-[540px] leading-relaxed">
                We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping -- so you can import with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F59E0B] text-white font-bold rounded-lg hover:bg-[#D97706] transition-all hover:-translate-y-0.5 shadow-lg text-base no-underline">
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/how-it-works" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-base no-underline">
                  See How It Works
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Free Initial Consultation</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> No Upfront Fees</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> 24h Response Time</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  alt="Modern Chinese factory production line with quality control inspection"
                  data-strk-img-id="hero-factory-a1b2c3"
                  data-strk-img="modern factory production quality control inspection China manufacturing"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm font-medium">
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#1B4D8E]" /> ISO 9001 Compliant</span>
            <span className="flex items-center gap-2"><Award className="w-5 h-5 text-[#1B4D8E]" /> 10+ Years in Business</span>
            <span className="flex items-center gap-2"><Globe className="w-5 h-5 text-[#1B4D8E]" /> 45+ Countries Served</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#1B4D8E]" /> 3,000+ Verified Factories</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">Our Sourcing Services</h2>
            <p className="text-lg text-gray-500 max-w-[600px] mx-auto">End-to-end sourcing solutions tailored for businesses importing from China</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="p-6 rounded-xl bg-[#F8FAFC] border border-gray-100 hover:border-[#1B4D8E]/20 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-[#1B4D8E]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1B4D8E] transition-colors">
                  <s.icon className="w-6 h-6 text-[#1B4D8E] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-[#1B4D8E] font-semibold hover:underline text-base no-underline">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">How It Works</h2>
            <p className="text-lg text-gray-500 max-w-[600px] mx-auto">A clear, step-by-step process to get your products sourced and delivered</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.num} className="text-center relative">
                <div className="w-14 h-14 bg-[#1B4D8E] text-white rounded-full flex items-center justify-center text-lg font-extrabold mx-auto mb-4 shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] border-t-2 border-dashed border-[#1B4D8E]/30" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-[#1B4D8E] font-semibold hover:underline text-base no-underline">
              Learn More <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">Products We Source</h2>
            <p className="text-lg text-gray-500 max-w-[600px] mx-auto">We source products across diverse categories from verified Chinese manufacturers</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {productCategories.map(cat => (
              <div key={cat.name} className="p-5 rounded-xl border border-gray-200 hover:border-[#1B4D8E] hover:shadow-lg transition-all group cursor-pointer bg-white">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#F59E0B] transition-colors">
                  <cat.icon className="w-5 h-5 text-[#F59E0B] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-1">{cat.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-[#1B4D8E] font-semibold hover:underline text-base no-underline">
              See All Product Categories <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEMS WE SOLVE */}
      <section className="py-20 bg-[#0F172A] text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Problems We Solve</h2>
            <p className="text-lg text-gray-400 max-w-[600px] mx-auto">Common sourcing challenges and how we address them</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map(p => (
              <div key={p.problem} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <p.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2 line-through">{p.problem}</p>
                    <p className="text-white font-medium text-base flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      {p.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST POINTS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">Why Global Buyers Trust Us</h2>
            <p className="text-lg text-gray-500 max-w-[600px] mx-auto">Numbers that reflect our commitment to reliable sourcing</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map(tp => (
              <div key={tp.label} className="text-center p-6 rounded-xl bg-[#F8FAFC] border border-gray-100">
                <tp.icon className="w-8 h-8 text-[#1B4D8E] mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-1">{tp.stat}</div>
                <div className="text-sm font-semibold text-[#1B4D8E] mb-1">{tp.label}</div>
                <p className="text-xs text-gray-500">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">Case Studies</h2>
            <p className="text-lg text-gray-500 max-w-[600px] mx-auto">Real results from real sourcing projects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map(cs => (
              <div key={cs.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-semibold bg-[#1B4D8E]/10 text-[#1B4D8E] px-3 py-1 rounded-full mb-3 self-start">{cs.industry}</span>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3 leading-tight">{cs.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{cs.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.results.map(r => (
                      <span key={r} className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                        <CheckCircle2 className="w-3 h-3" /> {r}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                  <span className="text-xs font-medium text-gray-500">{cs.client}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#1B4D8E] font-semibold hover:underline text-base no-underline">
              View All Case Studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">What Our Clients Say</h2>
            <p className="text-lg text-gray-500 max-w-[600px] mx-auto">Feedback from businesses we have helped source from China</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#F8FAFC] border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="text-sm font-bold text-[#0F172A]">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-500">Answers to common questions about our sourcing services</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-base font-semibold text-[#0F172A] hover:text-[#1B4D8E] list-none">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="py-20 bg-white" id="inquiry">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">Get a Free Sourcing Quote</h2>
            <p className="text-lg text-gray-500">Tell us what you need and our team will get back to you within 24 hours</p>
          </div>
          <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100 shadow-sm">
            <InquiryForm />
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
