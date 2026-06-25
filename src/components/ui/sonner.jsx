import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="top-center"
      theme="light"
      offset={24}
      toastOptions={{
        style: {
          background: "#1F1A14",
          color: "#F1E7D8",
          border: "1px solid #3B322A",
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "12.5px",
          letterSpacing: "0.06em",
          padding: "12px 18px",
          borderRadius: 0,
          boxShadow: "0 12px 32px -12px rgba(31,26,20,0.4)",
        },
        descriptionClassName: "text-ivory/70",
        classNames: {
          title: "text-ivory",
          description: "text-ivory/70",
        },
      }}
      closeButton={false}
      richColors={false}
    />
  );
}

export default Toaster;
