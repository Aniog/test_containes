import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Users } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      client: 'European Home Goods Retailer',
      location: 'Germany',
      industry: 'Retail',
      product: 'Kitchenware & Tabletop Items',
      challenge: 'The client was experiencing inconsistent quality from their existing Chinese supplier. Defect rates exceeded 8% on arrival, leading to customer complaints and returns. They needed to identify alternative manufacturers with better quality control processes.',
      approach: 'We conducted a supplier search focused on factories with documented quality systems and export experience to Europe. We shortlisted five candidates, performed on-site audits, and coordinated sample production from the top three. After client approval of samples and pricing, we supported transition to a new primary supplier.',
      results: [
        'Defect rate reduced from 8% to under 1% on first three shipments',
        'Established reliable supplier relationship still active after 24 months',
        'Improved packaging consistency reduced in-transit damage',
      ],
      timeline: '14 weeks from initial inquiry to first production shipment',
      scope: 'Supplier search, factory audits, sample coordination, production monitoring, pre-shipment inspection',
    },
    {
      id: 2,
      client: 'North American Industrial Distributor',
      location: 'United States',
      industry: 'Industrial Distribution',
      product: 'Custom Machined Components',
      challenge: 'The client required precision-machined aluminum parts with tight tolerances (±0.05mm) for an OEM customer. Previous attempts with Chinese suppliers resulted in out-of-spec parts and delivery delays. They needed a verified supplier capable of consistent quality at scale.',
      approach: 'We focused on CNC shops with documented capability for tight-tolerance work. We audited three facilities, reviewed their inspection equipment and process controls, and arranged for sample runs. We also coordinated third-party dimensional verification of samples before production approval.',
      results: [
        'Qualified supplier with verified capability for required tolerances',
        'First production run achieved 97% first-pass yield',
        'Established ongoing supply relationship with quarterly audits',
      ],
      timeline: '11 weeks to supplier qualification; ongoing production support',
      scope: 'Supplier identification, capability verification, sample coordination, inspection protocol development',
    },
    {
      id: 3,
      client: 'Australian E-commerce Brand',
      location: 'Australia',
      industry: 'Consumer Electronics',
      product: 'Private-Label Audio Accessories',
      challenge: 'The client wanted to launch a line of private-label Bluetooth speakers and earbuds. They had identified several potential suppliers online but lacked confidence in quality, production capacity, and compliance documentation. They needed support to validate options and manage initial production.',
      approach: 'We verified three shortlisted factories through on-site audits. We coordinated sample development and arranged compliance testing for target markets. During production, we provided milestone updates and conducted pre-shipment inspection. We also reviewed export documentation for Australian import requirements.',
      results: [
        'Successfully launched 4 SKUs with first production run of 8,000 units',
        'All units passed required compliance testing on first submission',
        '35% cost reduction compared to previous sourcing attempt',
      ],
      timeline: '18 weeks from project start to goods arrival in Australia',
      scope: 'Factory verification, sample coordination, compliance testing support, production monitoring, inspection, documentation review',
    },
    {
      id: 4,
      client: 'UK Construction Equipment Supplier',
      location: 'United Kingdom',
      industry: 'Construction Equipment',
      product: 'Safety Equipment & Accessories',
      challenge: 'The client needed to source a range of safety harnesses, hard hats, and related PPE for the UK market. They required products meeting EN standards and consistent quality across multiple SKUs. Lead time pressure required parallel supplier development.',
      approach: 'We identified manufacturers with existing EN certification and export experience to Europe. We conducted audits at two facilities and coordinated sample production with third-party testing. We managed parallel development with a backup supplier to mitigate risk.',
      results: [
        'Two qualified suppliers with EN-certified products',
        'First order of 12,000 units delivered on schedule',
        'Documentation package accepted by UK importer without issues',
      ],
      timeline: '16 weeks to first shipment',
      scope: 'Supplier search, certification verification, sample coordination, testing coordination, production monitoring',
    },
    {
      id: 5,
      client: 'Canadian Agricultural Equipment Manufacturer',
      location: 'Canada',
      industry: 'Agricultural Equipment',
      product: 'Replacement Parts & Components',
      challenge: 'The client needed a reliable source for aftermarket replacement parts for tillage equipment. Previous suppliers had quality inconsistencies and long lead times. They required a partner who could support both small batch and larger volume orders with consistent quality.',
      approach: 'We searched for manufacturers with experience in agricultural equipment components. We audited two facilities, reviewed their material sourcing and quality processes, and coordinated samples for fit and durability testing. We established a production schedule that accommodated both small and large orders.',
      results: [
        'Established primary supplier for 28 SKUs',
        'Lead time reduced from 14 weeks to 8-9 weeks on average',
        'Quality issues reduced to under 0.5% over 12 months',
      ],
      timeline: '12 weeks to first production; ongoing supply relationship',
      scope: 'Supplier identification, factory audit, sample coordination, production scheduling, ongoing monitoring',
    },
    {
      id: 6,
      client: 'Scandinavian Furniture Importer',
      location: 'Sweden',
      industry: 'Furniture & Home',
      product: 'Wooden Furniture Components',
      challenge: 'The client sourced flat-pack furniture components from multiple Chinese suppliers. Quality varied significantly between batches, and communication delays caused production planning issues. They needed consolidated supplier management and improved consistency.',
      approach: 'We conducted a supplier consolidation review, identifying opportunities to reduce the supplier base while maintaining capacity. We audited the top candidates, coordinated sample approval processes, and implemented a standardized inspection protocol. We also established a regular reporting cadence.',
      results: [
        'Reduced active supplier count from 7 to 3 while maintaining capacity',
        'Implemented standardized quality checklist accepted by all suppliers',
        'On-time delivery improved from 72% to 94% over 12 months',
      ],
      timeline: '22 weeks for consolidation and transition; ongoing support',
      scope: 'Supplier assessment, consolidation planning, audit, process standardization, ongoing coordination',
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Case Studies</h1>
            <p className="text-lg text-slate-300">
              Real projects for international buyers. These examples illustrate the types of challenges 
              we address and the outcomes achieved through structured sourcing support.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="border-b border-slate-200 pb-12 last:border-0 last:pb-0">
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-slate-500">{study.industry}</span>
                    <span className="text-sm text-slate-400">•</span>
                    <span className="text-sm text-slate-500">{study.location}</span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-1">{study.client}</h2>
                  <p className="text-slate-600">{study.product}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">The Challenge</h3>
                      <p className="text-slate-700">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Our Approach</h3>
                      <p className="text-slate-700">{study.approach}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-700">
                            <CheckCircle className="w-4 h-4 text-green-700 mt-1 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="card bg-slate-50 border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-slate-500" />
                        <span className="text-sm font-medium text-slate-500">Timeline</span>
                      </div>
                      <p className="text-sm text-slate-700">{study.timeline}</p>
                    </div>
                    <div className="card bg-slate-50 border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-slate-500" />
                        <span className="text-sm font-medium text-slate-500">Scope of Work</span>
                      </div>
                      <p className="text-sm text-slate-700">{study.scope}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-4">Every Project Is Different</h2>
            <p className="text-slate-600 mb-6">
              These case studies represent actual work completed for clients. Outcomes depend on product 
              complexity, supplier availability, and specific requirements. We provide realistic assessments 
              based on the facts of each situation.
            </p>
            <p className="text-sm text-slate-500 mb-8">
              Client names are not disclosed to protect commercial confidentiality. Details have been 
              generalized where necessary while preserving the substance of the work performed.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Discuss Your Sourcing Needs
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="section-title">Have a Similar Challenge?</h2>
            <p className="text-slate-600">Tell us about your situation. We will provide an assessment and outline options.</p>
          </div>
          <div className="max-w-xl mx-auto">
            <InquiryForm compact title="Request a Project Assessment" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
