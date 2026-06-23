import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const cases = [
  {
    title: 'Reducing Defects for Australian Homeware Brand',
    client: 'EcoHouse Australia',
    challenge: 'Client was experiencing a 12% defect rate with their previous supplier, leading to high return costs.',
    solution: 'We sourced a new, higher-tier factory, implemented a strict pre-shipment inspection protocol, and supervised the first three production runs.',
    result: 'Defect rate dropped to 0.5%. Annual savings estimated at $45,000 in return logistics and replacements.'
  },
  {
    title: 'Scaling Production for UK Tech Startup',
    client: 'SmartLink UK',
    challenge: 'Startup needed to scale production from 500 to 10,000 units per month while maintaining tight tolerances.',
    solution: 'We identified a factory specialized in precision electronics, negotiated volume pricing, and established a dedicated QC line for the client.',
    result: 'Successfully scaled production within 3 months. Unit cost reduced by 22% due to bulk negotiations.'
  },
  {
    title: 'Consolidating Shipments for US Retailer',
    client: 'SwiftGoods US',
    challenge: 'Retailer was sourcing from 8 different suppliers across China, leading to high shipping costs and complex tracking.',
    solution: 'We provided a consolidation warehouse in Ningbo, verified all incoming goods, and shipped one full container every two weeks.',
    result: 'Logistics costs reduced by 30%. Simplified inventory management with a single point of contact.'
  }
];

export default function CaseStudies() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            Real results for real businesses. See how we help our clients optimize their China sourcing.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-5xl mx-auto">
            {cases.map((cs, i) => (
              <Card key={i} className="overflow-hidden border-none shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="md:col-span-1 bg-primary text-white p-8 flex flex-col justify-center text-center">
                    <div className="text-sm font-bold opacity-70 uppercase tracking-widest mb-2">Client</div>
                    <div className="text-xl font-bold">{cs.client}</div>
                  </div>
                  <CardContent className="md:col-span-3 p-8 bg-white">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">{cs.title}</h3>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-2">The Challenge</h4>
                        <p className="text-slate-600 font-medium">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-2">Our Solution</h4>
                        <p className="text-slate-600 font-medium">{cs.solution}</p>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                        <h4 className="font-bold text-amber-800 text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4" /> The Result
                        </h4>
                        <p className="text-amber-900 font-bold">{cs.result}</p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
