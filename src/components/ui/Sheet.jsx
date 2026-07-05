import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sheet({ isOpen, onClose, children, side = "right", title }) {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-espresso/40 transition-opacity duration-300 z-40",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          "fixed top-0 z-50 h-full w-full max-w-md bg-cream shadow-soft transition-transform duration-300 ease-soft flex flex-col",
          side === "right" ? "right-0" : "left-0",
          isOpen ? "translate-x-0" : side === "right" ? "translate-x-full" : "-translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-stonehair">
          <h2 className="font-serif text-xl tracking-wide">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -mr-2 text-taupe hover:text-espresso transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </>
  );
}
