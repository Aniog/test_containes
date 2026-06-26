import { CheckCircle2 } from "lucide-react";

const highlights = [
  "German-engineered hydraulic systems",
  "CE and ISO 9001 certified manufacturing",
  "5-year warranty on core components",
  "Remote diagnostics and IoT connectivity",
  "Custom tooling and automation options",
  "24/7 technical support hotline",
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
              Our Promise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
              Built for Industry, Trusted Worldwide
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              For over 25 years, ARTITECT MACHINERY has been the partner of choice for metal fabricators seeking precision, reliability, and long-term value. Our machines are engineered in partnership with leading European design houses and manufactured to the highest standards.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-navy-800 rounded-xl p-6 text-center border border-navy-700">
              <div className="text-3xl sm:text-4xl font-bold text-gold-400 mb-1">
                25+
              </div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="bg-navy-800 rounded-xl p-6 text-center border border-navy-700">
              <div className="text-3xl sm:text-4xl font-bold text-gold-400 mb-1">
                3,000+
              </div>
              <div className="text-sm text-slate-400">Machines Sold</div>
            </div>
            <div className="bg-navy-800 rounded-xl p-6 text-center border border-navy-700">
              <div className="text-3xl sm:text-4xl font-bold text-gold-400 mb-1">
                40+
              </div>
              <div className="text-sm text-slate-400">Countries Served</div>
            </div>
            <div className="bg-navy-800 rounded-xl p-6 text-center border border-navy-700">
              <div className="text-3xl sm:text-4xl font-bold text-gold-400 mb-1">
                99.2%
              </div>
              <div className="text-sm text-slate-400">Uptime Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
