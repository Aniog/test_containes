import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const caseStudies = [
  { id: 1, title: 'Electronics distributor cuts costs by 18%', category: 'Electronics', client: 'US-based electronics retailer', challenge: 'Client was paying above-market prices for consumer electronics and struggling with inconsistent quality from their existing supplier.', solution: 'We identified 5 alternative factories, audited 3, and negotiated a new supply agreement with better terms and built-in QC milestones.', result: '18% cost reduction, zero quality complaints in 6 months, and a 30% reduction in lead time.', metrics: ['18% cost reduction', '30% faster delivery', 'Zero defects'] },
  { id: 2, title: 'Home goods brand passes 3rd-party audit', category: 'Home & Garden', client: 'European home goods brand', challenge: 'Client needed to pass a mandatory third-party social compliance audit to maintain their retail partnerships.', solution: 'We conducted a pre-audit factory assessment, identified gaps, and worked with the factory to implement corrective actions before the official audit.', result: 'Client passed the audit with zero major non-conformities and secured a 2-year supply contract.', metrics: ['Zero major non-conformities', '2-year contract secured', 'Audit passed first attempt'] },
  { id: 3, title: 'Auto parts buyer reduces lead time by 22%', category: 'Automotive', client: 'Canadian auto parts distributor', challenge: 'Client was facing long lead times and unreliable delivery schedules from their current supplier, causing stockouts.', solution: 'We mapped the production process, identified bottlenecks, and introduced a second qualified supplier to create competition and improve reliability.', result: 'Lead time reduced by 22%, on-time delivery improved from 72% to 96%.', metrics: ['22% faster delivery', '96% on-time rate', '2 qualified suppliers'] },
  { id: 4, title: 'Fashion brand scales production by 3x', category: 'Textiles & Apparel', client: 'Australian fashion brand', challenge: 'Client wanted to scale production for a new product line but lacked the capacity with their current factory.', solution: 'We found 2 additional garment factories, conducted capacity assessments, and coordinated a phased production ramp-up.', result: 'Production capacity tripled while maintaining quality standards and delivery schedules.', metrics: ['3x production capacity', 'Quality maintained', 'On-time scaling'] },
  { id: 5, title: 'Promotional goods buyer saves 25% on tooling', category: 'Toys & Gifts', client: 'UK promotional products company', challenge: 'Client was paying high tooling costs for custom promotional items and had no leverage to negotiate.', solution: 'We sourced quotes from 6 tooling suppliers, negotiated bulk rates, and identified a more cost-effective manufacturing process.', result: 'Tooling costs reduced by 25%, and per-unit cost dropped by 12%.', metrics: ['25% tooling savings', '12% unit cost reduction', '6 suppliers compared'] },
  { id: 6, title: 'Industrial buyer streamlines supplier base', category: 'Industrial', client: 'German industrial equipment buyer', challenge: 'Client was working with 12 different suppliers for similar components, leading to inconsistent quality and complex logistics.', solution: 'We audited all suppliers, consolidated the list to 4 high-performing factories, and negotiated framework agreements.', result: 'Supplier base reduced by 67%, quality consistency improved, and logistics costs dropped by 15%.', metrics: ['67% fewer suppliers', '15% logistics savings', 'Improved consistency'] },
];

const CaseStudies = () => {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Case Studies</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Real results for real buyers. See how we have helped companies source better from China.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <Card key={cs.id} className="border-slate-200 hover:shadow-md transition-shadow h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{cs.category}</Badge>
                </div>
                <CardTitle className="text-lg leading-snug">{cs.title}</CardTitle>
                <CardDescription>{cs.client}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">Challenge</h4>
                    <p className="text-sm text-slate-600">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">Solution</h4>
                    <p className="text-sm text-slate-600">{cs.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">Result</h4>
                    <p className="text-sm text-slate-600">{cs.result}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {cs.metrics.map((metric) => (
                      <span key={metric} className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-full">
                        <CheckCircle2 className="h-3 w-3" />
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact">
            <Button size="lg">
              Start your success story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
