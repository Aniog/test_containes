export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-[#1A1A1A] text-[#FAF7F2] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && <span className="text-[#3D3D3D]">·</span>}
              <span className="text-xs tracking-wider uppercase">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}