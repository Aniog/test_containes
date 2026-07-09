export default function VariantSelector({ variants, selected, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-sans text-xs tracking-[0.15em] uppercase text-text-secondary">
        Tone:
      </span>
      <div className="flex gap-2">
        {variants.map((variant) => (
          <button
            key={variant}
            onClick={() => onChange(variant)}
            className={`px-4 py-2 font-sans text-xs tracking-[0.15em] uppercase border transition-all duration-300 ${
              selected === variant
                ? 'border-gold bg-gold text-white'
                : 'border-border text-text-primary hover:border-gold'
            }`}
          >
            {variant}
          </button>
        ))}
      </div>
    </div>
  );
}
