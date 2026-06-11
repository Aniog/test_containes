import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TrustBar from '@/components/sections/TrustBar'
import ServiceCard from '@/components/sections/ServiceCard'
import ProcessStep from '@/components/sections/ProcessStep'
import ProductCategory from '@/components/sections/ProductCategory'
import ProblemCard from '@/components/sections/ProblemCard'
import CaseStudyCard from '@/components/sections/CaseStudyCard'
import FAQItem from '@/components/sections/FAQItem'
import InquiryForm from '@/components/sections/InquiryForm'
import { 
  Search, ShieldCheck, ClipboardCheck, Factory, Truck, 
  Users, Award, Clock, Globe 
} from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: Search,
      title: "Supplier Sourcing",
      description: "We identify and qualify manufacturers that match your product specifications, quality standards, and volume requirements.",
      details: "Access to a vetted network of 500+ factories across major manufacturing regions in China."
    },
    {
      icon: ShieldCheck,
      title: "Factory Verification",
      description: "On-site audits to confirm legitimacy, production capacity, quality systems, and compliance with international standards.",
      details: "Includes business license verification, facility inspection, and reference checks."
    },
    {
      icon: ClipboardCheck,
      title: "Quality Inspection",
      description: "Pre-shipment, in-process, and pre-production inspections to ensure products meet your specifications before payment and shipment.",
      details: "Detailed reports with photos, measurements, and pass/fail criteria aligned to AQL standards."
    },
    {
      icon: Factory,
      title: "Production Monitoring",
      description: "Regular updates and oversight during manufacturing to track progress, identify issues early, and maintain schedule adherence.",
      details: "Weekly reports, milestone tracking, and direct communication with factory management."
    },
    {
      icon: Truck,
      title: "Shipping Coordination",
      description: "End-to-end logistics support including freight booking, documentation, customs clearance guidance, and delivery tracking.",
      details: "We work with established freight forwarders and handle FOB, CIF, and DDP terms."
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Requirement Review",
      description: "We discuss your product specifications, target price, volume, timeline, and quality expectations in detail.",
      items: ["Product specifications and samples", "Compliance and certification needs", "Budget and timeline parameters"]
    },
    {
      number: "02",
      title: "Supplier Identification",
      description: "We search our network and conduct initial screening to shortlist 3-5 suitable manufacturers.",
      items: ["Capability and capacity assessment", "Preliminary pricing comparison", "Sample request coordination"]
    },
    {
      number: "03",
      title: "Factory Verification",
      description: "We conduct on-site audits of shortlisted factories to verify legitimacy, quality systems, and production capability.",
      items: ["Business and legal verification", "Production line and equipment review", "Quality control process evaluation"]
    },
    {
      number: "04",
      title: "Sample Evaluation",
      description: "We coordinate sample production, review samples against your specifications, and provide detailed feedback.",
      items: ["Sample quality assessment", "Specification compliance check", "Cost and lead time confirmation"]
    },
    {
      number: "05",
      title: "Order Management",
      description: "We support contract negotiation, production monitoring, quality inspections, and shipping coordination.",
      items: ["Purchase order review", "Production milestone tracking", "Pre-shipment inspection"]
    },
    {
      number: "06",
      title: "Delivery & Follow-up",
      description: "We ensure documentation is complete, track shipment, and address any post-delivery matters.",
      items: ["Shipping documentation", "Customs and compliance support", "After-sales coordination"]
    },
  ]

  const productCategories = [
    {
      title: "Electronics & Components",
      description: "Consumer electronics, industrial components, and accessories.",
      items: ["Consumer electronics", "Power supplies & batteries", "Cables & connectors", "PCB & electronic modules", "Smart home devices"]
    },
    {
      title: "Home & Garden",
      description: "Furniture, decor, kitchenware, and outdoor products.",
      items: ["Furniture & furnishings", "Kitchen & dining", "Home textiles", "Garden tools & decor", "Storage solutions"]
    },
    {
      title: "Apparel & Textiles",
      description: "Clothing, fabrics, and textile products for various markets.",
      items: ["Apparel & fashion", "Workwear & uniforms", "Home textiles", "Technical fabrics", "Accessories"]
    },
    {
      title: "Industrial & Machinery",
      description: "Equipment, tools, and components for industrial applications.",
      items: ["Machinery & equipment", "Hand & power tools", "Safety equipment", "Fasteners & hardware", "Packaging machinery"]
    },
    {
      title: "Consumer Goods",
      description: "Everyday products for retail and wholesale distribution.",
      items: ["Personal care products", "Toys & games", "Sports & fitness", "Pet products", "Stationery & office"]
    },
    {
      title: "Automotive & Transportation",
      description: "Parts, accessories, and components for vehicles.",
      items: ["Auto parts & accessories", "Electric vehicle components", "Bicycle & e-bike parts", "Marine equipment", "Logistics equipment"]
    },
  ]

  const problems = [
    {
      problem: "Difficulty finding reliable manufacturers who can meet quality and volume requirements.",
      solution: "We maintain relationships with verified factories and conduct structured qualification before introducing suppliers."
    },
    {
      problem: "Uncertainty about factory legitimacy, capacity, or compliance with international standards.",
      solution: "We perform on-site audits covering legal status, production capability, quality systems, and social compliance."
    },
    {
      problem: "Receiving products that do not match approved samples or specifications.",
      solution: "We conduct pre-shipment inspections using documented criteria and provide photographic evidence and reports."
    },
    {
      problem: "Production delays and lack of visibility into manufacturing progress.",
      solution: "We monitor production milestones and provide regular status updates with photos and documentation."
    },
    {
      problem: "Complex logistics, documentation errors, and unexpected shipping costs.",
      solution: "We coordinate with established forwarders and review documentation to reduce errors and delays."
    },
  ]

  const caseStudies = [
    {
      client: "European Home Goods Retailer",
      industry: "Home & Garden",
      location: "Germany",
      challenge: "Needed to source 12 SKUs of ceramic tableware with consistent quality across multiple factories while meeting EU safety standards.",
      solution: "Conducted factory audits at 6 shortlisted manufacturers, coordinated sample evaluation, and implemented a two-stage inspection protocol.",
      results: "Selected 2 qualified suppliers. Achieved 99.2% first-pass inspection rate across 8 container loads. Reduced lead time by 18% compared to previous sourcing."
    },
    {
      client: "North American Industrial Distributor",
      industry: "Industrial",
      location: "United States",
      challenge: "Required a new supplier for custom-engineered fasteners with tight tolerances and consistent delivery for ongoing OEM contracts.",
      solution: "Performed capability assessments, verified quality management systems, and established production monitoring checkpoints.",
      results: "Qualified supplier passed all dimensional and material tests. Zero quality claims over 14 months. On-time delivery rate of 97%."
    },
    {
      client: "Australian Outdoor Equipment Brand",
      industry: "Consumer Goods",
      location: "Australia",
      challenge: "Expanding product line with new camping equipment range. Needed reliable production partner with experience in technical textiles and hardware assembly.",
      solution: "Sourced and verified 4 factories, managed sample iterations, and coordinated pre-shipment inspections with third-party lab testing.",
      results: "Launched 9 new SKUs on schedule. Achieved target landed cost within 4% of initial projection. Repeat orders placed within 6 months."
    },
  ]

  const faqs = [
    {
      question: "How do you find suppliers for specialized or niche products?",
      answer: "We use a combination of our existing factory network, industry databases, trade shows, and targeted outreach. For specialized products, we conduct additional technical screening to confirm capability before presenting options."
    },
    {
      question: "What does a typical factory audit include?",
      answer: "Our audits cover business registration and legal status, production capacity and equipment, quality control processes, incoming material inspection, finished goods inspection, working conditions, and reference checks with existing clients."
    },
    {
      question: "Do you charge a commission on orders?",
      answer: "Our fees are project-based or service-based rather than order commissions. We provide transparent quotations for sourcing projects, audits, inspections, and ongoing monitoring. Contact us for a detailed proposal."
    },
    {
      question: "Can you work with suppliers I have already identified?",
      answer: "Yes. We can perform verification audits, sample evaluation, production monitoring, and inspection services for suppliers you have sourced independently."
    },
    {
      question: "What inspection standards do you use?",
      answer: "We follow ANSI/ASQ Z1.4 (AQL) sampling standards by default and can adapt to your specific acceptance criteria. All inspections include detailed reports with photographs and measurements."
    },
    {
      question: "How quickly can you respond to a new inquiry?",
      answer: "We typically respond to inquiries within one business day. For urgent requests, we can often begin supplier searches within 48 hours of receiving complete specifications."
    },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-sm mb-6">
            <Globe className="w-4 h-4" /> Shanghai, China
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-none mb-6">
            China Sourcing Agent<br />for Global Buyers
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10">
            We help overseas companies find reliable Chinese suppliers, verify factories, 
            inspect quality, monitor production, and coordinate shipping — with clear communication and documented processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
          <p className="mt-6 text-xs text-slate-400">No obligation. Typical response within 24 hours.</p>
        </div>
      </section>

      <TrustBar />

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="uppercase tracking-[2px] text-xs text-slate-500 mb-2">WHAT WE DO</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Services</h2>
          </div>
          <Link to="/services" className="text-sm font-medium text-slate-900 hover:underline">View all services →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="mb-10">
            <div className="uppercase tracking-[2px] text-xs text-slate-500 mb-2">OUR APPROACH</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">Sourcing Process</h2>
            <p className="text-slate-600 max-w-2xl">A structured, transparent process designed to reduce risk and improve outcomes for buyers sourcing from China.</p>
          </div>
          <div className="space-y-1">
            {processSteps.map((step, idx) => (
              <ProcessStep key={idx} {...step} />
            ))}
          </div>
          <div className="mt-8">
            <Link to="/how-it-works" className="text-sm font-medium text-slate-900 hover:underline">Read detailed process explanation →</Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="uppercase tracking-[2px] text-xs text-slate-500 mb-2">INDUSTRIES & CATEGORIES</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Products We Source</h2>
          </div>
          <Link to="/products" className="text-sm font-medium text-slate-900 hover:underline">Browse all categories →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((cat, idx) => (
            <ProductCategory key={idx} {...cat} />
          ))}
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-10">
            <div className="uppercase tracking-[2px] text-xs text-slate-400 mb-2">COMMON CHALLENGES</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Problems We Solve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p, idx) => (
              <ProblemCard key={idx} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-slate-700" />
            </div>
            <div className="font-semibold text-xl mb-2">Direct Factory Access</div>
            <p className="text-sm text-slate-600 leading-relaxed">We work directly with manufacturers. No trading company markups or hidden intermediaries in our recommended supply chain.</p>
          </div>
          <div>
            <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-slate-700" />
            </div>
            <div className="font-semibold text-xl mb-2">Documented Quality</div>
            <p className="text-sm text-slate-600 leading-relaxed">Every inspection and audit produces a written report with photos and measurements. You receive the same documentation we use internally.</p>
          </div>
          <div>
            <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-slate-700" />
            </div>
            <div className="font-semibold text-xl mb-2">Responsive Communication</div>
            <p className="text-sm text-slate-600 leading-relaxed">We provide regular updates in English during business hours in your time zone. No language barriers or delayed responses.</p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="uppercase tracking-[2px] text-xs text-slate-500 mb-2">RESULTS FOR CLIENTS</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Case Studies</h2>
            </div>
            <Link to="/case-studies" className="text-sm font-medium text-slate-900 hover:underline">View all case studies →</Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <CaseStudyCard key={idx} {...cs} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-8">
          <div className="uppercase tracking-[2px] text-xs text-slate-500 mb-2">QUESTIONS</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        </div>
        <div>
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} {...faq} />
          ))}
        </div>
        <div className="mt-8 text-sm">
          <Link to="/contact" className="font-medium text-slate-900 hover:underline">Still have questions? Contact us →</Link>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="text-center mb-8">
            <div className="uppercase tracking-[2px] text-xs text-slate-500 mb-2">NEXT STEP</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">Get a Free Sourcing Quote</h2>
            <p className="text-slate-600">Tell us about your requirements. We will respond with a preliminary assessment and next steps within one business day.</p>
          </div>
          <InquiryForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home