import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sheet({ open, onOpenChange, children, side = "right", className }) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-velmora-fg/40 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div
        className={cn(
          "absolute top-0 h-full w-full max-w-md bg-velmora-cream shadow-2xl transition-transform duration-300 ease-out",
          side === "right" ? "right-0" : "left-0",
          open ? "translate-x-0" : side === "right" ? "translate-x-full" : "-translate-x-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function SheetHeader({ children, className, onClose }) {
  return (
    <div className={cn("flex items-center justify-between border-b border-velmora-border px-6 py-4", className)}>
      {children}
      {onClose && (
        <button
          onClick={onClose}
          className="rounded p-1 text-velmora-muted transition-colors hover:text-velmora-fg"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export function SheetTitle({ children, className }) {
  return (
    <h2 className={cn("font-serif text-xl tracking-wide text-velmora-fg", className)}>
      {children}
    </h2>
  );
}

export function SheetBody({ children, className }) {
  return <div className={cn("px-6 py-6", className)}>{children}</div>;
}

export function SheetFooter({ children, className }) {
  return (
    <div className={cn("border-t border-velmora-border px-6 py-4", className)}>
      {children}
    </div>
  );
}
