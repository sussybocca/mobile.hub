import React from 'react';

export default function AppStore({ appStore, onInstall }) {
  return (
    <div style={{ padding: '16px', overflowY: 'auto' }}>
      <h2>App Store</h2>
      <div style={{ display: 'grid', gap: '12px' }}>
        {appStore.map((app) => (
          <div
            key={app.id}
            style={{
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>{app.name}</span>
            <button onClick={() => onInstall(app)}>Install</button>
          </div>
        ))}
      </div>
    </div>
  );
}
