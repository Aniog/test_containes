import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Search, ClipboardCheck, Ship, Package, ArrowRight, Star, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable suppliers that match your product specifications, quality standards, and budget requirements.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-the-ground audits to verify factory credentials, production capacity, certifications, and compliance with international standards.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    description: 'Pre-shipment inspections, in-process quality checks, and product testing to ensure your goods meet specifications.',
  },
  {
    icon: Ship,
    title: 'Production Monitoring',
    description: 'Regular updates on production progress, raw material verification, and timeline management throughout the manufacturing process.',
  },
  {
    icon: Package,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics coordination including freight booking, documentation, customs clearance, and door-to-door delivery.',
  },
  {
    icon: Star,
    title: 'Product Development',
    description: 'Assistance with product customization, samples coordination, packaging design, and supplier negotiation support.',
  },
];

const processSteps = [
  { step: '01', title: 'Submit Your Requirements', description: 'Tell us about the products you need, target price, quantity, and quality standards.' },
  { step: '02', title: 'Supplier Matching', description: 'We research and shortlist 3-5 qualified suppliers that match your specific criteria.' },
  { step: '03', title: 'Factory Audit & Verification', description: 'Our team visits shortlisted factories to verify credentials, capabilities, and compliance.' },
  { step: '04', title: 'Sample Coordination', description: 'We manage sample requests, review samples for quality, and facilitate approvals.' },
  { step: '05', title: 'Production Oversight', description: 'We monitor production, conduct quality inspections, and keep you updated on progress.' },
  { step: '06', title: 'Shipping & Delivery', description: 'We handle logistics, documentation, and shipping to deliver your products on time.' },
];

const products = [
  { name: 'Consumer Electronics', items: 'Smartphones, accessories, audio devices, wearables' },
  { name: 'Home & Kitchen', items: 'Small appliances, cookware, home decor, storage solutions' },
  { name: 'Apparel & Textiles', items: 'Garments, fabrics, accessories, sportswear' },
  { name: 'Industrial Equipment', items: 'Machinery parts, tools, manufacturing equipment' },
  { name: 'Packaging Materials', items: 'Custom boxes, labels, bags, sustainable packaging' },
  { name: 'Auto Parts', items: 'Vehicle components, accessories, aftermarket parts' },
  { name: 'Furniture', items: 'Indoor & outdoor furniture, office furniture' },
  { name: 'Health & Beauty', items: 'Cosmetics, personal care, supplements' },
];

const problems = [
  { title: 'Worried about supplier reliability?', desc: 'We verify every factory in person before any order is placed. No shortcuts, no assumptions.' },
  { title: 'Quality issues from overseas suppliers?', desc: 'Our on-site QC team conducts inspections throughout production, not just at the end.' },
  { title: 'Communication barriers slowing you down?', desc: 'Our bilingual team manages all communications so nothing gets lost in translation.' },
  { title: 'Hidden costs or unexpected delays?', desc: 'We provide transparent pricing and proactive timeline management with regular updates.' },
  { title: 'Minimum order quantities too high?', desc: 'We negotiate favorable terms and can help consolidate smaller orders for better pricing.' },
];

const trustPoints = [
  { stat: '500+', label: 'Factories Verified' },
  { stat: '98%', label: 'On-Time Delivery Rate' },
  { stat: '150+', label: 'Global Clients Served' },
  { stat: '12+', label: 'Years in Operation' },
];

const caseStudies = [
  {
    title: 'European Retail Chain Sources Houseware Line',
    result: 'Reduced supplier costs by 22% with verified quality',
    tags: ['Home & Kitchen', 'Quality Control'],
  },
  {
    title: 'US Startup Launches Electronics Product Line',
    result: 'From concept to first shipment in just 14 weeks',
    tags: ['Electronics', 'Product Development'],
  },
  {
    title: 'Australian Distributor Optimizes Supply Chain',
    result: 'Consolidated 8 suppliers to 3, saving 35% on logistics',
    tags: ['Logistics', 'Supplier Optimization'],
  },
];

