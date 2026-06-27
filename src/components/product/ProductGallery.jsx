import { useState } from "react";

const imageIds = [
  "1535632066927-ab7c9ab60908",
  "1599643478518-17477f983af0",
  "1635767798638-3e2523c0188b",
  "1617038224558-28ad3fb558a7",
];

export default function ProductGallery({ productId }) {
  const [active, setActive] = useState(0);
  // Use productId to rotate base image slightly per product
  const baseIdx = (productId - 1) % imageIds.length;
  const ids = [
    imageIds[baseIdx],
    imageIds[(baseIdx + 1) % imageIds.length],
    imageIds[(baseIdx + 2) % imageIds.length],
    imageIds[(baseIdx + 3) % imageIds.length],
  ];

  return (
    <div className="flex flex-col md:flex-row-reverse gap-3 md:gap-4">
      <div className="flex-1 aspect-square md:aspect-[4/5] bg-[#EAE5E0] rounded overflow-hidden">
        <img
          src={`https://images.unsplash.com/photo-${ids[active]}?w=900&q=80`}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible no-scrollbar">
        {ids.map((id, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded overflow-hidden border-2 transition-colors ${
              active === idx ? "border-[#B8966A]" : "border-transparent"
            }`}
          >
            <img
              src={`https://images.unsplash.com/photo-${id}?w=200&q=70`}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
