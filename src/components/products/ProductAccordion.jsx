import { ChevronDown } from 'lucide-react'

const ProductAccordion = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-line py-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-ink">
          {item.label}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-ink-muted transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <p className="pt-4 text-sm leading-7 text-ink-muted">{item.content}</p>
      )}
    </div>
  )
}

export default ProductAccordion
