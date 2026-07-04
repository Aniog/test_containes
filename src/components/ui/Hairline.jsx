import React from "react";
import { cn } from "@/lib/utils.js";

const Hairline = ({ tone = "champagne", className }) => {
  const colors = {
    champagne: "bg-champagne/30",
    ink: "bg-ink/10",
    cream: "bg-cream/20",
  };
  return <div className={cn("h-px w-full", colors[tone], className)} />;
};

export default Hairline;
