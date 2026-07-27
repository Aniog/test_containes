import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const caseStudies = [
  {
    title: 'Electronics Retailer Saved 35% on Consumer Products',
    client: 'US-based Electronics Brand',
    industry: 'Electronics',
    description: 'A growing electronics retailer needed to source 50,000 units of wireless earbuds. We identified three verified suppliers, negotiated favorable terms, and conducted rigorous QC inspections.',
    results: ['35% cost reduction', 'Zero defects on final shipment', 'Delivered 2 weeks early'],
    imageId: 'case-study-electronics-xyz789',
    href: '/case-studies#electronics-brand',
  },
  {
    title: 'Furniture Importer Launched Successfully in Europe',
    client: 'European Home Goods Company',
    industry: 'Furniture',
    description: 'A European home goods company wanted to expand their product line with Chinese-manufactured furniture. We managed the entire process from supplier selection to container shipping.',
    results: ['Successfully launched 120 SKUs', '30% below target budget', '100% compliance with EU standards'],
    imageId: 'case-study-furniture-abc456',
    href: '/case-studies#furniture-company',
  },
  {
    title: 'Startup Launched Beauty Brand with OEM Manufacturing',
    client: 'US Beauty Startup',
    industry: 'Health & Beauty',
    description: 'A beauty startup needed help finding an OEM manufacturer for their skincare line. We found a GMP-certified factory, facilitated product development, and managed quality control.',
    results: ['MOQ reduced by 60%', 'First shipment passed all QC tests', 'FDA-compliant documentation'],
    imageId: 'case-study-beauty-def123',
    href: '/case-studies#beauty-startup',
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="section-spacing bg-neutral-50" id="case-studies">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-4">Success Stories</span>
          <h2 className="section-heading mb-4">
            Case Studies
          </h2>
          <p className="section-subheading mx-auto">
            See how we've helped businesses overcome sourcing challenges and achieve their goals.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.title}
              to={study.href}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-neutral-200 to-neutral-300 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary-200 rounded-full opacity-50" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-primary-800">
                    {study.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-neutral-500 mb-2">{study.client}</p>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {study.title}
                </h3>
                <p className="text-neutral-500 text-sm mb-4 line-clamp-2">
                  {study.description}
                </p>

                {/* Results */}
                <div className="space-y-2">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-accent-500 fill-accent-500" />
                      <span className="text-neutral-600">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-primary-700 font-medium text-sm mt-4 pt-4 border-t border-neutral-100 group-hover:gap-2 transition-all">
                  Read full case study
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/case-studies" className="btn-primary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
