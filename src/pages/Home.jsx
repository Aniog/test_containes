import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, Shield, Ship, ChevronRight, Star, CheckCircle, Users, Package, TrendingUp, HeadphonesIcon, FileText, Clock, Award, Building2, Truck, BarChart3, Phone, Mail, MapPin, MessageSquare, ArrowRight, X } from 'lucide-react';
import Button from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and vet reliable suppliers that match your product requirements, quality standards, and budget.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits verify manufacturing capabilities, certifications, working conditions, and production capacity.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and random inspections ensure products meet your specifications.',
  },
  {
    icon: Shield,
    title: 'Production Monitoring',
    desc: 'We track production timelines, raw material quality, and assembly processes to prevent delays and defects.',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight coordination including documentation, customs clearance, and door-to-door delivery.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Support',
    desc: 'Dedicated account management with regular updates, issue resolution, and post-delivery support.',
  },
];

const processSteps = [
  { number: '01', title: 'Share Your Requirements', desc: 'Tell us about your product, target price, quantity, and quality standards.' },
  { number: '02', title: 'Supplier Shortlisting', desc: 'We research and screen suppliers from our verified database and market network.' },
  { number: '03', title: 'Factory Audit', desc: 'Our team visits shortlisted factories to verify capabilities and compliance.' },
  { number: '04', title: 'Sample & Negotiation', desc: 'We coordinate samples, negotiate pricing, and finalize terms on your behalf.' },
  { number: '05', title: 'Production & QC', desc: 'We monitor production and conduct quality inspections throughout the process.' },
  { number: '06', title: 'Shipping & Delivery', desc: 'We handle logistics, documentation, and ensure safe delivery to your destination.' },
];

const productCategories = [
  { icon: Package, title: 'Electronics & Components', desc: 'Consumer electronics, PCBs, sensors, wiring harnesses, and industrial components.' },
  { icon: Building2, title: 'Industrial Equipment', desc: 'Machinery parts, tools, manufacturing equipment, and automation systems.' },
  { icon: Truck, title: 'Auto Parts & Accessories', desc: 'Vehicle components, aftermarket parts, tires, and automotive accessories.' },
  { icon: BarChart3, title: 'Textiles & Apparel', desc: 'Garments, fabrics, technical textiles, and fashion accessories.' },
  { icon: Package, title: 'Packaging & Labels', desc: 'Custom packaging, boxes, labels, stickers, and branding materials.' },
  { icon: Building2, title: 'Building Materials', desc: 'Hardware, fixtures, fittings, piping, and construction supplies.' },
  { icon: Package, title: 'Home & Lifestyle', desc: 'Furniture, kitchenware, home decor, and lifestyle products.' },
  { icon: Package, title: 'Medical & Safety', desc: 'PPE, medical devices, lab equipment, and safety gear.' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'Too many buyers get burned by suppliers who disappear after payment or deliver substandard goods.' },
  { title: 'Language & Cultural Barriers', desc: 'Miscommunication leads to costly mistakes in specifications, timelines, and expectations.' },
  { title: 'Quality Control Gaps', desc: 'Without local oversight, defects go unnoticed until containers arrive at your warehouse.' },
  { title: 'Shipping Complexities', desc: 'International freight, customs clearance, and documentation requirements can be overwhelming.' },
  { title: 'Hidden Costs', desc: 'Unexpected fees for inspections, certifications, warehousing, and logistics eat into your margins.' },
  { title: 'Time Zone Differences', desc: 'Coordinating with Chinese suppliers across time zones makes real-time problem solving difficult.' },
];

const trustPoints = [
  { icon: Users, stat: '500+', label: 'Buyers Served' },
  { icon: Factory, stat: '2,000+', label: 'Factories Verified' },
  { icon: Ship, stat: '3,500+', label: 'Shipments Managed' },
  { icon: Star, stat: '98%', label: 'Client Satisfaction' },
];

const caseStudies = [
  {
    company: 'EuroTech GmbH',
    industry: 'Industrial Sensors',
    result: '40% cost reduction',
    desc: 'Replaced 3 unreliable suppliers with 2 audited factories, reducing defect rate from 12% to 1.5%.',
    imgId: 'casestudy-eurotech-8a3f2b',
  },
  {
    company: 'Pacific Retail Group',
    industry: 'Home & Kitchen Products',
    result: '15 SKUs sourced',
    desc: 'Sourced 15 product lines across 8 factories with unified quality standards and consolidated shipping.',
    imgId: 'casestudy-pacific-7c4d1e',
  },
  {
    company: 'MedEquip USA',
    industry: 'Medical Supplies',
    result: 'ISO certified suppliers',
    desc: 'Identified and verified 5 ISO 13485 certified factories for medical device components.',
    imgId: 'casestudy-medequip-9f5e2a',
  },
];

