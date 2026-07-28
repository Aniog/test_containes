import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: 'Home goods importer',
      industry: 'Home & Kitchen',
      challenge: 'The buyer was receiving batches with inconsistent finish quality and packaging damage.',
      approach: 'We audited the existing factory, introduced a second approved supplier, and implemented pre-shipment inspections.',
      result: 'Defect rate dropped from 12% to under 2% within three shipments.',
      metrics: ['12% to <2% defect rate', '2 approved suppliers', '3 months to stabilize'],
    },
    {
      title: 'Electronics brand',
      industry: 'Electronics',
      challenge: 'The buyer needed multiple suppliers for a new product launch but had limited time to evaluate them.',
      approach: 'We shortlisted five factories, conducted audits, coordinated samples, and negotiated terms.',
      result: 'The buyer selected two suppliers and reduced sample evaluation time by 40%.',
      metrics: ['5 factories evaluated', '2 suppliers selected', '40% faster sampling'],
    },
    {
      title: 'Industrial equipment buyer',
      industry: 'Industrial',
      challenge: 'The buyer needed to coordinate large shipments across multiple suppliers with different lead times.',
      approach: 'We created a consolidated shipping plan, managed documentation, and tracked production milestones.',
      result: 'Four container shipments were delivered on schedule over six months.',
      metrics: ['4 shipments delivered', 'On-time delivery maintained', '6-month program'],
    },
    {
      title: 'Promotional products buyer',
      industry: 'Gifts & Promotions',
      challenge: 'The buyer needed custom-branded products with tight artwork and packaging requirements.',
      approach: 'We reviewed artwork compatibility, checked print proofs, and inspected packaging before shipment.',
      result: 'First-time approval rate improved and rework requests decreased significantly.',
      metrics: ['Higher first-pass approval', 'Fewer rework requests', 'Faster time to market'],
    },
    {
      title: 'Textile and apparel brand',
      industry: 'Textiles',
      challenge: 'The buyer experienced fabric quality variations and labeling errors in previous orders.',
      approach: 'We added fabric inspection stages, verified labeling compliance, and improved packing standards.',
      result: 'Quality consistency improved and customer returns related to labeling dropped.',
      metrics: ['Fabric inspection added', 'Labeling compliance verified', 'Returns reduced'],
    },
    {
      title: 'Automotive parts distributor',
      industry: 'Automotive',
      challenge: 'The buyer needed parts that met specific tolerances and material certifications.',
      approach: 'We verified material certificates, reviewed inspection reports, and coordinated third-party testing.',
      result: 'Certified parts were delivered with documented traceability and inspection records.',
      metrics: ['Certificates verified', 'Tolerances confirmed', 'Traceability documented'],
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="secondary">Case Studies</Badge>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Case studies</h1>
            <p className="mt-4 text-lg text-slate-600">
              Real examples of how we helped buyers reduce risk, improve quality, and move products from factory to destination.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {cases.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{item.industry}</Badge>
                  </div>
                  <CardTitle className="mt-3 text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.challenge}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm text-slate-700">
                    <div>
                      <div className="font-semibold text-slate-900">Approach</div>
                      <p className="mt-1">{item.approach}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Result</div>
                      <p className="mt-1">{item.result}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.metrics.map((metric) => (
                        <Badge key={metric} variant="outline">{metric}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-slate-200 bg-white p-8 sm:p-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-slate-900">Have a similar challenge?</h2>
              <p className="mt-3 text-slate-600">Tell us about your project and we will suggest a practical approach.</p>
            </div>
            <div className="mt-6">
              <Button asChild>
                <Link to="/contact">Start a conversation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
