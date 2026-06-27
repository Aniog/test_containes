import * as React from "react";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

/**
 * Lightweight accordion using <details>/<summary> for accessibility.
 * Each child must be an <AccordionItem title="..."> ... </AccordionItem>.
 */
export function Accordion({ children, className, defaultIndex = 0 }) {
  const items = React.Children.toArray(children);
  return (
    <div className={cn("divide-y divide-hairline border-y border-hairline", className)}>
      {items.map((child, i) => {
        if (!React.isValidElement(child)) return null;
        return React.cloneElement(child, {
          // Force first item open by default if defaultIndex is 0
          defaultOpen: child.props.defaultOpen ?? i === defaultIndex,
          key: child.key ?? i,
        });
      })}
    </div>
  );
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className,
}) {
  return (
    <details
      className={cn("group", className)}
      open={defaultOpen}
    >
      <summary
        className={cn(
          "flex items-center justify-between gap-4 py-5 cursor-pointer list-none",
          "transition-colors duration-300 hover:text-gold-deep"
        )}
      >
        <span className="font-sans text-xs uppercase tracking-button font-medium text-ink group-hover:text-gold-deep">
          {title}
        </span>
        <Plus
          strokeWidth={1.25}
          className="w-4 h-4 text-ink-muted transition-transform duration-300 group-open:rotate-45"
        />
      </summary>
      <div className="pb-6 pr-8 text-sm text-ink-muted leading-relaxed">
        {children}
      </div>
    </details>
  );
}
