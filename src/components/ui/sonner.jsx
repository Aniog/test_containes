'use client';

import * as React from "react"
import { X } from "lucide-react"

const ToasterContext = React.createContext(undefined)

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Toaster({ position = "bottom-right", ...props }) {
  return (
    <ToasterContext.Provider value={{ position }}>
      {/* Simplified toast implementation */}
      <div
        className="fixed z-[100] flex flex-col gap-2 w-full max-w-md"
        style={{
          bottom: position.includes("bottom") ? "1rem" : undefined,
          top: position.includes("top") ? "1rem" : undefined,
          right: position.includes("right") ? "1rem" : undefined,
          left: position.includes("left") ? "1rem" : undefined,
        }}
        {...props}
      />
    </ToasterContext.Provider>
  )
}

export function toast({ title, description, variant = "default", ...props }) {
  const id = Math.random().toString(36).substring(2, 9)
  
  // Create toast element
  const toastEl = document.createElement("div")
  toastEl.id = `toast-${id}`
  toastEl.className = cn(
    "bg-white border shadow-hover p-4 animate-slide-up flex items-start gap-3",
    variant === "default" && "border-taupe",
    variant === "success" && "border-gold"
  )
  
  toastEl.innerHTML = `
    <div class="flex-1">
      ${title ? `<p class="font-medium text-charcoal text-sm">${title}</p>` : ""}
      ${description ? `<p class="text-charcoal-light text-sm mt-1">${description}</p>` : ""}
    </div>
    <button class="text-charcoal-light hover:text-charcoal transition-colors" onclick="this.parentElement.remove()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  `
  
  // Append to toast container
  const container = document.querySelector('[class*="fixed z-\\[100\\]"]') || createToastContainer()
  container.appendChild(toastEl)
  
  // Auto-remove after 4 seconds
  setTimeout(() => {
    toastEl.style.opacity = "0"
    toastEl.style.transform = "translateY(10px)"
    toastEl.style.transition = "all 0.3s ease-out"
    setTimeout(() => toastEl.remove(), 300)
  }, 4000)
}

function createToastContainer() {
  const container = document.createElement("div")
  container.className = "fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-md"
  document.body.appendChild(container)
  return container
}
