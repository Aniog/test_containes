import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Search, CheckCircle, Ship, BarChart3, Award, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Supplier Sourcing',
    desc: 'We find and vet reliable suppliers across China for any product category, from electronics to textiles.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Factory Verification',
    desc: 'On-site audits to verify credentials, production capacity, quality control systems, and compliance.',
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Quality Inspection',
    desc: 'Pre-shipment inspections, during-production checks, and custom QC protocols tailored to your standards.',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Production Monitoring',
    desc: 'Real-time tracking of production milestones, raw material sourcing, and timeline management.',
  },
  {
    icon: <Ship className="w-8 h-8" />,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight forwarding, customs clearance, and door-to-door delivery worldwide.',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Product Customization',
    desc: 'Work with factories to develop custom products with your specifications, packaging, and branding.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Submit Your Requirements',
    desc: 'Tell us about the products you need, quantities, quality standards, target pricing, and timeline.',
  },
  {
    step: '02',
    title: 'Supplier Matching',
    desc: 'We identify and vet suppliers from our network, providing you with shortlisted options within 48 hours.',
  },
  {
    step: '03',
    title: 'Factory Audit & Sampling',
    desc: 'We visit shortlisted factories, verify their credentials, and coordinate sample production for your approval.',
  },
  {
    step: '04',
    title: 'Order & Production',
    desc: 'Once approved, we negotiate terms, manage contracts, and monitor production at every stage.',
  },
  {
    step: '05',
    title: 'Quality Control',
    desc: 'Our QC inspectors conduct rigorous checks during and after production to ensure product quality.',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'We handle all logistics, customs documentation, and shipping so your products arrive on time and intact.',
  },
];

const products = [
  { name: 'Electronics & Components', desc: 'Consumer electronics, PCBs, sensors, IoT devices, batteries' },
  { name: 'Industrial Machinery', desc: 'CNC equipment, packaging machinery, automation systems, tools' },
  { name: 'Textiles & Garments', desc: 'Apparel, fabrics, technical textiles, uniforms, accessories' },
  { name: 'Home & Lifestyle', desc: 'Furniture, kitchenware, home decor, lighting, storage solutions' },
  { name: 'Automotive Parts', desc: 'Vehicle components, aftermarket parts, EV components, accessories' },
  { name: 'Packaging & Labels', desc: 'Custom packaging, labels, boxes, eco-friendly materials' },
];

const problems = [
  {
    title: 'Can\'t find reliable suppliers',
    desc: 'We have a verified network of reputable manufacturers across China, saving you weeks of searching.',
  },
  {
    title: 'Worried about quality',
    desc: 'Our on-site QC inspectors check every batch so you get consistent quality, not surprises.',
  },
  {
    title: 'Communication difficulties',
    desc: 'Our bilingual team bridges the gap, handling all negotiations and technical discussions in Chinese and English.',
  },
  {
    title: 'Shipping complexities',
    desc: 'We manage freight, customs, and documentation for hassle-free international shipping.',
  },
];

const trustPoints = [
  { number: '500+', label: 'Verified Factories' },
  { number: '50+', label: 'Countries Served' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '8+', label: 'Years Experience' },
];

const testimonials = [
  {
    quote: 'SSourcing China helped us find a high-quality manufacturer for our electronics line. Their factory audit saved us from a bad deal. Highly recommended.',
    name: 'Marcus Weber',
    role: 'CEO, TechImport GmbH, Germany',
  },
  {
    quote: 'We\'ve been working with SSourcing for 3 years. Their QC inspections have cut our defect rate from 12% to under 1%. Absolutely professional.',
    name: 'Sarah Chen',
    role: 'Operations Director, Nova Retail, UK',
  },
  {
    quote: 'Finding reliable packaging suppliers was a nightmare until we found SSourcing. They managed everything from samples to bulk delivery.',
    name: 'Jean-Pierre Dubois',
    role: 'Founder, ÉcoPack, France',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg lg:text-xl text-primary-100 leading-relaxed mb-8">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality,
              manage production, and coordinate shipping — so you can source from China with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-colors text-base"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map((point) => (
              <div key={point.label}>
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-1">{point.number}</div>
                <div className="text-sm text-neutral-500 font-medium">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Our Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              End-to-end sourcing support from supplier discovery to final delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 lg:p-8 rounded-xl border border-neutral-200 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View All Services <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Problems We Solve</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Common sourcing challenges — and how we handle them
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {problems.map((problem) => (
              <div key={problem.title} className="flex gap-4 p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="w-12 h-12 bg-accent-50 text-accent-600 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{problem.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">How It Works</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A straightforward process from your brief to delivered goods
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative bg-white p-6 lg:p-8 rounded-xl border border-neutral-200">
                <span className="text-5xl lg:text-6xl font-bold text-primary-100 absolute top-4 right-4 leading-none">
                  {step.step}
                </span>
                <div className="relative">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
            >
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Products We Source</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We source across virtually all product categories from Chinese manufacturers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="p-5 bg-neutral-50 border border-neutral-200 rounded-lg hover:border-primary-200 hover:bg-primary-50/30 transition-colors"
              >
                <h3 className="font-semibold text-neutral-900 mb-1">{product.name}</h3>
                <p className="text-sm text-neutral-600">{product.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View Full Product Categories <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials / Case Studies */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Trusted by importers and businesses worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-6 lg:p-8 rounded-xl border border-neutral-200">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-neutral-900 text-sm">{t.name}</div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'How do you find suppliers?', a: 'We leverage an extensive network of verified manufacturers built over 8+ years. We also use targeted sourcing campaigns to find new suppliers matching your specific requirements.' },
              { q: 'What does factory verification involve?', a: 'Our team visits factories in person to audit production capacity, quality control systems, certifications, working conditions, and financial stability. You receive a detailed report with photos.' },
              { q: 'How much do your services cost?', a: 'We offer flexible pricing — from commission-based models to flat project fees. Contact us with your requirements and we will provide a transparent quote. Our initial consultation is free.' },
              { q: 'What minimum order quantities do you handle?', a: 'We work with clients of all sizes. Whether you need a small pilot run or large-scale production, we can find suitable suppliers for your volume.' },
              { q: 'How do you handle quality issues?', a: 'We conduct thorough pre-shipment inspections and can arrange during-production checks. If issues arise, we mediate with the factory to arrange replacements or refunds.' },
            ].map((faq) => (
              <details key={faq.q} className="group bg-neutral-50 rounded-xl border border-neutral-200">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-neutral-900 font-semibold text-sm">
                  {faq.q}
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Source from China?</h2>
          <p className="text-lg text-primary-100 mb-8">
            Tell us what you need and we will find the right supplier, verify the factory, and manage the entire process.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg transition-colors text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}