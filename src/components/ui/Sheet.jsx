import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const DURATION = 300;

export function Sheet({ open, onClose, children, side = "right", className }) {
  const [closing, setClosing] = useState(false);
  const visible = open && !closing;
  const isRight = side === "right";

  useEffect(() => {
    if (open) {
      setClosing(false);
      return;
    }
    setClosing(true);
    const id = setTimeout(() => setClosing(false), DURATION);
    return () => clearTimeout(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open && !closing) return null;

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-base/40 backdrop-blur-sm transition-opacity duration-300",
          visible ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          "fixed top-0 z-50 h-full w-full max-w-md bg-cream shadow-2xl transition-transform duration-300 ease-out",
          isRight ? "right-0" : "left-0",
          visible ? "translate-x-0" : isRight ? "translate-x-full" : "-translate-x-full",
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-full flex-col">
          {children}
        </div>
      </div>
    </>
  );
}

export function SheetHeader({ children, className, onClose }) {
  return (
    <div className={cn("flex items-center justify-between border-b border-hairline px-6 py-4", className)}>
      {children}
      {onClose && (
        <button
          onClick={onClose}
          className="text-muted transition-colors hover:text-base-800"
          aria-label="Close panel"
        >
          <X size={22} />
        </button>
      )}
    </div>
  );
}

export function SheetContent({ children, className }) {
  return <div className={cn("flex-1 overflow-y-auto", className)}>{children}</div>;
}

export function SheetFooter({ children, className }) {
  return <div className={cn("border-t border-hairline px-6 py-5", className)}>{children}</div>;
}
