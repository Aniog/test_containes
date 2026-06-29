import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  Search,
  Shield,
  ClipboardCheck,
  Truck,
  Factory,
  Package,
  BarChart3,
  Star,
  CheckCircle,
  ChevronRight,
  Phone,
  Mail,
  ArrowRight,
  Users,
  Globe,
  Clock,
  HeadphonesIcon,
  MapPin,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "Find reliable Chinese suppliers matching your product requirements, quality standards, and budget.",
  },
  {
    icon: Shield,
    title: "Supplier Verification",
    desc: "Verify business licenses, certifications, and factory credentials to eliminate scam risks.",
  },
  {
    icon: Factory,
    title: "Factory Audit",
    desc: "On-site factory assessments covering production capacity, quality systems, and working conditions.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-shipment inspection, during-production checks, and detailed QC reporting.",
  },
  {
    icon: BarChart3,
    title: "Production Monitoring",
    desc: "Real-time production tracking and regular progress reports to keep your orders on schedule.",
  },
  {
    icon: Truck,
    title: "Shipping Coordination",
    desc: "End-to-end logistics management including freight forwarding, customs clearance, and door-to-door delivery.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Submit Your Requirements",
    desc: "Tell us about your product, target price, quantity, and quality standards. We'll analyze your needs.",
  },
  {
    number: "02",
    title: "Supplier Matching",
    desc: "We identify and vet suitable suppliers from our network of verified Chinese manufacturers.",
  },
  {
    number: "03",
    title: "Factory Verification",
    desc: "We audit shortlisted factories, verify credentials, and assess production capabilities.",
  },
  {
    number: "04",
    title: "Sample & Negotiation",
    desc: "We facilitate sample ordering, price negotiation, and contract terms on your behalf.",
  },
  {
    number: "05",
    title: "Production & QC",
    desc: "We monitor production, conduct quality inspections, and ensure adherence to specifications.",
  },
  {
    number: "06",
    title: "Shipping & Delivery",
    desc: "We coordinate freight, handle documentation, and track shipments until they reach your door.",
  },
];

const productCategories = [
  { name: "Electronics & Components", icon: Package },
  { name: "Home & Kitchen Products", icon: Package },
  { name: "Fashion & Accessories", icon: Package },
  { name: "Industrial Equipment", icon: Package },
  { name: "Furniture & Home Decor", icon: Package },
  { name: "Health & Beauty", icon: Package },
  { name: "Auto Parts & Accessories", icon: Package },
  { name: "Packaging & Materials", icon: Package },
];

const problems = [
  "Worried about supplier reliability and scams?",
  "Unable to visit factories in person?",
  "Struggling with language and cultural barriers?",
  "Uncertain about product quality before shipping?",
  "Facing production delays and missed deadlines?",
  "Complicated logistics and customs procedures?",
  "No local presence to resolve issues on-site?",
  "Limited negotiating power with suppliers?",
];

const trustPoints = [
  {
    icon: MapPin,
    title: "Based in Guangzhou, China",
    desc: "On the ground in the heart of China's manufacturing hub with direct access to thousands of factories.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    desc: "10+ years of combined experience in sourcing, quality control, and international trade.",
  },
  {
    icon: Globe,
    title: "Global Client Base",
    desc: "Serving buyers from North America, Europe, Australia, and Southeast Asia.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "95% on-time delivery rate with proactive production tracking and early warning system.",
  },
  {
    icon: Star,
    title: "Rigorous Quality Control",
    desc: "Multi-stage inspection protocols with detailed photo and video reporting.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    desc: "Personal account manager assigned to every client for consistent communication.",
  },
];

const caseStudies = [
  {
    title: "Electronics Component Sourcing",
    client: "UK-based IoT hardware startup",
    result: "40% cost reduction, 100% defect-free first shipment",
    tags: ["Supplier Verification", "QC Inspection"],
  },
  {
    title: "Furniture Line for US Retailer",
    client: "Mid-size US furniture retailer",
    result: "3 factories audited, 1 selected, 15% margin improvement",
    tags: ["Factory Audit", "Production Monitoring"],
  },
  {
    title: "Packaging Materials for EU Brand",
    client: "European sustainable goods brand",
    result: "Found compliant supplier, passed all EU regulations",
    tags: ["Supplier Sourcing", "Compliance Check"],
  },
];

