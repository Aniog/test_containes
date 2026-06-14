import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingDown, Clock, ShieldCheck, DollarSign, CheckCircle2 } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Reducing Electronics Sourcing Costs by 18%',
    industry: 'Electronics',
    client: 'US-based consumer electronics brand',
    challenge: 'The client was paying above-market prices for Bluetooth speakers and struggling with inconsistent quality from their existing supplier.',
    solution: 'We sourced 5 alternative factories, audited their capabilities, and negotiated better terms based on volume commitments and long-term partnership.',
    results: [
      { metric: 'Cost reduction', value: '18%', icon: DollarSign },
      { metric: 'Defect rate', value: 'From 4.2% to 0.8%', icon: ShieldCheck },
      { metric: 'Lead time', value: 'Reduced by 5 days', icon: Clock },
    ],
    quote: 'SSourcing China helped us find a factory that actually cares about quality. Our return rate dropped significantly.',
    quoteAuthor: 'Procurement Director, US Electronics Brand',
  },
  {
    id: 2,
    title: 'From Sample to 40HQ Container in 6 Weeks',
    industry: 'Home Goods',
    client: 'European home decor retailer',
    challenge: 'The client needed to launch a new product line quickly for the seasonal trade show but had no established supplier network in China.',
    solution: 'We expedited supplier identification, coordinated rapid sample iterations, and managed the full production and shipping timeline.',
    results: [
      { metric: 'Time to first container', value: '6 weeks', icon: Clock },
      { metric: 'On-time delivery', value: '100%', icon: CheckCircle2 },
      { metric: 'Cost vs. target', value: 'Within 3%', icon: DollarSign },
    ],
    quote: 'We thought 6 weeks was impossible. SSourcing China made it happen without compromising on quality.',
    quoteAuthor: 'Product Manager, European Home Retailer',
  },
  {
    id: 3,
    title: 'Eliminating Quality Issues with Pre-Shipment Inspection',
    industry: 'Textiles',
    client: 'Canadian apparel brand',
    challenge: 'The client experienced recurring quality issues with fabric defects and stitching problems that were only discovered after arrival.',
    solution: 'We implemented a structured inspection protocol including fabric testing, pre-production approval, and pre-shipment final inspection with detailed reporting.',
    results: [
      { metric: 'Defect rate', value: 'From 8% to 1.2%', icon: ShieldCheck },
      { metric: 'Customer returns', value: 'Reduced by 75%', icon: TrendingDown },
      { metric: 'Inspection coverage', value: '100% of shipments', icon: CheckCircle2 },
    ],
    quote: 'The inspection reports are thorough and actionable. We finally have visibility into what is happening at the factory.',
    quoteAuthor: 'Operations Lead, Canadian Apparel Brand',
  },
  {
    id: 4,
    title: 'Scaling Production from 1,000 to 10,000 Units Monthly',
    industry: 'Industrial Components',
    client: 'Australian industrial equipment supplier',
    challenge: 'The client needed to scale production rapidly but was concerned about maintaining quality and meeting delivery deadlines.',
    solution: 'We helped the client transition to a larger factory, implemented quality checkpoints, and coordinated phased production ramps.',
    results: [
      { metric: 'Production scale', value: '10x increase', icon: TrendingDown },
      { metric: 'Quality pass rate', value: '99.2%', icon: ShieldCheck },
      { metric: 'Delivery reliability', value: '98% on-time', icon: Clock },
    ],
    quote: 'SSourcing China managed the entire scaling process. We could focus on sales while they handled production.',
    quoteAuthor: 'CEO, Australian Industrial Supplier',
  },
];

const CaseStudies = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-lg text-slate-300 mb-8">
              Real results for real buyers. These case studies show how we have helped companies across different industries source better from China.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Discuss Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case studies list */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study) => (
              <div key={study.id} className="border-b border-slate-200 pb-16 last:border-b-0 last:pb-0">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">{study.industry}</div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{study.title}</h2>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">Client</h3>
                        <p className="text-sm text-slate-600">{study.client}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">Challenge</h3>
                        <p className="text-sm text-slate-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">Our Approach</h3>
                        <p className="text-sm text-slate-600">{study.solution}</p>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-xl border border-slate-200 p-5">
                      <p className="text-sm text-slate-700 italic mb-3">"{study.quote}"</p>
                      <p className="text-xs text-slate-500">— {study.quoteAuthor}</p>
                    </div>
                  </div>

                  <div>
                    <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                      <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">Key Results</h3>
                      <div className="space-y-4">
                        {study.results.map((result) => (
                          <div key={result.metric} className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                              <result.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-lg font-bold text-slate-900">{result.value}</div>
                              <div className="text-xs text-slate-500">{result.metric}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Want Similar Results?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Tell us about your sourcing challenges. We will propose a practical plan to help you achieve your goals.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
