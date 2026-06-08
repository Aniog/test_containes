import React from 'react';

const TargetRing = ({ size = 80 }) => {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex: 10 }}
    >
      <div
        className="target-ring"
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: '3px dashed rgba(255,255,255,0.9)',
          boxShadow: '0 0 12px 4px rgba(255,100,100,0.6), inset 0 0 12px 4px rgba(255,100,100,0.4)',
          animation: 'ringRotate 3s linear infinite, ringPulse 1.5s ease-in-out infinite',
          position: 'relative',
        }}
      >
        {/* Arrow indicators */}
        {[0, 90, 180, 270].map((deg) => (
          <div
            key={deg}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 10,
              height: 10,
              transform: `rotate(${deg}deg) translateY(-${size / 2 - 2}px) translateX(-50%)`,
              transformOrigin: '50% 50%',
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderBottom: '8px solid rgba(255,255,255,0.95)',
                filter: 'drop-shadow(0 0 3px rgba(255,80,80,0.8))',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TargetRing;
