export default function VariantSelector({ variants, selected, onChange }) {
  return (
    <div className="space-y-3">
      <p className="font-sans text-xs uppercase tracking-wider text-warm-gray">
        Tone: <span className="text-deep-base font-medium capitalize">{selected}</span>
      </p>
      <div className="flex gap-3">
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => onChange(variant.id)}
            className={`flex items-center gap-2 px-5 py-2.5 border transition-all duration-300 ${
              selected === variant.id
                ? 'border-gold-accent bg-gold-accent/10 text-deep-base'
                : 'border-warm-border text-warm-gray hover:border-gold-light'
            }`}
          >
            <span
              className="w-4 h-4 rounded-full border border-warm-border"
              style={{ backgroundColor: variant.color }}
            />
            <span className="font-sans text-xs uppercase tracking-wider">
              {variant.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
