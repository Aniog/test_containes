import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'US Home Decor Retailer Reduces Sourcing Costs by 30%',
      category: 'Home & Garden',
      client: 'US-based home decor retailer',
      challenge: 'A US home decor retailer was struggling with high sourcing costs and inconsistent quality from their existing suppliers. They needed to reduce costs while maintaining product quality to stay competitive.',
      solution: 'We conducted a comprehensive supplier audit, identified more cost-effective manufacturers with comparable quality, negotiated better pricing, and implemented a quality control process.',
      results: [
        '30% reduction in overall sourcing costs',
        '98% quality pass rate on inspections',
        'Diversified supplier base (reduced risk)',
        'Improved profit margins by 15%'
      ],
      timeline: '6 months',
      image: 'us-home-decor-retailer'
    },
    {
      id: 2,
      title: 'European E-commerce Seller Scales from 1,000 to 10,000 Units/Month',
      category: 'Electronics',
      client: 'European Amazon FBA seller',
      challenge: 'A European seller of electronic accessories wanted to scale production but faced quality inconsistencies and communication issues with their current supplier.',
      solution: 'We identified a more reliable manufacturer, set up quality control checkpoints at every production stage, and provided regular progress updates with photos and videos.',
      results: [
        'Scaled production 10x without quality issues',
        'Zero customer complaints about quality',
        'Reduced defect rate from 8% to 0.5%',
        'Maintained 5-star seller rating on Amazon'
      ],
      timeline: '8 months',
      image: 'european-ecommerce-seller'
    },
    {
      id: 3,
      title: 'Australian Startup Successfully Launches Fitness Product Line',
      category: 'Sports & Outdoor',
      client: 'Australian fitness startup',
      challenge: 'An Australian startup had a great product concept but no experience in manufacturing. They needed end-to-end support from prototyping to market launch.',
      solution: 'We guided them through supplier selection, sample development, tooling, production, quality control, and shipping coordination. Provided regular updates throughout the process.',
      results: [
        'Successful product launch on time and on budget',
        '98% positive customer reviews',
        'Secured repeat orders from retailers',
        'Expanded to 3 additional product variants'
      ],
      timeline: '10 months',
      image: 'australian-fitness-startup'
    },
    {
      id: 4,
      title: 'Canadian Fashion Brand Improves Supply Chain Transparency',
      category: 'Fashion & Accessories',
      client: 'Canadian sustainable fashion brand',
      challenge: 'A Canadian fashion brand needed to ensure ethical manufacturing and transparency in their supply chain to meet their brand values and customer expectations.',
      solution: 'We conducted thorough factory audits focusing on labor conditions, environmental compliance, and ethical practices. Provided documentation and regular monitoring.',
      results: [
        '100% supply chain transparency achieved',
        'Certified ethical manufacturing process',
        'Featured in sustainability publications',
        'Increased customer trust and brand loyalty'
      ],
      timeline: '4 months',
      image: 'canadian-fashion-brand'
    },
    {
      id: 5,
      title: 'German Automotive Parts Distributor Reduces Lead Time by 40%',
      category: 'Automotive',
      client: 'German automotive parts distributor',
      challenge: 'A German distributor faced long lead times and frequent stockouts due to inefficient sourcing and production delays from their Chinese suppliers.',
      solution: 'We restructured their supply chain, identified faster manufacturers, implemented production monitoring, and set up consolidated shipping to reduce transit time.',
      results: [
        'Reduced lead time from 90 to 54 days',
        'Eliminated stockouts for 12 months',
        'Reduced shipping costs by 20%',
        'Improved cash flow with better inventory management'
      ],
      timeline: '5 months',
      image: 'german-automotive-parts'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies & Success Stories
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Real examples of how we've helped businesses of all sizes successfully
              source from China. From cost reduction to quality improvement to scaling production.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="overflow-hidden">
                <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'}`}>
                  {/* Image/Visual Placeholder */}
                  <div className={`bg-gray-100 flex items-center justify-center p-12 ${index % 2 === 0 ? 'lg:order-first' : 'lg:order-last'}`}>
                    <div className="text-center">
                      <div className="text-6xl mb-4">
                        {index === 0 && '🏠'}
                        {index === 1 && '📱'}
                        {index === 2 && '💪'}
                        {index === 3 && '👕'}
                        {index === 4 && '🚗'}
                      </div>
                      <Badge className="mt-4">{study.category}</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-8">
                    <Badge className="mb-4">{study.category}</Badge>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {study.title}
                    </h2>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">Client</h3>
                      <p className="text-gray-600">{study.client}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">Challenge</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">Our Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-700 mb-3">Results</h3>
                      <div className="space-y-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Timeline:</span> {study.timeline}
                      </div>
                      <div className="text-sm text-blue-600 font-medium">
                        View Full Case Study →
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Successful Projects' },
              { number: '50+', label: 'Countries Served' },
              { number: '98%', label: 'Client Satisfaction Rate' },
              { number: '30%', label: 'Average Cost Reduction' }
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Every successful sourcing project starts with a conversation. Contact us today
            to discuss your needs and see how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8">
                Learn About Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
