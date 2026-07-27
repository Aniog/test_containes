import { Search, FileCheck, ClipboardList, Camera, Truck, Headset } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Submit Your Request",
    desc: "Tell us what product you need, target price, quantity, and destination. We review within 24 hours.",
  },
  {
    step: "02",
    icon: FileCheck,
    title: "Supplier Shortlist",
    desc: "We source 3-5 qualified factories, check certifications, and send you profiles with quotes.",
  },
  {
    step: "03",
    icon: ClipboardList,
    title: "Factory Verification",
    desc: "Our team visits the top candidates to audit facilities, review samples, and confirm capabilities.",
  },
  {
    step: "04",
    icon: Camera,
    title: "Quality Inspection",
    desc: "We inspect during production and before shipment, providing photo reports and defect analysis.",
  },
  {
    step: "05",
    icon: Truck,
    title: "Shipping & Delivery",
    desc: "We coordinate freight, customs docs, and consolidation. You track everything until arrival.",
  },
  {
    step: "06",
    icon: Headset,
    title: "Ongoing Support",
    desc: "Need reorders or have issues? We stay available for follow-up sourcing and supplier management.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-lg text-slate-600">
            A transparent, step-by-step process designed to minimize risk and
            deliver consistent quality.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative rounded-xl border border-slate-200 bg-white p-6"
            >
              <div className="absolute top-4 right-4 text-4xl font-extrabold text-slate-100 select-none">
                {s.step}
              </div>
              <div className="w-12 h-12 rounded-lg bg-brand-800 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
