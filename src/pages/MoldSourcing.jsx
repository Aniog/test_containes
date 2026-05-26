import { Link } from 'react-router-dom';
import { Search, CheckCircle, ArrowRight, FileText, GitCompare, Users, Globe } from 'lucide-react';

const steps = [
  { icon: FileText, title: 'Submit Your Mold Requirement', desc: 'Share your drawings, product photos, sample references, or a written description. Any format works — we will review it and ask follow-up questions if needed.' },
  { icon: Search, title: 'Requirement Review', desc: 'Our team reviews your project details, clarifies specifications, and assesses the scope of sourcing needed — mold type, material, cavity count, tolerance, and more.' },
  { icon: Users, title: 'Factory Matching', desc: 'We identify suitable factory resources from our network based on your project requirements, production volume, and budget range.' },
  { icon: GitCompare, title: 'Quotation Comparison', desc: 'We collect quotations from multiple factories and present a clear, side-by-side comparison so you can make an informed decision.' },
  { icon: CheckCircle, title: 'Confirmation & Follow-up', desc: 'Once you confirm a factory, we follow up on tooling progress, sample production, and quality checks throughout the project.' },
  { icon: Globe, title: 'Delivery Coordination', desc: 'We assist with pre-shipment inspection and coordinate international delivery to your destination country.' },
];

const benefits = [
  'No need to search and vet factories yourself',
  'Multiple quotations for price comparison',
  'English-language communication throughout',
  'Factory capability verified before recommendation',
  'Ongoing follow-up from tooling to delivery',
  'Suitable for buyers with no China sourcing experience',
];

export default function MoldSourcing() {
  return (
    <div>
      {/* Hero */}
      <section style={{background: 'linear-gradient(135deg, #1B4F8A 0%, #163F6E 100%)'}} className="text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">Mold Sourcing</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Find the Right Mold Factory in China
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              We help overseas buyers identify, evaluate, and engage suitable mold factories in China — without the guesswork. From requirement review to quotation comparison and delivery, we manage the process on your behalf.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#E87722] hover:bg-[#C9651A] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              Submit Your Requirement <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What is Mold Sourcing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#1B4F8A]/10 text-[#1B4F8A] text-xs font-semibold px-3 py-1 rounded-full mb-4">What We Do</span>
              <h2 className="text-3xl font-bold text-[#1A2332] mb-5">We Are Your Sourcing Partner, Not a Factory</h2>
              <p className="text-[#4A5568] leading-relaxed mb-4">
                Case Mold Trading is not a factory and not a public marketplace. We are a dedicated sourcing and support partner that works directly with overseas buyers to find the right manufacturing resources in China.
              </p>
              <p className="text-[#4A5568] leading-relaxed mb-4">
                When you send us a mold requirement, we review the project, identify suitable factories, collect and compare quotations, and follow up at every stage — from tooling and sampling through to production and delivery.
              </p>
              <p className="text-[#4A5568] leading-relaxed">
                Our goal is to save you time, reduce risk, and give you confidence when sourcing molds from China.
              </p>
            </div>
            <div className="bg-[#F7F9FC] rounded-2xl p-8">
              <h3 className="text-[#1A2332] font-semibold text-lg mb-5">Why Buyers Work With Us</h3>
              <ul className="flex flex-col gap-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E87722] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1A2332] text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#1B4F8A]/10 text-[#1B4F8A] text-xs font-semibold px-3 py-1 rounded-full mb-3">Our Process</span>
            <h2 className="text-3xl font-bold text-[#1A2332] mb-4">How Mold Sourcing Works</h2>
            <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">A structured process designed to give you the right factory match and full project visibility.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#1B4F8A]/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#1B4F8A]" />
                  </div>
                  <span className="text-[#1B4F8A]/40 font-bold text-2xl">0{i + 1}</span>
                </div>
                <h3 className="text-[#1A2332] font-semibold mb-2">{title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background: '#1B4F8A'}} className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Send us your mold requirement — drawing, photo, sample, or description. We'll review it and come back with a sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E87722] hover:bg-[#C9651A] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Send Your Requirement <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
