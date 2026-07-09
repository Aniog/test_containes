const QuantitySelector = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div className="flex items-center rounded-full border border-truffle/15 bg-ivory text-velvet">
      <button
        type="button"
        aria-label="Decrease quantity"
        className="h-11 w-11 rounded-full text-xl text-truffle transition-colors duration-300 hover:text-velvet"
        onClick={onDecrease}
      >
        −
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{quantity}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="h-11 w-11 rounded-full text-xl text-truffle transition-colors duration-300 hover:text-velvet"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
