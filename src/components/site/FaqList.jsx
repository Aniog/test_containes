import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FaqList({ items }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {items.map((item, idx) => {
        const open = openIdx === idx;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 md:px-6 py-5 text-left"
              onClick={() => setOpenIdx(open ? -1 : idx)}
              aria-expanded={open}
            >
              <span className="text-base md:text-lg font-semibold text-navy-900">
                {item.q}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-navy-700 flex-shrink-0 transition-transform",
                  open && "rotate-180",
                )}
              />
            </button>
            {open && (
              <div className="px-5 md:px-6 pb-6 -mt-1 text-slate-600 leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
