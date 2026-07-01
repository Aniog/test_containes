const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <div className="border-y hairline-dark bg-ivory-50 text-espresso-200">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[rgba(168,130,80,0.2)]">
          {items.map((label, i) => (
            <li
              key={label}
              className={`py-4 sm:py-5 text-center text-[10px] sm:text-[11px] tracking-widest2 uppercase font-sans ${
                i % 2 === 0 ? "border-r md:border-r-0" : ""
              } ${i < 2 ? "border-b md:border-b-0" : ""} hairline-dark`}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
