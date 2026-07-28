import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  Globe,
  Award,
  Headphones,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProcessStep from '../components/ProcessStep.jsx';
import ProductCard from '../components/ProductCard.jsx';
import CaseStudyCard from '../components/CaseStudyCard.jsx';
import FAQItem from '../components/FAQItem.jsx';
import InquiryForm from '../components/InquiryForm.jsx';

const services = [
  {
    icon: Search,
    title: 'Supplier Discovery',
    description: 'We identify and shortlist manufacturers that match your product specs, quality standards, and order volume.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site audits, license checks, and capability assessments to confirm a supplier is real and reliable.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container-loading inspections to catch issues before goods leave China.',
  },
  {
    icon: Factory,
    title: 'Production Follow-Up',
    description: 'Regular reporting on lead times, milestones, and workmanship so delays and defects are minimized.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'Documentation, consolidation, and logistics support to move goods from factory to your warehouse.',
  },
];

const processSteps = [
  {
    number: '1',
    title: 'Tell us what you need',
    description: 'Share your product requirements, target price, quantity, and any supplier preferences through our inquiry form.',
    imgId: 'process-step-1-need',
    titleId: 'process-step-1-title',
    descId: 'process-step-1-desc',
  },
  {
    number: '2',
    title: 'Supplier shortlist & verification',
    description: 'We research the market, contact factories, and verify credentials before presenting a curated shortlist.',
    imgId: 'process-step-2-verify',
    titleId: 'process-step-2-title',
    descId: 'process-step-2-desc',
  },
  {
    number: '3',
    title: 'Sampling & quoting',
    description: 'Coordinate samples, compare quotations, and negotiate terms so you can make an informed decision.',
    imgId: 'process-step-3-sample',
    titleId: 'process-step-3-title',
    descId: 'process-step-3-desc',
  },
  {
    number: '4',
    title: 'Production & quality control',
    description: 'Monitor manufacturing progress and conduct inspections at agreed checkpoints.',
    imgId: 'process-step-4-qc',
    titleId: 'process-step-4-title',
    descId: 'process-step-4-desc',
  },
  {
    number: '5',
    title: 'Shipping & delivery',
    description: 'Arrange export documents, consolidate cargo if needed, and track delivery to your door.',
    imgId: 'process-step-5-ship',
    titleId: 'process-step-5-title',
    descId: 'process-step-5-desc',
  },
];

const products = [
  {
    title: 'Electronics & Components',
    description: 'Consumer electronics, cables, chargers, PCBs, and semiconductors.',
    imgId: 'product-electronics',
    titleId: 'product-electronics-title',
    descId: 'product-electronics-desc',
  },
  {
    title: 'Machinery & Industrial Parts',
    description: 'Valves, pumps, fasteners, tooling, and custom mechanical components.',
    imgId: 'product-machinery',
    titleId: 'product-machinery-title',
    descId: 'product-machinery-desc',
  },
  {
    title: 'Apparel & Textiles',
    description: 'Garments, fabrics, bags, and accessories with compliance support.',
    imgId: 'product-apparel',
    titleId: 'product-apparel-title',
    descId: 'product-apparel-desc',
  },
  {
    title: 'Home & Hardware',
    description: 'Furniture, kitchenware, lighting, and building materials.',
    imgId: 'product-home',
    titleId: 'product-home-title',
    descId: 'product-home-desc',
  },
  {
    title: 'Packaging & Printing',
    description: 'Retail packaging, labels, boxes, and printed materials.',
    imgId: 'product-packaging',
    titleId: 'product-packaging-title',
    descId: 'product-packaging-desc',
  },
  {
    title: 'Promotional Products',
    description: 'Custom-branded merchandise, gifts, and marketing materials.',
    imgId: 'product-promo',
    titleId: 'product-promo-title',
    descId: 'product-promo-desc',
  },
];

const problems = [
  {
    icon: Users,
    title: 'Hard to find the right factory',
    description: 'We filter out traders and unverified vendors, giving you direct access to real manufacturers.',
  },
  {
    icon: DollarSign,
    title: 'Unclear pricing and hidden costs',
    description: 'We break down quotes and negotiate terms so you understand the real landed cost.',
  },
  {
    icon: Clock,
    title: 'Production delays',
    description: 'Regular follow-ups and milestone tracking keep suppliers accountable to your schedule.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality risks',
    description: 'Independent inspections at key stages protect you from receiving defective or non-conforming goods.',
  },
];

const trustPoints = [
  {
    icon: Globe,
    title: 'On-the-ground team',
    description: 'Bilingual staff based in Guangzhou with direct access to manufacturing hubs.',
  },
  {
    icon: Award,
    title: 'Transparent process',
    description: 'Clear reports, photos, and documentation at every sourcing stage.',
  },
  {
    icon: Headphones,
    title: 'Buyer-first support',
    description: 'We represent your interests in negotiations, not the factory\'s.',
  },
  {
    icon: CheckCircle,
    title: 'Quality assurance',
    description: 'Inspection checklists aligned with AQL standards and your specifications.',
  },
];

