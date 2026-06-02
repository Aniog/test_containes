// Hidden SVG filter definitions used globally
export default function SvgFilters() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      aria-hidden="true"
    >
      <defs>
        {/* Duotone: deep violet (#1A0033) + acid green (#CCFF00) */}
        <filter id="duotone-acid" colorInterpolationFilters="sRGB">
          {/* Step 1: desaturate */}
          <feColorMatrix
            type="saturate"
            values="0"
            result="gray"
          />
          {/* Step 2: map grays to duotone palette */}
          <feComponentTransfer result="duotone">
            {/* R channel: from 0.102 (dark) to 0.8 (light) */}
            <feFuncR type="table" tableValues="0.102 0.8" />
            {/* G channel: from 0.0 (dark) to 1.0 (light) */}
            <feFuncG type="table" tableValues="0.0 1.0" />
            {/* B channel: from 0.2 (dark) to 0.0 (light) */}
            <feFuncB type="table" tableValues="0.2 0.0" />
          </feComponentTransfer>
          {/* Step 3: boost contrast */}
          <feComponentTransfer>
            <feFuncR type="gamma" amplitude="1.2" exponent="0.9" offset="0" />
            <feFuncG type="gamma" amplitude="1.2" exponent="0.9" offset="0" />
            <feFuncB type="gamma" amplitude="1.2" exponent="0.9" offset="0" />
          </feComponentTransfer>
        </filter>

        {/* Glitch displacement filter */}
        <filter id="glitch-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02 0.8"
            numOctaves="1"
            seed="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="8"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Chromatic aberration */}
        <filter id="chromatic-aberration">
          <feOffset in="SourceGraphic" dx="3" dy="0" result="r" />
          <feOffset in="SourceGraphic" dx="-3" dy="0" result="b" />
          <feBlend in="r" in2="b" mode="screen" result="rb" />
          <feBlend in="rb" in2="SourceGraphic" mode="multiply" />
        </filter>
      </defs>
    </svg>
  );
}
