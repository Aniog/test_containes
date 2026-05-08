import PricingTable from '../components/pricing/PricingTable'
import BrandVision from '../components/pricing/BrandVision'

export default function Pricing() {
  return (
    <>
      {/* Page hero */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-4">Pricing & About</p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Invest in your<br />digital future
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your ambitions. Every tier includes our core AI engine.
          </p>
        </div>
      </section>

      <PricingTable />
      <BrandVision />
    </>
  )
}
