import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, FileText, TrendingUp, Shield, Clock, 
  Globe, CheckCircle, Star
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    company: 'TechMart USA',
    industry: 'Electronics',
    country: 'USA',
    challenge: 'A US retailer needed to source consumer electronics at competitive prices while ensuring consistent quality for their retail stores across America.',
    solution: 'SSourcing China conducted a comprehensive supplier search, verified 15 factories, and performed thorough quality inspections throughout production.',
    results: [
      '15% cost reduction compared to previous supplier',
      'Zero quality issues in first year',
      'On-time delivery rate of 98%',
      'Successful launch of 50 new products'
    ],
    metrics: {
      orderValue: '$500K+',
      savings: '15%',
      timeline: '6 months',
      suppliers: '15 verified'
    },
    testimonial: {
      quote: "SSourcing China transformed our supply chain. Their factory verification saved us from a potential disaster, and their QC team ensures every shipment meets our standards.",
      author: 'Michael Chen',
      title: 'Procurement Director',
      company: 'TechMart USA'
    },
    image: 'electronics'
  },
  {
    id: 2,
    company: 'HomeStyle Europe',
    industry: 'Furniture',
    country: 'UK',
    challenge: 'A European home goods brand wanted to launch a new furniture line but had no experience sourcing from China. They needed a partner who could handle everything.',
    solution: 'We provided end-to-end sourcing services including supplier selection, factory verification, sample management, production monitoring, and shipping coordination.',
    results: [
      'Zero defects in first shipment',
      '30% below budget production costs',
      'Smooth customs clearance in EU',
      'Long-term supplier partnership established'
    ],
    metrics: {
      orderValue: '$350K',
      savings: '30%',
      timeline: '8 months',
      suppliers: '8 verified'
    },
    testimonial: {
      quote: "Working with SSourcing China gave us confidence to expand our product line. Their professional approach and attention to detail are exceptional.",
      author: 'Sarah Williams',
      title: 'CEO',
      company: 'HomeStyle Europe'
    },
    image: 'furniture'
  },
  {
    id: 3,
    company: 'OutdoorGear Australia',
    industry: 'Sports & Outdoor',
    country: 'Australia',
    challenge: 'An Australian startup needed to source outdoor sports equipment for their new retail brand. They had limited capital and needed cost-effective solutions.',
    solution: 'We identified manufacturers offering the best value, negotiated favorable payment terms, and coordinated quality inspections at each production stage.',
    results: [
      '10,000 units delivered on time',
      '25% lower than competitor quotes',
      '100% pass rate on quality inspections',
      'Business now expanded to 3 product lines'
    ],
    metrics: {
      orderValue: '$180K',
      savings: '25%',
      timeline: '4 months',
      suppliers: '5 verified'
    },
    testimonial: {
      quote: "The quality inspection service is worth every penny. They've caught issues before shipment that would have cost us dearly. True partners in our success.",
      author: 'David Park',
      title: 'Operations Manager',
      company: 'OutdoorGear Australia'
    },
    image: 'sports'
  },
  {
    id: 4,
    company: 'FashionFirst Canada',
    industry: 'Textiles & Apparel',
    country: 'Canada',
    challenge: 'A Canadian fashion brand needed to source sustainable textiles and apparel with fair trade certifications for their eco-friendly line.',
    solution: 'We verified factories with proper certifications, conducted ethical sourcing audits, and ensured compliance with international labor standards.',
    results: [
      'GOTS certified suppliers identified',
      'Successful ethical audit completion',
      'Premium pricing achieved in market',
      'Strong brand positioning established'
    ],
    metrics: {
      orderValue: '$220K',
      savings: '20%',
      timeline: '5 months',
      suppliers: '6 verified'
    },
    image: 'textiles'
  },
  {
    id: 5,
    company: 'MedTech Germany',
    industry: 'Machinery',
    country: 'Germany',
    challenge: 'A German medical equipment company needed precision parts manufactured to strict EU medical standards.',
    solution: 'We found ISO 13485 certified manufacturers, coordinated technical specifications, and performed rigorous quality control.',
    results: [
      'All parts passed CE certification',
      'Precision tolerance requirements met',
      'Complete documentation provided',
      'Ongoing partnership established'
    ],
    metrics: {
      orderValue: '$450K',
      savings: '35%',
      timeline: '10 months',
      suppliers: '4 verified'
    },
    image: 'machinery'
  },
  {
    id: 6,
    company: 'ToyWorld Singapore',
    industry: 'Toys & Gifts',
    country: 'Singapore',
    challenge: 'A Singaporean toy distributor wanted to create custom branded toys for their retail chain.',
    solution: 'We coordinated with factories for custom tooling, managed the entire production process, and ensured safety compliance.',
    results: [
      'Custom designs successfully produced',
      'All safety tests passed',
      'Successful market launch',
      'Reorder placed within 3 months'
    ],
    metrics: {
      orderValue: '$150K',
      savings: '22%',
      timeline: '7 months',
      suppliers: '3 verified'
    },
    image: 'toys'
  }
];

const industries = ['All', 'Electronics', 'Furniture', 'Sports & Outdoor', 'Textiles & Apparel', 'Machinery', 'Toys & Gifts'];

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const filteredCases = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(c => c.industry === selectedIndustry);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
            <p className="text-xl text-gray-200">
              Real success stories from our partnership with global buyers. 
              See how we've helped businesses source from China successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b py-8">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {industries.map(industry => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedIndustry === industry
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section bg-background">
        <div className="container">
          <div className="space-y-12">
            {filteredCases.map((study, index) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-3">
                  {/* Main Content */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500 text-sm">
                        <Globe className="w-4 h-4" />
                        {study.country}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-4">{study.company}</h2>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-800 mb-2">Challenge</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-800 mb-2">Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {study.testimonial && (
                      <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                        <div className="flex gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                          ))}
                        </div>
                        <p className="text-gray-600 italic mb-4">"{study.testimonial.quote}"</p>
                        <div>
                          <p className="font-semibold">{study.testimonial.author}</p>
                          <p className="text-sm text-gray-500">{study.testimonial.title}, {study.testimonial.company}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sidebar Metrics */}
                  <div className="bg-primary text-white p-8">
                    <h3 className="font-semibold text-lg mb-6">Project Metrics</h3>
                    <div className="space-y-6">
                      <div>
                        <p className="text-gray-300 text-sm">Order Value</p>
                        <p className="text-3xl font-bold">{study.metrics.orderValue}</p>
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm">Cost Savings</p>
                        <p className="text-3xl font-bold text-green-400">{study.metrics.savings}</p>
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm">Timeline</p>
                        <p className="text-2xl font-semibold">{study.metrics.timeline}</p>
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm">Suppliers Verified</p>
                        <p className="text-2xl font-semibold">{study.metrics.suppliers}</p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/20">
                      <Link
                        to="/contact"
                        className="block w-full bg-white text-primary text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Get Similar Results
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No case studies found</h3>
              <p className="text-gray-500">Try selecting a different industry</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">Our Track Record</h2>
          <p className="section-subtitle">
            Numbers that speak for themselves
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-4xl font-bold text-primary mb-2">$50M+</p>
              <p className="text-gray-600">Total Order Value</p>
            </div>
            <div className="card text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-gray-600">Verified Suppliers</p>
            </div>
            <div className="card text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-gray-600">On-Time Delivery</p>
            </div>
            <div className="card text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses who have transformed their sourcing 
            operations with SSourcing China.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}