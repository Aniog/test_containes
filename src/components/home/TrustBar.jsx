export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-[var(--color-deep-brown)] py-4">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-white"
            >
              {/* Checkmark Icon */}
              <svg
                className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-xs tracking-[0.1em] uppercase whitespace-nowrap">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}