export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="border-b border-subtle bg-background">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 md:px-8">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs uppercase tracking-brand text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
