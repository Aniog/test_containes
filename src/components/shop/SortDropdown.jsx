import React from 'react'
import { ChevronDown } from 'lucide-react'

export default function SortDropdown({ value, options, onChange }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const containerRef = React.useRef(null)
  const selectedOption = options.find((option) => option.value === value) || options[0]

  React.useEffect(() => {
    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative min-w-[220px]">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex h-11 w-full items-center justify-between rounded-full border border-line bg-white px-4 text-xs font-medium uppercase tracking-[0.24em] text-noir outline-none transition hover:border-gold"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selectedOption.label}</span>
        <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-20 mt-3 w-full overflow-hidden rounded-[1.25rem] border border-line bg-cream p-2 shadow-[0_18px_45px_rgba(18,13,11,0.14)]">
          <div role="listbox" aria-label="Sort products" className="space-y-1">
            {options.map((option) => {
              const isSelected = option.value === value

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value)
                    setIsOpen(false)
                  }}
                  className={`flex w-full items-center rounded-full px-4 py-3 text-left text-[11px] uppercase tracking-[0.24em] transition ${
                    isSelected
                      ? 'bg-noir text-cream'
                      : 'bg-transparent text-noir hover:bg-stone'
                  }`}
                  aria-selected={isSelected}
                >
                  {option.label}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
