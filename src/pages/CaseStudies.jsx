import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  CheckCircle2,
  Package,
  Truck,
  Building2,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const caseStudies = [
  {
    id: 'electronics-retailer',
    client: 'European Electronics Retailer',
    industry: 'Consumer Electronics',
    challenge: 'A mid-sized electronics retailer in Germany needed to source a new line of smart home devices but lacked the expertise and language skills to navigate the Chinese supplier market.',
    solution: 'SSourcing China identified three verified manufacturers, conducted thorough factory audits, facilitated sample testing, and coordinated a 50,000-unit order with strict quality requirements.',
    results: [
      'Successfully sourced from ISO-certified manufacturer',
      '28% cost reduction compared to previous supplier',
      'Zero quality issues in first 6 months',
      'On-time delivery across all shipments',
    ],
    duration: '8 weeks from inquiry to first shipment',
    imageId: 'case-electronics',
  },
  {
    id: 'furniture-importer',
    client: 'North American Furniture Importer',
    industry: 'Home Goods',
    challenge: 'An American furniture company wanted to expand their product line with modern office furniture but had concerns about quality consistency and supplier reliability.',
    solution: 'We conducted comprehensive factory assessments, implemented a during-production monitoring system, and established strict quality checkpoints throughout the supply chain.',
    results: [
      'Verified 4 capable manufacturers',
      'Established consistent quality standards',
      'Reduced defect rate to under 1%',
      'Monthly shipments of 200+ containers',
    ],
    duration: '12 weeks for initial setup',
    imageId: 'case-furniture',
  },
  {
    id: 'sports-brand',
    client: 'Australian Sports Equipment Brand',
    industry: 'Sports & Recreation',
    challenge: 'A growing sports brand needed to source yoga mats and fitness accessories with specific material requirements and sustainability certifications.',
    solution: 'SSourcing China identified eco-friendly manufacturers meeting their certifications, coordinated testing for compliance, and set up a production monitoring system.',
    results: [
      'Found 2 certified eco-friendly suppliers',
      'All products meet EU environmental standards',
      '50% reduction in product development time',
      'Scaled from 5,000 to 50,000 units monthly',
    ],
    duration: '6 weeks from search to production',
    imageId: 'case-sports',
  },
  {
    id: 'textile-company',
    client: 'UK Fashion Retailer',
    industry: 'Textiles & Apparel',
    challenge: 'A British fashion retailer needed to diversify their supply chain away from a single supplier, requiring new manufacturing partners with competitive pricing.',
    solution: 'We conducted market research, verified potential suppliers, facilitated samples, and negotiated terms that met their strict cost and quality requirements.',
    results: [
      'Sourced 3 new manufacturing partners',
      '18% improvement in landed costs',
      'Full compliance with UK labor standards',
      'Year-round production capacity secured',
    ],
    duration: '16 weeks comprehensive sourcing program',
    imageId: 'case-textiles',
  },
];

const industries = [
  { name: 'Electronics', count: 45 },
  { name: 'Home Goods', count: 38 },
  { name: 'Textiles', count: 32 },
  { name: 'Machinery', count: 28 },
  { name: 'Packaging', count: 24 },
  { name: 'Sports', count: 19 },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Real stories of how we've helped businesses overcome China sourcing challenges 
              and build reliable supply chains.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-800">500+</div>
              <div className="text-sm text-slate-600">Suppliers Verified</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-800">50+</div>
              <div className="text-sm text-slate-600">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-800">10K+</div>
              <div className="text-sm text-slate-600">Inspections Done</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-800">98%</div>
              <div className="text-sm text-slate-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-800">28%</div>
              <div className="text-sm text-slate-600">Avg. Cost Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-800">50+</div>
              <div className="text-sm text-slate-600">Industries Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Industries We've Served
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="px-6 py-3 bg-slate-100 rounded-full text-slate-700"
              >
                <span className="font-medium">{industry.name}</span>
                <span className="text-slate-500 ml-2">({industry.count})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-blue-600 font-medium uppercase tracking-wide">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                    {study.client}
                  </h3>
                  
                  <div className="space-y-6 mt-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">The Challenge</h4>
                      <p className="text-slate-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Our Solution</h4>
                      <p className="text-slate-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{study.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className={`bg-slate-100 rounded-2xl p-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={study.client}
                    data-strk-img-id={`case-${study.imageId}`}
                    data-strk-img={`[case-${study.id}-title]`}
                    data-strk-img-ratio="16x10"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <h3 id={`case-${study.id}-title`} className="sr-only">{study.client}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg text-center">
            <blockquote className="text-xl lg:text-2xl text-slate-700 italic mb-8">
              "SSourcing China transformed our supply chain. Their on-ground presence, 
              quality inspections, and communication have been invaluable. We now source 
              70% of our products through their verified network."
            </blockquote>
            <div className="font-semibold text-slate-900">Michael Thompson</div>
            <div className="text-slate-600">Procurement Director, European Retailer</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Let us help you build a reliable, cost-effective supply chain from China.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-800"
              asChild
            >
              <Link to="/how-it-works">Learn Our Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
