import React from 'react';

export default function NavButtons({ onHome, onStore, onStart, onRecent }) {
  return (
    <div
      style={{
        padding: '8px',
        display: 'flex',
        justifyContent: 'space-around',
        borderTop: '1px solid #ccc',
        backgroundColor: '#f0f0f0',
      }}
    >
      <button onClick={onHome}>Home</button>
      <button onClick={onStore}>App Store</button>
      <button onClick={onStart}>Start</button>
      <button onClick={onRecent}>Recent</button>
    </div>
  );
}
