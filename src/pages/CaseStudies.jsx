import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, TrendingUp, DollarSign, Clock, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Electronics Importer Reduces Costs by 25%',
    client: 'US-based Electronics Retailer',
    industry: 'Consumer Electronics',
    challenge: 'Client was paying premium prices to a single supplier with quality consistency issues.',
    solution: 'We identified 3 alternative suppliers, conducted factory audits, and negotiated better terms while maintaining quality standards.',
    results: [
      { metric: 'Cost Reduction', value: '25%' },
      { metric: 'Quality Defects', value: '-40%' },
      { metric: 'Lead Time', value: '-15%' },
    ],
    quote: 'SSourcing China helped us find better suppliers and improve our margins significantly.',
  },
  {
    id: 2,
    title: 'Fashion Brand Scales Production 3x',
    client: 'European Fashion Brand',
    industry: 'Textiles & Apparel',
    challenge: 'Client needed to scale production quickly for a new product line but struggled to find capable manufacturers.',
    solution: 'We sourced and verified 5 garment factories, set up quality control processes, and coordinated sample production.',
    results: [
      { metric: 'Production Capacity', value: '3x' },
      { metric: 'Defect Rate', value: '< 2%' },
      { metric: 'On-time Delivery', value: '98%' },
    ],
    quote: 'Their network of verified factories was exactly what we needed to scale.',
  },
  {
    id: 3,
    title: 'Home Goods Company Enters New Market',
    client: 'Canadian Home Goods Retailer',
    industry: 'Home & Garden',
    challenge: 'Client wanted to expand their product line but lacked local sourcing expertise.',
    solution: 'We provided end-to-end sourcing for 12 new product categories, including design consultation and quality control setup.',
    results: [
      { metric: 'New Products', value: '12' },
      { metric: 'Time to Market', value: '-30%' },
      { metric: 'Customer Satisfaction', value: '4.8/5' },
    ],
    quote: 'They became an extension of our team, handling everything from sourcing to shipping.',
  },
  {
    id: 4,
    title: 'Industrial Buyer Solves Quality Issues',
    client: 'Australian Industrial Equipment Buyer',
    industry: 'Industrial & Machinery',
    challenge: 'Client experienced recurring quality issues with their existing supplier, causing production delays.',
    solution: 'We conducted a thorough factory audit, identified root causes, and helped transition to a more capable supplier.',
    results: [
      { metric: 'Quality Issues', value: '-80%' },
      { metric: 'Production Delays', value: '-90%' },
      { metric: 'Cost Savings', value: '18%' },
    ],
    quote: 'The factory audit revealed issues we never would have found on our own.',
  },
];

export default function CaseStudies() {
  return (
    <div>
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Case Studies</h1>
            <p className="mt-4 text-lg text-slate-600">
              Real results from real clients. See how we've helped businesses like yours succeed with China sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study) => (
              <Card key={study.id} className="border-slate-200 overflow-hidden">
                <CardHeader className="bg-slate-50 border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl">{study.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {study.client} • {study.industry}
                      </CardDescription>
                    </div>
                    <div className="flex gap-4">
                      {study.results.map((result) => (
                        <div key={result.metric} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                          <div className="text-xs text-slate-500">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="h-6 w-6 rounded-full bg-red-50 flex items-center justify-center text-red-600 text-xs">!</span>
                        Challenge
                      </h3>
                      <p className="text-slate-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-xs">→</span>
                        Solution
                      </h3>
                      <p className="text-slate-600">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Results
                      </h3>
                      <div className="space-y-2">
                        {study.results.map((result) => (
                          <div key={result.metric} className="flex justify-between">
                            <span className="text-slate-600">{result.metric}</span>
                            <span className="font-semibold text-slate-900">{result.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <blockquote className="text-lg text-slate-700 italic">"{study.quote}"</blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Similar Results?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you achieve your sourcing goals.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Start Your Success Story
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
