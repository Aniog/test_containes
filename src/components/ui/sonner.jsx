import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      position="bottom-center"
      toastOptions={{
        style: {
          background: "#1D1712",
          color: "#FAF6EF",
          border: "1px solid rgba(250,246,239,0.14)",
          borderRadius: "2px",
          fontFamily: "Manrope, sans-serif",
          fontSize: "13px",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