const caseStudies = [
  {
    client: 'Industrial Pump Buyer in Germany',
    industry: 'Industrial Equipment',
    description: 'Sourced cast-iron pump housings from a verified Zhejiang foundry and managed pre-shipment inspection.',
    outcome: 'Reduced defect rate from 8% to under 1.5% within two orders.',
    imgId: 'case-pump-germany',
    titleId: 'case-pump-title',
    descId: 'case-pump-desc',
  },
  {
    client: 'US Retailer: Kitchen Accessories',
    industry: 'Home Goods',
    description: 'Identified a food-grade silicone supplier, verified certifications, and coordinated FBA-compliant packaging.',
    outcome: 'Delivered three private-label SKUs on time for Q4 replenishment.',
    imgId: 'case-kitchen-us',
    titleId: 'case-kitchen-title',
    descId: 'case-kitchen-desc',
  },
  {
    client: 'Australian Fitness Brand',
    industry: 'Sports & Fitness',
    description: 'Consolidated resistance-band and yoga-mat orders across two factories into one container shipment.',
    outcome: 'Cut freight cost per unit by 22% and simplified customs clearance.',
    imgId: 'case-fitness-australia',
    titleId: 'case-fitness-title',
    descId: 'case-fitness-desc',
  },
];

const faqs = [
  {
    question: 'What makes SSourcing China different from a trading company?',
    answer: 'We work for buyers, not factories. Our fees are transparent, and our role is to verify, inspect, coordinate, and advocate on your behalf. We do not take ownership of goods or mark up product prices.',
  },
  {
    question: 'How do you charge for sourcing services?',
    answer: 'We typically charge a fixed project fee or a percentage of order value, depending on the complexity and volume. The first quote request is free.',
  },
  {
    question: 'Can you help with small trial orders?',
    answer: 'Yes. We support businesses of different sizes and can help arrange samples and small first orders to validate a supplier before scaling.',
  },
  {
    question: 'Do you handle shipping and customs documents?',
    answer: 'We coordinate with freight forwarders, prepare packing lists and commercial invoices, and support you through export clearance. Final customs at destination is usually handled by your local broker.',
  },
  {
    question: 'Which industries do you specialize in?',
    answer: 'We focus on electronics, machinery and industrial parts, apparel and textiles, home goods, packaging, and promotional products. If your product falls outside these categories, please contact us to discuss.',
  },
];

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-ssourcing"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold tracking-wide uppercase text-amber mb-4">
              China Sourcing Agent for Global Buyers
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Reliable Suppliers, Verified Factories, On-Time Delivery
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl">
              SSourcing China helps overseas buyers source from China with confidence. We find suppliers, verify factories, inspect quality, follow production, and coordinate shipping—so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber text-white text-base font-semibold px-8 py-4 rounded-lg hover:bg-amber-hover transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white text-base font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-navy transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="End-to-end sourcing support from China"
            description="From the first supplier search to final delivery, we manage the details that reduce risk and save you time."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="section-how-we-work-title"
            eyebrow="How We Work"
            title="A clear sourcing process you can track"
            description="Our five-step workflow keeps every project organized, transparent, and accountable."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
            {processSteps.map((step) => (
              <ProcessStep
                key={step.number}
                {...step}
                sectionTitleId="section-how-we-work-title"
              />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy font-semibold px-8 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors"
            >
              View Full Process
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="section-products-title"
            eyebrow="Products We Source"
            title="Categories we know well"
            description="We focus on product categories where our team has verified factory networks and technical experience."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.titleId}
                {...product}
                sectionTitleId="section-products-title"
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 text-amber font-semibold hover:text-amber-hover transition-colors"
            >
              Browse all product categories →
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Problems We Solve"
            title="Reduce the risks of buying from China"
            description="International sourcing comes with real challenges. Here is how we help you avoid the most common ones."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {problems.map((item, index) => (
              <div key={index} className="bg-navy-light/50 rounded-xl p-6 border border-navy-light">
                <div className="w-12 h-12 rounded-lg bg-amber/10 text-amber flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why SSourcing China"
            title="Built for buyers who need clarity on the ground"
            description="We combine local presence, transparent reporting, and buyer-focused representation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-cloud text-navy flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-slate-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case Studies"
            title="Results from real sourcing projects"
            description="See how we have helped buyers in different industries improve quality, cost, and delivery reliability."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.titleId} {...study} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy font-semibold px-8 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors"
            >
              Read All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions about sourcing from China"
          />
          <div className="bg-white rounded-xl border border-border p-2 md:p-6 shadow-card">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 md:py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-sm font-semibold tracking-wide uppercase text-amber mb-3">
                Start Your Project
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
                Get a Free Sourcing Quote
              </h2>
              <p className="text-lg text-slate-muted leading-relaxed mb-8">
                Tell us what you are looking for. We will review your requirements and respond with next steps within one business day.
              </p>
              <ul className="space-y-4">
                {[
                  'No commitment required',
                  'Response within 24 hours',
                  'Transparent fee structure',
                  'Bilingual team on the ground',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate">
                    <CheckCircle className="w-5 h-5 text-success shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <InquiryForm embedded />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
