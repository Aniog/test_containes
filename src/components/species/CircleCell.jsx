const SIZE = 160; // SVG viewport size

export default function CircleCell({ species, onClick }) {
  const uid = `clip-${species.id}`;

  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-3 focus:outline-none"
      aria-label={`View ${species.name}`}
    >
      {/* SVG-masked circular image */}
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="overflow-visible"
        style={{ display: 'block' }}
      >
        <defs>
          <clipPath id={uid}>
            <circle cx={SIZE / 2} cy={SIZE / 2} r={SIZE / 2 - 2} />
          </clipPath>
        </defs>

        {/* Background fill */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={SIZE / 2 - 2}
          fill="#E8E0D0"
        />

        {/* Image clipped to circle */}
        <image
          href={species._resolvedSrc || ''}
          x={0}
          y={0}
          width={SIZE}
          height={SIZE}
          clipPath={`url(#${uid})`}
          preserveAspectRatio="xMidYMid slice"
          className="transition-transform duration-700 group-hover:scale-110 origin-center"
          style={{ transformOrigin: `${SIZE / 2}px ${SIZE / 2}px` }}
        />

        {/* Hover ring */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={SIZE / 2 - 2}
          fill="none"
          stroke="#7A9E7E"
          strokeWidth="1.5"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Hidden img for stock image system */}
        <foreignObject x={0} y={0} width={SIZE} height={SIZE} style={{ overflow: 'hidden', clipPath: `url(#${uid})` }}>
          <img
            data-strk-img-id={species.imgId}
            data-strk-img={`[${species.descId}] [${species.titleId}]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="320"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={species.name}
            style={{ width: SIZE, height: SIZE, objectFit: 'cover', display: 'block' }}
            onLoad={(e) => {
              // Mirror the resolved src into the SVG <image>
              const svgImg = e.target.closest('svg')?.querySelector('image');
              if (svgImg) svgImg.setAttribute('href', e.target.src);
            }}
          />
        </foreignObject>
      </svg>

      {/* Hidden text for image query interpolation */}
      <span id={species.titleId} className="sr-only">{species.name}</span>
      <span id={species.descId} className="sr-only">{species.description}</span>

      {/* Label */}
      <div className="text-center">
        <p className="font-serif text-sm font-light text-[#3D5C3A] leading-tight">{species.name}</p>
        <p className="font-serif italic text-xs text-[#8B7355] mt-0.5">{species.latin}</p>
      </div>
    </button>
  );
}
