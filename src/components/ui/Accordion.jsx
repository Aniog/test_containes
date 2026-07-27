import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext(null);

function Accordion({ children, defaultValue = null, type = "single", collapsible = true }) {
  const [open, setOpen] = React.useState(defaultValue);

  const toggle = (value) => {
    if (type === "single") {
      setOpen((prev) => (collapsible && prev === value ? null : value));
    }
  };

  return (
    <AccordionContext.Provider value={{ open, toggle }}>
      <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ value, children }) {
  return <div className="accordion-item">{children}</div>;
}

function AccordionTrigger({ value, children }) {
  const { open, toggle } = React.useContext(AccordionContext);
  const isOpen = open === value;

  return (
    <button
      type="button"
      onClick={() => toggle(value)}
      className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-slate-900 hover:bg-slate-50"
    >
      {children}
      <ChevronDown className={cn("h-5 w-5 text-slate-500 transition-transform", isOpen && "rotate-180")} />
    </button>
  );
}

function AccordionContent({ value, children }) {
  const { open } = React.useContext(AccordionContext);
  const isOpen = open === value;

  return (
    <div
      className={cn(
        "overflow-hidden transition-all",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className="px-6 pb-4 text-slate-600">{children}</div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
