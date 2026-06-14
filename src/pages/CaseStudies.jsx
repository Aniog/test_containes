import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudyCard from '../components/CaseStudyCard';

const CaseStudies = ({ onQuoteClick }) => {
  const caseStudies = [
    {
      client: 'European Home Appliance Brand',
      industry: 'Consumer Electronics',
      challenge: 'The company had been working with a supplier for three years. Quality had deteriorated, and two consecutive shipments arrived with defects that damaged relationships with key retail accounts. The buyer lacked on-the-ground visibility and struggled to get consistent responses from the factory.',
      solution: 'We conducted a full factory verification visit and identified gaps in process control and incoming material inspection. We implemented a staged inspection protocol (pre-production, in-line, and final) with clear acceptance criteria. Weekly production reports were introduced, and we established direct communication channels with the factory\'s production manager.',
      results: 'Defect rate dropped from 8.2% to 1.1% across the next three production runs. On-time delivery improved to 96%. The buyer was able to restore confidence with two major retail chains. The supplier relationship was maintained rather than replaced.',
    },
    {
      client: 'North American Industrial Distributor',
      industry: 'Industrial Equipment',
      challenge: 'The distributor needed to qualify new Chinese manufacturers for a private-label line of power tools. They had a 10-week window before a major trade show and had received conflicting information from several factories they contacted directly.',
      solution: 'We performed a rapid supplier identification exercise focused on factories with relevant export experience and ISO certification. We visited three shortlisted factories within two weeks, produced detailed verification reports, and coordinated sample shipments. We also reviewed the factories\' current order books to assess capacity risk.',
      results: 'A supplier was approved within six weeks. Samples passed internal testing. The first production container shipped on schedule and arrived with zero quality claims in the first year. The buyer expanded the product line with the same supplier the following season.',
    },
    {
      client: 'Australian Outdoor Furniture Importer',
      industry: 'Consumer Goods',
      challenge: 'The importer had placed an order with a new supplier for a large seasonal volume. Two weeks before the agreed shipment date, the factory announced a delay of six weeks due to material shortages. The buyer had no visibility into the real situation and risked missing the entire selling season.',
      solution: 'We were engaged for production monitoring on an urgent basis. We visited the factory, verified the actual material status, and identified that the delay was partly due to the factory overcommitting to other orders. We worked with the factory to prioritize the buyer\'s order and arranged partial air freight for the most time-sensitive SKUs.',
      results: 'The majority of the order arrived in time for the peak season. The buyer recovered approximately 70% of projected seasonal revenue instead of near-total loss. We continue to manage production monitoring for this supplier relationship.',
    },
    {
      client: 'UK Medical Supply Company',
      industry: 'Healthcare',
      challenge: 'The company needed to source components for a Class I medical device. They required a supplier with documented quality systems and the ability to support regulatory documentation. Previous attempts to source directly had produced suppliers who could not provide consistent traceability.',
      solution: 'We focused the search on factories with existing medical device customers and ISO 13485 certification. We conducted verification visits with specific attention to traceability, batch records, and cleanroom practices. We also coordinated third-party testing to support the buyer\'s regulatory submission.',
      results: 'A qualified supplier was identified and approved. The buyer received complete documentation packages for their regulatory file. The first production batch passed incoming inspection with zero non-conformances. The supplier has since been approved for additional components.',
    },
  ];

  return (
    <div>
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="text-sm font-medium text-blue-700 tracking-wider mb-2">CLIENT RESULTS</div>
          <h1 className="text-4xl font-semibold text-slate-900 mb-4">Case Studies</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real examples of sourcing challenges we have helped overseas buyers address. Details have been generalized to protect client confidentiality.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs, index) => (
            <CaseStudyCard key={index} {...cs} />
          ))}
        </div>
      </div>

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Your Situation May Be Different</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Every sourcing project has unique constraints. These examples illustrate the types of issues we commonly encounter and the practical approaches we use. We would be happy to discuss your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {onQuoteClick ? (
              <button
                onClick={onQuoteClick}
                className="inline-block px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg transition-colors"
              >
                Get a Free Sourcing Quote
              </button>
            ) : null}
            <Link to="/contact" className="inline-block px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/5 transition-colors">
              View Contact Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
