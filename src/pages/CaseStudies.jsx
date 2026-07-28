import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const CaseStudies = () => {
  const cases = [
    {
      client: 'Nordic Home Retail Group',
      location: 'Sweden',
      category: 'Home Textiles',
      challenge: 'Needed to consolidate 12 suppliers into fewer, more reliable partners while maintaining product quality and reducing lead times.',
      approach: 'Conducted supplier audits across 3 provinces, negotiated volume pricing, implemented standardized quality checklists.',
      results: ['Supplier count reduced from 12 to 4', 'Lead time improved from 75 to 42 days', 'Quality rejection rate dropped from 8% to 1.5%', 'Annual savings of €340,000'],
      timeline: '5 months'
    },
    {
      client: 'Industrial Equipment Distributor',
      location: 'United States',
      category: 'Machinery Components',
      challenge: 'Required consistent supply of specialized components with strict tolerance requirements for OEM customers.',
      approach: 'Identified 3 manufacturers with CNC capabilities, established inspection protocols, set up monthly quality reviews.',
      results: ['Zero tolerance-related returns in 18 months', 'Established 3 backup suppliers for risk mitigation', 'Reduced component cost by 18%', 'Improved on-time delivery to 97%'],
      timeline: '8 months'
    },
    {
      client: 'E-commerce Consumer Electronics Brand',
      location: 'Australia',
      category: 'Audio Equipment',
      challenge: 'Scaling from 2,000 to 15,000 units/month while maintaining quality and managing cash flow constraints.',
      approach: 'Negotiated phased payment terms, implemented staged inspections, coordinated with 2 freight forwarders for flexibility.',
      results: ['Successfully scaled to 15,000 units/month', 'Maintained 99.2% first-pass quality rate', 'Extended payment terms from 30 to 60 days', 'Reduced logistics cost per unit by 23%'],
      timeline: '6 months'
    },
    {
      client: 'European Workwear Manufacturer',
      location: 'Germany',
      category: 'Apparel & Textiles',
      challenge: 'Needed compliant suppliers for high-visibility workwear meeting EN ISO 20471 standards with competitive pricing.',
      approach: 'Screened 28 factories for certification and capacity, conducted social compliance audits, negotiated fabric sourcing.',
      results: ['3 certified suppliers onboarded', 'Product compliance verified through accredited labs', 'Unit cost reduced by 15% vs. previous supplier', 'Production capacity secured for 3-year growth plan'],
      timeline: '4 months'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-2xl mb-16">
        <h1 className="text-4xl font-semibold mb-4">Case Studies</h1>
        <p className="text-lg text-slate-600">Real results from sourcing projects across different industries and regions. Each engagement is tailored to specific client requirements.</p>
      </div>

      <div className="space-y-16">
        {cases.map((study, i) => (
          <div key={i} className="border border-slate-200 rounded-xl p-10">
            <div className="flex flex-wrap gap-4 items-baseline mb-6">
              <h2 className="text-2xl font-semibold">{study.client}</h2>
              <span className="text-sm px-3 py-1 bg-slate-100 rounded text-slate-600">{study.location}</span>
              <span className="text-sm px-3 py-1 bg-slate-100 rounded text-slate-600">{study.category}</span>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Challenge</div>
                <p className="text-sm text-slate-600">{study.challenge}</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Approach</div>
                <p className="text-sm text-slate-600">{study.approach}</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Timeline</div>
                <p className="text-sm text-slate-600 mb-4">{study.timeline}</p>
                <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Results</div>
                <ul className="space-y-1 text-sm text-slate-600">
                  {study.results.map((result, j) => (
                    <li key={j}>• {result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-slate-50 rounded-lg p-12">
        <h3 className="text-xl font-semibold mb-3">Your project could be next.</h3>
        <p className="text-slate-600 mb-6">Every sourcing engagement begins with understanding your specific requirements and constraints.</p>
        <Link to="/contact"><Button size="lg">Start a Conversation</Button></Link>
      </div>
    </div>
  );
};

export default CaseStudies;