import { SlidersHorizontal } from 'lucide-react'

const MobileFilterBar = ({ count, onOpen }) => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-full border border-truffle/10 bg-white px-5 py-3 shadow-card lg:hidden">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-champagne">Refine</p>
        <p className="text-sm text-velvet">{count} pieces available</p>
      </div>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-truffle/10 px-4 py-2 text-sm text-velvet transition-colors duration-300 hover:border-champagne hover:text-champagne"
        onClick={onOpen}
      >
        <SlidersHorizontal className="h-4 w-4" />
        Filters
      </button>
    </div>
  )
}

export default MobileFilterBar
