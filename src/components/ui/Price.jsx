export function Price({ price, originalPrice, className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-velmora-base font-medium">${price}</span>
      {originalPrice && (
        <span className="text-velmora-stone line-through text-sm">
          ${originalPrice}
        </span>
      )}
    </div>
  );
}