const faqs = [
  { q: 'What types of products do you source?', a: 'We source across a wide range of categories including electronics, industrial equipment, auto parts, textiles, packaging, building materials, home goods, and medical supplies. If you have a specific product in mind, contact us to discuss feasibility.' },
  { q: 'How do you verify suppliers?', a: 'Our team conducts on-site factory audits to assess production capacity, quality management systems, certifications, working conditions, and financial stability. We also check business licenses, export records, and client references.' },
  { q: 'What are your fees?', a: 'We offer transparent, competitive pricing based on project scope. Contact us for a free, no-obligation quote tailored to your sourcing needs.' },
  { q: 'How long does the sourcing process take?', a: 'Typical timelines range from 4-12 weeks depending on product complexity, supplier discovery, sample iterations, and production lead times. We provide detailed timelines during the quoting phase.' },
  { q: 'Do you handle shipping and customs?', a: 'Yes. We coordinate all aspects of international shipping including freight booking, export documentation, customs clearance, and door-to-door delivery to your destination.' },
  { q: 'What quality control measures do you provide?', a: 'We offer multiple QC touchpoints: raw material inspection, during-production inspection, pre-shipment inspection, and container loading supervision. Reports include photos and detailed findings.' },
  { q: 'Can you help with product customization?', a: 'Absolutely. We work with manufacturers to customize products according to your specifications, including packaging, labeling, materials, and design modifications.' },
  { q: 'Is there a minimum order quantity?', a: 'MOQs vary by product and supplier. We help negotiate favorable terms and can sometimes consolidate orders to meet minimum requirements.' },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            data-strk-bg-id="hero-bg-7d2f4c"
            data-strk-bg="[hero-title] [hero-subtitle]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="w-full h-full bg-cover bg-center"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-1 rounded-full mb-6">
              China-Based Sourcing Agent
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, 
              follow production, and coordinate shipping. One partner, end-to-end.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Link to="/how-it-works">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  How It Works
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 mt-10 text-gray-400 text-sm">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-accent" />
                No minimum order
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-accent" />
                Free consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-accent" />
                Pay on results
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="text-center">
                <point.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-primary">{point.stat}</div>
                <div className="text-sm text-gray-500 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <span className="section-badge">Our Services</span>
            <h2 className="section-title">End-to-End Sourcing Solutions</h2>
            <p className="section-subtitle">
              From supplier discovery to final delivery, we manage every step of your China sourcing journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md transition-shadow">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <span className="section-badge">Common Challenges</span>
            <h2 className="section-title">Problems We Solve for You</h2>
            <p className="section-subtitle">
              Sourcing from China comes with real risks. Here is how we help you avoid them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-lg border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all">
                <div className="shrink-0">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">{problem.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <span className="section-badge">How It Works</span>
            <h2 className="section-title">Our Sourcing Process</h2>
            <p className="section-subtitle">
              A structured, transparent process designed to minimize risk and maximize results.
            </p>
          </div>
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/10 -translate-x-1/2" />
            <div className="space-y-12 lg:space-y-0">
              {processSteps.map((step, idx) => (
                <div key={idx} className={`lg:flex items-center gap-8 lg:gap-16 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} mb-4 lg:mb-0`}>
                    <span className="text-accent font-bold text-sm tracking-wider">{step.number}</span>
                    <h3 className="text-xl font-semibold text-primary mt-1 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="hidden lg:flex shrink-0 w-8 h-8 rounded-full bg-primary text-white items-center justify-center text-sm font-bold relative z-10">
                    {idx + 1}
                  </div>
                  <div className="flex-1 lg:block hidden" />
                  {/* Mobile layout */}
                  <div className="lg:hidden flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <span className="text-accent font-bold text-sm tracking-wider">{step.number}</span>
                      <h3 className="text-lg font-semibold text-primary mt-1 mb-1">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button variant="outline">
                View Detailed Process
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <span className="section-badge">Categories</span>
            <h2 className="section-title">Products We Source</h2>
            <p className="section-subtitle">
              We source across a broad range of industries. If you can specify it, we can find it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((cat, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 hover:bg-primary/5 transition-colors border border-gray-100">
                <cat.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-semibold text-primary mb-2">{cat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products">
              <Button variant="outline">
                View All Categories
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <span className="section-badge">Success Stories</span>
            <h2 className="section-title">Case Studies</h2>
            <p className="section-subtitle">
              Real results from real partnerships. See how we have helped buyers like you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[cs-company-${idx}] [cs-industry-${idx}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{cs.industry}</span>
                  <h3 id={`cs-company-${idx}`} className="text-lg font-semibold text-primary mt-1 mb-2">{cs.company}</h3>
                  <p id={`cs-industry-${idx}`} className="text-gray-600 text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies">
              <Button variant="outline">
                View All Case Studies
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust / CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Source from China with Confidence?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Get a free, no-obligation sourcing consultation. Tell us about your product needs, 
              and we will outline a plan with timelines and pricing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="accent" size="lg">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Free consultation
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                No commitment required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Response within 24 hours
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <span className="section-badge">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Answers to common questions about working with a China sourcing agent.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border border-gray-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-gray-50 transition-colors list-none">
                  <span className="font-medium text-primary pr-4">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <span className="section-badge">Get Started</span>
            <h2 className="section-title">Request a Free Sourcing Quote</h2>
            <p className="section-subtitle">
              Tell us about your project and we will get back to you within 24 hours with a detailed plan.
            </p>
          </div>
          <form className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input type="text" required className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="John Smith" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                <input type="text" required className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="Your Company Ltd" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" required className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="+1 234 567 8900" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Product / Industry *</label>
                <input type="text" required className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="Describe the product you want to source" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Quantity</label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-white">
                  <option value="">Select approximate quantity</option>
                  <option value="100-500">100 - 500 units</option>
                  <option value="500-1000">500 - 1,000 units</option>
                  <option value="1000-5000">1,000 - 5,000 units</option>
                  <option value="5000-10000">5,000 - 10,000 units</option>
                  <option value="10000+">10,000+ units</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                <textarea rows={4} required className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none" placeholder="Describe your requirements, quality standards, target budget, and any other relevant details..." />
              </div>
            </div>
            <div className="mt-8">
              <Button variant="accent" size="lg" className="w-full md:w-auto">
                Submit Inquiry
                <ArrowRight className="w-5 h-5" />
              </Button>
              <p className="text-gray-400 text-sm mt-3">We respect your privacy. Your information will never be shared.</p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}