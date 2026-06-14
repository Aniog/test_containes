import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Users, Package, Truck, MessageCircle } from 'lucide-react';
import ProcessStep from '../components/ProcessStep';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We start with a conversation about your product, target market, quality expectations, budget range, and timeline. This helps us understand what success looks like for your project.',
      items: [
        'Product specifications and requirements',
        'Quality standards and certifications needed',
        'Target price range and volume',
        'Preferred payment and shipping terms',
        'Any previous sourcing experience or challenges',
      ],
    },
    {
      number: '02',
      title: 'Supplier Research & Shortlisting',
      description: 'We search our network and conduct preliminary screening to identify manufacturers that appear capable of meeting your needs. We present a shortlist with key details for your review.',
      items: [
        'Identification of 3–5 candidate factories',
        'Summary of each supplier\'s capabilities and location',
        'Preliminary pricing and MOQ information',
        'Export experience and reference notes',
        'Initial risk observations',
      ],
    },
    {
      number: '03',
      title: 'Factory Verification',
      description: 'For suppliers you wish to pursue, we conduct on-site verification. This is a critical step that many buyers skip and later regret. We provide a written report with photos.',
      items: [
        'Business registration and ownership check',
        'Facility tour and production capacity assessment',
        'Quality system and process review',
        'Workforce and equipment evaluation',
        'Risk rating and recommendation',
      ],
    },
    {
      number: '04',
      title: 'Sampling & Approval',
      description: 'We coordinate sample production and shipment. You review and approve samples before authorizing mass production. This is your opportunity to lock in specifications.',
      items: [
        'Sample order placement and tracking',
        'Sample review coordination (photos, measurements)',
        'Feedback communication to factory',
        'Approval confirmation before production',
        'Pre-production sample retention when relevant',
      ],
    },
    {
      number: '05',
      title: 'Order Placement & Production',
      description: 'Once you are ready to order, we help structure the purchase order and monitor production progress. We provide regular updates so you are not surprised by delays.',
      items: [
        'Purchase order review and clarification',
        'Production schedule confirmation',
        'Weekly progress reports with photos',
        'Early warning of potential issues',
        'Coordination of any required corrections',
      ],
    },
    {
      number: '06',
      title: 'Quality Inspection',
      description: 'Before goods leave the factory, we conduct an inspection according to agreed AQL standards. You receive a detailed report with photos and a clear pass/fail recommendation.',
      items: [
        'Inspection scheduling at factory',
        'Visual, dimensional, and functional checks',
        'Packaging and labeling verification',
        'Photo documentation of findings',
        'Clear report with pass/fail and observations',
      ],
    },
    {
      number: '07',
      title: 'Shipping & Documentation',
      description: 'We coordinate freight booking, review shipping documents, and ensure you have what you need for customs clearance at destination.',
      items: [
        'Freight option comparison and booking',
        'Commercial invoice and packing list review',
        'Bill of lading and certificate of origin handling',
        'Container loading supervision (optional)',
        'Document package delivery to you or your broker',
      ],
    },
    {
      number: '08',
      title: 'Delivery & Follow-up',
      description: 'After shipment, we remain available to address any questions that arise during transit or upon arrival. We also document lessons learned for future orders.',
      items: [
        'Shipment tracking updates',
        'Support for customs or documentation questions',
        'Post-delivery review call',
        'Supplier performance notes for future reference',
        'Recommendations for next order improvements',
      ],
    },
  ];

  const principles = [
    {
      icon: FileText,
      title: 'Written Documentation',
      description: 'Every audit, inspection, and key decision is documented. You receive reports you can share internally or with your team.',
    },
    {
      icon: Users,
      title: 'Clear Communication',
      description: 'We provide regular updates in plain language. You are not left wondering what is happening with your order.',
    },
    {
      icon: CheckCircle,
      title: 'Buyer-Aligned Incentives',
      description: 'We are paid by you, not by suppliers. Our role is to help you make informed decisions and reduce risk.',
    },
    {
      icon: MessageCircle,
      title: 'Realistic Expectations',
      description: 'We do not promise perfect outcomes. We explain risks, trade-offs, and what can reasonably be controlled.',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h1>
            <p className="text-lg text-slate-600">
              A structured, transparent process designed to help you make informed decisions and reduce the common risks of sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section container">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Our Sourcing Process</h2>
          <p className="text-slate-600 max-w-2xl">The steps below represent a typical full engagement. We can also work with you on individual stages if you already have suppliers identified or need support for a specific part of the process.</p>
        </div>

        <div className="max-w-3xl">
          {steps.map((step, idx) => (
            <ProcessStep key={idx} {...step} />
          ))}
        </div>
      </section>

      {/* Operating Principles */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">How We Operate</h2>
            <p className="text-slate-600">These principles guide how we work with clients and suppliers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {principles.map((p, idx) => (
              <div key={idx} className="card flex gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5">{p.title}</h3>
                  <p className="text-sm text-slate-600">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Expectations */}
      <section className="section container">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Typical Timelines</h2>
          <div className="space-y-4 text-sm">
            <div className="flex flex-col md:flex-row md:gap-4 border-b border-slate-200 pb-4">
              <div className="md:w-48 font-medium text-slate-700 mb-1 md:mb-0">Supplier shortlist</div>
              <div className="text-slate-600">5–10 business days after initial consultation, depending on product complexity.</div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 border-b border-slate-200 pb-4">
              <div className="md:w-48 font-medium text-slate-700 mb-1 md:mb-0">Factory audit</div>
              <div className="text-slate-600">Usually completed within 7–14 days of supplier selection, subject to factory availability.</div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 border-b border-slate-200 pb-4">
              <div className="md:w-48 font-medium text-slate-700 mb-1 md:mb-0">Sampling</div>
              <div className="text-slate-600">2–6 weeks depending on product type and whether tooling or custom components are required.</div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 border-b border-slate-200 pb-4">
              <div className="md:w-48 font-medium text-slate-700 mb-1 md:mb-0">Production lead time</div>
              <div className="text-slate-600">Varies widely by product. We confirm realistic schedules during the sampling stage.</div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 border-b border-slate-200 pb-4">
              <div className="md:w-48 font-medium text-slate-700 mb-1 md:mb-0">Inspection</div>
              <div className="text-slate-600">Typically 1–3 business days once goods are ready, plus report preparation.</div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="md:w-48 font-medium text-slate-700 mb-1 md:mb-0">Ocean freight (example)</div>
              <div className="text-slate-600">Approximately 25–35 days from Shanghai/Ningbo to US West Coast; longer to other destinations.</div>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4">These are general estimates. Actual timelines depend on your product, supplier capacity, and shipping method.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-slate-900 text-white">
        <div className="container text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">Have Questions About the Process?</h2>
          <p className="text-slate-300 mb-6 max-w-md mx-auto">We are happy to walk through how this would apply to your specific situation.</p>
          <Link to="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100 px-8">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;