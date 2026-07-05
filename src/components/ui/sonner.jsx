import { Toaster as SonnerToaster } from "sonner";

const Toaster = (props) => {
  return (
    <SonnerToaster
      position="top-right"
      richColors
      closeButton
      duration={3000}
      toastOptions={{
        style: {
          background: "#1F1A14",
          color: "#FBF7EE",
          border: "1px solid #2A2118",
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "13px",
          letterSpacing: "0.02em",
        },
        className: "velmora-toast",
      }}
      {...props}
    />
  );
};

export { Toaster };
