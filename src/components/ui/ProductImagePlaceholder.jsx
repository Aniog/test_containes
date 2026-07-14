// Elegant SVG placeholder for jewelry product images
export function ProductImagePlaceholder({ type = 'earring', className = '' }) {
  const svgContent = {
    earring: `
      <defs>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#D4B896"/>
          <stop offset="50%" style="stop-color:#C9A962"/>
          <stop offset="100%" style="stop-color:#A68A3D"/>
        </linearGradient>
        <linearGradient id="goldShine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#E8D5A3"/>
          <stop offset="100%" style="stop-color:#C9A962"/>
        </linearGradient>
      </defs>
      <circle cx="100" cy="60" r="20" fill="url(#goldShine)" opacity="0.9"/>
      <ellipse cx="100" cy="120" rx="35" ry="50" fill="url(#gold)" opacity="0.85"/>
      <ellipse cx="100" cy="110" rx="28" ry="40" fill="url(#goldShine)" opacity="0.4"/>
      <circle cx="100" cy="85" r="5" fill="#fff" opacity="0.6"/>
    `,
    necklace: `
      <defs>
        <linearGradient id="goldNeck" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#D4B896"/>
          <stop offset="50%" style="stop-color:#C9A962"/>
          <stop offset="100%" style="stop-color:#A68A3D"/>
        </linearGradient>
        <linearGradient id="crystal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#E8D5A3"/>
          <stop offset="100%" style="stop-color:#C9A962"/>
        </linearGradient>
      </defs>
      <path d="M 40 40 Q 100 80 160 40" stroke="url(#goldNeck)" stroke-width="3" fill="none"/>
      <path d="M 40 40 Q 100 100 160 40" stroke="url(#goldNeck)" stroke-width="2" fill="none" opacity="0.5"/>
      <ellipse cx="100" cy="130" rx="25" ry="35" fill="url(#crystal)" opacity="0.9"/>
      <polygon points="100,95 115,120 100,145 85,120" fill="url(#goldNeck)" opacity="0.7"/>
      <circle cx="100" cy="110" r="4" fill="#fff" opacity="0.7"/>
    `,
    huggie: `
      <defs>
        <linearGradient id="goldHoop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#E8D5A3"/>
          <stop offset="50%" style="stop-color:#C9A962"/>
          <stop offset="100%" style="stop-color:#A68A3D"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="50" ry="55" fill="none" stroke="url(#goldHoop)" stroke-width="18"/>
      <ellipse cx="100" cy="100" rx="50" ry="55" fill="none" stroke="url(#goldHoop)" stroke-width="12" opacity="0.5"/>
      <ellipse cx="85" cy="85" rx="15" ry="20" fill="#fff" opacity="0.15"/>
    `,
    set: `
      <defs>
        <linearGradient id="goldSet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#D4B896"/>
          <stop offset="50%" style="stop-color:#C9A962"/>
          <stop offset="100%" style="stop-color:#A68A3D"/>
        </linearGradient>
      </defs>
      <rect x="30" y="30" width="140" height="160" rx="4" fill="#1F1F1F" opacity="0.9"/>
      <rect x="35" y="35" width="130" height="150" rx="2" fill="none" stroke="url(#goldSet)" stroke-width="1"/>
      <text x="100" y="55" text-anchor="middle" fill="#C9A962" font-size="8" font-family="serif" letter-spacing="2">VELMORA</text>
      <ellipse cx="80" cy="100" rx="20" ry="22" fill="none" stroke="url(#goldSet)" stroke-width="8"/>
      <path d="M 55 130 Q 100 150 145 130" stroke="url(#goldSet)" stroke-width="2" fill="none"/>
      <ellipse cx="100" cy="150" rx="15" ry="20" fill="url(#goldSet)" opacity="0.7"/>
    `,
  };

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="200" fill="#1F1F1F"/>
      <g dangerouslySetInnerHTML={{ __html: svgContent[type] || svgContent.earring }} />
    </svg>
  );
}

