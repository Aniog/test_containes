import { Helmet } from "react-helmet-async";

export default function CaseStudies() {
  const studies = [
    {
      id: "cs1",
      client: "European Electronics Retailer",
      challenge: "High defect rate (15%) with their previous supplier for smart home cameras.",
      solution: "We audited 8 new factories, selected an ISO-certified manufacturer, and implemented strict pre-shipment AQL 2.5 inspections.",
      result: "Defect rate dropped to 0.5%, saving the client €50,000 annually in returns and boosting their Amazon ratings."
    },
    {
      id: "cs2",
      client: "US Furniture Startup",
      challenge: "Struggling to find a reliable factory to produce custom-designed ergonomic chairs with specific material requirements.",
      solution: "Sourced specialized component manufacturers, managed the prototyping phase, and consolidated assembly in one location.",
      result: "Successfully launched the product line 2 months ahead of schedule, with a 30% reduction in estimated manufacturing costs."
    },
    {
      id: "cs3",
      client: "Australian Fashion Brand",
      challenge: "Facing massive shipping delays and skyrocketing freight costs during the peak holiday season.",
      solution: "Negotiated priority production scheduling with the factory and secured advance bookings for sea freight consolidation.",
      result: "Inventory arrived 3 weeks before Black Friday, allowing the brand to capture maximum seasonal revenue."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Case Studies | SSourcing China</title>
        <meta name="description" content="Read our success stories and see how we've helped global businesses optimize their China sourcing and supply chain operations." />
      </Helmet>

      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Client Success Stories</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Discover how we solve complex sourcing challenges and deliver measurable results for our clients.</p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
          {studies.map((study) => (
            <div key={study.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="border-b border-slate-100 bg-slate-50 px-8 py-4">
                <h2 className="text-xl font-bold text-slate-900">{study.client}</h2>
              </div>
              <div className="p-8 grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-2">The Challenge</h3>
                  <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-2">Our Solution</h3>
                  <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-2">The Result</h3>
                  <p className="text-slate-900 font-medium leading-relaxed">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}