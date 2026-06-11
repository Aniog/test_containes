import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group"
      position="top-center"
      closeButton
      richColors
      {...props}
    />
  )
}

export { Toaster }