export function HeroPlaceholder() {
  return (
    <svg
      viewBox="0 0 1600 900"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2D2D2D"/>
          <stop offset="100%" style="stop-color:#1F1F1F"/>
        </linearGradient>
        <linearGradient id="heroGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#D4B896"/>
          <stop offset="50%" style="stop-color:#C9A962"/>
          <stop offset="100%" style="stop-color:#A68A3D"/>
        </linearGradient>
        <radialGradient id="warmLight" cx="50%" cy="30%" r="60%">
          <stop offset="0%" style="stop-color:#D4B896;stop-opacity:0.3"/>
          <stop offset="100%" style="stop-color:#D4B896;stop-opacity:0"/>
        </radialGradient>
      </defs>
      
      <rect width="1600" height="900" fill="url(#heroBg)"/>
      <rect width="1600" height="900" fill="url(#warmLight)"/>
      
      {/* Abstract jewelry silhouettes */}
      <ellipse cx="600" cy="400" rx="80" ry="90" fill="none" stroke="url(#heroGold)" stroke-width="25" opacity="0.6"/>
      <ellipse cx="650" cy="380" rx="60" ry="70" fill="none" stroke="url(#heroGold)" stroke-width="15" opacity="0.4"/>
      
      <ellipse cx="1000" cy="450" rx="200" ry="250" fill="url(#heroGold)" opacity="0.15"/>
      <ellipse cx="1000" cy="420" rx="180" ry="220" fill="url(#heroGold)" opacity="0.1"/>
      
      {/* Scattered gold accents */}
      <circle cx="500" cy="300" r="15" fill="url(#heroGold)" opacity="0.5"/>
      <circle cx="1100" cy="350" r="10" fill="url(#heroGold)" opacity="0.4"/>
      <circle cx="900" cy="550" r="20" fill="url(#heroGold)" opacity="0.3"/>
    </svg>
  );
}

export function UGCPlaceholder({ index = 0 }) {
  const colors = ['#C9A962', '#D4B896', '#A68A3D', '#E8D5A3', '#8B7355'];
  const color = colors[index % colors.length];
  
  return (
    <svg
      viewBox="0 0 400 711"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`ugcBg${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1F1F1F"/>
          <stop offset="100%" style="stop-color:#2D2D2D"/>
        </linearGradient>
        <radialGradient id={`ugcLight${index}`} cx="50%" cy="40%" r="50%">
          <stop offset="0%" style={`stop-color:${color};stop-opacity:0.4`}/>
          <stop offset="100%" style="stop-color:#1F1F1F;stop-opacity:0"/>
        </radialGradient>
      </defs>
      
      <rect width="400" height="711" fill={`url(#ugcBg${index})`}/>
      <rect width="400" height="711" fill={`url(#ugcLight${index})`}/>
      
      {/* Jewelry detail */}
      <ellipse cx="200" cy="300" rx="60" ry="70" fill="none" stroke={color} stroke-width="12" opacity="0.7"/>
      <circle cx="200" cy="250" r="20" fill={color} opacity="0.5"/>
    </svg>
  );
}

export function CategoryPlaceholder({ category }) {
  const bgColors = {
    earrings: '#1F1F1F',
    necklaces: '#252525',
    huggies: '#1A1A1A',
  };
  
  return (
    <svg
      viewBox="0 0 600 800"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="800" fill={bgColors[category] || '#1F1F1F'}/>
      
      {category === 'earrings' && (
        <>
          <ellipse cx="300" cy="350" rx="40" ry="50" fill="#C9A962" opacity="0.4"/>
          <ellipse cx="300" cy="500" rx="50" ry="60" fill="none" stroke="#D4B896" stroke-width="15" opacity="0.5"/>
        </>
      )}
      
      {category === 'necklaces' && (
        <>
          <path d="M 200 300 Q 300 400 400 300" stroke="#C9A962" stroke-width="4" fill="none" opacity="0.5"/>
          <ellipse cx="300" cy="450" rx="60" ry="80" fill="#D4B896" opacity="0.3"/>
        </>
      )}
      
      {category === 'huggies' && (
        <>
          <ellipse cx="300" cy="400" rx="100" ry="110" fill="none" stroke="#C9A962" stroke-width="30" opacity="0.4"/>
          <ellipse cx="300" cy="400" rx="100" ry="110" fill="none" stroke="#D4B896" stroke-width="20" opacity="0.3"/>
        </>
      )}
    </svg>
  );
}

export function StoryPlaceholder() {
  return (
    <svg
      viewBox="0 0 800 1000"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="storyBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2A2A2A"/>
          <stop offset="100%" style="stop-color:#1F1F1F"/>
        </linearGradient>
      </defs>
      
      <rect width="800" height="1000" fill="url(#storyBg)"/>
      
      {/* Studio jewelry scene */}
      <rect x="100" y="150" width="250" height="250" rx="4" fill="#1A1A1A" opacity="0.5"/>
      <ellipse cx="225" cy="275" rx="80" ry="90" fill="none" stroke="#C9A962" stroke-width="20" opacity="0.4"/>
      
      <rect x="400" y="200" width="200" height="150" rx="4" fill="#1A1A1A" opacity="0.5"/>
      <ellipse cx="500" cy="275" rx="50" ry="55" fill="none" stroke="#D4B896" stroke-width="12" opacity="0.5"/>
      
      {/* Hands/jewelry display */}
      <ellipse cx="400" cy="600" rx="150" ry="200" fill="#C9A962" opacity="0.1"/>
      <ellipse cx="400" cy="580" rx="120" ry="160" fill="#D4B896" opacity="0.15"/>
    </svg>
  );
}

export default ProductImagePlaceholder;
