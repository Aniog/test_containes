import React from 'react';
import PageHeader from '@/components/common/PageHeader.jsx';
import InquiryForm from '@/components/common/InquiryForm.jsx';

const cases = [
  {
    title: 'Custom Consumer Electronics Prototype to Production',
    client: 'Startup based in London',
    result: 'Reduced unit cost by 22% compared to original factory quote.',
    imageId: 'case-electronics-01'
  },
  {
    title: 'Home Goods Private Label for Major Retailer',
    client: 'Mid-size retailer in USA',
    result: 'Successfully audited 3 factories and managed production for 50+ SKUs.',
    imageId: 'case-home-02'
  },
  {
    title: 'Industrial Parts Quality Turnaround',
    client: 'Manufacturing firm in Germany',
    result: 'Zero defects reported over 12 months after implementing new QC protocol.',
    imageId: 'case-industrial-03'
  }
];

const CaseStudies = () => {
  return (
    <div>
      <PageHeader 
        title="Success Stories" 
        subtitle="Real-world examples of how we solve sourcing challenges in China."
        imageId="cases-header"
        searchTerms="China business meeting factory quality control result"
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {cases.map((cs, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-200">
                  <img 
                    data-strk-img-id={cs.imageId}
                    data-strk-img={`${cs.title} result manufacturing`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-10 flex flex-col justify-center">
                  <div className="text-secondary font-bold text-sm mb-2 uppercase tracking-widest">{cs.client}</div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{cs.title}</h3>
                  <div className="p-4 bg-primary/5 border-l-4 border-secondary text-primary font-medium">
                    "Result: {cs.result}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Want Your Story to Be Next?</h2>
          <p className="text-xl text-gray-400 mb-12">We help businesses of all sizes overcome the hurdles of importing from China. Let's build your success together.</p>
          <div className="text-left max-w-2xl mx-auto">
            <InquiryForm title="Start Your Success Story" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
