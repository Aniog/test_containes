import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  ArrowRight, BarChart3, TrendingUp, Users, Globe, Clock,
  CheckCircle, Quote
} from 'lucide-react';

const caseStudies = [
  {
    id: 'us-retailer-home-goods',
    titleId: 'case-us-retailer-title',
    descId: 'case-us-retailer-desc',
    client: 'US Home Goods Retailer',
    industry: 'Home & Garden',
    location: 'United States',
    challenge: 'A mid-size US retailer was sourcing from multiple agents with inconsistent quality and rising costs. They needed to consolidate their supply chain and reduce landed costs while maintaining product quality.',
    solution: 'We conducted a comprehensive supplier audit, consolidated their product categories under 8 verified factories, implemented quality inspection protocols, and negotiated better pricing through volume commitments.',
    results: [
      { metric: '35%', label: 'Cost Reduction' },
      { metric: '98%', label: 'Quality Pass Rate' },
      { metric: '8', label: 'Verified Suppliers' },
      { metric: '40%', label: 'Faster Lead Times' },
    ],
    quote: 'SSourcing China transformed our supply chain. We went from dealing with unreliable suppliers to having a streamlined, cost-effective sourcing operation. Their factory verification process gave us confidence we never had before.',
    quoteAuthor: 'Michael Chen, VP of Procurement',
    imageQuery: 'home goods retail products store shelves',
  },
  {
    id: 'european-electronics-brand',
    titleId: 'case-european-electronics-title',
    descId: 'case-european-electronics-desc',
    client: 'European Electronics Brand',
    industry: 'Consumer Electronics',
    location: 'Germany',
    challenge: 'A European electronics brand wanted to launch their own private-label product line but had no experience sourcing from China. They needed end-to-end support from product development to mass production.',
    solution: 'We managed the entire OEM process including product design consultation, factory selection, prototype development, tooling, and mass production. Our team coordinated between the design team and factory engineers to ensure specifications were met.',
    results: [
      { metric: '6 months', label: 'Launch Timeline' },
      { metric: '3 SKUs', label: 'Products Launched' },
      { metric: 'CE/FCC', label: 'Certifications Obtained' },
      { metric: '50K units', label: 'First Order' },
    ],
    quote: 'From concept to delivery in 6 months — that would have been impossible without SSourcing China. They understood our technical requirements and found the right factory to bring our vision to life.',
    quoteAuthor: 'Thomas Müller, CEO',
    imageQuery: 'consumer electronics products brand packaging',
  },
  {
    id: 'australian-building-materials',
    titleId: 'case-australian-materials-title',
    descId: 'case-australian-materials-desc',
    client: 'Australian Building Materials Importer',
    industry: 'Building Materials',
    location: 'Australia',
    challenge: 'An Australian building materials importer was experiencing inconsistent product quality from their existing Chinese suppliers. Quality rejections were costing them significant money and damaging customer relationships.',
    solution: 'We conducted thorough factory audits of their existing suppliers, replaced underperforming ones with verified alternatives, and implemented a multi-stage quality inspection process covering raw materials, in-production, and pre-shipment stages.',
    results: [
      { metric: '98.5%', label: 'Quality Pass Rate' },
      { metric: '70%', label: 'Fewer Returns' },
      { metric: '15 to 5', label: 'Supplier Consolidation' },
      { metric: '$200K+', label: 'Annual Savings' },
    ],
    quote: 'The quality issues we were facing were threatening our business. SSourcing China not only fixed our immediate problems but built a quality system that prevents issues from happening in the first place.',
    quoteAuthor: 'Sarah Williams, Operations Director',
    imageQuery: 'building materials tiles flooring construction',
  },
  {
    id: 'canadian-promotional-products',
    titleId: 'case-canadian-promo-title',
    descId: 'case-canadian-promo-desc',
    client: 'Canadian Promotional Products Company',
    industry: 'Promotional Products',
    location: 'Canada',
    challenge: 'A promotional products company needed reliable sourcing for custom-branded merchandise with tight deadlines for corporate events. Previous suppliers missed deadlines and delivered inconsistent branding quality.',
    solution: 'We established a network of vetted suppliers for different promotional product categories, implemented standardized quality checks for branding accuracy, and created a streamlined ordering process with guaranteed delivery timelines.',
    results: [
      { metric: '99%', label: 'On-Time Delivery' },
      { metric: '100+', label: 'Products Sourced' },
      { metric: '50+', label: 'Corporate Clients' },
      { metric: '25%', label: 'Margin Improvement' },
    ],
    quote: 'Our corporate clients expect perfection on tight deadlines. SSourcing China delivers exactly that. They have become an essential part of our business operations.',
    quoteAuthor: 'David Thompson, Founder',
    imageQuery: 'promotional products branded merchandise corporate gifts',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-navy text-white py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <span className="badge bg-white/10 text-white mb-4">Success Stories</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Real results from real clients. See how we have helped businesses around the world successfully source products from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="space-y-20 lg:space-y-32">
            {caseStudies.map((study, index) => (
              <div key={study.id} id={study.id} className="scroll-mt-24">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="badge bg-primary-100 text-primary-700">{study.industry}</span>
                      <span className="text-sm text-slate-500">{study.location}</span>
                    </div>
                    <h2 id={study.titleId} className="text-2xl md:text-3xl font-bold text-navy mb-2">{study.client}</h2>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-navy mb-2">Challenge</h3>
                      <p id={study.descId} className="text-slate-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-navy mb-2">Solution</h3>
                      <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.map((result) => (
                        <div key={result.label} className="bg-slate-50 rounded-xl p-4 text-center">
                          <p className="text-2xl font-bold text-primary-600">{result.metric}</p>
                          <p className="text-sm text-slate-500">{result.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="bg-primary-50 rounded-xl p-6 border-l-4 border-primary-500">
                      <Quote className="w-8 h-8 text-primary-300 mb-3" />
                      <p className="text-slate-700 italic mb-3 leading-relaxed">{study.quote}</p>
                      <p className="text-sm font-semibold text-primary-700">— {study.quoteAuthor}</p>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="rounded-2xl overflow-hidden shadow-lg sticky top-24">
                      <img
                        data-strk-img-id={`case-study-${study.id}-img`}
                        data-strk-img={`[${study.descId}] [${study.titleId}] products business`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={study.client}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>

                {index < caseStudies.length - 1 && (
                  <div className="border-b border-slate-200 mt-20 lg:mt-32" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Success Story Starts Here</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Ready to achieve similar results? Tell us about your sourcing needs and let's discuss how we can help.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4 group">
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
