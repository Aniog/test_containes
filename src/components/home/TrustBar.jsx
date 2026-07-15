const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic'
];

export default function TrustBar() {
  return (
    <section className="bg-[#1A1A1A] py-4 border-b border-[#333333]">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden md:block w-1 h-1 rounded-full bg-[#333333]" />
              )}
              <span className="text-xs md:text-sm text-[#A8A8A0] uppercase tracking-wider">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
