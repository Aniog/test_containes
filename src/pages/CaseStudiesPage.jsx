import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const caseStudies = [
  {
    id: 'electronics-us-retailer',
    industry: 'Consumer Electronics',
    client: 'US Retail Chain',
    title: 'Electronics Manufacturer for US Retailer',
    challenge: 'A US retailer needed a reliable manufacturer for Bluetooth speakers with strict quality requirements and a tight timeline for the holiday season.',
    solution: 'We identified 3 qualified factories in Shenzhen and Dongguan, conducted on-site audits, and managed the entire production process including tooling, sampling, and mass production.',
    result: 'Delivered 50,000 units on time with a 98.5% pass rate on pre-shipment inspection. The client reported zero quality complaints from end customers.',
    metrics: [
      { label: 'Units Delivered', value: '50,000' },
      { label: 'Quality Pass Rate', value: '98.5%' },
      { label: 'On-Time Delivery', value: 'Yes' },
    ],
  },
  {
    id: 'packaging-european-brand',
    industry: 'Packaging',
    client: 'European Cosmetics Brand',
    title: 'Custom Packaging for European Brand',
    challenge: 'A European cosmetics brand needed custom packaging with specific material requirements, eco-friendly certifications, and consistent print quality across large volumes.',
    solution: 'We sourced 5 packaging suppliers, coordinated sample development with multiple iterations, and implemented a strict quality control process for print consistency and material compliance.',
    result: 'Reduced packaging costs by 30% while meeting all quality and sustainability standards. The supplier relationship has continued for over 2 years.',
    metrics: [
      { label: 'Cost Reduction', value: '30%' },
      { label: 'Partnership Duration', value: '2+ Years' },
      { label: 'Eco-Certified', value: 'Yes' },
    ],
  },
  {
    id: 'furniture-australian',
    industry: 'Home & Garden',
    client: 'Australian Distributor',
    title: 'Furniture Sourcing for Australian Distributor',
    challenge: 'An Australian distributor needed a furniture supplier capable of handling large-volume orders with consistent quality and compliance with Australian safety standards.',
    solution: 'We verified factory capacity, negotiated pricing, and implemented a multi-stage inspection process including material checks, assembly verification, and final quality inspection.',
    result: 'Successfully delivered 3 container loads with zero quality complaints from end customers. The client has since expanded their product range through our sourcing service.',
    metrics: [
      { label: 'Containers Delivered', value: '3' },
      { label: 'Quality Complaints', value: '0' },
      { label: 'Product Range Expanded', value: 'Yes' },
    ],
  },
  {
    id: 'apparel-uk-brand',
    industry: 'Apparel & Textiles',
    client: 'UK Fashion Brand',
    title: 'Custom Garment Production for UK Fashion Brand',
    challenge: 'A UK fashion brand needed a manufacturer for a new clothing line with specific fabric requirements, custom patterns, and tight quality standards for stitching and finishing.',
    solution: 'We identified 4 garment factories, coordinated fabric sourcing, managed pattern development, and conducted during-production and pre-shipment inspections.',
    result: 'Delivered the first collection on schedule with a 97% quality pass rate. The brand has since placed repeat orders for subsequent seasons.',
    metrics: [
      { label: 'Quality Pass Rate', value: '97%' },
      { label: 'On-Time Delivery', value: 'Yes' },
      { label: 'Repeat Orders', value: 'Yes' },
    ],
  },
  {
    id: 'machinery-german',
    industry: 'Machinery & Industrial',
    client: 'German Engineering Firm',
    title: 'Industrial Parts Sourcing for German Engineering Firm',
    challenge: 'A German engineering firm needed precision-machined parts with tight tolerances and specific material certifications for their industrial equipment.',
    solution: 'We sourced specialized CNC machining factories, verified their equipment capabilities and quality certifications, and implemented a detailed inspection protocol with measurement reports.',
    result: 'All parts met specified tolerances. The client has established a long-term supply relationship with the verified factory.',
    metrics: [
      { label: 'Tolerance Compliance', value: '100%' },
      { label: 'Material Certified', value: 'Yes' },
      { label: 'Long-term Partnership', value: 'Yes' },
    ],
  },
  {
    id: 'beauty-canadian',
    industry: 'Beauty & Personal Care',
    client: 'Canadian Beauty Startup',
    title: 'Skincare Product Sourcing for Canadian Startup',
    challenge: 'A Canadian beauty startup needed a manufacturer for a new skincare line with specific formulations, packaging requirements, and regulatory compliance for the Canadian market.',
    solution: 'We identified GMP-certified cosmetics manufacturers, coordinated formula development, managed packaging design implementation, and ensured all products met Canadian regulatory requirements.',
    result: 'Successfully launched the product line with full regulatory compliance. The startup has since expanded to 8 SKUs through our sourcing support.',
    metrics: [
      { label: 'SKUs Launched', value: '8' },
      { label: 'Regulatory Compliance', value: 'Full' },
      { label: 'GMP Certified', value: 'Yes' },
    ],
  },
];

export default function CaseStudiesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Real examples of how we've helped global buyers source successfully from China. Each case shows the challenge, our approach, and the results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div
                    className="rounded-xl overflow-hidden aspect-video bg-gray-100 mb-6"
                    data-strk-bg-id={`case-bg-${cs.id}`}
                    data-strk-bg={`[case-title-${i}] [case-industry-${i}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  />
                  <h3 id={`case-title-${i}`} className="sr-only">{cs.title}</h3>
                  <p id={`case-industry-${i}`} className="sr-only">{cs.industry}</p>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="text-sm text-accent-500 font-semibold mb-2">{cs.industry}</div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary-900 mb-4">{cs.title}</h2>
                  <p className="text-sm text-gray-500 mb-6">Client: {cs.client}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-1">Challenge</h3>
                      <p className="text-gray-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-1">Our Solution</h3>
                      <p className="text-gray-600 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-1">Results</h3>
                      <p className="text-gray-600 leading-relaxed">{cs.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {cs.metrics.map((metric, j) => (
                      <div key={j} className="bg-gray-50 rounded-lg p-4 text-center">
                        <div className="text-lg font-bold text-primary-900">{metric.value}</div>
                        <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 text-center">
              <Users className="w-10 h-10 text-primary-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary-900 mb-2">500+</div>
              <div className="text-gray-600">Global Clients Served</div>
            </div>
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 text-center">
              <TrendingUp className="w-10 h-10 text-primary-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary-900 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 text-center">
              <Award className="w-10 h-10 text-primary-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary-900 mb-2">12+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Let Us Help You Source Successfully</h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're sourcing your first product or expanding your supplier base, we're here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
