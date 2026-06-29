import { Sun, Cloud, CloudRain, Wind, Droplets, Eye, Gauge, Snowflake, CloudFog } from "lucide-react";

const conditionConfig = {
  Sunny: {
    icon: Sun,
    bg: "bg-amber-500/20",
    text: "text-amber-300",
    border: "border-amber-500/30",
  },
  "Partly Cloudy": {
    icon: Cloud,
    bg: "bg-slate-600/40",
    text: "text-slate-300",
    border: "border-slate-500/30",
  },
  Cloudy: {
    icon: Cloud,
    bg: "bg-slate-600/40",
    text: "text-slate-300",
    border: "border-slate-500/30",
  },
  Rainy: {
    icon: CloudRain,
    bg: "bg-blue-500/20",
    text: "text-blue-300",
    border: "border-blue-500/30",
  },
  Stormy: {
    icon: CloudRain,
    bg: "bg-purple-500/20",
    text: "text-purple-300",
    border: "border-purple-500/30",
  },
  Snowy: {
    icon: Snowflake,
    bg: "bg-cyan-500/20",
    text: "text-cyan-300",
    border: "border-cyan-500/30",
  },
  Foggy: {
    icon: CloudFog,
    bg: "bg-slate-500/20",
    text: "text-slate-400",
    border: "border-slate-400/30",
  },
};

export default function ConditionBadge({ condition }) {
  const config = conditionConfig[condition] || conditionConfig["Partly Cloudy"];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium border ${config.bg} ${config.text} ${config.border}`}
    >
      <Icon className="w-3 h-3" />
      {condition}
    </span>
  );
}
