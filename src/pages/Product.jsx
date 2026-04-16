import Layout from '../components/layout/Layout';
import AICapabilities from '../components/product/AICapabilities';
import ContactSection from '../components/product/ContactSection';

export default function Product() {
  return (
    <Layout>
      {/* Product Hero */}
      <section className="pt-32 pb-16 bg-slate-50 relative overflow-hidden">
        {/* Dashed grid */}
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
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Product</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            The AI that builds
            <br />
            <span className="text-slate-400">like a pro designer.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10">
            Explore the full suite of AI capabilities that make ArcaneAI the most powerful website builder on the market.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Neural Layout', 'Visual AI', 'SEO Autopilot', 'Clean Code', 'Multi-language'].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-slate-500 bg-white border border-dashed border-slate-300 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Product showcase image */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-4 mb-0">
        <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/40">
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1400&q=80&auto=format&fit=crop"
            alt="Modern UI interface"
            className="w-full h-72 lg:h-96 object-cover"
          />
        </div>
      </div>

      <AICapabilities />
      <ContactSection />
    </Layout>
  );
}
