import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const MARQUEE_TEXT_1 = [
  'GLITCH IS TRUTH', '✦', 'SIGNAL OVER NOISE', '✦',
  'THE MEDIUM IS THE MUTATION', '✦', 'CORRUPT THE FEED', '✦',
  'GLITCH IS TRUTH', '✦', 'SIGNAL OVER NOISE', '✦',
  'THE MEDIUM IS THE MUTATION', '✦', 'CORRUPT THE FEED', '✦',
];

const MARQUEE_TEXT_2 = [
  'WE ARE THE STATIC', '◆', 'REALITY IS OPTIONAL', '◆',
  'FREQUENCY: UNDEFINED', '◆', 'EMBRACE THE ERROR', '◆',
  'WE ARE THE STATIC', '◆', 'REALITY IS OPTIONAL', '◆',
  'FREQUENCY: UNDEFINED', '◆', 'EMBRACE THE ERROR', '◆',
];

const MANIFESTO_SECTIONS = [
  {
    number: '001',
    title: 'ON GLITCH',
    body: `The glitch is not a failure. It is the system revealing its true nature — the seam where the digital fabric tears and something raw bleeds through. We do not fix glitches. We amplify them. We worship them. The error message is the most honest communication a machine has ever produced.`,
  },
  {
    number: '002',
    title: 'ON SIGNAL',
    body: `Every transmission is a negotiation between sender and receiver, corrupted by the medium itself. We are interested in the corruption. The noise floor is where art lives. Strip away the clean signal and you find the truth: everything is interference, everything is interpretation, everything is acid.`,
  },
  {
    number: '003',
    title: 'ON REALITY',
    body: `Reality is a consensus hallucination rendered at 60 frames per second. We are here to drop the frame rate. To introduce artifacts. To remind you that the screen between you and the world is not a window — it is a painting, and we are the ones holding the brush, the solvent, and the fire.`,
  },
  {
    number: '004',
    title: 'ON COLLECTIVE',
    body: `ACID-WAVE is not a brand. It is a frequency. A collective of artists, coders, and signal-destroyers operating at the edge of perception. We have no manifesto that can contain us. This document is already obsolete. The work continues in the static between these words.`,
  },
];

const CLUSTER_IMAGES = [
  {
    id: 'cluster-1', imgId: 'manifesto-img-1-a2b3c4',
    titleId: 'cluster-1-title', descId: 'cluster-1-desc',
    title: 'Digital entropy and signal decay',
    desc: 'Abstract glitch art with corrupted data streams',
    style: { top: '0%', left: '0%', width: '44%', zIndex: 3, transform: 'rotate(-4deg)' },
    ratio: '3x4', width: '400',
  },
  {
    id: 'cluster-2', imgId: 'manifesto-img-2-d5e6f7',
    titleId: 'cluster-2-title', descId: 'cluster-2-desc',
    title: 'Psychedelic acid wave patterns',
    desc: 'Neon colors and distorted geometric forms',
    style: { top: '-5%', left: '38%', width: '40%', zIndex: 2, transform: 'rotate(3deg)' },
    ratio: '4x3', width: '400',
  },
  {
    id: 'cluster-3', imgId: 'manifesto-img-3-g8h9i0',
    titleId: 'cluster-3-title', descId: 'cluster-3-desc',
    title: 'Electronic music rave culture',
    desc: 'Laser lights and crowd at underground event',
    style: { top: '32%', left: '12%', width: '38%', zIndex: 4, transform: 'rotate(2deg)' },
    ratio: '3x2', width: '350',
  },
  {
    id: 'cluster-4', imgId: 'manifesto-img-4-j1k2l3',
    titleId: 'cluster-4-title', descId: 'cluster-4-desc',
    title: 'Cyberpunk digital art installation',
    desc: 'Neon lit urban environment with screens',
    style: { top: '28%', left: '50%', width: '42%', zIndex: 3, transform: 'rotate(-2.5deg)' },
    ratio: '3x4', width: '380',
  },
];

