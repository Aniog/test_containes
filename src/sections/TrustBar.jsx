const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic",
  ];

  return (
    <div className="border-b border-stone-200 bg-[#fbfaf9]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 md:px-8">
        {items.map((item, i) => (
          <span
            key={i}
            className="text-center text-[11px] font-medium uppercase tracking-[0.18em] text-stone-600"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
