import React from 'react'
import { Toaster as Sonner } from 'sonner'

export function Toaster() {
  return (
    <Sonner 
      position="top-center"
      className="toast"
      closeButton
      richColors
    />
  )
}