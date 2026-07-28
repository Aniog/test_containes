import * as Lucide from "lucide-react";

export default function Icon({ name, className = "w-5 h-5", strokeWidth = 1.75 }) {
  const Cmp = Lucide[name];
  if (!Cmp) return null;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
