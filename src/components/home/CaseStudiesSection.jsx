import { Star, Quote } from 'lucide-react';

const caseStudies = [
  {
    id: 'cs1',
    client: 'James R.',
    country: 'United Kingdom',
    flag: '🇬🇧',
    industry: 'Consumer Electronics',
    result: '32% cost reduction vs. previous supplier',
    quote: 'SSourcing China found us a better factory in 2 weeks. The QC report caught a defect issue before shipment — saved us thousands.',
    rating: 5,
  },
  {
    id: 'cs2',
    client: 'Maria S.',
    country: 'Germany',
    flag: '🇩🇪',
    industry: 'Home Furniture',
    result: 'On-time delivery for 3 consecutive orders',
    quote: 'We had bad experiences with previous agents. SSourcing is different — transparent, responsive, and they actually visit the factories.',
    rating: 5,
  },
  {
    id: 'cs3',
    client: 'David K.',
    country: 'United States',
    flag: '🇺🇸',
    industry: 'Sporting Goods',
    result: 'Passed Amazon FBA inspection first attempt',
    quote: 'Their pre-shipment inspection report was thorough and professional. Our products passed Amazon\'s requirements without any issues.',
    rating: 5,
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">Client Results</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 text-lg">
            Real results from real buyers. Here's how we've helped businesses source smarter from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white rounded-xl p-7 border border-slate-100 shadow-sm flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: cs.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">
                <Quote className="w-5 h-5 text-blue-200 mb-2" />
                "{cs.quote}"
              </blockquote>

              {/* Result badge */}
              <div className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full inline-block mb-4 w-fit">
                ✓ {cs.result}
              </div>

              {/* Client */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-700">
                  {cs.client.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{cs.client} {cs.flag}</div>
                  <div className="text-xs text-slate-500">{cs.industry} · {cs.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
