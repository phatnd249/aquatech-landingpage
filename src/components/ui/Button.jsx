import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  onClick,
  icon: Icon,
  className = '',
  style = {},
  ...props
}) {
  const Component = as === 'a' ? 'a' : 'button';

  const sizeStyles = {
    sm: {
      padding: '8px 16px',
      fontSize: '13px',
      borderRadius: 'var(--radius-sm)',
    },
    md: {
      padding: '12px 24px',
      fontSize: '15px',
      borderRadius: 'var(--radius-md)',
    },
    lg: {
      padding: '16px 32px',
      fontSize: '16px',
      borderRadius: 'var(--radius-lg)',
    },
  };

  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #00f2fe 0%, #38bdf8 100%)',
      color: '#070c18',
      fontWeight: '700',
      border: 'none',
      boxShadow: '0 4px 20px rgba(0, 242, 254, 0.35)',
    },
    secondary: {
      background: 'rgba(30, 41, 59, 0.7)',
      color: '#f8fafc',
      fontWeight: '600',
      border: '1px solid var(--border-default)',
      backdropFilter: 'var(--glass-blur)',
    },
    outline: {
      background: 'transparent',
      color: '#38bdf8',
      fontWeight: '600',
      border: '1px solid rgba(56, 189, 248, 0.5)',
    },
    purple: {
      background: 'linear-gradient(135deg, #a855f7 0%, #8a2be2 100%)',
      color: '#ffffff',
      fontWeight: '700',
      border: 'none',
      boxShadow: '0 4px 20px rgba(168, 85, 247, 0.35)',
    },
    ghost: {
      background: 'transparent',
      color: '#94a3b8',
      fontWeight: '500',
      border: 'none',
    },
  };

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`ui-button ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        textDecoration: 'none',
        fontFamily: 'var(--font-heading)',
        letterSpacing: '0.01em',
        cursor: 'pointer',
        transition: 'all var(--transition-fast)',
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...style,
      }}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 28px rgba(0, 242, 254, 0.55)';
        } else if (variant === 'secondary') {
          e.currentTarget.style.borderColor = 'var(--accent-sky)';
          e.currentTarget.style.background = 'rgba(56, 189, 248, 0.12)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        } else if (variant === 'outline') {
          e.currentTarget.style.borderColor = 'var(--accent-cyan)';
          e.currentTarget.style.background = 'rgba(0, 242, 254, 0.1)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        } else if (variant === 'purple') {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 28px rgba(168, 85, 247, 0.6)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        if (variant === 'primary') {
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 242, 254, 0.35)';
        } else if (variant === 'secondary') {
          e.currentTarget.style.borderColor = 'var(--border-default)';
          e.currentTarget.style.background = 'rgba(30, 41, 59, 0.7)';
        } else if (variant === 'outline') {
          e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.5)';
          e.currentTarget.style.background = 'transparent';
        } else if (variant === 'purple') {
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(168, 85, 247, 0.35)';
        }
      }}
      {...props}
    >
      {children}
      {Icon && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
    </Component>
  );
}
