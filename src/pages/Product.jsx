import AICapabilities from '../components/product/AICapabilities';
import ContactForm from '../components/product/ContactForm';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Product() {
  return (
    <>
      {/* Product Hero */}
      <section className="relative py-24 md:py-32 bg-gray-950 overflow-hidden">
        {/* Dashed grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #fff 1px, transparent 1px),
                linear-gradient(to bottom, #fff 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
          <div className="absolute top-1/3 left-0 right-0 border-t border-dashed border-gray-800" />
          <div className="absolute top-2/3 left-0 right-0 border-t border-dashed border-gray-800" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-full px-4 py-1.5 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-xs font-medium text-gray-300 tracking-wide">AI-powered platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              The AI that builds
              <br />
              <span className="text-indigo-400">and grows</span> your site
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              Explore the full suite of AI capabilities that make Arcis the most intelligent website platform ever built.
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-all text-sm"
            >
              Start building free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative max-w-7xl mx-auto px-6 mt-16">
          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&q=80&auto=format&fit=crop"
              alt="AI platform interface"
              className="w-full object-cover aspect-[21/9]"
            />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '12,000+', label: 'Active sites' },
              { value: '47s', label: 'Avg. build time' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '4.9/5', label: 'Customer rating' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold text-gray-900">{value}</p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <AICapabilities />

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        {/* Dashed decorations */}
        <div className="absolute top-0 left-0 right-0 border-t border-dashed border-gray-300" />
        <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-300" />
        <div className="absolute top-0 bottom-0 left-1/2 border-l border-dashed border-gray-200 hidden md:block" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div>
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Get in touch</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-5">
                Let's build something
                <br />remarkable together
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Whether you're a startup looking to launch fast or an enterprise ready to scale, our team is here to help you get the most out of Arcis AI.
              </p>

              {/* Contact details */}
              <div className="space-y-4">
                {[
                  { label: 'Email', value: 'hello@arcis.ai' },
                  { label: 'Response time', value: 'Within 24 hours' },
                  { label: 'Support', value: 'Mon–Fri, 9am–6pm PST' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider w-28">{label}</span>
                    <span className="text-sm text-gray-700 font-medium">{value}</span>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div className="mt-10 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80&auto=format&fit=crop"
                  alt="Modern office workspace"
                  className="w-full object-cover aspect-[16/9]"
                />
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Send us a message</h3>
              <p className="text-sm text-gray-500 mb-6">We read every message and respond personally.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
