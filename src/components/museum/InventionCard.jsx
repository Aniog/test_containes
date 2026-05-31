import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const statusColors = {
  "Prototype Lost": "bg-slate-700/50 text-slate-300 border-slate-600/50",
  Decommissioned: "bg-red-900/30 text-red-300 border-red-700/40",
  Recalled: "bg-orange-900/30 text-orange-300 border-orange-700/40",
  "Operational (Classified)": "bg-emerald-900/30 text-emerald-300 border-emerald-700/40",
  Discontinued: "bg-slate-700/50 text-slate-300 border-slate-600/50",
  "In Development": "bg-blue-900/30 text-blue-300 border-blue-700/40",
  Theoretical: "bg-purple-900/30 text-purple-300 border-purple-700/40",
};

const InventionCard = ({ invention, large = false }) => {
  const statusClass =
    statusColors[invention.status] ||
    "bg-slate-700/50 text-slate-300 border-slate-600/50";

  return (
    <Link
      to={`/museum/${invention.id}`}
      className={`group block bg-[#0f1629] border border-slate-700/50 rounded-2xl overflow-hidden hover:border-[#4ade80]/50 hover:bg-[#141d35] transition-all duration-300 hover:shadow-xl hover:shadow-[#4ade80]/5 ${
        large ? "md:col-span-2" : ""
      }`}
    >
      {/* Image Area */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${invention.color} ${
          large ? "h-64 md:h-80" : "h-48"
        }`}
      >
        <img
          alt={invention.name}
          data-strk-img-id={invention.imgId}
          data-strk-img={`[${invention.descId}] [${invention.titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width={large ? "900" : "600"}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1629] via-transparent to-transparent" />

        {/* Icon */}
        <div className="absolute top-4 left-4 text-4xl drop-shadow-lg">
          {invention.icon}
        </div>

        {/* Category badge */}
        <div className="absolute top-4 right-4">
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
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Hidden text for image query */}
        <span id={invention.titleId} className="sr-only">{invention.name}</span>
        <span id={invention.descId} className="sr-only">{invention.description}</span>

        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className="text-white font-bold text-xl group-hover:text-[#4ade80] transition-colors leading-tight"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            {invention.name}
          </h3>
          <ArrowRight
            className="w-5 h-5 text-slate-600 group-hover:text-[#4ade80] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
          />
        </div>

        <p className="text-slate-400 text-sm italic mb-4">{invention.tagline}</p>

        <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 mb-4">
          {invention.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 text-xs">Era {invention.era}</span>
            <span className="text-slate-700">·</span>
            <span className="text-slate-500 text-xs">{invention.inventor}</span>
          </div>
          <span
            className={`text-xs px-2 py-1 rounded-full border ${statusClass}`}
          >
            {invention.status}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default InventionCard;
