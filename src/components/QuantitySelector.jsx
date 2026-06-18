import React from 'react'

function QuantitySelector({ quantity, onDecrease, onIncrease }) {
  return (
    <div className="inline-flex items-center overflow-hidden rounded-full border border-stone-300 bg-stone-50 text-stone-900">
      <button
        type="button"
        className="px-4 py-3 text-lg transition hover:bg-stone-200"
        onClick={onDecrease}
      >
        −
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{quantity}</span>
      <button
        type="button"
        className="px-4 py-3 text-lg transition hover:bg-stone-200"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
