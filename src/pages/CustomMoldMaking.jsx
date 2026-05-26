import { Link } from 'react-router-dom';
import { Settings, CheckCircle, ArrowRight, Layers, Wrench, FlaskConical, Truck } from 'lucide-react';

const phases = [
  { icon: Layers, title: 'Design & DFM Review', desc: 'We review your product design for moldability. Our team checks wall thickness, draft angles, undercuts, and other factors that affect mold quality and cost.' },
  { icon: Settings, title: 'Mold Design & Tooling', desc: 'Once the design is confirmed, we work with the factory to develop the mold design and begin tooling. We keep you updated on progress at each stage.' },
  { icon: FlaskConical, title: 'Sample Production', desc: 'Initial samples are produced and reviewed. We coordinate feedback between you and the factory until the sample meets your specifications.' },
  { icon: CheckCircle, title: 'Sample Approval', desc: 'You review and approve the sample. Any modifications are addressed before mass production begins.' },
  { icon: Wrench, title: 'Mass Production', desc: 'After sample approval, production begins. We monitor quality and timeline to ensure the order meets your requirements.' },
  { icon: Truck, title: 'Inspection & Delivery', desc: 'Pre-shipment inspection is conducted. We coordinate international delivery and provide shipping documentation support.' },
];

const capabilities = [
  'Single-cavity and multi-cavity molds',
  'Prototype and production tooling',
  'Plastic injection, die casting, silicone, rubber',
  'Consumer products, electronics, automotive parts',
  'Household goods and industrial components',
  'Phone cases and accessories',
  'Custom material and finish requirements',
  'Export-ready packaging and labeling',
];

export default function CustomMoldMaking() {
  return (
    <div>
      {/* Hero */}
      <section style={{background: 'linear-gradient(135deg, #1B4F8A 0%, #163F6E 100%)'}} className="text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">Custom Mold Making</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Custom Mold Development, Managed End-to-End
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              From your initial design to final production, we manage the custom mold development process with qualified Chinese manufacturers — keeping you informed and in control at every stage.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#E87722] hover:bg-[#C9651A] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              Discuss Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#1B4F8A]/10 text-[#1B4F8A] text-xs font-semibold px-3 py-1 rounded-full mb-4">What We Support</span>
              <h2 className="text-3xl font-bold text-[#1A2332] mb-5">From Drawing to Delivery</h2>
              <p className="text-[#4A5568] leading-relaxed mb-4">
                Custom mold development requires careful coordination between design, tooling, sampling, and production. Mistakes at any stage can cause costly delays or quality issues.
              </p>
              <p className="text-[#4A5568] leading-relaxed mb-4">
                We act as your on-the-ground support partner in China — reviewing your design for manufacturability, matching you with the right factory, and following up at every milestone so nothing falls through the cracks.
              </p>
              <p className="text-[#4A5568] leading-relaxed">
                Whether you have a finished 3D drawing or just a product concept, we can help you move forward.
              </p>
            </div>
            <div className="bg-[#F7F9FC] rounded-2xl p-8">
              <h3 className="text-[#1A2332] font-semibold text-lg mb-5">Project Capabilities</h3>
              <ul className="grid grid-cols-1 gap-3">
                {capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E87722] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1A2332] text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Phases */}
      <section className="py-16 md:py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#1B4F8A]/10 text-[#1B4F8A] text-xs font-semibold px-3 py-1 rounded-full mb-3">Development Process</span>
            <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Custom Mold Development Phases</h2>
            <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">We follow a structured process to ensure quality and transparency at every stage of your custom mold project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#1B4F8A]/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#1B4F8A]" />
                  </div>
                  <span className="text-[#1B4F8A]/30 font-bold text-2xl">0{i + 1}</span>
                </div>
                <h3 className="text-[#1A2332] font-semibold mb-2">{title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Send */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-[#1B4F8A]/10 text-[#1B4F8A] text-xs font-semibold px-3 py-1 rounded-full mb-4">Getting Started</span>
            <h2 className="text-3xl font-bold text-[#1A2332] mb-5">What You Can Send Us</h2>
            <p className="text-[#4A5568] text-lg mb-8">You don't need a complete technical package to get started. We work with whatever you have.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { label: '3D Drawing or CAD File', sub: '.STEP, .IGES, .STL, .DWG' },
              { label: 'Product Photo or Sample', sub: 'Physical sample or reference image' },
              { label: 'Sketch or Concept', sub: 'Hand-drawn or digital sketch' },
              { label: 'Written Description', sub: 'Dimensions, material, quantity, use case' },
            ].map(({ label, sub }) => (
              <div key={label} className="bg-[#F7F9FC] border border-[#E2E8F0] rounded-xl p-5 text-center">
                <div className="w-10 h-10 bg-[#1B4F8A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-5 h-5 text-[#1B4F8A]" />
                </div>
                <p className="text-[#1A2332] font-semibold text-sm mb-1">{label}</p>
                <p className="text-[#4A5568] text-xs">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background: '#1B4F8A'}} className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Custom Mold Project</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Share your design or requirement and we'll review it, match a suitable factory, and guide you through the full development process.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E87722] hover:bg-[#C9651A] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Send Your Project Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
