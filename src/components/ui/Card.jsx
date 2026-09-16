import React from 'react';

export default function Card({
  children,
  glow = 'cyan',
  hoverable = true,
  padding = '28px',
  className = '',
  style = {},
  onClick,
}) {
  const glowColors = {
    cyan: 'var(--shadow-glow-cyan)',
    purple: 'var(--shadow-glow-purple)',
    emerald: 'var(--shadow-glow-emerald)',
    none: 'none',
  };

  const borderColors = {
    cyan: 'var(--border-default)',
    purple: 'var(--border-purple)',
    emerald: 'rgba(16, 185, 129, 0.25)',
    none: 'var(--border-subtle)',
  };

  const activeBorders = {
    cyan: 'var(--accent-sky)',
    purple: 'var(--accent-lavender)',
    emerald: 'var(--status-mint)',
    none: 'var(--border-default)',
  };

  return (
    <div
      className={`tech-card ${className}`}
      onClick={onClick}
      style={{
        background: 'var(--bg-surface)',
        backdropFilter: 'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        border: `1px solid ${borderColors[glow] || borderColors.cyan}`,
        borderRadius: 'var(--radius-lg)',
        padding: padding,
        boxShadow: 'var(--shadow-card)',
        transition: 'all var(--transition-normal)',
        position: 'relative',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!hoverable) return;
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = activeBorders[glow] || activeBorders.cyan;
        if (glow !== 'none') {
          e.currentTarget.style.boxShadow = `var(--shadow-card), ${glowColors[glow] || glowColors.cyan}`;
        }
      }}
      onMouseLeave={(e) => {
        if (!hoverable) return;
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = borderColors[glow] || borderColors.cyan;
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
      }}
    >
      {children}
    </div>
  );
}
