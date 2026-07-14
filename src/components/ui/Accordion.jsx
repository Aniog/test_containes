import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg text-stone-900">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-stone-500 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-stone-600 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="border-t border-stone-200">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}

export default Accordion
