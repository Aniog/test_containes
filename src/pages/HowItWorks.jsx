import { Link } from "react-router-dom";
import { ArrowRight, Search, FileCheck, Handshake, ClipboardCheck, Truck, CheckCircle, Shield, Users, Clock, FileText } from "lucide-react";

const steps = [
  { step: 1, icon: FileText, title: "Submit Inquiry", description: "Tell us your product requirements." },
  { step: 2, icon: Search, title: "We Research", description: "Identify suitable suppliers." },
  { step: 3, icon: FileCheck, title: "Receive Report", description: "Get detailed supplier comparisons." },
  { step: 4, icon: Handshake, title: "You Select", description: "Choose your preferred supplier." },
  { step: 5, icon: ClipboardCheck, title: "Production & QC", description: "Monitor production with quality checks." },
  { step: 6, icon: Truck, title: "Shipping", description: "Coordinate logistics and delivery." },
];

const HowItWorks = () => (
  <div>
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">How Our Sourcing Process Works</h1>
        <p className="text-xl text-slate-300 mb-8">A transparent, systematic approach from inquiry to delivery.</p>
        <Link to="/contact" className="btn-primary text-lg px-8 py-4">Start Your Project <ArrowRight className="w-5 h-5" /></Link>
      </div>
    </section>
    
    <section className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="badge badge-primary mb-4">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Six Simple Steps</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="bg-white rounded-xl p-8 border border-slate-200 card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <s.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-slate-200 mb-4">{String(s.step).padStart(2, "0")}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="badge badge-primary mb-4">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The SSourcing China Advantage</h2>
            <div className="space-y-6">
              <div className="flex gap-4"><div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"><Shield className="w-6 h-6 text-blue-600" /></div><div><h4 className="font-semibold">Verified Suppliers</h4><p className="text-sm text-slate-600">Every supplier is vetted before introduction.</p></div></div>
              <div className="flex gap-4"><div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"><Users className="w-6 h-6 text-blue-600" /></div><div><h4 className="font-semibold">Bilingual Team</h4><p className="text-sm text-slate-600">Native speakers bridge communication gaps.</p></div></div>
              <div className="flex gap-4"><div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"><Clock className="w-6 h-6 text-blue-600" /></div><div><h4 className="font-semibold">Fast Response</h4><p className="text-sm text-slate-600">We respond within 24 hours.</p></div></div>
              <div className="flex gap-4"><div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"><FileText className="w-6 h-6 text-blue-600" /></div><div><h4 className="font-semibold">Transparent Reporting</h4><p className="text-sm text-slate-600">Detailed reports at every stage.</p></div></div>
            </div>
          </div>
          <div className="bg-slate-100 rounded-2xl h-80 flex items-center justify-center">
            <p className="text-slate-500">Process illustration</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-spacing bg-blue-600 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start?</h2>
        <p className="text-blue-100 text-lg mb-8">Get a free consultation and quote today.</p>
        <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 inline-flex items-center gap-2">Get a Free Quote <ArrowRight className="w-5 h-5" /></Link>
      </div>
    </section>
  </div>
);

export default HowItWorks;
