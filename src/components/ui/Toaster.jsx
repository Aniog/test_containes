import { Toaster as Sonner } from "sonner"

export function Toaster() {
  return (
    <Sonner
      position="top-center"
      closeButton
      className="sonner-toast"
      toastOptions={{
        style: {
          background: '#2C2522',
          color: '#F8F5F1',
          border: 'none',
        },
      }}
    />
  )
}
