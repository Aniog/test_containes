import React from 'react';
import ProcessStep from '../components/ProcessStep';
import TrustBar from '../components/TrustBar';

const HowItWorks = ({ onQuoteClick }) => {
  const steps = [
    {
      number: '1',
      title: 'Initial Consultation & Requirements',
      description: 'We start with a detailed discussion of your product, target specifications, quality expectations, volume, timeline, and any previous sourcing challenges. This helps us understand what success looks like for your project.',
      deliverables: ['Requirements brief', 'Preliminary timeline estimate', 'Fee structure proposal'],
    },
    {
      number: '2',
      title: 'Supplier Research & Shortlisting',
      description: 'Using our supplier database and targeted research, we identify manufacturers that appear to match your criteria. We screen for export experience, production capacity, and basic legitimacy indicators.',
      deliverables: ['Initial supplier list with profiles', 'Comparison matrix', 'Recommended shortlist of 3–6 suppliers'],
    },
    {
      number: '3',
      title: 'Factory Verification Visits',
      description: 'We conduct on-site visits to shortlisted factories. Our team verifies business credentials, tours production facilities, assesses equipment and workforce, and evaluates quality systems and order management practices.',
      deliverables: ['Detailed verification report', 'Photos and observations', 'Risk assessment and recommendation'],
    },
    {
      number: '4',
      title: 'Sample Evaluation & Approval',
      description: 'We coordinate sample production and evaluation. You review samples against your specifications. We document any gaps and work with the supplier to address them before production begins.',
      deliverables: ['Sample evaluation report', 'Photo documentation', 'Approved sample reference'],
    },
    {
      number: '5',
      title: 'Order Placement & Production Monitoring',
      description: 'Once you place an order, we help confirm production schedules and monitor progress. We conduct pre-production and in-line inspections as appropriate, and provide regular status updates.',
      deliverables: ['Production schedule', 'Weekly progress reports', 'Inspection reports'],
    },
    {
      number: '6',
      title: 'Final Inspection & Shipping Coordination',
      description: 'Before shipment, we perform or coordinate a final inspection. We assist with export documentation and work with your chosen freight forwarder to arrange transportation.',
      deliverables: ['Final inspection report', 'Export documentation support', 'Shipping coordination'],
    },
    {
      number: '7',
      title: 'Post-Delivery Support & Reorders',
      description: 'After delivery, we help address any issues that arise and document supplier performance. For repeat orders, we manage the process with the benefit of established relationships and known quality baselines.',
      deliverables: ['Performance summary', 'Issue resolution support', 'Reorder management'],
    },
  ];

  return (
    <div>
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="text-sm font-medium text-blue-700 tracking-wider mb-2">OUR METHOD</div>
          <h1 className="text-4xl font-semibold text-slate-900 mb-4">How We Work</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A structured, transparent process designed to reduce risk and give you visibility at each stage of sourcing from China.
          </p>
        </div>
      </div>

      <TrustBar />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">The Sourcing Process</h2>
          <p className="text-slate-600">
            Not every project requires every step. We tailor the scope based on your needs, existing supplier relationships, and risk tolerance. Some clients engage us only for verification or inspection work.
          </p>
        </div>

        <div>
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">What Makes Our Process Different</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <div className="font-medium mb-2 text-blue-400">Written reports at every stage</div>
              <p className="text-slate-300">You receive documented findings, not just verbal updates. Reports include photos, observations, and clear recommendations.</p>
            </div>
            <div>
              <div className="font-medium mb-2 text-blue-400">No pressure to move forward</div>
              <p className="text-slate-300">If verification reveals concerns, we tell you. We do not benefit from pushing you toward a supplier that does not meet your standards.</p>
            </div>
            <div>
              <div className="font-medium mb-2 text-blue-400">Direct factory communication</div>
              <p className="text-slate-300">We speak with factories in Chinese and translate findings into clear English. You stay informed without language barriers.</p>
            </div>
            <div>
              <div className="font-medium mb-2 text-blue-400">Realistic timelines</div>
              <p className="text-slate-300">We build buffers into schedules and flag risks early. We do not promise unrealistic lead times to win projects.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">Typical Project Timeline</h2>
        <p className="text-slate-600 mb-8">Timelines vary significantly by product complexity, order size, and supplier readiness. This is a general reference for a standard first-time sourcing project.</p>
        
        <div className="max-w-2xl mx-auto text-left bg-slate-50 border border-slate-200 rounded-xl p-8 text-sm">
          <div className="space-y-4">
            <div className="flex justify-between border-b border-slate-200 pb-3">
              <span className="text-slate-600">Supplier identification & shortlisting</span>
              <span className="font-medium text-slate-900">2–4 weeks</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-3">
              <span className="text-slate-600">Factory verification visits</span>
              <span className="font-medium text-slate-900">1–3 weeks</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-3">
              <span className="text-slate-600">Sample production & evaluation</span>
              <span className="font-medium text-slate-900">2–6 weeks</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-3">
              <span className="text-slate-600">Production (after order placement)</span>
              <span className="font-medium text-slate-900">4–12 weeks</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-slate-600">Final inspection & shipping</span>
              <span className="font-medium text-slate-900">1–3 weeks</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-200 text-xs text-slate-500">
            Total time from initial briefing to goods arrival: typically 10–24 weeks for first orders, depending on product and supplier.
          </div>
        </div>

        {onQuoteClick && (
          <div className="mt-10">
            <button
              onClick={onQuoteClick}
              className="px-8 py-3.5 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg transition-colors text-base"
            >
              Get a Free Sourcing Quote
            </button>
            <p className="mt-3 text-xs text-slate-500">Start with a no-obligation discussion of your requirements.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HowItWorks;
