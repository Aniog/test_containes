import { Toaster as SonnerToaster } from "sonner"

export default function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#1a1a1a",
          color: "#f5f0eb",
          border: "1px solid #2a2a2a",
          fontFamily: "Inter, sans-serif",
          fontSize: "13px",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          borderRadius: "0",
        },
      }}
    />
  )
}