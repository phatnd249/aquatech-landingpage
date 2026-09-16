import React from 'react';

export default function TechBadge({
  children,
  color = '#38bdf8',
  icon: Icon,
  variant = 'glow',
  className = '',
  style = {},
}) {
  const isPill = variant === 'pill';

  return (
    <span
      className={`tech-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: isPill ? '4px 14px' : '3px 10px',
        borderRadius: isPill ? 'var(--radius-full)' : 'var(--radius-xs)',
        fontSize: '11px',
        fontWeight: '600',
        fontFamily: 'var(--font-mono)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        backgroundColor: `${color}15`,
        color: color,
        border: `1px solid ${color}40`,
        boxShadow: variant === 'glow' ? `0 0 12px ${color}25` : 'none',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {Icon && <Icon size={12} style={{ color }} />}
      {children}
    </span>
  );
}
