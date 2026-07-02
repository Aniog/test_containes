import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-stone-200 py-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm font-medium uppercase tracking-[0.28em] text-stone-900">
          {title}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-stone-500 transition duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">{content}</p>
      ) : null}
    </div>
  )
}

export default AccordionItem
