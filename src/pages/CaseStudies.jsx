import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Retail Chain',
      industry: 'Home Goods',
      challenge: 'Needed to identify reliable suppliers for seasonal home decor products with strict quality requirements and tight delivery timelines.',
      solution: 'Conducted supplier search across 3 provinces, verified 8 factories, coordinated sample production, and managed quality inspections.',
      results: ['60% reduction in sourcing timeline', '12 qualified suppliers identified', 'Zero quality issues on first shipment', 'On-time delivery for peak season'],
      timeline: '8 weeks',
    },
    {
      client: 'US Electronics Distributor',
      industry: 'Electronics',
      challenge: 'Required custom PCB components with specific technical specifications and needed multiple supplier options for supply chain resilience.',
      solution: 'Identified specialized manufacturers, coordinated technical capability assessments, managed sample iterations, and established quality protocols.',
      results: ['3 qualified suppliers approved', 'Technical specifications met on first attempt', '15% cost improvement vs. previous source', '4-week lead time achieved'],
      timeline: '6 weeks',
    },
    {
      client: 'Australian Furniture Brand',
      industry: 'Furniture',
      challenge: 'Expanding product line required new outdoor furniture suppliers with sustainable material sourcing and competitive pricing.',
      solution: 'Researched sustainable material suppliers, verified production capabilities, coordinated material testing, and negotiated volume pricing.',
      results: ['15% cost reduction achieved', 'Sustainable material certification verified', '5-year supplier partnership established', 'Consistent quality across orders'],
      timeline: '10 weeks',
    },
    {
      client: 'UK Promotional Products Company',
      industry: 'Promotional',
      challenge: 'Needed reliable supplier for custom branded merchandise with consistent quality across multiple product types and seasonal campaigns.',
      solution: 'Established dedicated supplier relationship, implemented standardized quality procedures, and coordinated multi-product production schedules.',
      results: ['Single supplier for 40+ SKUs', 'Consistent brand quality maintained', '30% faster turnaround time', 'Reduced administrative overhead'],
      timeline: '4 weeks',
    },
  ];

  return (
    <div>
      <section className="bg-[#1a365d] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-semibold mb-4">Case Studies</h1>
          <p className="text-xl text-[#a0aec0]">Real results from sourcing projects across industries</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {cases.map((study, index) => (
              <div key={index} className="border border-[#e2e8f0] rounded-lg p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="text-sm text-[#3182ce] mb-1">{study.industry}</div>
                    <h2 className="text-2xl font-semibold">{study.client}</h2>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#4a5568]">Timeline</div>
                    <div className="font-semibold">{study.timeline}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide text-[#4a5568]">Challenge</h3>
                    <p className="text-[#4a5568]">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide text-[#4a5568]">Solution</h3>
                    <p className="text-[#4a5568]">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide text-[#4a5568]">Results</h3>
                    <ul className="space-y-1.5">
                      {study.results.map((result, i) => (
                        <li key={i} className="text-[#4a5568] flex items-start gap-2">
                          <span className="text-[#38a169] mt-1">•</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7fafc]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Your Project Could Be Next</h2>
          <p className="text-[#4a5568] mb-6">Contact us to discuss how we can help with your sourcing requirements.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#3182ce] text-white px-6 py-3 rounded-md font-medium hover:bg-[#2b6cb0]">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
