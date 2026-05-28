import React from 'react'
import { cn } from '@/lib/utils'

export function Input({ label, error, className, id, required, ...props }) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-[#1A1A2E]">
          {label}{required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#1A1A2E] bg-white',
          'focus:outline-none focus:ring-2 focus:ring-[#4B2D8F] focus:border-transparent',
          'placeholder:text-gray-400 text-sm',
          error && 'border-red-400 focus:ring-red-400',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export function Select({ label, error, className, id, required, children, ...props }) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-[#1A1A2E]">
          {label}{required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        id={inputId}
        className={cn(
          'w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#1A1A2E] bg-white',
          'focus:outline-none focus:ring-2 focus:ring-[#4B2D8F] focus:border-transparent',
          'text-sm',
          error && 'border-red-400 focus:ring-red-400',
          className
        )}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export function Textarea({ label, error, className, id, required, ...props }) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-[#1A1A2E]">
          {label}{required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        id={inputId}
        className={cn(
          'w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#1A1A2E] bg-white',
          'focus:outline-none focus:ring-2 focus:ring-[#4B2D8F] focus:border-transparent',
          'placeholder:text-gray-400 text-sm resize-none',
          error && 'border-red-400 focus:ring-red-400',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
