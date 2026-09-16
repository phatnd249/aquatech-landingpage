import React from 'react';
import SectionBackdrop from '../ui/SectionBackdrop';

export default function Section({
  id,
  children,
  className = '',
  hasBackdrop = true,
  backdropReverse = false,
  backdropVariant = 'cyan',
  style = {},
}) {
  return (
    <section
      id={id}
      className={`page-section ${className}`}
      style={{
        position: 'relative',
        paddingTop: '100px',
        paddingBottom: '100px',
        overflow: 'hidden',
        ...style,
      }}
    >
      {hasBackdrop && (
        <SectionBackdrop reverse={backdropReverse} variant={backdropVariant} />
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </section>
  );
}
