import { useEffect, useRef } from 'react';

export default function StarField({ count = 120 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 2.5 + 0.5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 3 + 2;
      const opacity = Math.random() * 0.7 + 0.1;

      star.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${Math.random() > 0.8 ? '#f5c842' : Math.random() > 0.5 ? '#7dd3fc' : '#f0f4ff'};
        opacity: ${opacity};
        animation: twinkle ${duration}s ease-in-out ${delay}s infinite;
        pointer-events: none;
      `;
      fragment.appendChild(star);
    }

    container.appendChild(fragment);
  }, [count]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
}
