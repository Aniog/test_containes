import React from 'react'
import { cn } from '@/lib/utils'

const Toaster = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'fixed top-4 right-4 z-50 flex flex-col gap-2',
        className
      )}
      {...props}
    />
  )
}

const Toast = ({ id, title, description, action, variant = 'default', onClose }) => {
  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded-lg border border-[#E8E4DF] bg-white p-4 shadow-lg',
        'transform transition-all duration-300 ease-out',
        'animate-in slide-in-from-right-full'
      )}
      role="alert"
    >
      <div className="flex-1">
        {title && (
          <div className="font-serif text-sm font-semibold text-[#1C1917]">{title}</div>
        )}
        {description && (
          <div className="mt-1 text-sm text-[#78716C]">{description}</div>
        )}
      </div>
      {action && <div className="mt-1">{action}</div>}
      <button
        onClick={() => onClose?.(id)}
        className="text-[#A8A29E] hover:text-[#57534E] transition-colors"
        aria-label="Close"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

let toastId = 0
const toasts = new Map()

export const toast = {
  success: (title, description) => {
    const id = ++toastId
    toasts.set(id, { id, title, description, variant: 'success' })
    window.dispatchEvent(new CustomEvent('toast-update'))
    setTimeout(() => {
      toasts.delete(id)
      window.dispatchEvent(new CustomEvent('toast-update'))
    }, 4000)
  },
  error: (title, description) => {
    const id = ++toastId
    toasts.set(id, { id, title, description, variant: 'error' })
    window.dispatchEvent(new CustomEvent('toast-update'))
    setTimeout(() => {
      toasts.delete(id)
      window.dispatchEvent(new CustomEvent('toast-update'))
    }, 4000)
  }
}

export { Toaster, Toast }
