import Layout from '../components/layout/Layout';
import PricingPlans from '../components/pricing/PricingPlans';
import BrandVision from '../components/pricing/BrandVision';

export default function Pricing() {
  return (
    <Layout>
      {/* Page hero */}
      <section className="pt-32 pb-16 bg-slate-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e2e8f0 1px, transparent 1px),
              linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Pricing & About</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Plans for every
            <br />
            <span className="text-slate-400">stage of growth.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Start free, upgrade when you're ready. Every plan includes the full power of ArcaneAI.
          </p>
        </div>
      </section>

      <PricingPlans />
      <BrandVision />
    </Layout>
  );
}
