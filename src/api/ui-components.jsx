import React from 'react'

export function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-500 shadow-sm',
    secondary: 'bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-50 focus:ring-blue-500',
    outline: 'bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  }
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  return (
    <button className={`${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function Card({ children, className = '' }) {
  return <div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}>{children}</div>
}

export function CardContent({ children, className = '' }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${className}`}
      {...props}
    />
  )
}

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-y ${className}`}
      {...props}
    />
  )
}

export function Label({ children, className = '', ...props }) {
  return (
    <label className={`block text-sm font-medium text-gray-700 mb-1.5 ${className}`} {...props}>
      {children}
    </label>
  )
}

export function Separator({ className = '' }) {
  return <hr className={`border-t border-gray-200 ${className}`} />
}

export function Accordion({ children, className = '' }) {
  return <div className={`divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden ${className}`}>{children}</div>
}

export function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen)
  return (
    <div className="bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-900 font-medium hover:bg-gray-50 transition-colors"
      >
        <span>{title}</span>
        <svg className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="px-6 pb-4 text-gray-600">{children}</div>}
    </div>
  )
}