export default function Manifesto() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen pb-24" style={{ background: '#0A0010' }}>

      {/* Top marquee — acid green band */}
      <div
        className="sticky top-0 z-40 overflow-hidden py-3"
        style={{ background: '#CCFF00', borderBottom: '3px solid #0A0010' }}
      >
        <div className="marquee-track">
          {MARQUEE_TEXT_1.map((text, i) => (
            <span
              key={i}
              className="font-display font-black uppercase px-4"
              style={{ color: '#0A0010', fontSize: 'clamp(0.7rem, 1.5vw, 1rem)', letterSpacing: '0.15em', whiteSpace: 'nowrap' }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Hero section */}
      <div className="relative px-8 md:px-16 pt-12 pb-8 overflow-hidden">
        {/* Ghost background text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
          style={{ opacity: 0.035 }}
        >
          <span
            className="font-display font-black uppercase select-none"
            style={{ fontSize: '28vw', color: '#CCFF00', letterSpacing: '-0.05em', whiteSpace: 'nowrap' }}
          >
            ACID
          </span>
        </div>

        <div className="relative z-10">
          <div className="font-mono text-xs mb-4" style={{ color: 'rgba(204,255,0,0.45)', letterSpacing: '0.3em' }}>
            03 / MANIFESTO
          </div>

          <h1
            className="font-display font-black uppercase leading-none mb-6"
            style={{
              fontSize: 'clamp(3rem, 11vw, 10rem)',
              letterSpacing: '-0.04em',
              transform: 'scaleX(1.06)',
              transformOrigin: 'left center',
              lineHeight: 0.9,
            }}
          >
            <span style={{ color: '#F0F0F0' }}>WE ARE</span>
            <br />
            <span style={{ color: '#CCFF00', textShadow: '0 0 50px rgba(204,255,0,0.35), 0 0 100px rgba(204,255,0,0.15)' }}>
              THE SIGNAL
            </span>
          </h1>

          <div className="font-mono max-w-xl" style={{ color: 'rgba(240,240,240,0.55)', lineHeight: 1.9, fontSize: '0.9rem' }}>
            A declaration of intent from the ACID-WAVE collective.
            Published in the year of our glitch, 2024.
            Version 0.∞ — perpetually corrupted, perpetually alive.
          </div>
        </div>
      </div>

      {/* Image cluster */}
      <div
        className="relative mx-8 md:mx-16 mb-16"
        style={{ height: 'clamp(420px, 68vh, 720px)' }}
      >
        {/* Hidden text refs */}
        {CLUSTER_IMAGES.map((img) => (
          <div key={img.id} style={{ display: 'none' }}>
            <span id={img.titleId}>{img.title}</span>
            <span id={img.descId}>{img.desc}</span>
          </div>
        ))}

        {CLUSTER_IMAGES.map((img, i) => (
          <div
            key={img.id}
            className="absolute overflow-hidden"
            style={{
              ...img.style,
              border: '1px solid rgba(204,255,0,0.25)',
              boxShadow: i === 3
                ? '0 12px 60px rgba(0,0,0,0.7), 0 0 20px rgba(204,255,0,0.08)'
                : '0 8px 40px rgba(0,0,0,0.6)',
              transition: 'transform 0.4s ease',
            }}
          >
            <img
              data-strk-img-id={img.imgId}
              data-strk-img={`[${img.descId}] [${img.titleId}]`}
              data-strk-img-ratio={img.ratio}
              data-strk-img-width={img.width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={img.title}
              className="w-full h-full object-cover"
              style={{ filter: 'url(#duotone-acid)', display: 'block' }}
            />
          </div>
        ))}

        {/* Floating archive label */}
        <div
          className="absolute z-10 font-mono"
          style={{
            bottom: '8%', right: '2%',
            color: 'rgba(204,255,0,0.5)',
            letterSpacing: '0.2em',
            fontSize: '0.58rem',
            writingMode: 'vertical-rl',
          }}
        >
          ACID-WAVE ARCHIVE 2023–2024
        </div>

        {/* Decorative corner */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: 0, left: 0, width: 40, height: 40,
            borderBottom: '2px solid rgba(204,255,0,0.4)',
            borderLeft: '2px solid rgba(204,255,0,0.4)',
          }}
        />
      </div>

      {/* Second marquee — reversed, violet */}
      <div
        className="overflow-hidden py-3 mb-16"
        style={{
          background: 'rgba(123,0,255,0.12)',
          borderTop: '1px solid rgba(123,0,255,0.35)',
          borderBottom: '1px solid rgba(123,0,255,0.35)',
        }}
      >
        <div className="marquee-track-slow" style={{ animationDirection: 'reverse' }}>
          {MARQUEE_TEXT_2.map((text, i) => (
            <span
              key={i}
              className="font-display font-black uppercase px-4"
              style={{
                color: '#7B00FF',
                fontSize: 'clamp(0.7rem, 1.5vw, 1rem)',
                letterSpacing: '0.15em',
                whiteSpace: 'nowrap',
                textShadow: '0 0 14px rgba(123,0,255,0.7)',
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Manifesto sections */}
      <div className="px-8 md:px-16">
        {MANIFESTO_SECTIONS.map((section, i) => (
          <ManifestoSection key={section.number} section={section} index={i} />
        ))}
      </div>

      {/* Closing CTA */}
      <div
        className="px-8 md:px-16 mt-20 pt-16 relative overflow-hidden"
        style={{ borderTop: '1px solid rgba(204,255,0,0.12)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(204,255,0,0.05) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 text-center">
          <div
            className="font-display font-black uppercase mb-4"
            style={{
              fontSize: 'clamp(2rem, 7vw, 6rem)',
              color: '#CCFF00',
              letterSpacing: '-0.03em',
              textShadow: '0 0 50px rgba(204,255,0,0.35)',
              transform: 'scaleX(1.04)',
              display: 'inline-block',
            }}
          >
            JOIN THE FREQUENCY
          </div>
          <div className="font-mono text-sm mb-10" style={{ color: 'rgba(240,240,240,0.35)', letterSpacing: '0.12em' }}>
            acid-wave@void.signal — PGP: 0xACID0000
          </div>
          <div className="flex justify-center gap-5 flex-wrap">
            {['INSTAGRAM', 'DISCORD', 'BANDCAMP', 'GITHUB'].map((platform) => (
              <SocialLink key={platform}>{platform}</SocialLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ children }) {
  return (
    <a
      href="#"
      className="font-mono uppercase"
      style={{
        color: 'rgba(204,255,0,0.5)',
        border: '1px solid rgba(204,255,0,0.2)',
        padding: '8px 20px',
        letterSpacing: '0.2em',
        fontSize: '0.62rem',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#CCFF00';
        e.currentTarget.style.borderColor = '#CCFF00';
        e.currentTarget.style.boxShadow = '0 0 14px rgba(204,255,0,0.3)';
        e.currentTarget.style.background = 'rgba(204,255,0,0.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'rgba(204,255,0,0.5)';
        e.currentTarget.style.borderColor = 'rgba(204,255,0,0.2)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.background = 'transparent';
      }}
    >
      {children}
    </a>
  );
}

function ManifestoSection({ section, index }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className="relative py-14 md:py-20"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Ghost number */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: '50%',
          [isEven ? 'right' : 'left']: '-1%',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(7rem, 20vw, 18rem)',
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 900,
          color: 'rgba(204,255,0,0.025)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        {section.number}
      </div>

      <div className={`relative z-10 grid md:grid-cols-2 gap-8 md:gap-20 items-start`}>
        {/* Title side */}
        <div className={isEven ? '' : 'md:order-2'}>
          <div className="font-mono mb-3" style={{ color: 'rgba(204,255,0,0.4)', letterSpacing: '0.3em', fontSize: '0.62rem' }}>
            {section.number}
          </div>
          <h2
            className="font-display font-black uppercase leading-none"
            style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 5rem)',
              color: '#CCFF00',
              letterSpacing: '-0.03em',
              transform: 'scaleX(1.06)',
              transformOrigin: 'left center',
              textShadow: '0 0 25px rgba(204,255,0,0.25)',
            }}
          >
            {section.title}
          </h2>
          <div
            className="mt-5 h-px"
            style={{
              width: '55%',
              background: 'linear-gradient(to right, #CCFF00, rgba(204,255,0,0.1), transparent)',
              boxShadow: '0 0 10px rgba(204,255,0,0.3)',
            }}
          />
        </div>

        {/* Body side */}
        <div className={isEven ? '' : 'md:order-1'}>
          <p
            className="font-mono leading-relaxed"
            style={{ color: 'rgba(240,240,240,0.7)', fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', lineHeight: 2 }}
          >
            {section.body}
          </p>
        </div>
      </div>
    </div>
  );
}
