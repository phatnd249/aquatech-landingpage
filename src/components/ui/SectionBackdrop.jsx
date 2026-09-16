import React from 'react';

export default function SectionBackdrop({ reverse = false, variant = 'cyan' }) {
  const isPurple = variant === 'purple';

  return (
    <div
      className="section-backdrop"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {/* Dot Grid Matrix SVG */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.12,
        }}
      >
        <defs>
          <pattern
            id={`dot-grid-${reverse ? 'rev' : 'fwd'}`}
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" fill={isPurple ? '#a855f7' : '#38bdf8'} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dot-grid-${reverse ? 'rev' : 'fwd'})`} />
      </svg>

      {/* Radial Glow Orb 1 */}
      <div
        style={{
          position: 'absolute',
          top: reverse ? 'auto' : '-10%',
          bottom: reverse ? '-10%' : 'auto',
          left: reverse ? 'auto' : '-5%',
          right: reverse ? '-5%' : 'auto',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: isPurple
            ? 'radial-gradient(circle, rgba(138, 43, 226, 0.18) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(0, 242, 254, 0.16) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Radial Glow Orb 2 */}
      <div
        style={{
          position: 'absolute',
          top: reverse ? '20%' : 'auto',
          bottom: reverse ? 'auto' : '-15%',
          left: reverse ? '10%' : 'auto',
          right: reverse ? 'auto' : '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Ambient Flowing Light Wave (SVG) */}
      <svg
        viewBox="0 0 1440 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '140px',
          opacity: 0.18,
          transform: reverse ? 'scaleX(-1)' : 'none',
        }}
        preserveAspectRatio="none"
      >
        <path
          d="M0 160C240 220 480 80 720 150C960 220 1200 120 1440 180V280H0V160Z"
          fill="url(#ambient-wave-grad)"
        />
        <defs>
          <linearGradient id="ambient-wave-grad" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#00f2fe" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8a2be2" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
