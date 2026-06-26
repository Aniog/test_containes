import React from "react";
import {
  Search,
  BadgeCheck,
  ShieldCheck,
  ClipboardList,
  Truck,
  Tag,
  HelpCircle,
  Star,
} from "lucide-react";

const MAP = {
  search: Search,
  "badge-check": BadgeCheck,
  shield: ShieldCheck,
  clipboard: ClipboardList,
  truck: Truck,
  tag: Tag,
  help: HelpCircle,
  star: Star,
};

const Icon = ({ name, className = "w-6 h-6", strokeWidth = 1.8 }) => {
  const C = MAP[name] || Search;
  return <C className={className} strokeWidth={strokeWidth} />;
};

export default Icon;