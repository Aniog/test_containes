import { X } from "lucide-react"
import { categories, priceRanges, materials } from "@/data/products"
import { cn } from "@/lib/utils"

export function FilterSidebar({
  category, onCategory,
  price, onPrice,
  material, onMaterial,
  onClear,
  isOpen, onClose,
}) {
  const Group = ({ title, children }) => (
    <div className="flex flex-col gap-3 py-6 border-b border-line last:border-0">
      <h3 className="eyebrow text-cocoa-50">{title}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  )

  const Radio = ({ name, value, label, current, onSelect }) => {
    const active = current === value
    return (
      <button
        type="button"
        onClick={() => onSelect(value)}
        className={cn(
          "flex items-center gap-3 text-left text-sm py-1.5 transition-colors duration-300",
          active ? "text-cocoa" : "text-cocoa-100 hover:text-cocoa"
        )}
        aria-pressed={active}
      >
        <span
          className={cn(
            "w-3.5 h-3.5 rounded-full border transition-colors duration-300",
            active ? "border-cocoa bg-cocoa" : "border-line"
          )}
        />
        <span>{label}</span>
      </button>
    )
  }

  const content = (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="eyebrow text-cocoa">Refine</h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClear}
            className="text-[11px] tracking-widest2 uppercase text-cocoa-50 hover:text-cocoa"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="md:hidden p-1 text-cocoa-100 hover:text-cocoa"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <Group title="Category">
        {categories.map((c) => (
          <Radio key={c.id} name="cat" value={c.id} label={c.label}
                 current={category} onSelect={onCategory} />
        ))}
      </Group>
      <Group title="Price">
        {priceRanges.map((p) => (
          <Radio key={p.id} name="price" value={p.id} label={p.label}
                 current={price} onSelect={onPrice} />
        ))}
      </Group>
      <Group title="Material">
        {materials.map((m) => (
          <Radio key={m.id} name="material" value={m.id} label={m.label}
                 current={material} onSelect={onMaterial} />
        ))}
      </Group>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-60 flex-shrink-0">
        {content}
      </aside>
      {/* Mobile drawer */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "md:hidden fixed inset-0 z-[60] bg-cocoa/50 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />
      <aside
        className={cn(
          "md:hidden fixed top-0 left-0 z-[70] h-full w-[85%] max-w-sm bg-bone p-6 overflow-y-auto",
          "transform transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {content}
      </aside>
    </>
  )
}
