const Price = ({ price, className = "" }) => (
  <span className={`font-serif text-lg tracking-wide text-stone-900 ${className}`}>
    ${price}
  </span>
);

export default Price;
