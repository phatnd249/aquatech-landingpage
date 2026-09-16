import React from 'react';

export default function Container({ children, className = '', style = {} }) {
  return (
    <div
      className={`layout-container ${className}`}
      style={{
        width: '100%',
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        paddingLeft: '24px',
        paddingRight: '24px',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
