import React from "react"
import { Toaster as SonnerToaster } from "sonner"

export function Toaster(props) {
  return (
    <SonnerToaster
      position="top-center"
      richColors={false}
      closeButton={false}
      duration={2400}
      toastOptions={{
        classNames: {
          toast:
            "!bg-ink !text-bone !border !border-ink/30 !rounded-none !shadow-soft !px-5 !py-4 !text-[12px] !uppercase !tracking-[0.18em] !font-medium",
          title: "!text-bone",
          description: "!text-bone/70 !normal-case !tracking-normal",
        },
      }}
      {...props}
    />
  )
}
