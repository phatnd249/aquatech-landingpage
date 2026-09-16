import React from 'react';
import TechBadge from './TechBadge';

export default function SectionTitle({
  tag,
  title,
  subtitle,
  align = 'center',
  gradient = 'cyan',
  className = '',
  style = {},
}) {
  const gradientClass =
    gradient === 'purple'
      ? 'text-gradient-purple'
      : gradient === 'emerald'
      ? 'text-gradient-emerald'
      : 'text-gradient-cyan';

  const isCenter = align === 'center';

  return (
    <div
      className={`section-header-block ${className}`}
      style={{
        textAlign: isCenter ? 'center' : 'left',
        maxWidth: isCenter ? '820px' : '100%',
        margin: isCenter ? '0 auto 64px auto' : '0 0 48px 0',
        ...style,
      }}
    >
      {tag && (
        <div style={{ marginBottom: '14px' }}>
          <TechBadge color={gradient === 'purple' ? '#c084fc' : '#38bdf8'} variant="pill">
            {tag}
          </TechBadge>
        </div>
      )}

      {title && (
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: '800',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            marginBottom: '18px',
          }}
        >
          <span className={gradientClass}>{title}</span>
        </h2>
      )}

      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(15px, 1.8vw, 17px)',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            fontWeight: '400',
            margin: isCenter ? '0 auto' : '0',
            maxWidth: '680px',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
