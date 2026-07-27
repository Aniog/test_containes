import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const SheetContext = React.createContext(null);

function Sheet({ children, open, onOpenChange }) {
  return (
    <SheetContext.Provider value={{ open, onOpenChange }}>
      {children}
    </SheetContext.Provider>
  );
}

function SheetTrigger({ children, asChild = false }) {
  const { onOpenChange } = React.useContext(SheetContext);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { onClick: () => onOpenChange(true) });
  }
  return <button onClick={() => onOpenChange(true)}>{children}</button>;
}

function SheetContent({ children, side = "right", className }) {
  const { open, onOpenChange } = React.useContext(SheetContext);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-slate-950/50"
            onClick={() => onOpenChange(false)}
          />
          <div
            className={cn(
              "absolute top-0 h-full w-[280px] bg-white p-6 shadow-xl transition-transform",
              side === "right" ? "right-0" : "left-0",
              className
            )}
          >
            <button
              onClick={() => onOpenChange(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
            >
              <X className="h-5 w-5 text-slate-700" />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export { Sheet, SheetTrigger, SheetContent };
