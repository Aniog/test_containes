import { useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Zap } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getInventionById, inventions } from "@/data/inventions";

const statusColors = {
  "Prototype Lost": "bg-slate-700/50 text-slate-300 border-slate-600/50",
  Decommissioned: "bg-red-900/30 text-red-300 border-red-700/40",
  Recalled: "bg-orange-900/30 text-orange-300 border-orange-700/40",
  "Operational (Classified)": "bg-emerald-900/30 text-emerald-300 border-emerald-700/40",
  Discontinued: "bg-slate-700/50 text-slate-300 border-slate-600/50",
  "In Development": "bg-blue-900/30 text-blue-300 border-blue-700/40",
  Theoretical: "bg-purple-900/30 text-purple-300 border-purple-700/40",
};

const InventionDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const invention = getInventionById(id);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!invention) {
    return (
      <div className="min-h-screen bg-[#080c18] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔭</div>
          <h2
            className="text-white text-2xl font-bold mb-2"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Exhibit Not Found
          </h2>
          <p className="text-slate-400 mb-6">
            This invention may have been lost to time.
          </p>
          <Link
            to="/museum"
            className="bg-[#c084fc] text-[#080c18] font-bold px-6 py-3 rounded-lg hover:bg-[#e9d5ff] transition-colors"
          >
            Return to Museum
          </Link>
        </div>
      </div>
    );
  }

  const statusClass =
    statusColors[invention.status] ||
    "bg-slate-700/50 text-slate-300 border-slate-600/50";

  const otherInventions = inventions
    .filter((inv) => inv.id !== invention.id)
    .slice(0, 3);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#080c18]">
      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <div
          className={`relative h-72 md:h-96 bg-gradient-to-br ${invention.color} overflow-hidden`}
        >
          <img
            alt={invention.name}
            data-strk-img-id={invention.imgId}
            data-strk-img={`[${invention.descId}] [${invention.titleId}]`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="1400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080c18] via-[#080c18]/40 to-transparent" />

          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </button>

          {/* Icon */}
          <div className="absolute bottom-8 left-6 md:left-12 text-7xl drop-shadow-2xl">
            {invention.icon}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
            {/* Left: Main Info */}
            <div className="lg:col-span-2">
              {/* Title & Meta */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className="text-xs px-3 py-1 rounded-full border font-medium"
                    style={{
                      backgroundColor: `${invention.accentColor}15`,
                      color: invention.accentColor,
                      borderColor: `${invention.accentColor}40`,
                    }}
                  >
                    {invention.category}
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full border ${statusClass}`}>
                    {invention.status}
                  </span>
                </div>

                <h1
                  id={invention.titleId}
                  className="text-4xl md:text-5xl font-bold text-white mb-3"
                  style={{ fontFamily: "Cinzel, serif" }}
                >
                  {invention.name}
                </h1>
                <p
                  className="text-xl italic mb-6"
                  style={{ color: invention.accentColor }}
                >
                  {invention.tagline}
                </p>

                <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Era {invention.era}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{invention.inventor}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2
                  className="text-[#c084fc] text-sm font-semibold tracking-widest uppercase mb-4"
                  style={{ fontFamily: "Cinzel, serif" }}
                >
                  Overview
                </h2>
                <p
                  id={invention.descId}
                  className="text-slate-300 text-base leading-relaxed"
                >
                  {invention.description}
                </p>
              </div>

              {/* Long Description */}
              {invention.longDescription && (
                <div className="mb-8">
                  <h2
                    className="text-[#c084fc] text-sm font-semibold tracking-widest uppercase mb-4"
                    style={{ fontFamily: "Cinzel, serif" }}
                  >
                    Curator's Notes
                  </h2>
                  <div className="space-y-4">
                    {invention.longDescription.split("\n\n").map((para, i) => (
                      <p key={i} className="text-slate-300 text-base leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Specs Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Specs Card */}
                <div className="bg-[#0f1629] border border-slate-700/50 rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-5">
                    <Zap className="w-4 h-4 text-[#c084fc]" />
                    <h3
                      className="text-[#c084fc] text-sm font-semibold tracking-widest uppercase"
                      style={{ fontFamily: "Cinzel, serif" }}
                    >
                      Technical Specifications
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {invention.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex justify-between items-start gap-4 pb-4 border-b border-slate-700/40 last:border-0 last:pb-0"
                      >
                        <span className="text-slate-500 text-sm">{spec.label}</span>
                        <span className="text-white text-sm font-medium text-right">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Card */}
                <div
                  className="rounded-2xl p-6 border"
                  style={{
                    backgroundColor: `${invention.accentColor}08`,
                    borderColor: `${invention.accentColor}30`,
                  }}
                >
                  <h3
                    className="text-sm font-semibold tracking-widest uppercase mb-3"
                    style={{ color: invention.accentColor, fontFamily: "Cinzel, serif" }}
                  >
                    Current Status
                  </h3>
                  <div className={`inline-flex text-sm px-3 py-1.5 rounded-full border ${statusClass}`}>
                    {invention.status}
                  </div>
                  <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                    All information in this exhibit is based on recovered documents,
                    eyewitness accounts, and educated speculation by our curatorial team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700/40 mt-16 pt-16">
            <h2
              className="text-2xl font-bold text-white mb-8"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              More from the Collection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherInventions.map((inv) => (
                <Link
                  key={inv.id}
                  to={`/museum/${inv.id}`}
                  className="group bg-[#0f1629] border border-slate-700/50 rounded-xl p-5 hover:border-[#c084fc]/40 hover:bg-[#141d35] transition-all"
                >
                  <div className="text-3xl mb-3">{inv.icon}</div>
                  <h3
                    className="text-white font-semibold group-hover:text-[#c084fc] transition-colors mb-1"
                    style={{ fontFamily: "Cinzel, serif" }}
                  >
                    {inv.name}
                  </h3>
                  <p className="text-slate-500 text-xs">{inv.category}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InventionDetailPage;
