import AICapabilities from '../components/product/AICapabilities'
import ProductShowcase from '../components/product/ProductShowcase'
import ContactForm from '../components/product/ContactForm'

export default function Product() {
  return (
    <>
      {/* Page hero */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/30 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">Product</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            AI capabilities built<br />for the modern web
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore the full suite of intelligent features that make NexusAI the most powerful site builder on the market.
          </p>
        </div>
      </section>

      <AICapabilities />
      <ProductShowcase />
      <ContactForm />
    </>
  )
}
