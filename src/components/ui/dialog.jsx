import * as React from "react";
import { cn } from "@/lib/utils";

export function Dialog({ open, onClose, children, className }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100]">
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-[2px] animate-fade-in"
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute inset-0 flex",
          className
        )}
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "ml-auto h-full bg-bone shadow-drawer animate-slide-in-right flex flex-col w-full sm:max-w-md"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
