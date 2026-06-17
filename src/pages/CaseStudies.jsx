import { Link } from 'react-router-dom';
import PageHero from '@/components/shared/PageHero';
import CtaBanner from '@/components/shared/CtaBanner';
import { MapPin, TrendingDown, Clock, ShieldCheck } from 'lucide-react';

const cases = [
  {
    id: 'cs1',
    tag: 'Electronics',
    country: 'United States',
    title: 'US Retailer Reduces Defect Rate by 60%',
    challenge: 'A US-based electronics importer was receiving shipments with defect rates of 7–9%, causing costly returns and customer complaints. They had no visibility into production quality before shipment.',
    solution: 'We implemented a 3-stage quality control process: in-line inspection at 30% production, pre-shipment inspection at 80% completion, and a final random sampling check. We also worked with the factory to update their internal QC checklist.',
    result: 'Defect rate dropped from 8% to under 3% within two shipment cycles. The client saved an estimated $45,000 in return costs in the first year.',
    metrics: [{ icon: ShieldCheck, label: 'Defect Rate', value: '8% → 2.8%' }, { icon: TrendingDown, label: 'Return Costs', value: '-$45K/year' }],
  },
  {
    id: 'cs2',
    tag: 'Furniture',
    country: 'Germany',
    title: 'European Brand Cuts Sourcing Costs by 22%',
    challenge: 'A German furniture brand had been working with a single supplier for 4 years and suspected they were overpaying. They lacked the local knowledge to evaluate alternatives.',
    solution: 'We audited 6 alternative factories in Foshan and Guangzhou, negotiated with 3 finalists, and presented a detailed comparison including price, lead time, quality, and certifications. The client transitioned to a new primary supplier with a backup option.',
    result: 'Unit costs reduced by 22% with comparable quality. Lead times improved by 5 days. The client now has a dual-supplier strategy reducing supply chain risk.',
    metrics: [{ icon: TrendingDown, label: 'Cost Reduction', value: '22%' }, { icon: Clock, label: 'Lead Time', value: '-5 days' }],
  },
  {
    id: 'cs3',
    tag: 'Apparel',
    country: 'Australia',
    title: 'Australian Startup Launches Private Label Line',
    challenge: 'A first-time importer from Australia wanted to launch a private label activewear brand but had no experience sourcing from China, no supplier contacts, and a tight 4-month launch timeline.',
    solution: 'We provided end-to-end support: sourcing a certified factory in Guangzhou, managing the sampling process (3 rounds), negotiating MOQ and pricing, conducting a pre-shipment inspection, and coordinating air freight for the launch shipment.',
    result: 'First shipment delivered on time, 2 weeks before the planned launch date. Product quality met all specifications. The client has since placed 3 additional orders.',
    metrics: [{ icon: Clock, label: 'Delivery', value: 'On time' }, { icon: ShieldCheck, label: 'QC Result', value: 'Pass — 0 defects' }],
  },
  {
    id: 'cs4',
    tag: 'Industrial',
    country: 'Canada',
    title: 'Canadian Distributor Verifies New Supplier Network',
    challenge: 'A Canadian industrial equipment distributor wanted to expand their supplier base in China but had concerns about factory legitimacy and product compliance after a previous bad experience.',
    solution: 'We conducted factory audits on 8 candidate suppliers, verified business licenses, ISO certifications, and production capabilities. We provided detailed audit reports and recommended 4 suppliers for trial orders.',
    result: 'The client successfully onboarded 3 new verified suppliers. All trial orders passed inspection. No compliance issues in the first 12 months of trading.',
    metrics: [{ icon: ShieldCheck, label: 'Suppliers Verified', value: '8 audited' }, { icon: TrendingDown, label: 'Compliance Issues', value: '0 in 12 months' }],
  },
  {
    id: 'cs5',
    tag: 'Packaging',
    country: 'United Kingdom',
    title: 'UK E-commerce Brand Streamlines Custom Packaging',
    challenge: 'A UK e-commerce brand needed custom-printed packaging for 12 SKUs but was struggling with inconsistent print quality and long lead times from their existing supplier.',
    solution: 'We sourced 3 specialist packaging factories, managed a print quality trial, and negotiated consolidated production runs to reduce per-unit costs. We also set up a quality checklist specific to print accuracy and color matching.',
    result: 'Print quality consistency improved significantly. Lead times reduced from 35 to 22 days. Per-unit packaging cost reduced by 18%.',
    metrics: [{ icon: Clock, label: 'Lead Time', value: '35 → 22 days' }, { icon: TrendingDown, label: 'Cost Saving', value: '18%' }],
  },
  {
    id: 'cs6',
    tag: 'Toys',
    country: 'France',
    title: 'French Toy Importer Achieves CE Compliance',
    challenge: 'A French toy importer needed to ensure their new product line met EN71 and CE requirements but their existing Chinese supplier could not provide the necessary documentation.',
    solution: 'We identified 2 factories with existing EN71 certification and experience with European compliance. We coordinated third-party lab testing, reviewed test reports, and ensured all documentation was in order before shipment.',
    result: 'All products passed EN71 testing. CE documentation was complete and accepted by French customs. The client avoided a potential product recall.',
    metrics: [{ icon: ShieldCheck, label: 'Compliance', value: 'EN71 + CE passed' }, { icon: TrendingDown, label: 'Recall Risk', value: 'Avoided' }],
  },
];

export default function CaseStudies() {
  return (
    <div>
      <PageHero
        title="Case Studies"
        subtitle="Real results from real clients. See how SSourcing China has helped businesses source smarter."
        breadcrumb="Case Studies"
      />

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((cs) => (
              <div key={cs.id} className="card-base p-8 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="bg-brand-blue/10 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">{cs.tag}</span>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <MapPin className="w-3 h-3" />
                    {cs.country}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-brand-blue">{cs.title}</h2>

                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Challenge</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Our Approach</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Result</h4>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">{cs.result}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-100">
                  {cs.metrics.map((m) => {
                    const Icon = m.icon;
                    return (
                      <div key={m.label} className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-brand-gold flex-shrink-0" />
                        <div>
                          <div className="text-xs text-gray-400">{m.label}</div>
                          <div className="text-sm font-bold text-brand-blue">{m.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want Results Like These?"
        subtitle="Tell us about your sourcing challenge and we'll show you how we can help."
      />
    </div>
  );
}
