import React, { useState } from 'react'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="accordion-header w-full text-left"
      >
        <span>{title}</span>
        <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </button>
      <div className={`accordion-content text-sm text-[var(--color-text-muted)] leading-relaxed ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default Accordion
