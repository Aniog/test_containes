import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Package, DollarSign } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const caseStudies = [
    {
      id: 'homedirect',
      title: 'US Retailer Saves 35% on Electronics Sourcing',
      client: 'HomeTech Direct',
      industry: 'Electronics',
      location: 'United States',
      duration: '12 months',
      result: 'Found reliable OEM partner and reduced costs significantly while improving quality.',
      challenge: 'HomeTech Direct was struggling with inconsistent quality from their existing suppliers and rising costs. They needed a reliable partner who could deliver consistent quality at competitive prices.',
      solution: 'We conducted a thorough supplier search, verified multiple candidates, and facilitated factory audits. We identified an established OEM manufacturer with excellent quality control systems and negotiated favorable terms.',
      results: [
        { label: 'Cost Reduction', value: '35%', icon: <DollarSign className="w-5 h-5" /> },
        { label: 'Quality Issues', value: 'Down 90%', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'On-Time Delivery', value: '98%', icon: <Package className="w-5 h-5" /> },
      ],
      image: 'electronics warehouse inspection quality'
    },
    {
      id: 'nordic',
      title: 'European Brand Expands with Apparel Line',
      client: 'Nordic Threads',
      industry: 'Apparel',
      location: 'Sweden',
      duration: '8 months',
      result: 'Successfully launched 3 product lines with zero quality issues in first year.',
      challenge: 'Nordic Threads wanted to launch an apparel line but had no experience with China manufacturing. They needed guidance on supplier selection, quality standards, and logistics.',
      solution: 'We provided end-to-end support including supplier matching, sample development, production monitoring, and quality inspections. We set up rigorous QC protocols tailored to textile industry standards.',
      results: [
        { label: 'Product Lines', value: '3', icon: <Package className="w-5 h-5" /> },
        { label: 'Defect Rate', value: '0.5%', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'Client Satisfaction', value: '100%', icon: <Users className="w-5 h-5" /> },
      ],
      image: 'garment factory quality inspection textile'
    },
    {
      id: 'culinary',
      title: 'Startup Launches Kitchenware Collection',
      client: 'Culinary Start',
      industry: 'Home Goods',
      location: 'Australia',
      duration: '6 months',
      result: 'From concept to delivery in 4 months with full QC coverage.',
      challenge: 'A kitchenware startup needed to bring their product ideas to market quickly. They had limited capital and needed to minimize risk while maintaining quality standards.',
      solution: 'We helped develop detailed specifications, sourced suitable manufacturers, managed sample iterations, and implemented a comprehensive quality control process including pre-shipment inspection.',
      results: [
        { label: 'Time to Market', value: '4 months', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'Products Launched', value: '12 SKUs', icon: <Package className="w-5 h-5" /> },
        { label: 'First Order Value', value: '$85K', icon: <DollarSign className="w-5 h-5" /> },
      ],
      image: 'kitchenware manufacturing factory production'
    },
    {
      id: 'medtech',
      title: 'Medical Device Company Ensures Compliance',
      client: 'MedTech Solutions',
      industry: 'Medical Devices',
      location: 'Germany',
      duration: '18 months',
      result: 'Achieved CE certification and successfully launched medical device line.',
      challenge: 'MedTech needed to source components for medical devices that met strict EU regulatory requirements. Finding suppliers with proper certifications and quality systems was critical.',
      solution: 'We identified suppliers with ISO 13485 certification, conducted thorough factory audits focusing on quality management systems, and coordinated with regulatory consultants for compliance documentation.',
      results: [
        { label: 'Certification Time', value: '12 months', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'Suppliers Verified', value: '8', icon: <Users className="w-5 h-5" /> },
        { label: 'Compliance Rate', value: '100%', icon: <CheckCircle className="w-5 h-5" /> },
      ],
      image: 'medical device manufacturing clean room'
    },
    {
      id: 'outdoor',
      title: 'Outdoor Brand Scales Production Successfully',
      client: 'Peak Adventures',
      industry: 'Sports & Outdoors',
      location: 'Canada',
      duration: '24 months',
      result: 'Scaled from small batches to 50,000 units monthly without quality issues.',
      challenge: 'Peak Adventures had seasonal demand spikes and needed a supplier capable of scaling production while maintaining consistent quality during peak seasons.',
      solution: 'We selected a manufacturer with flexible production capacity, implemented scalable quality control processes, and established buffer stock strategies to handle demand fluctuations.',
      results: [
        { label: 'Production Scale', value: '50K/month', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'Quality Consistency', value: '99%', icon: <CheckCircle className="w-5 h-5" /> },
        { label: 'Cost Savings', value: '28%', icon: <DollarSign className="w-5 h-5" /> },
      ],
      image: 'sports equipment manufacturing factory'
    },
    {
      id: 'beauty',
      title: 'Beauty Brand Launches Private Label Line',
      client: 'Glow Beauty',
      industry: 'Cosmetics',
      location: 'United Kingdom',
      duration: '10 months',
      result: 'Launched 25 SKU private label collection with full regulatory compliance.',
      challenge: 'Glow Beauty wanted to enter the private label market but needed guidance on formulation, packaging, and regulatory compliance across different markets.',
      solution: 'We connected them with established cosmetics manufacturers, coordinated formulation development, managed packaging procurement, and ensured compliance with UK and EU cosmetic regulations.',
      results: [
        { label: 'Products Launched', value: '25 SKUs', icon: <Package className="w-5 h-5" /> },
        { label: 'Market Compliance', value: '100%', icon: <CheckCircle className="w-5 h-5" /> },
        { label: 'ROI in Year 1', value: '180%', icon: <TrendingUp className="w-5 h-5" /> },
      ],
      image: 'cosmetics manufacturing factory production'
    },
  ];

  const industries = [
    { name: 'Electronics', count: 45 },
    { name: 'Apparel & Textiles', count: 38 },
    { name: 'Home Goods', count: 32 },
    { name: 'Machinery', count: 28 },
    { name: 'Consumer Products', count: 52 },
    { name: 'Medical Devices', count: 15 },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A7B] text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge badge-accent mb-4">Success Stories</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Real results for real businesses. See how we've helped clients 
              overcome sourcing challenges and achieve their goals.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-[#F8FAFC] rounded-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="badge badge-primary">{study.industry}</span>
                      <span className="text-sm text-[#6B7280]">{study.location}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{study.title}</h2>
                    <p className="text-[#6B7280] mb-6">
                      <strong>Client:</strong> {study.client} | <strong>Duration:</strong> {study.duration}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Challenge</h3>
                      <p className="text-[#6B7280] text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Solution</h3>
                      <p className="text-[#6B7280] text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.map((result, i) => (
                        <div key={i} className="bg-white rounded-lg p-4 text-center">
                          <div className="w-10 h-10 bg-[#EFF3F8] rounded-full flex items-center justify-center mx-auto mb-2 text-[#1E3A5F]">
                            {result.icon}
                          </div>
                          <div className="text-xl font-bold text-[#1E3A5F]">{result.value}</div>
                          <div className="text-xs text-[#6B7280]">{result.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-medium">
                        <CheckCircle className="w-5 h-5 inline mr-2" />
                        {study.result}
                      </p>
                    </div>
                  </div>
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img
                      alt={study.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      data-strk-img-id={`case-${study.id}`}
                      data-strk-img={`[case-${study.id}-title] factory inspection`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <h3 id={`case-${study.id}-title`} className="sr-only">{study.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-24 bg-[#EFF3F8]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-[#6B7280]">
              We have experience across a wide range of industries with verified supplier networks in each sector.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 flex items-center justify-between">
                <span className="font-semibold">{industry.name}</span>
                <span className="badge badge-accent">{industry.count}+ projects</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#1E3A5F] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results. Contact us for a free consultation.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