const faqs = [
  { q: 'How do you find reliable suppliers?', a: 'We maintain a database of pre-vetted suppliers and continuously add new ones through referrals and systematic research. Each potential supplier undergoes our verification process before being recommended to clients.' },
  { q: 'What does factory verification involve?', a: 'Our team visits the factory in person to check business licenses, production capacity, quality management systems, working conditions, and export experience. We also verify certifications and conduct capability assessments.' },
  { q: 'How do you handle quality control?', a: 'We offer multiple QC stages: during production (DUPRO), pre-shipment inspection (PSI), and container loading supervision. Inspections follow AQL standards and your specific requirements.' },
  { q: 'What are your service fees?', a: 'Our fee structure is transparent and project-based. We typically charge a percentage of the order value or a flat project fee, depending on the scope. Contact us for a free quote tailored to your needs.' },
  { q: 'Can you source any type of product?', a: 'We specialize in consumer goods, industrial products, and custom-manufactured items. If you have a specific requirement, reach out and we will assess feasibility.' },
  { q: 'How long does the sourcing process take?', a: 'Typical timelines range from 4-12 weeks depending on product complexity, supplier selection, sample iterations, and order quantity. We provide a realistic timeline during the initial consultation.' },
  { q: 'Do you handle shipping and customs?', a: 'Yes, we coordinate international shipping, handle export documentation, and can assist with customs clearance at origin. We work with trusted freight forwarders for sea, air, and rail freight.' },
  { q: 'What if there is a problem with my order?', a: 'We stand behind our service. If an issue arises that is within our control, we work to resolve it promptly. Our supplier agreements include quality clauses to protect your interests.' },
];

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden" ref={heroRef}>
        <div
          className="absolute inset-0 opacity-10"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative container-custom py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories,
              control quality, and manage shipping. End-to-end sourcing support with
              on-the-ground presence in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-accent text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-accent/90 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-surface border-b border-border">
        <div className="container-custom py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{point.stat}</div>
                <div className="text-sm text-secondary mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Problems We Solve</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto mt-4">
              Sourcing from China comes with challenges. Here is how we address them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-white rounded-xl border border-border p-6 shadow-sm">
                <h3 className="font-semibold text-primary mb-2">{problem.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto mt-4">
              Comprehensive sourcing support from supplier identification to final delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="text-accent font-medium hover:text-accent/80 transition-colors inline-flex items-center gap-1">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Products We Source</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto mt-4">
              We source across a wide range of categories. If it is made in China, we can help you find it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.name} className="bg-white rounded-xl border border-border p-6 shadow-sm">
                <h3 className="font-semibold text-primary mb-2 text-sm">{product.name}</h3>
                <p className="text-secondary text-xs">{product.items}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="text-accent font-medium hover:text-accent/80 transition-colors inline-flex items-center gap-1">
              See Full Category List <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">How Sourcing Works</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto mt-4">
              A proven 6-step process designed to minimize risk and maximize results.
            </p>
          </div>
          <div className="space-y-8 max-w-3xl mx-auto">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-lg">{step.title}</h3>
                  <p className="text-secondary text-sm mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="text-accent font-medium hover:text-accent/80 transition-colors inline-flex items-center gap-1">
              Learn More About the Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Case Studies</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto mt-4">
              Real results from real partnerships.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="bg-white rounded-xl border border-border p-6 shadow-sm">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full font-medium">{tag}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-primary mb-3">{cs.title}</h3>
                <p className="text-secondary text-sm">{cs.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="text-accent font-medium hover:text-accent/80 transition-colors inline-flex items-center gap-1">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl border border-border shadow-sm group">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-medium text-primary pr-4">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-muted flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-secondary text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Tell us about your product needs and we will get back to you within 24 hours
            with a free sourcing assessment and quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-accent/90 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}