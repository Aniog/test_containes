import PricingPlans from '../components/pricing/PricingPlans'
import BrandVision from '../components/pricing/BrandVision'

export default function Pricing() {
  return (
    <main>
      {/* Page hero */}
      <section className="pt-32 pb-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #6366f1 1px, transparent 1px),
                linear-gradient(to bottom, #6366f1 1px, transparent 1px)
              `,
              backgroundSize: '64px 64px',
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-semibold mb-6">
            Pricing & About
          </div>
          <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Plans for every stage of growth
          </h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            From solo creators to enterprise teams — NeuralBuild scales with your ambitions.
          </p>
        </div>
      </section>

      <PricingPlans />
      <BrandVision />
    </main>
  )
}
