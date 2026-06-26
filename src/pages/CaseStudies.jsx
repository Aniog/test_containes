import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Star,
  Quote,
  Factory,
  Shield,
  Truck,
  Search,
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Electronics Manufacturer Reduces Costs by 30%',
      client: 'US-based Electronics Company',
      industry: 'Electronics',
      challenge: 'A US electronics company was struggling with high costs and inconsistent quality from their existing Chinese suppliers. They needed to find more cost-effective manufacturers without compromising on quality.',
      solution: 'We identified and verified 5 new suppliers in the Shenzhen electronics cluster. Conducted factory audits, negotiated better pricing, and implemented a quality inspection program.',
      results: [
        '30% reduction in unit costs',
        'Quality defect rate reduced from 8% to 1.5%',
        'On-time delivery improved from 85% to 98%',
        'Established 2 long-term supplier partnerships',
      ],
      metrics: { cost: '30%', quality: '1.5%', delivery: '98%' },
      testimonial: 'SSourcing China transformed our supply chain. We now have reliable suppliers who deliver consistent quality at better prices.',
      author: 'John Smith, Procurement Director',
    },
    {
      id: 2,
      title: 'Home Goods Retailer Expands Product Line',
      client: 'European Home Goods Retailer',
      industry: 'Home & Garden',
      challenge: "A European home goods retailer wanted to expand their product line with unique items from China but didn't have the resources to find and vet suppliers.",
      solution: 'We sourced 12 new product categories, verified 8 factories, and managed the entire production and shipping process for their first container order.',
      results: [
        '12 new product categories added in 3 months',
        'First container order of 5,000 units delivered on time',
        'Product margins increased by 25%',
        'Established ongoing sourcing relationship',
      ],
      metrics: { products: '12', units: '5,000', margin: '25%' },
      testimonial: 'The team at SSourcing China helped us expand our product line faster than we thought possible. Their local expertise is invaluable.',
      author: 'Maria Garcia, Product Manager',
    },
    {
      id: 3,
      title: 'Automotive Parts Distributor Saves $50K',
      client: 'Canadian Auto Parts Distributor',
      industry: 'Automotive',
      challenge: 'A Canadian auto parts distributor was paying premium prices for parts and needed to find more cost-effective suppliers without compromising on quality and compliance.',
      solution: 'We identified 3 new suppliers with proper automotive certifications, negotiated better pricing, and implemented a strict quality control program.',
      results: [
        '$50,000 savings on first container order',
        'All suppliers ISO 9001 certified',
        'Quality inspection program reduced returns by 40%',
        'Established 2-year supply agreements',
      ],
      metrics: { savings: '$50K', certification: 'ISO 9001', returns: '-40%' },
      testimonial: 'The savings were significant, but the quality improvement was even more valuable. Our customers have noticed the difference.',
      author: 'David Chen, Operations Manager',
    },
    {
      id: 4,
      title: 'Fashion Brand Launches New Collection',
      client: 'Australian Fashion Brand',
      industry: 'Textiles & Apparel',
      challenge: 'An Australian fashion brand needed to find manufacturers for their new sustainable clothing line but struggled to find suppliers who could meet their ethical and quality standards.',
      solution: 'We sourced 4 textile manufacturers with sustainable practices, arranged factory visits, and managed the entire production process for their first collection.',
      results: [
        '4 sustainable suppliers identified and verified',
        'First collection of 2,000 units delivered on time',
        'All suppliers met ethical sourcing standards',
        'Collection received positive market response',
      ],
      metrics: { suppliers: '4', units: '2,000', standard: 'Ethical' },
      testimonial: 'SSourcing China understood our commitment to sustainability and helped us find suppliers who share our values.',
      author: 'Emma Wilson, Creative Director',
    },
    {
      id: 5,
      title: 'Industrial Equipment Buyer Finds Reliable Supplier',
      client: 'German Industrial Equipment Buyer',
      industry: 'Industrial',
      challenge: 'A German industrial equipment buyer needed to find a reliable manufacturer for specialized machinery parts but had concerns about quality and technical specifications.',
      solution: 'We identified 2 manufacturers with the required technical capabilities, conducted detailed factory audits, and managed the production and quality control process.',
      results: [
        '2 technically capable suppliers identified',
        'First order of 100 units passed all quality tests',
        'Established long-term partnership with primary supplier',
        'Technical specifications met exactly',
      ],
      metrics: { suppliers: '2', units: '100', quality: '100%' },
      testimonial: 'The technical expertise of the SSourcing China team was impressive. They understood our requirements and found the right manufacturer.',
      author: 'Hans Mueller, Engineering Manager',
    },
    {
      id: 6,
      title: 'E-commerce Seller Scales Operations',
      client: 'UK E-commerce Seller',
      industry: 'Consumer Goods',
      challenge: 'A UK e-commerce seller was struggling to scale their operations due to unreliable suppliers and inconsistent product quality.',
      solution: 'We streamlined their supplier base, implemented quality control processes, and optimized their shipping and logistics.',
      results: [
        'Supplier base reduced from 12 to 3 reliable partners',
        'Product return rate reduced from 15% to 3%',
        'Shipping costs reduced by 20%',
        'Order fulfillment rate improved to 99%',
      ],
      metrics: { suppliers: '3', returns: '3%', fulfillment: '99%' },
      testimonial: 'SSourcing China helped us scale from a small operation to a professional e-commerce business. Their support has been invaluable.',
      author: 'Sarah Johnson, Founder',
    },
  ];

  const industries = [
    'Electronics',
    'Textiles & Apparel',
    'Home & Garden',
    'Industrial Equipment',
    'Automotive',
    'Toys & Gifts',
    'Health & Beauty',
    'Sports & Outdoors',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Real success stories from businesses we've helped source products from China. See how our services have delivered measurable results for companies across various industries.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Start Your Success Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
              <div className="text-sm text-slate-600">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">$10M+</div>
              <div className="text-sm text-slate-600">Products Sourced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-sm text-slate-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">98%</div>
              <div className="text-sm text-slate-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Image/Visual */}
                  <div className="lg:col-span-1 bg-slate-100 relative">
                    <div className="aspect-video lg:aspect-auto lg:h-full">
                      <img
                        data-strk-img-id={`case-study-${study.id}-img`}
                        data-strk-img={`[case-study-${study.id}-title] [case-study-${study.id}-industry]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-sm font-medium text-slate-900">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                      <CardDescription className="text-base">{study.client}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 space-y-6">
                      {/* Challenge */}
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                          <Search className="h-4 w-4" />
                          Challenge
                        </h3>
                        <p className="text-slate-600">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                          <Factory className="h-4 w-4" />
                          Solution
                        </h3>
                        <p className="text-slate-600">{study.solution}</p>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          Results
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-slate-700">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                        {Object.entries(study.metrics).map(([key, value]) => (
                          <div key={key} className="text-center px-4 py-2 bg-slate-50 rounded-lg">
                            <div className="text-xl font-bold text-slate-900">{value}</div>
                            <div className="text-xs text-slate-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <Quote className="h-6 w-6 text-slate-400 mb-2" />
                        <p className="text-slate-700 italic mb-2">"{study.testimonial}"</p>
                        <p className="text-sm text-slate-600">— {study.author}</p>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We have experience sourcing products across a wide range of industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-slate-200 bg-slate-50 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-medium text-slate-900">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your sourcing needs. We'll help you achieve similar results for your business.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
