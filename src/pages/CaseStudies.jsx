import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
    {
        id: "case-1",
        client: "US Electronics Brand",
        challenge: "Experiencing a 15% defect rate with their smart home device manufacturer, causing negative Amazon reviews.",
        solution: "We audited 5 new factories, selected one with strict ISO9001 standards, renegotiated costs down by 4%, and implemented piece-by-piece pre-shipment inspections.",
        result: "Defect rate dropped to 0.5%. The client saved $50,000 annually and regained their 'Amazon's Choice' badge."
    },
    {
        id: "case-2",
        client: "European Furniture Retailer",
        challenge: "Struggling to consolidate catalog items from 12 different small factories, facing massive LCL shipping costs.",
        solution: "We took over supplier management, established a central consolidation warehouse in Guangdong, and optimized container loading.",
        result: "Switched entirely to FCL (Full Container Load) shipments, cutting total landed logistics costs by 35%."
    },
    {
        id: "case-3",
        client: "Australian Startup (Kickstarter)",
        challenge: "Needed to develop a custom injection mold for a unique fitness product with a tight launch deadline.",
        solution: "We facilitated NNN agreements, managed the tooling process on the ground, and resolved 3 critical design flaws before mass production.",
        result: "Delivered 10,000 flawless units to backers 2 weeks ahead of the promised deadline."
    }
];

export default function CaseStudies() {
  return (
    <div>
      <PageHeader 
        title="Case Studies" 
        description="See how we have helped businesses worldwide overcome sourcing challenges and achieve success."
        bgImageId="bg-cases-header"
        bgImageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="space-y-16">
                {cases.map((c, idx) => (
                    <div key={c.id} className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-slate-50 rounded-2xl p-8 lg:p-12 border border-slate-100 items-center">
                        <div className="md:col-span-2">
                           <div className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Case Study {idx + 1}</div>
                           <h3 className="text-2xl font-bold text-slate-900 mb-4">{c.client}</h3>
                        </div>
                        <div className="md:col-span-3 space-y-6">
                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">The Challenge:</h4>
                                <p className="text-slate-600 leading-relaxed">{c.challenge}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Our Solution:</h4>
                                <p className="text-slate-600 leading-relaxed">{c.solution}</p>
                            </div>
                            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                                <h4 className="font-semibold text-slate-900 mb-1">The Result:</h4>
                                <p className="text-primary font-medium">{c.result}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-20 text-center">
                 <Link
                  to="/contact"
                  className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Start Your Success Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
