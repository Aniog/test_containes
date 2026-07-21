import { Toaster as Sonner } from "sonner";

// Velmora-themed toaster: warm cream/ink with a gold accent.
const Toaster = (props) => {
  return (
    <Sonner
      theme="light"
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "group toast bg-cream-100 text-ink-800 border border-hairline/70 shadow-soft",
          description: "text-muted-500",
          actionButton: "bg-ink-800 text-cream-100",
          cancelButton: "bg-sand-100 text-ink-800",
          success: "border-l-2 border-l-gold-400",
          error: "border-l-2 border-l-red-400",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
export { toast } from "sonner";
