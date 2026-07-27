import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/shared/SectionHeading.jsx';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      id: 'case-pcb-retailer',
      title: 'US Electronics Retailer Reduces Component Costs by 30%',
      category: 'Electronics',
      client: 'Mid-size electronics retailer, United States',
      challenge: 'The client was sourcing PCB components from a single supplier at high prices with inconsistent quality. They needed to diversify suppliers and reduce costs without compromising on quality standards.',
      solution: 'We identified 5 qualified PCB manufacturers in Shenzhen, conducted factory audits, arranged samples, and negotiated pricing. After testing, we selected 2 primary suppliers with backup options.',
      results: ['30% reduction in unit costs', 'Zero quality defects in first 6 months', 'Lead time reduced from 45 to 28 days', 'Dual-supplier strategy for risk mitigation'],
      imgId: 'cs-pcb-retailer-a1b2c3',
    },
    {
      id: 'case-furniture-brand',
      title: 'Australian Furniture Brand Launches New Product Line',
      category: 'Furniture',
      client: 'Premium furniture brand, Australia',
      challenge: 'The client wanted to launch a new line of custom-designed office furniture but had no existing supplier relationships in China and was concerned about quality control for complex designs.',
      solution: 'We sourced 3 specialized furniture manufacturers in Foshan, managed the sampling process over 8 weeks, and implemented a rigorous QC program with inspections at every production milestone.',
      results: ['5,000 units produced with 99.8% pass rate', 'Product launched on schedule', 'Ongoing partnership established', '40% cost savings vs. domestic manufacturing'],
      imgId: 'cs-furniture-brand-d4e5f6',
    },
    {
      id: 'case-fashion-scale',
      title: 'European Fashion Brand Scales Production 5x',
      category: 'Apparel',
      client: 'Fast-growing fashion brand, Germany',
      challenge: 'Rapid growth meant the client needed to scale from 1,000 to 5,000 units per month across multiple SKUs while maintaining consistent quality and meeting tight seasonal deadlines.',
      solution: 'We onboarded 3 additional garment factories, implemented standardized QC procedures across all suppliers, and set up a production scheduling system to manage multiple concurrent orders.',
      results: ['Scaled from 1,000 to 5,000 units/month', 'Consistent quality across 3 factories', 'On-time delivery rate of 96%', 'Reduced per-unit cost by 18%'],
      imgId: 'cs-fashion-scale-g7h8i9',
    },
    {
      id: 'case-packaging-startup',
      title: 'UK Startup Develops Custom Eco-Packaging',
      category: 'Packaging',
      client: 'Sustainable packaging startup, United Kingdom',
      challenge: 'The startup needed to develop custom biodegradable packaging with specific material requirements and certifications, but had limited experience working with Chinese manufacturers.',
      solution: 'We identified specialized eco-packaging manufacturers, managed the R&D sampling process, verified environmental certifications, and coordinated small initial orders to validate quality.',
      results: ['Custom packaging developed in 10 weeks', 'All environmental certifications verified', 'MOQ negotiated down by 60%', 'Successful pilot order of 10,000 units'],
      imgId: 'cs-packaging-startup-j1k2l3',
    },
    {
      id: 'case-auto-distributor',
      title: 'Canadian Auto Parts Distributor Finds Reliable Supply',
      category: 'Auto Parts',
      client: 'Auto parts distributor, Canada',
      challenge: 'Previous supplier had quality issues and missed deliveries. The client needed a reliable, certified manufacturer for aftermarket brake components with strict safety standards.',
      solution: 'We conducted extensive supplier research focusing on IATF 16949 certified factories, performed detailed audits, and implemented a comprehensive testing protocol before approving the new supplier.',
      results: ['IATF 16949 certified supplier secured', 'Zero safety-related defects', 'Consistent monthly deliveries for 12+ months', '22% cost improvement over previous supplier'],
      imgId: 'cs-auto-distributor-m4n5o6',
    },
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Case Studies
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Real results from real sourcing projects. See how we've helped businesses source successfully from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {cases.map((item, index) => (
              <div key={item.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 aspect-[16/9] lg:aspect-auto">
                    <img
                      alt={item.title}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.id}-challenge] [${item.id}-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <span className="inline-block text-xs font-medium text-primary bg-primary-light px-2.5 py-1 rounded-full mb-3">
                      {item.category}
                    </span>
                    <h2 id={`${item.id}-title`} className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-neutral-500 mb-4">{item.client}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900 mb-1">Challenge</h4>
                        <p id={`${item.id}-challenge`} className="text-sm text-neutral-500 leading-relaxed">{item.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900 mb-1">Our Solution</h4>
                        <p className="text-sm text-neutral-500 leading-relaxed">{item.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 mb-2">Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.results.map((result, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-neutral-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-neutral-500 text-lg mb-8">
            Every sourcing project is unique. Tell us about your requirements and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-accent-dark transition-colors text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
