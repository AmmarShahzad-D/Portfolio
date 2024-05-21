import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: 'fixed', // Changed to fixed to ensure it covers the entire viewport
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden', // Ensure no scrollbars appear
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
