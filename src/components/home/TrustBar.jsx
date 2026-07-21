export default function TrustBar() {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-[#1A1A1A] text-[#F5F2ED] py-4">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {items.map((item, index) => (
            <div key={item} className="flex items-center gap-2 text-sm">
              {index > 0 && <span className="text-[#C9A962]">·</span>}
              <span className="tracking-wide">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
