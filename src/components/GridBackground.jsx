import React from 'react';

/**
 * Grid Background – 7 fixed vertical lines dividing the viewport into 8 columns.
 * Positioned behind all content.
 */
export default function GridBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
      }}
    >
      {Array.from({ length: 8 }).map((_, i) => {
        // Draw borderRight on first 7 divisions, giving exactly 7 lines across 8 columns
        const hasBorder = i < 7;
        return (
          <div
            key={i}
            style={{
              borderRight: hasBorder ? '1px solid #1a1a1a' : 'none',
            }}
          />
        );
      })}
    </div>
  );
}
