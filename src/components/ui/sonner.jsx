import React from "react"
import { Toaster as SonnerToaster, toast } from "sonner"

const Toaster = ({ ...props }) => {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{
        className: "border-border bg-background text-foreground",
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
