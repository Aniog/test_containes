import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    id: 'electronics-oem',
    title: 'Electronics OEM Sourcing for US Retailer',
    category: 'Electronics',
    challenge: 'A US electronics retailer needed a reliable OEM manufacturer for custom Bluetooth speakers with strict quality requirements.',
    solution: 'We identified 3 qualified factories, conducted on-site audits, managed sample revisions, and oversaw mass production with weekly QC reports.',
    result: 'Delivered 50,000 units on time with a 98.5% pass rate. Client reduced sourcing costs by 22% compared to previous supplier.',
    imgId: 'case-study-electronics-7a3b2c',
    titleId: 'case-study-electronics-title',
    descId: 'case-study-electronics-desc',
  },
  {
    id: 'furniture-import',
    title: 'Furniture Import for European Distributor',
    category: 'Home & Garden',
    challenge: 'A European furniture distributor needed to source solid wood dining tables with FSC certification and EU compliance.',
    solution: 'We verified factory certifications, coordinated material sourcing, conducted pre-shipment inspections, and handled all export documentation.',
    result: 'Successfully shipped 2,000 units with zero compliance issues. Client expanded to a long-term partnership with quarterly orders.',
    imgId: 'case-study-furniture-4d8e1f',
    titleId: 'case-study-furniture-title',
    descId: 'case-study-furniture-desc',
  },
  {
    id: 'apparel-private',
    title: 'Private Label Apparel for Australian Brand',
    category: 'Apparel & Textiles',
    challenge: 'An Australian fashion brand wanted to launch a private label line but had no experience with Chinese garment manufacturers.',
    solution: 'We sourced factories specializing in their fabric type, managed tech pack translation, coordinated sampling, and handled quality control.',
    result: 'Launched first collection of 15 SKUs within 4 months. Client now sources 80% of their production through us.',
    imgId: 'case-study-apparel-9c5f3a',
    titleId: 'case-study-apparel-title',
    descId: 'case-study-apparel-desc',
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="section-header">
          <h2 id="case-studies-title" className="section-title">Recent Case Studies</h2>
          <p id="case-studies-subtitle" className="section-subtitle">
            Real examples of how we've helped buyers source successfully from China.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="card overflow-hidden p-0">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[${study.descId}] [${study.titleId}] [case-studies-subtitle] [case-studies-title]`}
                  data-strk-img-ratio="16x10"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {study.category}
                </span>
                <h3 id={study.titleId} className="text-lg font-semibold text-slate-900 mb-3">{study.title}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-slate-700">Challenge:</p>
                    <p id={study.descId} className="text-sm text-slate-600">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Solution:</p>
                    <p className="text-sm text-slate-600">{study.solution}</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-green-800 font-medium">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/case-studies" className="btn-secondary">
            View All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
