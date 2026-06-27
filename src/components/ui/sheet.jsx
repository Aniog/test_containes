import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

/**
 * Lightweight modal-less drawer. Slides in from the right.
 * - Closes on backdrop click, ESC, and explicit close button.
 * - Locks body scroll while open.
 */
export function Sheet({ open, onClose, side = "right", className, children, ariaLabel = "Panel" }) {
  React.useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-[100] transition-opacity duration-400",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-cocoa/60 transition-opacity duration-400",
          open ? "opacity-100" : "opacity-0"
        )}
      />
      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        className={cn(
          "absolute top-0 bottom-0 w-full sm:max-w-md bg-ivory shadow-[0_8px_30px_-12px_rgba(26,20,16,0.18)]",
          "transition-transform duration-400 ease-out flex flex-col",
          side === "right"
            ? cn("right-0", open ? "translate-x-0" : "translate-x-full")
            : cn("left-0", open ? "translate-x-0" : "-translate-x-full"),
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function SheetHeader({ children, onClose, className }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-6 h-16 border-b border-hairline flex-shrink-0",
        className
      )}
    >
      {children}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close panel"
          className="ml-auto -mr-1 text-ink hover:text-gold-deep transition-colors duration-300"
        >
          <X strokeWidth={1.25} className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export function SheetTitle({ children, className }) {
  return (
    <h2
      className={cn(
        "font-serif text-xl text-ink",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SheetBody({ children, className }) {
  return (
    <div className={cn("flex-1 overflow-y-auto px-6 py-6", className)}>
      {children}
    </div>
  );
}

export function SheetFooter({ children, className }) {
  return (
    <div
      className={cn(
        "flex-shrink-0 px-6 py-5 border-t border-hairline bg-ivory",
        className
      )}
    >
      {children}
    </div>
  );
}
