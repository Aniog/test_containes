import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, DollarSign, Clock, CheckCircle, Building2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    industry: 'Electronics',
    title: 'Consumer Electronics Sourcing for US Retailer',
    challenge: 'A US-based electronics retailer needed a reliable manufacturer for Bluetooth speakers with strict quality requirements and competitive pricing.',
    approach: 'We identified 5 potential suppliers, conducted on-site audits on 3, and coordinated sample production. After quality testing, we recommended the best match.',
    result: 'Found 3 verified factories, reduced defect rate from 8% to 0.5%, and saved 22% on unit costs compared to their previous supplier.',
    metrics: [
      { icon: TrendingUp, value: '22%', label: 'Cost Savings' },
      { icon: DollarSign, value: '0.5%', label: 'Defect Rate' },
      { icon: Clock, value: '3 weeks', label: 'Lead Time' },
    ],
    quote: 'SSourcing China helped us find a reliable factory and cut our defect rate dramatically. Their QC process is thorough and professional.',
    quoteAuthor: 'Procurement Manager, US Electronics Retailer',
  },
  {
    industry: 'Apparel',
    title: 'Custom Clothing Line for European Fashion Brand',
    challenge: 'A European fashion brand needed a factory capable of producing custom designs with consistent quality across multiple fabric types and seasonal collections.',
    approach: 'We matched them with a certified garment factory specializing in European markets, established detailed QC protocols, and managed the entire first collection.',
    result: 'Matched with a certified garment factory, established QC protocols, and delivered the first collection on time with 100% quality compliance.',
    metrics: [
      { icon: TrendingUp, value: '100%', label: 'On-Time Delivery' },
      { icon: DollarSign, value: '15%', label: 'Margin Improvement' },
      { icon: Clock, value: '45 days', label: 'Production Time' },
    ],
    quote: 'The team understood our quality standards and delivered exactly what we needed. Our first collection was a success.',
    quoteAuthor: 'Founder, European Fashion Brand',
  },
  {
    industry: 'Home & Garden',
    title: 'Furniture Sourcing for Australian Distributor',
    challenge: 'An Australian distributor needed outdoor furniture meeting Australian safety standards with competitive pricing and reliable delivery schedules.',
    approach: 'We identified a factory with relevant certifications, coordinated third-party testing for Australian standards, and managed full container shipments.',
    result: 'Identified a certified factory, coordinated testing, and managed full container shipments with zero quality issues over 6 months.',
    metrics: [
      { icon: TrendingUp, value: '30%', label: 'Volume Increase' },
      { icon: DollarSign, value: '18%', label: 'Cost Reduction' },
      { icon: Clock, value: '6 months', label: 'Partnership' },
    ],
    quote: 'They handled everything from factory verification to customs clearance. We just focus on selling.',
    quoteAuthor: 'Operations Director, Australian Distributor',
  },
  {
    industry: 'Industrial',
    title: 'Machinery Parts Sourcing for German Manufacturer',
    challenge: 'A German manufacturer needed precision CNC-machined parts with tight tolerances and ISO 9001 certification for their production line.',
    approach: 'We sourced factories with CNC capabilities, verified ISO certifications, conducted dimensional inspections, and arranged air freight for urgent orders.',
    result: 'Delivered precision parts within tolerance specifications, established ongoing supply relationship, and reduced procurement costs by 25%.',
    metrics: [
      { icon: TrendingUp, value: '25%', label: 'Cost Reduction' },
      { icon: DollarSign, value: '99.2%', label: 'Quality Rate' },
      { icon: Clock, value: '2 weeks', label: 'Sample Time' },
    ],
    quote: 'Their attention to technical specifications and quality standards matched our German engineering requirements perfectly.',
    quoteAuthor: 'Purchasing Manager, German Manufacturer',
  },
  {
    industry: 'Packaging',
    title: 'Custom Packaging for UK Beauty Brand',
    challenge: 'A UK beauty brand needed custom cosmetic packaging with specific materials, printing quality, and eco-friendly certifications.',
    approach: 'We found a packaging manufacturer with FSC certification, coordinated material samples, verified print quality, and managed production of 50,000 units.',
    result: 'Delivered 50,000 custom packaging units on time, meeting all quality and sustainability requirements.',
    metrics: [
      { icon: TrendingUp, value: '50K', label: 'Units Delivered' },
      { icon: DollarSign, value: '20%', label: 'Cost Savings' },
      { icon: Clock, value: '4 weeks', label: 'Production Time' },
    ],
    quote: 'The packaging quality exceeded our expectations and the eco-certifications were exactly what we needed.',
    quoteAuthor: 'Brand Manager, UK Beauty Brand',
  },
  {
    industry: 'Sports',
    title: 'Fitness Equipment Sourcing for Canadian Retailer',
    challenge: 'A Canadian retailer needed a reliable source for home fitness equipment with competitive pricing and safety certifications for the North American market.',
    approach: 'We identified manufacturers with CE and ASTM certifications, conducted factory audits, coordinated product testing, and managed sea freight logistics.',
    result: 'Established supply chain for 12 product SKUs, achieved 15% cost savings, and maintained zero safety compliance issues.',
    metrics: [
      { icon: TrendingUp, value: '12', label: 'Product SKUs' },
      { icon: DollarSign, value: '15%', label: 'Cost Savings' },
      { icon: Clock, value: '0', label: 'Compliance Issues' },
    ],
    quote: 'They made sourcing fitness equipment from China feel effortless. Quality and compliance were never a concern.',
    quoteAuthor: 'Buyer, Canadian Retailer',
  },
];

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-lg text-slate-300 mb-8">
              Real results from real sourcing projects. See how we help buyers across industries succeed with China sourcing.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                Start Your Sourcing Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                    {study.industry}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{study.title}</h2>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        Challenge
                      </h3>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-primary" />
                        Our Approach
                      </h3>
                      <p className="text-sm text-muted-foreground">{study.approach}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Results
                      </h3>
                      <p className="text-sm text-muted-foreground">{study.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="bg-secondary/50 rounded-lg p-3 text-center">
                        <metric.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                        <div className="text-lg font-bold text-foreground">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
                    <p className="text-sm text-foreground italic mb-2">"{study.quote}"</p>
                    <cite className="text-xs text-muted-foreground not-italic">— {study.quoteAuthor}</cite>
                  </blockquote>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-secondary/50 rounded-xl p-8 flex items-center justify-center h-full min-h-[200px]">
                    <div className="text-center">
                      <Building2 className="w-16 h-16 text-primary/20 mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground">{study.industry} Case Study</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want Results Like These?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Tell us about your sourcing needs and we will show you how we can help.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 px-8">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
