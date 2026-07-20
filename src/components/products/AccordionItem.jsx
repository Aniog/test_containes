import { ChevronDown } from "lucide-react";

const AccordionItem = ({ title, content, open, onToggle }) => (
  <div className="border-b border-stone-200 py-5">
    <button
      type="button"
      className="flex w-full items-center justify-between gap-4 text-left"
      onClick={onToggle}
    >
      <span className="product-name text-sm">{title}</span>
      <ChevronDown
        className={`h-4 w-4 text-stone-500 transition ${open ? "rotate-180" : ""}`}
      />
    </button>
    {open ? <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">{content}</p> : null}
  </div>
);

export default AccordionItem;
