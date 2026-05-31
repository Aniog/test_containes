import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#080c18]">
      {/* Header */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1629] to-[#080c18]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#4ade80]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="text-[#4ade80] text-sm tracking-widest uppercase font-medium">
            Our Story
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mt-3 mb-4"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            About Fictum
          </h1>
          <p className="text-slate-400 text-lg">
            The museum that celebrates what never was — and what might yet be.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2
              className="text-[#4ade80] text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              Our Mission
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              Fictum was founded in 2031 by a group of historians, engineers, and
              storytellers who believed that the inventions that never existed deserve
              as much attention as those that did. Every failed experiment, every
              impossible dream, every device that existed only in the mind of its
              creator — these are the artifacts of human imagination at its most
              unrestrained.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              We collect, preserve, and celebrate these fictional inventions not as
              curiosities, but as windows into the hopes and fears of the eras that
              imagined them. A gravity umbrella tells us something profound about
              humanity's desire to transcend its earthly limitations. A memory printer
              reveals our complicated relationship with the past.
            </p>
          </div>

          <div className="bg-[#0f1629] border border-slate-700/50 rounded-2xl p-8">
            <h2
              className="text-[#4ade80] text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              Curatorial Standards
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              Every exhibit in our collection meets our rigorous standards for
              fictional authenticity. Each invention must:
            </p>
            <ul className="space-y-3">
              {[
                "Be demonstrably impossible by current scientific understanding",
                "Have a plausible fictional inventor with a documented (fictional) history",
                "Solve a genuine human problem, however impractically",
                "Have at least one documented (fictional) incident of misuse or unintended consequence",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="text-[#4ade80] mt-0.5 flex-shrink-0">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className="text-[#4ade80] text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              The Curatorial Board
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Dr. Amara Osei", role: "Chief Curator, Temporal Devices" },
                { name: "Prof. Lena Marchetti", role: "Head of Atmospheric Sciences" },
                { name: "Yuki Tanaka", role: "Curator of Cognitive Technology" },
                { name: "Ravi Krishnamurthy", role: "Director of Deep-Sea Exhibits" },
              ].map((member) => (
                <div
                  key={member.name}
                  className="bg-[#0f1629] border border-slate-700/50 rounded-xl p-4"
                >
                  <div className="text-white font-semibold text-sm mb-1">{member.name}</div>
                  <div className="text-slate-500 text-xs">{member.role}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-8 border-t border-slate-700/40">
            <p className="text-slate-400 mb-6">
              Ready to explore the collection?
            </p>
            <Link
              to="/museum"
              className="inline-flex items-center gap-2 bg-[#4ade80] text-[#080c18] font-bold px-8 py-4 rounded-xl hover:bg-[#86efac] transition-colors"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              Enter the Museum
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
