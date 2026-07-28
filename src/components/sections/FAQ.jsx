import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ q, a, open, onToggle }) => {
  return (
    <div className="border-b border-ink-200 last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base md:text-lg font-semibold text-ink-900">
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-ink-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="pb-6 pr-10 text-sm md:text-[15px] text-ink-700 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
};

const FAQ = ({ items, title = "Frequently asked questions", eyebrow = "FAQ" }) => {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <div>
      <div className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
          {title}
        </h2>
      </div>
      <div className="mt-8 border-t border-ink-200">
        {items.map((item, i) => (
          <FAQItem
            key={item.q}
            q={item.q}
            a={item.a}
            open={openIdx === i}
            onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
