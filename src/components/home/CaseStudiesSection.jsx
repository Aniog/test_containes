import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    title: 'US Retailer Saves 35% on Electronics Sourcing',
    category: 'Electronics',
    summary: 'A mid-size US electronics retailer was struggling with unreliable suppliers and quality issues. We identified 3 verified manufacturers, conducted factory audits, and negotiated better pricing.',
    result: '35% cost reduction, 99.2% quality pass rate',
    icon: TrendingUp,
  },
  {
    title: 'European Brand Launches Private Label Apparel',
    category: 'Textiles & Apparel',
    summary: 'A European fashion brand wanted to launch a private label line but had no experience with Chinese manufacturers. We handled everything from supplier selection to quality control.',
    result: 'Successful launch with 50,000 units delivered on time',
    icon: Shield,
  },
  {
    title: 'Australian Startup Avoids $50K Scam',
    category: 'Risk Prevention',
    summary: 'An Australian startup was about to wire $50,000 to an unverified supplier. Our factory audit revealed the company did not exist. We found them a legitimate alternative instead.',
    result: '$50,000 saved, legitimate supplier found within 2 weeks',
    icon: DollarSign,
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Client Success Stories</h2>
          <p className="section-subtitle mx-auto">
            Real results from real clients. See how we have helped businesses source from China with confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">
                  {study.category}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{study.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{study.summary}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <p className="text-green-800 text-sm font-semibold">Result: {study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/case-studies" className="btn-primary">
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
