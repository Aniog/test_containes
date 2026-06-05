import React, { useState } from 'react'
import { strings } from '../lib/strings'
import { ChevronDownIcon, ChevronUpIcon } from './Icons'

const s = strings.en

function FaqItem({ item, index, isOpen, toggle }) {
  const id = `faq-answer-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <div className="border-b border-divider">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={() => toggle(index)}
        className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none cursor-pointer p-0 font-body"
      >
        <span className="font-heading font-bold text-heading-dark text-sm uppercase pr-4">
          {item.question}
        </span>
        <span className="flex-shrink-0" aria-hidden="true">
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </span>
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <p className="text-body-text text-sm leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="w-full py-10 md:py-16 bg-light-bg">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading font-bold text-heading text-2xl md:text-3xl uppercase mb-8">
          {s.faqHeading}
        </h2>
        <div className="max-w-2xl">
          {s.faqItems.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              toggle={toggle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
