import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Clock, Users } from 'lucide-react';

const caseStudies = [
  {
    id: 'electronics-retailer',
    industry: 'Electronics',
    title: 'US Retailer Sources Consumer Electronics Line',
    client: 'Mid-sized US electronics retailer',
    challenge: 'The client needed to launch a new line of wireless speakers but lacked the in-house capability to vet Chinese manufacturers. Previous attempts to source directly had resulted in quality issues and missed deadlines.',
    solution: 'SSourcing China identified three verified factories, conducted thorough audits, coordinated sample production, and implemented a multi-stage QC process throughout production.',
    results: [
      '40% reduction in product cost compared to previous supplier',
      '12-week timeline from inquiry to delivery',
      'Zero quality issues reported in first 6 months',
      'Successfully launched 5 new SKUs',
    ],
    timeline: '3 months',
    orderValue: '$250,000',
  },
  {
    id: 'european-importer',
    industry: 'Home Goods',
    title: 'German Importer Diversifies Furniture Supply Chain',
    client: 'German home goods import company',
    challenge: 'Looking to reduce dependency on a single supplier and expand their product range with new furniture categories. Required suppliers with specific certifications and production capabilities.',
    solution: 'Comprehensive supplier search across multiple Chinese provinces, detailed factory audits, sample coordination, and implementation of quality control procedures for each new supplier.',
    results: [
      'Identified and verified 5 new qualified suppliers',
      'Added 30+ new products to catalog',
      '98% on-time delivery rate maintained',
      'All suppliers achieved required certifications',
    ],
    timeline: '4 months',
    orderValue: '$500,000',
  },
  {
    id: 'industrial-machinery',
    industry: 'Industrial',
    title: 'Canadian Company Secures Machinery Components',
    client: 'Canadian industrial manufacturing company',
    challenge: 'Required precision-engineered components for industrial machinery. Needed suppliers with specific technical capabilities, ISO certifications, and ability to meet tight tolerances.',
    solution: 'Technical supplier matching based on capability requirements, on-site facility audits, prototype development, and implementation of precision measurement protocols.',
    results: [
      'Found supplier with required ISO 9001 certification',
      'Achieved all specified tolerances',
      '40% faster sourcing than previous attempts',
      'Established ongoing supply relationship',
    ],
    timeline: '2 months',
    orderValue: '$180,000',
  },
  {
    id: 'australian-fashion',
    industry: 'Apparel',
    title: 'Australian Fashion Brand Expands Production',
    client: 'Australian boutique fashion brand',
    challenge: 'Growing brand needed to scale production while maintaining quality and ethical manufacturing standards. Required suppliers who could handle small to medium runs with flexibility.',
    solution: 'Identified factories with flexible production capabilities, implemented ethical compliance audits, developed quality standards documentation, and created production scheduling system.',
    results: [
      'Scaled production capacity by 200%',
      'Reduced per-unit costs by 25%',
      'All factories passed ethical compliance audits',
      'Lead times reduced from 8 weeks to 5 weeks',
    ],
    timeline: '3 months',
    orderValue: '$120,000',
  },
  {
    id: 'medical-supplies',
    industry: 'Medical',
    title: 'UK Medical Supplier Sources PPE Equipment',
    client: 'UK medical supplies distributor',
    challenge: 'Urgent need to source personal protective equipment during high-demand period. Required suppliers with appropriate medical certifications and the ability to scale quickly.',
    solution: 'Rapid supplier identification and verification, expedited audit process, coordination with certification bodies, and implementation of strict quality control for medical products.',
    results: [
      'Sourced certified suppliers within 2 weeks',
      'Delivered 500,000+ units on schedule',
      '100% certification compliance achieved',
      'Established long-term supply agreement',
    ],
    timeline: '6 weeks',
    orderValue: '$750,000',
  },
  {
    id: 'us-pet-products',
    industry: 'Pet Supplies',
    title: 'US Pet Brand Sources New Product Line',
    client: 'US pet products company',
    challenge: 'Wanted to launch a new line of eco-friendly pet products but had limited experience with international sourcing. Needed guidance on product development and manufacturing.',
    solution: 'Product development consultation, supplier research for sustainable materials, sample development, quality standards establishment, and production monitoring.',
    results: [
      'Successfully developed 12 new eco-friendly products',
      'Achieved target retail price points',
      '100% customer satisfaction in first quarter',
      'Products shipped ahead of schedule',
    ],
    timeline: '5 months',
    orderValue: '$95,000',
  },
];

const industries = ['All', 'Electronics', 'Home Goods', 'Industrial', 'Apparel', 'Medical', 'Pet Supplies'];

const CaseStudies = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-secondary py-20 lg:py-28">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Success Stories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Real results from real clients. Explore how SSourcing China has helped businesses 
              worldwide successfully source products from China.
            </p>
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section-padding bg-background-light">
        <div className="container-main">
          <div className="space-y-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="card-base">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    <span className="inline-block bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      {study.industry}
                    </span>
                    <h2 className="text-2xl font-bold text-text-primary mb-2">{study.title}</h2>
                    <p className="text-sm text-text-secondary mb-6">{study.client}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2">The Challenge</h4>
                        <p className="text-sm text-text-secondary">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2">Our Solution</h4>
                        <p className="text-sm text-text-secondary">{study.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-text-primary mb-3">Results Achieved</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {study.results.map((result) => (
                          <div key={result} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-text-secondary">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stats Sidebar */}
                  <div className="bg-primary-50 rounded-xl p-6">
                    <h4 className="font-semibold text-primary mb-4">Project Details</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs text-text-secondary">Order Value</p>
                          <p className="font-semibold text-text-primary">{study.orderValue}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs text-text-secondary">Timeline</p>
                          <p className="font-semibold text-text-primary">{study.timeline}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs text-text-secondary">Industry</p>
                          <p className="font-semibold text-text-primary">{study.industry}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-border">
                      <Link to="/contact" className="btn-primary w-full justify-center text-sm">
                        Get Similar Results
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses who have successfully sourced products through SSourcing China.
          </p>
          <Link to="/contact" className="btn-accent text-lg px-10 py-4">
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
