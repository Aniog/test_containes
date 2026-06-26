import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const cases = [
    {
      client: "US Electronics Retailer",
      challenge: "High defect rate (15%) from their existing Alibaba supplier for wireless earbuds, causing negative reviews and returns.",
      solution: "We audited 5 new factories, selected a manufacturer with ISO9001 certification, and implemented a strict AQL 2.5 pre-shipment inspection protocol before every order.",
      result: "Defect rate dropped to <1%. Cost per unit reduced by 8% due to our direct negotiation. The client successfully scaled their brand on Amazon."
    },
    {
      client: "European Furniture Importer",
      challenge: "Struggling with high shipping costs and MOQ requirements from multiple suppliers for an outdoor furniture line.",
      solution: "We negotiated lower MOQs across 3 specialized factories in Zhejiang. We then provided warehousing to consolidate their varied products into single 40HQ containers.",
      result: "Saved 22% on overall logistics costs through consolidation. Successfully launched their new product line without tying up excessive capital in inventory."
    },
    {
      client: "Australian E-commerce Brand",
      challenge: "Wanted to launch a custom-designed eco-friendly yoga mat but faced communication barriers and IP theft concerns with Chinese factories.",
      solution: "Signed strict NNN agreements locally. Our native engineers translated technical specs precisely and oversaw the mold creation and sampling process on-site.",
      result: "Initial samples approved on the second iteration. Product launched on schedule with zero IP leakage, becoming a top seller in their local market."
    }
  ];

  return (
    <div className="bg-gray-50 flex-grow py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped global B2B buyers overcome sourcing challenges, reduce costs, and scale their businesses safely.
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100 md:divide-y-0 md:divide-x md:flex">
              <div className="md:w-1/3 p-8 bg-blue-50/50 flex flex-col justify-center">
                <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">The Client</h3>
                <p className="text-xl font-bold text-gray-900">{study.client}</p>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">The Challenge</h4>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Our Solution</h4>
                  <p className="text-gray-600">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-green-700 mb-2">The Results</h4>
                  <p className="text-gray-800 font-medium">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to write your success story?</h2>
            <p className="text-gray-600 mb-6">Partner with SSourcing China to secure your supply chain.</p>
            <Link
              to="/contact"
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
            >
              Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;