const faqs = [
  {
    q: "What industries do you cover?",
    a: "We source across a wide range of industries including electronics, home goods, fashion, industrial equipment, furniture, health & beauty, auto parts, and packaging materials. Contact us with your specific product requirements.",
  },
  {
    q: "How do you verify suppliers?",
    a: "We conduct comprehensive verification including business license validation, factory site visits, production capability assessment, quality system review, and client reference checks where applicable.",
  },
  {
    q: "What are your service fees?",
    a: "Our fee structure depends on the scope of services required. We offer competitive rates and typically charge a percentage of order value or a flat project fee. Contact us for a customized quote.",
  },
  {
    q: "How long does the sourcing process take?",
    a: "Typical timelines range from 2-6 weeks depending on product complexity, supplier availability, and whether samples are needed. We'll provide a timeline estimate during our initial consultation.",
  },
  {
    q: "Do you handle shipping and logistics?",
    a: "Yes, we coordinate all aspects of shipping including freight forwarding, customs documentation, and door-to-door delivery. We work with major carriers to ensure competitive rates.",
  },
  {
    q: "What minimum order quantities do you require?",
    a: "We work with both small and large quantities. MOQs vary by product category and supplier. We'll help you find suppliers that match your volume requirements.",
  },
];

export default function HomePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-sourcing"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed"
            >
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, and manage production — so you can source with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg px-8 py-3.5 text-center text-base transition-colors shadow-lg inline-flex items-center justify-center gap-2"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-lg px-8 py-3.5 text-center text-base transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              10+ Years Experience
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              500+ Factories Vetted
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              200+ Clients Served
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              95% On-Time Delivery
            </span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              End-to-End Sourcing Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive sourcing support from supplier discovery to final delivery, tailored to your specific requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Our Sourcing Process
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A structured, transparent 6-step process designed to minimize risk and maximize results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-primary/20 shrink-0 leading-none">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg px-6 py-3 transition-colors"
            >
              Learn More About Our Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Products We Source
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We source across diverse categories from China's top manufacturing regions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productCategories.map((cat, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center hover:border-primary/30 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="w-10 h-10 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-gray-900">{cat.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              View Full Product Categories <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="rounded-xl overflow-hidden"
                data-strk-img-id="problems-section-img"
                data-strk-img="[problems-title] [problems-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
              >
                <img
                  alt="Sourcing challenges"
                  className="w-full h-auto rounded-xl"
                  data-strk-img-id="problems-visual"
                  data-strk-img="[problems-title] [problems-subtitle]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
            <div>
              <h2 id="problems-title" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Common Sourcing Problems We Solve
              </h2>
              <p id="problems-subtitle" className="mt-4 text-lg text-gray-600">
                Sourcing from China comes with challenges. Here's how we help you overcome them.
              </p>
              <ul className="mt-8 space-y-3">
                {problems.map((problem, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Why Work With SSourcing China?
            </h2>
            <p className="mt-4 text-lg text-blue-200">
              We bring local expertise, global standards, and a commitment to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {trustPoints.map((point, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors"
              >
                <point.icon className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                <p className="text-sm text-blue-200 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Recent Case Studies
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Real results from real clients. See how we've helped businesses source successfully.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((cs, i) => (
              <div
                key={i}
                className="bg-surface rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {cs.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{cs.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{cs.client}</p>
                  <p className="text-sm text-gray-700 font-medium flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-amber-500" />
                    {cs.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              View All Case Studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-gray-100 shadow-sm group"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Form Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Start Your Sourcing Project
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Tell us about your requirements and we'll get back to you within 24 hours with a customized sourcing plan.
              </p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  placeholder="+1 234 567 890"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Product Description *</label>
                <textarea
                  id="product"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
                  placeholder="Describe the product you want to source, including quantity, quality requirements, target price, and any other relevant details."
                />
              </div>
              <div className="md:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg px-6 py-3 text-base transition-colors inline-flex items-center justify-center gap-2"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-400 text-center mt-4">
              We respect your privacy. Your information will never be shared with third parties.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}