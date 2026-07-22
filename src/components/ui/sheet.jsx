import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const SheetContext = React.createContext(null);

function useSheet() {
  const context = React.useContext(SheetContext);
  if (!context) throw new Error("Sheet parts must be used within <Sheet>");
  return context;
}

const Sheet = ({ open, onOpenChange, children }) => {
  return (
    <SheetContext.Provider value={{ open, onOpenChange }}>
      {children}
    </SheetContext.Provider>
  );
};

const SheetTrigger = ({ asChild, children, ...props }) => {
  const { onOpenChange } = useSheet();
  if (asChild) {
    return React.cloneElement(children, { onClick: () => onOpenChange(true), ...props });
  }
  return (
    <button onClick={() => onOpenChange(true)} {...props}>
      {children}
    </button>
  );
};

const SheetContent = React.forwardRef(({ className, side = "right", children, ...props }, ref) => {
  const { open, onOpenChange } = useSheet();
  const panelRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-brand-warm-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => onOpenChange(false)}
      />
      <div
        ref={(node) => {
          panelRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(
          "absolute bg-brand-ivory shadow-2xl transition-transform duration-300 ease-out",
          side === "right" && "right-0 top-0 h-full w-full max-w-md translate-x-0",
          side === "left" && "left-0 top-0 h-full w-full max-w-md translate-x-0",
          side === "top" && "left-0 top-0 w-full max-h-96 translate-y-0",
          side === "bottom" && "left-0 bottom-0 w-full max-h-96 translate-y-0",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
});
SheetContent.displayName = "SheetContent";

export { Sheet, SheetTrigger, SheetContent };
