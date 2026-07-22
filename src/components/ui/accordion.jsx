import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext(null);

function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("Accordion parts must be used within <Accordion>");
  return context;
}

const Accordion = React.forwardRef(({ type = "single", collapsible = false, defaultValue, value: controlledValue, onValueChange, children, className, ...props }, ref) => {
  const isSingle = type === "single";
  const [internalValue, setInternalValue] = React.useState(() =>
    isSingle ? (defaultValue ?? "") : (defaultValue ?? [])
  );
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const toggle = (item) => {
    let next;
    if (isSingle) {
      next = collapsible ? (value === item ? "" : item) : item;
    } else {
      next = value.includes(item) ? value.filter((v) => v !== item) : [...value, item];
    }
    if (!isControlled) setInternalValue(next);
    onValueChange?.(next);
  };

  return (
    <AccordionContext.Provider value={{ value, toggle, isSingle }}>
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
});
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef(({ value, children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("border-b border-brand-charcoal/10", className)} {...props}>
      {children}
    </div>
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(({ children, className, value, ...props }, ref) => {
  const { value: state, toggle } = useAccordion();
  const open = Array.isArray(state) ? state.includes(value) : state === value;

  return (
    <button
      ref={ref}
      onClick={() => toggle(value)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left text-sm font-medium uppercase tracking-widest transition-all hover:text-brand-rose-dark",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn("h-4 w-4 shrink-0 text-brand-taupe transition-transform duration-300", open && "rotate-180")}
      />
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(({ children, className, value, ...props }, ref) => {
  const { value: state } = useAccordion();
  const open = Array.isArray(state) ? state.includes(value) : state === value;
  const contentRef = React.useRef(null);

  return (
    <div
      ref={(node) => {
        contentRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      className={cn(
        "grid overflow-hidden text-sm leading-relaxed text-brand-charcoal/80 transition-all duration-300 ease-out",
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      )}
      {...props}
    >
      <div className={cn("overflow-hidden", className)}>
        <div className="pb-5">{children}</div>
      </div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
